import*as e from"react";import{getSortedFormFields as t}from"@aws-amplify/ui";import{FormField as r}from"./FormField.js";import{useAuthenticator as o}from"../hooks/useAuthenticator/index.js";function m(){const{_state:m,route:a}=o((({route:e})=>[e])),n=e.useRef(t(a,m).flatMap((([t,o],m)=>e.createElement(r,Object.assign({key:m,name:t},o))))).current;return e.createElement(e.Fragment,null,n)}export{m as FormFields};
