# A simple modal library

## BIG NOTE
This is currently mainly used for my own development, also i am testing out how to publish packages on npm. 

## How to use:

- If using build tools such as webpack, gulp, grunt etc. and using ES6, simply import SimplyModal ie.

```js
import SimplyModal from 'simply-modal';

const modal = new SimplyModal({ options });

// Call open method to toggle modal
modal.open();

```

- If You want to import the minified version, already built (works in ie11 and all modern browsers), you can find the built code in ./build/scripts/bundle.js.

```js
const modal = new SimplyModal({ options });

// Call open method to toggle modal
modal.open();

```


- To develop, simply edit code in ./src and use guild to build the code. The file index.html has a very basic examples.

## Options

Currently just an object with two properties:

- element (required):
Pass in a selector, string or html markup ie. 

```html
    <div class="modal-content">
        <h1>Hello modal</h1>
    </div>

    <script>
        const modal = new SimplyModal({ element: '.modal-content' });

        // Call open method to toggle modal
        modal.open();
    </script>
```

- closeIcon (optional):
Pass in text or html to be used as the close icon.
For example you can pass in html of font awesome and that will be used as the icon.



