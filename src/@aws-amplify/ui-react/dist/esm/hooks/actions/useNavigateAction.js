import*as e from"react";import{Hub as r}from"aws-amplify";import{UI_CHANNEL as o,ACTION_NAVIGATE_STARTED as a,EVENT_ACTION_CORE_NAVIGATE as t,ACTION_NAVIGATE_FINISHED as n}from"./constants.js";import{AMPLIFY_SYMBOL as s}from"../../helpers/constants.js";const l="noopener noreferrer",c="_self",i=l=>{const{type:c,url:i,anchor:p,target:d}=l,f=e.useMemo((()=>{switch(c){case"url":return()=>{window.open(i,d||"_self","noopener noreferrer")};case"anchor":return()=>{window.location.hash=p};case"reload":return()=>{window.location.reload()};default:return()=>{console.warn('Please provide a valid navigate type. Available types are "url", "anchor" and "reload".')}}}),[p,d,c,i]);return()=>{r.dispatch(o,{event:a,data:l},t,s),f(),r.dispatch(o,{event:n,data:l},t,s)}};export{c as defaultTarget,i as useNavigateAction,l as windowFeatures};