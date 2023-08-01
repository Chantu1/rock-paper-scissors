import{s as Y,c as q,f as H,u as Z,g as K,d as ee,h as ne,i as G,j as se,n as X,r as ue}from"../chunks/scheduler.935561cc.js";import{S as N,i as P,y as Ae,e as W,z as oe,j as I,f as v,A as y,a as Q,x as d,d as M,t as _,B as me,r as L,u as b,v as J,w as T,g as E,s as p,m as ge,h as B,c as k,n as he,C as S,k as h,o as de,D as V,E as U,F as ve}from"../chunks/index.d2d01981.js";/* empty css                       */function re(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function z(i,e){const s={},n={},r={$$scope:1};let t=i.length;for(;t--;){const l=i[t],A=e[t];if(A){for(const g in l)g in A||(n[g]=1);for(const g in A)r[g]||(s[g]=A[g],r[g]=1);i[t]=A}else for(const g in l)r[g]=1}for(const l in n)l in s||(s[l]=void 0);return s}function fe(i){return typeof i=="object"&&i!==null?i:{}}const we=!0,Oe=Object.freeze(Object.defineProperty({__proto__:null,prerender:we},Symbol.toStringTag,{value:"Module"})),Ee=""+new URL("../assets/library.3a0b5e6a.png",import.meta.url).href,Be=""+new URL("../assets/minesweeper.75d8f083.png",import.meta.url).href,xe=""+new URL("../assets/chess.2e1b33c8.png",import.meta.url).href,Ce="data:image/png;base64,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",ie={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function le(i,e,s){const n=i.slice();return n[10]=e[s][0],n[11]=e[s][1],n}function R(i){let e,s=[i[11]],n={};for(let r=0;r<s.length;r+=1)n=H(n,s[r]);return{c(){e=Ae(i[10]),this.h()},l(r){e=oe(r,i[10],{}),I(e).forEach(v),this.h()},h(){y(e,n)},m(r,t){Q(r,e,t)},p(r,t){y(e,n=z(s,[t&32&&r[11]]))},d(r){r&&v(e)}}}function ae(i){let e=i[10],s,n=i[10]&&R(i);return{c(){n&&n.c(),s=W()},l(r){n&&n.l(r),s=W()},m(r,t){n&&n.m(r,t),Q(r,s,t)},p(r,t){r[10]?e?Y(e,r[10])?(n.d(1),n=R(r),e=r[10],n.c(),n.m(s.parentNode,s)):n.p(r,t):(n=R(r),e=r[10],n.c(),n.m(s.parentNode,s)):e&&(n.d(1),n=null,e=r[10])},d(r){r&&v(s),n&&n.d(r)}}}function Ie(i){let e,s,n,r,t,l=re(i[5]),A=[];for(let a=0;a<l.length;a+=1)A[a]=ae(le(i,l,a));const g=i[9].default,o=q(g,i,i[8],null);let m=[ie,i[6],{width:i[2]},{height:i[2]},{stroke:i[1]},{"stroke-width":n=i[4]?Number(i[3])*24/Number(i[2]):i[3]},{class:r=`lucide-icon lucide lucide-${i[0]} ${i[7].class??""}`}],f={};for(let a=0;a<m.length;a+=1)f=H(f,m[a]);return{c(){e=Ae("svg");for(let a=0;a<A.length;a+=1)A[a].c();s=W(),o&&o.c(),this.h()},l(a){e=oe(a,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var c=I(e);for(let u=0;u<A.length;u+=1)A[u].l(c);s=W(),o&&o.l(c),c.forEach(v),this.h()},h(){y(e,f)},m(a,c){Q(a,e,c);for(let u=0;u<A.length;u+=1)A[u]&&A[u].m(e,null);d(e,s),o&&o.m(e,null),t=!0},p(a,[c]){if(c&32){l=re(a[5]);let u;for(u=0;u<l.length;u+=1){const x=le(a,l,u);A[u]?A[u].p(x,c):(A[u]=ae(x),A[u].c(),A[u].m(e,s))}for(;u<A.length;u+=1)A[u].d(1);A.length=l.length}o&&o.p&&(!t||c&256)&&Z(o,g,a,a[8],t?ee(g,a[8],c,null):K(a[8]),null),y(e,f=z(m,[ie,c&64&&a[6],(!t||c&4)&&{width:a[2]},(!t||c&4)&&{height:a[2]},(!t||c&2)&&{stroke:a[1]},(!t||c&28&&n!==(n=a[4]?Number(a[3])*24/Number(a[2]):a[3]))&&{"stroke-width":n},(!t||c&129&&r!==(r=`lucide-icon lucide lucide-${a[0]} ${a[7].class??""}`))&&{class:r}]))},i(a){t||(M(o,a),t=!0)},o(a){_(o,a),t=!1},d(a){a&&v(e),me(A,a),o&&o.d(a)}}}function Me(i,e,s){const n=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let r=ne(e,n),{$$slots:t={},$$scope:l}=e,{name:A}=e,{color:g="currentColor"}=e,{size:o=24}=e,{strokeWidth:m=2}=e,{absoluteStrokeWidth:f=!1}=e,{iconNode:a}=e;return i.$$set=c=>{s(7,e=H(H({},e),G(c))),s(6,r=ne(e,n)),"name"in c&&s(0,A=c.name),"color"in c&&s(1,g=c.color),"size"in c&&s(2,o=c.size),"strokeWidth"in c&&s(3,m=c.strokeWidth),"absoluteStrokeWidth"in c&&s(4,f=c.absoluteStrokeWidth),"iconNode"in c&&s(5,a=c.iconNode),"$$scope"in c&&s(8,l=c.$$scope)},e=G(e),[A,g,o,m,f,a,r,e,l,t]}class _e extends N{constructor(e){super(),P(this,e,Me,Ie,Y,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const ce=_e;function pe(i){let e;const s=i[2].default,n=q(s,i,i[3],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,t){n&&n.m(r,t),e=!0},p(r,t){n&&n.p&&(!e||t&8)&&Z(n,s,r,r[3],e?ee(s,r[3],t,null):K(r[3]),null)},i(r){e||(M(n,r),e=!0)},o(r){_(n,r),e=!1},d(r){n&&n.d(r)}}}function ke(i){let e,s;const n=[{name:"external-link"},i[1],{iconNode:i[0]}];let r={$$slots:{default:[pe]},$$scope:{ctx:i}};for(let t=0;t<n.length;t+=1)r=H(r,n[t]);return e=new ce({props:r}),{c(){L(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,l){J(e,t,l),s=!0},p(t,[l]){const A=l&3?z(n,[n[0],l&2&&fe(t[1]),l&1&&{iconNode:t[0]}]):{};l&8&&(A.$$scope={dirty:l,ctx:t}),e.$set(A)},i(t){s||(M(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Qe(i,e,s){let{$$slots:n={},$$scope:r}=e;const t=[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}],["polyline",{points:"15 3 21 3 21 9"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3"}]];return i.$$set=l=>{s(1,e=H(H({},e),G(l))),"$$scope"in l&&s(3,r=l.$$scope)},e=G(e),[t,e,n,r]}class Le extends N{constructor(e){super(),P(this,e,Qe,ke,Y,{})}}const be=Le;function Je(i){let e;const s=i[2].default,n=q(s,i,i[3],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,t){n&&n.m(r,t),e=!0},p(r,t){n&&n.p&&(!e||t&8)&&Z(n,s,r,r[3],e?ee(s,r[3],t,null):K(r[3]),null)},i(r){e||(M(n,r),e=!0)},o(r){_(n,r),e=!1},d(r){n&&n.d(r)}}}function Te(i){let e,s;const n=[{name:"github"},i[1],{iconNode:i[0]}];let r={$$slots:{default:[Je]},$$scope:{ctx:i}};for(let t=0;t<n.length;t+=1)r=H(r,n[t]);return e=new ce({props:r}),{c(){L(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,l){J(e,t,l),s=!0},p(t,[l]){const A=l&3?z(n,[n[0],l&2&&fe(t[1]),l&1&&{iconNode:t[0]}]):{};l&8&&(A.$$scope={dirty:l,ctx:t}),e.$set(A)},i(t){s||(M(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function je(i,e,s){let{$$slots:n={},$$scope:r}=e;const t=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];return i.$$set=l=>{s(1,e=H(H({},e),G(l))),"$$scope"in l&&s(3,r=l.$$scope)},e=G(e),[t,e,n,r]}class He extends N{constructor(e){super(),P(this,e,je,Te,Y,{})}}const Ye=He;function De(i){let e,s,n,r,t,l,A,g,o,m,f="Preview",a,c,u,x;return u=new be({}),{c(){e=E("div"),s=E("img"),r=p(),t=E("div"),l=E("p"),A=ge(i[2]),g=p(),o=E("a"),m=E("span"),m.textContent=f,a=p(),c=E("span"),L(u.$$.fragment),this.h()},l(w){e=B(w,"DIV",{class:!0});var C=I(e);s=B(C,"IMG",{class:!0,src:!0,alt:!0}),r=k(C),t=B(C,"DIV",{class:!0});var D=I(t);l=B(D,"P",{class:!0});var F=I(l);A=he(F,i[2]),F.forEach(v),g=k(D),o=B(D,"A",{class:!0,href:!0,target:!0});var j=I(o);m=B(j,"SPAN",{class:!0,["data-svelte-h"]:!0}),S(m)!=="svelte-1ssk4dl"&&(m.textContent=f),a=k(j),c=B(j,"SPAN",{});var te=I(c);b(u.$$.fragment,te),te.forEach(v),j.forEach(v),D.forEach(v),C.forEach(v),this.h()},h(){h(s,"class","object-cover w-full h-full transition duration-300 transform group-hover:scale-150 group-hover:opacity-0"),se(s.src,n=i[0])||h(s,"src",n),h(s,"alt",""),h(l,"class","text-black text-xl"),h(m,"class","font-bold text-lg"),h(o,"class","btn variant-filled-primary"),h(o,"href",i[1]),h(o,"target","_blank"),h(t,"class","flex flex-col gap-normal p-normal text-center bg-white absolute inset-0 opacity-0 group-hover:opacity-100 bg-darkPurple justify-center items-center transition ease-in duration-300"),h(e,"class","flex-1 min-w-project max-h-96 relative overflow-hidden rounded-md group text-white dark:text-black shadow-sm transition duration-300 ease-in hover:shadow-lg")},m(w,C){Q(w,e,C),d(e,s),d(e,r),d(e,t),d(t,l),d(l,A),d(t,g),d(t,o),d(o,m),d(o,a),d(o,c),J(u,c,null),x=!0},p(w,[C]){(!x||C&1&&!se(s.src,n=w[0]))&&h(s,"src",n),(!x||C&4)&&de(A,w[2]),(!x||C&2)&&h(o,"href",w[1])},i(w){x||(M(u.$$.fragment,w),x=!0)},o(w){_(u.$$.fragment,w),x=!1},d(w){w&&v(e),T(u)}}}function Xe(i,e,s){let{image:n}=e,{href:r}=e,{description:t}=e;return i.$$set=l=>{"image"in l&&s(0,n=l.image),"href"in l&&s(1,r=l.href),"description"in l&&s(2,t=l.description)},[n,r,t]}class $ extends N{constructor(e){super(),P(this,e,Xe,De,Y,{image:0,href:1,description:2})}}function Ne(i){let e,s,n='<h1 class="h1 font-bold">Projects</h1> <p>Here is a few of the projects I have worked on.</p>',r,t,l,A,g,o,m,f,a,c;return l=new $({props:{image:Ee,href:"https://library-17792.web.app/",description:"A place to store your book information."}}),g=new $({props:{image:Be,href:"https://thechantu.github.io/minesweeper/",description:"A recreation of minesweeper."}}),m=new $({props:{image:xe,href:"https://thechantu.github.io/chess/",description:"A recreation of chess."}}),a=new $({props:{image:Ce,href:"https://thechantu.github.io/tictactoe/",description:"A recreation of Tic Tac Toe."}}),{c(){e=E("div"),s=E("div"),s.innerHTML=n,r=p(),t=E("div"),L(l.$$.fragment),A=p(),L(g.$$.fragment),o=p(),L(m.$$.fragment),f=p(),L(a.$$.fragment),this.h()},l(u){e=B(u,"DIV",{class:!0,id:!0});var x=I(e);s=B(x,"DIV",{class:!0,["data-svelte-h"]:!0}),S(s)!=="svelte-7mbzhd"&&(s.innerHTML=n),r=k(x),t=B(x,"DIV",{class:!0});var w=I(t);b(l.$$.fragment,w),A=k(w),b(g.$$.fragment,w),o=k(w),b(m.$$.fragment,w),f=k(w),b(a.$$.fragment,w),w.forEach(v),x.forEach(v),this.h()},h(){h(s,"class","flex flex-col gap-normal justify-center items-center"),h(t,"class","flex flex-wrap gap-normal w-full"),h(e,"class","h-screen flex flex-col justify-center items-center p-normal gap-normal dark:text-white"),h(e,"id","projects")},m(u,x){Q(u,e,x),d(e,s),d(e,r),d(e,t),J(l,t,null),d(t,A),J(g,t,null),d(t,o),J(m,t,null),d(t,f),J(a,t,null),c=!0},p:X,i(u){c||(M(l.$$.fragment,u),M(g.$$.fragment,u),M(m.$$.fragment,u),M(a.$$.fragment,u),c=!0)},o(u){_(l.$$.fragment,u),_(g.$$.fragment,u),_(m.$$.fragment,u),_(a.$$.fragment,u),c=!1},d(u){u&&v(e),T(l),T(g),T(m),T(a)}}}class Pe extends N{constructor(e){super(),P(this,e,null,Ne,Y,{})}}function Se(i){let e,s,n,r="Jonathan",t,l,A,g="Home",o,m,f="Projects",a,c,u="Contact",x,w;return{c(){e=E("div"),s=E("nav"),n=E("h1"),n.textContent=r,t=p(),l=E("div"),A=E("a"),A.textContent=g,o=p(),m=E("a"),m.textContent=f,a=p(),c=E("a"),c.textContent=u,this.h()},l(C){e=B(C,"DIV",{id:!0});var D=I(e);s=B(D,"NAV",{class:!0});var F=I(s);n=B(F,"H1",{class:!0,["data-svelte-h"]:!0}),S(n)!=="svelte-d8usye"&&(n.textContent=r),t=k(F),l=B(F,"DIV",{class:!0});var j=I(l);A=B(j,"A",{class:!0,href:!0,["data-svelte-h"]:!0}),S(A)!=="svelte-ceo0wu"&&(A.textContent=g),o=k(j),m=B(j,"A",{class:!0,href:!0,["data-svelte-h"]:!0}),S(m)!=="svelte-1q2jfoq"&&(m.textContent=f),a=k(j),c=B(j,"A",{class:!0,href:!0,["data-svelte-h"]:!0}),S(c)!=="svelte-mejwjc"&&(c.textContent=u),j.forEach(v),F.forEach(v),D.forEach(v),this.h()},h(){h(n,"class","dark:text-white font-semibold"),h(A,"class","dark:text-white font-semibold"),h(A,"href","#home"),h(m,"class","dark:text-white font-semibold"),h(m,"href","#projects"),h(c,"class","dark:text-white font-semibold"),h(c,"href","#contact"),h(l,"class","flex gap-normal"),h(s,"class","fixed top-0 w-full flex justify-between variant-filled-surface dark:bg-primary p-normal shadow-md dark:shadow-dark z-50"),h(e,"id","header")},m(C,D){Q(C,e,D),d(e,s),d(s,n),d(s,t),d(s,l),d(l,A),d(l,o),d(l,m),d(l,a),d(l,c),x||(w=[V(A,"click",U(O)),V(m,"click",U(O)),V(c,"click",U(O))],x=!0)},p:X,i:X,o:X,d(C){C&&v(e),x=!1,ue(w)}}}function O({target:i}){const e=i.getAttribute("href");if(!e)return;const s=document.querySelector(e);s&&s.scrollIntoView({behavior:"smooth"})}class Fe extends N{constructor(e){super(),P(this,e,null,Se,Y,{})}}function Ge(i){let e,s='<h1 class="h1 font-bold">Jonathan Small</h1> <p class="p">I am a web developer.</p>';return{c(){e=E("div"),e.innerHTML=s,this.h()},l(n){e=B(n,"DIV",{class:!0,id:!0,["data-svelte-h"]:!0}),S(e)!=="svelte-1fwf1o7"&&(e.innerHTML=s),this.h()},h(){h(e,"class","h-screen flex flex-col gap-normal justify-center items-center p-normal dark:text-white"),h(e,"id","home")},m(n,r){Q(n,e,r)},p:X,i:X,o:X,d(n){n&&v(e)}}}class $e extends N{constructor(e){super(),P(this,e,null,Ge,Y,{})}}function We(i){let e,s,n='<h1 class="h1 font-bold">Contact</h1> <p>Here are some ways you can find me.</p>',r,t,l,A,g;return A=new Ye({}),{c(){e=E("div"),s=E("div"),s.innerHTML=n,r=p(),t=E("a"),l=E("span"),L(A.$$.fragment),this.h()},l(o){e=B(o,"DIV",{class:!0,id:!0});var m=I(e);s=B(m,"DIV",{class:!0,["data-svelte-h"]:!0}),S(s)!=="svelte-ln8696"&&(s.innerHTML=n),r=k(m),t=B(m,"A",{href:!0,target:!0,class:!0});var f=I(t);l=B(f,"SPAN",{});var a=I(l);b(A.$$.fragment,a),a.forEach(v),f.forEach(v),m.forEach(v),this.h()},h(){h(s,"class","flex flex-col gap-normal justify-center items-center"),h(t,"href","https://github.com/theChantu"),h(t,"target","_blank"),h(t,"class","btn variant-filled-primary"),h(e,"class","h-screen flex flex-col gap-normal justify-center items-center p-normal dark:text-white"),h(e,"id","contact")},m(o,m){Q(o,e,m),d(e,s),d(e,r),d(e,t),d(t,l),J(A,l,null),g=!0},p:X,i(o){g||(M(A.$$.fragment,o),g=!0)},o(o){_(A.$$.fragment,o),g=!1},d(o){o&&v(e),T(A)}}}class ye extends N{constructor(e){super(),P(this,e,null,We,Y,{})}}function ze(i){let e,s,n,r,t,l,A,g,o,m;return n=new Fe({}),t=new $e({}),A=new Pe({}),o=new ye({}),{c(){e=E("meta"),s=p(),L(n.$$.fragment),r=p(),L(t.$$.fragment),l=p(),L(A.$$.fragment),g=p(),L(o.$$.fragment),this.h()},l(f){const a=ve("svelte-15tazls",document.head);e=B(a,"META",{name:!0,content:!0}),a.forEach(v),s=k(f),b(n.$$.fragment,f),r=k(f),b(t.$$.fragment,f),l=k(f),b(A.$$.fragment,f),g=k(f),b(o.$$.fragment,f),this.h()},h(){document.title="Jonathan Small",h(e,"name","description"),h(e,"content","A portfolio")},m(f,a){d(document.head,e),Q(f,s,a),J(n,f,a),Q(f,r,a),J(t,f,a),Q(f,l,a),J(A,f,a),Q(f,g,a),J(o,f,a),m=!0},p:X,i(f){m||(M(n.$$.fragment,f),M(t.$$.fragment,f),M(A.$$.fragment,f),M(o.$$.fragment,f),m=!0)},o(f){_(n.$$.fragment,f),_(t.$$.fragment,f),_(A.$$.fragment,f),_(o.$$.fragment,f),m=!1},d(f){f&&(v(s),v(r),v(l),v(g)),v(e),T(n,f),T(t,f),T(A,f),T(o,f)}}}class qe extends N{constructor(e){super(),P(this,e,null,ze,Y,{})}}export{qe as component,Oe as universal};
