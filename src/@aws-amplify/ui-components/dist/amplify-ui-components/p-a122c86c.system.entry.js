System.register(["./p-38e49dbf.system.js","@aws-amplify/core","@aws-amplify/auth","./p-239ad290.system.js"],(function(e){"use strict";var t,i,r,o;return{setters:[function(e){t=e.r;i=e.h},function(e){r=e.I18n},function(){},function(e){o=e.T}],execute:function(){var a=":host{--object-fit:cover;--hint-color:var(--amplify-grey);--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--header-hint-size:var(--amplify-text-md);--placeholder-hint-size:var(--amplify-text-sm);--placeholder-border-color:var(--amplify-grey)}.photo-picker-container{max-width:50rem}img{-o-object-fit:var(--object-fit);object-fit:var(--object-fit);width:100%;height:100%}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}.header{color:var(--header-color);font-size:var(--header-size);font-weight:bold;margin-bottom:24px}.header-hint{color:var(--hint-color);font-size:var(--header-hint-size);word-break:break-word;margin-bottom:24px}.picker-body{position:relative;width:25rem;height:16rem;border:2px dotted var(--placeholder-border-color);padding:10px;margin-bottom:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden}.placeholder-hint{color:var(--hint-color);font-family:Helvetica;font-style:italic;font-size:var(--placeholder-hint-size);word-break:break-word;margin-bottom:30px}";var n=e("amplify_photo_picker",function(){function e(e){var i=this;t(this,e);this.headerTitle=o.PHOTO_PICKER_TITLE;this.headerHint=o.PHOTO_PICKER_HINT;this.placeholderHint=o.PHOTO_PICKER_PLACEHOLDER_HINT;this.buttonText=o.PHOTO_PICKER_BUTTON_TEXT;this.handleClick=function(){};this.handleInput=function(e){i.file=e.target.files[0];var t=new FileReader;t.onload=function(e){var r=t.result;i.previewState=r};t.readAsDataURL(i.file)}}e.prototype.componentWillLoad=function(){this.previewState=this.previewSrc};e.prototype.render=function(){var e=this;return i("div",{class:"photo-picker-container"},i("amplify-section",null,i("div",{class:"header"},r.get(this.headerTitle)),i("div",{class:"header-hint"},r.get(this.headerHint)),i("amplify-picker",{acceptValue:"image/*",inputHandler:this.handleInput},i("div",{class:"picker-body",slot:"picker"},this.previewState?i("img",{src:""+this.previewState}):i("amplify-icon",{name:"photoPlaceholder"}))),i("div",{class:"placeholder-hint"},r.get(this.placeholderHint)),i("amplify-button",{handleButtonClick:function(){return e.handleClick(e.file)}},r.get(this.buttonText))))};return e}());n.style=a}}}));