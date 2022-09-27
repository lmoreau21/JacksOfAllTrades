'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d44143a.js');
require('@aws-amplify/core');
require('./auth-types-cd1f71d2.js');
require('@aws-amplify/auth');
require('./Translations-5f4bb72c.js');
require('./constants-1335fef8.js');
const helpers = require('./helpers-0d7ea2c5.js');

const amplifyGreetingsCss = ":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{display:-ms-flexbox;display:flex;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:0.625rem;font-family:var(--font-family);-ms-flex-pack:justify;justify-content:space-between}.nav{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center}.logo{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;justify-self:flex-start}amplify-sign-out{margin-left:1rem}";

const AmplifyGreetings = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Username displayed in the greetings */
        this.username = null;
        /** Logo displayed inside of the header */
        this.logo = null;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
    }
    render() {
        return (index.h("header", { class: "greetings" }, index.h("span", { class: "logo" }, index.h("slot", { name: "logo" }, this.logo && index.h("span", null, this.logo))), index.h("span", { class: "nav" }, index.h("slot", { name: "nav" }, index.h("amplify-nav", null, this.username && (index.h("slot", { name: "greetings-message" }, index.h("span", null, "Hello, ", this.username))), index.h("amplify-sign-out", { handleAuthStateChange: this.handleAuthStateChange }))))));
    }
};
AmplifyGreetings.style = amplifyGreetingsCss;

exports.amplify_greetings = AmplifyGreetings;
