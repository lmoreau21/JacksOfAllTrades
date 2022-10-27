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

const amplifyS3TextCss = ":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}";

const logger = new core.Logger('S3Text');
const AmplifyS3Text = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'text/*';
        /** The access level of the text file */
        this.level = storageTypes.AccessLevel.Public;
        /** Fallback content */
        this.fallbackText = Translations.Translations.TEXT_FALLBACK_CONTENT;
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
            await storageHelpers.putStorageObject(textKey, body, level, track, contentType, logger);
        }
        try {
            this.src = await storageHelpers.getTextSource(key, level, track, identityId, logger);
        }
        catch (err) {
            logger.debug(err);
            throw new Error(err);
        }
    }
    render() {
        return (index.h("div", null, index.h("div", { class: "text-container" }, this.src ? (index.h("pre", null, this.src)) : (index.h("pre", null, core.I18n.get(this.fallbackText))))));
    }
    static get watchers() { return {
        "textKey": ["watchHandler"],
        "body": ["watchHandler"]
    }; }
};
AmplifyS3Text.style = amplifyS3TextCss;

exports.amplify_s3_text = AmplifyS3Text;