'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d44143a.js');
const core = require('@aws-amplify/core');
require('@aws-amplify/auth');
const Translations = require('./Translations-5f4bb72c.js');

const amplifyPhotoPickerCss = ":host{--object-fit:cover;--hint-color:var(--amplify-grey);--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--header-hint-size:var(--amplify-text-md);--placeholder-hint-size:var(--amplify-text-sm);--placeholder-border-color:var(--amplify-grey)}.photo-picker-container{max-width:50rem}img{-o-object-fit:var(--object-fit);object-fit:var(--object-fit);width:100%;height:100%}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}.header{color:var(--header-color);font-size:var(--header-size);font-weight:bold;margin-bottom:24px}.header-hint{color:var(--hint-color);font-size:var(--header-hint-size);word-break:break-word;margin-bottom:24px}.picker-body{position:relative;width:25rem;height:16rem;border:2px dotted var(--placeholder-border-color);padding:10px;margin-bottom:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden}.placeholder-hint{color:var(--hint-color);font-family:Helvetica;font-style:italic;font-size:var(--placeholder-hint-size);word-break:break-word;margin-bottom:30px}";

const AmplifyPhotoPicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Title string value */
        this.headerTitle = Translations.Translations.PHOTO_PICKER_TITLE;
        /** Header Hint value in string */
        this.headerHint = Translations.Translations.PHOTO_PICKER_HINT;
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint = Translations.Translations.PHOTO_PICKER_PLACEHOLDER_HINT;
        /** Picker button text as string */
        this.buttonText = Translations.Translations.PHOTO_PICKER_BUTTON_TEXT;
        /** Function that handles file pick onClick */
        this.handleClick = () => { };
        this.handleInput = (ev) => {
            this.file = ev.target.files[0];
            const reader = new FileReader();
            reader.onload = (_e) => {
                const url = reader.result;
                this.previewState = url;
            };
            reader.readAsDataURL(this.file);
        };
    }
    componentWillLoad() {
        this.previewState = this.previewSrc;
    }
    render() {
        return (index.h("div", { class: "photo-picker-container" }, index.h("amplify-section", null, index.h("div", { class: "header" }, core.I18n.get(this.headerTitle)), index.h("div", { class: "header-hint" }, core.I18n.get(this.headerHint)), index.h("amplify-picker", { acceptValue: 'image/*', inputHandler: this.handleInput }, index.h("div", { class: "picker-body", slot: "picker" }, this.previewState ? (index.h("img", { src: `${this.previewState}` })) : (index.h("amplify-icon", { name: "photoPlaceholder" })))), index.h("div", { class: "placeholder-hint" }, core.I18n.get(this.placeholderHint)), index.h("amplify-button", { handleButtonClick: () => this.handleClick(this.file) }, core.I18n.get(this.buttonText)))));
    }
};
AmplifyPhotoPicker.style = amplifyPhotoPickerCss;

exports.amplify_photo_picker = AmplifyPhotoPicker;
