import{Hub as t}from"aws-amplify";import{ALLOWED_SPECIAL_CHARACTERS as n}from"./constants.js";var e=function(t){for(var n=t.trim().split(""),e=0;e<n.length;e++)e>0&&e<n.length-1&&(n[e]="*");return n.join("")},r=function(t){if(t.length<4)return t;for(var n=t.split(""),e=0;e<n.length-4;e++)n[e]="*";return n.join("")},o=function(t,n){var e=n.send,r=n.getSnapshot();switch(t.payload.event){case"tokenRefresh":r.matches("authenticated.idle")&&e("TOKEN_REFRESH");break;case"signOut":case"tokenRefresh_failure":r.matches("authenticated.idle")&&e("SIGN_OUT")}},a=function(n,e){return void 0===e&&(e=o),t.listen("auth",(function(t){e(t,n)}),"authenticator-hub-handler")},c=function(t){return n.some((function(n){return t.includes(n)}))},i=function(t,n,e){return encodeURI("otpauth://totp/".concat(t,":").concat(n,"?secret=").concat(e,"&issuer=").concat(t))};export{e as censorAllButFirstAndLast,r as censorPhoneNumber,o as defaultAuthHubHandler,i as getTotpCode,c as hasSpecialChars,a as listenToAuthHub};
