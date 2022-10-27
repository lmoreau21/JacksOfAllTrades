import { r as registerInstance, h, H as Host } from './index-83f2275b.js';
import { Logger, I18n } from '@aws-amplify/core';
import { A as AccessLevel } from './storage-types-f257c0f2.js';
import '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
import './constants-c8ecaa24.js';
import '@aws-amplify/storage';
import { c as calcKey, p as putStorageObject } from './storage-helpers-1afafead.js';

const logger = new Logger('S3TextPicker');
const AmplifyS3TextPicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'text/*';
        /** The access level of the text file */
        this.level = AccessLevel.Public;
        /** Fallback content for aplify-s3-text */
        this.fallbackText = Translations.PICKER_TEXT;
    }
    async handleInput(event) {
        const file = event.target.files[0];
        const { path = '', level, fileToKey, track } = this;
        const key = path + calcKey(file, fileToKey);
        if (!file) {
            throw new Error('No file was selected');
        }
        try {
            await putStorageObject(key, file, level, track, file['type'], logger);
            this.src = key;
        }
        catch (error) {
            logger.debug(error);
            throw new Error(error);
        }
    }
    render() {
        return (h(Host, null, h("amplify-s3-text", { textKey: this.src, path: this.path, level: this.level, track: this.track, identityId: this.identityId, contentType: this.contentType, fallbackText: I18n.get(this.fallbackText) }), h("amplify-picker", { inputHandler: e => this.handleInput(e), acceptValue: 'text/*' })));
    }
};

export { AmplifyS3TextPicker as amplify_s3_text_picker };