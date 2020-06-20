import {ActShadowElement} from "./act.js";
import { html } from './lit-html.js';
import "./router.js"

class NavFirst extends HTMLElement {
    connectedCallback() {
        this.innerText = "first";
    }
}
customElements.define("nav-first", NavFirst);

class NavSecond extends ActShadowElement {
    connectedCallback() {
        let online = 'https://admin.pqs-mobile.de/resources/master';
        let offline = 'test.json'; 

        fetch(offline,
            { mode: 'no-cors' })
            .then(response => response.json())
            .then(data => {
                let href = data._links.security[0].href;

                const template = html`URL: ${href}`;
                super.render(template);        
            });
    }
}
customElements.define("nav-second", NavSecond);




