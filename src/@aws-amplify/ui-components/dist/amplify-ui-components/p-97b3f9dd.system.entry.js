var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{u(r.next(t))}catch(e){a(e)}}function s(t){try{u(r["throw"](t))}catch(e){a(e)}}function u(t){t.done?n(t.value):i(t.value).then(o,s)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return u([t,e])}}function u(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(s){o=[6,s];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-38e49dbf.system.js","@aws-amplify/core","./p-db681dd2.system.js","./p-edf8f59e.system.js","@aws-amplify/storage","./p-928d2175.system.js"],(function(t){"use strict";var e,n,r,i,a,o,s;return{setters:[function(t){e=t.r;n=t.h;r=t.H},function(t){i=t.Logger},function(t){a=t.A},function(){},function(){},function(t){o=t.p;s=t.g}],execute:function(){var u=":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}";var c=new i("S3Image");var l=t("amplify_s3_image",function(){function t(t){e(this,t);this.contentType="binary/octet-stream";this.level=a.Public}t.prototype.watchHandler=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:t.sent();return[2]}}))}))};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:t.sent();return[2]}}))}))};t.prototype.load=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n,r,i,a,u,l,h,f,d;return __generator(this,(function(p){switch(p.label){case 0:t=this,e=t.imgKey,n=t.path,r=t.body,i=t.contentType,a=t.level,u=t.track,l=t.identityId;if(!e&&!n){c.debug("empty imgKey and path");return[2]}h=e||n;c.debug("loading "+h+"...");p.label=1;case 1:p.trys.push([1,5,,6]);if(!r)return[3,3];return[4,o(e,r,a,u,i,c)];case 2:p.sent();p.label=3;case 3:f=this;return[4,s(h,a,u,l,c)];case 4:f.src=p.sent();return[3,6];case 5:d=p.sent();c.debug(d);throw new Error(d);case 6:return[2]}}))}))};t.prototype.render=function(){return n(r,null,this.src&&n("img",Object.assign({src:this.src,alt:this.alt,onLoad:this.handleOnLoad,onError:this.handleOnError},this.imgProps)))};Object.defineProperty(t,"watchers",{get:function(){return{body:["watchHandler"]}},enumerable:false,configurable:true});return t}());l.style=u}}}));