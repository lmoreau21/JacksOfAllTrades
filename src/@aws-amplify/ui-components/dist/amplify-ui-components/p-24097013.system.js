var __awaiter=this&&this.__awaiter||function(e,n,r,t){function a(e){return e instanceof r?e:new r((function(n){n(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{u(t.next(e))}catch(n){i(n)}}function o(e){try{u(t["throw"](e))}catch(n){i(n)}}function u(e){e.done?r(e.value):a(e.value).then(s,o)}u((t=t.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(n){return u([e,n])}}function u(s){if(t)throw new TypeError("Generator is already executing.");while(r)try{if(t=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=n.call(e,r)}catch(o){s=[6,o];a=0}finally{t=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["@aws-amplify/core","./p-74bf56f1.system.js","@aws-amplify/auth","./p-239ad290.system.js","./p-edf8f59e.system.js","./p-2933db11.system.js"],(function(e){"use strict";var n,r,t,a,i,s,o,u,c,l;return{setters:[function(e){n=e.Logger;r=e.isEmpty},function(e){t=e.A;a=e.C;i=e.U},function(e){s=e.Auth;o=e.CognitoUser},function(e){u=e.T},function(e){c=e.N},function(e){l=e.a}],execute:function(){var f=this;e("c",g);var h=new n("auth-helpers");function g(e,n){return __awaiter(this,void 0,void 0,(function(){var a,i,o;return __generator(this,(function(u){switch(u.label){case 0:if(!s||typeof s.verifiedContact!=="function"){throw new Error(c)}if(!m(e)){n(t.SignedIn,e);return[2]}u.label=1;case 1:u.trys.push([1,3,,4]);return[4,s.verifiedContact(e)];case 2:a=u.sent();if(!r(a.verified)||r(a.unverified)){n(t.SignedIn,e)}else{i=Object.assign(e,a);n(t.VerifyContact,i)}return[3,4];case 3:o=u.sent();l(o);return[3,4];case 4:return[2]}}))}))}var d=e("h",(function(e,n,r,o){return __awaiter(f,void 0,void 0,(function(){var f,d;return __generator(this,(function(m){switch(m.label){case 0:if(!s||typeof s.signIn!=="function"){throw new Error(c)}m.label=1;case 1:m.trys.push([1,9,,10]);return[4,s.signIn(e,n)];case 2:f=m.sent();h.debug(f);if(!(f.challengeName===a.SMSMFA||f.challengeName===a.SoftwareTokenMFA))return[3,3];h.debug("confirm user with "+f.challengeName);r(t.ConfirmSignIn,f);return[3,8];case 3:if(!(f.challengeName===a.NewPasswordRequired))return[3,4];h.debug("require new password",f.challengeParam);r(t.ResetPassword,f);return[3,8];case 4:if(!(f.challengeName===a.MFASetup))return[3,5];h.debug("TOTP setup",f.challengeParam);r(t.TOTPSetup,f);return[3,8];case 5:if(!(f.challengeName===a.CustomChallenge&&f.challengeParam&&f.challengeParam.trigger==="true"))return[3,6];h.debug("custom challenge",f.challengeParam);r(t.CustomConfirmSignIn,f);return[3,8];case 6:return[4,g(f,r)];case 7:m.sent();m.label=8;case 8:return[3,10];case 9:d=m.sent();if(d.code==="UserNotConfirmedException"){h.debug("the user is not confirmed");r(t.ConfirmSignUp,{username:e})}else if(d.code==="PasswordResetRequiredException"){h.debug("the user requires a new password");r(t.ForgotPassword,{username:e})}else if(d.code==="InvalidParameterException"&&n===""){h.debug("Password cannot be empty");d.message=u.EMPTY_PASSWORD}else if(d.message===u.EMPTY_USERNAME){if(o===i.email){d.message=u.EMPTY_EMAIL}if(o===i.phone_number){d.message=u.EMPTY_PHONE}}l(d);return[3,10];case 10:return[2]}}))}))}));var m=function(e){return e instanceof o}}}}));