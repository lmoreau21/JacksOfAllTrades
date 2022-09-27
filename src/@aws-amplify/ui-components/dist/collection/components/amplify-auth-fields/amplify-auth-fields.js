import { Component, Prop, h } from '@stencil/core';
import componentFieldMapping from './component-field-mapping';
export class AmplifyAuthFields {
    constructFormFieldOptions(formFields) {
        const content = [];
        if (formFields === undefined)
            return '';
        formFields.forEach((formField) => {
            if (typeof formField === 'string') {
                content.push(componentFieldMapping[formField](formField));
            }
            else if (Object.keys(componentFieldMapping).includes(formField.type)) {
                content.push(componentFieldMapping[formField.type](formField));
            }
            else {
                content.push(componentFieldMapping['default'](formField));
            }
        });
        return content;
    }
    render() {
        return (h("div", { class: "auth-fields" }, this.constructFormFieldOptions(this.formFields)));
    }
    static get is() { return "amplify-auth-fields"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-auth-fields.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-auth-fields.css"]
    }; }
    static get properties() { return {
        "formFields": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "FormFieldTypes | string[]",
                "resolved": "FormFieldTypes | string[]",
                "references": {
                    "FormFieldTypes": {
                        "location": "import",
                        "path": "./amplify-auth-fields-interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.\nby passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing\ntext for a label or adjust a placeholder, you can follow the structure below in order to do just that.\n```\n[\n  {\n    type: string,\n    label: string,\n    placeholder: string,\n    hint: string | Functional Component | null,\n    required: boolean\n  }\n]\n```"
            }
        }
    }; }
}
