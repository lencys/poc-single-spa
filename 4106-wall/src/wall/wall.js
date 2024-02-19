import viteLogo from '/vite.svg';
import wjElementsLogo from '../assets/wj-elements.svg';
import { WJElement } from 'wj-elements';

class Wall extends WJElement {
    constructor() {
        super();
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
        headline.innerHTML = 'Hello Wall!';

        let div = document.createElement('div');
        div.className = 'card';

        let p = document.createElement('p');
        p.className = 'read-the-docs';
        p.innerHTML = 'Click on the Vite logo to learn more';

        element.appendChild(headline);
        element.appendChild(div);
        element.appendChild(p);

        fragment.appendChild(element);

        return fragment;
    }
}

customElements.define('wja-wall', Wall);