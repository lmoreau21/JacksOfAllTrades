import { r as registerInstance, h } from './index-83f2275b.js';
import { I18n } from '@aws-amplify/core';
import '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
var amplifyPhotoPickerCss = ":host{--object-fit:cover;--hint-color:var(--amplify-grey);--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--header-hint-size:var(--amplify-text-md);--placeholder-hint-size:var(--amplify-text-sm);--placeholder-border-color:var(--amplify-grey)}.photo-picker-container{max-width:50rem}img{-o-object-fit:var(--object-fit);object-fit:var(--object-fit);width:100%;height:100%}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}.header{color:var(--header-color);font-size:var(--header-size);font-weight:bold;margin-bottom:24px}.header-hint{color:var(--hint-color);font-size:var(--header-hint-size);word-break:break-word;margin-bottom:24px}.picker-body{position:relative;width:25rem;height:16rem;border:2px dotted var(--placeholder-border-color);padding:10px;margin-bottom:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden}.placeholder-hint{color:var(--hint-color);font-family:Helvetica;font-style:italic;font-size:var(--placeholder-hint-size);word-break:break-word;margin-bottom:30px}";
var AmplifyPhotoPicker = /** @class */ (function () {
    function AmplifyPhotoPicker(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /** Title string value */
        this.headerTitle = Translations.PHOTO_PICKER_TITLE;
        /** Header Hint value in string */
        this.headerHint = Translations.PHOTO_PICKER_HINT;
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint = Translations.PHOTO_PICKER_PLACEHOLDER_HINT;
        /** Picker button text as string */
        this.buttonText = Translations.PHOTO_PICKER_BUTTON_TEXT;
        /** Function that handles file pick onClick */
        this.handleClick = function () { };
        this.handleInput = function (ev) {
            _this.file = ev.target.files[0];
            var reader = new FileReader();
            reader.onload = function (_e) {
                var url = reader.result;
                _this.previewState = url;
            };
            reader.readAsDataURL(_this.file);
        };
    }
    AmplifyPhotoPicker.prototype.componentWillLoad = function () {
        this.previewState = this.previewSrc;
    };
    AmplifyPhotoPicker.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "photo-picker-container" }, h("amplify-section", null, h("div", { class: "header" }, I18n.get(this.headerTitle)), h("div", { class: "header-hint" }, I18n.get(this.headerHint)), h("amplify-picker", { acceptValue: 'image/*', inputHandler: this.handleInput }, h("div", { class: "picker-body", slot: "picker" }, this.previewState ? (h("img", { src: "" + this.previewState })) : (h("amplify-icon", { name: "photoPlaceholder" })))), h("div", { class: "placeholder-hint" }, I18n.get(this.placeholderHint)), h("amplify-button", { handleButtonClick: function () { return _this.handleClick(_this.file); } }, I18n.get(this.buttonText)))));
    };
    return AmplifyPhotoPicker;
}());
AmplifyPhotoPicker.style = amplifyPhotoPickerCss;
export { AmplifyPhotoPicker as amplify_photo_picker };
