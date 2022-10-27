var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,l){function o(e){try{u(n.next(e))}catch(t){l(t)}}function i(e){try{u(n["throw"](e))}catch(t){l(t)}}function u(e){e.done?r(e.value):a(e.value).then(o,i)}u((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},n,a,l,o;return o={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function i(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(l=o[0]&2?a["return"]:o[0]?a["throw"]||((l=a["return"])&&l.call(a),0):a.next)&&!(l=l.call(a,o[1])).done)return l;if(a=0,l)o=[o[0]&2,l.value];switch(o[0]){case 0:case 1:l=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(l=r.trys,l=l.length>0&&l[l.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!l||o[1]>l[0]&&o[1]<l[3])){r.label=o[1];break}if(o[0]===6&&r.label<l[1]){r.label=l[1];l=o;break}if(l&&r.label<l[2]){r.label=l[2];r.ops.push(o);break}if(l[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(i){o=[6,i];a=0}finally{n=l=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["@aws-amplify/core","./p-74bf56f1.system.js","@aws-amplify/auth","./p-239ad290.system.js","./p-edf8f59e.system.js"],(function(e){"use strict";var t,r,n,a,l,o,i,u,c,E,s,L,f;return{setters:[function(e){t=e.Logger;r=e.Hub;n=e.I18n},function(e){a=e.U;l=e.A},function(e){o=e.default},function(e){i=e.T},function(e){u=e.U;c=e.T;E=e.a;s=e.P;L=e.C;f=e.b}],execute:function(){var A=this;e("h",m);var g=new t("helpers");var _=e("e",(function(e,t){function r(n){if(!n||n===document||n===window)return null;if(n.matches(e))return t;if(n.assignedSlot)n=n.assignedSlot;var a=n.closest(e);return a?a:r(n.getRootNode().host)}return r(t)}));var h=e("a",(function(e){r.dispatch(u,{event:c,message:n.get(e.message)})}));var d=e("d",(function(e,t){r.dispatch(u,{event:E,message:e,data:t})}));var p=e("b",(function(e){if(!e.phoneNumberValue){throw new Error(s)}var t=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+t}));var b=e("c",(function(e){if(!(e in a)){throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(a))}}));var v=e("o",(function(e){var t=function(t){return __awaiter(A,void 0,void 0,(function(){var r,n,a,i;return __generator(this,(function(u){switch(u.label){case 0:r=t.payload;n=r.event;switch(n){case E:return[3,1]}return[3,8];case 1:if(!r.message)return[3,7];if(!(r.message===l.SignedIn))return[3,6];u.label=2;case 2:u.trys.push([2,4,,5]);return[4,o.currentAuthenticatedUser()];case 3:a=u.sent();e(r.message,a);return[3,5];case 4:i=u.sent();g.error("User is not authenticated");return[3,5];case 5:return[3,7];case 6:e(r.message,r.data);u.label=7;case 7:return[3,8];case 8:return[2]}}))}))};r.listen(u,t);var n=function(){e=function(){};r.remove(u,t)};return n}));var D=e("i",(function(e){return!(e["hint"]===null||typeof e["hint"]==="string")}));var R=e("g",(function(){return{address:{label:n.get(i.ADDRESS_LABEL),placeholder:n.get(i.ADDRESS_PLACEHOLDER)},nickname:{label:n.get(i.NICKNAME_LABEL),placeholder:n.get(i.NICKNAME_PLACEHOLDER)},birthdate:{label:n.get(i.BIRTHDATE_LABEL),placeholder:n.get(i.BIRTHDATE_PLACEHOLDER)},phone_number:{label:n.get(i.PHONE_LABEL),placeholder:n.get(i.PHONE_PLACEHOLDER)},email:{lable:n.get(i.EMAIL_LABEL),placeholder:n.get(i.EMAIL_PLACEHOLDER)},picture:{label:n.get(i.PICTURE_LABEL),placeholder:n.get(i.PICTURE_PLACEHOLDER)},family_name:{label:n.get(i.FAMILY_NAME_LABEL),placeholder:n.get(i.FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:n.get(i.PREFERRED_USERNAME_LABEL),placeholder:n.get(i.PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:n.get(i.GENDER_LABEL),placeholder:n.get(i.GENDER_PLACEHOLDER)},profile:{label:n.get(i.PROFILE_LABEL),placeholder:n.get(i.PROFILE_PLACEHOLDER)},given_name:{label:n.get(i.GIVEN_NAME_LABEL),placeholder:n.get(i.GIVEN_NAME_PLACEHOLDER)},zoneinfo:{label:n.get(i.ZONEINFO_LABEL),placeholder:n.get(i.ZONEINFO_PLACEHOLDER)},locale:{label:n.get(i.LOCALE_LABEL),placeholder:n.get(i.LOCALE_PLACEHOLDER)},updated_at:{label:n.get(i.UPDATED_AT_LABEL),placeholder:n.get(i.UPDATED_AT_PLACEHOLDER)},middle_name:{label:n.get(i.MIDDLE_NAME_LABEL),placeholder:n.get(i.MIDDLE_NAME_PLACEHOLDER)},website:{label:n.get(i.WEBSITE_LABEL),placeholder:n.get(i.WEBSITE_PLACEHOLDER)},name:{label:n.get(i.NAME_LABEL),placeholder:n.get(i.NAME_PLACEHOLDER)}}}));function m(e,t){var r=e.target.name;var n=e.target.value;if(r===L){t.countryDialCodeValue=n}if(r===f){t.phoneNumberValue=n}}}}}));