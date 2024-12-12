import{s as t2,u as a2,n as $,v as p2,o as T2,w as Z2,d as F2,b as M2,r as h2,x as S2,y as j2}from"../chunks/scheduler.C-zI-56i.js";import{S as l2,i as s2,e as p,s as H,c as g,a as x,d as v,f as L,o as C,g as j,h as c,y as C2,t as X,b as e2,j as o2,z as O,A as J,n as R,q as f2,l as q,m as d2,B as P2,C as U2,D as g2,E as z2,u as u2,k as v2,v as n2,p as W,w as r2,F as c2,x as i2}from"../chunks/index.uvuoFuUJ.js";import{o as N2,h as R2,s as O2}from"../chunks/index.esm.BKYphGQL.js";function Y(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function D2(n,e,l){const t=n.slice();return t[3]=e[l],t}function B2(n){let e,l,t=n[3].title+"",s,r,u,a,i=n[3].description+"",o,f;return{c(){e=p("div"),l=p("h3"),s=X(t),r=H(),u=p("div"),a=p("p"),o=X(i),f=H(),this.h()},l(D){e=g(D,"DIV",{class:!0});var h=x(e);l=g(h,"H3",{class:!0});var A=x(l);s=e2(A,t),A.forEach(v),r=L(h),u=g(h,"DIV",{class:!0});var Z=x(u);a=g(Z,"P",{class:!0});var _=x(a);o=e2(_,i),_.forEach(v),Z.forEach(v),f=L(h),h.forEach(v),this.h()},h(){C(l,"class","text-2xl md:text-3xl text-primary-200 font-extrabold mb-4"),C(a,"class","text-lg break-keep"),C(u,"class",""),C(e,"class","rounded-xl bg-white/5 p-12 shadow-lg")},m(D,h){j(D,e,h),c(e,l),c(l,s),c(e,r),c(e,u),c(u,a),c(a,o),c(e,f)},p(D,h){h&1&&t!==(t=D[3].title+"")&&o2(s,t),h&1&&i!==(i=D[3].description+"")&&o2(o,i)},d(D){D&&v(e)}}}function $2(n){let e,l,t,s,r,u,a,i=Y(n[0]),o=[];for(let f=0;f<i.length;f+=1)o[f]=B2(D2(n,i,f));return{c(){e=p("section"),l=p("div"),t=p("img"),r=H(),u=p("div");for(let f=0;f<o.length;f+=1)o[f].c();this.h()},l(f){e=g(f,"SECTION",{class:!0});var D=x(e);l=g(D,"DIV",{class:!0});var h=x(l);t=g(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(v),r=L(D),u=g(D,"DIV",{class:!0});var A=x(u);for(let Z=0;Z<o.length;Z+=1)o[Z].l(A);A.forEach(v),D.forEach(v),this.h()},h(){a2(t.src,s=n[2])||C(t,"src",s),C(t,"alt","developer solution"),C(t,"class","object-cover rounded-2xl shadow-lg aspect-video w-full"),C(l,"class","w-full lg:w-1/2 self-center"),C(u,"class","w-full lg:w-1/2 box-border lg:px-12 min-w-80 flex flex-col justify-center space-y-2"),C(e,"class",a="flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0 lg:space-x-6 mb-16 z-20 "+(n[1]?"lg:flex-row-reverse":"")+" max-w-screen-2xl")},m(f,D){j(f,e,D),c(e,l),c(l,t),c(e,r),c(e,u);for(let h=0;h<o.length;h+=1)o[h]&&o[h].m(u,null)},p(f,[D]){if(D&4&&!a2(t.src,s=f[2])&&C(t,"src",s),D&1){i=Y(f[0]);let h;for(h=0;h<i.length;h+=1){const A=D2(f,i,h);o[h]?o[h].p(A,D):(o[h]=B2(A),o[h].c(),o[h].m(u,null))}for(;h<o.length;h+=1)o[h].d(1);o.length=i.length}D&2&&a!==(a="flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0 lg:space-x-6 mb-16 z-20 "+(f[1]?"lg:flex-row-reverse":"")+" max-w-screen-2xl")&&C(e,"class",a)},i:$,o:$,d(f){f&&v(e),C2(o,f)}}}function q2(n,e,l){let{sections:t=[]}=e,{reversed:s=!1}=e,{imagePath:r}=e;return n.$$set=u=>{"sections"in u&&l(0,t=u.sections),"reversed"in u&&l(1,s=u.reversed),"imagePath"in u&&l(2,r=u.imagePath)},[t,s,r]}class G2 extends l2{constructor(e){super(),s2(this,e,q2,$2,t2,{sections:0,reversed:1,imagePath:2})}}function b2(n,e,l){const t=n.slice();return t[6]=e[l].src,t[7]=e[l].type,t}function Q2(n){let e,l;return{c(){e=p("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){a2(e.src,l=n[4])||C(e,"src",l),C(e,"alt","developer solution"),C(e,"class",k2)},m(t,s){j(t,e,s)},p(t,s){s&16&&!a2(e.src,l=t[4])&&C(e,"src",l)},d(t){t&&v(e)}}}function J2(n){let e,l=Y(n[5]),t=[];for(let s=0;s<l.length;s+=1)t[s]=A2(b2(n,l,s));return{c(){e=p("video");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=g(s,"VIDEO",{class:!0,poster:!0});var r=x(e);for(let u=0;u<t.length;u+=1)t[u].l(r);r.forEach(v),this.h()},h(){C(e,"class",k2),C(e,"poster",n[4]),e.autoplay=!0,e.loop=!0,e.muted=!0,e.playsInline=!0},m(s,r){j(s,e,r);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null)},p(s,r){if(r&32){l=Y(s[5]);let u;for(u=0;u<l.length;u+=1){const a=b2(s,l,u);t[u]?t[u].p(a,r):(t[u]=A2(a),t[u].c(),t[u].m(e,null))}for(;u<t.length;u+=1)t[u].d(1);t.length=l.length}r&16&&C(e,"poster",s[4])},d(s){s&&v(e),C2(t,s)}}}function A2(n){let e,l,t;return{c(){e=p("source"),this.h()},l(s){e=g(s,"SOURCE",{type:!0,src:!0}),this.h()},h(){C(e,"type",l=n[7]),a2(e.src,t=n[6])||C(e,"src",t)},m(s,r){j(s,e,r)},p(s,r){r&32&&l!==(l=s[7])&&C(e,"type",l),r&32&&!a2(e.src,t=s[6])&&C(e,"src",t)},d(s){s&&v(e)}}}function K2(n){let e,l,t,s,r,u,a,i,o=n[0]+1+"",f,D,h,A,Z,_,M,F,I;function V(k,T){return k[5].length>0?J2:Q2}let P=V(n),S=P(n);return{c(){e=p("section"),l=p("div"),S.c(),t=H(),s=p("div"),r=p("div"),u=p("div"),a=p("p"),i=X("게임 개발자를 위한 솔루션 0"),f=X(o),D=H(),h=p("h3"),A=X(n[1]),Z=H(),_=p("div"),M=p("p"),F=X(n[2]),this.h()},l(k){e=g(k,"SECTION",{class:!0});var T=x(e);l=g(T,"DIV",{class:!0});var z=x(l);S.l(z),z.forEach(v),t=L(T),s=g(T,"DIV",{class:!0});var G=x(s);r=g(G,"DIV",{class:!0});var N=x(r);u=g(N,"DIV",{class:!0});var E=x(u);a=g(E,"P",{class:!0});var K=x(a);i=e2(K,"게임 개발자를 위한 솔루션 0"),f=e2(K,o),K.forEach(v),D=L(E),h=g(E,"H3",{class:!0});var y=x(h);A=e2(y,n[1]),y.forEach(v),E.forEach(v),Z=L(N),_=g(N,"DIV",{});var B=x(_);M=g(B,"P",{class:!0});var w=x(M);F=e2(w,n[2]),w.forEach(v),B.forEach(v),N.forEach(v),G.forEach(v),T.forEach(v),this.h()},h(){C(l,"class","w-full md:w-1/2 self-center"),C(a,"class","text-lg font-bold text-[#FEC6FC] overflow-visible"),C(h,"class","text-3xl md:text-4xl font-bold"),C(u,"class","mb-10 space-y-2"),C(M,"class","text-lg break-keep"),C(r,"class","self-center"),C(s,"class","w-full md:w-1/2 flex flex-col justify-center box-border p-6 md:px-12 self-center min-w-80 rounded-xl md:rounded-none bg-black/30 md:bg-transparent"),C(e,"class",I="flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 md:space-x-6 mb-16 z-20 "+(n[3]?"md:flex-row-reverse":"")+" max-w-screen-2xl")},m(k,T){j(k,e,T),c(e,l),S.m(l,null),c(e,t),c(e,s),c(s,r),c(r,u),c(u,a),c(a,i),c(a,f),c(u,D),c(u,h),c(h,A),c(r,Z),c(r,_),c(_,M),c(M,F)},p(k,[T]){P===(P=V(k))&&S?S.p(k,T):(S.d(1),S=P(k),S&&(S.c(),S.m(l,null))),T&1&&o!==(o=k[0]+1+"")&&o2(f,o),T&2&&o2(A,k[1]),T&4&&o2(F,k[2]),T&8&&I!==(I="flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 md:space-x-6 mb-16 z-20 "+(k[3]?"md:flex-row-reverse":"")+" max-w-screen-2xl")&&C(e,"class",I)},i:$,o:$,d(k){k&&v(e),S.d()}}}const k2="object-cover rounded-2xl shadow-lg aspect-[5/3] w-full";function Y2(n,e,l){let{i:t}=e,{title:s}=e,{description:r}=e,{reversed:u=!1}=e,{imgSrc:a}=e,{videoSrc:i=[]}=e;return n.$$set=o=>{"i"in o&&l(0,t=o.i),"title"in o&&l(1,s=o.title),"description"in o&&l(2,r=o.description),"reversed"in o&&l(3,u=o.reversed),"imgSrc"in o&&l(4,a=o.imgSrc),"videoSrc"in o&&l(5,i=o.videoSrc)},[t,s,r,u,a,i]}class W2 extends l2{constructor(e){super(),s2(this,e,Y2,K2,t2,{i:0,title:1,description:2,reversed:3,imgSrc:4,videoSrc:5})}}function X2(n){let e,l,t,s='<a href="https://held-mangosteen-e92.notion.site/EasterAd-871c55823e8f4a1abc7f998b73d320c2" target="_blank" rel="noopener noreferer">Terms of Service</a>',r,u,a='<a href="https://held-mangosteen-e92.notion.site/8ccbc962250146f6b45dbf1d9fe7a2b2" target="_blank" rel="noopener noreferer">Privacy Policy</a>',i,o,f,D="Contact Us",h,A,Z="ⓒ 2024 EasterAd. All rights reserved.",_,M;return{c(){e=p("footer"),l=p("ul"),t=p("li"),t.innerHTML=s,r=H(),u=p("li"),u.innerHTML=a,i=H(),o=p("li"),f=p("button"),f.textContent=D,h=H(),A=p("p"),A.textContent=Z,this.h()},l(F){e=g(F,"FOOTER",{class:!0});var I=x(e);l=g(I,"UL",{class:!0});var V=x(l);t=g(V,"LI",{"data-svelte-h":!0}),O(t)!=="svelte-b7q5o2"&&(t.innerHTML=s),r=L(V),u=g(V,"LI",{"data-svelte-h":!0}),O(u)!=="svelte-pvunkz"&&(u.innerHTML=a),i=L(V),o=g(V,"LI",{});var P=x(o);f=g(P,"BUTTON",{class:!0,"data-svelte-h":!0}),O(f)!=="svelte-1r6xsht"&&(f.textContent=D),P.forEach(v),V.forEach(v),h=L(I),A=g(I,"P",{class:!0,"data-svelte-h":!0}),O(A)!=="svelte-3v4x77"&&(A.textContent=Z),I.forEach(v),this.h()},h(){C(f,"class","underline"),C(l,"class","flex w-full justify-between list-unstyled underline self-center"),C(A,"class","text-center"),C(e,"class","bg-black px-4 md:px-44 py-14 space-y-10")},m(F,I){j(F,e,I),c(e,l),c(l,t),c(l,r),c(l,u),c(l,i),c(l,o),c(o,f),c(e,h),c(e,A),_||(M=J(f,"click",n[0]),_=!0)},p:$,i:$,o:$,d(F){F&&v(e),_=!1,M()}}}function e0(n){function e(){N2()}return[e]}class t0 extends l2{constructor(e){super(),s2(this,e,e0,X2,t2,{})}}const l0="data:image/svg+xml,%3csvg%20width='1325'%20height='165'%20viewBox='0%200%201325%20165'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M1241.9%2062.1001H1312.1V100.35H1241.9V62.1001ZM1245.5%20121.05H1324.25V161.1H1193.3V3.6001H1321.32V43.6501H1245.5V121.05Z'%20fill='white'/%3e%3c/g%3e%3cpath%20d='M980.876%20161.1V3.6001H1024.53L1087.53%20106.425H1064.58L1125.78%203.6001H1169.43L1169.88%20161.1H1121.5L1121.05%2076.5001H1128.7L1086.85%20146.925H1063.45L1019.8%2076.5001H1029.25V161.1H980.876Z'%20fill='white'/%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M784.751%20161.1L853.601%203.6001H905.801L974.651%20161.1H919.751L868.901%2028.8001H889.601L838.751%20161.1H784.751ZM825.701%20133.65L839.201%2095.4001H911.651L925.151%20133.65H825.701Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M712.852%20164.7C700.102%20164.7%20688.327%20162.75%20677.527%20158.85C666.877%20154.8%20657.577%20149.1%20649.627%20141.75C641.827%20134.4%20635.752%20125.7%20631.402%20115.65C627.052%20105.6%20624.877%2094.5%20624.877%2082.35C624.877%2070.2%20627.052%2059.1%20631.402%2049.05C635.752%2039%20641.902%2030.3%20649.852%2022.95C657.802%2015.6%20667.177%209.975%20677.977%206.075C688.927%202.025%20700.927%200%20713.977%200C729.577%200%20743.452%202.625%20755.602%207.87499C767.902%2013.125%20778.027%2020.625%20785.977%2030.375L752.002%2060.3C747.052%2054.6%20741.652%2050.325%20735.802%2047.475C730.102%2044.475%20723.727%2042.975%20716.677%2042.975C710.827%2042.975%20705.502%2043.875%20700.702%2045.675C696.052%2047.475%20692.077%2050.1%20688.777%2053.55C685.477%2057%20682.927%2061.125%20681.127%2065.925C679.327%2070.725%20678.427%2076.2%20678.427%2082.35C678.427%2088.2%20679.327%2093.6%20681.127%2098.55C682.927%20103.35%20685.477%20107.475%20688.777%20110.925C692.077%20114.375%20695.977%20117.075%20700.477%20119.025C705.127%20120.825%20710.302%20121.725%20716.002%20121.725C722.002%20121.725%20727.852%20120.75%20733.552%20118.8C739.252%20116.7%20745.327%20113.175%20751.777%20108.225L781.477%20144.675C771.877%20151.125%20760.927%20156.075%20748.627%20159.525C736.327%20162.975%20724.402%20164.7%20712.852%20164.7ZM735.352%20137.925V78.075H781.477V144.675L735.352%20137.925Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M369.846%20161.1L438.696%203.6001H490.896L559.746%20161.1H504.846L453.996%2028.8001H474.696L423.846%20161.1H369.846ZM410.796%20133.65L424.296%2095.4001H496.746L510.246%20133.65H410.796Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M221.198%2062.1001H291.398V100.35H221.198V62.1001ZM224.798%20121.05H303.548V161.1H172.598V3.6001H300.623V43.6501H224.798V121.05Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M0.825012%20161.1V3.6001H84.975C106.725%203.6001%20122.775%207.5001%20133.125%2015.3001C143.475%2022.9501%20148.65%2032.7751%20148.65%2044.7751C148.65%2052.7251%20146.4%2059.8501%20141.9%2066.1501C137.55%2072.3001%20131.175%2077.1751%20122.775%2080.7751C114.375%2084.3751%20104.025%2086.1751%2091.725%2086.1751L96.225%2074.0251C108.525%2074.0251%20119.1%2075.7501%20127.95%2079.2001C136.95%2082.6501%20143.85%2087.6751%20148.65%2094.2751C153.6%20100.725%20156.075%20108.525%20156.075%20117.675C156.075%20131.325%20150.375%20141.975%20138.975%20149.625C127.725%20157.275%20111.225%20161.1%2089.475%20161.1H0.825012ZM53.025%20123.975H84.975C90.825%20123.975%2095.175%20122.925%2098.025%20120.825C101.025%20118.725%20102.525%20115.65%20102.525%20111.6C102.525%20107.55%20101.025%20104.475%2098.025%20102.375C95.175%20100.275%2090.825%2099.2251%2084.975%2099.2251H49.425V64.1251H77.775C83.775%2064.1251%2088.125%2063.1501%2090.825%2061.2001C93.675%2059.1001%2095.1%2056.1751%2095.1%2052.4251C95.1%2048.5251%2093.675%2045.6001%2090.825%2043.6501C88.125%2041.7001%2083.775%2040.7251%2077.775%2040.7251H53.025V123.975Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",s0="data:image/svg+xml,%3csvg%20width='1180'%20height='166'%20viewBox='0%200%201180%20166'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M1028.17%20162V4.5H1104C1118.7%204.5%201131.37%206.9%201142.02%2011.7C1152.82%2016.5%201161.15%2023.4%201167%2032.4C1172.85%2041.25%201175.77%2051.75%201175.77%2063.9C1175.77%2076.05%201172.85%2086.55%201167%2095.4C1161.15%20104.1%201152.82%20110.775%201142.02%20115.425C1131.37%20120.075%201118.7%20122.4%201104%20122.4H1057.65L1081.27%20100.575V162H1028.17ZM1122.45%20162L1083.75%20104.625H1140L1179.15%20162H1122.45ZM1081.27%20106.425L1057.65%2082.35H1100.62C1107.97%2082.35%201113.37%2080.7%201116.82%2077.4C1120.42%2074.1%201122.22%2069.6%201122.22%2063.9C1122.22%2058.2%201120.42%2053.7%201116.82%2050.4C1113.37%2047.1%201107.97%2045.45%201100.62%2045.45H1057.65L1081.27%2021.375V106.425Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M927.632%2063H997.832V101.25H927.632V63ZM931.232%20121.95H1009.98V162H879.032V4.5H1007.06V44.55H931.232V121.95Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M790.032%20165.6C777.282%20165.6%20765.507%20163.65%20754.707%20159.75C744.057%20155.7%20734.757%20150%20726.807%20142.65C719.007%20135.3%20712.932%20126.6%20708.582%20116.55C704.232%20106.5%20702.057%2095.3999%20702.057%2083.2499C702.057%2071.0999%20704.232%2059.9999%20708.582%2049.9499C712.932%2039.8999%20719.082%2031.1999%20727.032%2023.8499C734.982%2016.4999%20744.357%2010.8749%20755.157%206.97491C766.107%202.92491%20778.107%200.899902%20791.157%200.899902C806.757%200.899902%20820.632%203.5249%20832.782%208.77489C845.082%2014.0249%20855.207%2021.5249%20863.157%2031.2749L829.182%2061.1999C824.232%2055.4999%20818.832%2051.2249%20812.982%2048.3749C807.282%2045.3749%20800.907%2043.8749%20793.857%2043.8749C788.007%2043.8749%20782.682%2044.7749%20777.882%2046.5749C773.232%2048.3749%20769.257%2050.9999%20765.957%2054.4499C762.657%2057.8999%20760.107%2062.0249%20758.307%2066.8249C756.507%2071.6249%20755.607%2077.0999%20755.607%2083.2499C755.607%2089.0999%20756.507%2094.4999%20758.307%2099.4499C760.107%20104.25%20762.657%20108.375%20765.957%20111.825C769.257%20115.275%20773.157%20117.975%20777.657%20119.925C782.307%20121.725%20787.482%20122.625%20793.182%20122.625C799.182%20122.625%20805.032%20121.65%20810.732%20119.7C816.432%20117.6%20822.507%20114.075%20828.957%20109.125L858.657%20145.575C849.057%20152.025%20838.107%20156.975%20825.807%20160.425C813.507%20163.875%20801.582%20165.6%20790.032%20165.6ZM812.532%20138.825V78.9749H858.657V145.575L812.532%20138.825Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M529.772%20162V4.5H573.422L653.522%20100.35H633.272V4.5H685.022V162H641.372L561.272%2066.15H581.522V162H529.772Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M333.648%20162L402.498%204.5H454.698L523.548%20162H468.648L417.798%2029.7H438.498L387.648%20162H333.648ZM374.598%20134.55L388.098%2096.3H460.548L474.048%20134.55H374.598Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M274.313%204.5H327.413V162H274.313V4.5ZM225.263%20162H172.163V4.5H225.263V162ZM277.913%20103.95H221.663V60.3H277.913V103.95Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M88.4313%20165.6C75.8313%20165.6%2064.1313%20163.65%2053.3313%20159.75C42.6813%20155.7%2033.3813%20150%2025.4313%20142.65C17.6313%20135.3%2011.5563%20126.6%207.20627%20116.55C2.85627%20106.5%200.681274%2095.3999%200.681274%2083.2499C0.681274%2071.0999%202.85627%2059.9999%207.20627%2049.9499C11.5563%2039.8999%2017.6313%2031.1999%2025.4313%2023.8499C33.3813%2016.4999%2042.6813%2010.8749%2053.3313%206.97491C64.1313%202.92491%2075.8313%200.899902%2088.4313%200.899902C103.881%200.899902%20117.531%203.59991%20129.381%208.99991C141.381%2014.3999%20151.281%2022.1999%20159.081%2032.3999L125.556%2062.3249C120.906%2056.4749%20115.731%2051.9749%20110.031%2048.8249C104.481%2045.5249%2098.1813%2043.8749%2091.1313%2043.8749C85.5813%2043.8749%2080.5563%2044.7749%2076.0563%2046.5749C71.5563%2048.3749%2067.6563%2050.9999%2064.3563%2054.4499C61.2063%2057.8999%2058.7313%2062.0999%2056.9313%2067.0499C55.1313%2071.8499%2054.2313%2077.2499%2054.2313%2083.2499C54.2313%2089.2499%2055.1313%2094.7249%2056.9313%2099.6749C58.7313%20104.475%2061.2063%20108.6%2064.3563%20112.05C67.6563%20115.5%2071.5563%20118.125%2076.0563%20119.925C80.5563%20121.725%2085.5813%20122.625%2091.1313%20122.625C98.1813%20122.625%20104.481%20121.05%20110.031%20117.9C115.731%20114.6%20120.906%20110.025%20125.556%20104.175L159.081%20134.1C151.281%20144.15%20141.381%20151.95%20129.381%20157.5C117.531%20162.9%20103.881%20165.6%2088.4313%20165.6Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",u0="data:image/svg+xml,%3csvg%20width='156'%20height='44'%20viewBox='0%200%20156%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M102.709%2043.8366L121.872%200H136.4L155.563%2043.8366H140.283L126.13%207.01386H131.891L117.738%2043.8366H102.709ZM114.106%2036.1965L117.864%2025.5505H138.029L141.786%2036.1965H114.106Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M61.3359%2016.2822H80.8745V26.9282H61.3359V16.2822ZM62.3379%2032.6896H84.2562V43.8366H47.8092V0H83.4421V11.147H62.3379V32.6896Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M0%2043.8366V0H23.4213C29.4749%200%2033.9421%201.08548%2036.8228%203.25644C39.7035%205.38565%2041.1438%208.12022%2041.1438%2011.4602C41.1438%2013.6729%2040.5176%2015.6559%2039.2651%2017.4094C38.0544%2019.1211%2036.28%2020.478%2033.9421%2021.48C31.6041%2022.4819%2028.7234%2022.9829%2025.3%2022.9829L26.5525%2019.6012C29.9759%2019.6012%2032.9192%2020.0814%2035.3824%2021.0416C37.8874%2022.0018%2039.8078%2023.4004%2041.1438%2025.2374C42.5215%2027.0326%2043.2104%2029.2036%2043.2104%2031.7503C43.2104%2035.5494%2041.6239%2038.5136%2038.451%2040.6428C35.3198%2042.772%2030.7274%2043.8366%2024.6738%2043.8366H0ZM14.5287%2033.5037H23.4213C25.0495%2033.5037%2026.2602%2033.2115%2027.0535%2032.627C27.8884%2032.0425%2028.3059%2031.1866%2028.3059%2030.0594C28.3059%2028.9322%2027.8884%2028.0763%2027.0535%2027.4918C26.2602%2026.9073%2025.0495%2026.6151%2023.4213%2026.6151H13.5267V16.8458H21.4173C23.0873%2016.8458%2024.298%2016.5744%2025.0495%2016.0317C25.8427%2015.4472%2026.2394%2014.6331%2026.2394%2013.5894C26.2394%2012.5039%2025.8427%2011.6898%2025.0495%2011.147C24.298%2010.6043%2023.0873%2010.3329%2021.4173%2010.3329H14.5287V33.5037Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",n0="data:image/svg+xml,%3csvg%20width='195'%20height='47'%20viewBox='0%200%20195%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M171.734%2018.1208H191.273V28.7668H171.734V18.1208ZM172.736%2034.5282H194.655V45.6753H158.208V1.83862H193.841V12.9857H172.736V34.5282Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M99.0845%2045.6753V1.83862H111.233L128.768%2030.4577H122.381L139.414%201.83862H151.563L151.688%2045.6753H138.224L138.099%2022.1287H140.228L128.58%2041.73H122.067L109.918%2022.1287H112.549V45.6753H99.0845Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M44.4977%2045.6753L63.6606%201.83862H78.1893L97.3521%2045.6753H82.072L67.919%208.85249H73.6804L59.5274%2045.6753H44.4977ZM55.8952%2038.0352L59.6526%2027.3891H79.8175L83.5749%2038.0352H55.8952Z'%20fill='white'/%3e%3c/g%3e%3cg%20style='mix-blend-mode:exclusion'%3e%3cpath%20d='M24.4859%2046.6773C20.9372%2046.6773%2017.6599%2046.1345%2014.654%2045.049C11.6898%2043.9218%209.10132%2042.3353%206.88862%2040.2896C4.71766%2038.2439%203.02681%2035.8225%201.81608%2033.0253C0.605353%2030.2281%200%2027.1386%200%2023.757C0%2020.3753%200.605353%2017.2858%201.81608%2014.4886C3.02681%2011.6915%204.73853%209.27%206.95123%207.22429C9.16394%205.17858%2011.7733%203.61299%2014.7792%202.52751C17.8269%201.40028%2021.1668%200.83667%2024.799%200.83667C29.1409%200.83667%2033.0027%201.56728%2036.3844%203.0285C39.8078%204.48972%2042.6259%206.57718%2044.8386%209.29088L35.3824%2017.6198C34.0047%2016.0334%2032.5017%2014.8435%2030.8735%2014.0503C29.287%2013.2153%2027.5127%2012.7978%2025.5505%2012.7978C23.9223%2012.7978%2022.4402%2013.0483%2021.1042%2013.5493C19.81%2014.0503%2018.7036%2014.7809%2017.7851%2015.7411C16.8667%2016.7014%2016.1569%2017.8495%2015.6559%2019.1854C15.155%2020.5214%2014.9045%2022.0452%2014.9045%2023.757C14.9045%2025.3852%2015.155%2026.8882%2015.6559%2028.2659C16.1569%2029.6018%2016.8667%2030.75%2017.7851%2031.7102C18.7036%2032.6704%2019.7891%2033.4219%2021.0416%2033.9646C22.3358%2034.4656%2023.7762%2034.7161%2025.3626%2034.7161C27.0326%2034.7161%2028.6608%2034.4448%2030.2473%2033.902C31.8337%2033.3175%2033.5246%2032.3364%2035.3198%2030.9587L43.5861%2041.1037C40.9142%2042.899%2037.8665%2044.2767%2034.4431%2045.2369C31.0196%2046.1971%2027.7006%2046.6773%2024.4859%2046.6773ZM30.7483%2039.225V22.5671H43.5861V41.1037L30.7483%2039.225Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",r0=""+new URL("../assets/mobile-title-3.YHmS8Q6H.svg",import.meta.url).href,i0=""+new URL("../assets/hero.D1d2HL2y.mp4",import.meta.url).href,a0=""+new URL("../assets/hero.Co2qPE6l.jpg",import.meta.url).href;function o0(n){const e=n-1;return e*e*e+1}function x2(n,{delay:e=0,duration:l=400,easing:t=o0,x:s=0,y:r=0,opacity:u=0}={}){const a=getComputedStyle(n),i=+a.opacity,o=a.transform==="none"?"":a.transform,f=i*(1-u),[D,h]=p2(s),[A,Z]=p2(r);return{delay:e,duration:l,easing:t,css:(_,M)=>`
			transform: ${o} translate(${(1-_)*D}${h}, ${(1-_)*A}${Z});
			opacity: ${i-f*M}`}}function _2(n){let e,l,t,s;return{c(){e=p("div"),this.h()},l(r){e=g(r,"DIV",{class:!0}),x(e).forEach(v),this.h()},h(){C(e,"class","md:hidden relative w-2 h-2 bg-white left-1/2 bottom-8 rounded-full -z-10")},m(r,u){j(r,e,u),s=!0},i(r){s||(r&&F2(()=>{s&&(t&&t.end(1),l=P2(e,x2,{delay:500,duration:1e3,y:80}),l.start())}),s=!0)},o(r){l&&l.invalidate(),r&&(t=U2(e,x2,{delay:500,duration:1e3,y:-80})),s=!1},d(r){r&&v(e),r&&t&&t.end()}}}function C0(n){let e,l,t=`<source type="video/mp4" src="${i0}"/>`,s,r,u=`<div class="mt-auto mb-20 pb-10 px-4 flex flex-col gap-5 md:hidden"><img src="${u0}" alt="BE A" width="${155.56}" height="${43.84}" class="drop-shadow-hero-black"/> <img class="ml-auto drop-shadow-hero-black" src="${n0}" alt="GAME" width="${194.65}" height="${45.84}"/> <img src="${r0}" alt="CHANGER" width="328" height="${45.84}" class="drop-shadow-hero-black"/></div> <div class="hidden md:flex mt-auto mb-20 w-3/5 flex-col gap-10"><img src="${l0}" alt="BE A GAME" width="660px" class="drop-shadow-hero-black"/> <img class="ml-auto drop-shadow-hero-black" src="${s0}" alt="CHANGER" width="550px"/></div>`,a,i=n[1]===!1&&_2();return{c(){e=p("section"),l=p("video"),l.innerHTML=t,s=H(),r=p("div"),r.innerHTML=u,a=H(),i&&i.c(),this.h()},l(o){e=g(o,"SECTION",{class:!0});var f=x(e);l=g(f,"VIDEO",{class:!0,poster:!0,"data-svelte-h":!0}),O(l)!=="svelte-emqic2"&&(l.innerHTML=t),s=L(f),r=g(f,"DIV",{class:!0,"data-svelte-h":!0}),O(r)!=="svelte-7i1pu1"&&(r.innerHTML=u),a=L(f),i&&i.l(f),f.forEach(v),this.h()},h(){C(l,"class","absolute -z-10 w-full h-1/2 md:h-full pt-40 md:pt-24 drop-shadow-hero-primary md:shadow-none object-cover"),l.autoplay=!0,l.loop=!0,l.muted=!0,l.playsInline=!0,C(l,"poster",a0),C(r,"class","h-full flex justify-center"),C(e,"class","h-svh w-full")},m(o,f){j(o,e,f),c(e,l),c(e,s),c(e,r),c(e,a),i&&i.m(e,null),n[2](e)},p(o,[f]){o[1]===!1?i?f&2&&R(i,1):(i=_2(),i.c(),R(i,1),i.m(e,null)):i&&(f2(),q(i,1,1,()=>{i=null}),d2())},i(o){R(i)},o(o){q(i)},d(o){o&&v(e),i&&i.d(),n[2](null)}}}function c0(n,e,l){let t,s,r=!1;const u=()=>{l(1,r=!r),setTimeout(()=>{u()},r?5e3:3e3)};T2(()=>{s=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting?R2():O2()})}),s.observe(t),setTimeout(()=>{u()},1e3)}),Z2(()=>{s==null||s.disconnect(),s=null});function a(i){M2[i?"unshift":"push"](()=>{t=i,l(0,t)})}return[t,r,a]}class f0 extends l2{constructor(e){super(),s2(this,e,c0,C0,t2,{})}}const d0=""+new URL("../assets/logo-dark.CggPkNjr.svg",import.meta.url).href;function h0(n){let e,l,t='<span class="hamburger-inner svelte-jas1sv"></span>',s,r,u;return{c(){e=p("button"),l=p("span"),l.innerHTML=t,this.h()},l(a){e=g(a,"BUTTON",{class:!0,"aria-label":!0});var i=x(e);l=g(i,"SPAN",{class:!0,"data-svelte-h":!0}),O(l)!=="svelte-rb79ji"&&(l.innerHTML=t),i.forEach(v),this.h()},h(){C(l,"class","hamburger-box svelte-jas1sv"),C(e,"class",s="hamburger hamburger--"+n[1]+" svelte-jas1sv"),C(e,"aria-label",n[2]),g2(e,"is-active",n[0])},m(a,i){j(a,e,i),c(e,l),r||(u=[J(e,"click",n[3]),J(e,"click",n[4])],r=!0)},p(a,[i]){i&2&&s!==(s="hamburger hamburger--"+a[1]+" svelte-jas1sv")&&C(e,"class",s),i&4&&C(e,"aria-label",a[2]),i&3&&g2(e,"is-active",a[0])},i:$,o:$,d(a){a&&v(e),r=!1,h2(u)}}}function m0(n,e,l){let{open:t=!1}=e,{type:s="spin"}=e,{ariaLabel:r="Hamburger menu"}=e;function u(i){S2.call(this,n,i)}const a=()=>l(0,t=!t);return n.$$set=i=>{"open"in i&&l(0,t=i.open),"type"in i&&l(1,s=i.type),"ariaLabel"in i&&l(2,r=i.ariaLabel)},[t,s,r,u,a]}class p0 extends l2{constructor(e){super(),s2(this,e,m0,h0,t2,{open:0,type:1,ariaLabel:2})}}function E2(n){let e,l,t,s,r="Developers",u,a,i="Advertisers",o,f;return{c(){e=p("hr"),l=H(),t=p("div"),s=p("a"),s.textContent=r,u=H(),a=p("a"),a.textContent=i,this.h()},l(D){e=g(D,"HR",{}),l=L(D),t=g(D,"DIV",{class:!0});var h=x(t);s=g(h,"A",{class:!0,href:!0,"data-svelte-h":!0}),O(s)!=="svelte-12p8uz9"&&(s.textContent=r),u=L(h),a=g(h,"A",{class:!0,href:!0,"data-svelte-h":!0}),O(a)!=="svelte-l9c2r5"&&(a.textContent=i),h.forEach(v),this.h()},h(){C(s,"class","py-4 text-center text-gray-300 active:bg-white/10 font-['Montserrat']"),C(s,"href","#developers"),C(a,"class","py-4 text-center text-gray-300 active:bg-white/10 font-['Montserrat']"),C(a,"href","#advertisers"),C(t,"class","flex flex-col")},m(D,h){j(D,e,h),j(D,l,h),j(D,t,h),c(t,s),c(t,u),c(t,a),o||(f=[J(s,"click",c2(n[3])),J(a,"click",c2(n[3]))],o=!0)},p:$,d(D){D&&(v(e),v(l),v(t)),o=!1,h2(f)}}}function w2(n){let e,l,t;return{c(){e=p("button"),this.h()},l(s){e=g(s,"BUTTON",{class:!0}),x(e).forEach(v),this.h()},h(){C(e,"class","fixed top-0 left-0 z-20 w-screen h-screen")},m(s,r){j(s,e,r),l||(t=J(e,"click",n[1]),l=!0)},p:$,d(s){s&&v(e),l=!1,t()}}}function g0(n){let e,l,t,s=`<img src="${d0}" alt="Logo" class="w-24 md:w-32 lg:w-40"/>`,r,u,a,i="Developers",o,f,D="Advertisers",h,A,Z,_,M,F,I,V,P,S,k,T,z,G,N;function E(w){n[4](w)}let K={};n[0]!==void 0&&(K.open=n[0]),I=new p0({props:K}),M2.push(()=>z2(I,"open",E));let y=n[0]&&E2(n),B=n[0]&&w2(n);return{c(){e=p("nav"),l=p("div"),t=p("button"),t.innerHTML=s,r=H(),u=p("div"),a=p("a"),a.textContent=i,o=H(),f=p("a"),f.textContent=D,h=H(),A=p("a"),Z=X("Docs"),_=H(),M=p("div"),F=p("div"),V=p("div"),u2(I.$$.fragment),S=H(),y&&y.c(),k=H(),B&&B.c(),T=v2(),this.h()},l(w){e=g(w,"NAV",{class:!0});var d=x(e);l=g(d,"DIV",{class:!0});var b=x(l);t=g(b,"BUTTON",{"data-svelte-h":!0}),O(t)!=="svelte-17uuo4b"&&(t.innerHTML=s),r=L(b),u=g(b,"DIV",{class:!0});var m=x(u);a=g(m,"A",{class:!0,href:!0,"data-svelte-h":!0}),O(a)!=="svelte-16wkqep"&&(a.textContent=i),o=L(m),f=g(m,"A",{class:!0,href:!0,"data-svelte-h":!0}),O(f)!=="svelte-1giwapx"&&(f.textContent=D),h=L(m),A=g(m,"A",{class:!0,href:!0,target:!0,rel:!0});var U=x(A);Z=e2(U,"Docs"),U.forEach(v),m.forEach(v),_=L(b),M=g(b,"DIV",{class:!0});var Q=x(M);F=g(Q,"DIV",{class:!0});var m2=x(F);V=g(m2,"DIV",{style:!0});var I2=x(V);n2(I.$$.fragment,I2),m2.forEach(v),Q.forEach(v),b.forEach(v),S=L(d),y&&y.l(d),d.forEach(v),k=L(w),B&&B.l(w),T=v2(),this.h()},h(){C(a,"class","text-gray-300 font-['Montserrat']"),C(a,"href","#developers"),C(f,"class","text-gray-300 font-['Montserrat']"),C(f,"href","#advertisers"),C(A,"class","text-gray-300 font-['Montserrat']"),C(A,"href",v0),C(A,"target","_blank"),C(A,"rel","noopener noreferer"),C(u,"class","hidden ml-12 md:flex gap-6 lg:gap-12 items-center"),W(V,"display","contents"),W(V,"--color","white"),W(V,"--padding","0px"),W(V,"--layer-width","20px"),W(V,"--layer-height","2px"),W(V,"--layer-spacing","6px"),W(V,"--border-radius","0px"),C(F,"class","md:hidden"),C(M,"class","ml-auto flex gap-4 items-center"),C(l,"class","px-5 py-6 md:px-10 lg:px-20 flex md:h-24"),C(e,"class","bg-black/80 fixed top-0 left-0 z-30 w-full text-white")},m(w,d){j(w,e,d),c(e,l),c(l,t),c(l,r),c(l,u),c(u,a),c(u,o),c(u,f),c(u,h),c(u,A),c(A,Z),c(l,_),c(l,M),c(M,F),c(F,V),r2(I,V,null),c(e,S),y&&y.m(e,null),j(w,k,d),B&&B.m(w,d),j(w,T,d),z=!0,G||(N=[J(t,"click",n[2]),J(a,"click",c2(n[3])),J(f,"click",c2(n[3]))],G=!0)},p(w,[d]){const b={};!P&&d&1&&(P=!0,b.open=w[0],j2(()=>P=!1)),I.$set(b),w[0]?y?y.p(w,d):(y=E2(w),y.c(),y.m(e,null)):y&&(y.d(1),y=null),w[0]?B?B.p(w,d):(B=w2(w),B.c(),B.m(T.parentNode,T)):B&&(B.d(1),B=null)},i(w){z||(R(I.$$.fragment,w),z=!0)},o(w){q(I.$$.fragment,w),z=!1},d(w){w&&(v(e),v(k),v(T)),i2(I),y&&y.d(),B&&B.d(w),G=!1,h2(N)}}}const v0="https://docs.easterad.com";function D0(n,e,l){let t=!1;function s(){l(0,t=!1)}function r(){window.scrollTo({top:0,behavior:"smooth"}),s()}function u({currentTarget:i}){const o=document.querySelector(i.getAttribute("href")||"");o&&(o.scrollIntoView({behavior:"smooth"}),s())}function a(i){t=i,l(0,t)}return[t,s,r,u,a]}class B0 extends l2{constructor(e){super(),s2(this,e,D0,g0,t2,{})}}const b0=""+new URL("../assets/developer-0.BRo9qKkc.jpg",import.meta.url).href,A0=""+new URL("../assets/developer-1.BpzE4uAh.jpg",import.meta.url).href,x0=""+new URL("../assets/developer-2.DW8kkYMQ.jpg",import.meta.url).href,_0=""+new URL("../assets/developer-2.BQms-QDh.mp4",import.meta.url).href,E0=""+new URL("../assets/developer-3.DoJ8lGJN.jpg",import.meta.url).href,w0=""+new URL("../assets/advertiser-0.DQQClwp_.jpg",import.meta.url).href,H0=""+new URL("../assets/advertiser-1.Bq-Xf73R.jpg",import.meta.url).href;function H2(n,e,l){const t=n.slice();return t[2]=e[l],t[4]=l,t}function L2(n,e,l){const t=n.slice();return t[2]=e[l],t[4]=l,t}function V2(n){let e,l;return e=new W2({props:{i:n[4],title:n[2].title,description:n[2].description,reversed:n[4]%2==1,imgSrc:n[2].image,videoSrc:n[2].videos}}),{c(){u2(e.$$.fragment)},l(t){n2(e.$$.fragment,t)},m(t,s){r2(e,t,s),l=!0},p:$,i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){q(e.$$.fragment,t),l=!1},d(t){i2(e,t)}}}function y2(n){let e,l;return e=new G2({props:{sections:n[2].sections,imagePath:n[2].imagePath,reversed:n[4]%2==1}}),{c(){u2(e.$$.fragment)},l(t){n2(e.$$.fragment,t)},m(t,s){r2(e,t,s),l=!0},p:$,i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){q(e.$$.fragment,t),l=!1},d(t){i2(e,t)}}}function L0(n){let e,l,t,s,r,u,a,i='<p class="text-2xl md:text-3xl"><span class="font-gradient-purple">게임 개발자를 위한 솔루션</span></p> <h2 class="font-extrabold text-4xl md:text-5xl text-center space-y-2"><span class="inline-block"><span class="font-gradient-purple font-bold">EasterAd</span>와 함께</span> <span class="inline-block">내재형 광고로</span> <span class="inline-block overflow-visible text-nowrap"><span class="font-gradient-purple">게임을 수익화</span> 하세요</span></h2>',o,f,D,h,A,Z,_,M,F='<p class="text-2xl md:text-3xl"><span class="text-primary-200">광고주를 위한 솔루션</span></p> <h2 class="font-extrabold text-4xl md:text-5xl text-center space-y-2"><span class="inline-block"><span class="font-gradient-blue font-bold">EasterAd</span>와 함께</span> <span class="inline-block"><span class="inline-block overflow-visible text-nowrap font-gradient-blue">인게임 내재형</span> <span class="inline-block"><span class="overflow-visible text-nowrap font-gradient-blue">광고 캠페인</span>을</span> <span class="inline-block">진행하세요</span></span></h2>',I,V,P,S,k,T,z,G;e=new B0({}),s=new f0({});let N=Y(n[0]),E=[];for(let d=0;d<N.length;d+=1)E[d]=V2(L2(n,N,d));const K=d=>q(E[d],1,1,()=>{E[d]=null});let y=Y(n[1]),B=[];for(let d=0;d<y.length;d+=1)B[d]=y2(H2(n,y,d));const w=d=>q(B[d],1,1,()=>{B[d]=null});return z=new t0({}),{c(){u2(e.$$.fragment),l=H(),t=p("main"),u2(s.$$.fragment),r=H(),u=p("section"),a=p("section"),a.innerHTML=i,o=H();for(let d=0;d<E.length;d+=1)E[d].c();f=H(),D=p("div"),h=H(),A=p("div"),Z=H(),_=p("section"),M=p("section"),M.innerHTML=F,I=H();for(let d=0;d<B.length;d+=1)B[d].c();V=H(),P=p("div"),S=H(),k=p("div"),T=H(),u2(z.$$.fragment),this.h()},l(d){n2(e.$$.fragment,d),l=L(d),t=g(d,"MAIN",{class:!0});var b=x(t);n2(s.$$.fragment,b),r=L(b),u=g(b,"SECTION",{id:!0,class:!0});var m=x(u);a=g(m,"SECTION",{class:!0,"data-svelte-h":!0}),O(a)!=="svelte-109puy1"&&(a.innerHTML=i),o=L(m);for(let Q=0;Q<E.length;Q+=1)E[Q].l(m);f=L(m),D=g(m,"DIV",{class:!0}),x(D).forEach(v),h=L(m),A=g(m,"DIV",{class:!0}),x(A).forEach(v),m.forEach(v),Z=L(b),_=g(b,"SECTION",{id:!0,class:!0});var U=x(_);M=g(U,"SECTION",{class:!0,"data-svelte-h":!0}),O(M)!=="svelte-yn4k53"&&(M.innerHTML=F),I=L(U);for(let Q=0;Q<B.length;Q+=1)B[Q].l(U);V=L(U),P=g(U,"DIV",{class:!0}),x(P).forEach(v),S=L(U),k=g(U,"DIV",{class:!0}),x(k).forEach(v),U.forEach(v),T=L(b),n2(z.$$.fragment,b),b.forEach(v),this.h()},h(){C(a,"class","flex flex-col font-bold items-center mb-24 md:mb-32 mt-32 gap-4 z-20"),C(D,"class","w-3/5 h-1/2 absolute blur-3xl mix-blend-difference bg-[#141438] rounded-full z-10 top-0 -left-1/4"),C(A,"class","w-3/5 h-1/2 absolute blur-3xl mix-blend-difference bg-[#141438] rounded-full z-10 -bottom-52 -right-1/4"),C(u,"id","developers"),C(u,"class","bg-[#111111] pt-14 md:pt-24 px-4 flex flex-col items-center z-0 relative overflow-hidden"),C(M,"class","flex flex-col font-bold items-center mb-24 md:mb-32 mt-32 gap-4 z-20 space-y-2"),C(P,"class","w-3/5 h-1/2 absolute blur-3xl mix-blend-lighten bg-[#1D1E5B] rounded-full z-10 top-0 -left-1/4"),C(k,"class","w-full md:w-3/5 h-1/2 absolute blur-3xl mix-blend-darken opacity-70 bg-[#1C1E41] rounded-full z-10 -bottom-52 right-0 md:-right-1/4"),C(_,"id","advertisers"),C(_,"class","bg-[#191956] pt-14 md:pt-24 px-4 flex flex-col items-center z-0 relative overflow-hidden"),C(t,"class","text-white")},m(d,b){r2(e,d,b),j(d,l,b),j(d,t,b),r2(s,t,null),c(t,r),c(t,u),c(u,a),c(u,o);for(let m=0;m<E.length;m+=1)E[m]&&E[m].m(u,null);c(u,f),c(u,D),c(u,h),c(u,A),c(t,Z),c(t,_),c(_,M),c(_,I);for(let m=0;m<B.length;m+=1)B[m]&&B[m].m(_,null);c(_,V),c(_,P),c(_,S),c(_,k),c(t,T),r2(z,t,null),G=!0},p(d,[b]){if(b&1){N=Y(d[0]);let m;for(m=0;m<N.length;m+=1){const U=L2(d,N,m);E[m]?(E[m].p(U,b),R(E[m],1)):(E[m]=V2(U),E[m].c(),R(E[m],1),E[m].m(u,f))}for(f2(),m=N.length;m<E.length;m+=1)K(m);d2()}if(b&2){y=Y(d[1]);let m;for(m=0;m<y.length;m+=1){const U=H2(d,y,m);B[m]?(B[m].p(U,b),R(B[m],1)):(B[m]=y2(U),B[m].c(),R(B[m],1),B[m].m(_,V))}for(f2(),m=y.length;m<B.length;m+=1)w(m);d2()}},i(d){if(!G){R(e.$$.fragment,d),R(s.$$.fragment,d);for(let b=0;b<N.length;b+=1)R(E[b]);for(let b=0;b<y.length;b+=1)R(B[b]);R(z.$$.fragment,d),G=!0}},o(d){q(e.$$.fragment,d),q(s.$$.fragment,d),E=E.filter(Boolean);for(let b=0;b<E.length;b+=1)q(E[b]);B=B.filter(Boolean);for(let b=0;b<B.length;b+=1)q(B[b]);q(z.$$.fragment,d),G=!1},d(d){d&&(v(l),v(t)),i2(e,d),i2(s),C2(E,d),C2(B,d),i2(z)}}}function V0(n){return[[{image:b0,videos:[],title:"게이머를 위한 광고",description:"더 이상 광고로 방해받는 게이머를 걱정하지 마세요. EasterAd는 게임 속 환경에 녹아드는 내재형 광고를 제공하여 게이밍 경험을 극대화합니다."},{image:A0,videos:[],title:"새로운 수익원 창출",description:"EasterAd를 통해 이미 광고가 삽입된 게임은 물론, 전면 광고나 배너 광고 도입이 어려웠던 게임에서도 수익을 창출할 수 있습니다. 모바일, PC, VR 등 다양한 플랫폼에서 광고로 게임을 수익화하세요."},{image:x0,videos:[{src:_0,type:"video/mp4"}],title:"빠르고 쉬운 수익화",description:"3분이면 충분합니다. EasterAd SDK를 통해 Drag & Drop으로 원하는 위치에 광고를 삽입하세요. 광고 송출부터 수익 측정까지 EasterAd가 책임집니다."},{image:E0,videos:[],title:"간편하고 강력한 대시보드",description:"EasterAd 대시보드를 통해 광고를 송출할 게임 정보를 관리하고, 광고 수익 창출 현황을 파악해 수익 극대화 전략을 수립하세요. 개발 중 참고할 수 있는 공식 문서와 실시간 문의 기능 역시 제공합니다."}],[{imagePath:w0,sections:[{title:"넓은 잠재고객에게 도달",description:"EasterAd는 저렴한 CPM으로도 넓은 잠재고객에게 효율적으로 도달할 수 있도록 도와드립니다. EasterAd와 함께 합리적인 비용으로 새로운 고객을 만나보세요."},{title:"게임과 브랜드가 하나되는 광고",description:"EasterAd의 인게임 내재형 광고는 게임 속 환경과 어우러져 자연스러운 광고 경험을 제공합니다. 게이머 친화적인 광고 캠페인을 통해 긍정적인 브랜드 이미지를 효과적으로 전달하세요."}]},{imagePath:H0,sections:[{title:"광고 타겟팅과 실적 분석 리포트 제공",description:"EasterAd는 언어, 지역, 게임별 광고 타겟팅과 광고 실적 추적 및 분석을 위한 보고서를 제공합니다. EasterAd와 함께 보다 성공적인 마케팅 전략을 수립해보세요."},{title:"업계 표준 준수",description:"EasterAd는 IAB 광고 표준을 준수하여 게임 컨텐츠 적절성을 심사하고 광고 시청을 평가합니다. 정밀한 필터링 알고리즘을 통해 게이머가 실제로 시청한 광고만 비용이 부과됩니다."}]}]]}class I0 extends l2{constructor(e){super(),s2(this,e,V0,L0,t2,{})}}export{I0 as component};
