import { Component, Prop, h } from '@stencil/core';
/**
 * @slot (default) - Label content
 */
export class AmplifyLabel {
    render() {
        return (h("label", { class: "label", htmlFor: this.htmlFor },
            h("slot", null)));
    }
    static get is() { return "amplify-label"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-label.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-label.css"]
    }; }
    static get properties() { return {
        "htmlFor": {
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
                "text": "Reflects the value of the for content property of html element"
            },
            "attribute": "html-for",
            "reflect": false
        }
    }; }
}