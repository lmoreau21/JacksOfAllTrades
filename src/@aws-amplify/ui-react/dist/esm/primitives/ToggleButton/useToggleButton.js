import*as e from"react";import{isFunction as s}from"../shared/utils.js";const r=({isPressed:r,defaultPressed:t,onClick:a,onChange:o,value:i})=>{const l=void 0!==r,[d,n]=e.useState(t);return{isPressed:r=l?r:d,handleClick:e.useCallback((e=>{s(a)&&a(e),l||n(!d),l&&s(o)&&o(i)}),[l,a,o,d,i])}};export{r as useToggleButton};