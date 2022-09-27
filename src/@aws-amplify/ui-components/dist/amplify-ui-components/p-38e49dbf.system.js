var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{f(n.next(e))}catch(r){i(r)}}function l(e){try{f(n["throw"](e))}catch(r){i(r)}}function f(e){e.done?t(e.value):a(e.value).then(s,l)}f((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(r){return f([e,r])}}function f(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(l){s=[6,l];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,l=i.length;s<l;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n=e("N","amplify-ui-components");var a;var i;var s;var l=false;var f=false;var o=false;var $=false;var u=0;var c=false;var v=e("w",typeof window!=="undefined"?window:{});var d=e("C",v.CSS);var h=e("d",v.document||{head:{}});var m=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}});var p=function(){return(h.head.attachShadow+"").indexOf("[native")>-1}();var g=e("a",(function(e){return Promise.resolve(e)}));var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var b=function(e,r,t,n){if(t){t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=e;var l=w(r,i);var f=N(n);m.ael(s,a,l,f);(r.$rmListeners$=r.$rmListeners$||[]).push((function(){return m.rel(s,a,l,f)}))}))}};var w=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([r,t])}}}};var N=function(e){return(e&2)!==0};var R="{visibility:hidden}.hydrated{visibility:inherit}";var S="http://www.w3.org/1999/xlink";var x=function(e,r){if(r===void 0){r=""}{return function(){return}}};var _=function(e,r){{return function(){return}}};var k=new WeakMap;var C=function(e,r,t){var n=Be.get(e);if(y&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Be.set(e,n)};var L=function(e,r,t,n){var a=j(r);var i=Be.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var s=k.get(e);var l=void 0;if(!s){k.set(e,s=new Set)}if(!s.has(a)){{if(m.$cssShim$){l=m.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var f=l["s-sc"];if(f){a=f;s=null}}else{l=h.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var T=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=x("attachStyles",r.$tagName$);var i=L(p&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h");if(n&2){t.classList.add(i+"-s")}}a()};var j=function(e,r){return"sc-"+e.$tagName$};var A={};var E="http://www.w3.org/2000/svg";var M="http://www.w3.org/1999/xhtml";var O=function(e){return e!=null};var P=function(e){e=typeof e;return e==="object"||e==="function"};var B=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=null;var l=false;var f=false;var o=[];var $=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!P(a)){a=String(a)}if(l&&f){o[o.length-1].$text$+=a}else{o.push(l?I(null,a):a)}f=l}}};$(t);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var c=I(e,null);c.$attrs$=r;if(o.length>0){c.$children$=o}{c.$key$=i}{c.$name$=s}return c}));var I=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var q=e("H",{});var z=function(e){return e&&e.$tag$===q};var U=function(e,r,t,n,a,i){if(t!==n){var s=Ee(e,r);var l=r.toLowerCase();if(r==="class"){var f=e.classList;var o=V(t);var $=V(n);f.remove.apply(f,o.filter((function(e){return e&&!$.includes(e)})));f.add.apply(f,$.filter((function(e){return e&&!o.includes(e)})))}else if(r==="style"){{for(var u in t){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!t||n[u]!==t[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Ee(v,l)){r=l.slice(2)}else{r=l[2]+r.slice(3)}if(t){m.rel(e,r,t,false)}if(n){m.ael(e,r,n,false)}}else{var c=P(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=d){e[r]=d}}else{e[r]=n}}catch(p){}}var h=false;{if(l!==(l=l.replace(/^xlink\:?/,""))){r=l;h=true}}if(n==null||n===false){if(n!==false||e.getAttribute(r)===""){if(h){e.removeAttributeNS(S,r)}else{e.removeAttribute(r)}}}else if((!s||i&4||a)&&!c){n=n===true?"":n;if(h){e.setAttributeNS(S,r,n)}else{e.setAttribute(r,n)}}}}};var H=/\s/;var V=function(e){return!e?[]:e.split(H)};var W=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||A;var s=r.$attrs$||A;{for(n in i){if(!(n in s)){U(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){U(a,n,i[n],s[n],t,r.$flags$)}};var D=function(e,r,t,n){var f=r.$children$[t];var u=0;var c;var v;var d;if(!l){o=true;if(f.$tag$==="slot"){if(a){n.classList.add(a+"-s")}f.$flags$|=f.$children$?2:1}}if(f.$text$!==null){c=f.$elm$=h.createTextNode(f.$text$)}else if(f.$flags$&1){c=f.$elm$=h.createTextNode("")}else{if(!$){$=f.$tag$==="svg"}c=f.$elm$=h.createElementNS($?E:M,f.$flags$&2?"slot-fb":f.$tag$);if($&&f.$tag$==="foreignObject"){$=false}{W(null,f,$)}if(O(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(f.$children$){for(u=0;u<f.$children$.length;++u){v=D(e,f,u,c);if(v){c.appendChild(v)}}}{if(f.$tag$==="svg"){$=false}else if(c.tagName==="foreignObject"){$=true}}}{c["s-hn"]=s;if(f.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=f.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===f.$tag$&&e.$elm$){F(e.$elm$,false)}}}return c};var F=function(e,r){m.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==s&&a["s-ol"]){Y(a).insertBefore(a,X(a));a["s-ol"].remove();a["s-ol"]=undefined;o=true}if(r){F(a,r)}}m.$flags$&=~1};var G=function(e,r,t,n,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var f;if(l.shadowRoot&&l.tagName===s){l=l.shadowRoot}for(;a<=i;++a){if(n[a]){f=D(null,t,a,e);if(f){n[a].$elm$=f;l.insertBefore(f,X(r))}}}};var Q=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;ae(n);{f=true;if(a["s-ol"]){a["s-ol"].remove()}else{F(a,true)}}a.remove()}}};var J=function(e,r,t,n){var a=0;var i=0;var s=0;var l=0;var f=r.length-1;var o=r[0];var $=r[f];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=f&&i<=u){if(o==null){o=r[++a]}else if($==null){$=r[--f]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(K(o,c)){Z(o,c);o=r[++a];c=n[++i]}else if(K($,v)){Z($,v);$=r[--f];v=n[--u]}else if(K(o,v)){if(o.$tag$==="slot"||v.$tag$==="slot"){F(o.$elm$.parentNode,false)}Z(o,v);e.insertBefore(o.$elm$,$.$elm$.nextSibling);o=r[++a];v=n[--u]}else if(K($,c)){if(o.$tag$==="slot"||v.$tag$==="slot"){F($.$elm$.parentNode,false)}Z($,c);e.insertBefore($.$elm$,o.$elm$);$=r[--f];c=n[++i]}else{s=-1;{for(l=a;l<=f;++l){if(r[l]&&r[l].$key$!==null&&r[l].$key$===c.$key$){s=l;break}}}if(s>=0){h=r[s];if(h.$tag$!==c.$tag$){d=D(r&&r[i],t,s,e)}else{Z(h,c);r[s]=undefined;d=h.$elm$}c=n[++i]}else{d=D(r&&r[i],t,i,e);c=n[++i]}if(d){{Y(o.$elm$).insertBefore(d,X(o.$elm$))}}}}if(a>f){G(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){Q(r,a,f)}};var K=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var X=function(e){return e&&e["s-ol"]||e};var Y=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Z=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var l;if(s===null){{$=i==="svg"?true:i==="foreignObject"?false:$}{if(i==="slot");else{W(e,r,$)}}if(n!==null&&a!==null){J(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}G(t,null,r,a,0,a.length-1)}else if(n!==null){Q(n,0,n.length-1)}if($&&i==="svg"){$=false}}else if(l=t["s-cr"]){l.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var ee=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var l;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){l=r[i].nodeType;if(s!==""){if(l===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(l===1||l===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}ee(t)}}};var re=[];var te=function(e){var r;var t;var n;var a;var i;var s;var l=0;var o=e.childNodes;var $=o.length;for(;l<$;l++){r=o[l];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(ne(t,a)){i=re.find((function(e){return e.$nodeToRelocate$===t}));f=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{re.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){re.map((function(e){if(ne(e.$nodeToRelocate$,t["s-sn"])){i=re.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!re.some((function(e){return e.$nodeToRelocate$===t}))){re.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){te(r)}}};var ne=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var ae=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(ae)}};var ie=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||I(null,null);var u=z(r)?r:B(null,null,r);s=t.tagName;u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{i=t["s-cr"];l=p&&(n.$flags$&1)!==0;f=false}Z($,u);{m.$flags$|=1;if(o){te(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<re.length;w++){c=re[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}for(w=0;w<re.length;w++){c=re[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){b=d["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(f){ee(u.$elm$)}m.$flags$&=~1;re.length=0}};var se=e("g",(function(e){return Te(e).$hostElement$}));var le=e("c",(function(e,r,t){var n=se(e);return{emit:function(e){return fe(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var fe=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var oe=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var $e=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}oe(e,e.$ancestorComponent$);var t=function(){return ue(e,r)};return Fe(t)};var ue=function(e,r){var t=x("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var r=e[0],t=e[1];return pe(n,r,t)}));e.$queuedListeners$=null}}{a=pe(n,"componentWillLoad")}}t();return ge(a,(function(){return ce(e,n,r)}))};var ce=function(e,r,t){var n=e.$hostElement$;var a=x("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){T(e)}var s=x("render",e.$cmpMeta$.$tagName$);{{ie(e,ve(e,r))}}if(m.$cssShim$){m.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var l=n["s-p"];var f=function(){return de(e)};if(l.length===0){f()}else{Promise.all(l).then(f);e.$flags$|=4;l.length=0}}};var ve=function(e,r){try{r=r.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(t){Me(t)}return r};var de=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=x("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{pe(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{ye(t)}{pe(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){me()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){De((function(){return $e(e,false)}))}e.$flags$&=~(4|512)}};var he=function(e){{var r=Te(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){$e(r,false)}return t}};var me=function(e){{ye(h.documentElement)}{m.$flags$|=2}De((function(){return fe(v,"appload",{detail:{namespace:n}})}))};var pe=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){Me(n)}}return undefined};var ge=function(e,r){return e&&e.then?e.then(r):r()};var ye=function(e){return e.classList.add("hydrated")};var be=function(e,r){if(e!=null&&!P(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var we=function(e,r){return Te(e).$instanceValues$.get(r)};var Ne=function(e,r,t,n){var a=Te(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var l=a.$lazyInstance$;t=be(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(l){if(n.$watchers$){if(s&128){var f=n.$watchers$[r];if(f){f.map((function(e){try{l[e](t,i,r)}catch(n){Me(n)}}))}}}if((s&(2|16))===2){$e(a,false)}}}};var Re=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return we(this,n)},set:function(e){Ne(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;m.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var Se=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,l,f,o,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Pe(a);if(!s.then)return[3,2];e=_();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Re(s,a,2);s.isProxied=true}t=x("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){Me(c)}{n.$flags$&=~8}{n.$flags$|=128}t();if(!s.style)return[3,5];i=s.style;l=j(a);if(!!Be.has(l))return[3,5];f=x("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-536c16c3.system.js").then((function(e){return e.scopeCss(i,l,false)}))];case 3:i=u.sent();u.label=4;case 4:C(l,i,!!(a.$flags$&1));f();u.label=5;case 5:o=n.$ancestorComponent$;$=function(){return $e(n,true)};if(o&&o["s-rc"]){o["s-rc"].push($)}else{$()}return[2]}}))}))};var xe=function(e){if((m.$flags$&1)===0){var r=Te(e);var t=r.$cmpMeta$;var n=x("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){_e(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){oe(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Se(e,r,t)}}else{b(e,r,t.$listeners$)}n()}};var _e=function(e){var r=e["s-cr"]=h.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var ke=function(e){if((m.$flags$&1)===0){var r=Te(e);var t=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$.map((function(e){return e()}));r.$rmListeners$=undefined}}if(m.$cssShim$){m.$cssShim$.removeHost(e)}{pe(t,"disconnectedCallback")}}};var Ce=e("b",(function(e,r){if(r===void 0){r={}}var t=x();var n=[];var a=r.exclude||[];var i=v.customElements;var s=h.head;var l=s.querySelector("meta[charset]");var f=h.createElement("style");var o=[];var $;var u=true;Object.assign(m,r);m.$resourcesUrl$=new URL(r.resourcesUrl||"./",h.baseURI).href;{if(r.syncQueue){m.$flags$|=4}}e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$watchers$={}}if(!p&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var l=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;Ae(r,t);if(t.$flags$&1){if(p){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){o.push(this)}else{m.jmp((function(){return xe(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;m.jmp((function(){return ke(e)}))};r.prototype.forceUpdate=function(){he(this)};r.prototype.componentOnReady=function(){return Te(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,Re(l,t,1))}}))}));{f.innerHTML=n+R;f.setAttribute("data-styles","");s.insertBefore(f,l?l.nextSibling:s.firstChild)}u=false;if(o.length){o.map((function(e){return e.connectedCallback()}))}else{{m.jmp((function(){return $=setTimeout(me,30)}))}}t()}));var Le=new WeakMap;var Te=function(e){return Le.get(e)};var je=e("r",(function(e,r){return Le.set(r.$lazyInstance$=e,r)}));var Ae=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}b(e,t,r.$listeners$);return Le.set(e,t)};var Ee=function(e,r){return r in e};var Me=function(e){return console.error(e)};var Oe=new Map;var Pe=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var s=Oe.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{Oe.set(i,e)}return e[a]}),Me)};var Be=new Map;var Ie=[];var qe=[];var ze=[];var Ue=function(e,r){return function(t){e.push(t);if(!c){c=true;if(r&&m.$flags$&4){De(We)}else{m.raf(We)}}}};var He=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){Me(t)}}e.length=0};var Ve=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){Me(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var We=function(){{u++}He(Ie);{var e=(m.$flags$&6)===2?performance.now()+14*Math.ceil(u*(1/10)):Infinity;Ve(qe,e);Ve(ze,e);if(qe.length>0){ze.push.apply(ze,qe);qe.length=0}if(c=Ie.length+qe.length+ze.length>0){m.raf(We)}else{u=0}}};var De=function(e){return g().then(e)};var Fe=Ue(qe,true)}}}));