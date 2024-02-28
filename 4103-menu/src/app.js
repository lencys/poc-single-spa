// import style from './src/css/style.css';
class Menu extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <wj-menu-button id="close" content-id="sidebar">
                <wj-button variant="link" stop-propagation="false"><wj-icon name="x"></wj-icon></wj-button>
            </wj-menu-button>
            <wj-menu id="navigation" variant="nav" collapse active>
                <wj-menu-item>
                    <a href="/react" onclick="singleSpaNavigate(event)">React</a>
                    <wj-icon slot="start" name="brand-react"></wj-icon>
                </wj-menu-item>
                <wj-menu-item>
                    <a href="/vanilla" onclick="singleSpaNavigate(event)">Vanilla</a>
                    <wj-icon slot="start" name="brand-javascript"></wj-icon>
                </wj-menu-item>
                <wj-menu-item>
                    <a href="/vue" onclick="singleSpaNavigate(event)">Vue</a>
                    <wj-icon slot="start" name="brand-vue"></wj-icon>
                </wj-menu-item>
               
                <wj-menu-item>
                    <a href="/wall" onclick="singleSpaNavigate(event)">Wall</a>
                    <wj-icon slot="start" name="home"></wj-icon>
                </wj-menu-item>
            </wj-menu>
        `;
    }
}

customElements.get("wja-menu") || customElements.define('wja-menu', Menu);