!function(e){var n={};function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(r,s,function(n){return e[n]}.bind(null,s));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=9)}({0:function(e,n,t){(function(t){var r,s,a;s=[e],void 0===(a="function"==typeof(r=function(e){"use strict";if(void 0===window.browser||Object.getPrototypeOf(window.browser)!==Object.prototype||Object.getPrototypeOf(t)!==Object.prototype){const n="The message port closed before a response was received.",t="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",r=()=>{const e={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getBrowserInfo:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(e).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class r extends WeakMap{constructor(e,n){super(n),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const s=(e,n)=>(...t)=>{chrome.runtime.lastError?e.reject(chrome.runtime.lastError):n.singleCallbackArg||t.length<=1?e.resolve(t[0]):e.resolve(t)},a=e=>1==e?"argument":"arguments",o=(e,n,t)=>new Proxy(n,{apply:(n,r,s)=>t.call(r,e,...s)});let i=Function.call.bind(Object.prototype.hasOwnProperty);const l=(e,n={},t={})=>{let r=Object.create(null),m={has:(n,t)=>t in e||t in r,get(m,g,c){if(g in r)return r[g];if(!(g in e))return;let d=e[g];if("function"==typeof d)if("function"==typeof n[g])d=o(e,e[g],n[g]);else if(i(t,g)){let n=((e,n)=>function(t,...r){if(r.length<n.minArgs)throw new Error(`Expected at least ${n.minArgs} ${a(n.minArgs)} for ${e}(), got ${r.length}`);if(r.length>n.maxArgs)throw new Error(`Expected at most ${n.maxArgs} ${a(n.maxArgs)} for ${e}(), got ${r.length}`);return new Promise((a,o)=>{if(n.fallbackToNoCallback)try{t[e](...r,s({resolve:a,reject:o},n))}catch(s){console.warn(e+" API method doesn't seem to support the callback parameter, falling back to call it without a callback: ",s),t[e](...r),n.fallbackToNoCallback=!1,n.noCallback=!0,a()}else n.noCallback?(t[e](...r),a()):t[e](...r,s({resolve:a,reject:o},n))})})(g,t[g]);d=o(e,e[g],n)}else d=d.bind(e);else{if("object"!=typeof d||null===d||!i(n,g)&&!i(t,g))return Object.defineProperty(r,g,{configurable:!0,enumerable:!0,get:()=>e[g],set(n){e[g]=n}}),d;d=l(d,n[g],t[g])}return r[g]=d,d},set:(n,t,s,a)=>(t in r?r[t]=s:e[t]=s,!0),defineProperty:(e,n,t)=>Reflect.defineProperty(r,n,t),deleteProperty:(e,n)=>Reflect.deleteProperty(r,n)},g=Object.create(e);return new Proxy(g,m)},m=e=>({addListener(n,t,...r){n.addListener(e.get(t),...r)},hasListener:(n,t)=>n.hasListener(e.get(t)),removeListener(n,t){n.removeListener(e.get(t))}});let g=!1;const c=new r(e=>"function"!=typeof e?e:function(n,r,s){let a,o,i=!1,l=new Promise(e=>{a=function(n){g||(console.warn(t,(new Error).stack),g=!0),i=!0,e(n)}});try{o=e(n,r,a)}catch(e){o=Promise.reject(e)}const m=!0!==o&&(c=o)&&"object"==typeof c&&"function"==typeof c.then;var c;if(!0!==o&&!m&&!i)return!1;const d=e=>{e.then(e=>{s(e)},e=>{let n;n=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",s({__mozWebExtensionPolyfillReject__:!0,message:n})}).catch(e=>{console.error("Failed to send onMessage rejected reply",e)})};return d(m?o:l),!0}),d=({reject:e,resolve:t},r)=>{chrome.runtime.lastError?chrome.runtime.lastError.message===n?t():e(chrome.runtime.lastError):r&&r.__mozWebExtensionPolyfillReject__?e(new Error(r.message)):t(r)},u=(e,n,t,...r)=>{if(r.length<n.minArgs)throw new Error(`Expected at least ${n.minArgs} ${a(n.minArgs)} for ${e}(), got ${r.length}`);if(r.length>n.maxArgs)throw new Error(`Expected at most ${n.maxArgs} ${a(n.maxArgs)} for ${e}(), got ${r.length}`);return new Promise((e,n)=>{const s=d.bind(null,{resolve:e,reject:n});r.push(s),t.sendMessage(...r)})},p={runtime:{onMessage:m(c),onMessageExternal:m(c),sendMessage:u.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:u.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},A={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return e.privacy={network:{networkPredictionEnabled:A,webRTCIPHandlingPolicy:A},services:{passwordSavingEnabled:A},websites:{hyperlinkAuditingEnabled:A,referrersEnabled:A}},l(chrome,p,e)};e.exports=r()}else e.exports=t})?r.apply(n,s):r)||(e.exports=a)}).call(this,t(0))},9:function(e,n,t){(function(e){let n,t,r,s,a,o=0,i=0,l=0,m=null,g=0,c=0,d=0,u=!1,p=!1,A=!1;a=chrome||e;const b=(e,n="success")=>(swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,onOpen:e=>{e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)},icon:n,title:e}),0),x=e=>new Promise((n,t)=>a.storage.local.get(e,e=>a.runtime.lastError?t(Error(a.runtime.lastError.message)):n(e))),f=(e,n="#bada55",t="#222")=>{console.log("%c "+e,"background: "+t+"; color: "+n+"; font-weight: bold;")};window.location.href.includes("https://web.whatsapp.com")?f("Siamo su Whatsapp Web"):window.location.href.includes("https://web.telegram.org")?f("Siamo su Telegram Web"):window.location.href.includes("https://meet.google.com")?f("Siamo su Google Meet"):window.location.href.includes("messenger.com")&&f("Siamo su Facebook Messenger");const w=()=>{let e;if(window.location.href.includes("web.whatsapp.com"))e=document.querySelectorAll("#main span._1hI5g._1XH7x._1VzZY")[0];else if(window.location.href.includes("web.telegram.org"))e=document.querySelectorAll("span.tg_head_peer_title")[0];else if(window.location.href.includes("messenger.com"))e=document.getElementsByClassName("bafdgad4 tkr6xdv7")[0].getElementsByClassName("a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5")[0];else{if(window.location.href.includes("meet.google.com"))return console.log("Su Meet non bisogna entrare in una chat!"),"";window.location.href.includes("instagram.com/direct/")&&(e=document.getElementsByClassName("PjuAP")[0].getElementsByClassName("Igw0E IwRSH eGOV_ ybXk5 _4EzTm")[0])}return null!=e?e.innerText:(console.log("el1 non trovato"),"")},h=(e=null)=>{if(window.location.href.includes("web.whatsapp.com")||window.location.href.includes("web.telegram.org")||window.location.href.includes("messenger.com")||window.location.href.includes("instagram.com/direct/")){let n=""!==w();return null!==e&&(n=n&&w()==e),n}return!0},y=async(e=3e3)=>{try{let e=document.getElementsByClassName("_1O6cA")[0].getElementsByClassName("_3Xjbn")[2].querySelectorAll('[tabindex="-1"]')[2].getElementsByTagName("img");if(null==e||null==typeof e)throw Exception("Sticker non aperti!");return r}catch(n){console.error(n),document.getElementsByClassName("_37evB _16P6V _3x5p4 _3guyl")[0].click(),await new Promise((n,t)=>{setTimeout(()=>{n(!0)},e)});let t=[];try{let e=document.getElementsByClassName("_1O6cA")[0].getElementsByClassName("_3Xjbn")[2].querySelectorAll('[tabindex="-1"]')[2].getElementsByTagName("img");for(let n=0;n<e.length;n++)t.push({el:e[n],url:e[n].src})}catch(e){console.error(e)}return r=t,t}},v=async e=>{f("Entro nella chat: "+e);try{if(window.location.href.includes("https://web.whatsapp.com")){document.querySelectorAll('[data-icon="chat"]')[0].click(),await(async()=>new Promise(e=>setTimeout(e,1e3)))();let n=document.querySelectorAll("._2BQrC._1mHgA.copyable-area [contenteditable=true]")[0];n.innerHTML=e,n.dispatchEvent(new Event("focus",{bubbles:!0})),n.dispatchEvent(new Event("input",{bubbles:!0})),await(async()=>new Promise(e=>setTimeout(e,1e3)))();let t=document.getElementsByClassName("_3Xjbn _1RHZR")[0].getElementsByClassName("_1MZWu");for(let e=0;e<t.length;e++)try{let n=t[e].getElementsByClassName("_3dHYI")[0];if(null==n||null==typeof n)throw Exception("Contatto trovato!")}catch(n){let r=t[e].getElementsByClassName("_1hI5g _1XH7x _1VzZY")[0];triggerMouseEvent=(e,n)=>{var t=document.createEvent("MouseEvents");t.initEvent(n,!0,!0),e.dispatchEvent(t)},triggerMouseEvent(r,"mouseover"),triggerMouseEvent(r,"mousedown"),triggerMouseEvent(r,"mouseup"),triggerMouseEvent(r,"click");break}}else window.location.href.includes("https://web.telegram.org")||window.location.href.includes("https://meet.google.com")||window.location.href.includes("messenger.com")||window.location.href.includes("instagram.com/direct/");return!0}catch(e){return console.error(e),!1}},E=e=>{let n;if(window.location.href.includes("https://web.whatsapp.com")?n=document.querySelectorAll("#main ._1awRl.copyable-text.selectable-text")[0]:window.location.href.includes("https://web.telegram.org")?n=document.querySelectorAll(".composer_rich_textarea")[0]:window.location.href.includes("https://meet.google.com")?n=document.querySelectorAll("textarea.KHxj8b.tL9Q4c")[0]:window.location.href.includes("messenger.com")?n=document.querySelectorAll("div.notranslate._5rpu [data-text=true]")[0]:window.location.href.includes("instagram.com/direct/")&&(n=document.getElementsByClassName("Igw0E IwRSH eGOV_ _4EzTm L-sTb HcJZg")[0].getElementsByTagName("textarea")[0]),null!=n){let t;try{window.location.href.includes("https://web.whatsapp.com")?(n.innerHTML=e,n.dispatchEvent(new Event("input",{bubbles:!0})),t=document.querySelectorAll("._3qpzV button._2Ujuu")[0],t.click()):window.location.href.includes("https://web.telegram.org")?(n.innerHTML=e,t=document.getElementsByClassName("im_submit")[0],t.dispatchEvent(new Event("mousedown"))):window.location.href.includes("https://meet.google.com")?(n.value=e,n.dispatchEvent(new Event("input",{bubbles:!0})),t=document.querySelectorAll(".uArJ5e.Y5FYJe.cjq2Db.IOMpW.Cs0vCd.M9Bg4d .XuQwKc")[0]):window.location.href.includes("messenger.com")?(document.getElementsByClassName("rq0escxv datstx6m k4urcfbm a8c37x1j")[0].querySelectorAll("[data-text=true]")[0].dispatchEvent(new InputEvent("textInput",{data:e,bubbles:!0})),t=document.querySelectorAll('[aria-label="Premi Invio per inviare"]')[0],t.click()):window.location.href.includes("instagram.com/direct/")&&(n.value=e,n.dispatchEvent(new Event("input",{bubbles:!0})),t=document.getElementsByClassName("Igw0E IwRSH eGOV_ _4EzTm L-sTb HcJZg")[0].getElementsByClassName("sqdOP yWX7d y3zKF")[0],t.click())}catch(e){console.error("Impossibile inviare il messaggio!"),console.error(e)}}},k=()=>{let e,n=w();""!==n&&f("Chat attuale: "+n),h(s)&&(f("len:"),f(e),1==o&&(i=Math.round(Math.random()*(e-1))),console.log("Nessuna azione per il tipo invio: undefined"),0==o&&(i==e-1?i=0:i++),null!==m&&void 0!==typeof m&&(g++,g==m&&C()))};let B=null;const P=(e=0,t=333,r="",a=["Messaggio"],i=null,l=!1)=>{d=t,n=a,m=i,o=e,u=!0,p=!0,isPausa=!0,""==r&&(r=w()),s=r,f("Chat destinataria: "+s),h()&&(l?(f("Bot ripartito"),b("Bot ripartito")):(f("Bot partito"),b("Bot partito")),B=setInterval((function(){k()}),t))},C=(e=!1)=>(u&&(m=null,g=0,i=0,u=!1,clearInterval(B),e?(isPausa=!0,f("Bot messo in pausa"),b("Bot messo in pausa")):(isPausa=!1,f("Bot fermato"),b("Bot fermato"))),0);setInterval(async()=>{await(async()=>{if(!A)try{let e;try{if(e=(await x("msgProgrammati")).msgProgrammati,null==e)throw Exception()}catch(n){e=[]}for(let n=0;n<e.length;n++)if(Date.now()>=Date.parse(e[n].orario)){C(),A=!0;const t=await v(e[n].nome);E(e[n].msg),e.splice(n,1),A=!t}a.storage.local.set({msgProgrammati:e})}catch(e){console.error(e)}})()},1e3);f("TheSpammer caricato"),a.runtime.onMessage.addListener((function(e,r,s){switch(e.message){case"dialogBot":(async()=>{let e,n,r="#78cbf2";try{e=(await x("temaScuro")).temaScuro}catch(n){console.error(n),e=!0}let s=document.createElement("span");n=e?"skin-alizarin":"skin-peter-river",s.innerHTML=`\n<div class="tabbed round ${n}">\n    <ul>\n        <li>⏰</li>\n        <li class="active">📝</li>\n    </ul>\n</div>\n<div id="tab-0" style="display: none;">\n    <p>Messaggio da inviare<br><br></p>\n    <div class="box-container">\n        <div class="box">\n            <textarea id="spammerTextProgrammato" style="width: 100%;"></textarea>\n            <span></span>\n        </div>\n    </div>\n    <label for="spammerTextProgrammato"></label>\n    <p><br>Nome contatto<br><br></p>\n    <div class="box-container">\n        <div class="box">\n            <input id="spammerNameProgrammato" type="text" />\n            <span></span>\n        </div>\n    </div>\n    <label for="spammerNameProgrammato"></label>\n    <p><br>Orario invio:<br><br></p>\n    <div class="box-container">\n        <div class="box">\n            <input id="spammerOrarioProgrammato" type="datetime-local" />\n            <span></span>\n        </div>\n    </div>\n    <label for="spammerOrarioProgrammato"></label>\n</div>\n<div id="tab-1">\n    <p>Tipo invio<br><br></p>\n    <select id="tipoInvio">\n        <option value="0" selected>Messaggi testuali</option>\n        <option value="1">Stickers</option>\n    </select>\n    <p><br>Modalità invio<br><br></p>\n    <select id="spammerMod">\n        <option value=0 selected>Invio di tutti i messaggi a giro</option>\n        <option value=1>Scelta causale tra i messaggi</option>\n    </select>\n    <label for="spammerMod"></label>\n    <div id="invio-msg">\n        <p><br>Messaggi da inviare, ogni riga un messaggio<br><br></p>\n        <div class="box-container">\n            <div class="box">\n                <textarea id="spammerText" style="width: 100%;"></textarea>\n                <span></span>\n            </div>\n        </div>\n        <label for="spammerText"></label>\n    </div>\n    <div id="invio-sticker" style="display: none;">\n        <p><br>Stickers da inviare<br><br></p>\n        <div id="scelta-stickers" style="max-height:300px; overflow-y: auto;"></div>\n    </div>\n    <p><br>Messaggi al secondo<br><br></p>\n    <div class="box-container">\n        <div class="box">\n            <input id="spammerTime" type="number" name="" value=1>\n            <span></span>\n        </div>\n    </div>\n    <label for="spammerTime"></label>\n    <p><br>Limite messaggi<br><br></p>\n    <div class="box-container">\n        <div class="box">\n            <input id="spammerLimite" type="number" name="">\n            <span></span>\n        </div>\n    </div>\n    <label for="spammerLimite"></label>\n</div>\n`,swal({title:"The Spammer",content:s,buttons:{cancel:"Annulla",confirm:"Comincia"},closeOnClickOutside:!1,closeOnEsc:!0,preConfirm:()=>new Promise((e,n)=>{e({a:document.getElementById("spammerText").value,b:document.getElementById("spammerTime").value,c:document.getElementById("spammerLimite").value,d:document.getElementById("spammerMod").value,e:document.getElementById("tipoInvio").value,f:document.getElementById("spammerTextProgrammato").value,g:document.getElementById("spammerNameProgrammato").value,h:document.getElementById("spammerOrarioProgrammato").value})})}).then(async e=>{if(e){let e=document.getElementById("spammerText").value,r=1e3/document.getElementById("spammerTime").value,s=document.getElementById("spammerLimite").value,o=document.getElementById("spammerMod").value,i=document.getElementById("spammerTextProgrammato").value,l=document.getElementById("spammerNameProgrammato").value,m=document.getElementById("spammerOrarioProgrammato").value,g=document.getElementById("tipoInvio").value;if(""!=i)if(""!=i&&""!=l&&""!=m){let e;try{if(e=(await x("msgProgrammati")).msgProgrammati,null==typeof e)throw new Exception}catch(n){e=[],console.error(n)}e.push({nome:l,msg:i,orario:m}),a.storage.local.set({msgProgrammati:e},(function(){console.log("Aggiunto messaggio programmato alla lista"),b("Messaggio programmato!")}))}else swal({title:"Errore",text:"Entra in una chat per fare partire il bot!",icon:"error",buttons:{confirm:"Chiudi"},closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!0});else if(h()){let a,i=document.querySelectorAll('[id^="cb"]');t=[];for(var n=0;n<i.length;n++)i[n].checked&&t.push(i[n].parentElement.getElementsByTagName("img")[0].src);switch(g){case"0":a=""!==e&&r>0;break;case"1":a=t.length>0;break;default:a=!0}if(a){let n;u&&C(),n=0==s?null:s,tmp=[],e.includes("\n")?tmp=e.split("\n"):tmp[0]=e,P(o,r,"",tmp,n)}else swal({title:"Errore",text:"Inserisci i dati necessari per fare partire il bot!",icon:"error",buttons:{confirm:"Chiudi"},closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!0})}else swal({title:"Errore",text:"Entra in una chat per fare partire il bot!",icon:"error",buttons:{confirm:"Chiudi"},closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!0})}else f("Operazione annllata!")},(function(){f("Operazione annullata!")}));try{document.getElementById("thespammer-alert").remove()}catch(e){console.error(e)}let o=document.head.appendChild(document.createElement("style"));o.id="thespammer-alert",o.innerHTML="@import url('https://fonts.googleapis.com/css?family=Poppins');",e&&(o.innerHTML+=".swal-modal, .swal-icon--success:before, .swal-icon--success:after, .swal-icon--success:before, .swal-icon--success__hide-corners,\n        .swal-icon--error:before, .swal-icon--error:after, .swal-icon--error:before, .swal-icon--error__hide-corners,\n        .swal-icon--warning:before, .swal-icon--warning:after, .swal-icon--warning:before, .swal-icon--warning__hide-corners {\n            background-color: #000000;\n        }\n        .swal-content p, .swal-title, .swal-text {\n            color: #fff;\n        }",r="#c0392b"),o.innerHTML+=`\n.swal-overlay:before {\n    height: 0% !important;\n}\n.swal-content *, .swal-title {\n    font-family: "Poppins" !important;\n}\n\n.swal-content select {\n    width: 100%;\n    height: 50px;\n    font-size: 100%;\n    font-weight: bold;\n    cursor: pointer;\n    border-radius: 0;\n    background-color: ${r};\n    border: none;\n    border-bottom: 2px solid ${r};\n    color: white;\n    padding: 10px;\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    padding: 10px;\n}\n\n/* For IE <= 11 */\n.swal-content select::-ms-expand {\n    display: none; \n}\n\n.swal-content ul {\n    list-style-type: none;\n}\n\n.swal-content li {\n    display: inline-block;\n}\n\n.swal-content input[type="checkbox"][id^="cb"] {\n    display: none;\n}\n\n.swal-content label#img-label {\n    border: 1px solid #fff;\n    padding: 10px;\n    display: block;\n    position: relative;\n    margin: 10px;\n    cursor: pointer;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.swal-content label#img-label::before {\n    background-color: white;\n    color: white;\n    content: " ";\n    display: block;\n    border-radius: 50%;\n    border: 1px solid grey;\n    position: absolute;\n    top: -5px;\n    left: -5px;\n    width: 25px;\n    height: 25px;\n    text-align: center;\n    line-height: 28px;\n    transition-duration: 0.4s;\n    transform: scale(0);\n}\n\n.swal-content label#img-label img {\n    height: 100px;\n    width: 100px;\n    transition-duration: 0.2s;\n    transform-origin: 50% 50%;\n}\n\n.swal-content :checked+label#img-label {\n    border-color: #ddd;\n}\n\n.swal-content :checked+label#img-label::before {\n    content: "✓";\n    background-color: #c0392b;\n    transform: scale(1);\n}\n\n.swal-content :checked+label#img-label img {\n    transform: scale(0.9);\n    box-shadow: 0 0 5px #333;\n    z-index: -1;\n}\n\n$focusColor:#EF9F00;\n.box-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n\n  .box {\n    margin-bottom: 30px;\n    display: inline-block;\n    position: relative;\n    input {\n      padding: 5px 10px;\n      height: 45px;\n      font-size: 1em;\n      line-height: 45px;\n      border: 2px solid #ccc;\n      width: 400px;\n      outline: none;\n      background: #fff; \n      color: #a2a5a7;\n      &:focus {                 \n        + span {      \n          width: 100%;\n          opacity: 1;\n          transform:translateX(0);\n          &:before {\n            top: 0;\n            left: 0;\n            width: 100%;\n          }\n          &:after {\n            bottom: 0;\n            left: 0;\n            width: 100%;\n          }\n        }\n      }\n      + span {\n          display: inline-block;\n          position: absolute;\n          left: 0;\n          top: 0;        \n          border-left: 2px solid $focusColor;\n          border-right: 2px solid $focusColor;\n          width: calc(100% + 100px);\n          transform:translateX(-50px);\n          height: 100%;\n          pointer-events: none;\n          opacity: 0;\n          transition-property:opacity, width;\n          transition: .3s ease-out;\n          \n          &:before,&:after{\n            content: "";\n            display: inline-block;\n            position: absolute;   \n            left: 25px;\n             transition-property:top, bottom;\n            transition: .3s ease-out;\n            height: 2px;\n            width: calc(100% - 50px);\n            background: $focusColor;\n          }\n          &:before {           \n            top: -30px;                        \n          }\n          &:after {\n            bottom: -30px;\n          }\n        }\n    }\n  }\n}\n`,document.getElementById("tipoInvio").addEventListener("change",async e=>{switch(document.getElementById("tipoInvio").value){case"0":document.getElementById("invio-sticker").style.display="none",document.getElementById("invio-msg").style.display="block";break;case"1":let e="<ul>";if(window.location.href.includes("https://web.whatsapp.com")){let n=await y();for(let t=0;t<n.length;t++)e+=`<li>\n            <input type="checkbox" id="cb${t}" />\n            <label for="cb${t}" id="img-label"><img src="${n[t].url}" width=100 height=100 /></label>\n        </li>`}e+="</ul>",document.getElementById("scelta-stickers").innerHTML=e,document.getElementById("invio-sticker").style.display="block",document.getElementById("invio-msg").style.display="none"}});let i=document.getElementsByClassName("tabbed")[0].getElementsByTagName("li");for(let e=0;e<i.length;e++)i[e].addEventListener("click",(function(){i[e].className="active",document.getElementById("tab-"+e).style.display="block";for(let n=0;n<i.length;n++)i[n].innerText!=i[e].innerText&&(i[n].className="",document.getElementById("tab-"+n).style.display="none")}))})();break;case"pauseBot":u&&(c=g,l=i,C(!0),g=c,i=l);break;case"resumeBot":!u&&p&&isPausa&&P(o,d,"",n,m,!0);break;case"stopBot":C()}}))}).call(this,t(0))}});