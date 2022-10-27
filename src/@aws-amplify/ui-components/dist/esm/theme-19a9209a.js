import { C as CSS, p as plt, w as win, a as promiseResolve, d as doc, N as NAMESPACE } from './index-83f2275b.js';
import { browserOrNode } from '@aws-amplify/core';

/*
 Stencil Client Patch v1.15.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if ( !(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-3b0ed064.js').then(() => {
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
const patchBrowser = () => {
    {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    // @ts-ignore
    const scriptElm =  Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        ;
    const opts =  scriptElm['data-opts'] || {} ;
    if ( 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if ( !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-3fa9e65e.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};

/* eslint-disable */
if (browserOrNode().isBrowser) {
    let customStyles = document.createElement('style');
    customStyles.appendChild(document.createTextNode(`
    :root {
      /* Typography */
      --amplify-font-family: 'Amazon Ember', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;

      --amplify-text-xxs: 0.75rem;
      --amplify-text-xs: 0.81rem;
      --amplify-text-sm: 0.875rem;
      --amplify-text-md: 1rem;
      --amplify-text-md-sub: 1.15rem;
      --amplify-text-lg: 1.5rem;
      --amplify-text-xl: 2rem;
      --amplify-text-xxl: 2.5rem;

      /* Colors */
      --amplify-primary-color: #ff9900;
      --amplify-primary-contrast: var(--amplify-white);
      --amplify-primary-tint: #ffac31;
      --amplify-primary-shade: #e88b01;

      --amplify-secondary-color: #152939;
      --amplify-secondary-contrast: var(--amplify-white);
      --amplify-secondary-tint: #31465f;
      --amplify-secondary-shade: #1F2A37;

      --amplify-tertiary-color: #5d8aff;
      --amplify-tertiary-contrast: var(--amplify-white);
      --amplify-tertiary-tint: #7da1ff;
      --amplify-tertiary-shade: #537BE5;

      --amplify-background-color: var(--amplify-white);

      /* Neutral */
      --amplify-grey: #828282;
      --amplify-light-grey: #c4c4c4;
      --amplify-white: #ffffff;
      --amplify-smoke-white: #f5f5f5;
      --amplify-red: #dd3f5b;
      --amplify-blue: #099ac8;
    }
  `));
    let parentElement = document.getElementsByTagName('head')[0];
    const firstChild = parentElement.firstChild;
    parentElement.insertBefore(customStyles, firstChild);
}

export { patchEsm as a, patchBrowser as p };