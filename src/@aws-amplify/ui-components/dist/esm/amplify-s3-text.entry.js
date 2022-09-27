import { r as registerInstance, h } from './index-83f2275b.js';
import { Logger, I18n } from '@aws-amplify/core';
import { A as AccessLevel } from './storage-types-f257c0f2.js';
import '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
import './constants-c8ecaa24.js';
import '@aws-amplify/storage';
import { p as putStorageObject, a as getTextSource } from './storage-helpers-1afafead.js';

const amplifyS3TextCss = ":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}";

const logger = new Logger('S3Text');
const AmplifyS3Text = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", null, h("div", { class: "text-container" }, this.src ? (h("pre", null, this.src)) : (h("pre", null, I18n.get(this.fallbackText))))));
    }
    static get watchers() { return {
        "textKey": ["watchHandler"],
        "body": ["watchHandler"]
    }; }
};
AmplifyS3Text.style = amplifyS3TextCss;

export { AmplifyS3Text as amplify_s3_text };
