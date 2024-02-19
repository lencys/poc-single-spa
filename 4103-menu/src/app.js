// import style from './src/css/style.css';
class Menu extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <a href="/react" onclick="singleSpaNavigate(event)">React</a> |
            <a href="/vanilla" onclick="singleSpaNavigate(event)">Vanilla</a> |
            <a href="/vue" onclick="singleSpaNavigate(event)">Vue</a> | 
            <a href="/elements" onclick="singleSpaNavigate(event)">Elements</a> |
            <a href="/wall" onclick="singleSpaNavigate(event)">Wall</a>
        `;
    }
}

customElements.get("wja-menu") || customElements.define('wja-menu', Menu);