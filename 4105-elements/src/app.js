// import './style.css'
import viteLogo from '/vite.svg';
import wjElementsLogo from './assets/wj-elements.svg';
import { setupCounter } from './counter.js';
import { WJElement } from 'wj-elements';

class Elements extends WJElement {
    constructor() {
        super();

        this.counter = 0
    }

    draw() {
        let fragment = new DocumentFragment();
        let element = document.createElement("div");
        element.innerHTML = `<a href="https://vitejs.dev" target="_blank">
          <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://elements.webjet.sk" target="_blank">
          <img src="${wjElementsLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>`;

        let headline = document.createElement('h1');
        headline.innerHTML = 'Hello Vite!';

        let div = document.createElement('div');
        div.className = 'card';

        let button = document.createElement('button');
        button.id = 'counter';
        button.type = 'button';

        let p = document.createElement('p');
        p.className = 'read-the-docs';
        p.innerHTML = 'Click on the Vite logo to learn more';

        div.appendChild(button);
        // console.log(element.innerHTML)
        element.appendChild(headline);
        element.appendChild(div);
        element.appendChild(p);

        fragment.appendChild(element);

        this.button = button;

        return fragment;
    }
    afterDraw(context, element, options) {
        setupCounter(this.button);
    }
}

customElements.define('wja-elements', Elements);