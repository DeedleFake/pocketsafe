import{A as ue,B as _e,C as O,D as me,s as J,r as P,f as g,a as z,g as $,h as v,d as u,c as S,j as p,i as d,x as V,u as A,v as F,w as G,E as U,F as W,G as X,H as q,I as de,z as he,e as w,p as pe,J as ge,l as j,m as B,n as ie,y as k,K as $e,L as Y}from"../chunks/scheduler.e03dca40.js";import{g as y,t as m,c as H,a as _,S as K,i as M,b as E,d as D,m as N,e as L}from"../chunks/index.9493c138.js";import{g as be,B as ke,p as C,a as Q,c as ve}from"../chunks/pocketbase.9a029c80.js";function Z(r,e){const n=e.token={};function l(t,s,c,f){if(e.token!==n)return;e.resolved=f;let o=e.ctx;c!==void 0&&(o=o.slice(),o[c]=f);const a=t&&(e.current=t)(o);let i=!1;e.block&&(e.blocks?e.blocks.forEach((h,I)=>{I!==s&&h&&(y(),m(h,1,1,()=>{e.blocks[I]===h&&(e.blocks[I]=null)}),H())}):e.block.d(1),a.c(),_(a,1),a.m(e.mount(),e.anchor),i=!0),e.block=a,e.blocks&&(e.blocks[s]=a),i&&me()}if(ue(r)){const t=_e();if(r.then(s=>{O(t),l(e.then,1,e.value,s),O(null)},s=>{if(O(t),l(e.catch,2,e.error,s),O(null),!e.hasCatch)throw s}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,r),!0;e.resolved=r}}function we(r,e,n){const l=e.slice(),{resolved:t}=r;r.current===r.then&&(l[r.value]=t),r.current===r.catch&&(l[r.error]=t),r.block.p(l,n)}function x(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const Ie=r=>({}),ee=r=>({}),Ee=r=>({}),te=r=>({});function De(r){let e,n,l,t,s;const c=r[1].start,f=P(c,r,r[0],te),o=r[1].end,a=P(o,r,r[0],ee);return{c(){e=g("div"),n=g("div"),f&&f.c(),l=z(),t=g("div"),a&&a.c(),this.h()},l(i){e=$(i,"DIV",{class:!0});var h=v(e);n=$(h,"DIV",{class:!0});var I=v(n);f&&f.l(I),I.forEach(u),l=S(h),t=$(h,"DIV",{class:!0});var T=v(t);a&&a.l(T),T.forEach(u),h.forEach(u),this.h()},h(){p(n,"class","flex flex-row gap-2 items-center"),p(t,"class","flex flex-row gap-2 items-center"),p(e,"class","p-2 flex flex-row justify-between")},m(i,h){d(i,e,h),V(e,n),f&&f.m(n,null),V(e,l),V(e,t),a&&a.m(t,null),s=!0},p(i,[h]){f&&f.p&&(!s||h&1)&&A(f,c,i,i[0],s?G(c,i[0],h,Ee):F(i[0]),te),a&&a.p&&(!s||h&1)&&A(a,o,i,i[0],s?G(o,i[0],h,Ie):F(i[0]),ee)},i(i){s||(_(f,i),_(a,i),s=!0)},o(i){m(f,i),m(a,i),s=!1},d(i){i&&u(e),f&&f.d(i),a&&a.d(i)}}}function Ne(r,e,n){let{$$slots:l={},$$scope:t}=e;return r.$$set=s=>{"$$scope"in s&&n(0,t=s.$$scope)},[t,l]}class Le extends K{constructor(e){super(),M(this,e,Ne,De,J,{})}}function Ve(r){let e,n,l;const t=r[4].default,s=P(t,r,r[3],null);let c=[{class:n="text-cyan-500 hover:text-cyan-600 active:text-cyan-700 "+r[1]},{href:r[0]},r[2]],f={};for(let o=0;o<c.length;o+=1)f=U(f,c[o]);return{c(){e=g("a"),s&&s.c(),this.h()},l(o){e=$(o,"A",{class:!0,href:!0});var a=v(e);s&&s.l(a),a.forEach(u),this.h()},h(){W(e,f)},m(o,a){d(o,e,a),s&&s.m(e,null),l=!0},p(o,[a]){s&&s.p&&(!l||a&8)&&A(s,t,o,o[3],l?G(t,o[3],a,null):F(o[3]),null),W(e,f=be(c,[(!l||a&2&&n!==(n="text-cyan-500 hover:text-cyan-600 active:text-cyan-700 "+o[1]))&&{class:n},(!l||a&1)&&{href:o[0]},a&4&&o[2]]))},i(o){l||(_(s,o),l=!0)},o(o){m(s,o),l=!1},d(o){o&&u(e),s&&s.d(o)}}}function Ue(r,e,n){let l;const t=["href"];let s=X(e,t),{$$slots:c={},$$scope:f}=e,{href:o=""}=e;return r.$$set=a=>{n(5,e=U(U({},e),q(a))),n(2,s=X(e,t)),"href"in a&&n(0,o=a.href),"$$scope"in a&&n(3,f=a.$$scope)},r.$$.update=()=>{n(1,l=e.class??"")},e=q(e),[o,l,s,f,c]}class ze extends K{constructor(e){super(),M(this,e,Ue,Ve,J,{href:0})}}const Se=r=>({}),le=r=>({}),je=r=>({}),se=r=>({});function ne(r){let e,n;const l=r[5].subtitle,t=P(l,r,r[4],le);return{c(){e=g("div"),t&&t.c(),this.h()},l(s){e=$(s,"DIV",{class:!0});var c=v(e);t&&t.l(c),c.forEach(u),this.h()},h(){p(e,"class","flex flex-col items-center overflow-x-auto")},m(s,c){d(s,e,c),t&&t.m(e,null),n=!0},p(s,c){t&&t.p&&(!n||c&16)&&A(t,l,s,s[4],n?G(l,s[4],c,Se):F(s[4]),le)},i(s){n||(_(t,s),n=!0)},o(s){m(t,s),n=!1},d(s){s&&u(e),t&&t.d(s)}}}function Be(r){let e,n,l,t,s;const c=r[5].image,f=P(c,r,r[4],se);let o=r[2].subtitle&&ne(r);return{c(){e=g("div"),n=g("div"),f&&f.c(),l=z(),o&&o.c(),this.h()},l(a){e=$(a,"DIV",{class:!0});var i=v(e);n=$(i,"DIV",{class:!0});var h=v(n);f&&f.l(h),h.forEach(u),l=S(i),o&&o.l(i),i.forEach(u),this.h()},h(){p(n,"class","flex grow justify-center items-center"),p(e,"class",t="flex flex-col p-2 gap-2 rounded-2xl shadow-lg dark:shadow-none dark:outline dark:outline-2 dark:outline-cyan-900 "+r[1]+" "+r[0])},m(a,i){d(a,e,i),V(e,n),f&&f.m(n,null),V(e,l),o&&o.m(e,null),s=!0},p(a,[i]){f&&f.p&&(!s||i&16)&&A(f,c,a,a[4],s?G(c,a[4],i,je):F(a[4]),se),a[2].subtitle?o?(o.p(a,i),i&4&&_(o,1)):(o=ne(a),o.c(),_(o,1),o.m(e,null)):o&&(y(),m(o,1,1,()=>{o=null}),H()),(!s||i&3&&t!==(t="flex flex-col p-2 gap-2 rounded-2xl shadow-lg dark:shadow-none dark:outline dark:outline-2 dark:outline-cyan-900 "+a[1]+" "+a[0]))&&p(e,"class",t)},i(a){s||(_(f,a),_(o),s=!0)},o(a){m(f,a),m(o),s=!1},d(a){a&&u(e),f&&f.d(a),o&&o.d()}}}function Ce(r,e,n){let l,t,{$$slots:s={},$$scope:c}=e;const f=de(s);let{size:o="md"}=e;return r.$$set=a=>{n(6,e=U(U({},e),q(a))),"size"in a&&n(3,o=a.size),"$$scope"in a&&n(4,c=a.$$scope)},r.$$.update=()=>{r.$$.dirty&8&&n(1,l={sm:"w-24 h-24",md:"w-48 h-48",lg:"w-96 h-96"}[o]??"w-48 h-48"),n(0,t=e.class)},e=q(e),[t,l,f,o,c,s]}class Pe extends K{constructor(e){super(),M(this,e,Ce,Be,J,{size:3})}}function Ae(r){let e,n,l;const t=r[2].default,s=P(t,r,r[1],null);return{c(){e=g("div"),s&&s.c(),this.h()},l(c){e=$(c,"DIV",{class:!0});var f=v(e);s&&s.l(f),f.forEach(u),this.h()},h(){p(e,"class",n="flex flex-row flex-wrap justify-center items-start gap-4 "+r[0])},m(c,f){d(c,e,f),s&&s.m(e,null),l=!0},p(c,[f]){s&&s.p&&(!l||f&2)&&A(s,t,c,c[1],l?G(t,c[1],f,null):F(c[1]),null),(!l||f&1&&n!==(n="flex flex-row flex-wrap justify-center items-start gap-4 "+c[0]))&&p(e,"class",n)},i(c){l||(_(s,c),l=!0)},o(c){m(s,c),l=!1},d(c){c&&u(e),s&&s.d(c)}}}function Fe(r,e,n){let l,{$$slots:t={},$$scope:s}=e;return r.$$set=c=>{n(3,e=U(U({},e),q(c))),"$$scope"in c&&n(1,s=c.$$scope)},r.$$.update=()=>{n(0,l=e.class)},e=q(e),[l,s,t]}class Ge extends K{constructor(e){super(),M(this,e,Fe,Ae,J,{})}}function re(r,e,n){const l=r.slice();return l[11]=e[n],l}function ce(r){let e,n,l,t,s,c;return e=new Q({props:{$$slots:{default:[qe]},$$scope:{ctx:r}}}),e.$on("click",r[6]),{c(){E(e.$$.fragment),n=z(),l=g("input"),this.h()},l(f){D(e.$$.fragment,f),n=S(f),l=$(f,"INPUT",{type:!0,class:!0}),this.h()},h(){p(l,"type","file"),p(l,"class","hidden")},m(f,o){N(e,f,o),d(f,n,o),d(f,l,o),r[7](l),t=!0,s||(c=ge(l,"change",r[8]),s=!0)},p(f,o){const a={};o&16384&&(a.$$scope={dirty:o,ctx:f}),e.$set(a)},i(f){t||(_(e.$$.fragment,f),t=!0)},o(f){m(e.$$.fragment,f),t=!1},d(f){f&&(u(n),u(l)),L(e,f),r[7](null),s=!1,c()}}}function qe(r){let e;return{c(){e=j("Upload")},l(n){e=B(n,"Upload")},m(n,l){d(n,e,l)},d(n){n&&u(e)}}}function ye(r){let e,n,l=r[1]&&ce(r);return{c(){l&&l.c(),e=w()},l(t){l&&l.l(t),e=w()},m(t,s){l&&l.m(t,s),d(t,e,s),n=!0},p(t,s){t[1]?l?(l.p(t,s),s&2&&_(l,1)):(l=ce(t),l.c(),_(l,1),l.m(e.parentNode,e)):l&&(y(),m(l,1,1,()=>{l=null}),H())},i(t){n||(_(l),n=!0)},o(t){m(l),n=!1},d(t){t&&u(e),l&&l.d(t)}}}function He(r){let e,n=r[1].username+"",l,t,s,c;return s=new Q({props:{$$slots:{default:[Ke]},$$scope:{ctx:r}}}),s.$on("click",r[4]),{c(){e=g("div"),l=j(n),t=z(),E(s.$$.fragment)},l(f){e=$(f,"DIV",{});var o=v(e);l=B(o,n),o.forEach(u),t=S(f),D(s.$$.fragment,f)},m(f,o){d(f,e,o),V(e,l),d(f,t,o),N(s,f,o),c=!0},p(f,o){(!c||o&2)&&n!==(n=f[1].username+"")&&ie(l,n);const a={};o&16384&&(a.$$scope={dirty:o,ctx:f}),s.$set(a)},i(f){c||(_(s.$$.fragment,f),c=!0)},o(f){m(s.$$.fragment,f),c=!1},d(f){f&&(u(e),u(t)),L(s,f)}}}function Je(r){let e,n;return e=new Q({props:{href:"/login",$$slots:{default:[Me]},$$scope:{ctx:r}}}),{c(){E(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,t){N(e,l,t),n=!0},p(l,t){const s={};t&16384&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){n||(_(e.$$.fragment,l),n=!0)},o(l){m(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function Ke(r){let e;return{c(){e=j("Logout")},l(n){e=B(n,"Logout")},m(n,l){d(n,e,l)},d(n){n&&u(e)}}}function Me(r){let e;return{c(){e=j("Login")},l(n){e=B(n,"Login")},m(n,l){d(n,e,l)},d(n){n&&u(e)}}}function Te(r){let e,n,l,t;const s=[Je,He],c=[];function f(o,a){return o[1]?1:0}return e=f(r),n=c[e]=s[e](r),{c(){n.c(),l=w()},l(o){n.l(o),l=w()},m(o,a){c[e].m(o,a),d(o,l,a),t=!0},p(o,a){let i=e;e=f(o),e===i?c[e].p(o,a):(y(),m(c[i],1,1,()=>{c[i]=null}),H(),n=c[e],n?n.p(o,a):(n=c[e]=s[e](o),n.c()),_(n,1),n.m(l.parentNode,l))},i(o){t||(_(n),t=!0)},o(o){m(n),t=!1},d(o){o&&u(l),c[e].d(o)}}}function oe(r){let e,n,l,t={ctx:r,current:null,token:null,hasCatch:!1,pending:Ze,then:Qe,catch:Oe,value:3,blocks:[,,,]};return Z(n=r[3],t),{c(){e=w(),t.block.c()},l(s){e=w(),t.block.l(s)},m(s,c){d(s,e,c),t.block.m(s,t.anchor=c),t.mount=()=>e.parentNode,t.anchor=e,l=!0},p(s,c){r=s,t.ctx=r,c&8&&n!==(n=r[3])&&Z(n,t)||we(t,r,c)},i(s){l||(_(t.block),l=!0)},o(s){for(let c=0;c<3;c+=1){const f=t.blocks[c];m(f)}l=!1},d(s){s&&u(e),t.block.d(s),t.token=null,t=null}}}function Oe(r){return{c:k,l:k,m:k,p:k,i:k,o:k,d:k}}function Qe(r){let e,n,l,t=r[3].totalItems==0&&fe();return n=new Ge({props:{$$slots:{default:[Ye]},$$scope:{ctx:r}}}),{c(){t&&t.c(),e=z(),E(n.$$.fragment)},l(s){t&&t.l(s),e=S(s),D(n.$$.fragment,s)},m(s,c){t&&t.m(s,c),d(s,e,c),N(n,s,c),l=!0},p(s,c){s[3].totalItems==0?t||(t=fe(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null);const f={};c&16392&&(f.$$scope={dirty:c,ctx:s}),n.$set(f)},i(s){l||(_(n.$$.fragment,s),l=!0)},o(s){m(n.$$.fragment,s),l=!1},d(s){s&&u(e),t&&t.d(s),L(n,s)}}}function fe(r){let e;return{c(){e=j("No files.")},l(n){e=B(n,"No files.")},m(n,l){d(n,e,l)},d(n){n&&u(e)}}}function Re(r){let e,n,l;return{c(){e=g("img"),this.h()},l(t){e=$(t,"IMG",{slot:!0,src:!0,alt:!0}),this.h()},h(){p(e,"slot","image"),Y(e.src,n=r[5](r[11]))||p(e,"src",n),p(e,"alt",l=r[11].name)},m(t,s){d(t,e,s)},p(t,s){s&8&&!Y(e.src,n=t[5](t[11]))&&p(e,"src",n),s&8&&l!==(l=t[11].name)&&p(e,"alt",l)},d(t){t&&u(e)}}}function We(r){let e,n=r[11].name+"",l;return{c(){e=g("div"),l=j(n),this.h()},l(t){e=$(t,"DIV",{slot:!0});var s=v(e);l=B(s,n),s.forEach(u),this.h()},h(){p(e,"slot","subtitle")},m(t,s){d(t,e,s),V(e,l)},p(t,s){s&8&&n!==(n=t[11].name+"")&&ie(l,n)},d(t){t&&u(e)}}}function Xe(r){let e,n,l;return e=new Pe({props:{size:"lg",$$slots:{subtitle:[We],image:[Re]},$$scope:{ctx:r}}}),{c(){E(e.$$.fragment),n=z()},l(t){D(e.$$.fragment,t),n=S(t)},m(t,s){N(e,t,s),d(t,n,s),l=!0},p(t,s){const c={};s&16392&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){m(e.$$.fragment,t),l=!1},d(t){t&&u(n),L(e,t)}}}function ae(r){let e,n;return e=new ze({props:{href:C.files.getUrl(r[11],r[11].file),$$slots:{default:[Xe]},$$scope:{ctx:r}}}),{c(){E(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,t){N(e,l,t),n=!0},p(l,t){const s={};t&8&&(s.href=C.files.getUrl(l[11],l[11].file)),t&16392&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){n||(_(e.$$.fragment,l),n=!0)},o(l){m(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function Ye(r){let e,n,l=x(r[3].items),t=[];for(let c=0;c<l.length;c+=1)t[c]=ae(re(r,l,c));const s=c=>m(t[c],1,1,()=>{t[c]=null});return{c(){for(let c=0;c<t.length;c+=1)t[c].c();e=w()},l(c){for(let f=0;f<t.length;f+=1)t[f].l(c);e=w()},m(c,f){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(c,f);d(c,e,f),n=!0},p(c,f){if(f&40){l=x(c[3].items);let o;for(o=0;o<l.length;o+=1){const a=re(c,l,o);t[o]?(t[o].p(a,f),_(t[o],1)):(t[o]=ae(a),t[o].c(),_(t[o],1),t[o].m(e.parentNode,e))}for(y(),o=l.length;o<t.length;o+=1)s(o);H()}},i(c){if(!n){for(let f=0;f<l.length;f+=1)_(t[f]);n=!0}},o(c){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)m(t[f]);n=!1},d(c){c&&u(e),$e(t,c)}}}function Ze(r){let e;return{c(){e=j("Loading...")},l(n){e=B(n,"Loading...")},m(n,l){d(n,e,l)},p:k,i:k,o:k,d(n){n&&u(e)}}}function xe(r){let e,n,l=r[1]&&oe(r);return{c(){l&&l.c(),e=w()},l(t){l&&l.l(t),e=w()},m(t,s){l&&l.m(t,s),d(t,e,s),n=!0},p(t,s){t[1]?l?(l.p(t,s),s&2&&_(l,1)):(l=oe(t),l.c(),_(l,1),l.m(e.parentNode,e)):l&&(y(),m(l,1,1,()=>{l=null}),H())},i(t){n||(_(l),n=!0)},o(t){m(l),n=!1},d(t){t&&u(e),l&&l.d(t)}}}function et(r){let e,n,l,t;return e=new Le({props:{$$slots:{end:[Te],start:[ye]},$$scope:{ctx:r}}}),l=new ke({props:{$$slots:{default:[xe]},$$scope:{ctx:r}}}),{c(){E(e.$$.fragment),n=z(),E(l.$$.fragment)},l(s){D(e.$$.fragment,s),n=S(s),D(l.$$.fragment,s)},m(s,c){N(e,s,c),d(s,n,c),N(l,s,c),t=!0},p(s,[c]){const f={};c&16391&&(f.$$scope={dirty:c,ctx:s}),e.$set(f);const o={};c&16394&&(o.$$scope={dirty:c,ctx:s}),l.$set(o)},i(s){t||(_(e.$$.fragment,s),_(l.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),m(l.$$.fragment,s),t=!1},d(s){s&&u(n),L(e,s),L(l,s)}}}function tt(r,e,n){let l;he(r,ve,b=>n(1,l=b));let t=null,s=null,c=null;function f(b){C.authStore.clear()}function o(){n(3,t=C.collection("files").getList(1,30,{sort:"-created"}))}async function a(){let b=[];for(const R of c)b.push(C.collection("files").create({name:R.name,file:R,owner:l.id}));await Promise.all(b),n(0,c=null),await o()}function i(b){return C.files.getUrl(b,b.file,{thumb:"96x96f"})}const h=()=>s.click();function I(b){pe[b?"unshift":"push"](()=>{s=b,n(2,s)})}function T(){c=this.files,n(0,c)}return r.$$.update=()=>{r.$$.dirty&1&&c&&a(),r.$$.dirty&2&&l&&o()},[c,l,s,t,f,i,h,I,T]}class rt extends K{constructor(e){super(),M(this,e,tt,et,J,{})}}export{rt as component};
