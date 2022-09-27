import { I18n } from '@aws-amplify/core';
import { Component, Prop, h } from '@stencil/core';
import { USERNAME_SUFFIX } from '../../common/constants';
import { Translations } from '../../common/Translations';
export class AmplifyUsernameField {
    constructor() {
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = USERNAME_SUFFIX;
        /** Used for the username label */
        this.label = Translations.USERNAME_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.USERNAME_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (h("amplify-form-field", { name: "username", fieldId: this.fieldId, label: I18n.get(this.label), placeholder: I18n.get(this.placeholder), required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled, hint: this.hint }));
    }
    static get is() { return "amplify-username-field"; }
    static get properties() { return {
        "fieldId": {
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
                "text": "Based on the type of field e.g. sign in, sign up, forgot password, etc."
            },
            "attribute": "field-id",
            "reflect": false,
            "defaultValue": "USERNAME_SUFFIX"
        },
        "label": {
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
                "text": "Used for the username label"
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "Translations.USERNAME_LABEL"
        },
        "placeholder": {
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
                "text": "Used for the placeholder label"
            },
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "Translations.USERNAME_PLACEHOLDER"
        },
        "required": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The required flag in order to make an input required prior to submitting a form"
            },
            "attribute": "required",
            "reflect": false,
            "defaultValue": "false"
        },
        "handleInputChange": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(inputEvent: Event) => void",
                "resolved": "(inputEvent: Event) => void",
                "references": {
                    "Event": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The callback, called when the input is modified by the user."
            }
        },
        "value": {
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
                "text": "The value of the content inside of the input field"
            },
            "attribute": "value",
            "reflect": false
        },
        "inputProps": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "object",
                "resolved": "object",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Attributes places on the input element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes"
            }
        },
        "disabled": {
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
                "text": "Will disable the input if set to true"
            },
            "attribute": "disabled",
            "reflect": false
        },
        "hint": {
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Used for the hint text that displays underneath the input field"
            },
            "attribute": "hint",
            "reflect": false
        }
    }; }
}
