import { Component, Prop, h } from '@stencil/core';
/**
 * @slot (default) - Content placed inside the toast. If `message` prop is already set, then this content will be displayed to the right of the `message`.
 */
export class AmplifyToast {
    constructor() {
        /** Message to be displayed inside the toast*/
        this.message = '';
    }
    /*
  TODO #170365145: Work on a helper function that will populate and
  update class colors for success / warning / failure messages
  */
    render() {
        return (h("div", { class: "toast" },
            h("amplify-icon", { class: "toast-icon", name: "warning" }),
            this.message ? h("span", null, this.message) : null,
            h("slot", null),
            h("button", { class: "toast-close", onClick: this.handleClose })));
    }
    static get is() { return "amplify-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-toast.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-toast.css"]
    }; }
    static get properties() { return {
        "handleClose": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "() => void",
                "resolved": "() => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Used in order to add a dismissable `x` for the Toast component"
            }
        },
        "message": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Message to be displayed inside the toast"
            },
            "attribute": "message",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
}