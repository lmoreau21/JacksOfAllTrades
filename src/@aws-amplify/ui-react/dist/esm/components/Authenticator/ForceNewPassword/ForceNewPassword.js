import e from"react";import{translate as o}from"@aws-amplify/ui";import{Button as t}from"../../../primitives/Button/Button.js";import{Flex as r}from"../../../primitives/Flex/Flex.js";import{Heading as n}from"../../../primitives/Heading/Heading.js";import{RemoteErrorMessage as i}from"../shared/RemoteErrorMessage.js";import{useAuthenticator as a}from"../hooks/useAuthenticator/index.js";import{useCustomComponents as m}from"../hooks/useCustomComponents/index.js";import{useFormHandlers as s}from"../hooks/useFormHandlers/useFormHandlers.js";import{FormFields as l}from"../shared/FormFields.js";import{RouteContainer as d}from"../RouteContainer/RouteContainer.js";const p=({className:l,variation:u})=>{const{isPending:c,toSignIn:f}=a((e=>[e.isPending,e.toSignIn])),{handleBlur:g,handleChange:h,handleSubmit:F}=s(),{components:{ForceNewPassword:{FormFields:C=p.FormFields}}}=m();return e.createElement(d,{className:l,variation:u},e.createElement("form",{"data-amplify-form":"","data-amplify-authenticator-forcenewpassword":"",method:"post",onChange:h,onSubmit:F,onBlur:g},e.createElement(r,{as:"fieldset",direction:"column",isDisabled:c},e.createElement(n,{level:3},o("Change Password")),e.createElement(C,null),e.createElement(i,null),e.createElement(t,{isDisabled:c,type:"submit",variation:"primary",isLoading:c,loadingText:o("Changing"),fontWeight:"normal"},o("Change Password")),e.createElement(t,{onClick:f,type:"button",fontWeight:"normal",variation:"link",size:"small"},o("Back to Sign In")))))};p.FormFields=function(){return e.createElement(l,null)};export{p as ForceNewPassword};
