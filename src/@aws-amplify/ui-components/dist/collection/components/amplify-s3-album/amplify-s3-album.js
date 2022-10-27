import { Component, Prop, h, State } from '@stencil/core';
import { AccessLevel } from '../../common/types/storage-types';
import { Storage } from '@aws-amplify/storage';
import { Logger, filenameToContentType, I18n } from '@aws-amplify/core';
import { NO_STORAGE_MODULE_FOUND } from '../../common/constants';
import { calcKey, imageFileType, putStorageObject, } from '../../common/storage-helpers';
import { v4 as uuid } from 'uuid';
import { Translations } from '../../common/Translations';
const logger = new Logger('S3Album');
export class AmplifyS3Album {
    constructor() {
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the files */
        this.level = AccessLevel.Public;
        /** Boolean to enable or disable picker */
        this.picker = true;
        /** Picker button text */
        this.pickerText = Translations.PICKER_TEXT;
        this.albumItems = [];
        this.imgArr = {};
        this.list = async () => {
            const { path = '', level, track, identityId } = this;
            logger.debug('Album path: ' + path);
            if (!Storage || typeof Storage.list !== 'function') {
                throw new Error(NO_STORAGE_MODULE_FOUND);
            }
            try {
                const data = await Storage.list(path, {
                    level,
                    track,
                    identityId,
                });
                this.marshal(data);
            }
            catch (error) {
                logger.warn(error);
            }
        };
        this.marshal = (list) => {
            list.forEach((item) => {
                const name = item.key.toLowerCase();
                const ext = name.split('.')[1];
                if (imageFileType.has(ext)) {
                    if (!item.contentType ||
                        (item.contentType && item.contentType === 'binary/octet-stream')) {
                        item.contentType = this.getContentType(item);
                    }
                }
            });
            const filtered = list.filter((item) => item.contentType && item.contentType.startsWith('image/'));
            let items = this.filter ? this.filter(filtered) : filtered;
            items = this.sort ? this.sort(items) : items;
            this.albumItems = items;
            logger.debug('album items', this.albumItems);
            this.constructImgArray(this.albumItems);
        };
        this.constructImgArray = (list) => {
            list.map(item => {
                this.imgArr[`${item['key']}`] = item['key'];
            });
        };
        this.handlePick = async (event) => {
            const file = event.target.files[0];
            const { path = '', level, track, fileToKey } = this;
            const key = path + calcKey(file, fileToKey);
            try {
                await putStorageObject(key, file, level, track, file['type'], logger);
            }
            catch (error) {
                logger.error(error);
                throw new Error(error);
            }
            if (Object.keys(this.imgArr).includes(key)) {
                this.albumItems = [...this.albumItems];
                this.imgArr[key] = `${key}-${uuid()}`;
            }
            else {
                const filtered = [
                    ...this.albumItems,
                    ...(this.filter ? this.filter([{ key }]) : [{ key }]),
                ];
                this.albumItems = this.sort ? this.sort(filtered) : filtered;
            }
        };
    }
    getContentType(item) {
        return filenameToContentType(item.key, 'image/*');
    }
    componentWillLoad() {
        this.list();
    }
    render() {
        return (h("div", null,
            h("div", { class: "album-container" },
                h("div", { class: "grid-row" }, this.albumItems.map(item => {
                    return (h("div", { class: "grid-item", key: `key-${item.key}` },
                        h("amplify-s3-image", { key: this.imgArr[item.key], imgKey: item.key, level: this.level, path: this.path, identityId: this.identityId, track: this.track, handleOnError: this.handleOnError, handleOnLoad: this.handleOnLoad }),
                        h("span", { class: "img-overlay" })));
                }))),
            this.picker && (h("amplify-picker", { pickerText: I18n.get(this.pickerText), inputHandler: e => this.handlePick(e), acceptValue: "image/*" }))));
    }
    static get is() { return "amplify-s3-album"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-s3-album.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-s3-album.css"]
    }; }
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
                "text": "String representing directory location of image files to be listed"
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
                "text": "The access level of the files"
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
                "text": "Whether or not to use track the get/put of the listing of images"
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
                "text": "Cognito identity id of the another user's image list"
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
        "filter": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(list: StorageObject[]) => StorageObject[]",
                "resolved": "(list: StorageObject[]) => StorageObject[]",
                "references": {
                    "StorageObject": {
                        "location": "import",
                        "path": "../../common/types/storage-types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Filter to be applied on album list"
            }
        },
        "sort": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(list: StorageObject[]) => StorageObject[]",
                "resolved": "(list: StorageObject[]) => StorageObject[]",
                "references": {
                    "StorageObject": {
                        "location": "import",
                        "path": "../../common/types/storage-types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sort to be applied on album list"
            }
        },
        "picker": {
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
                "text": "Boolean to enable or disable picker"
            },
            "attribute": "picker",
            "reflect": false,
            "defaultValue": "true"
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
                "text": "Function executed when s3-image loads"
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
                "text": "Function executed when error occurs for the s3-image"
            }
        },
        "pickerText": {
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
                "text": "Picker button text"
            },
            "attribute": "picker-text",
            "reflect": false,
            "defaultValue": "Translations.PICKER_TEXT"
        }
    }; }
    static get states() { return {
        "albumItems": {}
    }; }
}