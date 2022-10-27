import { I18n } from '@aws-amplify/core';
import { Component, Prop, h } from '@stencil/core';
import { Translations } from '../../common/Translations';
import { PHONE_SUFFIX } from '../../common/constants';
export class AmplifyPhoneField {
    constructor() {
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = PHONE_SUFFIX;
        /** Used for the Phone label */
        this.label = Translations.PHONE_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.PHONE_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (h("div", null,
            h("amplify-form-field", { label: I18n.get(this.label), hint: this.hint },
                h("div", { class: "phone-field", slot: "input" },
                    h("amplify-country-dial-code", { dialCode: this.dialCode, handleInputChange: this.handleInputChange }),
                    h("amplify-input", { fieldId: this.fieldId, type: "tel", handleInputChange: this.handleInputChange, placeholder: I18n.get(this.placeholder), name: this.fieldId, value: this.value, inputProps: this.inputProps, disabled: this.disabled, required: this.required })))));
    }
    static get is() { return "amplify-phone-field"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-phone-field.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-phone-field.css"]
    }; }
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
            "defaultValue": "PHONE_SUFFIX"
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
                "text": "Used for the Phone label"
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "Translations.PHONE_LABEL"
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
            "defaultValue": "Translations.PHONE_PLACEHOLDER"
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
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Used as the hint in case you forgot your confirmation code, etc."
            },
            "attribute": "hint",
            "reflect": false
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
            "optional": false,
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
        "dialCode": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "string | number",
                "resolved": "number | string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Default dial code in the phone field"
            },
            "attribute": "dial-code",
            "reflect": false
        }
    }; }
}