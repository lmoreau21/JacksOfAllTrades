import e from"react";import{translate as t}from"@aws-amplify/ui";import{Flex as o}from"../../../primitives/Flex/Flex.js";import{Heading as r}from"../../../primitives/Heading/Heading.js";import{useAuthenticator as n}from"../hooks/useAuthenticator/index.js";import{useCustomComponents as a}from"../hooks/useCustomComponents/index.js";import{useFormHandlers as m}from"../hooks/useFormHandlers/useFormHandlers.js";import{RemoteErrorMessage as i}from"../shared/RemoteErrorMessage.js";import{TwoButtonSubmitFooter as s}from"../shared/TwoButtonSubmitFooter.js";import{FormFields as l}from"../shared/FormFields.js";import{RouteContainer as u}from"../RouteContainer/RouteContainer.js";const c=({className:r,variation:d})=>{const{isPending:p}=n((e=>[e.isPending])),{handleChange:f,handleSubmit:h}=m(),{components:{ResetPassword:{Header:E=c.Header,Footer:F=c.Footer}}}=a();return e.createElement(u,{className:r,variation:d},e.createElement("form",{"data-amplify-form":"","data-amplify-authenticator-resetpassword":"",method:"post",onChange:f,onSubmit:h},e.createElement(o,{as:"fieldset",direction:"column",isDisabled:p},e.createElement(E,null),e.createElement(o,{direction:"column"},e.createElement(l,null)),e.createElement(i,null),e.createElement(s,{cancelButtonText:t("Back to Sign In"),cancelButtonSendType:"SIGN_IN",submitButtonText:p?e.createElement(e.Fragment,null,t("Sending"),"…"):e.createElement(e.Fragment,null,t("Send code"))}),e.createElement(F,null))))};c.Header=function(){return e.createElement(r,{level:3},t("Reset your password"))},c.Footer=function(){return null};export{c as ResetPassword};