import { Component, Prop, h, State, Host, Watch } from '@stencil/core';
import { Logger } from '@aws-amplify/core';
import { AccessLevel } from '../../common/types/storage-types';
import { getStorageObject, putStorageObject, } from '../../common/storage-helpers';
const logger = new Logger('S3Image');
export class AmplifyS3Image {
    constructor() {
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the image */
        this.level = AccessLevel.Public;
    }
    async watchHandler() {
        await this.load();
    }
    async componentWillLoad() {
        await this.load();
    }
    async load() {
        const { imgKey, path, body, contentType, level, track, identityId } = this;
        if (!imgKey && !path) {
            logger.debug('empty imgKey and path');
            return;
        }
        const key = imgKey || path;
        logger.debug('loading ' + key + '...');
        try {
            if (body) {
                await putStorageObject(imgKey, body, level, track, contentType, logger);
            }
            this.src = await getStorageObject(key, level, track, identityId, logger);
        }
        catch (err) {
            logger.debug(err);
            throw new Error(err);
        }
    }
    render() {
        return (h(Host, null, this.src && (h("img", Object.assign({ src: this.src, alt: this.alt, onLoad: this.handleOnLoad, onError: this.handleOnError }, this.imgProps)))));
    }
    static get is() { return "amplify-s3-image"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-s3-image.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-s3-image.css"]
    }; }
    static get properties() { return {
        "imgKey": {
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
                "text": "The key of the image object in S3"
            },
            "attribute": "img-key",
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
                "text": "String representing directory location to image file"
            },
            "attribute": "path",
            "reflect": false
        },
        "alt": {
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
                "text": "String representing the alternate image text"
            },
            "attribute": "alt",
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
                "text": "Image body content to be uploaded"
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
                "text": "Whether or not to use track on get/put of the image"
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
        "handleOnLoad": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(event: Event) => void",
                "resolved": "(event: Event) => void",
                "references": {
                    "Event": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Function executed when image loads"
            }
        },
        "handleOnError": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(event: Event) => void",
                "resolved": "(event: Event) => void",
                "references": {
                    "Event": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Function executed when error occurs for the image"
            }
        },
        "imgProps": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Record<PropertyKey, any>",
                "resolved": "{ [x: string]: any; [x: number]: any; }",
                "references": {
                    "Record": {
                        "location": "global"
                    },
                    "PropertyKey": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Attributes to be placed on the img element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes"
            }
        }
    }; }
    static get states() { return {
        "src": {}
    }; }
    static get watchers() { return [{
            "propName": "body",
            "methodName": "watchHandler"
        }]; }
}