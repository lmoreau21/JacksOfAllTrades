import{__rest as e}from"tslib";import*as t from"react";import i from"classnames";import{useStepper as r}from"./useStepper.js";import"../Field/FieldClearButton.js";import{FieldDescription as a}from"../Field/FieldDescription.js";import{FieldErrorMessage as s}from"../Field/FieldErrorMessage.js";import{FieldGroup as o}from"../FieldGroup/FieldGroup.js";import"../FieldGroupIcon/FieldGroupIcon.js";import{FieldGroupIconButton as l}from"../FieldGroupIcon/FieldGroupIconButton.js";import{Flex as n}from"../Flex/Flex.js";import{IconAdd as d}from"../Icon/icons/IconAdd.js";import{ComponentClassNames as p,ComponentText as c}from"../shared/constants.js";import"../View/View.js";import{IconRemove as m}from"../Icon/icons/IconRemove.js";import{Input as u}from"../Input/Input.js";import{Label as b}from"../Label/Label.js";import{classNameModifier as h,classNameModifierByFlag as f}from"../shared/utils.js";import{splitPrimitiveProps as F}from"../shared/styleUtils.js";import{useStableId as I}from"../utils/useStableId.js";const g="decrease-icon",j="increase-icon",B=t.forwardRef(((g,j)=>{const{className:B,descriptiveText:S,defaultValue:v,errorMessage:E,hasError:D=!1,id:y,isDisabled:C,isReadOnly:L,isRequired:O,increaseButtonLabel:R=c.StepperField.increaseButtonLabel,decreaseButtonLabel:x=c.StepperField.decreaseButtonLabel,label:N,labelHidden:w=!1,onStepChange:z,size:G,variation:V,testId:H,bottom:M,height:$,left:q,padding:T,position:k,right:P,top:W,width:A,value:U}=g,J=e(g,["className","descriptiveText","defaultValue","errorMessage","hasError","id","isDisabled","isReadOnly","isRequired","increaseButtonLabel","decreaseButtonLabel","label","labelHidden","onStepChange","size","variation","testId","bottom","height","left","padding","position","right","top","width","value"]),K=I(y),Q=I(),X=S?Q:void 0,{baseStyleProps:Y,flexContainerStyleProps:Z,rest:_}=F(J),{step:ee,value:te,inputValue:ie,handleDecrease:re,handleIncrease:ae,handleOnBlur:se,handleOnChange:oe,handleOnWheel:le,setInputValue:ne,shouldDisableDecreaseButton:de,shouldDisableIncreaseButton:pe}=r(g);return t.useEffect((()=>{void 0!==U&&ne(U)}),[U,ne]),t.createElement(n,Object.assign({className:i(p.Field,h(p.Field,G),p.StepperField,B),"data-size":G,"data-variation":V,testId:H,width:A,height:$,position:k,padding:T,top:W,right:P,left:q,bottom:M},Z),t.createElement(b,{htmlFor:K,visuallyHidden:w},N),t.createElement(a,{id:Q,labelHidden:w,descriptiveText:S}),t.createElement(o,{outerStartComponent:t.createElement(l,{"aria-controls":K,ariaLabel:`${x} ${te-ee}`,className:i(p.StepperFieldButtonDecrease,h(p.StepperFieldButtonDecrease,V),f(p.StepperFieldButtonDecrease,"disabled",de)),"data-invalid":D,isDisabled:de,onClick:re,size:G},t.createElement(m,{"data-testid":"decrease-icon"})),outerEndComponent:t.createElement(l,{"aria-controls":K,ariaLabel:`${R} ${te+ee}`,className:i(p.StepperFieldButtonIncrease,h(p.StepperFieldButtonIncrease,V),f(p.StepperFieldButtonIncrease,"disabled",pe)),"data-invalid":D,isDisabled:pe,onClick:ae,size:G},t.createElement(d,{"data-testid":"increase-icon"}))},t.createElement(u,Object.assign({"aria-describedby":X,className:p.StepperFieldInput,hasError:D,id:K,isDisabled:C,isReadOnly:L,isRequired:O,onBlur:se,onChange:oe,onWheel:le,ref:j,size:G,variation:V,type:"number",value:ie},Y,_))),t.createElement(s,{hasError:D,errorMessage:E}))}));B.displayName="StepperField";export{g as DECREASE_ICON,j as INCREASE_ICON,B as StepperField};
