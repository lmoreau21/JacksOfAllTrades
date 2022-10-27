import { Component, Prop, h, State } from '@stencil/core';
import { I18n } from '@aws-amplify/core';
import { Translations } from '../../common/Translations';
export class AmplifyPhotoPicker {
    constructor() {
        /** Title string value */
        this.headerTitle = Translations.PHOTO_PICKER_TITLE;
        /** Header Hint value in string */
        this.headerHint = Translations.PHOTO_PICKER_HINT;
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint = Translations.PHOTO_PICKER_PLACEHOLDER_HINT;
        /** Picker button text as string */
        this.buttonText = Translations.PHOTO_PICKER_BUTTON_TEXT;
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
        return (h("div", { class: "photo-picker-container" },
            h("amplify-section", null,
                h("div", { class: "header" }, I18n.get(this.headerTitle)),
                h("div", { class: "header-hint" }, I18n.get(this.headerHint)),
                h("amplify-picker", { acceptValue: 'image/*', inputHandler: this.handleInput },
                    h("div", { class: "picker-body", slot: "picker" }, this.previewState ? (h("img", { src: `${this.previewState}` })) : (h("amplify-icon", { name: "photoPlaceholder" })))),
                h("div", { class: "placeholder-hint" }, I18n.get(this.placeholderHint)),
                h("amplify-button", { handleButtonClick: () => this.handleClick(this.file) }, I18n.get(this.buttonText)))));
    }
    static get is() { return "amplify-photo-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-photo-picker.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-photo-picker.css"]
    }; }
    static get properties() { return {
        "headerTitle": {
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
                "text": "Title string value"
            },
            "attribute": "header-title",
            "reflect": false,
            "defaultValue": "Translations.PHOTO_PICKER_TITLE"
        },
        "headerHint": {
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
                "text": "Header Hint value in string"
            },
            "attribute": "header-hint",
            "reflect": false,
            "defaultValue": "Translations.PHOTO_PICKER_HINT"
        },
        "placeholderHint": {
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
                "text": "Placeholder hint that goes under the placeholder image"
            },
            "attribute": "placeholder-hint",
            "reflect": false,
            "defaultValue": "Translations.PHOTO_PICKER_PLACEHOLDER_HINT"
        },
        "buttonText": {
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
                "text": "Picker button text as string"
            },
            "attribute": "button-text",
            "reflect": false,
            "defaultValue": "Translations.PHOTO_PICKER_BUTTON_TEXT"
        },
        "previewSrc": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | object",
                "resolved": "object | string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Source of the image to be previewed"
            },
            "attribute": "preview-src",
            "reflect": false
        },
        "handleClick": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(file: File) => void",
                "resolved": "(file: File) => void",
                "references": {
                    "File": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Function that handles file pick onClick"
            },
            "defaultValue": "() => {}"
        }
    }; }
    static get states() { return {
        "previewState": {},
        "file": {}
    }; }
}