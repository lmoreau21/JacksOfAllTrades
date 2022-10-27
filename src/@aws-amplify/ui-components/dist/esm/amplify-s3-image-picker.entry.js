import { r as registerInstance, h, H as Host } from './index-83f2275b.js';
import { Logger, I18n } from '@aws-amplify/core';
import { A as AccessLevel } from './storage-types-f257c0f2.js';
import '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
import './constants-c8ecaa24.js';
import '@aws-amplify/storage';
import { c as calcKey, p as putStorageObject, g as getStorageObject } from './storage-helpers-1afafead.js';

const logger = new Logger('S3ImagePicker');
const AmplifyS3ImagePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("slot", { name: "photo-picker" }, h("amplify-photo-picker", { previewSrc: this.src, handleClick: this.handlePick, headerTitle: I18n.get(this.headerTitle), headerHint: I18n.get(this.headerHint), placeholderHint: I18n.get(this.placeholderHint), buttonText: I18n.get(this.buttonText) }))));
    }
};

export { AmplifyS3ImagePicker as amplify_s3_image_picker };