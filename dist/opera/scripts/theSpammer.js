!function(e){var r={};function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="",s(s.s=8)}({0:function(e,r,s){(function(s){var t,n,a;n=[e],void 0===(a="function"==typeof(t=function(e){"use strict";if(void 0===window.browser||Object.getPrototypeOf(window.browser)!==Object.prototype||Object.getPrototypeOf(s)!==Object.prototype){const r="The message port closed before a response was received.",s="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",t=()=>{const e={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getBrowserInfo:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(e).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class t extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const n=(e,r)=>(...s)=>{chrome.runtime.lastError?e.reject(chrome.runtime.lastError):r.singleCallbackArg||s.length<=1?e.resolve(s[0]):e.resolve(s)},a=e=>1==e?"argument":"arguments",o=(e,r,s)=>new Proxy(r,{apply:(r,t,n)=>s.call(t,e,...n)});let i=Function.call.bind(Object.prototype.hasOwnProperty);const m=(e,r={},s={})=>{let t=Object.create(null),l={has:(r,s)=>s in e||s in t,get(l,g,c){if(g in t)return t[g];if(!(g in e))return;let A=e[g];if("function"==typeof A)if("function"==typeof r[g])A=o(e,e[g],r[g]);else if(i(s,g)){let r=((e,r)=>function(s,...t){if(t.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${a(r.minArgs)} for ${e}(), got ${t.length}`);if(t.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${a(r.maxArgs)} for ${e}(), got ${t.length}`);return new Promise((a,o)=>{if(r.fallbackToNoCallback)try{s[e](...t,n({resolve:a,reject:o},r))}catch(n){console.warn(e+" API method doesn't seem to support the callback parameter, falling back to call it without a callback: ",n),s[e](...t),r.fallbackToNoCallback=!1,r.noCallback=!0,a()}else r.noCallback?(s[e](...t),a()):s[e](...t,n({resolve:a,reject:o},r))})})(g,s[g]);A=o(e,e[g],r)}else A=A.bind(e);else{if("object"!=typeof A||null===A||!i(r,g)&&!i(s,g))return Object.defineProperty(t,g,{configurable:!0,enumerable:!0,get:()=>e[g],set(r){e[g]=r}}),A;A=m(A,r[g],s[g])}return t[g]=A,A},set:(r,s,n,a)=>(s in t?t[s]=n:e[s]=n,!0),defineProperty:(e,r,s)=>Reflect.defineProperty(t,r,s),deleteProperty:(e,r)=>Reflect.deleteProperty(t,r)},g=Object.create(e);return new Proxy(g,l)},l=e=>({addListener(r,s,...t){r.addListener(e.get(s),...t)},hasListener:(r,s)=>r.hasListener(e.get(s)),removeListener(r,s){r.removeListener(e.get(s))}});let g=!1;const c=new t(e=>"function"!=typeof e?e:function(r,t,n){let a,o,i=!1,m=new Promise(e=>{a=function(r){g||(console.warn(s,(new Error).stack),g=!0),i=!0,e(r)}});try{o=e(r,t,a)}catch(e){o=Promise.reject(e)}const l=!0!==o&&(c=o)&&"object"==typeof c&&"function"==typeof c.then;var c;if(!0!==o&&!l&&!i)return!1;const A=e=>{e.then(e=>{n(e)},e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",n({__mozWebExtensionPolyfillReject__:!0,message:r})}).catch(e=>{console.error("Failed to send onMessage rejected reply",e)})};return A(l?o:m),!0}),A=({reject:e,resolve:s},t)=>{chrome.runtime.lastError?chrome.runtime.lastError.message===r?s():e(chrome.runtime.lastError):t&&t.__mozWebExtensionPolyfillReject__?e(new Error(t.message)):s(t)},u=(e,r,s,...t)=>{if(t.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${a(r.minArgs)} for ${e}(), got ${t.length}`);if(t.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${a(r.maxArgs)} for ${e}(), got ${t.length}`);return new Promise((e,r)=>{const n=A.bind(null,{resolve:e,reject:r});t.push(n),s.sendMessage(...t)})},d={runtime:{onMessage:l(c),onMessageExternal:l(c),sendMessage:u.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:u.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},p={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return e.privacy={network:{networkPredictionEnabled:p,webRTCIPHandlingPolicy:p},services:{passwordSavingEnabled:p},websites:{hyperlinkAuditingEnabled:p,referrersEnabled:p}},m(chrome,d,e)};e.exports=t()}else e.exports=s})?t.apply(r,n):t)||(e.exports=a)}).call(this,s(0))},8:function(e,r,s){(function(e){let r,s,t=0,n=0,a=0,o=null,i=0,m=0,l=0,g=!1,c=!1;const A=(e,r="success")=>(swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,onOpen:e=>{e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)},icon:r,title:e}),0),u=(e,r="#bada55",s="#222")=>{console.log("%c "+e,"background: "+s+"; color: "+r+"; font-weight: bold;")};window.location.href.includes("https://web.whatsapp.com")?u("Siamo su Whatsapp Web"):window.location.href.includes("https://web.telegram.org")?u("Siamo su Telegram Web"):window.location.href.includes("https://meet.google.com")?u("Siamo su Google Meet"):window.location.href.includes("messenger.com")&&u("Siamo su Facebook Messenger");const d=()=>{let e;if(window.location.href.includes("web.whatsapp.com"))e=document.querySelectorAll("#main span._1hI5g._1XH7x._1VzZY")[0];else if(window.location.href.includes("web.telegram.org"))e=document.querySelectorAll("span.tg_head_peer_title")[0];else if(window.location.href.includes("messenger.com"))e=document.getElementsByClassName("bafdgad4 tkr6xdv7")[0].getElementsByClassName("a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5")[0];else{if(window.location.href.includes("meet.google.com"))return console.log("Su Meet non bisogna entrare in una chat!"),"";window.location.href.includes("instagram.com/direct/")&&(e=document.getElementsByClassName("PjuAP")[0].getElementsByClassName("Igw0E IwRSH eGOV_ ybXk5 _4EzTm")[0])}return null!=e?e.innerText:(console.log("el1 non trovato"),"")},p=(e=null)=>{if(window.location.href.includes("web.whatsapp.com")||window.location.href.includes("web.telegram.org")||window.location.href.includes("messenger.com")||window.location.href.includes("instagram.com/direct/")){let r=""!==d();return null!==e&&(r=r&&d()==e),r}return!0},x=()=>{let e,a=d();""!==a&&u("Chat attuale: "+a),p(s)&&(1==t&&(n=Math.round(Math.random()*(r.length-1))),e=r[n],(e=>{let r;if(window.location.href.includes("https://web.whatsapp.com")?r=document.querySelectorAll("#main ._1awRl.copyable-text.selectable-text")[0]:window.location.href.includes("https://web.telegram.org")?r=document.querySelectorAll(".composer_rich_textarea")[0]:window.location.href.includes("https://meet.google.com")?r=document.querySelectorAll("textarea.KHxj8b.tL9Q4c")[0]:window.location.href.includes("messenger.com")?r=document.querySelectorAll("div.notranslate._5rpu [data-text=true]")[0]:window.location.href.includes("instagram.com/direct/")&&(r=document.getElementsByClassName("Igw0E IwRSH eGOV_ _4EzTm L-sTb HcJZg")[0].getElementsByTagName("textarea")[0]),null!=r){let s;try{window.location.href.includes("https://web.whatsapp.com")?(r.innerHTML=e,r.dispatchEvent(new Event("input",{bubbles:!0})),s=document.querySelectorAll("._3qpzV button._2Ujuu")[0],s.click()):window.location.href.includes("https://web.telegram.org")?(r.innerHTML=e,s=document.getElementsByClassName("im_submit")[0],s.dispatchEvent(new Event("mousedown"))):window.location.href.includes("https://meet.google.com")?(r.value=e,r.dispatchEvent(new Event("input",{bubbles:!0})),s=document.querySelectorAll(".uArJ5e.Y5FYJe.cjq2Db.IOMpW.Cs0vCd.M9Bg4d .XuQwKc")[0]):window.location.href.includes("messenger.com")?(document.getElementsByClassName("rq0escxv datstx6m k4urcfbm a8c37x1j")[0].querySelectorAll("[data-text=true]")[0].dispatchEvent(new InputEvent("textInput",{data:e,bubbles:!0})),s=document.querySelectorAll('[aria-label="Premi Invio per inviare"]')[0],s.click()):window.location.href.includes("instagram.com/direct/")&&(r.value=e,r.dispatchEvent(new Event("input",{bubbles:!0})),s=document.getElementsByClassName("Igw0E IwRSH eGOV_ _4EzTm L-sTb HcJZg")[0].getElementsByClassName("sqdOP yWX7d y3zKF")[0],s.click())}catch(e){console.error("Impossibile inviare il messaggio!"),console.error(e)}}})(e),0==t&&(n==r.length-1?n=0:n++),null!==o&&(i++,i==o&&f()))};theSpammer=null;const b=(e=0,n=333,a="",i=["Messaggio"],m=null,b=!1)=>{l=n,r=i,o=m,t=e,g=!0,c=!0,isPausa=!0,""==a&&(a=d()),s=a,u("Chat destinataria: "+s),p()&&(b?(u("Bot ripartito"),A("Bot ripartito")):(u("Bot partito"),A("Bot partito")),theSpammer=setInterval((function(){x()}),n))},f=(e=!1)=>(g&&(o=null,i=0,n=0,g=!1,clearInterval(theSpammer),e?(isPausa=!0,u("Bot messo in pausa"),A("Bot messo in pausa")):(isPausa=!1,u("Bot fermato"),A("Bot fermato"))),0);let w;u("theSpammer caricato"),w=chrome||e,w.runtime.onMessage.addListener((function(e,s,A){switch(e.message){case"dialogBot":(()=>{u("Visualizzo l'alert per scegliere le opzioni e fare partire il bot");let e=document.createElement("span");e.innerHTML='<div class="swal-form">     <p style="color:#000;">Messaggi da inviare, ogni riga un messaggio<br><br></p>     <textarea id="spammerText" class="nice-input swal-form-field" style="width:100%;color:#000;"></textarea>     <label for="spammerText"></label>     <p style="color:#000;"><br>Millisecondi da aspettare tra un messaggio e l\'altro<br><br></p>     <input id="spammerTime" class="nice-input swal-form-field" type="number" name="" value=1000 style="width:100%;color:#000;">     <label for="spammerTime"></label>     <p style="color:#000;"><br>Limite messaggi<br><br></p>     <input id="spammerLimite" class="nice-input swal-form-field" type="number" name="" value=0 style="width:100%;color:#000;">     <label for="spammerLimite"></label>     <p style="color:#000;"><br>Modalita\' invio<br><br></p>     <select id="spammerMod" class="nice-input swal-form-field" style="color:#000;background-color:#fff;">         <option value=0 selected style="color:#000;background-color:#fff;">Invio di tutti i messaggi a giro</option>         <option value=1 style="color:#000;background-color:#fff;">Scelta causale tra i messaggi</option>     </select>     <label for="spammerMod"></label> </div>',swal({title:"Impostazioni bot",content:e,buttons:{cancel:"Annulla",confirm:"Spamma"},closeOnClickOutside:!1,closeOnEsc:!1,preConfirm:()=>new Promise((e,r)=>{e({a:document.getElementById("spammerText").value,b:document.getElementById("spammerTime").value,c:document.getElementById("spammerLimite").value,d:document.getElementById("spammerMod").value})})}).then(e=>{if(e)if(p()){let e=document.getElementById("spammerText").value,r=document.getElementById("spammerTime").value,s=document.getElementById("spammerLimite").value,t=document.getElementById("spammerMod").value;if(""!==e&&r>0){let n;g&&f(),n=0==s?null:s,tmp=[],e.includes("\n")?tmp=e.split("\n"):tmp[0]=e,console.log(t),console.log(r),console.log(tmp),console.log(n),b(t,r,"",tmp,n)}else swal({title:"Errore",text:"Inserisci i dati necessari per fare partire il bot!",icon:"error",buttons:{confirm:"Chiudi"},closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!0})}else swal({title:"Errore",text:"Entra in una chat per fare partire il bot!",icon:"error",buttons:{confirm:"Chiudi"},closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!0});else u("Operazione annllata!")},(function(){u("Operazione annullata!")})),document.head.appendChild(document.createElement("style")).innerHTML=".swal-overlay:before { height: 0% !important; }"})();break;case"pauseBot":g&&(m=i,a=n,f(!0),i=m,n=a);break;case"resumeBot":!g&&c&&isPausa&&b(t,l,"",r,o,!0);break;case"stopBot":f()}}))}).call(this,s(0))}});