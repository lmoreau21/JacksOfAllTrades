import{__rest as e}from"tslib";import*as t from"react";import r from"classnames";import{classNameModifier as i}from"../shared/utils.js";import{ComponentClassNames as o}from"../shared/constants.js";import{splitPrimitiveProps as s}from"../shared/styleUtils.js";import"../Field/FieldClearButton.js";import{FieldDescription as n}from"../Field/FieldDescription.js";import{FieldErrorMessage as a}from"../Field/FieldErrorMessage.js";import{FieldGroup as l}from"../FieldGroup/FieldGroup.js";import{Flex as d}from"../Flex/Flex.js";import{Input as m}from"../Input/Input.js";import{Label as p}from"../Label/Label.js";import{isTextAreaField as c,isTextAreaRef as f,isInputField as u,isInputRef as h}from"./utils.js";import{TextArea as b}from"../TextArea/TextArea.js";import{useStableId as E}from"../utils/useStableId.js";import{useDeprecationWarning as g}from"../../hooks/useDeprecationWarning.js";const j=3,F=(j,F)=>{const{className:x,descriptiveText:C,errorMessage:v,hasError:y=!1,id:S,label:T,labelHidden:w=!1,outerEndComponent:M,outerStartComponent:I,innerStartComponent:z,innerEndComponent:H,isMultiline:N,type:A,size:L,testId:O,variation:P,bottom:D,height:G,left:W,padding:k,position:B,right:R,top:U,width:q}=j,J=e(j,["className","descriptiveText","errorMessage","hasError","id","label","labelHidden","outerEndComponent","outerStartComponent","innerStartComponent","innerEndComponent","isMultiline","type","size","testId","variation","bottom","height","left","padding","position","right","top","width"]),K=E(S),Q=E(),V=C?Q:void 0,{flexContainerStyleProps:X,baseStyleProps:Y,rest:Z}=s(J);g({shouldWarn:j.isMultiline,message:"TextField isMultiLine prop will be deprecated in next major release of @aws-amplify/ui-react. Please use TextAreaField component instead."});let $=null;if(c(j)){const{rows:e}=j;$=t.createElement(b,Object.assign({"aria-describedby":V,hasError:y,id:K,ref:f(j)?F:void 0,rows:null!=e?e:3,size:L,variation:P},Y,Z))}else if(u(j)){const{type:e="text"}=j;$=t.createElement(m,Object.assign({"aria-describedby":V,hasError:y,id:K,ref:h(j)?F:void 0,size:L,type:e,variation:P},Y,Z))}return t.createElement(d,Object.assign({className:r(o.Field,i(o.Field,L),o.TextField,x),bottom:D,"data-size":L,height:G,left:W,padding:k,position:B,right:R,testId:O,top:U,width:q},X),t.createElement(p,{htmlFor:K,visuallyHidden:w},T),t.createElement(n,{id:Q,labelHidden:w,descriptiveText:C}),t.createElement(l,{outerStartComponent:I,outerEndComponent:M,innerStartComponent:z,innerEndComponent:H,variation:P},$),t.createElement(a,{hasError:y,errorMessage:v}))},x=t.forwardRef(F);F.displayName="TextField";export{j as DEFAULT_ROW_COUNT,x as TextField};