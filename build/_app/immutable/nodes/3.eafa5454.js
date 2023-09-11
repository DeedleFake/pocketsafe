import{s as j,n as J,l as P,k as g,m as L,c as ae,u as le,g as ue,d as re,b as K,r as Q,e as ie}from"../chunks/scheduler.c0af0a0f.js";import{S as q,i as z,e as V,a as h,f as m,g as y,h as v,y as b,B as N,z as A,j as D,d as k,t as w,C as X,s as U,r as E,c as I,u as S,k as $,v as B,x as O,D as oe,w as C,m as ee,n as te,o as fe}from"../chunks/index.8a19a5c7.js";import{h as ce}from"../chunks/singletons.8c5f125c.js";import{g as F,p as pe,c as _e}from"../chunks/pocketbase.336cc0bb.js";const Y=ce("goto");function de(a){let e,s,l,u=[{type:"text"},{class:"px-4 py-2 ring rounded-lg"},a[2]],n={};for(let t=0;t<u.length;t+=1)n=g(n,u[t]);return{c(){e=y("input"),this.h()},l(t){e=v(t,"INPUT",{type:!0,class:!0}),this.h()},h(){b(e,n)},m(t,f){h(t,e,f),e.autofocus&&e.focus(),N(e,a[0]),s||(l=A(e,"input",a[4]),s=!0)},p(t,f){b(e,n=F(u,[{type:"text"},{class:"px-4 py-2 ring rounded-lg"},f&4&&t[2]])),f&1&&e.value!==t[0]&&N(e,t[0])},d(t){t&&m(e),s=!1,l()}}}function me(a){let e,s,l,u=[{type:"password"},{class:"px-4 py-2 ring rounded-lg"},a[2]],n={};for(let t=0;t<u.length;t+=1)n=g(n,u[t]);return{c(){e=y("input"),this.h()},l(t){e=v(t,"INPUT",{type:!0,class:!0}),this.h()},h(){b(e,n)},m(t,f){h(t,e,f),e.autofocus&&e.focus(),N(e,a[0]),s||(l=A(e,"input",a[3]),s=!0)},p(t,f){b(e,n=F(u,[{type:"password"},{class:"px-4 py-2 ring rounded-lg"},f&4&&t[2]])),f&1&&e.value!==t[0]&&N(e,t[0])},d(t){t&&m(e),s=!1,l()}}}function he(a){let e;function s(n,t){return n[1]?me:de}let l=s(a),u=l(a);return{c(){u.c(),e=V()},l(n){u.l(n),e=V()},m(n,t){u.m(n,t),h(n,e,t)},p(n,[t]){l===(l=s(n))&&u?u.p(n,t):(u.d(1),u=l(n),u&&(u.c(),u.m(e.parentNode,e)))},i:J,o:J,d(n){n&&m(e),u.d(n)}}}function ge(a,e,s){const l=["password","value"];let u=P(e,l),{password:n=!1}=e,{value:t=""}=e;function f(){t=this.value,s(0,t)}function r(){t=this.value,s(0,t)}return a.$$set=o=>{e=g(g({},e),L(o)),s(2,u=P(e,l)),"password"in o&&s(1,n=o.password),"value"in o&&s(0,t=o.value)},[t,n,u,f,r]}class Z extends q{constructor(e){super(),z(this,e,ge,he,j,{password:1,value:0})}}function be(a){let e,s,l;const u=a[5].default,n=ae(u,a,a[4],null);let t=[{class:s=a[1]+" "+a[0]},a[2]],f={};for(let r=0;r<t.length;r+=1)f=g(f,t[r]);return{c(){e=y("button"),n&&n.c(),this.h()},l(r){e=v(r,"BUTTON",{class:!0});var o=D(e);n&&n.l(o),o.forEach(m),this.h()},h(){b(e,f)},m(r,o){h(r,e,o),n&&n.m(e,null),e.autofocus&&e.focus(),l=!0},p(r,[o]){n&&n.p&&(!l||o&16)&&le(n,u,r,r[4],l?re(u,r[4],o,null):ue(r[4]),null),b(e,f=F(t,[(!l||o&3&&s!==(s=r[1]+" "+r[0]))&&{class:s},o&4&&r[2]]))},i(r){l||(k(n,r),l=!0)},o(r){w(n,r),l=!1},d(r){r&&m(e),n&&n.d(r)}}}function ye(a,e,s){let l,u;const n=["secondary"];let t=P(e,n),{$$slots:f={},$$scope:r}=e,{secondary:o=!1}=e;return a.$$set=d=>{s(6,e=g(g({},e),L(d))),s(2,t=P(e,n)),"secondary"in d&&s(3,o=d.secondary),"$$scope"in d&&s(4,r=d.$$scope)},a.$$.update=()=>{a.$$.dirty&8&&s(1,l="btn "+(o?"btn-secondary":"btn-primary")),s(0,u=e.class??"")},e=L(e),[u,l,t,o,r,f]}class ve extends q{constructor(e){super(),z(this,e,ye,be,j,{secondary:3})}}function x(a){let e,s;return{c(){e=y("span"),s=ee(a[2]),this.h()},l(l){e=v(l,"SPAN",{class:!0});var u=D(e);s=te(u,a[2]),u.forEach(m),this.h()},h(){$(e,"class","text-red-500")},m(l,u){h(l,e,u),O(e,s)},p(l,u){u&4&&fe(s,l[2])},d(l){l&&m(e)}}}function ke(a){let e;return{c(){e=ee("Login")},l(s){e=te(s,"Login")},m(s,l){h(s,e,l)},d(s){s&&m(e)}}}function we(a){let e,s,l,u,n,t,f,r,o,d,_,M,p=a[2]&&x(a);function se(i){a[6](i)}let R={placeholder:"E-mail address..."};a[0]!==void 0&&(R.value=a[0]),l=new Z({props:R}),K.push(()=>X(l,"value",se));function ne(i){a[7](i)}let W={password:!0,placeholder:"Password..."};return a[1]!==void 0&&(W.value=a[1]),t=new Z({props:W}),K.push(()=>X(t,"value",ne)),o=new ve({props:{type:"submit",disabled:!a[0]||!a[1],$$slots:{default:[ke]},$$scope:{ctx:a}}}),{c(){p&&p.c(),e=U(),s=y("form"),E(l.$$.fragment),n=U(),E(t.$$.fragment),r=U(),E(o.$$.fragment),this.h()},l(i){p&&p.l(i),e=I(i),s=v(i,"FORM",{class:!0});var c=D(s);S(l.$$.fragment,c),n=I(c),S(t.$$.fragment,c),r=I(c),S(o.$$.fragment,c),c.forEach(m),this.h()},h(){$(s,"class","flex flex-col items-start gap-4")},m(i,c){p&&p.m(i,c),h(i,e,c),h(i,s,c),B(l,s,null),O(s,n),B(t,s,null),O(s,r),B(o,s,null),d=!0,_||(M=A(s,"submit",oe(a[3])),_=!0)},p(i,[c]){i[2]?p?p.p(i,c):(p=x(i),p.c(),p.m(e.parentNode,e)):p&&(p.d(1),p=null);const G={};!u&&c&1&&(u=!0,G.value=i[0],Q(()=>u=!1)),l.$set(G);const H={};!f&&c&2&&(f=!0,H.value=i[1],Q(()=>f=!1)),t.$set(H);const T={};c&3&&(T.disabled=!i[0]||!i[1]),c&256&&(T.$$scope={dirty:c,ctx:i}),o.$set(T)},i(i){d||(k(l.$$.fragment,i),k(t.$$.fragment,i),k(o.$$.fragment,i),d=!0)},o(i){w(l.$$.fragment,i),w(t.$$.fragment,i),w(o.$$.fragment,i),d=!1},d(i){i&&(m(e),m(s)),p&&p.d(i),C(l),C(t),C(o),_=!1,M()}}}function Pe(a,e,s){let l;ie(a,_e,_=>s(5,l=_));let{redirect:u="/"}=e,n="",t="",f="";async function r(){try{await pe.collection("users").authWithPassword(n,t),await Y(u)}catch(_){console.error(_),s(2,f=f(400,"Incorrect login information."))}}function o(_){n=_,s(0,n)}function d(_){t=_,s(1,t)}return a.$$set=_=>{"redirect"in _&&s(4,u=_.redirect)},a.$$.update=()=>{a.$$.dirty&48&&l&&Y(u)},[n,t,f,r,u,l,o,d]}class Ie extends q{constructor(e){super(),z(this,e,Pe,we,j,{redirect:4})}}export{Ie as component};
