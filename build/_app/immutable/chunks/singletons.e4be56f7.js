import{w as p,s as U,Q as N,R as L,S as P}from"./scheduler.df21a823.js";const f=[];function V(e,t){return{subscribe:_(e,t).subscribe}}function _(e,t=p){let s;const o=new Set;function l(n){if(U(e,n)&&(e=n,s)){const a=!f.length;for(const r of o)r[1](),f.push(r,e);if(a){for(let r=0;r<f.length;r+=2)f[r][0](f[r+1]);f.length=0}}}function u(n){l(n(e))}function i(n,a=p){const r=[n,a];return o.add(r),o.size===1&&(s=t(l,u)||p),n(e),()=>{o.delete(r),o.size===0&&s&&(s(),s=null)}}return{set:l,update:u,subscribe:i}}function j(e,t,s){const o=!Array.isArray(e),l=o?[e]:e;if(!l.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const u=t.length<2;return V(s,(i,n)=>{let a=!1;const r=[];let b=0,g=p;const k=()=>{if(b)return;g();const c=t(o?r[0]:r,i,n);u?i(c):g=P(c)?c:p},O=l.map((c,h)=>N(c,T=>{r[h]=T,b&=~(1<<h),a&&k()},()=>{b|=1<<h}));return a=!0,k(),function(){L(O),g(),a=!1}})}var E;const Y=((E=globalThis.__sveltekit_1u15x6k)==null?void 0:E.base)??"";var x;const z=((x=globalThis.__sveltekit_1u15x6k)==null?void 0:x.assets)??Y,B="sveltekit:snapshot",C="sveltekit:scroll",D="sveltekit:index",v={tap:1,hover:2,viewport:3,eager:4,off:-1};function G(e){let t=e.baseURI;if(!t){const s=e.getElementsByTagName("base");t=s.length?s[0].href:e.URL}return t}function W(){return{x:pageXOffset,y:pageYOffset}}const w=new WeakSet,y={"preload-code":["","off","tap","hover","viewport","eager"],"preload-data":["","off","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function d(e,t){const s=e.getAttribute(`data-sveltekit-${t}`);return m(e,t,s),s}function m(e,t,s){s!==null&&!w.has(e)&&!y[t].includes(s)&&(console.error(`Unexpected value for ${t} — should be one of ${y[t].map(o=>JSON.stringify(o)).join(", ")}`,e),w.add(e))}const S={...v,"":v.hover};function R(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function X(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=R(e)}}function H(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,l=!s||!!o||K(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),u=(s==null?void 0:s.origin)===location.origin&&e.hasAttribute("download");return{url:s,external:l,target:o,download:u}}function J(e){let t=null,s=null,o=null,l=null,u=null,i=null,n=e;for(;n&&n!==document.documentElement;)o===null&&(o=d(n,"preload-code")),l===null&&(l=d(n,"preload-data")),t===null&&(t=d(n,"keepfocus")),s===null&&(s=d(n,"noscroll")),u===null&&(u=d(n,"reload")),i===null&&(i=d(n,"replacestate")),n=R(n);function a(r){switch(r){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:S[o??"off"],preload_data:S[l??"off"],keep_focus:a(t),noscroll:a(s),reload:a(u),replace_state:a(i)}}function A(e){const t=_(e);let s=!0;function o(){s=!0,t.update(i=>i)}function l(i){s=!1,t.set(i)}function u(i){let n;return t.subscribe(a=>{(n===void 0||s&&a!==n)&&i(n=a)})}return{notify:o,set:l,subscribe:u}}function q(){const{set:e,subscribe:t}=_(!1);return{subscribe:t,check:async()=>!1}}function K(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let I;function Q(e){I=e.client}function F(e){return(...t)=>I[e](...t)}const M={url:A({}),page:A({}),navigating:_(null),updated:q()};export{D as I,v as P,C as S,B as a,H as b,J as c,M as d,Y as e,X as f,G as g,Q as h,K as i,F as j,j as k,z as l,W as s,_ as w};