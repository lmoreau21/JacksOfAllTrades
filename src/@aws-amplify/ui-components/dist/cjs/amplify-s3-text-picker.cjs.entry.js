'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d44143a.js');
const core = require('@aws-amplify/core');
const storageTypes = require('./storage-types-fa93d917.js');
require('@aws-amplify/auth');
const Translations = require('./Translations-5f4bb72c.js');
require('./constants-1335fef8.js');
require('@aws-amplify/storage');
const storageHelpers = require('./storage-helpers-7ecc924e.js');

const logger = new core.Logger('S3TextPicker');
const AmplifyS3TextPicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'text/*';
        /** The access level of the text file */
        this.level = storageTypes.AccessLevel.Public;
        /** Fallback content for aplify-s3-text */
        this.fallbackText = Translations.Translations.PICKER_TEXT;
    }
    async handleInput(event) {
        const file = event.target.files[0];
        const { path = '', level, fileToKey, track } = this;
        const key = path + storageHelpers.calcKey(file, fileToKey);
        if (!file) {
            throw new Error('No file was selected');
        }
        try {
            await storageHelpers.putStorageObject(key, file, level, track, file['type'], logger);
            this.src = key;
        }
        catch (error) {
            logger.debug(error);
            throw new Error(error);
        }
    }
    render() {
        return (index.h(index.Host, null, index.h("amplify-s3-text", { textKey: this.src, path: this.path, level: this.level, track: this.track, identityId: this.identityId, contentType: this.contentType, fallbackText: core.I18n.get(this.fallbackText) }), index.h("amplify-picker", { inputHandler: e => this.handleInput(e), acceptValue: 'text/*' })));
    }
};

exports.amplify_s3_text_picker = AmplifyS3TextPicker;