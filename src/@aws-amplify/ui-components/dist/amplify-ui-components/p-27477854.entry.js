import{r as t,h as s,H as e}from"./p-33b9aa6b.js";import{Logger as a,I18n as i}from"@aws-amplify/core";import{A as r}from"./p-f199eef0.js";import"@aws-amplify/auth";import{T as p}from"./p-26837fd8.js";import"./p-900152ca.js";import"@aws-amplify/storage";import{c as o,p as c}from"./p-0548a042.js";const h=new a("S3TextPicker"),l=class{constructor(s){t(this,s),this.contentType="text/*",this.level=r.Public,this.fallbackText=p.PICKER_TEXT}async handleInput(t){const s=t.target.files[0],{path:e="",level:a,fileToKey:i,track:r}=this,p=e+o(s,i);if(!s)throw new Error("No file was selected");try{await c(p,s,a,r,s.type,h),this.src=p}catch(l){throw h.debug(l),new Error(l)}}render(){return s(e,null,s("amplify-s3-text",{textKey:this.src,path:this.path,level:this.level,track:this.track,identityId:this.identityId,contentType:this.contentType,fallbackText:i.get(this.fallbackText)}),s("amplify-picker",{inputHandler:t=>this.handleInput(t),acceptValue:"text/*"}))}};export{l as amplify_s3_text_picker}