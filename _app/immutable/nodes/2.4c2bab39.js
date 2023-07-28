import{s as F,c as At,f as N,u as ot,g as ct,d as ft,h as Qt,i as pe,j as Ye,n as D,r as Xt}from"../chunks/scheduler.935561cc.js";import{S as q,i as O,y as $t,e as Ne,z as Dt,j as C,f as g,A as Pe,a as $,x as l,d as _,t as M,B as St,r as b,u as Q,v as L,w as J,g as h,s as B,h as m,C as k,c as x,k as A,D as rt,E as at,F as Nt}from"../chunks/index.d2d01981.js";/* empty css                       */function Lt(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function Fe(a,e){const r={},t={},s={$$scope:1};let n=a.length;for(;n--;){const i=a[n],c=e[n];if(c){for(const w in i)w in c||(t[w]=1);for(const w in c)s[w]||(r[w]=c[w],s[w]=1);a[n]=c}else for(const w in i)s[w]=1}for(const i in t)i in r||(r[i]=void 0);return r}function Ht(a){return typeof a=="object"&&a!==null?a:{}}const Pt=!0,dn=Object.freeze(Object.defineProperty({__proto__:null,prerender:Pt},Symbol.toStringTag,{value:"Module"})),Ft=""+new URL("../assets/library.3a0b5e6a.png",import.meta.url).href,Gt=""+new URL("../assets/minesweeper.75d8f083.png",import.meta.url).href,Wt=""+new URL("../assets/chess.2e1b33c8.png",import.meta.url).href,yt="data:image/png;base64,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",Jt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Tt(a,e,r){const t=a.slice();return t[10]=e[r][0],t[11]=e[r][1],t}function lt(a){let e,r=[a[11]],t={};for(let s=0;s<r.length;s+=1)t=N(t,r[s]);return{c(){e=$t(a[10]),this.h()},l(s){e=Dt(s,a[10],{}),C(e).forEach(g),this.h()},h(){Pe(e,t)},m(s,n){$(s,e,n)},p(s,n){Pe(e,t=Fe(r,[n&32&&s[11]]))},d(s){s&&g(e)}}}function jt(a){let e=a[10],r,t=a[10]&&lt(a);return{c(){t&&t.c(),r=Ne()},l(s){t&&t.l(s),r=Ne()},m(s,n){t&&t.m(s,n),$(s,r,n)},p(s,n){s[10]?e?F(e,s[10])?(t.d(1),t=lt(s),e=s[10],t.c(),t.m(r.parentNode,r)):t.p(s,n):(t=lt(s),e=s[10],t.c(),t.m(r.parentNode,r)):e&&(t.d(1),t=null,e=s[10])},d(s){s&&g(r),t&&t.d(s)}}}function zt(a){let e,r,t,s,n,i=Lt(a[5]),c=[];for(let o=0;o<i.length;o+=1)c[o]=jt(Tt(a,i,o));const w=a[9].default,d=At(w,a,a[8],null);let v=[Jt,a[6],{width:a[2]},{height:a[2]},{stroke:a[1]},{"stroke-width":t=a[4]?Number(a[3])*24/Number(a[2]):a[3]},{class:s=`lucide-icon lucide lucide-${a[0]} ${a[7].class??""}`}],f={};for(let o=0;o<v.length;o+=1)f=N(f,v[o]);return{c(){e=$t("svg");for(let o=0;o<c.length;o+=1)c[o].c();r=Ne(),d&&d.c(),this.h()},l(o){e=Dt(o,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var u=C(e);for(let E=0;E<c.length;E+=1)c[E].l(u);r=Ne(),d&&d.l(u),u.forEach(g),this.h()},h(){Pe(e,f)},m(o,u){$(o,e,u);for(let E=0;E<c.length;E+=1)c[E]&&c[E].m(e,null);l(e,r),d&&d.m(e,null),n=!0},p(o,[u]){if(u&32){i=Lt(o[5]);let E;for(E=0;E<i.length;E+=1){const P=Tt(o,i,E);c[E]?c[E].p(P,u):(c[E]=jt(P),c[E].c(),c[E].m(e,r))}for(;E<c.length;E+=1)c[E].d(1);c.length=i.length}d&&d.p&&(!n||u&256)&&ot(d,w,o,o[8],n?ft(w,o[8],u,null):ct(o[8]),null),Pe(e,f=Fe(v,[Jt,u&64&&o[6],(!n||u&4)&&{width:o[2]},(!n||u&4)&&{height:o[2]},(!n||u&2)&&{stroke:o[1]},(!n||u&28&&t!==(t=o[4]?Number(o[3])*24/Number(o[2]):o[3]))&&{"stroke-width":t},(!n||u&129&&s!==(s=`lucide-icon lucide lucide-${o[0]} ${o[7].class??""}`))&&{class:s}]))},i(o){n||(_(d,o),n=!0)},o(o){M(d,o),n=!1},d(o){o&&g(e),St(c,o),d&&d.d(o)}}}function Vt(a,e,r){const t=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let s=Qt(e,t),{$$slots:n={},$$scope:i}=e,{name:c}=e,{color:w="currentColor"}=e,{size:d=24}=e,{strokeWidth:v=2}=e,{absoluteStrokeWidth:f=!1}=e,{iconNode:o}=e;return a.$$set=u=>{r(7,e=N(N({},e),pe(u))),r(6,s=Qt(e,t)),"name"in u&&r(0,c=u.name),"color"in u&&r(1,w=u.color),"size"in u&&r(2,d=u.size),"strokeWidth"in u&&r(3,v=u.strokeWidth),"absoluteStrokeWidth"in u&&r(4,f=u.absoluteStrokeWidth),"iconNode"in u&&r(5,o=u.iconNode),"$$scope"in u&&r(8,i=u.$$scope)},e=pe(e),[c,w,d,v,f,o,s,e,i,n]}class Rt extends q{constructor(e){super(),O(this,e,Vt,zt,F,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const Yt=Rt;function Ut(a){let e;const r=a[2].default,t=At(r,a,a[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&8)&&ot(t,r,s,s[3],e?ft(r,s[3],n,null):ct(s[3]),null)},i(s){e||(_(t,s),e=!0)},o(s){M(t,s),e=!1},d(s){t&&t.d(s)}}}function qt(a){let e,r;const t=[{name:"external-link"},a[1],{iconNode:a[0]}];let s={$$slots:{default:[Ut]},$$scope:{ctx:a}};for(let n=0;n<t.length;n+=1)s=N(s,t[n]);return e=new Yt({props:s}),{c(){b(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){L(e,n,i),r=!0},p(n,[i]){const c=i&3?Fe(t,[t[0],i&2&&Ht(n[1]),i&1&&{iconNode:n[0]}]):{};i&8&&(c.$$scope={dirty:i,ctx:n}),e.$set(c)},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){M(e.$$.fragment,n),r=!1},d(n){J(e,n)}}}function Ot(a,e,r){let{$$slots:t={},$$scope:s}=e;const n=[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}],["polyline",{points:"15 3 21 3 21 9"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3"}]];return a.$$set=i=>{r(1,e=N(N({},e),pe(i))),"$$scope"in i&&r(3,s=i.$$scope)},e=pe(e),[n,e,t,s]}class Zt extends q{constructor(e){super(),O(this,e,Ot,qt,F,{})}}const Xe=Zt;function Kt(a){let e;const r=a[2].default,t=At(r,a,a[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&8)&&ot(t,r,s,s[3],e?ft(r,s[3],n,null):ct(s[3]),null)},i(s){e||(_(t,s),e=!0)},o(s){M(t,s),e=!1},d(s){t&&t.d(s)}}}function en(a){let e,r;const t=[{name:"github"},a[1],{iconNode:a[0]}];let s={$$slots:{default:[Kt]},$$scope:{ctx:a}};for(let n=0;n<t.length;n+=1)s=N(s,t[n]);return e=new Yt({props:s}),{c(){b(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,i){L(e,n,i),r=!0},p(n,[i]){const c=i&3?Fe(t,[t[0],i&2&&Ht(n[1]),i&1&&{iconNode:n[0]}]):{};i&8&&(c.$$scope={dirty:i,ctx:n}),e.$set(c)},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){M(e.$$.fragment,n),r=!1},d(n){J(e,n)}}}function tn(a,e,r){let{$$slots:t={},$$scope:s}=e;const n=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];return a.$$set=i=>{r(1,e=N(N({},e),pe(i))),"$$scope"in i&&r(3,s=i.$$scope)},e=pe(e),[n,e,t,s]}class nn extends q{constructor(e){super(),O(this,e,tn,en,F,{})}}const Se=nn;function sn(a){let e,r,t="Projects",s,n,i,c,w,d,v,f,o="Library",u,E,P="A place to store your book information. Built with React and Firebase.",Ee,p,T,j,H,Z,K,Ge,G,ee,ut,We,Y,te,ht="Minesweeper",ye,we,mt="A simple recreation of minesweeper. Built with Svelte.",ze,W,ne,se,Ve,re,ae,Re,y,le,gt,Ue,X,ie,dt="Chess",qe,Ce,vt="A simple recreation of chess, with a not so great AI. Built with React.",Oe,z,Ae,oe,Ze,ce,fe,Ke,V,ue,Et,et,S,he,wt="Tic Tac Toe",tt,Be,Ct="A simple recreation of Tic Tac Toe, with a decent AI. Built with React.",nt,R,me,ge,st,de,ve,be;return j=new Xe({}),K=new Se({}),se=new Xe({}),ae=new Se({}),oe=new Xe({}),fe=new Se({}),ge=new Xe({}),ve=new Se({}),{c(){e=h("div"),r=h("h1"),r.textContent=t,s=B(),n=h("div"),i=h("div"),c=h("img"),d=B(),v=h("div"),f=h("h2"),f.textContent=o,u=B(),E=h("p"),E.textContent=P,Ee=B(),p=h("div"),T=h("a"),b(j.$$.fragment),H=B(),Z=h("a"),b(K.$$.fragment),Ge=B(),G=h("div"),ee=h("img"),We=B(),Y=h("div"),te=h("h2"),te.textContent=ht,ye=B(),we=h("p"),we.textContent=mt,ze=B(),W=h("div"),ne=h("a"),b(se.$$.fragment),Ve=B(),re=h("a"),b(ae.$$.fragment),Re=B(),y=h("div"),le=h("img"),Ue=B(),X=h("div"),ie=h("h2"),ie.textContent=dt,qe=B(),Ce=h("p"),Ce.textContent=vt,Oe=B(),z=h("div"),Ae=h("a"),b(oe.$$.fragment),Ze=B(),ce=h("a"),b(fe.$$.fragment),Ke=B(),V=h("div"),ue=h("img"),et=B(),S=h("div"),he=h("h2"),he.textContent=wt,tt=B(),Be=h("p"),Be.textContent=Ct,nt=B(),R=h("div"),me=h("a"),b(ge.$$.fragment),st=B(),de=h("a"),b(ve.$$.fragment),this.h()},l(I){e=m(I,"DIV",{class:!0,id:!0});var xe=C(e);r=m(xe,"H1",{class:!0,["data-svelte-h"]:!0}),k(r)!=="svelte-1d00lg2"&&(r.textContent=t),s=x(xe),n=m(xe,"DIV",{class:!0});var U=C(n);i=m(U,"DIV",{class:!0});var Qe=C(i);c=m(Qe,"IMG",{class:!0,src:!0,alt:!0}),d=x(Qe),v=m(Qe,"DIV",{class:!0});var Ie=C(v);f=m(Ie,"H2",{class:!0,["data-svelte-h"]:!0}),k(f)!=="svelte-1kk6xgc"&&(f.textContent=o),u=x(Ie),E=m(Ie,"P",{["data-svelte-h"]:!0}),k(E)!=="svelte-1qlria5"&&(E.textContent=P),Ee=x(Ie),p=m(Ie,"DIV",{class:!0});var Le=C(p);T=m(Le,"A",{href:!0,target:!0});var Bt=C(T);Q(j.$$.fragment,Bt),Bt.forEach(g),H=x(Le),Z=m(Le,"A",{href:!0,target:!0});var xt=C(Z);Q(K.$$.fragment,xt),xt.forEach(g),Le.forEach(g),Ie.forEach(g),Qe.forEach(g),Ge=x(U),G=m(U,"DIV",{class:!0});var Je=C(G);ee=m(Je,"IMG",{class:!0,src:!0,alt:!0}),We=x(Je),Y=m(Je,"DIV",{class:!0});var _e=C(Y);te=m(_e,"H2",{class:!0,["data-svelte-h"]:!0}),k(te)!=="svelte-1ddoq2h"&&(te.textContent=ht),ye=x(_e),we=m(_e,"P",{["data-svelte-h"]:!0}),k(we)!=="svelte-1y5b4sv"&&(we.textContent=mt),ze=x(_e),W=m(_e,"DIV",{class:!0});var Te=C(W);ne=m(Te,"A",{href:!0,target:!0});var It=C(ne);Q(se.$$.fragment,It),It.forEach(g),Ve=x(Te),re=m(Te,"A",{href:!0,target:!0});var _t=C(re);Q(ae.$$.fragment,_t),_t.forEach(g),Te.forEach(g),_e.forEach(g),Je.forEach(g),Re=x(U),y=m(U,"DIV",{class:!0});var je=C(y);le=m(je,"IMG",{class:!0,src:!0,alt:!0}),Ue=x(je),X=m(je,"DIV",{class:!0});var Me=C(X);ie=m(Me,"H2",{class:!0,["data-svelte-h"]:!0}),k(ie)!=="svelte-1xap15n"&&(ie.textContent=dt),qe=x(Me),Ce=m(Me,"P",{["data-svelte-h"]:!0}),k(Ce)!=="svelte-c0mt64"&&(Ce.textContent=vt),Oe=x(Me),z=m(Me,"DIV",{class:!0});var $e=C(z);Ae=m($e,"A",{href:!0,target:!0});var Mt=C(Ae);Q(oe.$$.fragment,Mt),Mt.forEach(g),Ze=x($e),ce=m($e,"A",{href:!0,target:!0});var kt=C(ce);Q(fe.$$.fragment,kt),kt.forEach(g),$e.forEach(g),Me.forEach(g),je.forEach(g),Ke=x(U),V=m(U,"DIV",{class:!0});var De=C(V);ue=m(De,"IMG",{class:!0,src:!0,alt:!0}),et=x(De),S=m(De,"DIV",{class:!0});var ke=C(S);he=m(ke,"H2",{class:!0,["data-svelte-h"]:!0}),k(he)!=="svelte-125axen"&&(he.textContent=wt),tt=x(ke),Be=m(ke,"P",{["data-svelte-h"]:!0}),k(Be)!=="svelte-1o19klt"&&(Be.textContent=Ct),nt=x(ke),R=m(ke,"DIV",{class:!0});var He=C(R);me=m(He,"A",{href:!0,target:!0});var pt=C(me);Q(ge.$$.fragment,pt),pt.forEach(g),st=x(He),de=m(He,"A",{href:!0,target:!0});var bt=C(de);Q(ve.$$.fragment,bt),bt.forEach(g),He.forEach(g),ke.forEach(g),De.forEach(g),U.forEach(g),xe.forEach(g),this.h()},h(){A(r,"class","h1"),A(c,"class","project-card-image"),Ye(c.src,w=Ft)||A(c,"src",w),A(c,"alt","Library app"),A(f,"class","h2"),A(T,"href","https://library-17792.web.app/"),A(T,"target","_blank"),A(Z,"href","https://github.com/theChantu/library"),A(Z,"target","_blank"),A(p,"class","project-card-links-container"),A(v,"class","project-card-details-container"),A(i,"class","project-card-container"),A(ee,"class","project-card-image"),Ye(ee.src,ut=Gt)||A(ee,"src",ut),A(ee,"alt","Minesweeper"),A(te,"class","h2"),A(ne,"href","https://thechantu.github.io/minesweeper/"),A(ne,"target","_blank"),A(re,"href","https://github.com/theChantu/minesweeper"),A(re,"target","_blank"),A(W,"class","project-card-links-container"),A(Y,"class","project-card-details-container"),A(G,"class","project-card-container"),A(le,"class","project-card-image"),Ye(le.src,gt=Wt)||A(le,"src",gt),A(le,"alt","Chess"),A(ie,"class","h2"),A(Ae,"href","https://thechantu.github.io/chess/"),A(Ae,"target","_blank"),A(ce,"href","https://github.com/theChantu/chess"),A(ce,"target","_blank"),A(z,"class","project-card-links-container"),A(X,"class","project-card-details-container"),A(y,"class","project-card-container"),A(ue,"class","project-card-image"),Ye(ue.src,Et=yt)||A(ue,"src",Et),A(ue,"alt","Tic Tac Toe"),A(he,"class","h2"),A(me,"href","https://thechantu.github.io/tictactoe/"),A(me,"target","_blank"),A(de,"href","https://github.com/theChantu/tictactoe"),A(de,"target","_blank"),A(R,"class","project-card-links-container"),A(S,"class","project-card-details-container"),A(V,"class","project-card-container"),A(n,"class","flex flex-col gap-normal w-full"),A(e,"class","h-screen flex flex-col justify-center items-center p-normal gap-normal dark:text-white"),A(e,"id","projects")},m(I,xe){$(I,e,xe),l(e,r),l(e,s),l(e,n),l(n,i),l(i,c),l(i,d),l(i,v),l(v,f),l(v,u),l(v,E),l(v,Ee),l(v,p),l(p,T),L(j,T,null),l(p,H),l(p,Z),L(K,Z,null),l(n,Ge),l(n,G),l(G,ee),l(G,We),l(G,Y),l(Y,te),l(Y,ye),l(Y,we),l(Y,ze),l(Y,W),l(W,ne),L(se,ne,null),l(W,Ve),l(W,re),L(ae,re,null),l(n,Re),l(n,y),l(y,le),l(y,Ue),l(y,X),l(X,ie),l(X,qe),l(X,Ce),l(X,Oe),l(X,z),l(z,Ae),L(oe,Ae,null),l(z,Ze),l(z,ce),L(fe,ce,null),l(n,Ke),l(n,V),l(V,ue),l(V,et),l(V,S),l(S,he),l(S,tt),l(S,Be),l(S,nt),l(S,R),l(R,me),L(ge,me,null),l(R,st),l(R,de),L(ve,de,null),be=!0},p:D,i(I){be||(_(j.$$.fragment,I),_(K.$$.fragment,I),_(se.$$.fragment,I),_(ae.$$.fragment,I),_(oe.$$.fragment,I),_(fe.$$.fragment,I),_(ge.$$.fragment,I),_(ve.$$.fragment,I),be=!0)},o(I){M(j.$$.fragment,I),M(K.$$.fragment,I),M(se.$$.fragment,I),M(ae.$$.fragment,I),M(oe.$$.fragment,I),M(fe.$$.fragment,I),M(ge.$$.fragment,I),M(ve.$$.fragment,I),be=!1},d(I){I&&g(e),J(j),J(K),J(se),J(ae),J(oe),J(fe),J(ge),J(ve)}}}class rn extends q{constructor(e){super(),O(this,e,null,sn,F,{})}}function an(a){let e,r,t,s="Jonathan",n,i,c,w="Home",d,v,f="Projects",o,u,E="Contact",P,Ee;return{c(){e=h("div"),r=h("nav"),t=h("h1"),t.textContent=s,n=B(),i=h("div"),c=h("a"),c.textContent=w,d=B(),v=h("a"),v.textContent=f,o=B(),u=h("a"),u.textContent=E,this.h()},l(p){e=m(p,"DIV",{id:!0});var T=C(e);r=m(T,"NAV",{class:!0});var j=C(r);t=m(j,"H1",{class:!0,["data-svelte-h"]:!0}),k(t)!=="svelte-d8usye"&&(t.textContent=s),n=x(j),i=m(j,"DIV",{class:!0});var H=C(i);c=m(H,"A",{class:!0,href:!0,["data-svelte-h"]:!0}),k(c)!=="svelte-ceo0wu"&&(c.textContent=w),d=x(H),v=m(H,"A",{class:!0,href:!0,["data-svelte-h"]:!0}),k(v)!=="svelte-1q2jfoq"&&(v.textContent=f),o=x(H),u=m(H,"A",{class:!0,href:!0,["data-svelte-h"]:!0}),k(u)!=="svelte-mejwjc"&&(u.textContent=E),H.forEach(g),j.forEach(g),T.forEach(g),this.h()},h(){A(t,"class","dark:text-white font-semibold"),A(c,"class","dark:text-white font-semibold"),A(c,"href","#home"),A(v,"class","dark:text-white font-semibold"),A(v,"href","#projects"),A(u,"class","dark:text-white font-semibold"),A(u,"href","#contact"),A(i,"class","flex gap-normal"),A(r,"class","fixed top-0 w-full flex justify-between bg-white dark:bg-primary p-normal shadow-md dark:shadow-dark"),A(e,"id","header")},m(p,T){$(p,e,T),l(e,r),l(r,t),l(r,n),l(r,i),l(i,c),l(i,d),l(i,v),l(i,o),l(i,u),P||(Ee=[rt(c,"click",at(it)),rt(v,"click",at(it)),rt(u,"click",at(it))],P=!0)},p:D,i:D,o:D,d(p){p&&g(e),P=!1,Xt(Ee)}}}function it({target:a}){const e=a.getAttribute("href");if(!e)return;const r=document.querySelector(e);r&&r.scrollIntoView({behavior:"smooth"})}class ln extends q{constructor(e){super(),O(this,e,null,an,F,{})}}function An(a){let e,r='<h1 class="h1">Jonathan Small</h1> <p class="p">I am a web developer.</p>';return{c(){e=h("div"),e.innerHTML=r,this.h()},l(t){e=m(t,"DIV",{class:!0,id:!0,["data-svelte-h"]:!0}),k(e)!=="svelte-1jr46iu"&&(e.innerHTML=r),this.h()},h(){A(e,"class","h-screen flex flex-col justify-center items-center p-normal dark:text-white"),A(e,"id","home")},m(t,s){$(t,e,s)},p:D,i:D,o:D,d(t){t&&g(e)}}}class on extends q{constructor(e){super(),O(this,e,null,An,F,{})}}function cn(a){let e,r='<h1 class="h1">Contact</h1> <a href="mailto:jonmsmall1030@gmail.com">jonmsmall1030@gmail.com</a>';return{c(){e=h("div"),e.innerHTML=r,this.h()},l(t){e=m(t,"DIV",{class:!0,id:!0,["data-svelte-h"]:!0}),k(e)!=="svelte-qfb5mk"&&(e.innerHTML=r),this.h()},h(){A(e,"class","h-screen flex flex-col justify-center items-center p-normal dark:text-white"),A(e,"id","contact")},m(t,s){$(t,e,s)},p:D,i:D,o:D,d(t){t&&g(e)}}}class fn extends q{constructor(e){super(),O(this,e,null,cn,F,{})}}function un(a){let e,r,t,s,n,i,c,w,d,v;return t=new ln({}),n=new on({}),c=new rn({}),d=new fn({}),{c(){e=h("meta"),r=B(),b(t.$$.fragment),s=B(),b(n.$$.fragment),i=B(),b(c.$$.fragment),w=B(),b(d.$$.fragment),this.h()},l(f){const o=Nt("svelte-1k0v6jy",document.head);e=m(o,"META",{name:!0,content:!0}),o.forEach(g),r=x(f),Q(t.$$.fragment,f),s=x(f),Q(n.$$.fragment,f),i=x(f),Q(c.$$.fragment,f),w=x(f),Q(d.$$.fragment,f),this.h()},h(){document.title="Jonathan Small",A(e,"name","description"),A(e,"content","Svelte demo app")},m(f,o){l(document.head,e),$(f,r,o),L(t,f,o),$(f,s,o),L(n,f,o),$(f,i,o),L(c,f,o),$(f,w,o),L(d,f,o),v=!0},p:D,i(f){v||(_(t.$$.fragment,f),_(n.$$.fragment,f),_(c.$$.fragment,f),_(d.$$.fragment,f),v=!0)},o(f){M(t.$$.fragment,f),M(n.$$.fragment,f),M(c.$$.fragment,f),M(d.$$.fragment,f),v=!1},d(f){f&&(g(r),g(s),g(i),g(w)),g(e),J(t,f),J(n,f),J(c,f),J(d,f)}}}class vn extends q{constructor(e){super(),O(this,e,null,un,F,{})}}export{vn as component,dn as universal};