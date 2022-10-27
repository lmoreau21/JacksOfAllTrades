'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d44143a.js');
const core = require('@aws-amplify/core');
require('@aws-amplify/auth');
const Translations = require('./Translations-5f4bb72c.js');

const amplifyPickerCss = ".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}";

const AmplifyPicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Picker button text */
        this.pickerText = Translations.Translations.PICKER_TEXT;
        /** File input accept value */
        this.acceptValue = '*/*';
    }
    render() {
        return (index.h("div", { class: "picker" }, index.h("slot", { name: "picker" }, index.h("amplify-button", null, core.I18n.get(this.pickerText))), index.h("input", { title: core.I18n.get(this.pickerText), type: "file", accept: this.acceptValue, onChange: e => this.inputHandler(e) })));
    }
};
AmplifyPicker.style = amplifyPickerCss;

exports.amplify_picker = AmplifyPicker;