import{__rest as a}from"tslib";import*as e from"react";import t from"classnames";import{classNameModifier as i}from"../shared/utils.js";import{ComponentClassNames as r}from"../shared/constants.js";import{View as s}from"../View/View.js";const o=e.forwardRef(((o,l)=>{var{caption:n,children:m,className:c,highlightOnHover:h=!1,size:p,variation:d}=o,f=a(o,["caption","children","className","highlightOnHover","size","variation"]);const b=t(r.Table,i(r.Table,p),i(r.Table,d),c);return e.createElement(s,Object.assign({as:"table",className:b,"data-highlightonhover":h,"data-size":p,"data-variation":d,ref:l},f),n&&e.createElement(s,{as:"caption",className:r.TableCaption},n),m)}));o.displayName="Table";export{o as Table};