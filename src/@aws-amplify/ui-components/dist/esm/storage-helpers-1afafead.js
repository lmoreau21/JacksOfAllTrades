import { d as NO_STORAGE_MODULE_FOUND } from './constants-c8ecaa24.js';
import { Storage } from '@aws-amplify/storage';

const imageFileType = new Set([
    'apng',
    'bmp',
    'gif',
    'ico',
    'cur',
    'jpg',
    'jpeg',
    'jfif',
    'pjpeg',
    'pjp',
    'png',
    'svg',
    'tif',
    'tiff',
    'webp',
]);
const calcKey = (file, fileToKey) => {
    const { name, size, type } = file;
    let key = encodeURI(name);
    if (fileToKey) {
        if (typeof fileToKey === 'string') {
            key = fileToKey;
        }
        else if (typeof fileToKey === 'function') {
            key = fileToKey({ name, size, type });
        }
        else {
            key = encodeURI(JSON.stringify(fileToKey));
        }
        if (!key) {
            key = 'empty_key';
        }
    }
    return key.replace(/\s/g, '_');
};
const getStorageObject = async (key, level, track, identityId, logger) => {
    if (!Storage || typeof Storage.get !== 'function') {
        throw new Error(NO_STORAGE_MODULE_FOUND);
    }
    try {
        const src = await Storage.get(key, { level, track, identityId });
        logger.debug('Storage image get', src);
        return src;
    }
    catch (error) {
        throw new Error(error);
    }
};
const readFileAsync = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = () => {
            reject('Failed to read file!');
            reader.abort();
        };
        reader.readAsText(blob);
    });
};
const getTextSource = async (key, level, track, identityId, logger) => {
    if (!Storage || typeof Storage.get !== 'function') {
        throw new Error(NO_STORAGE_MODULE_FOUND);
    }
    try {
        const textSrc = await Storage.get(key, {
            download: true,
            level,
            track,
            identityId,
        });
        logger.debug(textSrc);
        const text = (await readFileAsync(textSrc['Body']));
        return text;
    }
    catch (error) {
        throw new Error(error);
    }
};
const putStorageObject = async (key, body, level, track, contentType, logger) => {
    if (!Storage || typeof Storage.put !== 'function') {
        throw new Error(NO_STORAGE_MODULE_FOUND);
    }
    try {
        const data = await Storage.put(key, body, {
            contentType,
            level,
            track,
        });
        logger.debug('Upload data', data);
    }
    catch (error) {
        throw new Error(error);
    }
};

export { getTextSource as a, calcKey as c, getStorageObject as g, imageFileType as i, putStorageObject as p };
