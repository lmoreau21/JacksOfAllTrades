import{__assign as n}from"tslib";import t from"style-dictionary/lib/utils/deepExtend";import o from"style-dictionary/lib/utils/flattenProperties";import{defaultTheme as e}from"./defaultTheme.js";import{cssNameTransform as a,cssValue as c}from"./utils.js";function r(n,t){void 0===t&&(t=[]);var o={};if(n.hasOwnProperty("value"))return function(n,t){var o="--".concat(a({path:t})),e=n.value;return{name:o,path:t,value:c(n),original:e,toString:function(){return"var(".concat(o,")")}}}(n,t);if("object"==typeof n)for(var e in n)n.hasOwnProperty(e)&&("object"!=typeof n[e]?(console.warn("Non-design token found when creating the theme at path: ".concat(t.join("."),".").concat(e,"\nDid you forget to add '{value:\"").concat(n[e],"\"}'?")),o[e]=n[e]):o[e]=r(n[e],t.concat(e)));return o}function i(a,c){void 0===c&&(c=e);var i=t([{},c,a]),m=r(i.tokens),l=i.breakpoints,d=i.name,p='[data-amplify-theme="'.concat(d,'"] {\n')+o(m).map((function(n){return"".concat(n.name,": ").concat(n.value,";")})).join("\n")+"\n}\n",s=[];return i.overrides&&(s=i.overrides.map((function(t){var e=r(t.tokens),a=o(e).map((function(n){return"".concat(n.name,": ").concat(n.value,";")})).join("\n");if("selector"in t&&(p+="\n".concat(t.selector," {\n").concat(a,"\n}\n")),"mediaQuery"in t&&(p+="\n@media (".concat(t.mediaQuery,') {\n  [data-amplify-theme="').concat(d,'"] {\n    ').concat(a,"\n  }\n}\n")),"breakpoint"in t){var c=i.breakpoints.values[t.breakpoint];p+="\n@media (min-width: ".concat(c,'px) {\n  [data-amplify-theme="').concat(d,'"] {\n    ').concat(a,"\n  }\n}\n")}return"colorMode"in t&&(p+="\n@media (prefers-color-scheme: ".concat(t.colorMode,') {\n          [data-amplify-theme="').concat(d,'"][data-amplify-color-mode="system"] {\n').concat(a,"\n}\n        }\n"),p+='\n[data-amplify-theme="'.concat(d,'"][data-amplify-color-mode="').concat(t.colorMode,'"] {\n').concat(a,"\n}\n")),n(n({},t),{tokens:e})}))),{tokens:m,breakpoints:l,name:d,cssText:p,overrides:s}}export{i as createTheme};