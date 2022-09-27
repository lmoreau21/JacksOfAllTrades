'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d44143a.js');

const amplifyCheckboxCss = ":host{--font-family:var(--amplify-font-family)}.checkbox{margin-bottom:22px;display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.checkbox input{margin-right:12px}";

const AmplifyCheckbox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** If `true`, the checkbox is selected. */
        this.checked = false;
        /** If `true`, the checkbox is disabled */
        this.disabled = false;
        this.onClick = () => {
            this.checked = !this.checked;
        };
    }
    render() {
        return (index.h("span", { class: "checkbox" }, index.h("input", { onClick: this.onClick, type: "checkbox", name: this.name, value: this.value, id: this.fieldId, checked: this.checked, disabled: this.disabled }), index.h("amplify-label", { htmlFor: this.fieldId }, this.label)));
    }
};
AmplifyCheckbox.style = amplifyCheckboxCss;

exports.amplify_checkbox = AmplifyCheckbox;
