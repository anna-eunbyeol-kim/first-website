import{S as ft,i as mt,s as dt,k as b,a as I,q as yt,l as k,m as G,c as C,r as wt,h,n as l,Y as Q,b as Y,H as m,V as et,u as jt,B as ut,X as x,W as F,Z as $t,w as N,x as P,y as A,f as p,t as w,z as O,_ as Tt,D as Bt,e as gt,G as Vt,g as bt,d as kt,$ as Yt,a0 as It,a1 as Dt,a2 as Ut,a3 as qt,a4 as Kt}from"../../chunks/index-5d8d6c9a.js";import{X as Rt,x as zt,m as pt,O as Xt,z as Ft}from"../../chunks/runtime.esm-94fc32a6.js";import{f as Ct,a as Jt}from"../../chunks/index-66d551d7.js";import{c as Nt}from"../../chunks/index-8e940819.js";import{p as Pt,a as lt,l as At,b as Wt}from"../../chunks/stores-5f130c1e.js";import{b as U}from"../../chunks/paths-b4419565.js";import{T as vt,H as Zt}from"../../chunks/Home-ab42be00.js";import{L as Qt}from"../../chunks/Landing-81b4ece6.js";import{S as xt}from"../../chunks/Strategy-5d34f88e.js";import{S as te}from"../../chunks/Skills-31827944.js";import{C as ee}from"../../chunks/Contact-d4d9a913.js";function Ot(a){let t,r;return{c(){t=b("img"),this.h()},l(e){t=k(e,"IMG",{src:!0,alt:!0,width:!0,class:!0}),this.h()},h(){F(t.src,r=a[1])||l(t,"src",r),l(t,"alt",a[0]),l(t,"width","30"),l(t,"class","svelte-t9raf6")},m(e,n){Y(e,t,n)},p(e,n){n&2&&!F(t.src,r=e[1])&&l(t,"src",r),n&1&&l(t,"alt",e[0])},d(e){e&&h(t)}}}function re(a){let t,r,e,n=a[4](`navbar.${a[0]}`)+"",c,d,g,o=a[1]&&Ot(a);return{c(){t=b("button"),o&&o.c(),r=I(),e=b("span"),c=yt(n),this.h()},l(i){t=k(i,"BUTTON",{class:!0});var s=G(t);o&&o.l(s),r=C(s),e=k(s,"SPAN",{class:!0});var f=G(e);c=wt(f,n),f.forEach(h),s.forEach(h),this.h()},h(){l(e,"class","svelte-t9raf6"),l(t,"class","svelte-t9raf6"),Q(t,"active",a[3]==a[0]),Q(t,"bottom",a[1]!=null),Q(t,"primary",a[2]==="primary"),Q(t,"secondary",a[2]==="secondary")},m(i,s){Y(i,t,s),o&&o.m(t,null),m(t,r),m(t,e),m(e,c),d||(g=et(t,"click",a[5]),d=!0)},p(i,[s]){i[1]?o?o.p(i,s):(o=Ot(i),o.c(),o.m(t,r)):o&&(o.d(1),o=null),s&17&&n!==(n=i[4](`navbar.${i[0]}`)+"")&&jt(c,n),s&9&&Q(t,"active",i[3]==i[0]),s&2&&Q(t,"bottom",i[1]!=null),s&4&&Q(t,"primary",i[2]==="primary"),s&4&&Q(t,"secondary",i[2]==="secondary")},i:ut,o:ut,d(i){i&&h(t),o&&o.d(),d=!1,g()}}}function ne(a,t,r){let e,n,c;x(a,Pt,s=>r(6,e=s)),x(a,lt,s=>r(3,n=s)),x(a,Rt,s=>r(4,c=s));let{keyword:d}=t,{src:g}=t,{cat:o}=t;const i=()=>{$t(lt,n=d,n),$t(Pt,e=null,e)};return a.$$set=s=>{"keyword"in s&&r(0,d=s.keyword),"src"in s&&r(1,g=s.src),"cat"in s&&r(2,o=s.cat)},[d,g,o,n,c,i]}class K extends ft{constructor(t){super(),mt(this,t,ne,re,dt,{keyword:0,src:1,cat:2})}}function se(a){let t,r,e,n,c,d,g,o,i,s;return e=new K({props:{keyword:"Home",src:U+"/svg/home.svg",cat:ht}}),c=new K({props:{keyword:"Products",src:U+"/svg/strategy.svg",cat:ht}}),g=new K({props:{keyword:"My Skills",src:U+"/svg/skills.svg",cat:ht}}),i=new K({props:{keyword:"Contact Me",src:U+"/svg/contact.svg",cat:ht}}),{c(){t=b("nav"),r=b("div"),N(e.$$.fragment),n=I(),N(c.$$.fragment),d=I(),N(g.$$.fragment),o=I(),N(i.$$.fragment),this.h()},l(f){t=k(f,"NAV",{class:!0});var _=G(t);r=k(_,"DIV",{class:!0});var M=G(r);P(e.$$.fragment,M),n=C(M),P(c.$$.fragment,M),d=C(M),P(g.$$.fragment,M),o=C(M),P(i.$$.fragment,M),M.forEach(h),_.forEach(h),this.h()},h(){l(r,"class","icons svelte-sllkai"),l(t,"class","svelte-sllkai")},m(f,_){Y(f,t,_),m(t,r),A(e,r,null),m(r,n),A(c,r,null),m(r,d),A(g,r,null),m(r,o),A(i,r,null),s=!0},p:ut,i(f){s||(p(e.$$.fragment,f),p(c.$$.fragment,f),p(g.$$.fragment,f),p(i.$$.fragment,f),s=!0)},o(f){w(e.$$.fragment,f),w(c.$$.fragment,f),w(g.$$.fragment,f),w(i.$$.fragment,f),s=!1},d(f){f&&h(t),O(e),O(c),O(g),O(i)}}}const ht=!1;class ae extends ft{constructor(t){super(),mt(this,t,null,se,dt,{})}}function le(a){let t,r,e;return{c(){t=b("input"),this.h()},l(n){t=k(n,"INPUT",{type:!0}),this.h()},h(){l(t,"type","checkbox")},m(n,c){Y(n,t,c),Tt(t,a[0]),r||(e=[et(t,"change",a[1]),et(t,"change",a[2])],r=!0)},p(n,[c]){c&1&&Tt(t,n[0])},i:ut,o:ut,d(n){n&&h(t),r=!1,Bt(e)}}}function ie(a,t,r){let{checked:e=!0}=t;const n=()=>{r(0,e=!(e??!1))};function c(){e=this.value,r(0,e)}return a.$$set=d=>{"checked"in d&&r(0,e=d.checked)},[e,n,c]}class oe extends ft{constructor(t){super(),mt(this,t,ie,le,dt,{checked:0})}}function Ht(a){let t,r;return{c(){t=b("style"),r=yt(`:root {
				--bg-dark: #e4e4e4;
				--bg-light: white;
				--bg-light-hover: #f2f2f2;
				--text: #121212;
				--text-secondary: #353535;

				--gradient-1: #8fbcbb;
				--gradient-2: #88c0d0;
				--gradient-3: #81a1c1;
				--gradient-4: #5e81ac;
				--gradient-5: #325f96;
			}`)},l(e){t=k(e,"STYLE",{});var n=G(t);r=wt(n,`:root {
				--bg-dark: #e4e4e4;
				--bg-light: white;
				--bg-light-hover: #f2f2f2;
				--text: #121212;
				--text-secondary: #353535;

				--gradient-1: #8fbcbb;
				--gradient-2: #88c0d0;
				--gradient-3: #81a1c1;
				--gradient-4: #5e81ac;
				--gradient-5: #325f96;
			}`),n.forEach(h)},m(e,n){Y(e,t,n),m(t,r)},d(e){e&&h(t)}}}function Lt(a){let t,r,e,n,c,d,g,o,i,s,f,_,M,j,E,V;return d=new K({props:{keyword:"Home",src:tt,cat:_t}}),o=new K({props:{keyword:"Products",src:tt,cat:_t}}),s=new K({props:{keyword:"My Skills",src:tt,cat:_t}}),_=new K({props:{keyword:"Contact Me",src:tt,cat:_t}}),{c(){t=b("aside"),r=b("button"),e=b("img"),c=I(),N(d.$$.fragment),g=I(),N(o.$$.fragment),i=I(),N(s.$$.fragment),f=I(),N(_.$$.fragment),this.h()},l(T){t=k(T,"ASIDE",{id:!0,class:!0});var $=G(t);r=k($,"BUTTON",{class:!0});var H=G(r);e=k(H,"IMG",{src:!0,alt:!0,class:!0}),H.forEach(h),c=C($),P(d.$$.fragment,$),g=C($),P(o.$$.fragment,$),i=C($),P(s.$$.fragment,$),f=C($),P(_.$$.fragment,$),$.forEach(h),this.h()},h(){F(e.src,n=U+"/svg/close.svg")||l(e,"src",n),l(e,"alt","Close"),l(e,"class","svelte-1nmmouh"),l(r,"class","close svelte-1nmmouh"),l(t,"id","sidenav"),l(t,"class","svelte-1nmmouh")},m(T,$){Y(T,t,$),m(t,r),m(r,e),m(t,c),A(d,t,null),m(t,g),A(o,t,null),m(t,i),A(s,t,null),m(t,f),A(_,t,null),j=!0,E||(V=et(r,"click",a[6]),E=!0)},p(T,$){a=T},i(T){j||(p(d.$$.fragment,T),p(o.$$.fragment,T),p(s.$$.fragment,T),p(_.$$.fragment,T),Yt(()=>{M||(M=It(t,Ct,{x:500,duration:300,easing:Nt},!0)),M.run(1)}),j=!0)},o(T){w(d.$$.fragment,T),w(o.$$.fragment,T),w(s.$$.fragment,T),w(_.$$.fragment,T),M||(M=It(t,Ct,{x:500,duration:300,easing:Nt},!1)),M.run(0),j=!1},d(T){T&&h(t),O(d),O(o),O(s),O(_),T&&M&&M.end(),E=!1,V()}}}function Gt(a){let t,r,e,n=a[5]("navbar.config")+"",c,d,g,o,i,s,f,_,M,j,E,V,T,$,H,it,rt,B,D,at,R,Z,z,J,W,nt;function ot(y){a[11](y)}let ct={};return a[0]!==void 0&&(ct.checked=a[0]),B=new oe({props:ct}),Dt.push(()=>Ut(B,"checked",ot)),{c(){t=b("div"),r=b("header"),e=b("h2"),c=yt(n),d=I(),g=b("button"),o=b("img"),s=I(),f=b("p"),_=b("img"),j=I(),E=b("img"),T=I(),$=b("p"),H=b("img"),rt=I(),N(B.$$.fragment),at=I(),R=b("img"),this.h()},l(y){t=k(y,"DIV",{class:!0});var v=G(t);r=k(v,"HEADER",{class:!0});var S=G(r);e=k(S,"H2",{class:!0});var u=G(e);c=wt(u,n),u.forEach(h),d=C(S),g=k(S,"BUTTON",{id:!0,class:!0});var L=G(g);o=k(L,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),L.forEach(h),S.forEach(h),s=C(v),f=k(v,"P",{class:!0});var st=G(f);_=k(st,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),j=C(st),E=k(st,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),st.forEach(h),T=C(v),$=k(v,"P",{class:!0});var X=G($);H=k(X,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),rt=C(X),P(B.$$.fragment,X),at=C(X),R=k(X,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),X.forEach(h),v.forEach(h),this.h()},h(){l(e,"class","svelte-1nmmouh"),F(o.src,i=U+"/svg/close.svg")||l(o,"src",i),l(o,"alt","Close"),l(o,"width","22"),l(o,"height","22"),l(o,"class","svelte-1nmmouh"),l(g,"id","close"),l(g,"class","svelte-1nmmouh"),l(r,"class","svelte-1nmmouh"),F(_.src,M=U+"/svg/night.svg")||l(_,"src",M),l(_,"alt","Switch to Dark Theme"),l(_,"width","30"),l(_,"height","30"),l(_,"class","svelte-1nmmouh"),F(E.src,V=U+"/svg/day.svg")||l(E,"src",V),l(E,"alt","Switch to Light Theme"),l(E,"width","30"),l(E,"height","30"),l(E,"class","svelte-1nmmouh"),l(f,"class","svelte-1nmmouh"),F(H.src,it=U+"/images/en.png")||l(H,"src",it),l(H,"alt","Switch to English"),l(H,"width","30"),l(H,"height","20"),l(H,"class","svelte-1nmmouh"),F(R.src,Z=U+"/images/es.png")||l(R,"src",Z),l(R,"alt","Cambiar a español"),l(R,"width","30"),l(R,"height","20"),l(R,"class","svelte-1nmmouh"),l($,"class","svelte-1nmmouh"),l(t,"class","modal svelte-1nmmouh")},m(y,v){Y(y,t,v),m(t,r),m(r,e),m(e,c),m(r,d),m(r,g),m(g,o),m(t,s),m(t,f),m(f,_),m(f,j),m(f,E),m(t,T),m(t,$),m($,H),m($,rt),A(B,$,null),m($,at),m($,R),J=!0,W||(nt=et(g,"click",a[10]),W=!0)},p(y,v){(!J||v&32)&&n!==(n=y[5]("navbar.config")+"")&&jt(c,n);const S={};!D&&v&1&&(D=!0,S.checked=y[0],qt(()=>D=!1)),B.$set(S)},i(y){J||(p(B.$$.fragment,y),z||Yt(()=>{z=Kt(t,Jt,{duration:300}),z.start()}),J=!0)},o(y){w(B.$$.fragment,y),J=!1},d(y){y&&h(t),O(B),W=!1,nt()}}}function ce(a){let t,r,e,n,c,d,g,o,i,s,f,_,M,j,E,V,T,$,H,it,rt,B,D,at,R,Z,z,J,W,nt,ot,ct,y=a[4]&&Ht();s=new K({props:{keyword:"Home",src:tt,cat:!1}}),_=new K({props:{keyword:"Products",src:tt,cat:!1}}),j=new K({props:{keyword:"My Skills",src:tt,cat:!1}}),V=new K({props:{keyword:"Contact Me",src:tt,cat:!1}});let v=a[3]&&Lt(a);z=new ae({});let S=a[2]&&Gt(a);return{c(){y&&y.c(),t=gt(),r=I(),e=b("nav"),n=b("div"),c=b("button"),d=b("img"),o=I(),i=b("div"),N(s.$$.fragment),f=I(),N(_.$$.fragment),M=I(),N(j.$$.fragment),E=I(),N(V.$$.fragment),T=I(),$=b("button"),H=b("img"),rt=I(),B=b("button"),D=b("img"),R=I(),v&&v.c(),Z=I(),N(z.$$.fragment),J=I(),S&&S.c(),W=gt(),this.h()},l(u){const L=Vt("svelte-8tr3zd",document.head);y&&y.l(L),t=gt(),L.forEach(h),r=C(u),e=k(u,"NAV",{class:!0});var st=G(e);n=k(st,"DIV",{class:!0});var X=G(n);c=k(X,"BUTTON",{class:!0});var St=G(c);d=k(St,"IMG",{src:!0,alt:!0,height:!0,class:!0}),St.forEach(h),o=C(X),i=k(X,"DIV",{class:!0});var q=G(i);P(s.$$.fragment,q),f=C(q),P(_.$$.fragment,q),M=C(q),P(j.$$.fragment,q),E=C(q),P(V.$$.fragment,q),T=C(q),$=k(q,"BUTTON",{id:!0,class:!0});var Et=G($);H=k(Et,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),Et.forEach(h),rt=C(q),B=k(q,"BUTTON",{class:!0});var Mt=G(B);D=k(Mt,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),Mt.forEach(h),q.forEach(h),X.forEach(h),st.forEach(h),R=C(u),v&&v.l(u),Z=C(u),P(z.$$.fragment,u),J=C(u),S&&S.l(u),W=gt(),this.h()},h(){F(d.src,g=U+"/images/logo.png")||l(d,"src",g),l(d,"alt","Anna Kim"),l(d,"height","50"),l(d,"class","svelte-1nmmouh"),l(c,"class","svelte-1nmmouh"),F(H.src,it=U+"/svg/settings.svg")||l(H,"src",it),l(H,"alt","Settings"),l(H,"width","20"),l(H,"height","20"),l(H,"class","svelte-1nmmouh"),l($,"id","settings"),l($,"class","svelte-1nmmouh"),F(D.src,at=U+"/svg/hamburger.svg")||l(D,"src",at),l(D,"alt","Menu"),l(D,"width","30"),l(D,"height","18"),l(D,"class","svelte-1nmmouh"),l(B,"class","menu svelte-1nmmouh"),l(i,"class","links svelte-1nmmouh"),l(n,"class","container svelte-1nmmouh"),l(e,"class","navbar svelte-1nmmouh")},m(u,L){y&&y.m(document.head,null),m(document.head,t),Y(u,r,L),Y(u,e,L),m(e,n),m(n,c),m(c,d),m(n,o),m(n,i),A(s,i,null),m(i,f),A(_,i,null),m(i,M),A(j,i,null),m(i,E),A(V,i,null),m(i,T),m(i,$),m($,H),m(i,rt),m(i,B),m(B,D),Y(u,R,L),v&&v.m(u,L),Y(u,Z,L),A(z,u,L),Y(u,J,L),S&&S.m(u,L),Y(u,W,L),nt=!0,ot||(ct=[et(c,"click",a[9]),et($,"click",a[7]),et(B,"click",a[6])],ot=!0)},p(u,[L]){u[4]?y||(y=Ht(),y.c(),y.m(t.parentNode,t)):y&&(y.d(1),y=null),u[3]?v?(v.p(u,L),L&8&&p(v,1)):(v=Lt(u),v.c(),p(v,1),v.m(Z.parentNode,Z)):v&&(bt(),w(v,1,1,()=>{v=null}),kt()),u[2]?S?(S.p(u,L),L&4&&p(S,1)):(S=Gt(u),S.c(),p(S,1),S.m(W.parentNode,W)):S&&(bt(),w(S,1,1,()=>{S=null}),kt())},i(u){nt||(p(s.$$.fragment,u),p(_.$$.fragment,u),p(j.$$.fragment,u),p(V.$$.fragment,u),p(v),p(z.$$.fragment,u),p(S),nt=!0)},o(u){w(s.$$.fragment,u),w(_.$$.fragment,u),w(j.$$.fragment,u),w(V.$$.fragment,u),w(v),w(z.$$.fragment,u),w(S),nt=!1},d(u){y&&y.d(u),h(t),u&&h(r),u&&h(e),O(s),O(_),O(j),O(V),u&&h(R),v&&v.d(u),u&&h(Z),O(z,u),u&&h(J),S&&S.d(u),u&&h(W),ot=!1,Bt(ct)}}}const tt=null,_t="primary";function ue(a,t,r){let e,n,c,d;x(a,At,E=>r(8,e=E)),x(a,lt,E=>r(1,n=E)),x(a,Wt,E=>r(4,c=E)),x(a,Rt,E=>r(5,d=E));let g=!1,o=!1,i=!1;const s=()=>{i===!1?r(3,i=!0):r(3,i=!1)},f=()=>{g===!1?r(2,g=!0):r(2,g=!1)},_=()=>$t(lt,n="Landing",n),M=()=>r(2,g=!1);function j(E){o=E,r(0,o)}return a.$$.update=()=>{a.$$.dirty&2&&(lt.set(n),r(3,i=!1)),a.$$.dirty&1&&$t(At,e=o?"es":"en",e),a.$$.dirty&256&&zt.set(e)},[o,n,g,i,c,d,s,f,e,_,M,j]}class fe extends ft{constructor(t){super(),mt(this,t,ue,ce,dt,{})}}const me={navbar:{Home:"Home",Products:"Products","My Skills":"My Skills","Contact Me":"Contact Me",config:"Configuration"},landing:{titulo:"Hi, I'm Anna Kim",subtitulo:"I'm an amateur front-end web developer and digital design student","call-to-action":"MY PROJECTS","call-to-action-secondary":"MESSAGE ME"},home:{titulo:"My Projects",subtitulo:"Swipe!","call-to-action-secondary":"READ MORE","call-to-action":"SEE LIVE",disabled:"COMING SOON!",contact:"LET'S TALK ABOUT THIS"},strategy:{titulo:"Products & Services",subtitulo:"Find out which architecture best suits your needs or",boton:"consult me"},skills:{titulo:"My Skills",subtitulo:"Click on them to learn more!"},"contact-me":{titulo:"Contact Me",subtitulo:"Send me a message here or email me at ",nombre:"Your name",email:"Your email",mensaje:"Your message here...",titulo_redes:"Also find me at...",enviar:"SUBMIT",mensajes:{mandando:"Sending your message...",exito:"Your message was sent successfully",error:"Looks like your device is offline"}}},de={navbar:{Home:"Home",Products:"Products","My Skills":"My Skills","Contact Me":"Contact Me",config:"Configuration"},landing:{titulo:"Hi, I'm Anna Kim",subtitulo:"I'm an amateur front-end web developer and digital design student","call-to-action":"MY PROJECTS","call-to-action-secondary":"MESSAGE ME"},home:{titulo:"My Projects",subtitulo:"Swipe!","call-to-action-secondary":"READ MORE","call-to-action":"SEE LIVE",disabled:"COMING SOON!",contact:"LET'S TALK ABOUT THIS"},strategy:{titulo:"Products & Services",subtitulo:"Find out which architecture best suits your needs or",boton:"consult me"},skills:{titulo:"My Skills",subtitulo:"Click on them to learn more!"},"contact-me":{titulo:"Contact Me",subtitulo:"Send me a message here or email me at ",nombre:"Your name",email:"Your email",mensaje:"Your message here...",titulo_redes:"Also find me at...",enviar:"SUBMIT",mensajes:{mandando:"Sending your message...",exito:"Your message was sent successfully",error:"Looks like your device is offline"}}},ge={navbar:{Home:"Inicio",Products:"Productos","My Skills":"Especialidades","Contact Me":"Contáctame",config:"Configuración"},landing:{titulo:"Hola, soy Anna Kim",subtitulo:"Soy un desarrollador web front-end amateur y estudiante de ingeniería eléctrica ","call-to-action":"MIS PROYECTOS","call-to-action-secondary":"CONTÁCTAME"},home:{titulo:"Mis Proyectos",subtitulo:"Desliza para ver más!","call-to-action-secondary":"LEER MÁS","call-to-action":"EN VIVO",disabled:"PRÓXIMAMENTE",contact:"PREGÚNTAME"},strategy:{titulo:"Productos & Servicios",subtitulo:"Encuentra que arquitectura satisface mejor tus necesidades o",boton:"consúltame"},skills:{titulo:"Mis Especialidades",subtitulo:"Clickéalas para leer más!"},"contact-me":{titulo:"Contáctame",subtitulo:"Mándame un mensaje o un email a ",nombre:"Tu nombre",email:"Tu email",mensaje:"Tu mensaje aquí...",titulo_redes:"Encuéntrame en...",enviar:"ENVIAR",mensajes:{mandando:"Enviando tu mensaje...",exito:"Tu mensaje fue enviado exitosamente",error:"Parece que tu dispositivo está desconectado"}}};function he(a){let t,r;return t=new vt({props:{$$slots:{default:[be]},$$scope:{ctx:a}}}),{c(){N(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,n){A(t,e,n),r=!0},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function _e(a){let t,r;return t=new vt({props:{$$slots:{default:[ke]},$$scope:{ctx:a}}}),{c(){N(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,n){A(t,e,n),r=!0},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function $e(a){let t,r;return t=new vt({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),{c(){N(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,n){A(t,e,n),r=!0},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function ve(a){let t,r;return t=new vt({props:{$$slots:{default:[we]},$$scope:{ctx:a}}}),{c(){N(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,n){A(t,e,n),r=!0},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function pe(a){let t,r;return t=new Qt({}),{c(){N(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,n){A(t,e,n),r=!0},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function be(a){let t,r;return t=new ee({}),{c(){N(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,n){A(t,e,n),r=!0},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function ke(a){let t,r;return t=new te({}),{c(){N(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,n){A(t,e,n),r=!0},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function ye(a){let t,r;return t=new xt({}),{c(){N(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,n){A(t,e,n),r=!0},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function we(a){let t,r;return t=new Zt({}),{c(){N(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,n){A(t,e,n),r=!0},i(e){r||(p(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function Se(a){let t,r,e,n,c,d;t=new fe({});const g=[pe,ve,$e,_e,he],o=[];function i(s,f){return s[0]==="Landing"?0:s[0]==="Home"?1:s[0]==="Products"?2:s[0]==="My Skills"?3:s[0]==="Contact Me"?4:-1}return~(n=i(a))&&(c=o[n]=g[n](a)),{c(){N(t.$$.fragment),r=I(),e=b("main"),c&&c.c()},l(s){P(t.$$.fragment,s),r=C(s),e=k(s,"MAIN",{});var f=G(e);c&&c.l(f),f.forEach(h)},m(s,f){A(t,s,f),Y(s,r,f),Y(s,e,f),~n&&o[n].m(e,null),d=!0},p(s,[f]){let _=n;n=i(s),n!==_&&(c&&(bt(),w(o[_],1,1,()=>{o[_]=null}),kt()),~n?(c=o[n],c||(c=o[n]=g[n](s),c.c()),p(c,1),c.m(e,null)):c=null)},i(s){d||(p(t.$$.fragment,s),p(c),d=!0)},o(s){w(t.$$.fragment,s),w(c),d=!1},d(s){O(t,s),s&&h(r),s&&h(e),~n&&o[n].d()}}}function Ee(a,t,r){let e;return x(a,lt,n=>r(0,e=n)),pt("kr",me),pt("en",de),pt("es",ge),Xt({fallbackLocale:"en",initialLocale:Ft()}),[e]}class je extends ft{constructor(t){super(),mt(this,t,Ee,Se,dt,{})}}export{je as default};
