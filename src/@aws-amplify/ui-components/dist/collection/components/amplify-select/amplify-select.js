import { Component, Prop, h, Watch } from '@stencil/core';
import { Logger } from '@aws-amplify/core';
const DEFAULT_SELECT_OPTION = [{ label: '', value: 1 }];
const logger = new Logger('amplify-select');
export class AmplifySelect {
    constructor() {
        /** The options of the select input. Must be an Array of Objects with an Object shape of {label: string, value: string|number} */
        this.options = DEFAULT_SELECT_OPTION;
    }
    componentWillLoad() {
        this.selectOptions = this.contructSelectOptions(this.options);
    }
    handleSelectOptionsChange() {
        this.selectOptions = this.contructSelectOptions(this.options);
    }
    isSelectedOptionValid(selected) {
        if (selected && !this.options.some(option => option.value === selected)) {
            logger.warn('Selected option does not exist in options values, falling back to initial option');
            return false;
        }
        return true;
    }
    contructSelectOptions(opts) {
        this.isSelectedOptionValid(this.selected);
        const content = [];
        opts.forEach((opt) => {
            content.push(h("option", { value: opt.value, selected: opt.value === this.selected }, opt.label));
        });
        return content;
    }
    render() {
        return (h("select", { name: this.fieldId, id: this.fieldId, class: "select", onChange: this.handleInputChange }, this.selectOptions));
    }
    static get is() { return "amplify-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-select.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-select.css"]
    }; }
    static get properties() { return {
        "options": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "| SelectOptionsString\n\t\t| SelectOptionsNumber",
                "resolved": "SelectOptions<number> | SelectOptions<string>",
                "references": {
                    "SelectOptionsString": {
                        "location": "import",
                        "path": "./amplify-select-interface"
                    },
                    "SelectOptionsNumber": {
                        "location": "import",
                        "path": "./amplify-select-interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The options of the select input. Must be an Array of Objects with an Object shape of {label: string, value: string|number}"
            },
            "defaultValue": "DEFAULT_SELECT_OPTION"
        },
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
                "text": "Used for id field"
            },
            "attribute": "field-id",
            "reflect": false
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
                "text": "The callback, called when the select is modified by the user."
            }
        },
        "selected": {
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
                "text": "Default selected option"
            },
            "attribute": "selected",
            "reflect": false
        }
    }; }
    static get watchers() { return [{
            "propName": "options",
            "methodName": "handleSelectOptionsChange"
        }, {
            "propName": "selected",
            "methodName": "handleSelectOptionsChange"
        }]; }
}