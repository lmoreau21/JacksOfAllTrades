import{__rest as e}from"tslib";import*as a from"react";import t from"classnames";import{Flex as r}from"../Flex/Flex.js";import{View as s}from"../View/View.js";import{usePaginationItems as n}from"./usePaginationItems.js";import{ComponentClassNames as o}from"../shared/constants.js";const i=a.forwardRef(((i,l)=>{var{className:m,currentPage:g=1,totalPages:c,hasMorePages:p=!1,siblingCount:u,currentPageLabel:P,pageLabel:b,previousLabel:f,nextLabel:L,onNext:x,onPrevious:h,onChange:j}=i,v=e(i,["className","currentPage","totalPages","hasMorePages","siblingCount","currentPageLabel","pageLabel","previousLabel","nextLabel","onNext","onPrevious","onChange"]);const N=n(g,c,p,u,P,b,f,L,x,h,j);return a.createElement(s,Object.assign({as:"nav",className:t(o.Pagination,m),ref:l},v),a.createElement(r,{as:"ol",justifyContent:"center",alignItems:"center",gap:"inherit"},N))}));i.displayName="Pagination";export{i as Pagination};
