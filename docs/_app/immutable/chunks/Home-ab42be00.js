import{S as J,i as K,s as Y,F as he,k,l as w,m as y,h as d,n as u,p as Q,b as I,I as pe,J as ge,K as ve,f as L,$ as be,a4 as ke,t as z,o as we,B as R,a5 as je,X as V,q as B,a as U,a6 as ye,r as A,c as C,a7 as Ee,a8 as Se,H as _,V as $,u as G,Z as x,W as F,Y as Te,D as He,e as ce,g as Ue,d as Ce,w as te,x as se,y as ae,z as le,M as Ie,P as Me,a9 as Ve}from"./index-5d8d6c9a.js";import{X as oe}from"./runtime.esm-94fc32a6.js";import{b as D}from"./paths-b4419565.js";import{p as X,l as qe,a as ue}from"./stores-5f130c1e.js";import{f as Ne}from"./index-66d551d7.js";import{e as Oe}from"./index-8e940819.js";function Pe(t){let e,a,s;const r=t[3].default,o=he(r,t,t[2],null);return{c(){e=k("div"),o&&o.c(),this.h()},l(l){e=w(l,"DIV",{class:!0,style:!0});var n=y(e);o&&o.l(n),n.forEach(d),this.h()},h(){u(e,"class","wrapper"),Q(e,"padding-bottom","5em")},m(l,n){I(l,e,n),o&&o.m(e,null),s=!0},p(l,[n]){t=l,o&&o.p&&(!s||n&4)&&pe(o,r,t,t[2],s?ve(r,t[2],n,null):ge(t[2]),null)},i(l){s||(L(o,l),a||be(()=>{a=ke(e,Ne,{x:-t[0],y:-t[1],duration:500,easing:Oe}),a.start()}),s=!0)},o(l){z(o,l),s=!1},d(l){l&&d(e),o&&o.d(l)}}}function Be(t,e,a){let{$$slots:s={},$$scope:r}=e,{x:o=100}=e,{y:l=0}=e;return we(()=>window.scrollTo(0,0)),t.$$set=n=>{"x"in n&&a(0,o=n.x),"y"in n&&a(1,l=n.y),"$$scope"in n&&a(2,r=n.$$scope)},[o,l,r,s]}class Ae extends J{constructor(e){super(),K(this,e,Be,Pe,Y,{x:0,y:1})}}function me(t,e,a){const s=t.slice();return s[5]=e[a],s[7]=a,s}function De(t){let e,a;return{c(){e=k("img"),this.h()},l(s){e=w(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){F(e.src,a=D+"/svg/new_tab.svg")||u(e,"src",a),u(e,"alt","Open in new tab"),u(e,"class","svelte-1pojs2s")},m(s,r){I(s,e,r)},p:R,d(s){s&&d(e)}}}function fe(t){let e,a,s=t[5].titulo+"",r,o,l,n,c,m=(t[3][t[7]]?t[1]("home.disabled"):`${t[1]("home.call-to-action")}`)+"",h,i,p,j,E=t[1]("home.call-to-action-secondary")+"",f,q,T,N,H=!t[3][t[7]]&&De();function W(){return t[4](t[7])}return{c(){e=k("section"),a=k("h3"),r=B(s),o=U(),l=k("nav"),n=k("a"),c=new ye(!1),h=U(),H&&H.c(),p=U(),j=k("button"),f=B(E),q=U(),this.h()},l(S){e=w(S,"SECTION",{style:!0,class:!0});var v=y(e);a=w(v,"H3",{class:!0});var O=y(a);r=A(O,s),O.forEach(d),o=C(v),l=w(v,"NAV",{class:!0});var M=y(l);n=w(M,"A",{href:!0,class:!0});var P=y(n);c=Ee(P,!1),h=C(P),H&&H.l(P),P.forEach(d),p=C(M),j=w(M,"BUTTON",{class:!0});var b=y(j);f=A(b,E),b.forEach(d),M.forEach(d),q=C(v),v.forEach(d),this.h()},h(){u(a,"class","svelte-1pojs2s"),c.a=h,u(n,"href",i=t[5].liveUrl.mobile),u(n,"class",Se(t[3][t[7]])+" svelte-1pojs2s"),u(j,"class","transparente svelte-1pojs2s"),u(l,"class","svelte-1pojs2s"),Q(e,"background-image","linear-gradient(rgba(0,0,0, 0.6),rgba(0,0,0, 0.6)), url('"+t[5].src+"')"),u(e,"class","svelte-1pojs2s")},m(S,v){I(S,e,v),_(e,a),_(a,r),_(e,o),_(e,l),_(l,n),c.m(m,n),_(n,h),H&&H.m(n,null),_(l,p),_(l,j),_(j,f),_(e,q),T||(N=$(j,"click",W),T=!0)},p(S,v){t=S,v&1&&s!==(s=t[5].titulo+"")&&G(r,s),v&2&&m!==(m=(t[3][t[7]]?t[1]("home.disabled"):`${t[1]("home.call-to-action")}`)+"")&&c.p(m),t[3][t[7]]||H.p(t,v),v&1&&i!==(i=t[5].liveUrl.mobile)&&u(n,"href",i),v&2&&E!==(E=t[1]("home.call-to-action-secondary")+"")&&G(f,E),v&1&&Q(e,"background-image","linear-gradient(rgba(0,0,0, 0.6),rgba(0,0,0, 0.6)), url('"+t[5].src+"')")},d(S){S&&d(e),H&&H.d(),T=!1,N()}}}function Le(t){let e,a=t[0],s=[];for(let r=0;r<a.length;r+=1)s[r]=fe(me(t,a,r));return{c(){e=k("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=w(r,"DIV",{class:!0});var o=y(e);for(let l=0;l<s.length;l+=1)s[l].l(o);o.forEach(d),this.h()},h(){u(e,"class","svelte-1pojs2s")},m(r,o){I(r,e,o);for(let l=0;l<s.length;l+=1)s[l].m(e,null)},p(r,[o]){if(o&15){a=r[0];let l;for(l=0;l<a.length;l+=1){const n=me(r,a,l);s[l]?s[l].p(n,o):(s[l]=fe(n),s[l].c(),s[l].m(e,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=a.length}},i:R,o:R,d(r){r&&d(e),je(s,r)}}}function ze(t,e,a){let s,r;V(t,oe,c=>a(1,s=c)),V(t,X,c=>a(2,r=c));let{projects:o}=e,l=o.map(c=>c.liveUrl.desktop&&c.liveUrl.mobile?"":"disabled");const n=c=>x(X,r=c,r);return t.$$set=c=>{"projects"in c&&a(0,o=c.projects)},[o,s,r,l,n]}class Ge extends J{constructor(e){super(),K(this,e,ze,Le,Y,{projects:0})}}function We(t){let e,a,s,r,o,l,n,c,m,h,i,p,j,E,f=(t[6]==="en"?t[3]:t[0])+"",q,T,N=(t[9]?t[7]("home.disabled"):`${t[7]("home.call-to-action")} <img src="${D}/svg/new_tab.svg" alt="Open in new tab" />`)+"",H,W,S,v=t[7]("home.contact")+"",O,M,P;return{c(){e=k("section"),a=k("h1"),s=B(t[1]),r=U(),o=k("h3"),l=k("button"),n=k("img"),m=B(`
			Back`),h=U(),i=k("img"),j=U(),E=k("p"),q=U(),T=k("a"),W=U(),S=k("button"),O=B(v),this.h()},l(b){e=w(b,"SECTION",{class:!0});var g=y(e);a=w(g,"H1",{class:!0});var re=y(a);s=A(re,t[1]),re.forEach(d),r=C(g),o=w(g,"H3",{class:!0});var ne=y(o);l=w(ne,"BUTTON",{class:!0});var Z=y(l);n=w(Z,"IMG",{src:!0,alt:!0,width:!0,class:!0}),m=A(Z,`
			Back`),Z.forEach(d),ne.forEach(d),h=C(g),i=w(g,"IMG",{id:!0,src:!0,alt:!0,class:!0}),j=C(g),E=w(g,"P",{class:!0});var _e=y(E);_e.forEach(d),q=C(g),T=w(g,"A",{href:!0,class:!0});var de=y(T);de.forEach(d),W=C(g),S=w(g,"BUTTON",{class:!0});var ie=y(S);O=A(ie,v),ie.forEach(d),g.forEach(d),this.h()},h(){u(a,"class","svelte-19dvc10"),F(n.src,c=D+"/svg/back.svg")||u(n,"src",c),u(n,"alt","Back"),u(n,"width","15"),u(n,"class","svelte-19dvc10"),u(l,"class","svelte-19dvc10"),u(o,"class","svelte-19dvc10"),u(i,"id","desktop"),F(i.src,p=t[2])||u(i,"src",p),u(i,"alt",t[1]),u(i,"class","svelte-19dvc10"),u(E,"class","svelte-19dvc10"),u(T,"href",H=t[4].mobile),u(T,"class","svelte-19dvc10"),Te(T,"disabled",t[9]),u(S,"class","transparente svelte-19dvc10"),u(e,"class","svelte-19dvc10")},m(b,g){I(b,e,g),_(e,a),_(a,s),_(e,r),_(e,o),_(o,l),_(l,n),_(l,m),_(e,h),_(e,i),_(e,j),_(e,E),E.innerHTML=f,_(e,q),_(e,T),T.innerHTML=N,_(e,W),_(e,S),_(S,O),M||(P=[$(l,"click",t[10]),$(S,"click",t[11])],M=!0)},p(b,[g]){g&2&&G(s,b[1]),g&4&&!F(i.src,p=b[2])&&u(i,"src",p),g&2&&u(i,"alt",b[1]),g&73&&f!==(f=(b[6]==="en"?b[3]:b[0])+"")&&(E.innerHTML=f),g&128&&N!==(N=(b[9]?b[7]("home.disabled"):`${b[7]("home.call-to-action")} <img src="${D}/svg/new_tab.svg" alt="Open in new tab" />`)+"")&&(T.innerHTML=N),g&16&&H!==(H=b[4].mobile)&&u(T,"href",H),g&128&&v!==(v=b[7]("home.contact")+"")&&G(O,v)},i:R,o:R,d(b){b&&d(e),M=!1,He(P)}}}function Re(t,e,a){let s,r,o,l;V(t,X,f=>a(5,s=f)),V(t,qe,f=>a(6,r=f)),V(t,oe,f=>a(7,o=f)),V(t,ue,f=>a(8,l=f));let{titulo:n}=e,{src_dsk:c}=e,{contenido:m}=e,{contenido_en:h}=e,{liveUrl:i}=e;m=m;const p=!(i.desktop&&i.mobile),j=()=>x(X,s=null,s),E=()=>x(ue,l="Contact Me",l);return t.$$set=f=>{"titulo"in f&&a(1,n=f.titulo),"src_dsk"in f&&a(2,c=f.src_dsk),"contenido"in f&&a(0,m=f.contenido),"contenido_en"in f&&a(3,h=f.contenido_en),"liveUrl"in f&&a(4,i=f.liveUrl)},[m,n,c,h,i,s,r,o,l,p,j,E]}class Xe extends J{constructor(e){super(),K(this,e,Re,We,Y,{titulo:1,src_dsk:2,contenido:0,contenido_en:3,liveUrl:4})}}const ee=[{titulo:"Blog Demo",src:`${D}/images/blog_mobile.png`,src_dsk:`${D}/images/blog.png`,contenido:"Esta página web es una prueba de concepto de la arquitectura de aplicaciones de una sola página usando           Django y Sapper. Se adhiere a las especificaciones de <a href='https://github.com/gothinkster/realworld'>Real World App </a>           es decir, permite al usuario crear una cuenta, escribir artículos, escribir comentarios a esos artículos, navegar por los artículos de otros usuarios, y muchos más.           La idea principal detrás de este proyecto fue practicar el uso de ciertas tecnologías y los detalles de implementación de ciertas funcionalidades.<br><br>            El código está disponible públicamente así puedo recibir retroalimentación y crear una referencia para aquellos que quieran implementar algo similar. ",contenido_en:"This website is a proof of concept of the single page app architecture using Django and Sapper.           It adheres to the <a href='https://github.com/gothinkster/realworld'>Real World App </a> specifications, that is,           it allows the user to create an account, write articles, write comments to said articles, browse other users articles, and many more. <br><br>           The main idea behind this project was to practice the use of certain technologies and the implementation details of certain features,           while making the code available publicly to receive feedback and to create a reference for anyone trying to implement something similar.",liveUrl:{desktop:"https://annakimstorm.herokuapp.com/",mobile:"https://annakimstorm.herokuapp.com/"}},{titulo:"Pipenv tasks",src:`${D}/images/pipenv_mobile.png`,src_dsk:"{base}/images/pipenv.png",contenido:"Esta es una extensión de VSCode que creé para mejorar mi flujo de trabajo con Python.           Permite al usuario ejecutar comandos comunes como tareas de VSCode en vez de escribirlos manualmente cada vez.           Aunque la creé principalmente para mi uso personal, tiene más de 5000 descargas en VSCode Marketplace",contenido_en:"This is a VSCode extension I made to improve my Python workflow.            It allows the user to execute common commands as VSCode tasks instead of writing them manually every time.            Although I made it mainly for personal use, it already has more than 5000 downloads in the VSCode Marketplace.",liveUrl:{desktop:"https://marketplace.visualstudio.com/items?itemName=annakimstorm.pipenv-scripts",mobile:"https://marketplace.visualstudio.com/items?itemName=annakimstorm.pipenv-scripts"}}];function Fe(t){let e,a;return e=new Ae({props:{y:-Ze,x:0,$$slots:{default:[Ke]},$$scope:{ctx:t}}}),{c(){te(e.$$.fragment)},l(s){se(e.$$.fragment,s)},m(s,r){ae(e,s,r),a=!0},p(s,r){const o={};r&5&&(o.$$scope={dirty:r,ctx:s}),e.$set(o)},i(s){a||(L(e.$$.fragment,s),a=!0)},o(s){z(e.$$.fragment,s),a=!1},d(s){le(e,s)}}}function Je(t){let e,a=t[1]("home.titulo")+"",s,r,o,l=t[1]("home.subtitulo")+"",n,c,m,h;return m=new Ge({props:{projects:ee}}),{c(){e=k("h1"),s=B(a),r=U(),o=k("h6"),n=B(l),c=U(),te(m.$$.fragment),this.h()},l(i){e=w(i,"H1",{});var p=y(e);s=A(p,a),p.forEach(d),r=C(i),o=w(i,"H6",{class:!0});var j=y(o);n=A(j,l),j.forEach(d),c=C(i),se(m.$$.fragment,i),this.h()},h(){u(o,"class","svelte-1golkmt")},m(i,p){I(i,e,p),_(e,s),I(i,r,p),I(i,o,p),_(o,n),I(i,c,p),ae(m,i,p),h=!0},p(i,p){(!h||p&2)&&a!==(a=i[1]("home.titulo")+"")&&G(s,a),(!h||p&2)&&l!==(l=i[1]("home.subtitulo")+"")&&G(n,l)},i(i){h||(L(m.$$.fragment,i),h=!0)},o(i){z(m.$$.fragment,i),h=!1},d(i){i&&d(e),i&&d(r),i&&d(o),i&&d(c),le(m,i)}}}function Ke(t){let e,a;const s=[ee[t[0]]];let r={};for(let o=0;o<s.length;o+=1)r=Ie(r,s[o]);return e=new Xe({props:r}),{c(){te(e.$$.fragment)},l(o){se(e.$$.fragment,o)},m(o,l){ae(e,o,l),a=!0},p(o,l){const n=l&1?Me(s,[Ve(ee[o[0]])]):{};e.$set(n)},i(o){a||(L(e.$$.fragment,o),a=!0)},o(o){z(e.$$.fragment,o),a=!1},d(o){le(e,o)}}}function Ye(t){let e,a,s,r;const o=[Je,Fe],l=[];function n(c,m){return c[0]===null?0:1}return e=n(t),a=l[e]=o[e](t),{c(){a.c(),s=ce()},l(c){a.l(c),s=ce()},m(c,m){l[e].m(c,m),I(c,s,m),r=!0},p(c,[m]){let h=e;e=n(c),e===h?l[e].p(c,m):(Ue(),z(l[h],1,1,()=>{l[h]=null}),Ce(),a=l[e],a?a.p(c,m):(a=l[e]=o[e](c),a.c()),L(a,1),a.m(s.parentNode,s))},i(c){r||(L(a),r=!0)},o(c){z(a),r=!1},d(c){l[e].d(c),c&&d(s)}}}let Ze=100;function Qe(t,e,a){let s,r;return V(t,X,o=>a(0,s=o)),V(t,oe,o=>a(1,r=o)),[s,r]}class lt extends J{constructor(e){super(),K(this,e,Qe,Ye,Y,{})}}export{lt as H,Ae as T};
