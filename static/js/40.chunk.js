(this["webpackJsonpark-tool"]=this["webpackJsonpark-tool"]||[]).push([[40],{1089:function(e,t,a){"use strict";a.r(t);var n=a(48),i=a(114),r=a(115),o=a(117),l=a(116),s=a(0),c=a.n(s),u=a(404),h=a.n(u),d=a(958),p=a(432),g=a.n(p);function m(e,t,a,n,i){for(var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=n.length,l=Math.floor(o/2),s=r||new Float32Array(t*a*4),c=i?1:0,u=0;u<a;u++)for(var h=0;h<t;h++){for(var d=u,p=h,g=4*(u*t+h),m=0,f=0,v=0,_=0,y=0;y<o;y++){var b=d,x=Math.min(t-1,Math.max(0,p+y-l)),w=4*(b*t+x),k=n[y];m+=e[w]*k,f+=e[w+1]*k,v+=e[w+2]*k,_+=e[w+3]*k}s[g]=m,s[g+1]=f,s[g+2]=v,s[g+3]=_+c*(255-_)}return s}function f(e,t,a,n,i){for(var r=n.length,o=Math.floor(r/2),l=new Float32Array(t*a*4),s=i?1:0,c=0;c<a;c++)for(var u=0;u<t;u++){for(var h=c,d=u,p=4*(c*t+u),g=0,m=0,f=0,v=0,_=0;_<r;_++){var y=4*(Math.min(a-1,Math.max(0,h+_-o))*t+d),b=n[_];g+=e[y]*b,m+=e[y+1]*b,f+=e[y+2]*b,v+=e[y+3]*b}l[p]=g,l[p+1]=m,l[p+2]=f,l[p+3]=v+s*(255-v)}return l}function v(e,t,a,n,i,r){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=f(e,t,a,i,r);return m(l,t,a,n,r,o)}for(var _=a(842),y=a(86),b=a(494),x=a.n(b),w=a(38),k=a(624),E=a(626),S=a(905),C=a(504),z=a(625),I=a(960),A=a.n(I),j=a(959),O=a.n(j),N=a(640),M=a.n(N),R=a(90),D=new Array(19),H=0,L=D.length;H<L;H++)D[H]=2<<H;var W={38:0,40:1,37:2,39:3,75:0,74:1,72:2,76:3,87:0,83:1,65:2,68:3};if(window.navigator.msPointerEnabled)var P="MSPointerDown",T="MSPointerMove",B="MSPointerUp";else P="touchstart",T="touchmove",B="touchend";var q=["#eee4da","#ede0c8","#f2b179","#f59563","#f67c5f","#f65e3b","#edcc61","#edc850","#edc53f","#edc22e","#edad00","#b2e8a1","#92ed83","#83ed79","#60ed70","#9bcded","#71a9ed","#5991ed","#5975ed","#4c50ed"],G=[.8,.65,.55,.39,.3,.25],Q=h()((function(e){return{root:{position:"absolute",top:0,left:0,width:"".concat(480,"px"),height:"".concat(480,"px"),zIndex:2,"&>div":{zIndex:2,transition:"top ".concat(155,"ms ease, left ").concat(155,"ms ease")},"&>div[appear]":{animationName:"$appear",animationDuration:"".concat(124,"ms")},"&>div[upgrade]":{animationName:"$upgrade",animationDuration:"".concat(170,"ms")}},"@keyframes appear":{"0%":{opacity:0,transform:"scale(0, 0)"},"100%":{opacity:1,transform:"scale(1, 1)"}},"@keyframes upgrade":{"0%":{opacity:0,transform:"scale(0, 0)"},"62%":{opacity:1,transform:"scale(1.2, 1.2)"},"100%":{opacity:1,transform:"scale(1, 1)"}}}}))(function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.refer;return c.a.createElement("div",{ref:a,className:t.root})}}]),a}(c.a.PureComponent)),U={gallery:{display:"flex",flexWrap:"wrap",fontSize:"50px !important",width:"560px",margin:"10px auto","&>div":{margin:"5px",width:"60px",height:"60px",position:"relative",overflow:"hidden",borderRadius:"5px"}},mask:{position:"absolute",top:0,left:0,background:"rgba(0,0,0,0.75)",height:"100%",width:"100%",borderRadius:"6px",zIndex:20},gameover:{fontSize:"60px",fontWeight:"bold",height:"60px",lineHeight:"60px",color:"#faf8ef",marginTop:"170px",textAlign:"center","&:after":{content:'"Game Over"'}},win:{fontSize:"50px",fontWeight:"bold",height:"50px",lineHeight:"50px",color:"#faf8ef",marginTop:"170px",textAlign:"center",userSelect:"none"},lower:{width:"100%",display:"flex",justifyContent:"center",marginTop:"20px","& div":{backgroundColor:"rgba(255,255,255,0.3)",margin:"8px",borderRadius:"3px",height:"36px",width:"115px",textAlign:"center",lineHeight:"36PX",fontSize:"18px",fontWeight:"400",color:"#fff"},"& div[text]":{"&:before":{content:"attr(text)"}}}},F=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).intiBackgroundCells(),n.initGalleryCells(),n.cells=[],n.progress=0,n._progress=-1,n.newCells(),n.newCells(),n.state={gameover:!1,win:!1,end:!1,gg:!1,endless:!1},n}return Object(r.a)(a,[{key:"reset",value:function(){var e=this;this.cells.forEach((function(t){return e.container.removeChild(t.dom)})),this.cells=[],this.newCells(),this.newCells(),this.progress=0,this._progress=-1,this.updateCells(),this.setState({gameover:!1,win:!1,end:!1,gg:!1,endless:!1})}},{key:"componentDidMount",value:function(){this.updateCells(),this.attachEvent(),this.props.bindHandle&&this.props.bindHandle(this),this.windowBind()}},{key:"componentWillUnmount",value:function(){var e=this;this.windowUnbind(),this.props.bindHandle&&this.props.bindHandle(null),this.cells.forEach((function(t){return e.container.removeChild(t.dom)})),document.removeEventListener("keydown",this.keydownEvent)}},{key:"attachEvent",value:function(){var e,t,a=this;this.keydownEvent=function(e){var t=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey,n=W[e.which];t||void 0!==n&&(e.preventDefault(),a.alignCells(n))},document.addEventListener("keydown",this.keydownEvent),this.container.addEventListener(P,(function(a){!window.navigator.msPointerEnabled&&a.touches.length>1||a.targetTouches.length>1||(window.navigator.msPointerEnabled?(e=a.pageX,t=a.pageY):(e=a.touches[0].clientX,t=a.touches[0].clientY),a.preventDefault())})),this.container.addEventListener(T,(function(e){e.preventDefault()})),this.container.addEventListener(B,(function(n){if(!(!window.navigator.msPointerEnabled&&n.touches.length>0||n.targetTouches.length>0)){var i,r;window.navigator.msPointerEnabled?(i=n.pageX,r=n.pageY):(i=n.changedTouches[0].clientX,r=n.changedTouches[0].clientY);var o=i-e,l=Math.abs(o),s=r-t,c=Math.abs(s);Math.max(l,c)>10&&a.alignCells(l>c?o>0?3:2:s>0?1:0)}}))}},{key:"intiBackgroundCells",value:function(){this.backgroundCells=[];for(var e=0;e<this.props.game_size;e++)for(var t=0;t<this.props.game_size;t++)this.backgroundCells.push(c.a.createElement("div",{key:"cell_".concat(e,"_").concat(t),x:e,y:t,block:"",bg:""}))}},{key:"initGalleryCells",value:function(){var e=this;this.galleryCells=[],this.bgLoader=[],this.galleryDom=new Array(D.length);for(var t=function(t){e.galleryCells.push(c.a.createElement("div",{ref:function(a){return e.galleryDom[t]=a},key:t,value:D[t],blur:""})),e.bgLoader.push(c.a.createElement("div",{key:t,value:D[t]}))},a=0;a<D.length;a++)t(a)}},{key:"windowBind",value:function(){var e=this;window.game={},window.game.help="Restart - game.restart() \nUp - game.u()\nDown - game.d()\nLeft - game.l()\nRight - game.f()\n",window.game.restart=function(){return e.reset()},window.game.u=function(){return e.alignCells(0)},window.game.d=function(){return e.alignCells(1)},window.game.l=function(){return e.alignCells(2)},window.game.r=function(){return e.alignCells(3)}}},{key:"windowUnbind",value:function(){window.game=null}},{key:"newCells",value:function(){var e=Math.floor((this.props.game_size_2-this.cells.length)*Math.random());this.cells.sort((function(e,t){return e.position-t.position})),this.cells.forEach((function(t){t.position<=e&&e++}));var t={position:e,value:0,x:this.props._x[e],y:this.props._y[e]};return this.cells.push(t),t}},{key:"isDead",value:function(){var e=this.getRows();if(e.forEach((function(e){return e.sort((function(e,t){return e.x-t.x}))})),!Z(e))return!1;var t=this.getColumn();return t.forEach((function(e){return e.sort((function(e,t){return e.y-t.y}))})),!!Z(t)}},{key:"alignCells",value:function(e){var t=this;if(!this.freeze&&!this.state.gg){this.freeze=!0,this.cells.length>=this.props.game_size_2&&this.isDead()&&this.setState({gameover:!0,gg:!0});for(var a=e<2?this.getColumn():this.getRows(),n=1===e||3===e,i=e<2?function(e,t){return e.y-t.y}:function(e,t){return e.x-t.x},r=e<2?function(e,t){return e.y=t}:function(e,t){return e.x=t},o=n?function(e,a){return r(e,t.props.game_size-1-a)}:r,l=0;l<this.props.game_size;l++){var s=a[l].sort(i);$(s,n);for(var c=0,u=0;u<s.length;u++){var h=n?s.length-u-1:u;s[h].merged?o(s[h],c-1):(o(s[h],c),c++)}}this.cells.forEach((function(e){e.position=t.props.game_size*e.y+e.x,e.upgrade&&t.cells.push({x:e.x,y:e.y,position:e.position,value:e.value+1,anime:!0})})),this.updateCells(!0)}}},{key:"updateCells",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];setTimeout((function(){return e.freeze=!1}),50);var a=this.cells.filter((function(e){return e.merged||e.upgrade})),n=this.cells.findIndex((function(e){return e.dom&&(e._x!==e.x||e._y!==e.y)}))>-1;if(this.cells.forEach((function(t){t.value>e.progress&&(e.progress=t.value),t.dom?(t._x=t.x,t._y=t.y,t.dom.setAttribute("x",t.x),t.dom.setAttribute("y",t.y),(t.merged||t.upgrade)&&(t.dom.style.zIndex=t.upgrade?"3 !important":null,setTimeout((function(){e.container.removeChild(t.dom),t.dom=null}),232.5))):e.addCell(t,Boolean(t.anime),n?77.5:0)})),a.forEach((function(t){t.upgrade=null,e.cells.splice(e.cells.indexOf(t),1)})),t&&n)for(var i=0;i<this.props.difficulty;i++)if(this.cells.length<this.props.game_size_2){var r=this.newCells();this.addCell(r,!1,n?77.5:0)}this.progress>this._progress&&(this.galleryDom.forEach((function(t,a){t&&a<=e.progress&&t.removeAttribute("blur")})),this._progress=this._progress),!this.state.endless&&this.progress>=this.props.ending&&(this.props.ending>=10&&4===this.props.game_size&&(localStorage.getItem("pa")||Object(R.b)()),this.setState({win:!0,gg:!0})),this.progress>=D.length-1&&this.setState({end:!0,gg:!0})}},{key:"addCell",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e.dom=document.createElement("div"),e.dom.setAttribute("value",D[e.value]),e.dom.setAttribute("block",""),e.dom.setAttribute(a?"upgrade":"appear",""),e.dom.setAttribute("x",e.x),e.dom.setAttribute("y",e.y),e._x=e.x,e._y=e.y,e.dom.style.zIndex="4 !important",setTimeout((function(){t.container.appendChild(e.dom),setTimeout((function(){e.dom.style.zIndex=null}),170)}),n)}},{key:"getRows",value:function(){for(var e=new Array(this.props.game_size),t=0;t<this.props.game_size;t++)e[t]=[];return this.cells.forEach((function(t){return e[t.y].push(t)})),e}},{key:"getColumn",value:function(){for(var e=new Array(this.props.game_size),t=0;t<this.props.game_size;t++)e[t]=[];return this.cells.forEach((function(t){return e[t.x].push(t)})),e}},{key:"render",value:function(){var e=this,t=this.props.classes;return c.a.createElement("div",{className:t.root},c.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"5px 0 10px 0"}},c.a.createElement("div",{style:{display:"flex",margin:"0 10px"}},c.a.createElement("input",{ref:function(t){return e.number_check=t},type:"checkbox",onClick:function(t){e.number_check_handle(t.target.checked)}}),"\u6570\u5b57"),c.a.createElement("div",{style:{display:"flex",margin:"0 10px"}},c.a.createElement("input",{ref:function(t){return e.glass_check=t},type:"checkbox",onClick:function(t){e.glass_check_handle(t.target.checked)}}),"\u900f\u660e\u5b57\u4f53 (\u624b\u673a\u53caSafari\u7528\u6237\u614e\u7528)")),c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("div",{className:t.container},this.backgroundCells,c.a.createElement(Q,{refer:function(t){return e.container=t}}),this.state.gg&&c.a.createElement("div",{className:t.mask},this.state.gameover&&c.a.createElement("div",{className:t.gameover}),this.state.win&&c.a.createElement("div",{className:t.win},"\u7406\u667a\u56de\u590d\u5b8c\u6210"),this.state.end&&c.a.createElement("div",{className:t.win},"\u7406\u667a\u6ea2\u51fa"),c.a.createElement("div",{className:t.lower},this.state.gameover&&c.a.createElement("div",{text:"Try Again",onClick:function(){return e.reset()}}),this.state.win&&c.a.createElement("div",{text:"Continue",onClick:function(){return e.continue()}}),c.a.createElement("div",{text:"New Game",onClick:function(){return e.props.restart()}}))))),c.a.createElement("div",{className:t.gallery,number:""},this.galleryCells.filter((function(t,a){return a<=e.props.ending||e.state.endless}))),c.a.createElement("div",{style:{overflow:"hidden",height:"0",width:"0",position:"relative"}},this.bgLoader))}},{key:"glass_check_handle",value:function(e){if(e){if(this.number_check.checked||(this.number_check.checked=!0,this.number_check_handle(!0)),!this.container.hasAttribute("glass")){var t=document.createAttribute("glass");this.container.setAttributeNode(t)}}else this.container.removeAttribute("glass")}},{key:"number_check_handle",value:function(e){if(e&&!this.container.hasAttribute("number")){var t=document.createAttribute("number");this.container.setAttributeNode(t),this.glass_check.disabled=!1}else e||(this.container.removeAttribute("number"),this.glass_check.disabled=!0)}},{key:"continue",value:function(){this.setState({gg:!1,win:!1,gameover:!1,endless:!0})}}]),a}(c.a.PureComponent);function V(e){var t=e.game_size,a=e._x,n=e._y,i=e.styles,r=e.difficulty,o=e.ending,l=e.restart,s=e.bindHandle,u=t*t,h=g()(i)();return c.a.createElement(F,{ending:o,game_size:t,game_size_2:u,_x:a,_y:n,difficulty:r,classes:h,restart:l,bindHandle:s})}var X=new Array(D.length).join(" ").split(" ").map((function(e,t){return G[D[t].toString().length-1]})),K={};D.forEach((function(e,t){return K['& [value="'.concat(e,'"]')]={fontSize:"calc(".concat((100*X[t]).toFixed(0),"%)"),backgroundColor:q[t]}}));var Y={3:1,4:1,5:2,6:3},J=Object.keys(d);function $(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t)for(var a=e.length-1;a>0;a--)e[a].merged||e[a].value!==e[a-1].value||(e[a].upgrade=!0,e[a-1].merged=!0);else for(var n=0;n<e.length-1;n++)e[n].merged||e[n].value!==e[n+1].value||(e[n].upgrade=!0,e[n+1].merged=!0)}function Z(e){for(var t=0;t<e.length;t++)for(var a=1;a<e[t].length;a++)if(e[t][a].value===e[t][a-1].value)return!1;return!0}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=window.location.origin+window.location.pathname+"#/2048"+(e?"?game="+e:"");x()(t),alert("Game Link: "+t+"\nCopied.")}J.sort((function(e,t){return e.localeCompare(t)})),t.default=h()((function(e){return{header:{display:"flex",justifyContent:"space-between",width:"".concat(480,"px"),margin:"5px auto","&>div":{display:"flex",alignItems:"center"},"&>div:first-child>*":{marginRight:5},"&>div:last-child>*":{marginLeft:5}},customWrap:{width:"480px",margin:"5px auto"},customIconContainer:Object(n.a)({display:"flex",flexWrap:"wrap",fontSize:"70px",userSelect:"none","& div[icon]":{width:"70px",height:"70px",lineHeight:"70px",margin:"5px",borderRadius:"5px",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",fontWeight:"bold",color:"#fff",textShadow:"0 2px 4px #000",position:"relative"},"& img":{position:"absolute",width:"100%",height:"100%",lineHeight:"100%",top:0,left:0,zIndex:1},"&>div[value]:after":{content:"attr(value)",position:"absolute",width:"100%",textAlign:"center",height:"100%",top:0,left:0,zIndex:2}},K),iconWrap:{display:"flex",justifyContent:"center",flexWrap:"wrap",userSelect:"none","&>div":{margin:"5px",width:"60px",height:"60px",borderRadius:"5px",overflow:"hidden"},"& img":{width:"60px",height:"60px"},"& div[chosen]":{boxShadow:"0 2px 6px 2px rgba(0, 0, 0, 0.80)"}},dialogHeader:{border:"dark"===e.palette.type?"3px dashed #fff":"3px dashed #333",padding:"10px",margin:"0 16px 16px 16px","&>div":{marginRight:"20px !important"},"& div[chosen=false]":{opacity:"0.6"},"& div[chosen=true]":{boxShadow:"0 2px 6px 2px rgba(0, 0, 0, 0.80)",opacity:"1 !important"}},empty:{border:"dark"===e.palette.type?"3px solid #fff":"3px solid #333",opacity:"0.6","&>svg":{height:"50%",width:"50%",fill:"dark"===e.palette.type?"#fff":"#333"},"&:hover":{opacity:1}},loading:{width:"".concat(480,"px"),height:"40px",background:"rgb(255, 255, 255, 0)",borderRadius:"6px",marginTop:"80px",lineHeight:"".concat(40,"px"),justifyContent:"center",fontSize:"36px",fontWeight:"bold","&:after":{animation:"$breath 3.2s linear 0s infinite",content:'"LOADING"'}},"@keyframes breath":{"0%":{content:'"LOADING\xa0\xa0\xa0"'},"25%":{content:'"LOADING.\xa0\xa0"'},"50%":{content:'"LOADING..\xa0"'},"75%":{content:'"LOADING..."'},"100%":{content:'"LOADING..."'}}}}))(function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).handleClose=function(){n.setState({open:!1})},n.okHandle=function(){n.choiced[n.state.currentValue]=n.state.dialogSelect,n.choicedSub[n.state.currentValue]=d[n.state.dialogSelect]&&d[n.state.dialogSelect][n.state.dialogSelectSub]?n.state.dialogSelectSub:0,n.handleClose()},n.state={appStyle:null,difficulty:1,ending:10,redirect:null,custom:!1,open:!1,currentValue:"",dialogSelect:null,dialogSelectSub:null},n.choiced=new Array(D.length),n.choicedSub=new Array(D.length),n.game_size=4,n._redirect=null,n.iconQuery=null,n.iconSet=null;var r=n.props.location;if(r&&""!==r.search){var o=new URLSearchParams(r.search).get("game");o&&(n.iconQuery=o)}return n.newStyle(n.iconQuery),n.refresh=0,n}return Object(r.a)(a,[{key:"intiBlurredImage",value:function(){var e=this;this.canvas=document.createElement("canvas"),this.canvas.width=80,this.canvas.height=80,this.ctx=this.canvas.getContext("2d"),this.blurredImage=new Array(D.length);for(var t=function(t){var a=new Image;a.src="./img/avatars/".concat(e.icon[t],".png"),a.onload=function(){return e.doBlur(a,t)}},a=0;a<D.length;a++)t(a)}},{key:"newStyle",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(a)e=this.iconSet;else if(t)e=this.parseIconQuery(t),this.iconSet=e,this.iconQuery=t;else{var i=Object.keys(d).sort((function(){return.5-Math.random()}));e=new Array(D.length);for(var r=[],o=0,l=D.length;o<l;o++){var s=i[o],c=parseInt(i[o].split("_")[0]).toString(36),u=d[i[o]][Math.floor(d[i[o]].length*Math.random())];e[o]="char_"+s+"_"+u,r[o]=c+"_"+u}var h=Object(y.compressToBase64)(r.join(",")).replace(/\//g,"-").replace(/\+/g,"_").replace(/=/g,"");this.iconQuery=h,this.iconSet=e}for(var p=this.game_size,g=p*p,m=464/p-16,f=new Array(g),v=new Array(g),_=0;_<p;_++)for(var b=0;b<p;b++)f[_+b*p]=_,v[_+b*p]=b;var x={};D.forEach((function(t,a){x['& [value="'.concat(t,'"]:before')]={content:'""',backgroundImage:'url("./img/avatars/'.concat(e[a],'.png")')},x['& [glass] [value="'.concat(t,'"]:after')]={backgroundImage:'url("./img/avatars/'.concat(e[a],'.png")')}}));for(var w={},k=0;k<p;k++)w['& [x="'.concat(k,'"]')]={left:"".concat(16+k*(m+16),"px")},w['& [y="'.concat(k,'"]')]={top:"".concat(16+k*(m+16),"px")};this._x=f,this._y=v,this.icon=e,this.appStyle=Object(n.a)({root:Object(n.a)({"& [bg]":{background:"rgba(238, 228, 218, 0.35)",zIndex:1},"& [block]":{borderRadius:"5px",height:"".concat(m,"px"),width:"".concat(m,"px")},"& [value]:before":{borderRadius:"5px",height:"100%",width:"100%",position:"absolute",top:0,left:0,backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"100% 100%"},"& [x],[y]":{top:0,left:0,position:"absolute",borderRadius:"5px"},"& [number]>[value]:after":{content:"attr(value)",height:"100%",width:"100%",position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"".concat(m,"px"),fontWeight:"bold",color:"rgba(255,255,255,0.6)"},"& [glass]>[value]:after":{filter:"drop-shadow(0px 0px 3px black) drop-shadow(1px 1px 2px black) drop-shadow(-1px -1px 2px black)",opacity:.8,backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"".concat(m,"px ").concat(m,"px"),"-webkitBackgroundClip":"text",backgroundClip:"text",color:"transparent"},"& [number]":{fontSize:"".concat(m,"px")}},w,{},x,{},K),container:{width:"".concat(480,"px"),height:"".concat(480,"px"),background:"rgb(187, 173, 160)",borderRadius:"6px",padding:"".concat(16,"px"),position:"relative"}},U),this.intiBlurredImage()}},{key:"createIconQuery",value:function(e,t){for(var a=new Array(D.length),n=0,i=a.length;n<i;n++)if(e[n]){var r=parseInt(e[n].split("_")[0]).toString(36);a[n]=r+"_"+t[n]}else a[n]="";return Object(y.compressToBase64)(a.join(",")).replace(/\//g,"-").replace(/\+/g,"_").replace(/=/g,"")}},{key:"parseIconQuery",value:function(e){var t=e.replace(/_/g,"+").replace(/-/g,"/");t+=e.length%4>0?new Array(5-e.length%4).join("="):"";for(var a=Object(y.decompressFromBase64)(t),n=Object.keys(d),i=a.split(","),r=Array(D.length),o=Array(i.length),l=function(e,t){if(""===i[e])return r[e]=null,o[e]=null,"continue";var a=i[e].split("_"),l=parseInt(a[0],36).toFixed(0),s=l.length<4?3:l.length,c=("0000"+l).substr(-s),u=n.find((function(e){return e.startsWith(c)})),h=d[u].includes(a[1])?a[1]:d[u][Math.floor(d[u].length*Math.random())];r[e]="char_"+u+"_"+h,o[e]=u},s=0,c=i.length;s<c;s++)l(s);if(i.length<D.length||r.includes(null)){for(var u=0,h=i.length;u<h;u++)o[u]&&n.splice(n.indexOf(o[u]),1);n.sort((function(e,t){return.5-Math.random()}));for(var p=0,g=D.length;p<g;p++)if(!r[p]){var m=d[n[p]][Math.floor(d[n[p]].length*Math.random())];r[p]="char_"+n[p]+"_"+m}}return r}},{key:"doBlur",value:function(e,t){this.ctx.fillStyle=q[t],this.ctx.beginPath(),this.ctx.rect(0,0,this.canvas.width,this.canvas.height),this.ctx.fill(),this.ctx.drawImage(e,0,0,this.canvas.width,this.canvas.height);var a=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),n=this.ctx.createImageData(this.canvas.width,this.canvas.height);!function(e,t,a,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if((n=Math.abs(n))<=1)throw new Error("Diameter should be greater than 1.");for(var r=n/2,o=Math.ceil(n)+(1-Math.ceil(n)%2),l=new Float32Array(o),s=(r+.5)/3,c=s*s,u=1/Math.sqrt(2*Math.PI*c),h=-1/(2*s*s),d=0,p=Math.floor(o/2),g=0;g<o;g++){var m=g-p,f=u*Math.exp(m*m*h);l[g]=f,d+=f}for(var _=0;_<l.length;_++)l[_]/=d;v(e,t,a,l,l,!1,i)}(a.data,a.width,a.height,40,n.data);for(var i=0;i<n.data.length;i+=4)n.data[i]*=.5,n.data[i+1]*=.5,n.data[i+2]*=.5;if(this.ctx.putImageData(n,0,0),this.blurredImage[t]=this.canvas.toDataURL(),this.blurredImage.findIndex((function(e){return!e}))<0){for(var r=0;r<this.blurredImage.length;r++)this.appStyle.gallery['& [blur][value="'.concat(D[r],'"]:before')]={backgroundImage:'url("'.concat(this.blurredImage[r],'") !important')};this.setState({appStyle:this.appStyle,difficulty:this.difficulty})}}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.difficulty=this.state.difficulty,this.willRedirect=this._redirect!==this.state.redirect,this.willRedirect&&(this._redirect=this.state.redirect),c.a.createElement(c.a.Fragment,null,this.willRedirect&&c.a.createElement(w.a,{to:this.state.redirect}),c.a.createElement(k.a,{open:this.state.open,onClose:this.okHandle,scroll:"body"},c.a.createElement(z.a,null,"Select Icon"),c.a.createElement(E.a,null,c.a.createElement("div",{className:t.customIconContainer+" "+t.dialogHeader},c.a.createElement("div",{value:D[this.state.currentValue],icon:""}),this.state.dialogSelect&&c.a.createElement("div",{style:{display:"flex"}},d[this.state.dialogSelect].map((function(t,a){return c.a.createElement("div",{key:"./img/avatars/char_".concat(e.state.dialogSelect,"_").concat(t,".png"),chosen:e.state.dialogSelectSub===a?"true":"false",icon:"",value:D[e.state.currentValue],onClick:function(){return e.setState({dialogSelectSub:a})}},c.a.createElement("img",{src:"./img/avatars/char_".concat(e.state.dialogSelect,"_").concat(t,".png")}))})),c.a.createElement("div",{className:t.empty,icon:"",onClick:function(){return e.setState({dialogSelect:null,dialogSelectSub:0})}},c.a.createElement(M.a,null)))),c.a.createElement("div",{className:t.iconWrap},J.map((function(t){return c.a.createElement("div",{key:t,style:{background:e.state.dialogSelect===t?q[e.state.currentValue]:q[e.choiced.indexOf(t)]},chosen:e.state.dialogSelect===t?"":null,onClick:function(){return e.setState({dialogSelect:t})}},c.a.createElement("img",{src:"./img/avatars/char_".concat(t,"_1.png")}))})))),c.a.createElement(S.a,null,c.a.createElement(C.a,{color:"inherit",onClick:this.handleClose},"Cancel"),c.a.createElement(C.a,{color:"inherit",onClick:this.okHandle},"Ok"))),c.a.createElement("div",{className:t.header},c.a.createElement("div",null,c.a.createElement(C.a,{variant:"outlined",size:"small",onClick:function(){return e.restart()}},"New Game"),c.a.createElement(C.a,{variant:"outlined",size:"small",onClick:function(){e.gameHandle&&e.gameHandle.reset()}},"Restart")),c.a.createElement("div",null,c.a.createElement(C.a,{variant:"outlined",size:"small",onClick:function(){e.newStyle(),e.props.location.pathname===e.props.match.path&&""===e.props.location.search||e.setState({redirect:e.props.match.path})}},"Random Tiles"),c.a.createElement(C.a,{variant:"outlined",size:"small",onClick:function(){return e.setState({custom:!e.state.custom})}},"Custom"),c.a.createElement(C.a,{variant:"outlined",size:"small",onClick:function(){return ee()}},"Copy Link"))),c.a.createElement("div",{className:t.header},c.a.createElement("div",null,c.a.createElement("span",{style:{marginRight:10}},"\u68cb\u76d8\u5927\u5c0f"),c.a.createElement(_.a,{value:this.game_size,onChange:function(t){return e.game_size_handle(t.target.value)},style:{width:"50px",minWidth:"50px",fontSize:"12px"}},[3,4,5,6].map((function(e,t){return c.a.createElement("option",{key:e,value:e},e)})))),c.a.createElement("div",null,c.a.createElement("span",{style:{marginRight:10}},"\u76ee\u6807"),c.a.createElement(_.a,{value:this.state.ending,onChange:function(t){return e.setState({ending:t.target.value})},style:{width:"80px",minWidth:"80px",fontSize:"12px"}},[9,10,11,12,13,14,15].map((function(e){return c.a.createElement("option",{key:e,value:e},D[e])})))),c.a.createElement("div",null,c.a.createElement("span",{style:{marginRight:10}},"\u96be\u5ea6"),c.a.createElement(_.a,{value:this.state.difficulty,onChange:function(t){return e.setState({difficulty:t.target.value})},style:{width:"50px",minWidth:"50px",fontSize:"12px"}},[1,2,3].map((function(t){return t<=Y[e.game_size]?c.a.createElement("option",{key:t,value:t},t):null}))))),this.state.custom&&c.a.createElement("div",{className:t.customIconContainer+" "+t.customWrap},D.map((function(t,a){return c.a.createElement("div",{key:t,value:t,icon:"",onClick:function(){return e.openDialog(a)}},e.choiced[a]&&c.a.createElement("img",{src:"./img/avatars/char_".concat(e.choiced[a],"_").concat(d[e.choiced[a]][e.choicedSub[a]],".png")}))})),c.a.createElement("div",{className:t.empty,icon:"",onClick:function(){return e.applyCustom()}},c.a.createElement(O.a,null)),c.a.createElement("div",{className:t.empty,icon:"",onClick:function(){return e.copyCustomLink()}},c.a.createElement(A.a,null)),c.a.createElement("div",{className:t.empty,icon:"",onClick:function(){return e.setState({custom:!1})}},c.a.createElement(M.a,null))),!this.state.appStyle&&c.a.createElement("div",{className:t.header},c.a.createElement("div",{className:t.loading})),this.state.appStyle&&c.a.createElement(V,{key:"".concat(this.game_size,"_").concat(this.refresh),difficulty:this.state.difficulty,game_size:this.game_size,ending:this.state.ending,_x:this._x,_y:this._y,styles:this.state.appStyle,restart:function(){return e.restart()},bindHandle:function(t){return e.gameHandle=t}}))}},{key:"openDialog",value:function(e){this.setState({open:!0,currentValue:e,dialogSelect:this.choiced[e],dialogSelectSub:this.choicedSub[e]?this.choicedSub[e]:0})}},{key:"copyCustomLink",value:function(){var e=this,t=this.choicedSub.map((function(t,a){return e.choiced[a]?d[e.choiced[a]][t]:null}));ee(this.createIconQuery(this.choiced,t))}},{key:"applyCustom",value:function(){var e=this;alert("Apply custom setting.\nUnassigned tiles will be assigned randomly.");var t=this.choicedSub.map((function(t,a){return e.choiced[a]?d[e.choiced[a]][t]:null})),a=this.createIconQuery(this.choiced,t);this.newStyle(a)}},{key:"game_size_handle",value:function(e){this.game_size=e,this.state.difficulty>Y[this.game_size]&&(this.difficulty=Y[this.game_size]),this.newStyle(null,!0)}},{key:"restart",value:function(){this.refresh=10-this.refresh,this.newStyle()}}]),a}(c.a.PureComponent))},958:function(e){e.exports=JSON.parse('{"147_shining":["1","2","summer1"],"504_rguard":["1"],"226_hmau":["1","2"],"325_bison":["1","2"],"308_swire":["1","2","nian2"],"108_silent":["1","2","sweep1"],"284_spot":["1","otaku1"],"356_broca":["1","2"],"242_otter":["1","2"],"131_flameb":["1","2"],"326_glacus":["1","2"],"289_gyuki":["1","2"],"113_cqbw":["1","2"],"197_poca":["1","2"],"002_amiya":["1+","1","2","epoque4","winter1"],"115_headbr":["1","2","marthe2"],"110_deepcl":["1","2"],"171_bldsk":["1","2","witch1"],"290_vigna":["1","2","summer1"],"367_swllow":["1","2","boc1"],"151_myrtle":["1","2"],"155_tiger":["1","2"],"306_leizi":["1","2"],"145_prove":["1","2","summer3"],"140_whitew":["1","2","boc1"],"120_hibisc":["1","nian1"],"1505_frstar":["1"],"500_noirc":["1"],"252_bibeak":["1","2"],"298_susuro":["1","2"],"130_doberm":["1","2"],"196_sunbr":["1","2","summer1"],"291_aglina":["1","2","boc1"],"193_frostl":["1","2"],"179_cgbird":["1","2","witch1"],"201_moeshd":["1","2","kfc1","summer4"],"301_cutter":["1","2"],"349_chiave":["1","2"],"124_kroos":["1","witch1"],"181_flower":["1","2","daily1"],"366_acdrop":["1","2"],"286_cast3":["1","summer1"],"118_yuki":["1","2"],"213_mostma":["1","2","epoque5"],"225_haak":["1","2"],"275_breeze":["1","2"],"502_nblade":["1"],"240_wyvern":["1"],"209_ardign":["1","snow1"],"185_frncat":["1","2"],"164_nightm":["1","2","epoque5"],"199_yak":["1","2","summer1"],"173_slchan":["1","2","wild1","wwf1"],"358_lisa":["1","2"],"263_skadi":["1","2","summer3"],"141_nights":["1","2"],"243_waaifu":["1","2"],"343_tknogi":["1","2"],"337_utage":["1","2","summer4"],"237_gravel":["1","2"],"192_falco":["1"],"215_mantic":["1","2","epoque4"],"150_snakek":["1","2","wild1"],"333_sidero":["1","2"],"198_blackd":["1","2","winter1"],"503_rang":["1"],"236_rope":["1","2","summer2","witch1"],"103_angel":["1","2","kfc1","wild1"],"222_bpipe":["1","2"],"159_peacok":["1","2"],"379_sesa":["1","2"],"344_beewax":["1","2"],"272_strong":["1","2"],"102_texas":["1","2","winter1"],"107_liskam":["1","2","nian1","nian2"],"117_myrrh":["1","2","wild1"],"166_skfire":["1","2","summer1"],"416_zumama":["1","2"],"505_rcast":["1"],"149_scave":["1","2"],"253_greyy":["1","2"],"345_folnic":["1","2"],"202_demkni":["1","2","boc1"],"101_sora":["1","2","summer1"],"279_excu":["1","2","boc1"],"187_ccheal":["1","2","epoque2"],"258_podego":["1","2"],"172_svrash":["1","2","snow1","summer4"],"136_hsguma":["1","2","nian3"],"121_lava":["1"],"219_meteo":["1","2","sweep1"],"163_hpsts":["1","2"],"004_mon3tr":["1"],"127_estell":["1","2"],"509_acast":["1","2"],"400_weedy":["1","2"],"355_ethan":["1","2"],"210_stward":["1"],"254_vodfox":["1","2"],"174_slbell":["1","2","snow1"],"2013_cerber":["1","2","summer4"],"281_popka":["1"],"009_12fce":["1"],"241_panda":["1","2","marthe1"],"143_ghost":["1","2","winter1"],"129_bluep":["1","2"],"507_rsnipe":["1"],"302_glaze":["1","2"],"128_plosis":["1","2","epoque3"],"158_milu":["1","2","wild2"],"405_absin":["1","2"],"510_amedic":["1","2"],"293_thorns":["1","2"],"204_platnm":["1","2","summer3"],"261_sddrag":["1","2"],"010_chen":["1","2","nian2"],"109_fmout":["1","2","epoque2"],"106_franka":["1","2"],"112_siege":["1","2","wild2"],"401_elysm":["1","2"],"211_adnach":["1"],"250_phatom":["1","2"],"137_brownb":["1","2","kitchen1"],"2014_nian":["1","2"],"340_shwaz":["1","2","snow1"],"283_midn":["1","boc1"],"282_catap":["1"],"105_emperor":["1"],"123_fang":["1","winter1"],"348_ceylon":["1","2"],"148_nearl":["1","2","summer2"],"180_amgoat":["1","2"],"328_cammou":["1","2"],"134_ifrit":["1","2","kfc1","summer1"],"411_tomimi":["1","2"],"183_skgoat":["1","2"],"260_durnar":["1","2"],"188_helage":["1","2"],"122_beagle":["1","boc1"],"511_asnipe":["1","2"],"373_lionhd":["1","2"],"385_finlpp":["1","2"],"378_asbest":["1","2"],"336_folivo":["1","2"],"126_shotst":["1","2"],"294_ayer":["1","2"],"415_flint":["1","2"],"285_medic2":["1"],"144_red":["1","2"],"218_cuttle":["1","2"],"195_glassb":["1","2","kitchen1"],"017_huang":["1","2"],"274_astesi":["1","2","epoque5"],"278_orchid":["1"],"508_aguard":["1","2"],"506_rmedic":["1"],"212_ansel":["1","summer1"],"133_mm":["1","2"],"383_snsant":["1","2"],"230_savage":["1","2"],"501_durin":["1"],"220_grani":["1","2"],"208_melan":["1","epoque1"],"190_clour":["1","2"],"248_mgllan":["1","2","kitchen1"],"235_jesica":["1","2","nian1","nian2","sweep1","wild2"],"376_therex":["1"],"277_sqrrel":["1","2"]}')}}]);