import{__awaiter as t,__generator as n}from"tslib";import{Amplify as r,Auth as i}from"aws-amplify";import"lodash/includes";import"../../types/authenticator/user.js";import"../../types/authenticator/attributes.js";import"../../i18n/translations.js";import{hasSpecialChars as o}from"../../helpers/authenticator/utils.js";import"lodash/cloneDeep";var s={getAmplifyConfig:function(){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,r.configure()]}))}))},getCurrentUser:function(){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,i.currentAuthenticatedUser()]}))}))},handleSignUp:function(r){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,i.signUp(r)]}))}))},handleSignIn:function(r){var o=r.username,s=r.password;return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,i.signIn(o,s)]}))}))},handleConfirmSignIn:function(r){var o=r.user,s=r.code,e=r.mfaType;return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,i.confirmSignIn(o,s,e)]}))}))},handleConfirmSignUp:function(r){var o=r.username,s=r.code;return t(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,i.confirmSignUp(o,s)];case 1:return[2,t.sent()]}}))}))},handleForgotPasswordSubmit:function(r){var o=r.username,s=r.code,e=r.password;return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,i.forgotPasswordSubmit(o,s,e)]}))}))},handleForgotPassword:function(r){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,i.forgotPassword(r)]}))}))},validateCustomSignUp:function(r,i){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2]}))}))},validateFormPassword:function(r,i,s){return t(this,void 0,void 0,(function(){var t,e,u,a;return n(this,(function(n){return t=r.password,i.password&&s?(e=[],u=+(null==s?void 0:s.passwordPolicyMinLength),t.length<u&&e.push("Password must have at least ".concat(u," characters")),null==(a=null==s?void 0:s.passwordPolicyCharacters)||a.forEach((function(n){switch(n){case"REQUIRES_LOWERCASE":/[a-z]/.test(t)||e.push("Password must have lower case letters");break;case"REQUIRES_UPPERCASE":/[A-Z]/.test(t)||e.push("Password must have upper case letters");break;case"REQUIRES_NUMBERS":/[0-9]/.test(t)||e.push("Password must have numbers");break;case"REQUIRES_SYMBOLS":o(t)||e.push("Password must have special characters")}})),[2,0!==e.length?{password:e}:null]):[2,null]}))}))},validateConfirmPassword:function(r,i){return t(this,void 0,void 0,(function(){var t,o,s,e;return n(this,(function(n){return t=r.password,o=r.confirm_password,s=i.confirm_password,e=i.password,t||o?(t||o)&&t!==o&&(s&&e||(null==t?void 0:t.length)>=6&&(null==o?void 0:o.length)>=6)?[2,{confirm_password:"Your passwords must match"}]:[2]:[2,null]}))}))},validatePreferredUsername:function(r,i){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2]}))}))}};export{s as defaultServices};