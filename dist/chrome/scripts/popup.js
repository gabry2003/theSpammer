!function(e){var r={};function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="",s(s.s=5)}({0:function(e,r,s){(function(s){var t,n,g;n=[e],void 0===(g="function"==typeof(t=function(e){"use strict";if(void 0===window.browser||Object.getPrototypeOf(window.browser)!==Object.prototype||Object.getPrototypeOf(s)!==Object.prototype){const r="The message port closed before a response was received.",s="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",t=()=>{const e={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getBrowserInfo:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(e).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class t extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const n=(e,r)=>(...s)=>{chrome.runtime.lastError?e.reject(chrome.runtime.lastError):r.singleCallbackArg||s.length<=1?e.resolve(s[0]):e.resolve(s)},g=e=>1==e?"argument":"arguments",a=(e,r,s)=>new Proxy(r,{apply:(r,t,n)=>s.call(t,e,...n)});let m=Function.call.bind(Object.prototype.hasOwnProperty);const o=(e,r={},s={})=>{let t=Object.create(null),i={has:(r,s)=>s in e||s in t,get(i,A,l){if(A in t)return t[A];if(!(A in e))return;let c=e[A];if("function"==typeof c)if("function"==typeof r[A])c=a(e,e[A],r[A]);else if(m(s,A)){let r=((e,r)=>function(s,...t){if(t.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${g(r.minArgs)} for ${e}(), got ${t.length}`);if(t.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${g(r.maxArgs)} for ${e}(), got ${t.length}`);return new Promise((g,a)=>{if(r.fallbackToNoCallback)try{s[e](...t,n({resolve:g,reject:a},r))}catch(n){console.warn(e+" API method doesn't seem to support the callback parameter, falling back to call it without a callback: ",n),s[e](...t),r.fallbackToNoCallback=!1,r.noCallback=!0,g()}else r.noCallback?(s[e](...t),g()):s[e](...t,n({resolve:g,reject:a},r))})})(A,s[A]);c=a(e,e[A],r)}else c=c.bind(e);else{if("object"!=typeof c||null===c||!m(r,A)&&!m(s,A))return Object.defineProperty(t,A,{configurable:!0,enumerable:!0,get:()=>e[A],set(r){e[A]=r}}),c;c=o(c,r[A],s[A])}return t[A]=c,c},set:(r,s,n,g)=>(s in t?t[s]=n:e[s]=n,!0),defineProperty:(e,r,s)=>Reflect.defineProperty(t,r,s),deleteProperty:(e,r)=>Reflect.deleteProperty(t,r)},A=Object.create(e);return new Proxy(A,i)},i=e=>({addListener(r,s,...t){r.addListener(e.get(s),...t)},hasListener:(r,s)=>r.hasListener(e.get(s)),removeListener(r,s){r.removeListener(e.get(s))}});let A=!1;const l=new t(e=>"function"!=typeof e?e:function(r,t,n){let g,a,m=!1,o=new Promise(e=>{g=function(r){A||(console.warn(s,(new Error).stack),A=!0),m=!0,e(r)}});try{a=e(r,t,g)}catch(e){a=Promise.reject(e)}const i=!0!==a&&(l=a)&&"object"==typeof l&&"function"==typeof l.then;var l;if(!0!==a&&!i&&!m)return!1;const c=e=>{e.then(e=>{n(e)},e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",n({__mozWebExtensionPolyfillReject__:!0,message:r})}).catch(e=>{console.error("Failed to send onMessage rejected reply",e)})};return c(i?a:o),!0}),c=({reject:e,resolve:s},t)=>{chrome.runtime.lastError?chrome.runtime.lastError.message===r?s():e(chrome.runtime.lastError):t&&t.__mozWebExtensionPolyfillReject__?e(new Error(t.message)):s(t)},d=(e,r,s,...t)=>{if(t.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${g(r.minArgs)} for ${e}(), got ${t.length}`);if(t.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${g(r.maxArgs)} for ${e}(), got ${t.length}`);return new Promise((e,r)=>{const n=c.bind(null,{resolve:e,reject:r});t.push(n),s.sendMessage(...t)})},x={runtime:{onMessage:i(l),onMessageExternal:i(l),sendMessage:d.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:d.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},u={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return e.privacy={network:{networkPredictionEnabled:u,webRTCIPHandlingPolicy:u},services:{passwordSavingEnabled:u},websites:{hyperlinkAuditingEnabled:u,referrersEnabled:u}},o(chrome,x,e)};e.exports=t()}else e.exports=s})?t.apply(r,n):t)||(e.exports=g)}).call(this,s(0))},5:function(e,r,s){(function(e){let r;r=chrome||e;document.addEventListener("DOMContentLoaded",()=>{var e;e=(e,s)=>{((e,s)=>{e.includes("https://web.whatsapp.com")||e.includes("https://web.telegram.org")||e.includes("https://meet.google.com")||e.includes("messenger.com")?(document.getElementById("start-bot").addEventListener("click",()=>{r.tabs.sendMessage(s,{message:"dialogBot"})}),document.getElementById("pause-bot").addEventListener("click",()=>{r.tabs.sendMessage(s,{message:"pauseBot"})}),document.getElementById("resume-bot").addEventListener("click",()=>{r.tabs.sendMessage(s,{message:"resumeBot"})}),document.getElementById("stop-bot").addEventListener("click",()=>{r.tabs.sendMessage(s,{message:"stopBot"})})):(document.getElementById("start-bot").innerHTML="Apri Whatsapp Web",document.getElementById("pause-bot").innerHTML="Apri Telegram Web",document.getElementById("resume-bot").innerHTML="Apri Google Meet",document.getElementById("stop-bot").innerHTML="Apri Facebook Messenger",document.getElementById("start-bot").addEventListener("click",()=>{window.open("https://web.whatsapp.com","_blank")}),document.getElementById("pause-bot").addEventListener("click",()=>{window.open("https://web.telegram.org","_blank")}),document.getElementById("resume-bot").addEventListener("click",()=>{window.open("https://meet.google.com","_blank")}),document.getElementById("stop-bot").addEventListener("click",()=>{window.open("https://messenger.com","_blank")}))})(e,s)},r.tabs.query({active:!0,currentWindow:!0},r=>{const s=r[0],t=s.url;e(t,s.id)})})}).call(this,s(0))}});