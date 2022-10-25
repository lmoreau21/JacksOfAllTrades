'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d44143a.js');

const amplifyLinkCss = ":host{--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade)}.link{color:var(--link-color);cursor:pointer}.link:link{color:var(--link-color);text-decoration:none}.link:hover{color:var(--link-hover);text-decoration:underline}.link:active{color:var(--link-active);text-decoration:underline}";

const AmplifyLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The link role is used to identify an element that creates a hyperlink to a resource that is in the application or external */
        this.role = 'navigation';
    }
    render() {
        return (index.h("a", { class: "link", role: this.role }, index.h("slot", null)));
    }
    get el() { return index.getElement(this); }
};
AmplifyLink.style = amplifyLinkCss;

exports.amplify_link = AmplifyLink;
