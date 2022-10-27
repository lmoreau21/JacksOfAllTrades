import { Component, Prop, h, Listen } from '@stencil/core';
/**
 * @slot amplify-form-section-header - Content for the header section
 * @slot subtitle - Content for the subtitle. This is inside of `amplify-form-section-header`.
 * @slot amplify-form-section-footer - Content for the footer section.
 */
export class AmplifyFormSection {
    constructor() {
        /** (Optional) Used as a the default value within the default footer slot */
        this.submitButtonText = 'Submit';
        /** String prefix for the data-test attributes in this component primarily used for testing purposes */
        this.testDataPrefix = 'form-section';
        /** Loading state for the form */
        this.loading = false;
        /** Secondary footer component or text */
        this.secondaryFooterContent = null;
    }
    // eslint-disable-next-line
    handleFormSubmit(ev) {
        this.handleSubmit(ev.detail);
    }
    render() {
        return (h("form", { onSubmit: this.handleSubmit },
            h("amplify-section", null,
                h("div", null,
                    h("slot", { name: "amplify-form-section-header" },
                        h("div", { class: "form-section-header" },
                            h("h3", { class: "header", "data-test": this.testDataPrefix + '-header-section' }, this.headerText),
                            h("div", { class: "subtitle" },
                                h("slot", { name: "subtitle" }))))),
                h("slot", null),
                h("div", null,
                    h("slot", { name: "amplify-form-section-footer" },
                        h("div", { class: "form-section-footer" },
                            h("amplify-button", { type: "submit", "data-test": this.testDataPrefix + '-' + this.testDataPrefix + '-button' }, this.loading ? (h("amplify-loading-spinner", null)) : (h("span", null, this.submitButtonText))),
                            this.secondaryFooterContent))))));
    }
    static get is() { return "amplify-form-section"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-form-section.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-form-section.css"]
    }; }
    static get properties() { return {
        "handleSubmit": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(event: Event) => void",
                "resolved": "(event: Event) => void",
                "references": {
                    "Event": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "(Required) Function called upon submission of form"
            }
        },
        "submitButtonText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "(Optional) Used as a the default value within the default footer slot"
            },
            "attribute": "submit-button-text",
            "reflect": false,
            "defaultValue": "'Submit'"
        },
        "headerText": {
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
                "text": "Used for form section header"
            },
            "attribute": "header-text",
            "reflect": false
        },
        "testDataPrefix": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "String prefix for the data-test attributes in this component primarily used for testing purposes"
            },
            "attribute": "test-data-prefix",
            "reflect": false,
            "defaultValue": "'form-section'"
        },
        "loading": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Loading state for the form"
            },
            "attribute": "loading",
            "reflect": false,
            "defaultValue": "false"
        },
        "secondaryFooterContent": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | FunctionalComponent | null",
                "resolved": "FunctionalComponent<{}> | string",
                "references": {
                    "FunctionalComponent": {
                        "location": "import",
                        "path": "@stencil/core"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Secondary footer component or text"
            },
            "attribute": "secondary-footer-content",
            "reflect": false,
            "defaultValue": "null"
        }
    }; }
    static get listeners() { return [{
            "name": "formSubmit",
            "method": "handleFormSubmit",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}