function O(){}function C(t,n){for(const e in n)t[e]=n[e];return t}function U(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function P(t){return t()}function V(){return Object.create(null)}function q(t){t.forEach(P)}function X(t){return typeof t=="function"}function Y(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let h;function Z(t,n){return t===n?!0:(h||(h=document.createElement("a")),h.href=n,t===h.href)}function $(t){return Object.keys(t).length===0}function D(t,...n){if(t==null){for(const i of n)i(void 0);return O}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function tt(t,n,e){t.$$.on_destroy.push(D(n,e))}function nt(t,n,e,i){if(t){const r=N(t,n,e,i);return t[0](r)}}function N(t,n,e,i){return t[1]&&i?C(e.ctx.slice(),t[1](i(n))):e.ctx}function et(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function it(t,n,e,i,r,u){if(r){const c=N(n,e,i,u);t.p(c,r)}}function rt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ct(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function lt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function st(t){const n={};for(const e in t)n[e]=!0;return n}let p=!1;function ut(){p=!0}function ot(){p=!1}function L(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function M(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const o=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:L(1,r,S=>n[e[S]].claim_order,o))-1;i[l]=e[a]+1;const k=a+1;e[k]=l,r=Math.max(k,r)}const u=[],c=[];let s=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);u.reverse(),c.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<c.length;l++){for(;o<u.length&&c[l].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(c[l],a)}}function T(t,n){if(p){for(M(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function at(t,n,e){p&&!e?T(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function B(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function dt(){return v(" ")}function ht(){return v("")}function mt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function pt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function H(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const z=["width","height"];function yt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set&&z.indexOf(i)===-1?t[i]=n[i]:H(t,i,n[i])}function bt(t){return t.dataset.svelteH}function gt(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,n,e,i,r=!1){F(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function I(t,n,e,i){return j(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function xt(t,n,e){return I(t,n,e,B)}function W(t,n){return j(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function vt(t){return W(t," ")}function wt(t,n){n=""+n,t.data!==n&&(t.data=n)}function kt(t,n){t.value=n??""}function Et(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n,e){t.classList.toggle(n,!!e)}function G(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function jt(t,n){return new t(n)}let m;function y(t){m=t}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function At(t){w().$$.on_mount.push(t)}function St(t){w().$$.after_update.push(t)}function Ot(){const t=w();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const u=G(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}const d=[],E=[];let _=[];const g=[],A=Promise.resolve();let x=!1;function J(){x||(x=!0,A.then(Q))}function Ct(){return J(),A}function K(t){_.push(t)}function Pt(t){g.push(t)}const b=new Set;let f=0;function Q(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const n=d[f];f++,y(n),R(n.$$)}}catch(n){throw d.length=0,f=0,n}for(y(null),d.length=0,f=0;E.length;)E.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;g.length;)g.pop()();x=!1,b.clear(),y(t)}function R(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(K)}}function qt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{J as $,U as A,w as B,y as C,Q as D,C as E,ct as F,st as G,yt as H,lt as I,mt as J,Ot as K,bt as L,kt as M,Nt as N,pt as O,Pt as P,Z as Q,_t as R,q as S,V as T,X as U,$ as V,K as W,qt as X,m as Y,P as Z,d as _,dt as a,ut as a0,ot as a1,St as b,vt as c,ft as d,ht as e,B as f,xt as g,gt as h,at as i,H as j,Et as k,v as l,W as m,wt as n,At as o,E as p,jt as q,nt as r,Y as s,Ct as t,it as u,rt as v,et as w,T as x,O as y,tt as z};