import { Component, Element, Prop, h } from '@stencil/core';
export class AmplifySection {
    constructor() {
        /** Equivalent to html section role */
        this.role = 'application';
    }
    render() {
        return (h("section", { class: "section", role: this.role },
            h("slot", null)));
    }
    static get is() { return "amplify-section"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-section.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-section.css"]
    }; }
    static get properties() { return {
        "role": {
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
                "text": "Equivalent to html section role"
            },
            "attribute": "role",
            "reflect": false,
            "defaultValue": "'application'"
        }
    }; }
    static get elementRef() { return "el"; }
}