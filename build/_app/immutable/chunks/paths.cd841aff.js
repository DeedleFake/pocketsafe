import{n as c,s as p}from"./scheduler.e97a849c.js";const t=[];function q(i,l=c){let n;const o=new Set;function r(e){if(p(i,e)&&(i=e,n)){const b=!t.length;for(const s of o)s[1](),t.push(s,i);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(i))}function _(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(n=l(r,f)||c),e(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_iq9e7p)==null?void 0:u.base)??"";var a;const d=((a=globalThis.__sveltekit_iq9e7p)==null?void 0:a.assets)??h;export{d as a,h as b,q as w};
