import{y as p,s as I,U as x,V as U,W as O}from"./scheduler.c073d8ea.js";const f=[];function L(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let n;const o=new Set;function r(s){if(I(e,s)&&(e=s,n)){const i=!f.length;for(const l of o)l[1](),f.push(l,e);if(i){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function c(s){r(s(e))}function a(s,i=p){const l=[s,i];return o.add(l),o.size===1&&(n=t(r,c)||p),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:a}}function K(e,t,n){const o=!Array.isArray(e),r=o?[e]:e;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const c=t.length<2;return L(n,(a,s)=>{let i=!1;const l=[];let _=0,g=p;const v=()=>{if(_)return;g();const u=t(o?l[0]:l,a,s);c?a(u):g=O(u)?u:p},S=r.map((u,h)=>x(u,T=>{l[h]=T,_&=~(1<<h),i&&v()},()=>{_|=1<<h}));return i=!0,v(),function(){U(S),g(),i=!1}})}var m;const N=((m=globalThis.__sveltekit_1s0stow)==null?void 0:m.base)??"";var A;const V=((A=globalThis.__sveltekit_1s0stow)==null?void 0:A.assets)??N,P="1694746152419",$="sveltekit:snapshot",z="sveltekit:scroll",B="sveltekit:index",y={tap:1,hover:2,viewport:3,eager:4,off:-1};function C(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function D(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const k={...y,"":y.hover};function E(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function G(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=E(e)}}function W(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||j(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:o,download:c}}function X(e){let t=null,n=null,o=null,r=null,c=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=d(s,"preload-code")),r===null&&(r=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),c===null&&(c=d(s,"reload")),a===null&&(a=d(s,"replacestate")),s=E(s);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:k[o??"off"],preload_data:k[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(c),replace_state:i(a)}}function w(e){const t=b(e);let n=!0;function o(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function c(a){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&a(s=i)})}return{notify:o,set:r,subscribe:c}}function Y(){const{set:e,subscribe:t}=b(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${V}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==P;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:o}}function j(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let R;function H(e){R=e.client}function F(e){return(...t)=>R[e](...t)}const J={url:w({}),page:w({}),navigating:b(null),updated:Y()};export{B as I,y as P,z as S,$ as a,W as b,X as c,J as d,N as e,G as f,C as g,H as h,j as i,K as j,V as k,F as l,D as s,b as w};