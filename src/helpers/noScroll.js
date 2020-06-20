export function getScrollbarWidth() {
    // source https://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
}

export function bodyToggleNoScroll() {
    const docHTML = document.querySelector('html');
    const docBody = document.querySelector('body');

    if (!docHTML.classList.contains('noscroll')) {
        docHTML.classList.toggle('noscroll');
        docBody.style.paddingRight = `${getScrollbarWidth()}px`;
    } else {
        docHTML.classList.toggle('noscroll');
        docBody.style.paddingRight = '';
    }
}