import{r as t,h as i}from"./p-33b9aa6b.js";import{I18n as e}from"@aws-amplify/core";import"@aws-amplify/auth";import{T as s}from"./p-26837fd8.js";const p=class{constructor(i){t(this,i),this.pickerText=s.PICKER_TEXT,this.acceptValue="*/*"}render(){return i("div",{class:"picker"},i("slot",{name:"picker"},i("amplify-button",null,e.get(this.pickerText))),i("input",{title:e.get(this.pickerText),type:"file",accept:this.acceptValue,onChange:t=>this.inputHandler(t)}))}};p.style=".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}";export{p as amplify_picker}