import*as t from"react";import{useLayoutEffect as o}from"./useLayoutEffect.js";const r="amplify-id",e=t["useId".toString()]||(()=>{});let i=0;const s=r=>{const[s,n]=t.useState(e());return o((()=>{r||n((t=>null!=t?t:String(i++)))}),[r]),r||(s?`amplify-id-${s}`:"")};export{r as AUTO_GENERATED_ID_PREFIX,s as useStableId};
