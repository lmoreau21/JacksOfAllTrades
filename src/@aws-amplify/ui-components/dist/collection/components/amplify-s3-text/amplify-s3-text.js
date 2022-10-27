import { Component, Prop, h, State, Watch } from '@stencil/core';
import { Logger, I18n } from '@aws-amplify/core';
import { AccessLevel } from '../../common/types/storage-types';
import { getTextSource, putStorageObject } from '../../common/storage-helpers';
import { Translations } from '../../common/Translations';
const logger = new Logger('S3Text');
export class AmplifyS3Text {
    constructor() {
        /** The content type header used when uploading to S3 */
        this.contentType = 'text/*';
        /** The access level of the text file */
        this.level = AccessLevel.Public;
        /** Fallback content */
        this.fallbackText = Translations.TEXT_FALLBACK_CONTENT;
    }
    async watchHandler() {
        await this.load();
    }
    async componentWillLoad() {
        await this.load();
    }
    async load() {
        const { path, textKey, body, contentType, level, track, identityId } = this;
        if (!textKey && !path) {
            logger.debug('empty textKey and path');
            return;
        }
        const key = textKey || path;
        logger.debug('loading ' + key + '...');
        if (body) {
            await putStorageObject(textKey, body, level, track, contentType, logger);
        }
        try {
            this.src = await getTextSource(key, level, track, identityId, logger);
        }
        catch (err) {
            logger.debug(err);
            throw new Error(err);
        }
    }
    render() {
        return (h("div", null,
            h("div", { class: "text-container" }, this.src ? (h("pre", null, this.src)) : (h("pre", null, I18n.get(this.fallbackText))))));
    }
    static get is() { return "amplify-s3-text"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-s3-text.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-s3-text.css"]
    }; }
    static get properties() { return {
        "textKey": {
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
                "text": "The key of the text object in S3"
            },
            "attribute": "text-key",
            "reflect": false
        },
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
                "text": "String representing directory location to text file"
            },
            "attribute": "path",
            "reflect": false
        },
        "body": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "object",
                "resolved": "object",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Text body content to be uploaded"
            }
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
            "defaultValue": "'text/*'"
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
                "text": "The access level of the text file"
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
                "text": "Whether or not to use track the get/put of the text file"
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
                "text": "Cognito identity id of the another user's text file"
            },
            "attribute": "identity-id",
            "reflect": false
        },
        "fallbackText": {
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
                "text": "Fallback content"
            },
            "attribute": "fallback-text",
            "reflect": false,
            "defaultValue": "Translations.TEXT_FALLBACK_CONTENT"
        }
    }; }
    static get states() { return {
        "src": {}
    }; }
    static get watchers() { return [{
            "propName": "textKey",
            "methodName": "watchHandler"
        }, {
            "propName": "body",
            "methodName": "watchHandler"
        }]; }
}