import { r as registerInstance, h, g as getElement } from './index-83f2275b.js';

const amplifyLinkCss = ":host{--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade)}.link{color:var(--link-color);cursor:pointer}.link:link{color:var(--link-color);text-decoration:none}.link:hover{color:var(--link-hover);text-decoration:underline}.link:active{color:var(--link-active);text-decoration:underline}";

const AmplifyLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** The link role is used to identify an element that creates a hyperlink to a resource that is in the application or external */
        this.role = 'navigation';
    }
    render() {
        return (h("a", { class: "link", role: this.role }, h("slot", null)));
    }
    get el() { return getElement(this); }
};
AmplifyLink.style = amplifyLinkCss;

export { AmplifyLink as amplify_link };
