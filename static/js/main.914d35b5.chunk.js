(this["webpackJsonpani-api"]=this["webpackJsonpani-api"]||[]).push([[0],{45:function(n,e,t){},46:function(n,e,t){},72:function(n,e,t){"use strict";t.r(e);var a,r,c,i,o,s,u,d,l,p,j,b,f,x,h,O,g,v,m,w,y,k,C,_,S,z,L,B,M,H,I,R,A,E,P,V,T,N,D,J,U,W,F,Z,K,Q,Y,$,q=t(1),G=t.n(q),X=t(20),nn=t.n(X),en=(t(45),t(2)),tn=(t(46),t(3)),an="#282a36",rn="#44475a",cn="#f8f8f2",on="#6272a4",sn="#8be9fd",un="#50fa7b",dn="#ffb86c",ln="#ff79c6",pn="#bd93f9",jn="#ff5555",bn="\t#f1fa8c",fn="/login",xn="/search",hn="/anime",On=function(n,e){return"/search?name=".concat(n||"","&page=").concat(e||"0")},gn=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return"/anime?id=".concat(n,"&page=").concat(e,"&index=").concat(t)},vn="https://api.aniapi.com",mn="/v1/auth/me",wn="/v1/anime",yn="/v1/episode",kn=function(n){return"/v1/anime/".concat(n)},Cn="token",_n={status_code:200,message:"Anime found",data:{anilist_id:205,mal_id:205,format:0,status:0,titles:{en:"Samurai Champloo",jp:"\u30b5\u30e0\u30e9\u30a4\u30c1\u30e3\u30f3\u30d7\u30eb\u30fc",it:"Samurai Champloo"},descriptions:{en:"",it:"Dal primo episodio poco si evince su dove voglia andare a parare l\u2019autore. Un maestro di spada e un samurai vagabondo finiscono nella stessa citt\xe0 e nell'aiutare, in modo interessato, alcune persone che stavano subendo dei soprusi, finiscono nei guai. Inoltre si incontrano e, lasciando perdere i relativi problemi, iniziano a lottare tra di loro e finiscono entrambi catturati e condannati a morte\u2026"},start_date:new Date("2004-05-20T00:00:00Z"),end_date:new Date("2005-03-19T00:00:00Z"),season_period:1,cover_color:"red",season_year:2004,episodes_count:26,episode_duration:24,cover_image:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx205-xxonQKyJtVcw.png",banner_image:"https://s4.anilist.co/file/anilistcdn/media/anime/banner/205-L7WpOOWUmVjh.jpg",genres:["Action","Adventure","Comedy","Swordplay","Samurai","Rural","Historical","Anachronism","Primarily Adult Cast","Martial Arts","Episodic","Male Protagonist","Female Protagonist","Tanned Skin","Nudity","Yakuza","Kuudere","Language Barrier","Baseball","Politics","Zombie","Ninja"],score:84,id:141},version:"1"},Sn=t(5),zn=t(16),Ln=t(18),Bn=function(){return Object(Ln.b)()},Mn=Ln.c,Hn=t(4),In=t(9),Rn=t(7),An=t.n(Rn),En=t(8),Pn=t(36),Vn=t.n(Pn),Tn=function(n,e){return Vn.a.create({baseURL:n,headers:e})},Nn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=mn,t=wn,a=yn,r=kn,c=Tn(vn,{Authorization:"Bearer ".concat(n)}),i=function(){var n=Object(En.a)(An.a.mark((function n(){var t;return An.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get(e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=Object(En.a)(An.a.mark((function n(e){var a,r;return An.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.name,n.next=3,c.get(t,{params:{title:a,page:e.page}});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=Object(En.a)(An.a.mark((function n(e){var t;return An.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get(r(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=Object(En.a)(An.a.mark((function n(e){var t;return An.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get(a,{params:Object(Hn.a)({},e)});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return{me:i,anime:o,animeId:s,episode:u}},Dn=function(){var n=Object(En.a)(An.a.mark((function n(e){var t,a,r;return An.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Nn(e),a=t.me,n.prev=1,n.next=4,a();case 4:return r=n.sent,n.abrupt("return",{token:e,me:r,pop_up:{message:"Ok !!!",show:!0,success:!0}});case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",{token:e,pop_up:{message:"Fail ;(",show:!0,success:!1}});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),Jn=Object(In.b)("info/search",function(){var n=Object(En.a)(An.a.mark((function n(e,t){var a,r;return An.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.getState().token.token,r=Nn(a),n.next=4,r.anime(e);case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),Un=Object(In.b)("info/anime",function(){var n=Object(En.a)(An.a.mark((function n(e,t){var a,r,c;return An.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.getState().token.token,r=Nn(a),n.next=4,r.animeId(e);case 4:if(404!==(c=n.sent).status_code){n.next=7;break}return n.abrupt("return",_n);case 7:return n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),Wn=Object(In.b)("info/episode",function(){var n=Object(En.a)(An.a.mark((function n(e,t){var a,r;return An.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.getState().token.token,r=Nn(a),n.next=4,r.episode(e);case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),Fn=(a=Cn,JSON.parse(localStorage.getItem(a))||{pop_up:{show:!1}}),Zn=Object(In.b)("token/set-async",Dn),Kn=Object(In.c)({name:"token",initialState:Fn,reducers:{setToken:function(n,e){return Object(Hn.a)(Object(Hn.a)({},n),{},{token:e.payload})},hide:function(n){return Object(Hn.a)(Object(Hn.a)({},n),{},{pop_up:Object(Hn.a)(Object(Hn.a)({},n.pop_up),{},{show:!1})})},show:function(n){return Object(Hn.a)(Object(Hn.a)({},n),{},{pop_up:Object(Hn.a)(Object(Hn.a)({},n.pop_up),{},{show:!0})})}},extraReducers:function(n){n.addCase(Zn.pending,(function(n){return Object(Hn.a)(Object(Hn.a)({},n),{},{loading:!0})})).addCase(Zn.fulfilled,(function(n,e){return Object(Hn.a)(Object(Hn.a)(Object(Hn.a)({},n),e.payload),{},{loading:!1})})).addCase(Jn.pending,(function(n){return Object(Hn.a)(Object(Hn.a)({},n),{},{loading:!0})})).addCase(Jn.fulfilled,(function(n,e){return Object(Hn.a)(Object(Hn.a)({},n),{},{anime:e.payload,loading:!1})})).addCase(Un.pending,(function(n){return Object(Hn.a)(Object(Hn.a)({},n),{},{loading:!0})})).addCase(Un.fulfilled,(function(n,e){return Object(Hn.a)(Object(Hn.a)({},n),{},{loading:!1,single_anime:e.payload})})).addCase(Wn.pending,(function(n){return Object(Hn.a)(Object(Hn.a)({},n),{},{episode:void 0,loadingEp:!0})})).addCase(Wn.fulfilled,(function(n,e){return Object(Hn.a)(Object(Hn.a)({},n),{},{episode:e.payload,loadingEp:!1})}))}}),Qn=Kn.actions,Yn=(Qn.setToken,Qn.hide),$n=(Qn.show,function(n){return n.token.token}),qn=function(n){return n.token.pop_up},Gn=function(n){return n.token.loading},Xn=function(n){return n.token.loadingEp},ne=function(n){return n.token.me},ee=function(n){return n.token.anime},te=function(n){return n.token.single_anime||_n},ae=Kn.reducer,re=function(n){return n.token.episode},ce=t(21),ie=t(0),oe=function(n){var e=n.Style;return Object(ie.jsx)(e,Object(Hn.a)(Object(Hn.a)({},n),{},{onChange:function(e){n.onChange(e.target.value)}}))},se=function(n){var e=n.success,t=n.show,a=n.message,i=jn,o=un,s=rn,u=Object(tn.b)(r||(r=Object(en.a)(["\n        0% {\n            opacity: 0;\n        }\n        30% {\n            opacity: 1\n        }\n        70%{\n            opacity: 1\n        }\n        100% {\n            opacity: 0;\n        }\n    "]))),d=tn.a.div(c||(c=Object(en.a)(["\n        position: fixed;\n        top: 30px;\n        left: 30px;\n        border: 1px solid ",";\n        max-width: 300px;\n        border-radius: 2px;\n        padding: 20px 50px;\n        color: ",";\n        animation: "," 2s forwards;\n    "])),s,e?o:i,u);return t?Object(ie.jsx)(d,{children:a}):Object(ie.jsx)(ie.Fragment,{})},ue=function(){var n=Mn(qn),e=Bn();return n.show&&setTimeout((function(){e(Yn())}),2e3),Object(ie.jsx)(se,Object(Hn.a)({},n))},de=sn,le=an,pe=tn.a.div(i||(i=Object(en.a)(["\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),je=Object(tn.b)(o||(o=Object(en.a)(["\n    0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n"]))),be=tn.a.div(s||(s=Object(en.a)(["\n    border: 10px solid ","; /* Light grey */\n    border-top: 10px solid ","; /* Blue */\n    border-radius: 50%;\n    width: 1px;\n    height: 1px;\n    animation: "," 2s linear infinite;\n"])),de,le,je),fe=function(n){var e=n.loading;return Object(ie.jsx)(pe,{children:e&&Object(ie.jsx)(be,{})})},xe=function(){var n=Mn(Gn);return Object(ie.jsx)(fe,{loading:n})},he=function(n){var e=on,t=n.color||e;return Object(ie.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:t,children:[Object(ie.jsx)("g",{children:Object(ie.jsx)("path",{d:"M0,0h24v24H0V0z",fill:"none"})}),Object(ie.jsx)("g",{children:Object(ie.jsx)("polygon",{points:"6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"})})]})},Oe=function(n){var e=on,t=n.color||e;return Object(ie.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:t,children:[Object(ie.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none",opacity:".87"}),Object(ie.jsx)("path",{d:"M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"})]})},ge=an,ve=on,me=tn.a.div(u||(u=Object(en.a)(["\n    padding-top: 5px;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n"]))),we=tn.a.button(d||(d=Object(en.a)(["\n    background-color: ",";\n    border: none;\n    cursor: pointer;\n"])),ge),ye=tn.a.span(l||(l=Object(en.a)(["\n    color: ",";\n"])),ve),ke=function(n){var e=n.page,t=n.handlePrev,a=n.handleNext;return Object(ie.jsxs)(me,{children:[Object(ie.jsx)(we,{onClick:t,children:Object(ie.jsx)(Oe,{})}),Object(ie.jsx)(ye,{children:e}),Object(ie.jsx)(we,{onClick:a,children:Object(ie.jsx)(he,{})})]})},Ce=on,_e=dn,Se=rn,ze=pn,Le=ln,Be=cn,Me=sn,He=tn.a.div(p||(p=Object(en.a)(["\n        color: ",";\n        height: 100vh;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        align-items: center;\n"])),Ce),Ie=tn.a.form(j||(j=Object(en.a)(["\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n"]))),Re=tn.a.span(b||(b=Object(en.a)(["\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n"]))),Ae=tn.a.label(f||(f=Object(en.a)(["\n    color: ",";\n    font-size: ",";\n"])),_e,"30px"),Ee=tn.a.input(x||(x=Object(en.a)(["\n    background-color: ",";\n    color: ",";\n    font-size: 25px;\n    border: 0;\n    height: 50px;\n"])),Se,ze),Pe=tn.a.button(h||(h=Object(en.a)(["\n    cursor: pointer;\n    height: 50px;\n    background-color: ",";\n    color: ",";\n    border: none;\n    font-weight: bold;\n    font-size: 15px;\n    border-radius: 2px;\n"])),Le,Be),Ve=tn.a.a(O||(O=Object(en.a)(["\n    cursor: pointer;\n    color: ",";\n    text-align: center;\n"])),Me),Te=function(){var n=Object(q.useState)(""),e=Object(ce.a)(n,2),t=e[0],a=e[1],r=Bn();return Object(ie.jsxs)(He,{children:[Object(ie.jsxs)(Ie,{onSubmit:function(n){n.preventDefault(),r(Zn(t))},children:[Object(ie.jsxs)(Re,{children:[Object(ie.jsx)(Ae,{children:"Token"}),Object(ie.jsx)(oe,{Style:Ee,value:t,onChange:a})]}),Object(ie.jsx)(Pe,{children:"send"}),Object(ie.jsx)(Ve,{target:"_blank",href:"https://aniapi.com/login/",children:"generate token"}),Object(ie.jsx)(xe,{})]}),Object(ie.jsx)(ue,{})]})},Ne=function(){return new URLSearchParams(Object(Sn.h)().search)},De="name",Je="page",Ue=function(){var n=De,e=Je,t=Ne();return{name:t.get(n)||"",page:t.get(e)||1..toString()}},We="id",Fe="page",Ze="index",Ke=function(){var n=Ne();return{id:parseInt(n.get(We))||1,page:parseInt(n.get(Fe))||1,index:parseInt(n.get(Ze))||1}},Qe=rn,Ye=pn,$e=ln,qe=bn,Ge=tn.a.div(g||(g=Object(en.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 50px;\n    padding-bottom: 30px;\n    border-bottom: solid 1px ",";\n"])),Qe),Xe=tn.a.div(v||(v=Object(en.a)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n"]))),nt=tn.a.span(m||(m=Object(en.a)(["\n    font-size: 15px;\n"]))),et=Object(tn.a)(nt)(w||(w=Object(en.a)(["\n    color: ","\n"])),Ye),tt=Object(tn.a)(nt)(y||(y=Object(en.a)(["\n    color: ","\n"])),$e),at=Object(tn.a)(nt)(k||(k=Object(en.a)(["\n    color: ","\n"])),qe),rt=function(){var n=Mn(ne).data,e=n.email,t=n.username,a=n.localization;return Object(ie.jsxs)(Ge,{children:[Object(ie.jsxs)(Xe,{children:[Object(ie.jsx)(et,{children:e}),Object(ie.jsx)(tt,{children:t})]}),Object(ie.jsx)(at,{children:a})]})},ct=on,it=function(n){var e=n.color||ct;return Object(ie.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:e,children:[Object(ie.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(ie.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]})},ot=function(n){var e=sn,t=n.color||e;return Object(ie.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:t,children:[Object(ie.jsx)("rect",{fill:"none",height:"24",width:"24"}),Object(ie.jsx)("path",{d:"M12,3L6,7.58V6H4v3.11L1,11.4l1.21,1.59L4,11.62V21h16v-9.38l1.79,1.36L23,11.4L12,3z M18,19h-5v-4h-2v4H6v-8.9l6-4.58 l6,4.58V19z M10,1c0,1.66-1.34,3-3,3C6.45,4,6,4.45,6,5H4c0-1.66,1.34-3,3-3c0.55,0,1-0.45,1-1H10z"})]})},st=ln,ut=function(){return Object(ie.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:st,children:[Object(ie.jsx)("g",{children:Object(ie.jsx)("rect",{fill:"none",height:"24",width:"24"})}),Object(ie.jsx)("g",{children:Object(ie.jsx)("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"})})]})},dt=rn,lt=on,pt=dn,jt=tn.a.form(C||(C=Object(en.a)(["\n    padding-top: 10px;\n    display: flex;\n    width: 100%;\n"]))),bt=tn.a.input(_||(_=Object(en.a)(["\n    width: 100%;\n    background-color: ",";\n    color: ",";\n    border: none;\n    padding: 2px;\n"])),dt,pt),ft=tn.a.button(S||(S=Object(en.a)(["\n    padding: 2px;\n    border: none;\n    border-left: 1px solid ",";\n    margin: 0;\n    background-color: ",";\n    padding-right: 5px;\n    padding-left: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"])),lt,dt),xt=function(){var n=Object(q.useState)(""),e=Object(ce.a)(n,2),t=e[0],a=e[1],r=On,c=Object(Sn.g)();return Object(ie.jsxs)(jt,{onSubmit:function(n){n.preventDefault(),c.push(r(t,1))},children:[Object(ie.jsx)(oe,{value:t,onChange:a,Style:bt}),Object(ie.jsx)(ft,{children:Object(ie.jsx)(it,{})})]})},ht=function(){var n,e,t=On,a=Ue(),r=a.name,c=a.page,i=Object(Sn.g)(),o=(null===(n=Mn(ee))||void 0===n||null===(e=n.data)||void 0===e?void 0:e.last_page)||1,s=parseInt(c);return Object(ie.jsx)(ke,{handleNext:function(){var n=o===s?s:s+1;i.push(t(r,n))},handlePrev:function(){var n=1===s?1:s-1;i.push(t(r,n))},page:s})},Ot=tn.a.div(z||(z=Object(en.a)(["\n    padding-top: 30px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    gap: 20px;\n"]))),gt=sn,vt=tn.a.div(L||(L=Object(en.a)(["\n    height: 40%;\n    padding: 0 10px;\n    box-sizing: border-box;\n    width: 100%;\n    background-color: #000000ae;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    color: ",";\n"])),gt),mt=function(n){var e=gn,t=Object(Sn.g)(),a=n.anime,r=a.titles,c=r.jp,i=r.en,o=tn.a.button(B||(B=Object(en.a)(["\n        position: relative;\n        border: 0;\n        padding: 0;\n        margin: 0;\n        width: 200px;\n        height: 300px;\n        cursor: pointer;\n        display: flex;\n        background-size: cover;\n        background-position: center;\n        background-image: url(",");\n        flex-direction: column;\n        justify-content: flex-end;\n    "])),a.cover_image),s=function(n){return n.substr(0,30)+(n.length>30?"...":"")};return Object(ie.jsx)(o,{onClick:function(){t.push(e(a.id))},children:Object(ie.jsxs)(vt,{children:[Object(ie.jsx)("span",{children:s(i)}),Object(ie.jsx)("span",{children:s(c)})]})},a.id)},wt=function(){var n=Mn(ee);return Mn(Gn)||void 0===n?Object(ie.jsx)(xe,{}):Object(ie.jsx)(Ot,{children:n.data.documents.map((function(n){return Object(ie.jsx)(mt,{anime:n})}))})},yt=function(){var n=Ue(),e=n.name,t=n.page,a=Bn();return Object(q.useEffect)((function(){a(Jn(n))}),[]),Object(q.useEffect)((function(){a(Jn(n))}),[e,t]),Object(ie.jsxs)("div",{children:[Object(ie.jsx)(rt,{}),Object(ie.jsx)(xt,{}),Object(ie.jsx)(wt,{}),Object(ie.jsx)(ht,{})]})},kt=tn.a.div(M||(M=Object(en.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n"]))),Ct=tn.a.img(H||(H=Object(en.a)(["\n    width: 100%;\n"]))),_t=dn,St=pn,zt=rn,Lt=(tn.a.div(I||(I=Object(en.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n"]))),tn.a.img(R||(R=Object(en.a)(["\n    width: 100%;\n"]))),tn.a.div(A||(A=Object(en.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 30px 0;\n"])))),Bt=tn.a.div(E||(E=Object(en.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),Mt=tn.a.span(P||(P=Object(en.a)(["\n    font-size: 20px;\n"]))),Ht=Object(tn.a)(Mt)(V||(V=Object(en.a)(["\n    color: ","\n"])),_t),It=Object(tn.a)(Mt)(T||(T=Object(en.a)(["\n    color: ","\n"])),St),Rt=tn.a.button(N||(N=Object(en.a)(["\n    background-color: ",";\n    width: 55px;\n    height: 55px;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    border-radius: 50%;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])),zt),At=function(){var n=On,e=Mn(te).data.titles,t=e.en,a=e.jp,r=Object(Sn.g)();return Object(ie.jsxs)(Lt,{children:[Object(ie.jsxs)(Bt,{children:[Object(ie.jsx)(Ht,{children:t}),Object(ie.jsx)(It,{children:a})]}),Object(ie.jsx)(Rt,{onClick:function(){r.push(n("",1))},children:Object(ie.jsx)(ot,{})})]})},Et=an,Pt=bn,Vt=on,Tt=tn.a.div(D||(D=Object(en.a)(["\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n"]))),Nt=tn.a.div(J||(J=Object(en.a)(["\n    background-color: ",";\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 0 0 50% 0;\n    padding-right: 5px;\n    padding-bottom: 5px;\n    color: ",";\n"])),Et,Pt),Dt=tn.a.span(U||(U=Object(en.a)(["\n    display: flex;\n    text-align: justify;\n    width: 70%;\n    color: ","\n"])),Vt),Jt=function(){var n=Mn(te).data,e=n.cover_image,t=n.score,a=n.descriptions,r=tn.a.div(W||(W=Object(en.a)(["\n        background-image: url(",");\n        background-size: cover;\n        background-position: center;\n        width: 250px;\n        height: 350px;\n    "])),e);return Object(ie.jsxs)(Tt,{children:[Object(ie.jsx)(r,{children:Object(ie.jsx)(Nt,{children:t})}),Object(ie.jsx)(Dt,{children:a.en})]})},Ut=rn,Wt=ln,Ft=an,Zt=tn.a.div(F||(F=Object(en.a)(["\n    padding-top: 20px;\n"]))),Kt=tn.a.button(Z||(Z=Object(en.a)(["\n    padding: 0;\n    margin: 0;\n    border: 1px solid ",";\n    border-top: ",";\n    padding: 20px 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    background-color: ",";\n    border-radius: 2px;\n"])),Ut,(function(n){return n.first?"1px solid ".concat(Ut):"none"}),Ft),Qt=tn.a.span(K||(K=Object(en.a)(["\n    color: ",";\n"])),Wt),Yt=tn.a.a(Q||(Q=Object(en.a)(["\n\n"]))),$t=function(){var n=Mn(Xn);return Object(ie.jsx)(fe,{loading:n})},qt=function(){var n,e,t=Ke(),a=gn,r=t.id,c=t.page,i=Object(Sn.g)(),o=(null===(n=Mn(re))||void 0===n||null===(e=n.data)||void 0===e?void 0:e.last_page)||1;return Object(ie.jsx)(ke,{page:c,handlePrev:function(){var n=1===c?1:c-1;i.push(a(r,n))},handleNext:function(){var n=o===c?c:c+1;i.push(a(r,n))}})},Gt=function(){var n=Object(Ln.b)(),e=Ke();Object(q.useEffect)((function(){n(Wn(e))}),[e.page]);var t=Mn(re);return Object(ie.jsxs)(Zt,{children:[t&&t.data.documents.map((function(n,e){return Object(ie.jsxs)("div",{children:[Object(ie.jsx)("video",{src:n.video}),Object(ie.jsxs)(Kt,{first:0===e,children:[Object(ie.jsx)(Qt,{children:n.number}),Object(ie.jsx)(Yt,{target:"_blank",href:n.video,children:Object(ie.jsx)(ut,{})})]},n.id)]})})),Object(ie.jsx)(qt,{}),Object(ie.jsx)($t,{})]})},Xt=function(){var n={id:Ne().get("id")||"1"}.id,e=Bn(),t=Mn(Gn),a=Mn(te).data;return Object(q.useEffect)((function(){e(Un(parseInt(n)))}),[]),t?Object(ie.jsx)(xe,{}):Object(ie.jsxs)(kt,{children:[Object(ie.jsx)(Ct,{src:a.banner_image,alt:"banner"}),Object(ie.jsx)(At,{}),Object(ie.jsx)(Jt,{}),Object(ie.jsx)(Gt,{})]})},na=xn,ea=function(n){return Mn($n)?Object(ie.jsx)(Sn.a,{to:na}):Object(ie.jsx)(Sn.b,Object(Hn.a)({},n))},ta=function(n){return Object(ie.jsx)(Sn.b,Object(Hn.a)({},n))},aa=fn,ra=function(n){return Mn($n)?Object(ie.jsx)(Sn.b,Object(Hn.a)({},n)):Object(ie.jsx)(Sn.a,{to:aa})},ca=fn,ia=xn,oa=hn,sa=function(){Mn($n);return Object(ie.jsx)(Sn.a,{to:ca})},ua=function(){var n=[{path:ca,exact:!0,component:Te,CustomRoute:ea},{path:ia,exact:!0,component:yt,CustomRoute:ra},{path:oa,exact:!0,component:Xt,CustomRoute:ra},{path:"/",exact:!1,component:sa,CustomRoute:ta}];return Object(ie.jsx)(zn.a,{children:Object(ie.jsx)(Sn.d,{children:n.map((function(n,e){var t=n.component,a=n.exact,r=n.path,c=n.CustomRoute;return Object(ie.jsx)(c,{component:t,exact:a,path:r},e)}))})})},da=an,la=tn.a.div(Y||(Y=Object(en.a)(["\n    background-color: ",";\n    width: 100%;\n    min-height: 100vh;\n  "])),da),pa=tn.a.div($||($=Object(en.a)(["\n    max-width: 1000px;\n    width: 90%;\n    margin: 0 auto;\n  "])));var ja=function(){return Object(ie.jsx)(la,{children:Object(ie.jsx)(pa,{children:Object(ie.jsx)(ua,{})})})};function ba(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(e){return setTimeout((function(){return e({data:n})}),500)}))}var fa=Object(In.b)("counter/fetchCount",function(){var n=Object(En.a)(An.a.mark((function n(e){var t;return An.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ba(e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),xa=Object(In.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(n){n.value+=1},decrement:function(n){n.value-=1},incrementByAmount:function(n,e){n.value+=e.payload}},extraReducers:function(n){n.addCase(fa.pending,(function(n){n.status="loading"})).addCase(fa.fulfilled,(function(n,e){n.status="idle",n.value+=e.payload}))}}),ha=xa.actions,Oa=(ha.increment,ha.decrement,ha.incrementByAmount,xa.reducer),ga=Object(In.a)({reducer:{counter:Oa,token:ae}});ga.subscribe((function(){!function(n,e){localStorage.setItem(e,JSON.stringify(n))}(ga.getState().token,Cn)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));nn.a.render(Object(ie.jsx)(G.a.StrictMode,{children:Object(ie.jsx)(Ln.a,{store:ga,children:Object(ie.jsx)(ja,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.914d35b5.chunk.js.map