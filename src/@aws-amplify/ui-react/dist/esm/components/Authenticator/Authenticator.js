import*as e from"react";import{Provider as t,useAuthenticator as s}from"./hooks/useAuthenticator/index.js";import{CustomComponentsContext as o}from"./hooks/useCustomComponents/index.js";import"../../primitives/View/View.js";import{Router as r}from"./Router/Router.js";import{SetupTOTP as i}from"./SetupTOTP/SetupTOTP.js";import{SignIn as n}from"./SignIn/SignIn.js";import{SignUp as m}from"./SignUp/SignUp.js";import{ForceNewPassword as a}from"./ForceNewPassword/ForceNewPassword.js";import"./ResetPassword/ConfirmResetPassword.js";import{ResetPassword as u}from"./ResetPassword/ResetPassword.js";import{defaultComponents as c}from"./hooks/useCustomComponents/defaultComponents.js";function p({children:t,className:i,components:n,formFields:m,hideSignUp:a,initialState:u,loginMechanisms:p,signUpAttributes:l,services:d,socialProviders:f,variation:g}){const{route:P,signOut:j,user:w}=s((({route:e,signOut:t,user:s})=>[e,t,s]));!function(t){const{_send:o,route:r}=s((({route:e})=>[e])),i=e.useRef(!1);e.useEffect((()=>{i.current||"setup"!==r||(o({type:"INIT",data:t}),i.current=!0)}),[o,r,t])}({initialState:u,loginMechanisms:p,services:d,signUpAttributes:l,socialProviders:f,formFields:m});const S=e.useMemo((()=>({components:Object.assign(Object.assign({},c),n)})),[n]);return"authenticated"===P||"signOut"===P?t?e.createElement(e.Fragment,null,"function"==typeof t?t({signOut:j,user:w}):t):null:e.createElement(o.Provider,{value:S},e.createElement(r,{className:i,hideSignUp:a,variation:g}))}function l(s){return e.createElement(t,null,e.createElement(p,Object.assign({},s)))}l.Provider=t,l.ResetPassword=u,l.SetupTOTP=i,l.SignIn=n,l.SignUp=m,l.ForceNewPassword=a;export{l as Authenticator,p as AuthenticatorInternal};
