import{__spreadArray as r}from"tslib";import"../../types/authenticator/user.js";import{authFieldsWithDefaults as t}from"../../types/authenticator/attributes.js";var n=function(r){var t=new FormData(r.target);return Object.fromEntries(t)},e=function(t,n){var e=[];return t&&(e=Object.keys(t).reduce((function(r,n){var e;return r.push([n,null===(e=t[n])||void 0===e?void 0:e.order]),r}),[]).sort((function(r,t){return r[1]-t[1]})).filter((function(r){return void 0!==r[1]})).map((function(r){return r[0]}))),Array.from(new Set(r(r([],e,!0),n,!0)))},u=function(r){return t.includes(r)},o=function(r){return r?(t=r,Array.isArray(t)?r:[r]):null;var t};export{o as getErrors,n as getFormDataFromEvent,u as isAuthFieldWithDefaults,e as setFormOrder};