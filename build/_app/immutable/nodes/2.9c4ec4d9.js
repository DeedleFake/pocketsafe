import{s as E,c as A,f as k,u as C,g as H,d as I,h as y,i as V,j as B,e as F}from"../chunks/scheduler.59e47f41.js";import{S,i as D,g as $,h as v,j as L,f as _,y as j,a as m,z as J,d,t as g,k as K,b as M,p as N,r as G,s as O,m as h,u as P,c as Q,n as p,v as U,x as b,o as R,w as q}from"../chunks/index.6bfe0adb.js";import{g as T,p as W,c as X}from"../chunks/pocketbase.977476dd.js";function Y(o){let e,s,n,u;const c=o[5].default,l=A(c,o,o[4],null);let i=[{class:o[1]},{href:o[0]},o[2]],r={};for(let t=0;t<i.length;t+=1)r=k(r,i[t]);return{c(){e=$("a"),l&&l.c(),this.h()},l(t){e=v(t,"A",{class:!0,href:!0});var a=L(e);l&&l.l(a),a.forEach(_),this.h()},h(){j(e,r)},m(t,a){m(t,e,a),l&&l.m(e,null),s=!0,n||(u=J(e,"click",o[6]),n=!0)},p(t,[a]){l&&l.p&&(!s||a&16)&&C(l,c,t,t[4],s?I(c,t[4],a,null):H(t[4]),null),j(e,r=T(i,[{class:t[1]},(!s||a&1)&&{href:t[0]},a&4&&t[2]]))},i(t){s||(d(l,t),s=!0)},o(t){g(l,t),s=!1},d(t){t&&_(e),l&&l.d(t),n=!1,u()}}}function Z(o,e,s){const n=["href","button"];let u=y(e,n),{$$slots:c={},$$scope:l}=e,{href:i="#"}=e,{button:r=!1}=e;const t=r?"btn-primary":"";function a(f){B.call(this,o,f)}return o.$$set=f=>{e=k(k({},e),V(f)),s(2,u=y(e,n)),"href"in f&&s(0,i=f.href),"button"in f&&s(3,r=f.button),"$$scope"in f&&s(4,l=f.$$scope)},[i,t,u,r,l,c,a]}class z extends S{constructor(e){super(),D(this,e,Z,Y,E,{href:0,button:3})}}function w(o){let e,s,n,u,c=o[0].username+"",l,i,r;return e=new z({props:{button:!0,$$slots:{default:[ee]},$$scope:{ctx:o}}}),e.$on("click",o[1]),{c(){G(e.$$.fragment),s=O(),n=$("h2"),u=h("Greetings, "),l=h(c),i=h(".")},l(t){P(e.$$.fragment,t),s=Q(t),n=v(t,"H2",{});var a=L(n);u=p(a,"Greetings, "),l=p(a,c),i=p(a,"."),a.forEach(_)},m(t,a){U(e,t,a),m(t,s,a),m(t,n,a),b(n,u),b(n,l),b(n,i),r=!0},p(t,a){const f={};a&4&&(f.$$scope={dirty:a,ctx:t}),e.$set(f),(!r||a&1)&&c!==(c=t[0].username+"")&&R(l,c)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){t&&(_(s),_(n)),q(e,t)}}}function x(o){let e,s;return e=new z({props:{button:!0,href:"/login",$$slots:{default:[te]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,u){U(e,n,u),s=!0},p(n,u){const c={};u&4&&(c.$$scope={dirty:u,ctx:n}),e.$set(c)},i(n){s||(d(e.$$.fragment,n),s=!0)},o(n){g(e.$$.fragment,n),s=!1},d(n){q(e,n)}}}function ee(o){let e;return{c(){e=h("Logout")},l(s){e=p(s,"Logout")},m(s,n){m(s,e,n)},d(s){s&&_(e)}}}function te(o){let e;return{c(){e=h("Login")},l(s){e=p(s,"Login")},m(s,n){m(s,e,n)},d(s){s&&_(e)}}}function se(o){let e,s,n,u;const c=[x,w],l=[];function i(r,t){return r[0]?1:0}return s=i(o),n=l[s]=c[s](o),{c(){e=$("div"),n.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var t=L(e);n.l(t),t.forEach(_),this.h()},h(){K(e,"class","w-100% h-100% flex justify-center items-center")},m(r,t){m(r,e,t),l[s].m(e,null),u=!0},p(r,[t]){let a=s;s=i(r),s===a?l[s].p(r,t):(N(),g(l[a],1,1,()=>{l[a]=null}),M(),n=l[s],n?n.p(r,t):(n=l[s]=c[s](r),n.c()),d(n,1),n.m(e,null))},i(r){u||(d(n),u=!0)},o(r){g(n),u=!1},d(r){r&&_(e),l[s].d()}}}function ne(o,e,s){let n;F(o,X,c=>s(0,n=c));function u(c){c.preventDefault(),W.authStore.clear()}return[n,u]}class oe extends S{constructor(e){super(),D(this,e,ne,se,E,{})}}export{oe as component};
