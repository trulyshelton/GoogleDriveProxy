(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{90:function(e,t,a){e.exports=a(91)},91:function(e,t,a){"use strict";a.r(t);var n=a(51),r=a.n(n),o=a(61),i=a(52),l=a(15),c=a(20),s=a(37),m=a(0),u=a.n(m),d=a(9),p=a.n(d),f=(a(97),a(103)),h=a(104),g=a(71),b=a(105),E=a(107),v=a(108),y=a(109),w=a(74),k=a(75),O=a(115),j=a(53),C=a(46),x=a(68),I=a(102),N=a(11),S=a(80),T=a(36),P=a(78),B=a(73),z=a(111),R=a(112),G=a(69),L=a(113),W=a(114),M=a(110),D=a(35),J=a(26),A=a(106),F=a(122),U=a(121),V=a(79),q=a(116),K=a(118),_=a(117),H=a(77),Y=a(119),Z="https://api.sheltonhuang.me/GoogleDriveProxy/",Q=navigator.platform.toUpperCase().indexOf("MAC")>=0,X="application/vnd.google-apps.folder",$="folderImg.jpg",ee="imgNotFound.jpg",te=Object(x.a)(function(e){return{appBar:{backgroundColor:I.a[700]},icon:{marginRight:e.spacing(2)},grow:{flexGrow:1},conditionGrow:Object(s.a)({},e.breakpoints.up("sm"),{flexGrow:1}),search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(N.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(N.b)(e.palette.common.white,.25)},marginRight:0,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:600}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"calc(100% - 50px)"},inputInput:{padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},form:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120}}}),ae=function(e){var t=JSON.parse(localStorage.getItem("recentViews")||"[]"),a=t.indexOf(e);a>-1&&t.splice(a,1),t.unshift(e),t.splice(100),localStorage.setItem("recentViews",JSON.stringify(t))};function ne(e){var t=-1;do{e/=1024,t++}while(e>1024);return Math.max(e,.1).toFixed(1)+[" kB"," MB"," GB"," TB","PB","EB","ZB","YB"][t]}var re=function(){return localStorage.getItem("token")},oe=[];p.a.render(u.a.createElement(function(){var e=te(),t=u.a.createRef(),a=u.a.useState({loggedIn:!!re(),open:!1,submitting:!1}),n=Object(c.a)(a,2),s=n[0],d=n[1],p=u.a.useState(!re()),x=Object(c.a)(p,2),I=x[0],N=x[1],ie=u.a.useState([]),le=Object(c.a)(ie,2),ce=le[0],se=le[1],me=u.a.useState([]),ue=Object(c.a)(me,2),de=ue[0],pe=ue[1],fe=u.a.useState([]),he=Object(c.a)(fe,2),ge=he[0],be=he[1],Ee=u.a.useState([]),ve=Object(c.a)(Ee,2),ye=ve[0],we=ve[1],ke=u.a.useState({key:"modifiedTime",reverse:!0,disabled:!1}),Oe=Object(c.a)(ke,2),je=Oe[0],Ce=Oe[1],xe=u.a.useState({open:!1}),Ie=Object(c.a)(xe,2),Ne=Ie[0],Se=Ie[1],Te=function(e){document.title=e.open?e.name:"GoogleDriveProxy",Se(e)},Pe=function(e,t){if(je.disabled)return 0;if(je.reverse){var a=e;e=t,t=a}var n=je.key;return"name"===n||"modifiedTime"===n?e[n].localeCompare(t[n]):e[n]&&t[n]?parseInt(e[n])-parseInt(t[n]):e.modifiedTime.localeCompare(t.modifiedTime)},Be=function(e){return N(!0),e.rewind&&(e.value=ge[ge.length-2],be(ge.slice(0,ge.length-1))),fetch("".concat(Z).concat(e.value),Object(l.a)({headers:{Authorization:re(),"Content-Type":"application/json"}},e.opts?e.opts:{})).then(function(e){return e.json()}).then(function(t){return Ce(Object(l.a)({},je,{disabled:!1===e.sort})),se(oe=t.files.filter(function(e){return e.mimeType!==X})),pe(t.files.filter(function(e){return e.mimeType===X})),!e.rewind&&!e.opts&&(!ge.length||ge[ge.length-1]!==e.value)&&be([].concat(Object(i.a)(ge),[e.value])),t}).then(function(t){return e.postProcess?e.postProcess(t):null}).catch(alert).finally(function(){return N(!1)})},ze=function(e){e&&e.preventDefault&&e.preventDefault(),Be({value:t.current.value?"query/".concat(t.current.value):"folder/root"})},Re=function(e){if(e.name)Te(e);else{var t=oe.find(function(t){return t.id===e.id});t?(Te(Object(l.a)({},e,{name:t.name})),ae(e.id)):fetch("".concat(Z,"file"),{body:JSON.stringify({files:[e.id]}),method:"POST",headers:{Authorization:re(),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){1===t.files.length&&(Te(Object(l.a)({},e,{name:t.files[0].name})),ae(e.id))}).catch(console.log)}},Ge=function(e){"Enter"===e.key&&s.username&&s.password&&Le()},Le=function(){d(Object(l.a)({},s,{submitting:!0})),fetch("".concat(Z,"auth"),{body:JSON.stringify({username:s.username,password:s.password}),method:"POST",headers:{"Content-Type":"application/json"}}).then(function(e){if(401===e.status)throw alert("Incorrect username or password."),e;if(200===e.status)return e.json();throw alert("Unknown response "+e.status+" from server."),e}).then(function(e){localStorage.setItem("token",e.token),We(),d({loggedIn:!0,open:!1,submitting:!1})}).catch(function(e){console.log(e),d(Object(l.a)({},s,{submitting:!1}))})},We=function(){Be({value:"folder/root"}),fetch("".concat(Z,"favorite"),{headers:{Authorization:re()}}).then(function(e){return e.json()}).then(function(e){return we(e.files)}).catch(alert)};Object(m.useEffect)(function(){var e=function(){return Re({open:!0,id:window.location.hash.substr(1)})};window.addEventListener("hashchange",e,!1),window.addEventListener("myhashchange",e,!1),window.location.hash.substr(1)&&Re({open:!0,id:window.location.hash.substr(1)}),re()&&We()},[]);var Me=function(e){var t=!ye.includes(e);fetch("".concat(Z,"favorite/").concat(e),{headers:{Authorization:re()},method:t?"PUT":"DELETE"}).then(function(){var a=Object(o.a)(r.a.mark(function a(n){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(204!==n.status){a.next=4;break}t?ye.includes(e)||we([e].concat(Object(i.a)(ye))):we(ye.filter(function(t){return t!==e})),a.next=11;break;case 4:if(507!==n.status){a.next=10;break}return a.next=7,n.json();case 7:throw a.sent.errorMessage;case 10:throw n.json();case 11:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()).catch(alert).finally(Ve)},De=function(e){var t,a,n,r=e.target;do{t=(r=r.parentNode).attributes.getNamedItem("data-id")?r.attributes.getNamedItem("data-id").value:null,a=r.attributes.getNamedItem("data-name")?r.attributes.getNamedItem("data-name").value:null,n=r.attributes.getNamedItem("data-mimetype")?r.attributes.getNamedItem("data-mimetype").value:null}while(r.parentNode&&!(t&&a&&n));"svg"===e.target.tagName||"path"===e.target.tagName?Me(t):n===X?Be({value:"folder/".concat(t)}):(window.history.replaceState({},"","#"+t),window.dispatchEvent(new Event("myhashchange")))},Je=u.a.useState(null),Ae=Object(c.a)(Je,2),Fe=Ae[0],Ue=Ae[1],Ve=function(){return Ue(null)};return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,null),u.a.createElement(h.a,{position:"sticky",className:e.appBar},u.a.createElement(g.a,null,s.loggedIn?u.a.createElement(D.a,{color:"inherit","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){return Ue(e.currentTarget)}},u.a.createElement(b.a,null)):u.a.createElement(T.a,{variant:"contained",onClick:function(){return d(Object(l.a)({},s,{open:!0}))}},"Login"),u.a.createElement(j.a,{id:"simple-menu",keepMounted:!0,anchorEl:Fe,open:Boolean(Fe),onClose:Ve},u.a.createElement(J.a,{onClick:function(){return Be({value:"folder/root"})}},"Home"),u.a.createElement(J.a,{onClick:function(){return Be({value:"favorite?alt=content",postProcess:function(e){return we(e.files.map(function(e){return e.id}))}})}},"Favorites"),u.a.createElement(J.a,{onClick:function(e){e.target.innerText&&e.target.innerText.includes("Order By")&&Ce(Object(l.a)({},je,{reverse:!je.reverse}))}},u.a.createElement("form",{className:e.form,autoComplete:"off"},u.a.createElement(A.a,{className:e.formControl},u.a.createElement(F.a,{htmlFor:"orderby"},"Order By",je.reverse?" \u2b07\ufe0f":" \u2b06\ufe0f"),u.a.createElement(U.a,{value:je.key,onChange:function(e){return Ce(Object(l.a)({},je,{key:e.target.value}))},inputProps:{name:"Order By",id:"orderby"}},u.a.createElement(J.a,{value:"modifiedTime"},"Last Modified"),u.a.createElement(J.a,{value:"name"},"Name"),u.a.createElement(J.a,{value:"size"},"Size"))))),u.a.createElement(J.a,{onClick:function(){var e=JSON.parse(localStorage.getItem("recentViews")||"[]");e.length&&Be({sort:!1,value:"file",opts:{body:JSON.stringify({files:e}),method:"POST"}}).then(Ve)}},"Recently Viewed"),u.a.createElement(J.a,{onClick:function(){t.current.value="",d({loggedIn:!1,open:!1,submitting:!1}),se([]),pe([]),we([]),be([]),N(!0),localStorage.removeItem("token"),Ve()}},"Logout")),u.a.createElement("div",{className:e.grow}),u.a.createElement("div",{className:e.search},u.a.createElement("div",{className:e.searchIcon},u.a.createElement(E.a,null)),u.a.createElement("form",{action:".",onSubmit:ze},u.a.createElement(S.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"Search keywords"},inputRef:t,disabled:I,type:"search"}),u.a.createElement(D.a,{disabled:I,onClick:ze,color:"inherit"},u.a.createElement(v.a,null)))),u.a.createElement("div",{className:e.grow}),u.a.createElement(D.a,{color:"inherit",disabled:ge.length<=1,onClick:function(){return Be({rewind:!0})}},u.a.createElement(y.a,null))),I&&s.loggedIn&&u.a.createElement(M.a,{variant:"query"})),u.a.createElement("main",null,u.a.createElement(z.a,{className:e.cardGrid,maxWidth:"lg"},u.a.createElement(B.a,{container:!0,spacing:4},de.sort(Pe).concat(ce.sort(Pe)).map(function(t){return u.a.createElement(B.a,{item:!0,key:t.id,xs:12,sm:6,md:3},u.a.createElement(R.a,{className:e.card,"data-id":t.id,"data-name":t.name,"data-mimetype":t.mimeType,style:{position:"relative"}},function(t){var a=t.modifiedTime,n=t.size;return a&&n?u.a.createElement(V.a,{title:u.a.createElement("div",null,ne(parseInt(n)),u.a.createElement("br",null),a.substr(0,10))},u.a.createElement(G.a,{className:e.cardMedia,onClick:De,style:{height:0},image:t.mimeType===X?$:t.thumbnailLink||ee})):u.a.createElement(G.a,{className:e.cardMedia,title:t.name,onClick:De,image:t.mimeType===X?$:t.thumbnailLink||ee})}(t),t.mimeType!==X&&u.a.createElement(D.a,{size:"small",color:"primary",onClick:De,style:{position:"absolute",top:"17px",right:"20px"}},ye.includes(t.id)?u.a.createElement(w.a,{style:{fill:"#ea062c"}}):u.a.createElement(k.a,{style:{fill:"#ea062c"}})),u.a.createElement(L.a,{className:e.cardContent},u.a.createElement(C.a,{variant:"subtitle1",component:"h2"},t.name)),u.a.createElement(W.a,null,u.a.createElement(T.a,{size:"small",color:"primary",onClick:De},"View"),t.mimeType!==X&&u.a.createElement(V.a,{title:ne(parseInt(t.size)),placement:"top"},u.a.createElement(T.a,{size:"small",color:"primary",href:"".concat(Z,"file/").concat(t.id),download:t.name,target:"_blank"},"Download")),t.mimeType!==X&&Q&&u.a.createElement(T.a,{size:"small",color:"primary",href:"iina://open?url=".concat(encodeURI(Z+"file/"+t.id))},u.a.createElement("span",{role:"img","aria-label":"play in iina"},"\u25b6\ufe0fIINA")))))})))),u.a.createElement(P.a,{open:Ne.open,onClose:function(){Te({open:!1}),window.history.replaceState({},"",window.location.pathname)},"aria-labelledby":"view screen",fullWidth:!0,maxWidth:"lg"},Ne.open&&u.a.createElement(g.a,null,u.a.createElement(C.a,{noWrap:!0,variant:"h6",className:e.title},Ne.name),u.a.createElement("div",{className:e.grow}),u.a.createElement(D.a,{size:"small",color:"primary",onClick:function(){return Me(Ne.id)},style:{marginRight:"4px"}},ye.includes(Ne.id)?u.a.createElement(w.a,{style:{fill:"#ea062c"}}):u.a.createElement(k.a,{style:{fill:"#ea062c"}})),u.a.createElement(D.a,{size:"small",color:"primary",href:"".concat(Z,"file/").concat(Ne.id),download:Ne.name,target:"_blank"},u.a.createElement(O.a,null))),Ne.open&&u.a.createElement("video",{src:"".concat(Z,"file/").concat(Ne.id),controls:!0,autoPlay:!0})),u.a.createElement(P.a,{open:s.open,onClose:function(){return d(Object(l.a)({},s,{open:!1}))},"aria-labelledby":"login window",fullWidth:!0,maxWidth:"xs"},u.a.createElement(q.a,null,"Login to GoogleDriveProxy"),u.a.createElement(_.a,null,u.a.createElement(K.a,null,"To use this app, please enter your credential here."),u.a.createElement("form",{autoComplete:"off",action:"."},u.a.createElement(H.a,{autoFocus:!0,required:!0,fullWidth:!0,margin:"normal",type:"text",label:"Username",disabled:s.submitting,onKeyPress:Ge,onChange:function(e){return d(Object(l.a)({},s,{username:e.target.value}))}}),u.a.createElement(H.a,{required:!0,fullWidth:!0,margin:"normal",type:"password",label:"Password",disabled:s.submitting,onKeyPress:Ge,onChange:function(e){return d(Object(l.a)({},s,{password:e.target.value}))}}))),u.a.createElement(Y.a,null,u.a.createElement(T.a,{style:{position:"absolute",left:"10px"},onClick:function(){localStorage.setItem("token",s.password),d({loggedIn:!0,open:!1,submitting:!1}),We()},disabled:!s.password}),u.a.createElement(T.a,{disabled:!s.username||!s.password||s.submitting,onClick:Le,color:"primary"},"Submit"))))},null),document.getElementById("root"))},97:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.5a14eb83.chunk.js.map