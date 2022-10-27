import { r as registerInstance, h, H as Host, g as getElement } from './index-83f2275b.js';

const amplifyButtonCss = "amplify-button{--background-color:var(--amplify-primary-color);--background-color-active:var(--amplify-primary-shade);--background-color-disable:var(--amplify-primary-tint);--color:var(--amplify-primary-contrast);--border-width:0;--border-color:initial;--border-style:initial;--border-radius:initial;--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade);--text-transform:uppercase;--icon-fill:var(--amplify-white);--icon-height:1.25rem;--padding:1rem;--width:100%;width:var(--width);text-align:center}@media (min-width: 672px){amplify-button{width:inherit}}.button{width:100%;min-width:153px;display:inline-block;margin-bottom:0;font-size:var(--amplify-text-sm);font-family:var(--amplify-font-family);font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--color);padding:var(--padding);letter-spacing:0.75px;text-transform:var(--text-transform);background-color:var(--background-color);border-width:var(--border-width);border-color:var(--border-color);border-style:var(--border-style);border-radius:var(--border-radius)}.button:active{opacity:1;background-color:var(--background-color-active)}.button:hover{opacity:0.8}.button:disabled{opacity:0.65;cursor:auto;background-color:var(--background-color-disable)}.icon{background-color:inherit;border:none;font:inherit;cursor:pointer;padding:var(--padding)}.icon amplify-icon{--icon-fill-color:var(--icon-fill);--height:var(--icon-height)}.anchor{color:var(--link-color);background-color:inherit;padding:0;border:none;font:inherit;cursor:pointer}.anchor:link{color:var(--link-color);text-decoration:none}.anchor:hover{color:var(--link-hover);text-decoration:underline}.anchor:active{color:var(--link-active);text-decoration:underline}";

const AmplifyButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Type of the button: 'button', 'submit' or 'reset' */
        this.type = 'button';
        /** Variant of a button: 'button' | 'anchor | 'icon' */
        this.variant = 'button';
        /** Disabled state of the button */
        this.disabled = false;
    }
    render() {
        return (h(Host, null, h("button", { class: {
                [this.variant]: true,
            }, type: this.type, disabled: this.disabled, onClick: this.handleButtonClick }, this.variant === 'icon' && (h("amplify-icon", { name: this.icon })), h("slot", null))));
    }
    get el() { return getElement(this); }
};
AmplifyButton.style = amplifyButtonCss;

const amplifyLoadingSpinnerCss = ":host{--spinner-circle-fill:var(--amplify-smoke-white);--spinner-bar-fill:var(--amplify-primary-color);--width:0.875rem;--height:0.875rem}.loading-spinner svg{-webkit-animation:loading-spinner 1s linear infinite;animation:loading-spinner 1s linear infinite;width:var(--width);height:var(--height)}.loading-spinner svg #spinner-circle{fill:var(--spinner-circle-fill)}.loading-spinner svg #spinner-bar{fill:var(--spinner-bar-fill)}@-webkit-keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const AmplifyLoadingSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("amplify-icon", { class: "loading-spinner", name: "loading" });
    }
};
AmplifyLoadingSpinner.style = amplifyLoadingSpinnerCss;

const amplifySectionCss = "amplify-section{--font-family:var(--amplify-font-family);--background-color:var(--amplify-background-color)}.section{position:relative;margin-bottom:var(--margin-bottom, 20px);background-color:var(--background-color);padding:var(--padding, 35px 40px);text-align:left;display:inline-block;border-radius:var(--border-radius, 6px);-webkit-box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family);width:100%;min-width:var(--min-width, 20rem)}@media (min-width: 672px){.section{width:var(--width, 28.75rem)}}";

const AmplifySection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Equivalent to html section role */
        this.role = 'application';
    }
    render() {
        return (h("section", { class: "section", role: this.role }, h("slot", null)));
    }
    get el() { return getElement(this); }
};
AmplifySection.style = amplifySectionCss;

export { AmplifyButton as amplify_button, AmplifyLoadingSpinner as amplify_loading_spinner, AmplifySection as amplify_section };