import{__rest as e}from"tslib";import s from"classnames";import*as o from"react";import{classNameModifier as t,classNameModifierByFlag as a}from"../shared/utils.js";import{Button as r}from"../Button/Button.js";import{ComponentClassNames as i}from"../shared/constants.js";import{useToggleButton as n}from"./useToggleButton.js";const l=o.forwardRef(((l,d)=>{var{className:m,children:c,defaultPressed:u=!1,isDisabled:g,isPressed:f,onChange:p,onClick:h,size:C,value:v,variation:B}=l,P=e(l,["className","children","defaultPressed","isDisabled","isPressed","onChange","onClick","size","value","variation"]);const{isPressed:b,handleClick:j}=n({isPressed:f,defaultPressed:u,onChange:p,onClick:h,value:v}),k=s(i.ToggleButton,t(i.ToggleButton,B),a(i.ToggleButton,"pressed",b),m);return o.createElement(r,Object.assign({"aria-pressed":b,className:k,isDisabled:g,onClick:j,ref:d,size:C,type:"button",variation:B},P),c)}));l.displayName="ToggleButton";export{l as ToggleButton};