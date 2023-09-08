import{s as x,c as M,u as H,g as J,d as V}from"../chunks/scheduler.e108d1fd.js";import{S as U,i as N,g as z,h as Q,j as Y,f as A,k as I,a as F,d as $,t as D,r as X,u as Z,v as ee,w as te,m as ie,n as se}from"../chunks/index.0719bd3d.js";function d(r,e,t,i){return new(t||(t=Promise))(function(s,n){function o(c){try{l(i.next(c))}catch(b){n(b)}}function a(c){try{l(i.throw(c))}catch(b){n(b)}}function l(c){c.done?s(c.value):function(u){return u instanceof t?u:new t(function(w){w(u)})}(c.value).then(o,a)}l((i=i.apply(r,e||[])).next())})}class g extends Error{constructor(e){var t,i,s,n;super("ClientResponseError"),this.url="",this.status=0,this.response={},this.isAbort=!1,this.originalError=null,Object.setPrototypeOf(this,g.prototype),e!==null&&typeof e=="object"&&(this.url=typeof e.url=="string"?e.url:"",this.status=typeof e.status=="number"?e.status:0,this.isAbort=!!e.isAbort,this.originalError=e.originalError,e.response!==null&&typeof e.response=="object"?this.response=e.response:e.data!==null&&typeof e.data=="object"?this.response=e.data:this.response={}),this.originalError||e instanceof g||(this.originalError=e),typeof DOMException<"u"&&e instanceof DOMException&&(this.isAbort=!0),this.name="ClientResponseError "+this.status,this.message=(t=this.response)===null||t===void 0?void 0:t.message,this.message||(this.isAbort?this.message="The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation.":!((n=(s=(i=this.originalError)===null||i===void 0?void 0:i.cause)===null||s===void 0?void 0:s.message)===null||n===void 0)&&n.includes("ECONNREFUSED ::1")?this.message="Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).":this.message="Something went wrong while processing your request.")}get data(){return this.response}toJSON(){return Object.assign({},this)}}const O=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function ne(r,e){const t={};if(typeof r!="string")return t;const i=Object.assign({},e||{}).decode||oe;let s=0;for(;s<r.length;){const n=r.indexOf("=",s);if(n===-1)break;let o=r.indexOf(";",s);if(o===-1)o=r.length;else if(o<n){s=r.lastIndexOf(";",n-1)+1;continue}const a=r.slice(s,n).trim();if(t[a]===void 0){let l=r.slice(n+1,o).trim();l.charCodeAt(0)===34&&(l=l.slice(1,-1));try{t[a]=i(l)}catch{t[a]=l}}s=o+1}return t}function j(r,e,t){const i=Object.assign({},t||{}),s=i.encode||re;if(!O.test(r))throw new TypeError("argument name is invalid");const n=s(e);if(n&&!O.test(n))throw new TypeError("argument val is invalid");let o=r+"="+n;if(i.maxAge!=null){const a=i.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(i.domain){if(!O.test(i.domain))throw new TypeError("option domain is invalid");o+="; Domain="+i.domain}if(i.path){if(!O.test(i.path))throw new TypeError("option path is invalid");o+="; Path="+i.path}if(i.expires){if(!function(l){return Object.prototype.toString.call(l)==="[object Date]"||l instanceof Date}(i.expires)||isNaN(i.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(o+="; HttpOnly"),i.secure&&(o+="; Secure"),i.priority)switch(typeof i.priority=="string"?i.priority.toLowerCase():i.priority){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function oe(r){return r.indexOf("%")!==-1?decodeURIComponent(r):r}function re(r){return encodeURIComponent(r)}let K;function k(r){if(r)try{const e=decodeURIComponent(K(r.split(".")[1]).split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(e)||{}}catch{}return{}}function W(r,e=0){let t=k(r);return!(Object.keys(t).length>0&&(!t.exp||t.exp-e>Date.now()/1e3))}K=typeof atob=="function"?atob:r=>{let e=String(r).replace(/=+$/,"");if(e.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,i,s=0,n=0,o="";i=e.charAt(n++);~i&&(t=s%4?64*t+i:i,s++%4)?o+=String.fromCharCode(255&t>>(-2*s&6)):0)i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);return o};const _="pb_auth";class ae{constructor(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}get token(){return this.baseToken}get model(){return this.baseModel}get isValid(){return!W(this.token)}get isAdmin(){return k(this.token).type==="admin"}get isAuthRecord(){return k(this.token).type==="authRecord"}save(e,t){this.baseToken=e||"",this.baseModel=t||null,this.triggerChange()}clear(){this.baseToken="",this.baseModel=null,this.triggerChange()}loadFromCookie(e,t=_){const i=ne(e||"")[t]||"";let s={};try{s=JSON.parse(i),(typeof s===null||typeof s!="object"||Array.isArray(s))&&(s={})}catch{}this.save(s.token||"",s.model||null)}exportToCookie(e,t=_){var i,s;const n={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},o=k(this.token);o!=null&&o.exp?n.expires=new Date(1e3*o.exp):n.expires=new Date("1970-01-01"),e=Object.assign({},n,e);const a={token:this.token,model:this.model?JSON.parse(JSON.stringify(this.model)):null};let l=j(t,JSON.stringify(a),e);const c=typeof Blob<"u"?new Blob([l]).size:l.length;if(a.model&&c>4096){a.model={id:(i=a==null?void 0:a.model)===null||i===void 0?void 0:i.id,email:(s=a==null?void 0:a.model)===null||s===void 0?void 0:s.email};const b=["collectionId","username","verified"];for(const u in this.model)b.includes(u)&&(a.model[u]=this.model[u]);l=j(t,JSON.stringify(a),e)}return l}onChange(e,t=!1){return this._onChangeCallbacks.push(e),t&&e(this.token,this.model),()=>{for(let i=this._onChangeCallbacks.length-1;i>=0;i--)if(this._onChangeCallbacks[i]==e)return delete this._onChangeCallbacks[i],void this._onChangeCallbacks.splice(i,1)}}triggerChange(){for(const e of this._onChangeCallbacks)e&&e(this.token,this.model)}}class le extends ae{constructor(e="pocketbase_auth"){super(),this.storageFallback={},this.storageKey=e,this._bindStorageEvent()}get token(){return(this._storageGet(this.storageKey)||{}).token||""}get model(){return(this._storageGet(this.storageKey)||{}).model||null}save(e,t){this._storageSet(this.storageKey,{token:e,model:t}),super.save(e,t)}clear(){this._storageRemove(this.storageKey),super.clear()}_storageGet(e){if(typeof window<"u"&&(window!=null&&window.localStorage)){const t=window.localStorage.getItem(e)||"";try{return JSON.parse(t)}catch{return t}}return this.storageFallback[e]}_storageSet(e,t){if(typeof window<"u"&&(window!=null&&window.localStorage)){let i=t;typeof t!="string"&&(i=JSON.stringify(t)),window.localStorage.setItem(e,i)}else this.storageFallback[e]=t}_storageRemove(e){var t;typeof window<"u"&&(window!=null&&window.localStorage)&&((t=window.localStorage)===null||t===void 0||t.removeItem(e)),delete this.storageFallback[e]}_bindStorageEvent(){typeof window<"u"&&(window!=null&&window.localStorage)&&window.addEventListener&&window.addEventListener("storage",e=>{if(e.key!=this.storageKey)return;const t=this._storageGet(this.storageKey)||{};super.save(t.token||"",t.model||null)})}}class v{constructor(e){this.client=e}}class ce extends v{getAll(e){return e=Object.assign({method:"GET"},e),this.client.send("/api/settings",e)}update(e,t){return t=Object.assign({method:"PATCH",body:e},t),this.client.send("/api/settings",t)}testS3(e="storage",t){return t=Object.assign({method:"POST",body:{filesystem:e}},t),this.client.send("/api/settings/test/s3",t).then(()=>!0)}testEmail(e,t,i){return i=Object.assign({method:"POST",body:{email:e,template:t}},i),this.client.send("/api/settings/test/email",i).then(()=>!0)}generateAppleClientSecret(e,t,i,s,n,o){return o=Object.assign({method:"POST",body:{clientId:e,teamId:t,keyId:i,privateKey:s,duration:n}},o),this.client.send("/api/settings/apple/generate-client-secret",o)}}class q extends v{decode(e){return e}getFullList(e,t){if(typeof e=="number")return this._getFullList(e,t);let i=500;return(t=Object.assign({},e,t)).batch&&(i=t.batch,delete t.batch),this._getFullList(i,t)}getList(e=1,t=30,i){return(i=Object.assign({method:"GET"},i)).query=Object.assign({page:e,perPage:t},i.query),this.client.send(this.baseCrudPath,i).then(s=>{var n;return s.items=((n=s.items)===null||n===void 0?void 0:n.map(o=>this.decode(o)))||[],s})}getFirstListItem(e,t){return(t=Object.assign({requestKey:"one_by_filter_"+this.baseCrudPath+"_"+e},t)).query=Object.assign({filter:e,skipTotal:1},t.query),this.getList(1,1,t).then(i=>{var s;if(!(!((s=i==null?void 0:i.items)===null||s===void 0)&&s.length))throw new g({status:404,data:{code:404,message:"The requested resource wasn't found.",data:{}}});return i.items[0]})}getOne(e,t){return t=Object.assign({method:"GET"},t),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e),t).then(i=>this.decode(i))}create(e,t){return t=Object.assign({method:"POST",body:e},t),this.client.send(this.baseCrudPath,t).then(i=>this.decode(i))}update(e,t,i){return i=Object.assign({method:"PATCH",body:t},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e),i).then(s=>this.decode(s))}delete(e,t){return t=Object.assign({method:"DELETE"},t),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e),t).then(()=>!0)}_getFullList(e=500,t){(t=t||{}).query=Object.assign({skipTotal:1},t.query);let i=[],s=n=>d(this,void 0,void 0,function*(){return this.getList(n,e||500,t).then(o=>{const a=o.items;return i=i.concat(a),a.length==o.perPage?s(n+1):i})});return s(1)}}function m(r,e,t,i){const s=i!==void 0;return s||t!==void 0?s?(console.warn(r),e.body=Object.assign({},e.body,t),e.query=Object.assign({},e.query,i),e):Object.assign(e,t):e}function R(r){var e,t;(t=(e=r)._resetAutoRefresh)===null||t===void 0||t.call(e)}class de extends q{get baseCrudPath(){return"/api/admins"}update(e,t,i){return super.update(e,t,i).then(s=>{var n,o;return((n=this.client.authStore.model)===null||n===void 0?void 0:n.id)===s.id&&((o=this.client.authStore.model)===null||o===void 0?void 0:o.collectionId)===void 0&&this.client.authStore.save(this.client.authStore.token,s),s})}delete(e,t){return super.delete(e,t).then(i=>{var s,n;return i&&((s=this.client.authStore.model)===null||s===void 0?void 0:s.id)===e&&((n=this.client.authStore.model)===null||n===void 0?void 0:n.collectionId)===void 0&&this.client.authStore.clear(),i})}authResponse(e){const t=this.decode((e==null?void 0:e.admin)||{});return e!=null&&e.token&&(e!=null&&e.admin)&&this.client.authStore.save(e.token,t),Object.assign({},e,{token:(e==null?void 0:e.token)||"",admin:t})}authWithPassword(e,t,i,s){return d(this,void 0,void 0,function*(){let n={method:"POST",body:{identity:e,password:t}};n=m("This form of authWithPassword(email, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(email, pass, options?).",n,i,s);const o=n.autoRefreshThreshold;delete n.autoRefreshThreshold,n.autoRefresh||R(this.client);let a=yield this.client.send(this.baseCrudPath+"/auth-with-password",n);return a=this.authResponse(a),o&&function(c,b,u,w){R(c);const y=c.beforeSend,f=c.authStore.model,T=c.authStore.onChange((p,h)=>{(!p||(h==null?void 0:h.id)!=(f==null?void 0:f.id)||(h!=null&&h.collectionId||f!=null&&f.collectionId)&&(h==null?void 0:h.collectionId)!=(f==null?void 0:f.collectionId))&&R(c)});c._resetAutoRefresh=function(){T(),c.beforeSend=y,delete c._resetAutoRefresh},c.beforeSend=(p,h)=>d(this,void 0,void 0,function*(){var P;const G=c.authStore.token;if(!((P=h.query)===null||P===void 0)&&P.autoRefresh)return y?y(p,h):{url:p,sendOptions:h};let E=c.authStore.isValid;if(E&&W(c.authStore.token,b))try{yield u()}catch{E=!1}E||(yield w());const S=h.headers||{};for(let C in S)if(C.toLowerCase()=="authorization"&&G==S[C]&&c.authStore.token){S[C]=c.authStore.token;break}return h.headers=S,y?y(p,h):{url:p,sendOptions:h}})}(this.client,o,()=>this.authRefresh({autoRefresh:!0}),()=>this.authWithPassword(e,t,Object.assign({autoRefresh:!0},n))),a})}authRefresh(e,t){let i={method:"POST"};return i=m("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",i,e,t),this.client.send(this.baseCrudPath+"/auth-refresh",i).then(this.authResponse.bind(this))}requestPasswordReset(e,t,i){let s={method:"POST",body:{email:e}};return s=m("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",s,t,i),this.client.send(this.baseCrudPath+"/request-password-reset",s).then(()=>!0)}confirmPasswordReset(e,t,i,s,n){let o={method:"POST",body:{token:e,password:t,passwordConfirm:i}};return o=m("This form of confirmPasswordReset(resetToken, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(resetToken, password, passwordConfirm, options?).",o,s,n),this.client.send(this.baseCrudPath+"/confirm-password-reset",o).then(()=>!0)}}class B extends v{constructor(){super(...arguments),this.clientId="",this.eventSource=null,this.subscriptions={},this.lastSentTopics=[],this.maxConnectTimeout=15e3,this.reconnectAttempts=0,this.maxReconnectAttempts=1/0,this.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],this.pendingConnects=[]}get isConnected(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length}subscribe(e,t){var i;return d(this,void 0,void 0,function*(){if(!e)throw new Error("topic must be set.");const s=function(n){const o=n;let a;try{a=JSON.parse(o==null?void 0:o.data)}catch{}t(a||{})};return this.subscriptions[e]||(this.subscriptions[e]=[]),this.subscriptions[e].push(s),this.isConnected?this.subscriptions[e].length===1?yield this.submitSubscriptions():(i=this.eventSource)===null||i===void 0||i.addEventListener(e,s):yield this.connect(),()=>d(this,void 0,void 0,function*(){return this.unsubscribeByTopicAndListener(e,s)})})}unsubscribe(e){var t;return d(this,void 0,void 0,function*(){if(this.hasSubscriptionListeners(e)){if(e){for(let i of this.subscriptions[e])(t=this.eventSource)===null||t===void 0||t.removeEventListener(e,i);delete this.subscriptions[e]}else this.subscriptions={};this.hasSubscriptionListeners()?this.hasSubscriptionListeners(e)||(yield this.submitSubscriptions()):this.disconnect()}})}unsubscribeByPrefix(e){var t;return d(this,void 0,void 0,function*(){let i=!1;for(let s in this.subscriptions)if(s.startsWith(e)){i=!0;for(let n of this.subscriptions[s])(t=this.eventSource)===null||t===void 0||t.removeEventListener(s,n);delete this.subscriptions[s]}i&&(this.hasSubscriptionListeners()?yield this.submitSubscriptions():this.disconnect())})}unsubscribeByTopicAndListener(e,t){var i;return d(this,void 0,void 0,function*(){if(!Array.isArray(this.subscriptions[e])||!this.subscriptions[e].length)return;let s=!1;for(let n=this.subscriptions[e].length-1;n>=0;n--)this.subscriptions[e][n]===t&&(s=!0,delete this.subscriptions[e][n],this.subscriptions[e].splice(n,1),(i=this.eventSource)===null||i===void 0||i.removeEventListener(e,t));s&&(this.subscriptions[e].length||delete this.subscriptions[e],this.hasSubscriptionListeners()?this.hasSubscriptionListeners(e)||(yield this.submitSubscriptions()):this.disconnect())})}hasSubscriptionListeners(e){var t,i;if(this.subscriptions=this.subscriptions||{},e)return!!(!((t=this.subscriptions[e])===null||t===void 0)&&t.length);for(let s in this.subscriptions)if(!((i=this.subscriptions[s])===null||i===void 0)&&i.length)return!0;return!1}submitSubscriptions(){return d(this,void 0,void 0,function*(){if(this.clientId)return this.addAllSubscriptionListeners(),this.lastSentTopics=this.getNonEmptySubscriptionTopics(),this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:this.lastSentTopics},query:{requestKey:this.getSubscriptionsCancelKey()}}).catch(e=>{if(!(e!=null&&e.isAbort))throw e})})}getSubscriptionsCancelKey(){return"realtime_"+this.clientId}getNonEmptySubscriptionTopics(){const e=[];for(let t in this.subscriptions)this.subscriptions[t].length&&e.push(t);return e}addAllSubscriptionListeners(){if(this.eventSource){this.removeAllSubscriptionListeners();for(let e in this.subscriptions)for(let t of this.subscriptions[e])this.eventSource.addEventListener(e,t)}}removeAllSubscriptionListeners(){if(this.eventSource)for(let e in this.subscriptions)for(let t of this.subscriptions[e])this.eventSource.removeEventListener(e,t)}connect(){return d(this,void 0,void 0,function*(){if(!(this.reconnectAttempts>0))return new Promise((e,t)=>{this.pendingConnects.push({resolve:e,reject:t}),this.pendingConnects.length>1||this.initConnect()})})}initConnect(){this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout(()=>{this.connectErrorHandler(new Error("EventSource connect took too long."))},this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildUrl("/api/realtime")),this.eventSource.onerror=e=>{this.connectErrorHandler(new Error("Failed to establish realtime connection."))},this.eventSource.addEventListener("PB_CONNECT",e=>{const t=e;this.clientId=t==null?void 0:t.lastEventId,this.submitSubscriptions().then(()=>d(this,void 0,void 0,function*(){let i=3;for(;this.hasUnsentSubscriptions()&&i>0;)i--,yield this.submitSubscriptions()})).then(()=>{for(let i of this.pendingConnects)i.resolve();this.pendingConnects=[],this.reconnectAttempts=0,clearTimeout(this.reconnectTimeoutId),clearTimeout(this.connectTimeoutId)}).catch(i=>{this.clientId="",this.connectErrorHandler(i)})})}hasUnsentSubscriptions(){const e=this.getNonEmptySubscriptionTopics();if(e.length!=this.lastSentTopics.length)return!0;for(const t of e)if(!this.lastSentTopics.includes(t))return!0;return!1}connectErrorHandler(e){if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(let i of this.pendingConnects)i.reject(new g(e));return this.pendingConnects=[],void this.disconnect()}this.disconnect(!0);const t=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout(()=>{this.initConnect()},t)}disconnect(e=!1){var t;if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),this.client.cancelRequest(this.getSubscriptionsCancelKey()),(t=this.eventSource)===null||t===void 0||t.close(),this.eventSource=null,this.clientId="",!e){this.reconnectAttempts=0;for(let i of this.pendingConnects)i.resolve();this.pendingConnects=[]}}}class he extends q{constructor(e,t){super(e),this.collectionIdOrName=t}get baseCrudPath(){return this.baseCollectionPath+"/records"}get baseCollectionPath(){return"/api/collections/"+encodeURIComponent(this.collectionIdOrName)}subscribeOne(e,t){return d(this,void 0,void 0,function*(){return console.warn("PocketBase: subscribeOne(recordId, callback) is deprecated. Please replace it with subscribe(recordId, callback)."),this.client.realtime.subscribe(this.collectionIdOrName+"/"+e,t)})}subscribe(e,t){return d(this,void 0,void 0,function*(){if(typeof e=="function")return console.warn("PocketBase: subscribe(callback) is deprecated. Please replace it with subscribe('*', callback)."),this.client.realtime.subscribe(this.collectionIdOrName,e);if(!t)throw new Error("Missing subscription callback.");if(e==="")throw new Error("Missing topic.");let i=this.collectionIdOrName;return e!=="*"&&(i+="/"+e),this.client.realtime.subscribe(i,t)})}unsubscribe(e){return d(this,void 0,void 0,function*(){return e==="*"?this.client.realtime.unsubscribe(this.collectionIdOrName):e?this.client.realtime.unsubscribe(this.collectionIdOrName+"/"+e):this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)})}getFullList(e,t){if(typeof e=="number")return super.getFullList(e,t);const i=Object.assign({},e,t);return super.getFullList(i)}getList(e=1,t=30,i){return super.getList(e,t,i)}getFirstListItem(e,t){return super.getFirstListItem(e,t)}getOne(e,t){return super.getOne(e,t)}create(e,t){return super.create(e,t)}update(e,t,i){return super.update(e,t,i).then(s=>{var n,o,a;return((n=this.client.authStore.model)===null||n===void 0?void 0:n.id)!==(s==null?void 0:s.id)||((o=this.client.authStore.model)===null||o===void 0?void 0:o.collectionId)!==this.collectionIdOrName&&((a=this.client.authStore.model)===null||a===void 0?void 0:a.collectionName)!==this.collectionIdOrName||this.client.authStore.save(this.client.authStore.token,s),s})}delete(e,t){return super.delete(e,t).then(i=>{var s,n,o;return!i||((s=this.client.authStore.model)===null||s===void 0?void 0:s.id)!==e||((n=this.client.authStore.model)===null||n===void 0?void 0:n.collectionId)!==this.collectionIdOrName&&((o=this.client.authStore.model)===null||o===void 0?void 0:o.collectionName)!==this.collectionIdOrName||this.client.authStore.clear(),i})}authResponse(e){const t=this.decode((e==null?void 0:e.record)||{});return this.client.authStore.save(e==null?void 0:e.token,t),Object.assign({},e,{token:(e==null?void 0:e.token)||"",record:t})}listAuthMethods(e){return e=Object.assign({method:"GET"},e),this.client.send(this.baseCollectionPath+"/auth-methods",e).then(t=>Object.assign({},t,{usernamePassword:!!(t!=null&&t.usernamePassword),emailPassword:!!(t!=null&&t.emailPassword),authProviders:Array.isArray(t==null?void 0:t.authProviders)?t==null?void 0:t.authProviders:[]}))}authWithPassword(e,t,i,s){let n={method:"POST",body:{identity:e,password:t}};return n=m("This form of authWithPassword(usernameOrEmail, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(usernameOrEmail, pass, options?).",n,i,s),this.client.send(this.baseCollectionPath+"/auth-with-password",n).then(o=>this.authResponse(o))}authWithOAuth2Code(e,t,i,s,n,o,a){let l={method:"POST",body:{provider:e,code:t,codeVerifier:i,redirectUrl:s,createData:n}};return l=m("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, options?).",l,o,a),this.client.send(this.baseCollectionPath+"/auth-with-oauth2",l).then(c=>this.authResponse(c))}authWithOAuth2(...e){return d(this,void 0,void 0,function*(){if(e.length>1||typeof(e==null?void 0:e[0])=="string")return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."),this.authWithOAuth2Code((e==null?void 0:e[0])||"",(e==null?void 0:e[1])||"",(e==null?void 0:e[2])||"",(e==null?void 0:e[3])||"",(e==null?void 0:e[4])||{},(e==null?void 0:e[5])||{},(e==null?void 0:e[6])||{});const t=(e==null?void 0:e[0])||{},i=(yield this.listAuthMethods()).authProviders.find(l=>l.name===t.provider);if(!i)throw new g(new Error(`Missing or invalid provider "${t.provider}".`));const s=this.client.buildUrl("/api/oauth2-redirect"),n=new B(this.client);let o=null;function a(){o==null||o.close(),n.unsubscribe()}return t.urlCallback||(o=L(void 0)),new Promise((l,c)=>d(this,void 0,void 0,function*(){var b;try{yield n.subscribe("@oauth2",f=>d(this,void 0,void 0,function*(){const T=n.clientId;try{if(!f.state||T!==f.state)throw new Error("State parameters don't match.");const p=Object.assign({},t);delete p.provider,delete p.scopes,delete p.createData,delete p.urlCallback;const h=yield this.authWithOAuth2Code(i.name,f.code,i.codeVerifier,s,t.createData,p);l(h)}catch(p){c(new g(p))}a()}));const u={state:n.clientId};!((b=t.scopes)===null||b===void 0)&&b.length&&(u.scope=t.scopes.join(" "));const w=this._replaceQueryParams(i.authUrl+s,u);yield(t.urlCallback||function(f){o?o.location.href=f:o=L(f)})(w)}catch(u){a(),c(new g(u))}}))})}authRefresh(e,t){let i={method:"POST"};return i=m("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",i,e,t),this.client.send(this.baseCollectionPath+"/auth-refresh",i).then(s=>this.authResponse(s))}requestPasswordReset(e,t,i){let s={method:"POST",body:{email:e}};return s=m("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",s,t,i),this.client.send(this.baseCollectionPath+"/request-password-reset",s).then(()=>!0)}confirmPasswordReset(e,t,i,s,n){let o={method:"POST",body:{token:e,password:t,passwordConfirm:i}};return o=m("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).",o,s,n),this.client.send(this.baseCollectionPath+"/confirm-password-reset",o).then(()=>!0)}requestVerification(e,t,i){let s={method:"POST",body:{email:e}};return s=m("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).",s,t,i),this.client.send(this.baseCollectionPath+"/request-verification",s).then(()=>!0)}confirmVerification(e,t,i){let s={method:"POST",body:{token:e}};return s=m("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).",s,t,i),this.client.send(this.baseCollectionPath+"/confirm-verification",s).then(()=>!0)}requestEmailChange(e,t,i){let s={method:"POST",body:{newEmail:e}};return s=m("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).",s,t,i),this.client.send(this.baseCollectionPath+"/request-email-change",s).then(()=>!0)}confirmEmailChange(e,t,i,s){let n={method:"POST",body:{token:e,password:t}};return n=m("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).",n,i,s),this.client.send(this.baseCollectionPath+"/confirm-email-change",n).then(()=>!0)}listExternalAuths(e,t){return t=Object.assign({method:"GET"},t),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e)+"/external-auths",t)}unlinkExternalAuth(e,t,i){return i=Object.assign({method:"DELETE"},i),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e)+"/external-auths/"+encodeURIComponent(t),i).then(()=>!0)}_replaceQueryParams(e,t={}){let i=e,s="";e.indexOf("?")>=0&&(i=e.substring(0,e.indexOf("?")),s=e.substring(e.indexOf("?")+1));const n={},o=s.split("&");for(const a of o){if(a=="")continue;const l=a.split("=");n[decodeURIComponent(l[0].replace(/\+/g," "))]=decodeURIComponent((l[1]||"").replace(/\+/g," "))}for(let a in t)t.hasOwnProperty(a)&&(t[a]==null?delete n[a]:n[a]=t[a]);s="";for(let a in n)n.hasOwnProperty(a)&&(s!=""&&(s+="&"),s+=encodeURIComponent(a.replace(/%20/g,"+"))+"="+encodeURIComponent(n[a].replace(/%20/g,"+")));return s!=""?i+"?"+s:i}}function L(r){if(typeof window>"u"||!(window!=null&&window.open))throw new g(new Error("Not in a browser context - please pass a custom urlCallback function."));let e=1024,t=768,i=window.innerWidth,s=window.innerHeight;e=e>i?i:e,t=t>s?s:t;let n=i/2-e/2,o=s/2-t/2;return window.open(r,"popup_window","width="+e+",height="+t+",top="+o+",left="+n+",resizable,menubar=no")}class ue extends q{get baseCrudPath(){return"/api/collections"}import(e,t=!1,i){return d(this,void 0,void 0,function*(){return i=Object.assign({method:"PUT",body:{collections:e,deleteMissing:t}},i),this.client.send(this.baseCrudPath+"/import",i).then(()=>!0)})}}class pe extends v{getRequestsList(e=1,t=30,i){return(i=Object.assign({method:"GET"},i)).query=Object.assign({page:e,perPage:t},i.query),this.client.send("/api/logs/requests",i)}getRequest(e,t){return t=Object.assign({method:"GET"},t),this.client.send("/api/logs/requests/"+encodeURIComponent(e),t)}getRequestsStats(e){return e=Object.assign({method:"GET"},e),this.client.send("/api/logs/requests/stats",e)}}class fe extends v{check(e){return e=Object.assign({method:"GET"},e),this.client.send("/api/health",e)}}class me extends v{getUrl(e,t,i={}){if(!t||!(e!=null&&e.id)||!(e!=null&&e.collectionId)&&!(e!=null&&e.collectionName))return"";const s=[];s.push("api"),s.push("files"),s.push(encodeURIComponent(e.collectionId||e.collectionName)),s.push(encodeURIComponent(e.id)),s.push(encodeURIComponent(t));let n=this.client.buildUrl(s.join("/"));if(Object.keys(i).length){i.download===!1&&delete i.download;const o=new URLSearchParams(i);n+=(n.includes("?")?"&":"?")+o}return n}getToken(e){return e=Object.assign({method:"POST"},e),this.client.send("/api/files/token",e).then(t=>(t==null?void 0:t.token)||"")}}class be extends v{getFullList(e){return e=Object.assign({method:"GET"},e),this.client.send("/api/backups",e)}create(e,t){return t=Object.assign({method:"POST",body:{name:e}},t),this.client.send("/api/backups",t).then(()=>!0)}upload(e,t){return t=Object.assign({method:"POST",body:e},t),this.client.send("/api/backups/upload",t).then(()=>!0)}delete(e,t){return t=Object.assign({method:"DELETE"},t),this.client.send(`/api/backups/${encodeURIComponent(e)}`,t).then(()=>!0)}restore(e,t){return t=Object.assign({method:"POST"},t),this.client.send(`/api/backups/${encodeURIComponent(e)}/restore`,t).then(()=>!0)}getDownloadUrl(e,t){return this.client.buildUrl(`/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`)}}const ge=["requestKey","$cancelKey","$autoCancel","fetch","headers","body","query","params","cache","credentials","headers","integrity","keepalive","method","mode","redirect","referrer","referrerPolicy","signal","window"];class ve{constructor(e="/",t,i="en-US"){this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseUrl=e,this.lang=i,this.authStore=t||new le,this.admins=new de(this),this.collections=new ue(this),this.files=new me(this),this.logs=new pe(this),this.settings=new ce(this),this.realtime=new B(this),this.health=new fe(this),this.backups=new be(this)}collection(e){return this.recordServices[e]||(this.recordServices[e]=new he(this,e)),this.recordServices[e]}autoCancellation(e){return this.enableAutoCancellation=!!e,this}cancelRequest(e){return this.cancelControllers[e]&&(this.cancelControllers[e].abort(),delete this.cancelControllers[e]),this}cancelAllRequests(){for(let e in this.cancelControllers)this.cancelControllers[e].abort();return this.cancelControllers={},this}getFileUrl(e,t,i={}){return this.files.getUrl(e,t,i)}buildUrl(e){var t;let i=this.baseUrl;return typeof window>"u"||!window.location||i.startsWith("https://")||i.startsWith("http://")||(i=!((t=window.location.origin)===null||t===void 0)&&t.endsWith("/")?window.location.origin.substring(0,window.location.origin.length-1):window.location.origin||"",this.baseUrl.startsWith("/")||(i+=window.location.pathname||"/",i+=i.endsWith("/")?"":"/"),i+=this.baseUrl),e&&(i+=i.endsWith("/")?"":"/",i+=e.startsWith("/")?e.substring(1):e),i}send(e,t){return d(this,void 0,void 0,function*(){t=this.initSendOptions(e,t);let i=this.buildUrl(e);if(this.beforeSend){const s=Object.assign({},yield this.beforeSend(i,t));s.url!==void 0||s.options!==void 0?(i=s.url||i,t=s.options||t):Object.keys(s).length&&(t=s,console!=null&&console.warn&&console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))}if(t.query!==void 0){const s=this.serializeQueryParams(t.query);s&&(i+=(i.includes("?")?"&":"?")+s),delete t.query}return this.getHeader(t.headers,"Content-Type")=="application/json"&&t.body&&typeof t.body!="string"&&(t.body=JSON.stringify(t.body)),(t.fetch||fetch)(i,t).then(s=>d(this,void 0,void 0,function*(){let n={};try{n=yield s.json()}catch{}if(this.afterSend&&(n=yield this.afterSend(s,n)),s.status>=400)throw new g({url:s.url,status:s.status,data:n});return n})).catch(s=>{throw new g(s)})})}initSendOptions(e,t){(t=Object.assign({method:"GET"},t)).query=t.query||{},t.body=this.convertToFormDataIfNeeded(t.body);for(let i in t)ge.includes(i)||(t.query[i]=t[i],delete t[i]);if(t.query=Object.assign({},t.params,t.query),t.requestKey===void 0&&(t.$autoCancel===!1||t.query.$autoCancel===!1?t.requestKey=null:(t.$cancelKey||t.query.$cancelKey)&&(t.requestKey=t.$cancelKey||t.query.$cancelKey)),delete t.$autoCancel,delete t.query.$autoCancel,delete t.$cancelKey,delete t.query.$cancelKey,this.getHeader(t.headers,"Content-Type")!==null||this.isFormData(t.body)||(t.headers=Object.assign({},t.headers,{"Content-Type":"application/json"})),this.getHeader(t.headers,"Accept-Language")===null&&(t.headers=Object.assign({},t.headers,{"Accept-Language":this.lang})),this.authStore.token&&this.getHeader(t.headers,"Authorization")===null&&(t.headers=Object.assign({},t.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&t.requestKey!==null){const i=t.requestKey||(t.method||"GET")+e;delete t.requestKey,this.cancelRequest(i);const s=new AbortController;this.cancelControllers[i]=s,t.signal=s.signal}return t}convertToFormDataIfNeeded(e){if(typeof FormData>"u"||e===void 0||typeof e!="object"||e===null||this.isFormData(e)||!this.hasBlobField(e))return e;const t=new FormData;for(let i in e){const s=Array.isArray(e[i])?e[i]:[e[i]];for(let n of s)t.append(i,n)}return t}hasBlobField(e){for(let t in e){const i=Array.isArray(e[t])?e[t]:[e[t]];for(let s of i)if(typeof Blob<"u"&&s instanceof Blob||typeof File<"u"&&s instanceof File)return!0}return!1}getHeader(e,t){e=e||{},t=t.toLowerCase();for(let i in e)if(i.toLowerCase()==t)return e[i];return null}isFormData(e){return e&&(e.constructor.name==="FormData"||typeof FormData<"u"&&e instanceof FormData)}serializeQueryParams(e){const t=[];for(const i in e){if(e[i]===null)continue;const s=e[i],n=encodeURIComponent(i);if(Array.isArray(s))for(const o of s)t.push(n+"="+encodeURIComponent(o));else s instanceof Date?t.push(n+"="+encodeURIComponent(s.toISOString())):typeof s!==null&&typeof s=="object"?t.push(n+"="+encodeURIComponent(JSON.stringify(s))):t.push(n+"="+encodeURIComponent(s))}return t.join("&")}}const ye=!1;async function we(){const r=new ve(window.location.origin);return{pb:r,files:await r.collection("files").getList(1,50)}}const Ie=Object.freeze(Object.defineProperty({__proto__:null,load:we,ssr:ye},Symbol.toStringTag,{value:"Module"}));function Se(r){let e,t;const i=r[2].default,s=M(i,r,r[1],null);return{c(){e=z("a"),s&&s.c(),this.h()},l(n){e=Q(n,"A",{class:!0,href:!0});var o=Y(e);s&&s.l(o),o.forEach(A),this.h()},h(){I(e,"class","px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-700 active:bg-sky-600"),I(e,"href",r[0])},m(n,o){F(n,e,o),s&&s.m(e,null),t=!0},p(n,[o]){s&&s.p&&(!t||o&2)&&H(s,i,n,n[1],t?V(i,n[1],o,null):J(n[1]),null),(!t||o&1)&&I(e,"href",n[0])},i(n){t||($(s,n),t=!0)},o(n){D(s,n),t=!1},d(n){n&&A(e),s&&s.d(n)}}}function Ce(r,e,t){let{$$slots:i={},$$scope:s}=e,{href:n}=e;return r.$$set=o=>{"href"in o&&t(0,n=o.href),"$$scope"in o&&t(1,s=o.$$scope)},[n,s,i]}class Oe extends U{constructor(e){super(),N(this,e,Ce,Se,x,{href:0})}}function ke(r){let e;return{c(){e=ie("Login")},l(t){e=se(t,"Login")},m(t,i){F(t,e,i)},d(t){t&&A(e)}}}function Te(r){let e,t;return e=new Oe({props:{href:"/login",$$slots:{default:[ke]},$$scope:{ctx:r}}}),{c(){X(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,s){ee(e,i,s),t=!0},p(i,[s]){const n={};s&1&&(n.$$scope={dirty:s,ctx:i}),e.$set(n)},i(i){t||($(e.$$.fragment,i),t=!0)},o(i){D(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}class Re extends U{constructor(e){super(),N(this,e,null,Te,x,{})}}export{Re as component,Ie as universal};
