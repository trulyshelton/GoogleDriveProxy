(this.webpackJsonpgdp=this.webpackJsonpgdp||[]).push([[0],{104:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(59),r=n.n(a),i=n(68),o=n(12),c=n(18),s=n(60),l=n(43),d=n(0),u=n.n(d),h=n(11),j=n.n(h),p=(n(104),n(112)),m=n(113),b=n(78),f=n(114),g=n(116),O=n(117),x=n(118),w=n(83),y=n(84),v=n(121),S=n(61),k=n(41),C=n(110),N=n(111),P=n(13),T=n(63),I=n(33),E=n(86),B=n(62),R=n(120),L=n(79),q=n(80),z=n(81),U=n(82),J=n(119),D=n(40),G=n(28),W=n(115),A=n(129),M=n(127),V=n(128),F=n(122),K=n(124),_=n(123),H=n(87),Y=n(125),Z=n(69),Q=n.n(Z),X=n(4),$="https://api.sheltonhuang.me/GoogleDriveProxy/",ee=navigator.platform.toUpperCase().indexOf("MAC")>=0,te="application/vnd.google-apps.folder",ne=Object(C.a)((function(e){return{appBar:{backgroundColor:N.a[700]},icon:{marginRight:e.spacing(2)},grow:{flexGrow:1},conditionGrow:Object(l.a)({},e.breakpoints.up("sm"),{flexGrow:1}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(P.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.b)(e.palette.common.white,.25)},marginRight:0,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:600}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"calc(100% - 50px)"},inputInput:{padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%",cursor:"pointer"},cardContent:{flexGrow:1},form:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},center:{textAlign:"center"}}})),ae=function(){return JSON.parse(localStorage.getItem("orderBy")||'{"key":"createdTime","order":" desc"}')},re=function(e){var t=JSON.parse(localStorage.getItem("recentViews")||"[]"),n=t.indexOf(e);n>-1&&t.splice(n,1),t.unshift(e),t.splice(100),localStorage.setItem("recentViews",JSON.stringify(t))},ie=function(){return JSON.parse(localStorage.getItem("history")||'["folder/root"]')};function oe(e){var t=-1;do{e/=1024,t++}while(e>1024);return Math.max(e,.1).toFixed(1)+[" kB"," MB"," GB"," TB","PB","EB","ZB","YB"][t]}var ce=function(){return localStorage.getItem("token")},se=[];function le(){var e=ne(),t=u.a.createRef(),n=ie(),a=u.a.useState({loggedIn:!!ce(),open:!1,submitting:!1}),l=Object(c.a)(a,2),h=l[0],j=l[1],C=u.a.useState(!ce()),N=Object(c.a)(C,2),P=N[0],Z=N[1],le=u.a.useState({nextPageToken:null,opts:null}),de=Object(c.a)(le,2),ue=de[0],he=de[1],je=u.a.useState([]),pe=Object(c.a)(je,2),me=pe[0],be=pe[1],fe=u.a.useState([]),ge=Object(c.a)(fe,2),Oe=ge[0],xe=ge[1],we=u.a.useState(n),ye=Object(c.a)(we,2),ve=ye[0],Se=ye[1],ke=u.a.useState([]),Ce=Object(c.a)(ke,2),Ne=Ce[0],Pe=Ce[1],Te=u.a.useState(ae()),Ie=Object(c.a)(Te,2),Ee=Ie[0],Be=Ie[1],Re=u.a.useState({open:!1}),Le=Object(c.a)(Re,2),qe=Le[0],ze=Le[1],Ue=function(e){document.title=e.open?e.name:"GoogleDriveProxy",ze(e)},Je=new URLSearchParams;n.length>1&&Je.set("q",n[n.length-1]);var De=function(e){var t=new URLSearchParams(window.location.hash.substr(1)),n=t.get("q"),a=t.get("f"),r=new URLSearchParams;r.set("q",n||"folder/root"),a&&r.set("f",a);var i,o=ae(),c=new URLSearchParams({orderBy:o.key+o.order}).toString();Je.get("q")!==r.get("q")?(e&&"rewind"!==e.type&&(ve.push(Je.get("q")),i=Je.get("q"),localStorage.setItem("history",JSON.stringify([].concat(Object(s.a)(ie()),[i])))),Ge({value:r.get("q")+"?"+c})):e&&e.force&&Ge({value:r.get("q")+"?"+c}),a?Ae({open:!0,id:a}):Ue({open:!1}),window.history.replaceState({},"","#"+r.toString()),Je=r},Ge=function(e){return Z(!0),fetch("".concat($).concat(e.value),Object(o.a)({headers:{Authorization:ce(),"Content-Type":"application/json"}},e.opts?e.opts:{})).then((function(e){return e.json()})).then((function(t){return se=t.files.filter((function(e){return e.mimeType!==te})),be(se),xe(t.files.filter((function(e){return e.mimeType===te}))),t.nextPageToken?he({nextPageToken:t.nextPageToken,opts:e}):he({nextPageToken:null,opts:null}),t})).then((function(t){return e.postProcess?e.postProcess(t):null})).catch(alert).finally((function(){window.scrollTo(0,0),Z(!1)}))},We=function(e){e&&e.preventDefault&&e.preventDefault();var n=new URLSearchParams(window.location.hash.substr(1));n.set("q",t.current.value?"query/".concat(t.current.value):"folder/root"),window.history.replaceState({},"","#"+n.toString()),window.dispatchEvent(new Event("myhashchange"))},Ae=function(e){if(e.name)Ue(e);else{var t=se.find((function(t){return t.id===e.id}));t?(Ue(Object(o.a)(Object(o.a)({},e),{},{name:t.name})),re(e.id)):fetch("".concat($,"file"),{body:JSON.stringify({files:[e.id]}),method:"POST",headers:{Authorization:ce(),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){1===t.files.length&&(Ue(Object(o.a)(Object(o.a)({},e),{},{name:t.files[0].name})),re(e.id))})).catch(console.log)}},Me=function(e){"Enter"===e.key&&h.username&&h.password&&Ve()},Ve=function(){j(Object(o.a)(Object(o.a)({},h),{},{submitting:!0})),fetch("".concat($,"auth"),{body:JSON.stringify({username:h.username,password:h.password}),method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){if(401===e.status)throw alert("Incorrect username or password."),e;if(200===e.status)return e.json();throw alert("Unknown response "+e.status+" from server."),e})).then((function(e){localStorage.setItem("token",e.token),Fe(),j({loggedIn:!0,open:!1,submitting:!1})})).catch((function(e){console.log(e),j(Object(o.a)(Object(o.a)({},h),{},{submitting:!1}))}))},Fe=function(){De(),fetch("".concat($,"favorite"),{headers:{Authorization:ce()}}).then((function(e){return e.json()})).then((function(e){return Pe(e.files)})).catch(alert)};Object(d.useEffect)((function(){window.addEventListener("hashchange",De,!1),window.addEventListener("myhashchange",De,!1),window.addEventListener("rewind",De,!1),ce()&&Fe()}),[]);var Ke=function(e){var t=!Ne.includes(e);fetch("".concat($,"favorite/").concat(e),{headers:{Authorization:ce()},method:t?"PUT":"DELETE"}).then(function(){var n=Object(i.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(204!==a.status){n.next=4;break}t?Ne.includes(e)||Pe([e].concat(Object(s.a)(Ne))):Pe(Ne.filter((function(t){return t!==e}))),n.next=11;break;case 4:if(507!==a.status){n.next=10;break}return n.next=7,a.json();case 7:throw n.sent.errorMessage;case 10:throw a.json();case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch(alert).finally(Xe)};Object(d.useEffect)((function(){var e;if(e=Ee,localStorage.setItem("orderBy",JSON.stringify(e)),ce()){var t=new Event("myhashchange");t.force=!0,window.dispatchEvent(t)}}),[Ee]);var _e=function(e){var t,n,a,r=e.target;do{t=(r=r.parentNode).attributes.getNamedItem("data-id")?r.attributes.getNamedItem("data-id").value:null,n=r.attributes.getNamedItem("data-name")?r.attributes.getNamedItem("data-name").value:null,a=r.attributes.getNamedItem("data-mimetype")?r.attributes.getNamedItem("data-mimetype").value:null}while(r.parentNode&&!(t&&n&&a));if("svg"===e.target.tagName||"path"===e.target.tagName)Ke(t);else{var i=new URLSearchParams(window.location.hash.substr(1));a===te?(i.set("q","folder/".concat(t)),window.history.replaceState({},"","#"+i.toString()),window.dispatchEvent(new Event("myhashchange"))):(i.set("f",t),window.history.replaceState({},"","#"+i.toString()),window.dispatchEvent(new Event("myhashchange")))}},He=u.a.useState(null),Ye=Object(c.a)(He,2),Ze=Ye[0],Qe=Ye[1],Xe=function(){return Qe(null)};return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(p.a,{}),Object(X.jsxs)(m.a,{position:"sticky",className:e.appBar,children:[Object(X.jsxs)(b.a,{children:[h.loggedIn?Object(X.jsx)(D.a,{color:"inherit","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){return Qe(e.currentTarget)},children:Object(X.jsx)(f.a,{})}):Object(X.jsx)(I.a,{variant:"contained",onClick:function(){return j(Object(o.a)(Object(o.a)({},h),{},{open:!0}))},children:"Login"}),Object(X.jsxs)(S.a,{id:"simple-menu",keepMounted:!0,anchorEl:Ze,open:Boolean(Ze),onClose:Xe,children:[Object(X.jsx)(G.a,{onClick:function(){window.history.replaceState({},"","#"),window.dispatchEvent(new Event("myhashchange"))},children:"Home"}),Object(X.jsx)(G.a,{onClick:function(){return Ge({value:"favorite?alt=content",postProcess:function(e){return Pe(e.files.map((function(e){return e.id})))}})},children:"Favorites"}),Object(X.jsx)(G.a,{onClick:function(e){e.target.innerText&&e.target.innerText.includes("Order By")&&Be(Object(o.a)(Object(o.a)({},Ee),{},{order:Ee.order.length?"":" desc"}))},children:Object(X.jsx)("form",{className:e.form,autoComplete:"off",children:Object(X.jsxs)(W.a,{className:e.formControl,children:[Object(X.jsxs)(A.a,{htmlFor:"orderby",children:["Order By",Ee.order.length?" \u2b07\ufe0f":" \u2b06\ufe0f"]}),Object(X.jsxs)(M.a,{value:Ee.key,onChange:function(e){return Be(Object(o.a)(Object(o.a)({},Ee),{},{key:e.target.value}))},inputProps:{name:"Order By",id:"orderby"},children:[Object(X.jsx)(G.a,{value:"createdTime",children:"Create Time"}),Object(X.jsx)(G.a,{value:"name",children:"Name"}),Object(X.jsx)(G.a,{value:"quotaBytesUsed",children:"Size"})]})]})})}),Object(X.jsx)(G.a,{onClick:function(){var e=JSON.parse(localStorage.getItem("recentViews")||"[]");e.length&&Ge({value:"file",opts:{body:JSON.stringify({files:e}),method:"POST"}}).then(Xe)},children:"Recently Viewed"}),Object(X.jsx)(G.a,{onClick:function(){t.current.value="",j({loggedIn:!1,open:!1,submitting:!1}),be([]),xe([]),Pe([]),Se([]),Z(!0),localStorage.removeItem("token"),localStorage.removeItem("history"),Xe()},children:"Logout"})]}),Object(X.jsx)("div",{className:e.grow}),Object(X.jsxs)("div",{className:e.search,children:[Object(X.jsx)("div",{className:e.searchIcon,children:Object(X.jsx)(g.a,{})}),Object(X.jsxs)("form",{action:".",onSubmit:We,children:[Object(X.jsx)(T.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"Search keywords"},inputRef:t,disabled:P,type:"search"}),Object(X.jsx)(D.a,{disabled:P,onClick:We,color:"inherit",children:Object(X.jsx)(O.a,{})})]})]}),Object(X.jsx)("div",{className:e.grow}),Object(X.jsx)(D.a,{color:"inherit",disabled:ve.length<1,onClick:function(){var e=new URLSearchParams(window.location.hash.substr(1));e.set("q",ve.pop()),function(){var e=ie();if(e.length<1)return null;var t=e.pop();localStorage.setItem("history",JSON.stringify(e))}(),window.history.replaceState({},"","#"+e.toString()),window.dispatchEvent(new Event("rewind"))},children:Object(X.jsx)(x.a,{})})]}),P&&h.loggedIn&&Object(X.jsx)(J.a,{variant:"query"})]}),Object(X.jsx)("main",{children:Object(X.jsxs)(R.a,{className:e.cardGrid,maxWidth:"lg",children:[Object(X.jsxs)(B.a,{container:!0,spacing:4,children:[Oe.map((function(t){return Object(X.jsx)(B.a,{item:!0,xs:12,sm:6,md:3,children:Object(X.jsxs)(L.a,{className:e.card,"data-id":t.id,"data-name":t.name,"data-mimetype":t.mimeType,style:{position:"relative"},children:[Object(X.jsx)(q.a,{className:e.cardMedia,title:t.name,onClick:_e,image:"folderImg.jpg"}),Object(X.jsx)(z.a,{className:e.cardContent,children:Object(X.jsx)(k.a,{variant:"subtitle2",children:t.name})}),Object(X.jsx)(U.a,{children:Object(X.jsx)(I.a,{size:"small",color:"primary",onClick:_e,children:"View"})})]})},t.id)})),me.map((function(t){return Object(X.jsx)(B.a,{item:!0,xs:12,sm:6,md:3,children:Object(X.jsxs)(L.a,{className:e.card,"data-id":t.id,"data-name":t.name,"data-mimetype":t.mimeType,style:{position:"relative"},children:[Object(X.jsx)(q.a,{className:e.cardMedia,title:t.name,onClick:_e,image:t.thumbnailLink||"imgNotFound.jpg"}),Object(X.jsx)(D.a,{size:"small",color:"primary",onClick:_e,style:{position:"absolute",top:"17px",right:"20px"},children:Ne.includes(t.id)?Object(X.jsx)(w.a,{style:{fill:"#ea062c"}}):Object(X.jsx)(y.a,{style:{fill:"#ea062c"}})}),Object(X.jsx)(z.a,{className:e.cardContent,children:Object(X.jsx)(k.a,{variant:"subtitle2",children:t.name})}),Object(X.jsxs)(U.a,{children:[Object(X.jsx)(I.a,{size:"small",color:"primary",onClick:_e,children:"View"}),Object(X.jsx)(V.a,{title:oe(parseInt(t.size)),placement:"top",children:Object(X.jsx)(I.a,{size:"small",color:"primary",href:"".concat($,"file/").concat(t.id),download:t.name,target:"_blank",children:"Download"})}),ee&&Object(X.jsx)(I.a,{size:"small",color:"primary",href:"iina://open?url=".concat(encodeURI($+"file/"+t.id)),children:Object(X.jsx)("span",{role:"img","aria-label":"play in iina",children:"\u25b6\ufe0fIINA"})})]})]})},t.id)}))]}),ue.nextPageToken&&Object(X.jsx)(Q.a,{intervalCheck:!1,intervalDelay:750,scrollCheck:!0,scrollDelay:250,partialVisibility:!0,onChange:function(e){e&&(Z(!0),console.log(ue),fetch("".concat($).concat(ue.opts.value,"&").concat(new URLSearchParams({nextPageToken:ue.nextPageToken}).toString()),Object(o.a)({headers:{Authorization:ce(),"Content-Type":"application/json"}},ue.opts.opts?ue.opts.opts:{})).then((function(e){return e.json()})).then((function(e){return be(se=me.concat(e.files.filter((function(e){return e.mimeType!==te})))),xe(Oe.concat(e.files.filter((function(e){return e.mimeType===te})))),e.nextPageToken?he(Object(o.a)(Object(o.a)({},ue),{},{nextPageToken:e.nextPageToken})):he({nextPageToken:null,opts:null}),e})).catch(alert).finally((function(){Z(!1)})))},children:Object(X.jsx)(k.a,{className:e.center,children:"...loading more..."})})]})}),Object(X.jsxs)(E.a,{open:qe.open,onClose:function(){var e=new URLSearchParams(window.location.hash.substr(1));e.delete("f"),window.history.replaceState({},"","#"+e.toString()),window.dispatchEvent(new Event("myhashchange"))},"aria-labelledby":"view screen",fullWidth:!0,maxWidth:"lg",children:[qe.open&&Object(X.jsxs)(b.a,{children:[Object(X.jsx)(k.a,{noWrap:!0,variant:"h6",className:e.title,children:qe.name}),Object(X.jsx)("div",{className:e.grow}),Object(X.jsx)(D.a,{size:"small",color:"primary",onClick:function(){return Ke(qe.id)},style:{marginRight:"4px"},children:Ne.includes(qe.id)?Object(X.jsx)(w.a,{style:{fill:"#ea062c"}}):Object(X.jsx)(y.a,{style:{fill:"#ea062c"}})}),Object(X.jsx)(D.a,{size:"small",color:"primary",href:"".concat($,"file/").concat(qe.id),download:qe.name,target:"_blank",children:Object(X.jsx)(v.a,{})})]}),qe.open&&Object(X.jsx)("video",{src:"".concat($,"file/").concat(qe.id),controls:!0,autoPlay:!0})]}),Object(X.jsxs)(E.a,{open:h.open,onClose:function(){return j(Object(o.a)(Object(o.a)({},h),{},{open:!1}))},"aria-labelledby":"login window",fullWidth:!0,maxWidth:"xs",children:[Object(X.jsx)(F.a,{children:"Login to GoogleDriveProxy"}),Object(X.jsxs)(_.a,{children:[Object(X.jsx)(K.a,{children:"To use this app, please enter your credential here."}),Object(X.jsxs)("form",{autoComplete:"off",action:".",children:[Object(X.jsx)(H.a,{autoFocus:!0,required:!0,fullWidth:!0,margin:"normal",type:"text",label:"Username",disabled:h.submitting,onKeyPress:Me,inputProps:{autoCapitalize:"off",autoCorrect:"off"},onChange:function(e){return j(Object(o.a)(Object(o.a)({},h),{},{username:e.target.value}))}}),Object(X.jsx)(H.a,{required:!0,fullWidth:!0,margin:"normal",type:"password",label:"Password",disabled:h.submitting,onKeyPress:Me,onChange:function(e){return j(Object(o.a)(Object(o.a)({},h),{},{password:e.target.value}))}})]})]}),Object(X.jsxs)(Y.a,{children:[Object(X.jsx)(I.a,{style:{position:"absolute",left:"10px"},onClick:function(){localStorage.setItem("token",h.password),j({loggedIn:!0,open:!1,submitting:!1}),Fe()},disabled:!h.password}),Object(X.jsx)(I.a,{disabled:!h.username||!h.password||h.submitting,onClick:Ve,color:"primary",children:"Submit"})]})]})]})}j.a.render(Object(X.jsx)(le,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.93c9a22d.chunk.js.map