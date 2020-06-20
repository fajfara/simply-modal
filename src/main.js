import { bodyToggleNoScroll } from './helpers/noScroll';

/* eslint-disable class-methods-use-this */
export default class SimplyModal {
    constructor({ element, closeIcon }) {
        this.element = null;
        this.innerHtml = '';
        this.closeIcon = closeIcon;
        this.id = document.querySelectorAll('.simple-modal').length + 1;

        // If option is not provided, return
        if (!element) return;
        // Checks on init
        if (typeof element === 'string') {
            // Check if element is just a string/selector
            this.element = document.querySelector(element);
            if (!this.element) {
                // Means that element passed isn't a selector, just use this as inner text of modal
                this.innerHtml = element;
            } else {
                this.innerHtml = this.element.innerHTML;
            }
        } else if (element.nodeType) {
            this.innerHtml = element.innerHTML;
        }

        this.generateModal();
        this.generateCloseButton();
    }

    generateModal() {
        const closeButton = this.closeIcon ? `<button aria-label="Button that closes modal" id="close-modal-${this.id}">${this.closeIcon}</button>` : `<button id="close-modal-${this.id}">Close modal</button>`;
        const modalMarkup = `
            <div class="simple-modal" id="simple-modal-${this.id}">
                <div class="simple-modal__content">
                    ${closeButton}
                    ${this.innerHtml}
                </div>
            </div>
        `;
        // Check if simple modal stylesheet already generated
        if (!document.getElementById('simple-modal-styles')) this.generateStylesheet();

        this.modal = this.createElementFromHTML(modalMarkup);

        console.log(this.modal);
        

        this.modal.addEventListener('click', (e) => {
            if (e.target.id === `simple-modal-${this.id}`) {
                this.open();
            }
        });

        document.body.appendChild(this.modal);
    }

    generateStylesheet() {
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');
        const modalStyles = `
            .simple-modal {
                background: rgba(0, 0, 0, 0.5);
                display: none;
                height: 100vh;
                left: 0;
                position: fixed;
                top: 0;
                width: 100vw;
                z-index: 1000;
            }

            .simple-modal button {
                position: absolute;
                top: 0;
                right: 0;
                width: fit-content;
                z-index: 1000;
            }

            .simple-modal__content {
                max-width: 50%;
                position: relative;
            }

            .simple-modal__content *{
                width: 100%;
            }

            .simple-modal.open {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `;
        style.setAttribute('id', 'simple-modal-styles');
        head.appendChild(style);
        style.type = 'text/css';
        if (style.styleSheet) {
        // This is required for IE8 and below.
            style.styleSheet.cssText = modalStyles;
        } else {
            style.appendChild(document.createTextNode(modalStyles));
        }
    }

    generateCloseButton() {
        this.closeButton = document.getElementById(`close-modal-${this.id}`);
        this.closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.open();
        });
    }

    open() {
        this.modal.classList.toggle('open');
        bodyToggleNoScroll();
    }

    // eslint-disable-next-line class-methods-use-this
    createElementFromHTML(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }
}

window.SimplyModal = SimplyModal;