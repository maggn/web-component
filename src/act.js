import { html, render } from './lit-html.js';
export class ActShadowElement extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
    }

    render(tpl) {
        render(tpl, this.root);
    }

}

class Message extends HTMLElement {

    connectedCallback() {
        console.log("att:" + this.getAttribute("xxx"));
        this.innerHTML = `<h2>my nice header</h2>`;
    }

}
customElements.define("act-message", Message);


class ActNav extends ActShadowElement {

    connectedCallback() {
        let href = this.getAttribute("href");
        let text = this.innerHTML;

        const template = html`<a href="${href}">${text}</a>`;
        super.render(template);
    }

}
customElements.define("act-nav", ActNav);
