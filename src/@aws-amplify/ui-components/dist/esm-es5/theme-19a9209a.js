import { C as CSS, p as plt, w as win, a as promiseResolve, d as doc, N as NAMESPACE } from './index-83f2275b.js';
import { browserOrNode } from '@aws-amplify/core';
/*
 Stencil Client Patch v1.15.0 | MIT Licensed | https://stenciljs.com
 */
var getDynamicImportFunction = function (namespace) { return "__sc_import_" + namespace.replace(/\s|-/g, '_'); };
var patchEsm = function () {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (!(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-3b0ed064.js').then(function () {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};
var patchBrowser = function () {
    {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    // @ts-ignore
    var scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return new RegExp("/" + NAMESPACE + "(\\.esm)?\\.js($|\\?|#)").test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE; });
    var opts = scriptElm['data-opts'] || {};
    if ('onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then: function () {
                /* promise noop */
            },
        };
    }
    {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (!win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-3fa9e65e.js').then(function () { return opts; });
        }
    }
    return promiseResolve(opts);
};
var patchDynamicImport = function (base, orgScriptElm) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', "return import(w);//" + Math.random());
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.crossOrigin = orgScriptElm.crossOrigin;
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
/* eslint-disable */
if (browserOrNode().isBrowser) {
    var customStyles = document.createElement('style');
    customStyles.appendChild(document.createTextNode("\n    :root {\n      /* Typography */\n      --amplify-font-family: 'Amazon Ember', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n\n      --amplify-text-xxs: 0.75rem;\n      --amplify-text-xs: 0.81rem;\n      --amplify-text-sm: 0.875rem;\n      --amplify-text-md: 1rem;\n      --amplify-text-md-sub: 1.15rem;\n      --amplify-text-lg: 1.5rem;\n      --amplify-text-xl: 2rem;\n      --amplify-text-xxl: 2.5rem;\n\n      /* Colors */\n      --amplify-primary-color: #ff9900;\n      --amplify-primary-contrast: var(--amplify-white);\n      --amplify-primary-tint: #ffac31;\n      --amplify-primary-shade: #e88b01;\n\n      --amplify-secondary-color: #152939;\n      --amplify-secondary-contrast: var(--amplify-white);\n      --amplify-secondary-tint: #31465f;\n      --amplify-secondary-shade: #1F2A37;\n\n      --amplify-tertiary-color: #5d8aff;\n      --amplify-tertiary-contrast: var(--amplify-white);\n      --amplify-tertiary-tint: #7da1ff;\n      --amplify-tertiary-shade: #537BE5;\n\n      --amplify-background-color: var(--amplify-white);\n\n      /* Neutral */\n      --amplify-grey: #828282;\n      --amplify-light-grey: #c4c4c4;\n      --amplify-white: #ffffff;\n      --amplify-smoke-white: #f5f5f5;\n      --amplify-red: #dd3f5b;\n      --amplify-blue: #099ac8;\n    }\n  "));
    var parentElement = document.getElementsByTagName('head')[0];
    var firstChild = parentElement.firstChild;
    parentElement.insertBefore(customStyles, firstChild);
}
export { patchEsm as a, patchBrowser as p };