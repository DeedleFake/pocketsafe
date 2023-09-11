import{A as ue,B as ae,C as F,D as oe,s as q,r as y,E as z,f as I,g as E,h as N,d as h,F as W,i as p,u as H,v as J,w as K,G as X,H as C,a as S,c as D,j as $,x as A,I as ie,e as G,z as fe,p as _e,l as v,m as w,n as re,y as k,J as me,K as he,L as Y}from"../chunks/scheduler.e03dca40.js";import{g as M,t as b,c as T,a as g,S as O,i as Q,b as V,d as j,m as B,e as P}from"../chunks/index.9493c138.js";import{g as de,p as U,B as R,c as pe}from"../chunks/pocketbase.638ab578.js";function Z(c,e){const t=e.token={};function l(r,s,u,a){if(e.token!==t)return;e.resolved=a;let n=e.ctx;u!==void 0&&(n=n.slice(),n[u]=a);const o=r&&(e.current=r)(n);let i=!1;e.block&&(e.blocks?e.blocks.forEach((_,f)=>{f!==s&&_&&(M(),b(_,1,1,()=>{e.blocks[f]===_&&(e.blocks[f]=null)}),T())}):e.block.d(1),o.c(),g(o,1),o.m(e.mount(),e.anchor),i=!0),e.block=o,e.blocks&&(e.blocks[s]=o),i&&oe()}if(ue(c)){const r=ae();if(c.then(s=>{F(r),l(e.then,1,e.value,s),F(null)},s=>{if(F(r),l(e.catch,2,e.error,s),F(null),!e.hasCatch)throw s}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,c),!0;e.resolved=c}}function ge(c,e,t){const l=e.slice(),{resolved:r}=c;c.current===c.then&&(l[c.value]=r),c.current===c.catch&&(l[c.error]=r),c.block.p(l,t)}function x(c){return(c==null?void 0:c.length)!==void 0?c:Array.from(c)}function be(c){let e,t,l;const r=c[4].default,s=y(r,c,c[3],null);let u=[{class:t="text-cyan-500 hover:text-cyan-600 active:text-cyan-700 "+c[1]},{href:c[0]},c[2]],a={};for(let n=0;n<u.length;n+=1)a=z(a,u[n]);return{c(){e=I("a"),s&&s.c(),this.h()},l(n){e=E(n,"A",{class:!0,href:!0});var o=N(e);s&&s.l(o),o.forEach(h),this.h()},h(){W(e,a)},m(n,o){p(n,e,o),s&&s.m(e,null),l=!0},p(n,[o]){s&&s.p&&(!l||o&8)&&H(s,r,n,n[3],l?K(r,n[3],o,null):J(n[3]),null),W(e,a=de(u,[(!l||o&2&&t!==(t="text-cyan-500 hover:text-cyan-600 active:text-cyan-700 "+n[1]))&&{class:t},(!l||o&1)&&{href:n[0]},o&4&&n[2]]))},i(n){l||(g(s,n),l=!0)},o(n){b(s,n),l=!1},d(n){n&&h(e),s&&s.d(n)}}}function $e(c,e,t){let l;const r=["href"];let s=X(e,r),{$$slots:u={},$$scope:a}=e,{href:n=""}=e;return c.$$set=o=>{t(5,e=z(z({},e),C(o))),t(2,s=X(e,r)),"href"in o&&t(0,n=o.href),"$$scope"in o&&t(3,a=o.$$scope)},c.$$.update=()=>{t(1,l=e.class??"")},e=C(e),[n,l,s,a,u]}class ke extends O{constructor(e){super(),Q(this,e,$e,be,q,{href:0})}}const ve=c=>({}),ee=c=>({}),we=c=>({}),te=c=>({});function le(c){let e,t;const l=c[5].subtitle,r=y(l,c,c[4],ee);return{c(){e=I("div"),r&&r.c(),this.h()},l(s){e=E(s,"DIV",{class:!0});var u=N(e);r&&r.l(u),u.forEach(h),this.h()},h(){$(e,"class","flex flex-col items-center overflow-x-auto")},m(s,u){p(s,e,u),r&&r.m(e,null),t=!0},p(s,u){r&&r.p&&(!t||u&16)&&H(r,l,s,s[4],t?K(l,s[4],u,ve):J(s[4]),ee)},i(s){t||(g(r,s),t=!0)},o(s){b(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function Ie(c){let e,t,l,r,s;const u=c[5].image,a=y(u,c,c[4],te);let n=c[2].subtitle&&le(c);return{c(){e=I("div"),t=I("div"),a&&a.c(),l=S(),n&&n.c(),this.h()},l(o){e=E(o,"DIV",{class:!0});var i=N(e);t=E(i,"DIV",{class:!0});var _=N(t);a&&a.l(_),_.forEach(h),l=D(i),n&&n.l(i),i.forEach(h),this.h()},h(){$(t,"class","flex justify-center items-center overflow-hidden"),$(e,"class",r=c[1]+" flex flex-col p-2 gap-2 rounded-2xl shadow-lg dark:shadow-cyan-900 "+c[0])},m(o,i){p(o,e,i),A(e,t),a&&a.m(t,null),A(e,l),n&&n.m(e,null),s=!0},p(o,[i]){a&&a.p&&(!s||i&16)&&H(a,u,o,o[4],s?K(u,o[4],i,we):J(o[4]),te),o[2].subtitle?n?(n.p(o,i),i&4&&g(n,1)):(n=le(o),n.c(),g(n,1),n.m(e,null)):n&&(M(),b(n,1,1,()=>{n=null}),T()),(!s||i&3&&r!==(r=o[1]+" flex flex-col p-2 gap-2 rounded-2xl shadow-lg dark:shadow-cyan-900 "+o[0]))&&$(e,"class",r)},i(o){s||(g(a,o),g(n),s=!0)},o(o){b(a,o),b(n),s=!1},d(o){o&&h(e),a&&a.d(o),n&&n.d()}}}function Ee(c,e,t){let l,r,{$$slots:s={},$$scope:u}=e;const a=ie(s);let{size:n="md"}=e;return c.$$set=o=>{t(6,e=z(z({},e),C(o))),"size"in o&&t(3,n=o.size),"$$scope"in o&&t(4,u=o.$$scope)},c.$$.update=()=>{c.$$.dirty&8&&t(1,l={sm:"w-24",md:"w-48",lg:"w-96"}[n]??"w-48 h-48"),t(0,r=e.class)},e=C(e),[r,l,a,n,u,s]}class Le extends O{constructor(e){super(),Q(this,e,Ee,Ie,q,{size:3})}}function ze(c){let e,t,l;const r=c[2].default,s=y(r,c,c[1],null);return{c(){e=I("div"),s&&s.c(),this.h()},l(u){e=E(u,"DIV",{class:!0});var a=N(e);s&&s.l(a),a.forEach(h),this.h()},h(){$(e,"class",t="flex flex-row flex-wrap justify-center items-start gap-4 "+c[0])},m(u,a){p(u,e,a),s&&s.m(e,null),l=!0},p(u,[a]){s&&s.p&&(!l||a&2)&&H(s,r,u,u[1],l?K(r,u[1],a,null):J(u[1]),null),(!l||a&1&&t!==(t="flex flex-row flex-wrap justify-center items-start gap-4 "+u[0]))&&$(e,"class",t)},i(u){l||(g(s,u),l=!0)},o(u){b(s,u),l=!1},d(u){u&&h(e),s&&s.d(u)}}}function Ne(c,e,t){let l,{$$slots:r={},$$scope:s}=e;return c.$$set=u=>{t(3,e=z(z({},e),C(u))),"$$scope"in u&&t(1,s=u.$$scope)},c.$$.update=()=>{t(0,l=e.class)},e=C(e),[l,s,r]}class Se extends O{constructor(e){super(),Q(this,e,Ne,ze,q,{})}}function se(c,e,t){const l=c.slice();return l[11]=e[t],l}function De(c){let e,t,l,r,s=c[1].username+"",u,a,n,o,i,_;e=new R({props:{$$slots:{default:[Ae]},$$scope:{ctx:c}}}),e.$on("click",c[4]);let f={ctx:c,current:null,token:null,hasCatch:!1,pending:qe,then:Ge,catch:Ce,value:3,blocks:[,,,]};return Z(i=c[3],f),{c(){V(e.$$.fragment),t=S(),l=I("h2"),r=v("Greetings, "),u=v(s),a=v("."),n=S(),o=G(),f.block.c()},l(d){j(e.$$.fragment,d),t=D(d),l=E(d,"H2",{});var m=N(l);r=w(m,"Greetings, "),u=w(m,s),a=w(m,"."),m.forEach(h),n=D(d),o=G(),f.block.l(d)},m(d,m){B(e,d,m),p(d,t,m),p(d,l,m),A(l,r),A(l,u),A(l,a),p(d,n,m),p(d,o,m),f.block.m(d,f.anchor=m),f.mount=()=>o.parentNode,f.anchor=o,_=!0},p(d,m){c=d;const L={};m&16384&&(L.$$scope={dirty:m,ctx:c}),e.$set(L),(!_||m&2)&&s!==(s=c[1].username+"")&&re(u,s),f.ctx=c,m&8&&i!==(i=c[3])&&Z(i,f)||ge(f,c,m)},i(d){_||(g(e.$$.fragment,d),g(f.block),_=!0)},o(d){b(e.$$.fragment,d);for(let m=0;m<3;m+=1){const L=f.blocks[m];b(L)}_=!1},d(d){d&&(h(t),h(l),h(n),h(o)),P(e,d),f.block.d(d),f.token=null,f=null}}}function Ue(c){let e,t;return e=new R({props:{href:"/login",$$slots:{default:[ye]},$$scope:{ctx:c}}}),{c(){V(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,r){B(e,l,r),t=!0},p(l,r){const s={};r&16384&&(s.$$scope={dirty:r,ctx:l}),e.$set(s)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){b(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function Ae(c){let e;return{c(){e=v("Logout")},l(t){e=w(t,"Logout")},m(t,l){p(t,e,l)},d(t){t&&h(e)}}}function Ce(c){return{c:k,l:k,m:k,p:k,i:k,o:k,d:k}}function Ge(c){let e,t,l,r,s,u=c[3].totalItems==0&&ne();return t=new R({props:{$$slots:{default:[Ve]},$$scope:{ctx:c}}}),t.$on("click",c[6]),r=new Se({props:{$$slots:{default:[Fe]},$$scope:{ctx:c}}}),{c(){u&&u.c(),e=S(),V(t.$$.fragment),l=S(),V(r.$$.fragment)},l(a){u&&u.l(a),e=D(a),j(t.$$.fragment,a),l=D(a),j(r.$$.fragment,a)},m(a,n){u&&u.m(a,n),p(a,e,n),B(t,a,n),p(a,l,n),B(r,a,n),s=!0},p(a,n){a[3].totalItems==0?u||(u=ne(),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null);const o={};n&16384&&(o.$$scope={dirty:n,ctx:a}),t.$set(o);const i={};n&16397&&(i.$$scope={dirty:n,ctx:a}),r.$set(i)},i(a){s||(g(t.$$.fragment,a),g(r.$$.fragment,a),s=!0)},o(a){b(t.$$.fragment,a),b(r.$$.fragment,a),s=!1},d(a){a&&(h(e),h(l)),u&&u.d(a),P(t,a),P(r,a)}}}function ne(c){let e;return{c(){e=v("No files.")},l(t){e=w(t,"No files.")},m(t,l){p(t,e,l)},d(t){t&&h(e)}}}function Ve(c){let e;return{c(){e=v("Add")},l(t){e=w(t,"Add")},m(t,l){p(t,e,l)},d(t){t&&h(e)}}}function je(c){let e,t,l;return{c(){e=I("img"),this.h()},l(r){e=E(r,"IMG",{slot:!0,src:!0,alt:!0}),this.h()},h(){$(e,"slot","image"),Y(e.src,t=c[5](c[11]))||$(e,"src",t),$(e,"alt",l=c[11].name)},m(r,s){p(r,e,s)},p(r,s){s&8&&!Y(e.src,t=r[5](r[11]))&&$(e,"src",t),s&8&&l!==(l=r[11].name)&&$(e,"alt",l)},d(r){r&&h(e)}}}function Be(c){let e,t=c[11].name+"",l;return{c(){e=I("div"),l=v(t),this.h()},l(r){e=E(r,"DIV",{slot:!0});var s=N(e);l=w(s,t),s.forEach(h),this.h()},h(){$(e,"slot","subtitle")},m(r,s){p(r,e,s),A(e,l)},p(r,s){s&8&&t!==(t=r[11].name+"")&&re(l,t)},d(r){r&&h(e)}}}function Pe(c){let e,t,l;return e=new Le({props:{size:"lg",$$slots:{subtitle:[Be],image:[je]},$$scope:{ctx:c}}}),{c(){V(e.$$.fragment),t=S()},l(r){j(e.$$.fragment,r),t=D(r)},m(r,s){B(e,r,s),p(r,t,s),l=!0},p(r,s){const u={};s&16392&&(u.$$scope={dirty:s,ctx:r}),e.$set(u)},i(r){l||(g(e.$$.fragment,r),l=!0)},o(r){b(e.$$.fragment,r),l=!1},d(r){r&&h(t),P(e,r)}}}function ce(c){let e,t;return e=new ke({props:{href:U.files.getUrl(c[11],c[11].file),$$slots:{default:[Pe]},$$scope:{ctx:c}}}),{c(){V(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,r){B(e,l,r),t=!0},p(l,r){const s={};r&8&&(s.href=U.files.getUrl(l[11],l[11].file)),r&16392&&(s.$$scope={dirty:r,ctx:l}),e.$set(s)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){b(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function Fe(c){let e,t,l,r,s,u,a=x(c[3].items),n=[];for(let i=0;i<a.length;i+=1)n[i]=ce(se(c,a,i));const o=i=>b(n[i],1,1,()=>{n[i]=null});return{c(){e=I("input"),t=S();for(let i=0;i<n.length;i+=1)n[i].c();l=G(),this.h()},l(i){e=E(i,"INPUT",{type:!0,class:!0}),t=D(i);for(let _=0;_<n.length;_+=1)n[_].l(i);l=G(),this.h()},h(){$(e,"type","file"),$(e,"class","hidden")},m(i,_){p(i,e,_),c[7](e),p(i,t,_);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(i,_);p(i,l,_),r=!0,s||(u=me(e,"change",c[8]),s=!0)},p(i,_){if(_&40){a=x(i[3].items);let f;for(f=0;f<a.length;f+=1){const d=se(i,a,f);n[f]?(n[f].p(d,_),g(n[f],1)):(n[f]=ce(d),n[f].c(),g(n[f],1),n[f].m(l.parentNode,l))}for(M(),f=a.length;f<n.length;f+=1)o(f);T()}},i(i){if(!r){for(let _=0;_<a.length;_+=1)g(n[_]);r=!0}},o(i){n=n.filter(Boolean);for(let _=0;_<n.length;_+=1)b(n[_]);r=!1},d(i){i&&(h(e),h(t),h(l)),c[7](null),he(n,i),s=!1,u()}}}function qe(c){let e;return{c(){e=v("Loading...")},l(t){e=w(t,"Loading...")},m(t,l){p(t,e,l)},p:k,i:k,o:k,d(t){t&&h(e)}}}function ye(c){let e;return{c(){e=v("Login")},l(t){e=w(t,"Login")},m(t,l){p(t,e,l)},d(t){t&&h(e)}}}function He(c){let e,t,l,r;const s=[Ue,De],u=[];function a(n,o){return n[1]?1:0}return e=a(c),t=u[e]=s[e](c),{c(){t.c(),l=G()},l(n){t.l(n),l=G()},m(n,o){u[e].m(n,o),p(n,l,o),r=!0},p(n,[o]){let i=e;e=a(n),e===i?u[e].p(n,o):(M(),b(u[i],1,1,()=>{u[i]=null}),T(),t=u[e],t?t.p(n,o):(t=u[e]=s[e](n),t.c()),g(t,1),t.m(l.parentNode,l))},i(n){r||(g(t),r=!0)},o(n){b(t),r=!1},d(n){n&&h(l),u[e].d(n)}}}function Je(c,e,t){let l;fe(c,pe,m=>t(1,l=m));let r=null,s=null,u=null;function a(m){U.authStore.clear()}function n(){t(3,r=U.collection("files").getList(1,30,{sort:"-created"}))}async function o(){let m=[];for(const L of u)m.push(U.collection("files").create({name:L.name,file:L,owner:l.id}));await Promise.all(m),t(0,u=null),await n()}function i(m){return U.files.getUrl(m,m.file,{thumb:"96x96f"})}const _=()=>s.click();function f(m){_e[m?"unshift":"push"](()=>{s=m,t(2,s)})}function d(){u=this.files,t(0,u)}return c.$$.update=()=>{c.$$.dirty&1&&u&&o(),c.$$.dirty&2&&l&&n()},[u,l,s,r,a,i,_,f,d]}class Oe extends O{constructor(e){super(),Q(this,e,Je,He,q,{})}}export{Oe as component};
