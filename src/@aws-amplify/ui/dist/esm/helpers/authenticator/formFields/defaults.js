import{__assign as o,__spreadArray as r}from"tslib";import{getActorState as e,getActorContext as n}from"../actor.js";import{defaultFormFieldOptions as t}from"../constants.js";import{getPrimaryAlias as a}from"../context.js";import{isAuthFieldWithDefaults as s}from"../form.js";var i=function(r,e){var a=n(r).country_code,s=t[e];return"tel"===s.type&&(s=o(o({},s),{dialCode:a})),s},c=function(r){var e=a(r);return o(o({},i(r,e)),{autocomplete:"username"})},d=function(r){return{confirmation_code:o(o({},i(r,"confirmation_code")),{label:"Code *",placeholder:"Code"})}},u={signIn:function(r){return{username:o({},c(r)),password:o(o({},i(r,"password")),{autocomplete:"current-password"})}},signUp:function(e){for(var n=e.context.config,t=n.loginMechanisms,d=n.signUpAttributes,u=a(e),f={},m=0,l=Array.from(new Set(r(r(r([],t,!0),["password","confirm_password"],!1),d,!0)));m<l.length;m++){var p=l[m];if(s(p)){var w=p===u?c(e):i(e,p);f[p]=o({},w)}else console.debug("Authenticator does not have a default implementation for ".concat(p,". Customize SignUp FormFields to add your own."))}return f},confirmSignUp:function(r){return{confirmation_code:o(o({},i(r,"confirmation_code")),{placeholder:"Enter your code"})}},confirmSignIn:d,forceNewPassword:function(n){for(var t=e(n).context.requiredAttributes,a={},c=0,d=Array.from(new Set(r(["password","confirm_password"],t,!0)));c<d.length;c++){var u=d[c];s(u)?a[u]=o({},i(n,u)):console.debug("Authenticator does not have a default implementation for ".concat(u,". Customize ForceNewPassword FormFields to add your own."))}return a},resetPassword:function(r){var e=a(r),n=t[e].label;return{username:o(o({},c(r)),{label:"Enter your ".concat(n.toLowerCase()),placeholder:"Enter your ".concat(n.toLowerCase())})}},confirmResetPassword:function(r){return o(o({},d(r)),{password:o(o({},i(r,"password")),{label:"New Password",placeholder:"New Password"}),confirm_password:o(o({},i(r,"confirm_password")),{label:"Confirm Password",placeholder:"Confirm Password"})})},confirmVerifyUser:d,setupTOTP:d};export{u as defaultFormFieldsGetters};
