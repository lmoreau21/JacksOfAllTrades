import { Component, Prop, h, State, Host } from '@stencil/core';
import { Logger, I18n } from '@aws-amplify/core';
import { AccessLevel } from '../../common/types/storage-types';
import { calcKey, getStorageObject, putStorageObject, } from '../../common/storage-helpers';
import { Translations } from '../../common/Translations';
const logger = new Logger('S3ImagePicker');
export class AmplifyS3ImagePicker {
    constructor() {
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the image */
        this.level = AccessLevel.Public;
        /** Title string value */
        this.headerTitle = Translations.IMAGE_PICKER_TITLE;
        /** Header Hint value in string */
        this.headerHint = Translations.IMAGE_PICKER_HINT;
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint = Translations.IMAGE_PICKER_PLACEHOLDER_HINT;
        /** Upload Button Text as string */
        this.buttonText = Translations.IMAGE_PICKER_BUTTON_TEXT;
        this.handlePick = async (file) => {
            const { path = '', level, track, identityId, fileToKey } = this;
            const key = path + calcKey(file, fileToKey);
            try {
                await putStorageObject(key, file, level, track, file['type'], logger);
                this.src = await getStorageObject(key, level, track, identityId, logger);
            }
            catch (error) {
                logger.error(error);
                throw new Error(error);
            }
        };
    }
    render() {
        return (h(Host, null,
            h("slot", { name: "photo-picker" },
                h("amplify-photo-picker", { previewSrc: this.src, handleClick: this.handlePick, headerTitle: I18n.get(this.headerTitle), headerHint: I18n.get(this.headerHint), placeholderHint: I18n.get(this.placeholderHint), buttonText: I18n.get(this.buttonText) }))));
    }
    static get is() { return "amplify-s3-image-picker"; }
    static get properties() { return {
        "path": {
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
                "text": "String representing directory location to image file"
            },
            "attribute": "path",
            "reflect": false
        },
        "contentType": {
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
                "text": "The content type header used when uploading to S3"
            },
            "attribute": "content-type",
            "reflect": false,
            "defaultValue": "'binary/octet-stream'"
        },
        "level": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "AccessLevel",
                "resolved": "AccessLevel.Private | AccessLevel.Protected | AccessLevel.Public",
                "references": {
                    "AccessLevel": {
                        "location": "import",
                        "path": "../../common/types/storage-types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The access level of the image"
            },
            "attribute": "level",
            "reflect": false,
            "defaultValue": "AccessLevel.Public"
        },
        "track": {
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
                "text": "Whether or not to use track the get/put of the image"
            },
            "attribute": "track",
            "reflect": false
        },
        "identityId": {
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
                "text": "Cognito identity id of the another user's image"
            },
            "attribute": "identity-id",
            "reflect": false
        },
        "fileToKey": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(data: object) => string | string",
                "resolved": "(data: object) => string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Callback used to generate custom key value"
            }
        },
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
            "defaultValue": "Translations.IMAGE_PICKER_TITLE"
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
            "defaultValue": "Translations.IMAGE_PICKER_HINT"
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
            "defaultValue": "Translations.IMAGE_PICKER_PLACEHOLDER_HINT"
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
                "text": "Upload Button Text as string"
            },
            "attribute": "button-text",
            "reflect": false,
            "defaultValue": "Translations.IMAGE_PICKER_BUTTON_TEXT"
        }
    }; }
    static get states() { return {
        "src": {}
    }; }
}
