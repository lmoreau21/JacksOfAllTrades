import{__spreadArray as r}from"tslib";import e from"lodash/kebabCase";import o from"style-dictionary/lib/utils/references/usesReference";var i="amplify";function t(r){if(o(r)){var e=r.replace(/\{|\}/g,"").replace(".value","").split(".");return"var(--".concat(f({path:e}),")")}return r}function a(r){var e=r.value;if("string"==typeof e)return t(e);if("object"==typeof e&&"offsetX"in e){var o=e.offsetX,i=void 0===o?"":o,a=e.offsetY,f=void 0===a?"":a,n=e.blurRadius,s=void 0===n?"":n,u=e.spreadRadius,c=void 0===u?"":u,l=e.color,p=void 0===l?"":l;return[t(i),t(f),t(s),t(c),t(p)].join(" ")}return e}function f(o){var i=o.path;return"".concat(e(r(["amplify"],void 0===i?[]:i,!0).join(" ")))}export{i as CSS_VARIABLE_PREFIX,f as cssNameTransform,a as cssValue};
