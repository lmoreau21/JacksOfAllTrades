import{__rest as e}from"tslib";import*as o from"react";import a from"classnames";import{ComponentClassNames as t,ComponentText as i}from"../shared/constants.js";import{CountryCodeSelect as l}from"./CountryCodeSelect.js";import{TextField as r}from"../TextField/TextField.js";const d=o.forwardRef(((d,n)=>{var{autoComplete:s="tel-national",className:C,countryCodeName:m,countryCodeLabel:u=i.PhoneNumberField.countryCodeLabel,countryCodeRef:c,defaultCountryCode:y,defaultDialCode:f,dialCodeLabel:p=i.PhoneNumberField.countryCodeLabel,dialCodeList:b,dialCodeName:h,dialCodeRef:N,hasError:L,isDisabled:R,isReadOnly:D,onCountryCodeChange:g,onDialCodeChange:E,onInput:F,size:v,type:O,variation:j}=d,z=e(d,["autoComplete","className","countryCodeName","countryCodeLabel","countryCodeRef","defaultCountryCode","defaultDialCode","dialCodeLabel","dialCodeList","dialCodeName","dialCodeRef","hasError","isDisabled","isReadOnly","onCountryCodeChange","onDialCodeChange","onInput","size","type","variation"]);const P=h||m,x=p||u,I=f||y,S=E||g,T=N||c;return o.createElement(r,Object.assign({outerStartComponent:o.createElement(l,{defaultValue:I,dialCodeList:b,className:C,hasError:L,isDisabled:R,isReadOnly:D,label:x,name:P,onChange:S,ref:T,size:v,variation:j}),autoComplete:s,className:a(t.PhoneNumberField,C),hasError:L,isDisabled:R,isReadOnly:D,isMultiline:!1,onInput:F,ref:n,size:v,type:"tel",variation:j},z))}));d.displayName="PhoneNumberField";export{d as PhoneNumberField};