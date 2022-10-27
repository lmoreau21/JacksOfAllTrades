var __awaiter=this&&this.__awaiter||function(t,e,n,a){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function s(t){try{u(a.next(t))}catch(e){r(e)}}function o(t){try{u(a["throw"](t))}catch(e){r(e)}}function u(t){t.done?n(t.value):i(t.value).then(s,o)}u((a=a.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,i,r,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return u([t,e])}}function u(s){if(a)throw new TypeError("Generator is already executing.");while(n)try{if(a=1,i&&(r=s[0]&2?i["return"]:s[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;if(i=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){n.label=s[1];break}if(s[0]===6&&n.label<r[1]){n.label=r[1];r=s;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(s);break}if(r[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(o){s=[6,o];i=0}finally{a=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-38e49dbf.system.js","@aws-amplify/core","./p-74bf56f1.system.js","@aws-amplify/auth","./p-239ad290.system.js","./p-edf8f59e.system.js","./p-2933db11.system.js","./p-24097013.system.js"],(function(t){"use strict";var e,n,a,i,r,s,o,u,h,c,l,f,p,d,g,m;return{setters:[function(t){e=t.r;n=t.h;a=t.H;i=t.g},function(t){r=t.Logger;s=t.Hub},function(t){o=t.A},function(t){u=t.appendToCognitoUserAgent;h=t.Auth},function(){},function(t){c=t.T;l=t.U;f=t.A;p=t.N},function(t){d=t.d;g=t.o},function(t){m=t.c}],execute:function(){var y;var v=(y={},y[o.SignIn]="sign-in",y[o.ConfirmSignIn]="confirm-sign-in",y[o.SignUp]="sign-up",y[o.ConfirmSignUp]="confirm-sign-up",y[o.ForgotPassword]="forgot-password",y[o.ResetPassword]="require-new-password",y[o.VerifyContact]="verify-contact",y[o.TOTPSetup]="totp-setup",y[o.Loading]="loading",y);var w=":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}";var S=new r("Authenticator");var b=t("amplify_authenticator",function(){function t(t){var n=this;e(this,t);this.initialAuthState=o.SignIn;this.handleAuthStateChange=function(){};this.hideToast=false;this.authState=o.Loading;this.toastMessage="";this.handleExternalAuthEvent=function(t){var e=t.payload;switch(e.event){case"cognitoHostedUI":case"signIn":m(e.data,d);break;case"cognitoHostedUI_failure":case"parsingUrl_failure":case"signOut":case"customGreetingSignOut":return d(n.initialAuthState)}};this.handleToastEvent=function(t){var e=t.payload;switch(e.event){case c:if(e.message)n.toastMessage=e.message;break}}}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){switch(e.label){case 0:g((function(e,n){t.onAuthStateChange(e,n);t.toastMessage=""}));if(!this.hideToast)s.listen(l,this.handleToastEvent);s.listen(f,this.handleExternalAuthEvent);u("amplify-authenticator");return[4,this.checkUser()];case 1:e.sent();return[2]}}))}))};t.prototype.checkUser=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){if(!h||typeof h.currentAuthenticatedUser!=="function"){throw new Error(p)}return[2,h.currentAuthenticatedUser().then((function(t){d(o.SignedIn,t)})).catch((function(){d(t.initialAuthState)}))]}))}))};t.prototype.onAuthStateChange=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){if(t===undefined)return[2,S.error("nextAuthState cannot be undefined")];S.info("Inside onAuthStateChange Method current authState:",this.authState);if(t===o.SignedOut){this.authState=this.initialAuthState}else{this.authState=t}this.authData=e;if(this.authData)S.log("Auth Data was set:",this.authData);if(this.authState===t){this.handleAuthStateChange(this.authState,this.authData);S.info("authState has been updated to "+this.authState)}return[2]}))}))};t.prototype.getAuthComponent=function(t){switch(t){case o.SignIn:return n("amplify-sign-in",{federated:this.federated,usernameAlias:this.usernameAlias});case o.ConfirmSignIn:return n("amplify-confirm-sign-in",{user:this.authData});case o.SignUp:return n("amplify-sign-up",{usernameAlias:this.usernameAlias});case o.ConfirmSignUp:return n("amplify-confirm-sign-up",{user:this.authData,usernameAlias:this.usernameAlias});case o.ForgotPassword:return n("amplify-forgot-password",{usernameAlias:this.usernameAlias});case o.ResetPassword:return n("amplify-require-new-password",{user:this.authData});case o.VerifyContact:return n("amplify-verify-contact",{user:this.authData});case o.TOTPSetup:return n("amplify-totp-setup",{user:this.authData});case o.Loading:return n("div",null,"Loading...");default:throw new Error("Unhandled auth state: "+t)}};t.prototype.getSlotWithAuthComponent=function(t){var e=this.getAuthComponent(t);var a=v[t];var i=this.el.querySelector('[slot="'+a+'"]')===null;return n("slot",{name:a},i&&e)};t.prototype.disconnectedCallback=function(){s.remove(f,this.handleExternalAuthEvent);if(!this.hideToast)s.remove(l,this.handleToastEvent);return g};t.prototype.render=function(){var t=this;return n(a,null,!this.hideToast&&this.toastMessage&&n("amplify-toast",{message:this.toastMessage,handleClose:function(){t.toastMessage=""},"data-test":"authenticator-error"}),this.authState===o.SignedIn?[n("slot",{name:"greetings"}),n("slot",null)]:n("div",{class:"auth-container"},this.getSlotWithAuthComponent(this.authState)))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());b.style=w}}}));