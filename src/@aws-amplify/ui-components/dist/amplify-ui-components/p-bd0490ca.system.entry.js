System.register(["./p-38e49dbf.system.js","@aws-amplify/core","./p-74bf56f1.system.js","@aws-amplify/auth","./p-239ad290.system.js","./p-edf8f59e.system.js","./p-2933db11.system.js"],(function(t){"use strict";var e,n,a,i,o,r,s;return{setters:[function(t){e=t.r;n=t.h},function(t){a=t.isEmpty},function(t){i=t.A},function(t){o=t.Auth},function(){},function(t){r=t.N},function(t){s=t.d}],execute:function(){var u=t("amplify_federated_buttons",function(){function t(t){e(this,t);this.authState=i.SignIn;this.federated={};this.handleAuthStateChange=s}t.prototype.componentWillLoad=function(){if(!o||typeof o.configure!=="function"){throw new Error(r)}var t=o.configure().oauth,e=t===void 0?{}:t;if(e["domain"]){this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),e)}else if(e["awsCognito"]){this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),e["awsCognito"])}if(e["auth0"]){this.federated.auth0Config=Object.assign(Object.assign({},this.federated.auth0Config),e["auth0"])}};t.prototype.render=function(){if(!Object.values(i).includes(this.authState)){return null}if(a(this.federated)){return null}var t=this.federated,e=t.amazonClientId,o=t.auth0Config,r=t.facebookAppId,s=t.googleClientId,u=t.oauthConfig;return n("div",null,s&&n("div",null,n("amplify-google-button",{clientId:s,handleAuthStateChange:this.handleAuthStateChange})),r&&n("div",null,n("amplify-facebook-button",{appId:r,handleAuthStateChange:this.handleAuthStateChange})),e&&n("div",null,n("amplify-amazon-button",{clientId:e,handleAuthStateChange:this.handleAuthStateChange})),u&&n("div",null,n("amplify-oauth-button",{config:u})),o&&n("div",null,n("amplify-auth0-button",{config:o,handleAuthStateChange:this.handleAuthStateChange})))};return t}());var h=".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}";var f=t("amplify_strike",function(){function t(t){e(this,t)}t.prototype.render=function(){return n("span",{class:"strike-content"},n("slot",null))};return t}());f.style=h}}}));