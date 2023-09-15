import{s as M,a as P,f as N,c as U,g as y,j as I,i as $,A,d as p,z as K,B as ne,l as j,m as R,p as G,e as C,y as E,C as _e,D as F,E as q,F as W,G as Q,h as D,H as Ue,I as X,x as V,J as Ce,K as De,n as H,L as pe,r as se,u as re,v as ie,w as ae,M as Oe,N as te,O as me}from"../chunks/scheduler.c073d8ea.js";import{B as Se,c as Ve,p as oe,g as je,L as x,a as Re,N as Te,b as Ge,h as de,u as qe,C as Ae,t as $e}from"../chunks/CircularProgress.c35511e3.js";import{S as O,i as T,b,d as v,m as k,a as _,t as m,e as w,f as Y,g as z,c as B}from"../chunks/index.12b87e20.js";import{j as ze,w as He}from"../chunks/singletons.dbd6ba8b.js";function Z(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Je(i){let e;return{c(){e=j("Upload")},l(n){e=R(n,"Upload")},m(n,t){$(n,e,t)},d(n){n&&p(e)}}}function Ke(i){let e,n,t,l,s,r;return e=new Se({props:{$$slots:{default:[Je]},$$scope:{ctx:i}}}),e.$on("click",i[2]),{c(){b(e.$$.fragment),n=P(),t=N("input"),this.h()},l(a){v(e.$$.fragment,a),n=U(a),t=y(a,"INPUT",{type:!0,class:!0}),this.h()},h(){I(t,"type","file"),I(t,"class","hidden")},m(a,o){k(e,a,o),$(a,n,o),$(a,t,o),i[3](t),l=!0,s||(r=A(t,"change",i[4]),s=!0)},p(a,[o]){const f={};o&256&&(f.$$scope={dirty:o,ctx:a}),e.$set(f)},i(a){l||(_(e.$$.fragment,a),l=!0)},o(a){m(e.$$.fragment,a),l=!1},d(a){a&&(p(n),p(t)),w(e,a),i[3](null),s=!1,r()}}}function We(i,e,n){let t;K(i,Ve,c=>n(5,t=c));const l=ne();let s=null,r=null;async function a(){let c=[];for(const d of r)c.push(oe.collection("files").create({name:d.name,file:d,owner:t.id}));await Promise.all(c),l("upload",r),n(0,r=null)}const o=()=>s.click();function f(c){G[c?"unshift":"push"](()=>{s=c,n(1,s)})}function u(){r=this.files,n(0,r)}return i.$$.update=()=>{i.$$.dirty&1&&r&&a()},[r,s,o,f,u]}class Qe extends O{constructor(e){super(),T(this,e,We,Ke,M,{})}}function Xe(i){let e,n,t,l=[{type:"text"},{class:i[2]},i[3]],s={};for(let r=0;r<l.length;r+=1)s=F(s,l[r]);return{c(){e=N("input"),this.h()},l(r){e=y(r,"INPUT",{type:!0,class:!0}),this.h()},h(){W(e,s)},m(r,a){$(r,e,a),e.autofocus&&e.focus(),Q(e,i[0]),n||(t=A(e,"input",i[5]),n=!0)},p(r,a){W(e,s=je(l,[{type:"text"},{class:r[2]},a&8&&r[3]])),a&1&&e.value!==r[0]&&Q(e,r[0])},d(r){r&&p(e),n=!1,t()}}}function Ye(i){let e,n,t,l=[{type:"password"},{class:i[2]},i[3]],s={};for(let r=0;r<l.length;r+=1)s=F(s,l[r]);return{c(){e=N("input"),this.h()},l(r){e=y(r,"INPUT",{type:!0,class:!0}),this.h()},h(){W(e,s)},m(r,a){$(r,e,a),e.autofocus&&e.focus(),Q(e,i[0]),n||(t=A(e,"input",i[4]),n=!0)},p(r,a){W(e,s=je(l,[{type:"password"},{class:r[2]},a&8&&r[3]])),a&1&&e.value!==r[0]&&Q(e,r[0])},d(r){r&&p(e),n=!1,t()}}}function Ze(i){let e;function n(s,r){return s[1]?Ye:Xe}let t=n(i),l=t(i);return{c(){l.c(),e=C()},l(s){l.l(s),e=C()},m(s,r){l.m(s,r),$(s,e,r)},p(s,[r]){t===(t=n(s))&&l?l.p(s,r):(l.d(1),l=t(s),l&&(l.c(),l.m(e.parentNode,e)))},i:E,o:E,d(s){s&&p(e),l.d(s)}}}function xe(i,e,n){const t=["password","value"];let l=_e(e,t),{password:s=!1}=e,{value:r=""}=e;const a=`
		px-2
		py-1
		rounded-2xl
		border-4
		transition-all
		text-slate-100
		outline-none
		border-cyan-500
		dark:text-slate-800
		hover:border-cyan-600
		focus:border-cyan-700
		disabled:bg-cyan-200
		disabled:text-cyan-700
		disabled:border-cyan-300
	`;function o(){r=this.value,n(0,r)}function f(){r=this.value,n(0,r)}return i.$$set=u=>{e=F(F({},e),q(u)),n(3,l=_e(e,t)),"password"in u&&n(1,s=u.password),"value"in u&&n(0,r=u.value)},[r,s,a,l,o,f]}class le extends O{constructor(e){super(),T(this,e,xe,Ze,M,{password:1,value:0})}}function et(i){let e,n,t,l,s,r;function a(f){i[2](f)}let o={placeholder:"Search..."};return i[0]!==void 0&&(o.value=i[0]),n=new le({props:o}),G.push(()=>Y(n,"value",a)),{c(){e=N("form"),b(n.$$.fragment),this.h()},l(f){e=y(f,"FORM",{class:!0});var u=D(e);v(n.$$.fragment,u),u.forEach(p),this.h()},h(){I(e,"class","contents")},m(f,u){$(f,e,u),k(n,e,null),l=!0,s||(r=A(e,"submit",Ue(i[1])),s=!0)},p(f,[u]){const c={};!t&&u&1&&(t=!0,c.value=f[0],X(()=>t=!1)),n.$set(c)},i(f){l||(_(n.$$.fragment,f),l=!0)},o(f){m(n.$$.fragment,f),l=!1},d(f){f&&p(e),w(n),s=!1,r()}}}function tt(i,e,n){const t=ne();let{value:l=""}=e;function s(){t("submit",l)}function r(a){l=a,n(0,l)}return i.$$set=a=>{"value"in a&&n(0,l=a.value)},[l,s,r]}class lt extends O{constructor(e){super(),T(this,e,tt,et,M,{value:0})}}function ge(i,e,n){const t=i.slice();return t[7]=e[n],t}function he(i){let e,n,t,l="...",s;return e=new x({props:{$$slots:{default:[nt]},$$scope:{ctx:i}}}),e.$on("click",i[3]),{c(){b(e.$$.fragment),n=P(),t=N("div"),t.textContent=l},l(r){v(e.$$.fragment,r),n=U(r),t=y(r,"DIV",{"data-svelte-h":!0}),De(t)!=="svelte-12rhcfw"&&(t.textContent=l)},m(r,a){k(e,r,a),$(r,n,a),$(r,t,a),s=!0},p(r,a){const o={};a&1024&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){s||(_(e.$$.fragment,r),s=!0)},o(r){m(e.$$.fragment,r),s=!1},d(r){r&&(p(n),p(t)),w(e,r)}}}function nt(i){let e;return{c(){e=j("1")},l(n){e=R(n,"1")},m(n,t){$(n,e,t)},d(n){n&&p(e)}}}function st(i){let e,n;function t(...l){return i[4](i[7],...l)}return e=new x({props:{$$slots:{default:[it]},$$scope:{ctx:i}}}),e.$on("click",t),{c(){b(e.$$.fragment)},l(l){v(e.$$.fragment,l)},m(l,s){k(e,l,s),n=!0},p(l,s){i=l;const r={};s&1025&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(l){n||(_(e.$$.fragment,l),n=!0)},o(l){m(e.$$.fragment,l),n=!1},d(l){w(e,l)}}}function rt(i){let e,n;return{c(){e=N("div"),n=j(i[0])},l(t){e=y(t,"DIV",{});var l=D(e);n=R(l,i[0]),l.forEach(p)},m(t,l){$(t,e,l),V(e,n)},p(t,l){l&1&&H(n,t[0])},i:E,o:E,d(t){t&&p(e)}}}function it(i){let e=i[7]+"",n;return{c(){n=j(e)},l(t){n=R(t,e)},m(t,l){$(t,n,l)},p(t,l){l&1&&e!==(e=t[7]+"")&&H(n,e)},d(t){t&&p(n)}}}function be(i){let e,n,t,l;const s=[rt,st],r=[];function a(o,f){return o[7]===o[0]?0:o[7]>1&&o[7]<o[1]?1:-1}return~(e=a(i))&&(n=r[e]=s[e](i)),{c(){n&&n.c(),t=C()},l(o){n&&n.l(o),t=C()},m(o,f){~e&&r[e].m(o,f),$(o,t,f),l=!0},p(o,f){let u=e;e=a(o),e===u?~e&&r[e].p(o,f):(n&&(z(),m(r[u],1,1,()=>{r[u]=null}),B()),~e?(n=r[e],n?n.p(o,f):(n=r[e]=s[e](o),n.c()),_(n,1),n.m(t.parentNode,t)):n=null)},i(o){l||(_(n),l=!0)},o(o){m(n),l=!1},d(o){o&&p(t),~e&&r[e].d(o)}}}function ve(i){let e,n="...",t,l,s;return l=new x({props:{$$slots:{default:[at]},$$scope:{ctx:i}}}),l.$on("click",i[5]),{c(){e=N("div"),e.textContent=n,t=P(),b(l.$$.fragment)},l(r){e=y(r,"DIV",{"data-svelte-h":!0}),De(e)!=="svelte-12rhcfw"&&(e.textContent=n),t=U(r),v(l.$$.fragment,r)},m(r,a){$(r,e,a),$(r,t,a),k(l,r,a),s=!0},p(r,a){const o={};a&1026&&(o.$$scope={dirty:a,ctx:r}),l.$set(o)},i(r){s||(_(l.$$.fragment,r),s=!0)},o(r){m(l.$$.fragment,r),s=!1},d(r){r&&(p(e),p(t)),w(l,r)}}}function at(i){let e;return{c(){e=j(i[1])},l(n){e=R(n,i[1])},m(n,t){$(n,e,t)},p(n,t){t&2&&H(e,n[1])},d(n){n&&p(e)}}}function ot(i){let e,n,t,l,s=i[0]!==1&&he(i),r=Z([i[0]-2,i[0]-1,i[0],i[0]+1,i[0]+2]),a=[];for(let u=0;u<5;u+=1)a[u]=be(ge(i,r,u));const o=u=>m(a[u],1,1,()=>{a[u]=null});let f=i[0]!==i[1]&&ve(i);return{c(){e=N("div"),s&&s.c(),n=P();for(let u=0;u<5;u+=1)a[u].c();t=P(),f&&f.c(),this.h()},l(u){e=y(u,"DIV",{class:!0});var c=D(e);s&&s.l(c),n=U(c);for(let d=0;d<5;d+=1)a[d].l(c);t=U(c),f&&f.l(c),c.forEach(p),this.h()},h(){I(e,"class","flex flex-row justify-between items-center gap-4")},m(u,c){$(u,e,c),s&&s.m(e,null),V(e,n);for(let d=0;d<5;d+=1)a[d]&&a[d].m(e,null);V(e,t),f&&f.m(e,null),l=!0},p(u,[c]){if(u[0]!==1?s?(s.p(u,c),c&1&&_(s,1)):(s=he(u),s.c(),_(s,1),s.m(e,n)):s&&(z(),m(s,1,1,()=>{s=null}),B()),c&7){r=Z([u[0]-2,u[0]-1,u[0],u[0]+1,u[0]+2]);let d;for(d=0;d<5;d+=1){const h=ge(u,r,d);a[d]?(a[d].p(h,c),_(a[d],1)):(a[d]=be(h),a[d].c(),_(a[d],1),a[d].m(e,t))}for(z(),d=5;d<5;d+=1)o(d);B()}u[0]!==u[1]?f?(f.p(u,c),c&3&&_(f,1)):(f=ve(u),f.c(),_(f,1),f.m(e,null)):f&&(z(),m(f,1,1,()=>{f=null}),B())},i(u){if(!l){_(s);for(let c=0;c<5;c+=1)_(a[c]);_(f),l=!0}},o(u){m(s),a=a.filter(Boolean);for(let c=0;c<5;c+=1)m(a[c]);m(f),l=!1},d(u){u&&p(e),s&&s.d(),Ce(a,u),f&&f.d()}}}function ut(i,e,n){const t=ne();let{page:l=1}=e,{pages:s=1}=e;function r(u,c){u==null||u.preventDefault(),n(0,l=c),t("change",c)}const a=u=>r(u,1),o=(u,c)=>r(c,u),f=u=>r(u,s);return i.$$set=u=>{"page"in u&&n(0,l=u.page),"pages"in u&&n(1,s=u.pages)},i.$$.update=()=>{i.$$.dirty&3&&s&&(l<1||isNaN(l))&&r(null,1),i.$$.dirty&3&&s&&l>s&&r(null,s)},[l,s,r,a,o,f]}class ft extends O{constructor(e){super(),T(this,e,ut,ot,M,{page:0,pages:1})}}function ct(i){let e;return{c(){e=j("Login")},l(n){e=R(n,"Login")},m(n,t){$(n,e,t)},d(n){n&&p(e)}}}function _t(i){let e,n,t,l,s,r,a,o,f,u,c,d,h,J;function Fe(g){i[4](g)}let ue={placeholder:"E-mail address..."};i[0]!==void 0&&(ue.value=i[0]),s=new le({props:ue}),G.push(()=>Y(s,"value",Fe));function Me(g){i[5](g)}let fe={password:!0,placeholder:"Password..."};return i[1]!==void 0&&(fe.value=i[1]),o=new le({props:fe}),G.push(()=>Y(o,"value",Me)),c=new Se({props:{type:"submit",disabled:!i[0]||!i[1],$$slots:{default:[ct]},$$scope:{ctx:i}}}),{c(){e=N("div"),n=j(i[2]),t=P(),l=N("form"),b(s.$$.fragment),a=P(),b(o.$$.fragment),u=P(),b(c.$$.fragment),this.h()},l(g){e=y(g,"DIV",{class:!0});var L=D(e);n=R(L,i[2]),L.forEach(p),t=U(g),l=y(g,"FORM",{class:!0});var S=D(l);v(s.$$.fragment,S),a=U(S),v(o.$$.fragment,S),u=U(S),v(c.$$.fragment,S),S.forEach(p),this.h()},h(){I(e,"class","text-red-500"),pe(e,"invisible",!i[2]),I(l,"class","flex flex-col items-end gap-4")},m(g,L){$(g,e,L),V(e,n),$(g,t,L),$(g,l,L),k(s,l,null),V(l,a),k(o,l,null),V(l,u),k(c,l,null),d=!0,h||(J=A(l,"submit",Ue(i[3])),h=!0)},p(g,L){(!d||L&4)&&H(n,g[2]),(!d||L&4)&&pe(e,"invisible",!g[2]);const S={};!r&&L&1&&(r=!0,S.value=g[0],X(()=>r=!1)),s.$set(S);const ce={};!f&&L&2&&(f=!0,ce.value=g[1],X(()=>f=!1)),o.$set(ce);const ee={};L&3&&(ee.disabled=!g[0]||!g[1]),L&64&&(ee.$$scope={dirty:L,ctx:g}),c.$set(ee)},i(g){d||(_(s.$$.fragment,g),_(o.$$.fragment,g),_(c.$$.fragment,g),d=!0)},o(g){m(s.$$.fragment,g),m(o.$$.fragment,g),m(c.$$.fragment,g),d=!1},d(g){g&&(p(e),p(t),p(l)),w(s),w(o),w(c),h=!1,J()}}}function pt(i){let e,n;return e=new Re({props:{$$slots:{default:[_t]},$$scope:{ctx:i}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},p(t,[l]){const s={};l&71&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function mt(i,e,n){let t="",l="",s=null;async function r(){try{await oe.collection("users").authWithPassword(t,l)}catch(f){console.error(f),n(2,s="Incorrect login information.");return}}function a(f){t=f,n(0,t)}function o(f){l=f,n(1,l)}return[t,l,s,r,a,o]}class dt extends O{constructor(e){super(),T(this,e,mt,pt,M,{})}}function $t(i){let e,n,t;const l=i[2].default,s=se(l,i,i[1],null);return{c(){e=N("div"),s&&s.c(),this.h()},l(r){e=y(r,"DIV",{class:!0});var a=D(e);s&&s.l(a),a.forEach(p),this.h()},h(){I(e,"class",n="flex flex-row flex-wrap justify-center items-start gap-4 "+i[0])},m(r,a){$(r,e,a),s&&s.m(e,null),t=!0},p(r,[a]){s&&s.p&&(!t||a&2)&&re(s,l,r,r[1],t?ae(l,r[1],a,null):ie(r[1]),null),(!t||a&1&&n!==(n="flex flex-row flex-wrap justify-center items-start gap-4 "+r[0]))&&I(e,"class",n)},i(r){t||(_(s,r),t=!0)},o(r){m(s,r),t=!1},d(r){r&&p(e),s&&s.d(r)}}}function gt(i,e,n){let t,{$$slots:l={},$$scope:s}=e;return i.$$set=r=>{n(3,e=F(F({},e),q(r))),"$$scope"in r&&n(1,s=r.$$scope)},i.$$.update=()=>{n(0,t=e.class)},e=q(e),[t,s,l]}class ht extends O{constructor(e){super(),T(this,e,gt,$t,M,{})}}const bt=i=>({}),ke=i=>({}),vt=i=>({}),we=i=>({});function Ie(i){let e,n;const t=i[5].subtitle,l=se(t,i,i[4],ke);return{c(){e=N("div"),l&&l.c(),this.h()},l(s){e=y(s,"DIV",{class:!0});var r=D(e);l&&l.l(r),r.forEach(p),this.h()},h(){I(e,"class","flex flex-col items-center overflow-x-auto")},m(s,r){$(s,e,r),l&&l.m(e,null),n=!0},p(s,r){l&&l.p&&(!n||r&16)&&re(l,t,s,s[4],n?ae(t,s[4],r,bt):ie(s[4]),ke)},i(s){n||(_(l,s),n=!0)},o(s){m(l,s),n=!1},d(s){s&&p(e),l&&l.d(s)}}}function kt(i){let e,n,t,l,s;const r=i[5].image,a=se(r,i,i[4],we);let o=i[2].subtitle&&Ie(i);return{c(){e=N("div"),n=N("div"),a&&a.c(),t=P(),o&&o.c(),this.h()},l(f){e=y(f,"DIV",{class:!0});var u=D(e);n=y(u,"DIV",{class:!0});var c=D(n);a&&a.l(c),c.forEach(p),t=U(u),o&&o.l(u),u.forEach(p),this.h()},h(){I(n,"class","flex flex-col grow justify-center items-stretch rounded-lg overflow-hidden transition-all group-hover:opacity-80 "),I(e,"class",l="group flex flex-col p-2 gap-2 rounded-2xl shadow-lg bg-slate-100 transition-all dark:bg-slate-900 dark:outline dark:outline-2 dark:outline-cyan-900 hover:shadow-xl "+i[1]+" "+i[0])},m(f,u){$(f,e,u),V(e,n),a&&a.m(n,null),V(e,t),o&&o.m(e,null),s=!0},p(f,[u]){a&&a.p&&(!s||u&16)&&re(a,r,f,f[4],s?ae(r,f[4],u,vt):ie(f[4]),we),f[2].subtitle?o?(o.p(f,u),u&4&&_(o,1)):(o=Ie(f),o.c(),_(o,1),o.m(e,null)):o&&(z(),m(o,1,1,()=>{o=null}),B()),(!s||u&3&&l!==(l="group flex flex-col p-2 gap-2 rounded-2xl shadow-lg bg-slate-100 transition-all dark:bg-slate-900 dark:outline dark:outline-2 dark:outline-cyan-900 hover:shadow-xl "+f[1]+" "+f[0]))&&I(e,"class",l)},i(f){s||(_(a,f),_(o),s=!0)},o(f){m(a,f),m(o),s=!1},d(f){f&&p(e),a&&a.d(f),o&&o.d()}}}function wt(i,e,n){let t,l,{$$slots:s={},$$scope:r}=e;const a=Oe(s);let{size:o="md"}=e;return i.$$set=f=>{n(6,e=F(F({},e),q(f))),"size"in f&&n(3,o=f.size),"$$scope"in f&&n(4,r=f.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&n(1,t={sm:"w-24 h-24",md:"w-48 h-48",lg:"w-96 h-96"}[o]??"w-48 h-48"),n(0,l=e.class)},e=q(e),[l,t,a,o,r,s]}class It extends O{constructor(e){super(),T(this,e,wt,kt,M,{size:3})}}function Be(i){return i=new URL(i),i.hash?new URLSearchParams(i.hash.substring(1)):new URLSearchParams}const Nt=He(window.location,i=>{const e=n=>{i(n.newURL)};return window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}}),yt={subscribe:ze(Nt,i=>Be(i)).subscribe,set:i=>{window.location.hash=i}};function Ne(i,e,n=t=>t){return{subscribe:ze(yt,t=>{const l=t.get(i);return l==null?e:n(l)}).subscribe,set:t=>{window.location.hash=Et(Be(window.location),{[i]:t}).toString()}}}function Et(i,e={}){return Object.entries(e).reduce((n,[t,l])=>(n.set(t,l),n),i??new URLSearchParams)}function ye(i,e,n){const t=i.slice();return t[10]=e[n],t}function Ee(i){let e,n;return e=new Qe({}),e.$on("upload",i[7]),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},p:E,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Lt(i){let e,n,t=i[2]&&Ee(i);return{c(){t&&t.c(),e=C()},l(l){t&&t.l(l),e=C()},m(l,s){t&&t.m(l,s),$(l,e,s),n=!0},p(l,s){l[2]?t?(t.p(l,s),s&4&&_(t,1)):(t=Ee(l),t.c(),_(t,1),t.m(e.parentNode,e)):t&&(z(),m(t,1,1,()=>{t=null}),B())},i(l){n||(_(t),n=!0)},o(l){m(t),n=!1},d(l){l&&p(e),t&&t.d(l)}}}function Pt(i){let e,n;return e=new lt({props:{slot:"middle",value:i[0]}}),e.$on("submit",i[6]),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},p(t,l){const s={};l&1&&(s.value=t[0]),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Ut(i){let e,n;return e=new Ge({props:{slot:"end"}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},p:E,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Ct(i){let e,n;return e=new dt({}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},p:E,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Dt(i){let e,n,t,l={ctx:i,current:null,token:null,hasCatch:!1,pending:Ft,then:Vt,catch:St,value:3,blocks:[,,,]};return de(n=i[3],l),{c(){e=C(),l.block.c()},l(s){e=C(),l.block.l(s)},m(s,r){$(s,e,r),l.block.m(s,l.anchor=r),l.mount=()=>e.parentNode,l.anchor=e,t=!0},p(s,r){i=s,l.ctx=i,r&8&&n!==(n=i[3])&&de(n,l)||qe(l,i,r)},i(s){t||(_(l.block),t=!0)},o(s){for(let r=0;r<3;r+=1){const a=l.blocks[r];m(a)}t=!1},d(s){s&&p(e),l.block.d(s),l.token=null,l=null}}}function St(i){return{c:E,l:E,m:E,p:E,i:E,o:E,d:E}}function Vt(i){let e,n,t,l,s,r,a=i[3].totalItems==0&&Le();n=new ht({props:{$$slots:{default:[Bt]},$$scope:{ctx:i}}});function o(u){i[8](u)}let f={pages:i[3].totalPages};return i[1]!==void 0&&(f.page=i[1]),l=new ft({props:f}),G.push(()=>Y(l,"page",o)),{c(){a&&a.c(),e=P(),b(n.$$.fragment),t=P(),b(l.$$.fragment)},l(u){a&&a.l(u),e=U(u),v(n.$$.fragment,u),t=U(u),v(l.$$.fragment,u)},m(u,c){a&&a.m(u,c),$(u,e,c),k(n,u,c),$(u,t,c),k(l,u,c),r=!0},p(u,c){u[3].totalItems==0?a||(a=Le(),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null);const d={};c&8200&&(d.$$scope={dirty:c,ctx:u}),n.$set(d);const h={};c&8&&(h.pages=u[3].totalPages),!s&&c&2&&(s=!0,h.page=u[1],X(()=>s=!1)),l.$set(h)},i(u){r||(_(n.$$.fragment,u),_(l.$$.fragment,u),r=!0)},o(u){m(n.$$.fragment,u),m(l.$$.fragment,u),r=!1},d(u){u&&(p(e),p(t)),a&&a.d(u),w(n,u),w(l,u)}}}function Le(i){let e;return{c(){e=j("No files.")},l(n){e=R(n,"No files.")},m(n,t){$(n,e,t)},d(n){n&&p(e)}}}function jt(i){let e,n,t;return{c(){e=N("img"),this.h()},l(l){e=y(l,"IMG",{slot:!0,class:!0,src:!0,alt:!0}),this.h()},h(){I(e,"slot","image"),I(e,"class","rounded-lg grow object-cover"),me(e.src,n=$e(i[10]))||I(e,"src",n),I(e,"alt",t=i[10].file)},m(l,s){$(l,e,s)},p(l,s){s&8&&!me(e.src,n=$e(l[10]))&&I(e,"src",n),s&8&&t!==(t=l[10].file)&&I(e,"alt",t)},d(l){l&&p(e)}}}function Rt(i){let e,n=i[10].name+"",t;return{c(){e=N("div"),t=j(n),this.h()},l(l){e=y(l,"DIV",{slot:!0});var s=D(e);t=R(s,n),s.forEach(p),this.h()},h(){I(e,"slot","subtitle")},m(l,s){$(l,e,s),V(e,t)},p(l,s){s&8&&n!==(n=l[10].name+"")&&H(t,n)},d(l){l&&p(e)}}}function zt(i){let e,n,t;return e=new It({props:{size:"lg",$$slots:{subtitle:[Rt],image:[jt]},$$scope:{ctx:i}}}),{c(){b(e.$$.fragment),n=P()},l(l){v(e.$$.fragment,l),n=U(l)},m(l,s){k(e,l,s),$(l,n,s),t=!0},p(l,s){const r={};s&8200&&(r.$$scope={dirty:s,ctx:l}),e.$set(r)},i(l){t||(_(e.$$.fragment,l),t=!0)},o(l){m(e.$$.fragment,l),t=!1},d(l){l&&p(n),w(e,l)}}}function Pe(i){let e,n;return e=new x({props:{href:"/view/"+i[10].id,$$slots:{default:[zt]},$$scope:{ctx:i}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},p(t,l){const s={};l&8&&(s.href="/view/"+t[10].id),l&8200&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Bt(i){let e,n,t=Z(i[3].items),l=[];for(let r=0;r<t.length;r+=1)l[r]=Pe(ye(i,t,r));const s=r=>m(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=C()},l(r){for(let a=0;a<l.length;a+=1)l[a].l(r);e=C()},m(r,a){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,a);$(r,e,a),n=!0},p(r,a){if(a&8){t=Z(r[3].items);let o;for(o=0;o<t.length;o+=1){const f=ye(r,t,o);l[o]?(l[o].p(f,a),_(l[o],1)):(l[o]=Pe(f),l[o].c(),_(l[o],1),l[o].m(e.parentNode,e))}for(z(),o=t.length;o<l.length;o+=1)s(o);B()}},i(r){if(!n){for(let a=0;a<t.length;a+=1)_(l[a]);n=!0}},o(r){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)m(l[a]);n=!1},d(r){r&&p(e),Ce(l,r)}}}function Ft(i){let e,n;return e=new Ae({}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},p:E,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Mt(i){let e,n,t,l;const s=[Dt,Ct],r=[];function a(o,f){return o[2]?0:1}return e=a(i),n=r[e]=s[e](i),{c(){n.c(),t=C()},l(o){n.l(o),t=C()},m(o,f){r[e].m(o,f),$(o,t,f),l=!0},p(o,f){let u=e;e=a(o),e===u?r[e].p(o,f):(z(),m(r[u],1,1,()=>{r[u]=null}),B(),n=r[e],n?n.p(o,f):(n=r[e]=s[e](o),n.c()),_(n,1),n.m(t.parentNode,t))},i(o){l||(_(n),l=!0)},o(o){m(n),l=!1},d(o){o&&p(t),r[e].d(o)}}}function Ot(i){let e,n,t,l;return e=new Te({props:{$$slots:{end:[Ut],middle:[Pt],start:[Lt]},$$scope:{ctx:i}}}),t=new Re({props:{$$slots:{default:[Mt]},$$scope:{ctx:i}}}),{c(){b(e.$$.fragment),n=P(),b(t.$$.fragment)},l(s){v(e.$$.fragment,s),n=U(s),v(t.$$.fragment,s)},m(s,r){k(e,s,r),$(s,n,r),k(t,s,r),l=!0},p(s,[r]){const a={};r&8199&&(a.$$scope={dirty:r,ctx:s}),e.$set(a);const o={};r&8206&&(o.$$scope={dirty:r,ctx:s}),t.$set(o)},i(s){l||(_(e.$$.fragment,s),_(t.$$.fragment,s),l=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),l=!1},d(s){s&&p(n),w(e,s),w(t,s)}}}function Tt(i,e,n){let t,l,s;K(i,Ve,h=>n(2,s=h));let r=null;const a=Ne("page",1,h=>Number(h));K(i,a,h=>n(1,l=h));const o=Ne("filter","");K(i,o,h=>n(0,t=h));async function f(h={}){r!=null&&await r,n(3,r=oe.collection("files").getList(l,30,{sort:"-created",filter:`name~"${encodeURIComponent(t)}"`,...h}))}function u(h){const{detail:J}=h;te(a,l=1,l),te(o,t=J,t)}const c=()=>te(a,l=1,l);function d(h){l=h,a.set(l)}return i.$$.update=()=>{if(i.$$.dirty&7&&s){let h=!1;isNaN(l)||(h=!0),t&&(h=!0),h&&f()}},[t,l,s,r,a,o,u,c,d]}class Jt extends O{constructor(e){super(),T(this,e,Tt,Ot,M,{})}}export{Jt as component};
