(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{90:function(e,t,a){e.exports=a(91)},91:function(e,t,a){"use strict";a.r(t);var n=a(51),r=a.n(n),o=a(61),i=a(15),l=a(20),c=a(52),s=a(37),m=a(0),u=a.n(m),d=a(9),p=a.n(d),f=(a(97),a(104)),h=a(105),g=a(71),w=a(106),b=a(108),E=a(109),y=a(110),v=a(74),S=a(75),O=a(116),k=a(53),j=a(46),C=a(69),I=a(102),N=a(11),x=a(79),T=a(36),P=a(78),L=a(73),R=a(112),z=a(113),B=a(103),q=a(114),U=a(115),J=a(111),G=a(35),W=a(26),D=a(107),M=a(123),A=a(122),F=a(80),V=a(117),K=a(119),_=a(118),H=a(77),Y=a(120),Z=a(62),Q="https://api.sheltonhuang.me/GoogleDriveProxy/",X=navigator.platform.toUpperCase().indexOf("MAC")>=0,$="application/vnd.google-apps.folder",ee="folderImg.jpg",te="imgNotFound.jpg",ae=Object(C.a)(function(e){return{appBar:{backgroundColor:I.a[700]},icon:{marginRight:e.spacing(2)},grow:{flexGrow:1},conditionGrow:Object(s.a)({},e.breakpoints.up("sm"),{flexGrow:1}),search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(N.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(N.b)(e.palette.common.white,.25)},marginRight:0,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:600}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"calc(100% - 50px)"},inputInput:{padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},form:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120}}}),ne=function(e){var t=JSON.parse(localStorage.getItem("recentViews")||"[]"),a=t.indexOf(e);a>-1&&t.splice(a,1),t.unshift(e),t.splice(100),localStorage.setItem("recentViews",JSON.stringify(t))},re=function(){return JSON.parse(localStorage.getItem("recentViews")||"[]")},oe=function(e){return localStorage.setItem("history",JSON.stringify([].concat(Object(c.a)(le()),[e])))},ie=function(){var e=le();if(e.length<1)return null;var t=e.pop();return localStorage.setItem("history",JSON.stringify(e)),t},le=function(){return JSON.parse(localStorage.getItem("history")||'["folder/root"]')};function ce(e){var t=-1;do{e/=1024,t++}while(e>1024);return Math.max(e,.1).toFixed(1)+[" kB"," MB"," GB"," TB","PB","EB","ZB","YB"][t]}var se=function(){return localStorage.getItem("token")},me=[];p.a.render(u.a.createElement(function(){var e=ae(),t=u.a.createRef(),a=le(),n=u.a.useState({loggedIn:!!se(),open:!1,submitting:!1}),s=Object(l.a)(n,2),d=s[0],p=s[1],C=u.a.useState(!se()),I=Object(l.a)(C,2),N=I[0],ue=I[1],de=u.a.useState([]),pe=Object(l.a)(de,2),fe=pe[0],he=pe[1],ge=u.a.useState([]),we=Object(l.a)(ge,2),be=we[0],Ee=we[1],ye=u.a.useState(a),ve=Object(l.a)(ye,2),Se=ve[0],Oe=ve[1],ke=u.a.useState([]),je=Object(l.a)(ke,2),Ce=je[0],Ie=je[1],Ne=u.a.useState({key:"modifiedTime",reverse:!0,disabled:!1}),xe=Object(l.a)(Ne,2),Te=xe[0],Pe=xe[1],Le=u.a.useState({open:!1}),Re=Object(l.a)(Le,2),ze=Re[0],Be=Re[1],qe=function(e){document.title=e.open?e.name:"GoogleDriveProxy",Be(e)},Ue=new URLSearchParams;a.length>1&&Ue.set("q",a[a.length-1]);var Je=function(e){var t=new URLSearchParams(window.location.hash.substr(1)),a=t.get("q"),n=t.get("f"),r=new URLSearchParams;r.set("q",a||"folder/root"),n&&r.set("f",n),Ue.get("q")!=r.get("q")&&(e&&"rewind"!=e.type&&(Se.push(Ue.get("q")),oe(Ue.get("q"))),We({value:r.get("q")})),n?Me({open:!0,id:n}):qe({open:!1}),window.history.replaceState({},"","#"+r.toString()),Ue=r},Ge=function(e,t){if(Te.disabled)return 0;if(Te.reverse){var a=e;e=t,t=a}var n=Te.key;return"name"===n||"modifiedTime"===n?e[n].localeCompare(t[n]):e[n]&&t[n]?parseInt(e[n])-parseInt(t[n]):e.modifiedTime.localeCompare(t.modifiedTime)},We=function(e){return ue(!0),fetch("".concat(Q).concat(e.value),Object(i.a)({headers:{Authorization:se(),"Content-Type":"application/json"}},e.opts?e.opts:{})).then(function(e){return e.json()}).then(function(t){return Pe(Object(i.a)({},Te,{disabled:!1===e.sort})),he(me=t.files.filter(function(e){return e.mimeType!==$})),Ee(t.files.filter(function(e){return e.mimeType===$})),t}).then(function(t){return e.postProcess?e.postProcess(t):null}).catch(alert).finally(function(){window.scrollTo(0,0),ue(!1)})},De=function(e){e&&e.preventDefault&&e.preventDefault();var a=new URLSearchParams(window.location.hash.substr(1));a.set("q",t.current.value?"query/".concat(t.current.value):"folder/root"),window.history.replaceState({},"","#"+a.toString()),window.dispatchEvent(new Event("myhashchange"))},Me=function(e){if(e.name)qe(e);else{var t=me.find(function(t){return t.id===e.id});t?(qe(Object(i.a)({},e,{name:t.name})),ne(e.id)):fetch("".concat(Q,"file"),{body:JSON.stringify({files:[e.id]}),method:"POST",headers:{Authorization:se(),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){1===t.files.length&&(qe(Object(i.a)({},e,{name:t.files[0].name})),ne(e.id))}).catch(console.log)}},Ae=function(e){"Enter"===e.key&&d.username&&d.password&&Fe()},Fe=function(){p(Object(i.a)({},d,{submitting:!0})),fetch("".concat(Q,"auth"),{body:JSON.stringify({username:d.username,password:d.password}),method:"POST",headers:{"Content-Type":"application/json"}}).then(function(e){if(401===e.status)throw alert("Incorrect username or password."),e;if(200===e.status)return e.json();throw alert("Unknown response "+e.status+" from server."),e}).then(function(e){localStorage.setItem("token",e.token),Ve(),p({loggedIn:!0,open:!1,submitting:!1})}).catch(function(e){console.log(e),p(Object(i.a)({},d,{submitting:!1}))})},Ve=function(){Je(),fetch("".concat(Q,"favorite"),{headers:{Authorization:se()}}).then(function(e){return e.json()}).then(function(e){return Ie(e.files)}).catch(alert)};Object(m.useEffect)(function(){window.addEventListener("hashchange",Je,!1),window.addEventListener("myhashchange",Je,!1),window.addEventListener("rewind",Je,!1),se()&&Ve()},[]);var Ke=function(e){var t=!Ce.includes(e);fetch("".concat(Q,"favorite/").concat(e),{headers:{Authorization:se()},method:t?"PUT":"DELETE"}).then(function(){var a=Object(o.a)(r.a.mark(function a(n){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(204!==n.status){a.next=4;break}t?Ce.includes(e)||Ie([e].concat(Object(c.a)(Ce))):Ie(Ce.filter(function(t){return t!==e})),a.next=11;break;case 4:if(507!==n.status){a.next=10;break}return a.next=7,n.json();case 7:throw a.sent.errorMessage;case 10:throw n.json();case 11:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()).catch(alert).finally(Xe)},_e=function(e){var t,a,n,r=e.target;do{t=(r=r.parentNode).attributes.getNamedItem("data-id")?r.attributes.getNamedItem("data-id").value:null,a=r.attributes.getNamedItem("data-name")?r.attributes.getNamedItem("data-name").value:null,n=r.attributes.getNamedItem("data-mimetype")?r.attributes.getNamedItem("data-mimetype").value:null}while(r.parentNode&&!(t&&a&&n));if("svg"===e.target.tagName||"path"===e.target.tagName)Ke(t);else{var o=new URLSearchParams(window.location.hash.substr(1));n===$?(o.set("q","folder/".concat(t)),window.history.replaceState({},"","#"+o.toString()),window.dispatchEvent(new Event("myhashchange"))):(o.set("f",t),window.history.replaceState({},"","#"+o.toString()),window.dispatchEvent(new Event("myhashchange")))}},He=u.a.useState(null),Ye=Object(l.a)(He,2),Ze=Ye[0],Qe=Ye[1],Xe=function(){return Qe(null)};return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,null),u.a.createElement(h.a,{position:"sticky",className:e.appBar},u.a.createElement(g.a,null,d.loggedIn?u.a.createElement(G.a,{color:"inherit","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){return Qe(e.currentTarget)}},u.a.createElement(w.a,null)):u.a.createElement(T.a,{variant:"contained",onClick:function(){return p(Object(i.a)({},d,{open:!0}))}},"Login"),u.a.createElement(k.a,{id:"simple-menu",keepMounted:!0,anchorEl:Ze,open:Boolean(Ze),onClose:Xe},u.a.createElement(W.a,{onClick:function(){window.history.replaceState({},"","#"),window.dispatchEvent(new Event("myhashchange"))}},"Home"),u.a.createElement(W.a,{onClick:function(){return We({value:"favorite?alt=content",postProcess:function(e){return Ie(e.files.map(function(e){return e.id}))}})}},"Favorites"),u.a.createElement(W.a,{onClick:function(e){e.target.innerText&&e.target.innerText.includes("Order By")&&Pe(Object(i.a)({},Te,{reverse:!Te.reverse}))}},u.a.createElement("form",{className:e.form,autoComplete:"off"},u.a.createElement(D.a,{className:e.formControl},u.a.createElement(M.a,{htmlFor:"orderby"},"Order By",Te.reverse?" \u2b07\ufe0f":" \u2b06\ufe0f"),u.a.createElement(A.a,{value:Te.key,onChange:function(e){return Pe(Object(i.a)({},Te,{key:e.target.value}))},inputProps:{name:"Order By",id:"orderby"}},u.a.createElement(W.a,{value:"modifiedTime"},"Last Modified"),u.a.createElement(W.a,{value:"name"},"Name"),u.a.createElement(W.a,{value:"size"},"Size"))))),u.a.createElement(W.a,{onClick:function(){var e=re();e.length&&We({sort:!1,value:"file",opts:{body:JSON.stringify({files:e}),method:"POST"}}).then(Xe)}},"Recently Viewed"),u.a.createElement(W.a,{onClick:function(){t.current.value="",p({loggedIn:!1,open:!1,submitting:!1}),he([]),Ee([]),Ie([]),Oe([]),ue(!0),localStorage.removeItem("token"),localStorage.removeItem("history"),Xe()}},"Logout")),u.a.createElement("div",{className:e.grow}),u.a.createElement("div",{className:e.search},u.a.createElement("div",{className:e.searchIcon},u.a.createElement(b.a,null)),u.a.createElement("form",{action:".",onSubmit:De},u.a.createElement(x.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"Search keywords"},inputRef:t,disabled:N,type:"search"}),u.a.createElement(G.a,{disabled:N,onClick:De,color:"inherit"},u.a.createElement(E.a,null)))),u.a.createElement("div",{className:e.grow}),u.a.createElement(G.a,{color:"inherit",disabled:Se.length<1,onClick:function(){var e=new URLSearchParams(window.location.hash.substr(1));e.set("q",Se.pop()),ie(),window.history.replaceState({},"","#"+e.toString()),window.dispatchEvent(new Event("rewind"))}},u.a.createElement(y.a,null))),N&&d.loggedIn&&u.a.createElement(J.a,{variant:"query"})),u.a.createElement("main",null,u.a.createElement(R.a,{className:e.cardGrid,maxWidth:"lg"},u.a.createElement(L.a,{container:!0,spacing:4},be.sort(Ge).concat(fe.sort(Ge)).map(function(t){return u.a.createElement(L.a,{item:!0,key:t.id,xs:12,sm:6,md:3},u.a.createElement(z.a,{className:e.card,"data-id":t.id,"data-name":t.name,"data-mimetype":t.mimeType,style:{position:"relative"}},function(t){var a=t.modifiedTime,n=t.size;return a&&n?u.a.createElement(Z.LazyLoadImage,{onClick:_e,once:!0,offset:600,style:{cursor:"pointer"},src:t.mimeType===$?ee:t.thumbnailLink||te}):u.a.createElement(B.a,{className:e.cardMedia,title:t.name,onClick:_e,image:ee})}(t),t.mimeType!==$&&u.a.createElement(G.a,{size:"small",color:"primary",onClick:_e,style:{position:"absolute",top:"17px",right:"20px"}},Ce.includes(t.id)?u.a.createElement(v.a,{style:{fill:"#ea062c"}}):u.a.createElement(S.a,{style:{fill:"#ea062c"}})),u.a.createElement(q.a,{className:e.cardContent},u.a.createElement(F.a,{title:t.modifiedTime.substr(0,10),placement:"top"},u.a.createElement(j.a,{variant:"subtitle2"},t.name))),u.a.createElement(U.a,null,u.a.createElement(T.a,{size:"small",color:"primary",onClick:_e},"View"),t.mimeType!==$&&u.a.createElement(F.a,{title:ce(parseInt(t.size)),placement:"top"},u.a.createElement(T.a,{size:"small",color:"primary",href:"".concat(Q,"file/").concat(t.id),download:t.name,target:"_blank"},"Download")),t.mimeType!==$&&X&&u.a.createElement(T.a,{size:"small",color:"primary",href:"iina://open?url=".concat(encodeURI(Q+"file/"+t.id))},u.a.createElement("span",{role:"img","aria-label":"play in iina"},"\u25b6\ufe0fIINA")))))})))),u.a.createElement(P.a,{open:ze.open,onClose:function(){var e=new URLSearchParams(window.location.hash.substr(1));e.delete("f"),window.history.replaceState({},"","#"+e.toString()),window.dispatchEvent(new Event("myhashchange"))},"aria-labelledby":"view screen",fullWidth:!0,maxWidth:"lg"},ze.open&&u.a.createElement(g.a,null,u.a.createElement(j.a,{noWrap:!0,variant:"h6",className:e.title},ze.name),u.a.createElement("div",{className:e.grow}),u.a.createElement(G.a,{size:"small",color:"primary",onClick:function(){return Ke(ze.id)},style:{marginRight:"4px"}},Ce.includes(ze.id)?u.a.createElement(v.a,{style:{fill:"#ea062c"}}):u.a.createElement(S.a,{style:{fill:"#ea062c"}})),u.a.createElement(G.a,{size:"small",color:"primary",href:"".concat(Q,"file/").concat(ze.id),download:ze.name,target:"_blank"},u.a.createElement(O.a,null))),ze.open&&u.a.createElement("video",{src:"".concat(Q,"file/").concat(ze.id),controls:!0,autoPlay:!0})),u.a.createElement(P.a,{open:d.open,onClose:function(){return p(Object(i.a)({},d,{open:!1}))},"aria-labelledby":"login window",fullWidth:!0,maxWidth:"xs"},u.a.createElement(V.a,null,"Login to GoogleDriveProxy"),u.a.createElement(_.a,null,u.a.createElement(K.a,null,"To use this app, please enter your credential here."),u.a.createElement("form",{autoComplete:"off",action:"."},u.a.createElement(H.a,{autoFocus:!0,required:!0,fullWidth:!0,margin:"normal",type:"text",label:"Username",disabled:d.submitting,onKeyPress:Ae,inputProps:{autoCapitalize:"off",autoCorrect:"off"},onChange:function(e){return p(Object(i.a)({},d,{username:e.target.value}))}}),u.a.createElement(H.a,{required:!0,fullWidth:!0,margin:"normal",type:"password",label:"Password",disabled:d.submitting,onKeyPress:Ae,onChange:function(e){return p(Object(i.a)({},d,{password:e.target.value}))}}))),u.a.createElement(Y.a,null,u.a.createElement(T.a,{style:{position:"absolute",left:"10px"},onClick:function(){localStorage.setItem("token",d.password),p({loggedIn:!0,open:!1,submitting:!1}),Ve()},disabled:!d.password}),u.a.createElement(T.a,{disabled:!d.username||!d.password||d.submitting,onClick:Fe,color:"primary"},"Submit"))))},null),document.getElementById("root"))},97:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.51d2e172.chunk.js.map