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

const logger = new core.Logger('S3ImagePicker');
const AmplifyS3ImagePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the image */
        this.level = storageTypes.AccessLevel.Public;
        /** Title string value */
        this.headerTitle = Translations.Translations.IMAGE_PICKER_TITLE;
        /** Header Hint value in string */
        this.headerHint = Translations.Translations.IMAGE_PICKER_HINT;
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint = Translations.Translations.IMAGE_PICKER_PLACEHOLDER_HINT;
        /** Upload Button Text as string */
        this.buttonText = Translations.Translations.IMAGE_PICKER_BUTTON_TEXT;
        this.handlePick = async (file) => {
            const { path = '', level, track, identityId, fileToKey } = this;
            const key = path + storageHelpers.calcKey(file, fileToKey);
            try {
                await storageHelpers.putStorageObject(key, file, level, track, file['type'], logger);
                this.src = await storageHelpers.getStorageObject(key, level, track, identityId, logger);
            }
            catch (error) {
                logger.error(error);
                throw new Error(error);
            }
        };
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", { name: "photo-picker" }, index.h("amplify-photo-picker", { previewSrc: this.src, handleClick: this.handlePick, headerTitle: core.I18n.get(this.headerTitle), headerHint: core.I18n.get(this.headerHint), placeholderHint: core.I18n.get(this.placeholderHint), buttonText: core.I18n.get(this.buttonText) }))));
    }
};

exports.amplify_s3_image_picker = AmplifyS3ImagePicker;
