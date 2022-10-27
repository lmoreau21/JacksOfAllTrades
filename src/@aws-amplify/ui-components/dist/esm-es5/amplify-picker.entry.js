import { r as registerInstance, h } from './index-83f2275b.js';
import { I18n } from '@aws-amplify/core';
import '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
var amplifyPickerCss = ".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}";
var AmplifyPicker = /** @class */ (function () {
    function AmplifyPicker(hostRef) {
        registerInstance(this, hostRef);
        /** Picker button text */
        this.pickerText = Translations.PICKER_TEXT;
        /** File input accept value */
        this.acceptValue = '*/*';
    }
    AmplifyPicker.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "picker" }, h("slot", { name: "picker" }, h("amplify-button", null, I18n.get(this.pickerText))), h("input", { title: I18n.get(this.pickerText), type: "file", accept: this.acceptValue, onChange: function (e) { return _this.inputHandler(e); } })));
    };
    return AmplifyPicker;
}());
AmplifyPicker.style = amplifyPickerCss;
export { AmplifyPicker as amplify_picker };