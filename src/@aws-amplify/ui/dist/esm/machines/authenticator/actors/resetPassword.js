import{__awaiter as e,__generator as r}from"tslib";import{createMachine as t,sendUpdate as n}from"xstate";import{runValidators as s}from"../../../validators/index.js";import{clearError as o,clearFormValues as a,clearTouched as i,clearUsername as d,clearValidationError as l,handleInput as c,handleSubmit as u,handleBlur as m,setFieldErrors as p,setRemoteError as g,setUsername as v}from"../actions.js";import{defaultServices as f}from"../defaultServices.js";function E(E){var h=E.services;return t({id:"resetPasswordActor",initial:"init",predictableActionArguments:!0,states:{init:{always:[{target:"confirmResetPassword",cond:"shouldAutoConfirmReset"},{target:"resetPassword"}]},resetPassword:{initial:"edit",exit:["clearFormValues","clearError","clearTouched"],states:{edit:{entry:"sendUpdate",on:{SUBMIT:{actions:"handleSubmit",target:"submit"},CHANGE:{actions:"handleInput"},BLUR:{actions:"handleBlur"}}},submit:{tags:["pending"],entry:["sendUpdate","setUsername","clearError"],invoke:{src:"resetPassword",onDone:{target:"#resetPasswordActor.confirmResetPassword"},onError:{actions:["setRemoteError"],target:"edit"}}}}},confirmResetPassword:{type:"parallel",exit:["clearFormValues","clearError","clearUsername","clearTouched"],states:{validation:{initial:"pending",states:{pending:{invoke:{src:"validateFields",onDone:{target:"valid",actions:"clearValidationError"},onError:{target:"invalid",actions:"setFieldErrors"}}},valid:{entry:"sendUpdate"},invalid:{entry:"sendUpdate"}},on:{CHANGE:{actions:"handleInput",target:".pending"},BLUR:{actions:"handleBlur",target:".pending"}}},submission:{initial:"idle",states:{idle:{entry:"sendUpdate",on:{SUBMIT:{actions:"handleSubmit",target:"validate"},RESEND:"resendCode",CHANGE:{actions:"handleInput"},BLUR:{actions:"handleBlur"}}},validate:{entry:"sendUpdate",invoke:{src:"validateFields",onDone:{target:"pending",actions:"clearValidationError"},onError:{target:"idle",actions:"setFieldErrors"}}},resendCode:{tags:["pending"],entry:["clearError","sendUpdate"],invoke:{src:"resetPassword",onDone:{target:"idle"},onError:{actions:"setRemoteError",target:"idle"}}},pending:{tags:["pending"],entry:["clearError","sendUpdate"],invoke:{src:"confirmResetPassword",onDone:{actions:"clearUsername",target:"#resetPasswordActor.resolved"},onError:{actions:"setRemoteError",target:"idle"}}}}}}},resolved:{type:"final"}}},{actions:{clearError:o,clearFormValues:a,clearTouched:i,clearUsername:d,clearValidationError:l,handleInput:c,handleSubmit:u,handleBlur:m,setFieldErrors:p,setRemoteError:g,setUsername:v,sendUpdate:n()},guards:{shouldAutoConfirmReset:function(e,r){return!(!e.intent||"confirmPasswordReset"!==e.intent)}},services:{resetPassword:function(t){return e(this,void 0,void 0,(function(){var e;return r(this,(function(r){return e=t.username,[2,h.handleForgotPassword(e)]}))}))},confirmResetPassword:function(t){return e(this,void 0,void 0,(function(){var e,n,s,o;return r(this,(function(r){return e=t.username,n=t.formValues,s=n.confirmation_code,o=n.password,[2,h.handleForgotPasswordSubmit({username:e,code:s,password:o})]}))}))},validateFields:function(t,n){return e(this,void 0,void 0,(function(){return r(this,(function(e){return[2,s(t.formValues,t.touched,t.passwordSettings,[f.validateConfirmPassword])]}))}))}}})}export{E as resetPasswordActor};