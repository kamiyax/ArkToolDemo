(this["webpackJsonpark-tool"]=this["webpackJsonpark-tool"]||[]).push([[14],{1085:function(e,t,n){"use strict";n.r(t);var a=n(114),r=n(115),o=n(117),i=n(116),c=n(587),l=n(0),s=n.n(l),p=n(5),u="rgba(7, 7, 7, 0.75)",d=Object(p.a)((function(e){return{wrap:{width:"80px",height:"80px",position:"relative",margin:"auto",userSelect:"none"},iconLoader:{width:"60px",height:"60px",backgroundImage:function(e){return"url(".concat(e.iconPath,")")},backgroundPosition:"center",backgroundSize:"100%",backgroundRepeat:"no-repeat",boxShadow:u+" 0px 3px 15px 4px",position:"relative",top:"10px",left:"10px"},spCostContainer:{width:"60px",height:"14px",position:"absolute",bottom:"2px",right:"2px",display:"flex",justifyContent:"flex-end"},spCostBg:{width:"fit-content",height:"14px",lineHeight:"14px",background:"rgba(66, 66, 66, 0.94)",boxShadow:u+" 0px 0px 2px 0px",display:"inline-flex",fontSize:"9pt",color:"#fff",padding:"0px 2px 0px 0px",margin:"0px 1px 0px 1px","& div":{padding:"0px 1px 0px 1px"}},spCostIcon:{width:"10px",height:"14px",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='24'%3E%3Cpath fill='%23fff' d='M2 5v14l11-7L2 5z'/%3E%3C/svg%3E\")",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"},spInitIcon:{width:"10px",height:"14px",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='24'%3E%3Cpath fill='%238abc22' d='M6 23l1.5-9.5H2L9 1l-1.5 9.5H13z'/%3E%3C/svg%3E\")",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}}))(function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.initSp,a=e.spCost,r=e.displaySp;return s.a.createElement("div",{className:t.wrap},s.a.createElement("div",{className:t.iconLoader}),s.a.createElement("div",{className:t.spCostContainer},(n>0||r)&&s.a.createElement("div",{className:t.spCostBg},s.a.createElement("div",null,s.a.createElement("div",{className:t.spCostIcon})),s.a.createElement("div",null,n)),(a>0||r)&&s.a.createElement("div",{className:t.spCostBg},s.a.createElement("div",null,s.a.createElement("div",{className:t.spInitIcon})),s.a.createElement("div",null,a))))}}]),n}(s.a.PureComponent)),g=n(530),m=n(529),f=n(442),h=["sktok_gate"],x=["\u88ab\u52a8","\u624b\u52a8\u89e6\u53d1","\u81ea\u52a8\u89e6\u53d1"],v={1:"\u81ea\u52a8\u56de\u590d",2:"\u653b\u51fb\u56de\u590d",4:"\u53d7\u51fb\u56de\u590d",8:"\u88ab\u52a8"},b=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.classes.root},this.props.children)}}]),n}(s.a.PureComponent),E=Object(p.a)((function(e){return{root:{width:"fit-content",padding:"1px 6px",display:"flex",borderRadius:"4px",whiteSpace:"nowrap",lineHeight:"20px",color:"#fff",margin:"10px 0.75px 0px",background:(t={1:"#89bb21",2:"#f2773f",4:"#f4ad03",8:"#606060",10:"#404040"},function(e){return t[e.type]})}};var t}))(b),k=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.skId,a=e.level,r=e.levelup,o=e.normalLevelup,i=e.material,l=c.a[n];if(!l||!l.levels)return s.a.createElement("div",null,"Skill id:"+n+" cannot be found.");var p=l.levels.length-1,u=this.props.name,b=a?a>p?p:a:0,k=l.levels[b].spData.spType,w=l.iconId?l.iconId:n,A=h.includes(w)?"./img/skills/skill_icon_skcom_withdraw.png":"./img/skills/skill_icon_"+w+".png",S=!!(o&&r&&a<=p&&0<b&&b<=9)&&(b>6?r[b-7]:a<=6&&o[b-1]);return s.a.createElement("div",{className:t.root},s.a.createElement("div",{className:t.column_1},s.a.createElement("div",null,s.a.createElement(d,{iconPath:A,initSp:l.levels[b].spData.initSp,spCost:l.levels[b].spData.spCost})),s.a.createElement("div",null,u)),s.a.createElement("div",{className:t.column_2},s.a.createElement("div",{className:t.rangeIdWrap},s.a.createElement("div",{className:t.rangeIdBg},s.a.createElement(g.a,{id:l.levels[b].rangeId,color:"#fff",width:54,height:54}))),s.a.createElement("div",null,"\u6548\u679c\u8303\u56f4")),s.a.createElement("div",{className:t.column_3},s.a.createElement("div",{className:t.skillTypeWrap},k<8&&s.a.createElement(E,{type:k,children:v[k]}),s.a.createElement(E,{type:8,children:x[l.levels[0].skillType]}),l.levels[b].duration>0&&s.a.createElement(E,{type:10},s.a.createElement("div",{className:t.skillDurationIcon}),s.a.createElement("div",null,l.levels[b].duration.toString()+"Sec"))),s.a.createElement("div",{className:t.desWrap},s.a.createElement(m.a,{raw:l.levels[b].description,blackboard:l.levels[b].blackboard}),p<a&&s.a.createElement(m.a,{raw:"<@eb.danger>Max Level: "+(p+1).toString()+"</>"}))),i&&S&&s.a.createElement("div",{className:t.column_4},s.a.createElement("div",null,s.a.createElement("span",null,"\u6240\u9700\u6750\u6599")),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},S.map((function(e){return s.a.createElement(f.a,{id:e.id,count:e.count,size:40})})))))}}]),n}(s.a.PureComponent);t.default=Object(p.a)((function(e){return{root:{boxShadow:"rgba(0, 0, 0, 0.75) 0px 4px 8px",background:"#1c1c1c",color:"#fff",display:"flex",margin:"10px 0",padding:"10px"},column_1:{display:"flex",flexDirection:"column",justifyContent:"start",textAlign:"center",width:"100px",minWidth:"100px",userSelect:"none"},column_2:{display:"flex",flexDirection:"column",justifyContent:"start",textAlign:"center",width:"100px",userSelect:"none"},column_3:{display:"flex",flexDirection:"column",justifyContent:"start",textAlign:"left",flex:"auto",margin:"0 10px"},column_4:{display:"flex",flexDirection:"column",justifyContent:"start",textAlign:"center",paddingTop:"10px",width:"120px",minWidth:"120px",whiteSpace:"nowrap"},desWrap:{marginTop:"5px"},rangeIdWrap:{margin:"0px 10px",width:"80px",height:"80px",padding:10..toFixed(2)+"px"},rangeIdBg:{boxShadow:"rgba(7, 7, 7, 0.75) 0px 3px 15px 4px",background:"#595959",height:60..toFixed(0)+"px",padding:3..toFixed(2)+"px"},skillTypeWrap:{display:"flex",userSelect:"none"},skillDurationIcon:{margin:"0px 4px 0px -5px",height:"20px",width:"20px",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23b2b2b2' d='M11.9902 2C6.4702 2 2 6.48 2 12s4.4702 10 9.9902 10C17.5202 22 22 17.52 22 12S17.5202 2 11.9902 2zm-.2695 5h.0586c.4 0 .7207.3207.7207.7207v4.539l3.8691 2.3008c.35.2.46.6503.25.9903-.2.34-.6385.4383-.9785.2383l-4.1504-2.4883c-.31-.18-.4902-.5113-.4902-.8613V7.7207c0-.4.3207-.7207.7207-.7207z'/%3E%3C/svg%3E\")",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}}))(k)},402:function(e,t,n){"use strict";var a=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(195)),o=n(84),i=a(n(424));t.default=function(e,t){return(0,o.withStyles)(e,(0,r.default)({defaultTheme:i.default},t))}},430:function(e,t,n){"use strict";var a=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(195)),o=n(84),i=a(n(424));t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.makeStyles)(e,(0,r.default)({defaultTheme:i.default},t))}},442:function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return m})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d}));var a=n(0),r=n.n(a),o=n(471),i=n(402),c=n.n(i),l=n(86),s=[{color:"rgb(160,160,160)"},{color:"rgb(217,229,59)"},{color:"rgb(1,178,248)"},{color:"rgb(180,148,182)"},{color:"rgb(253,201,4)"},{color:"rgb(253,201,4)"}],p=JSON.parse(Object(l.decompressFromBase64)(o)),u={};p.forEach((function(e){u[e[0]]={id:e[0],name:e[1],rarity:e[2],iconId:e[3],sortId:e[4],type:e[5]}}));var d=Object.keys(u).filter((function(e){return"MATERIAL"===u[e].type&&/^MTL_SL/.test(u[e].iconId)})).sort((function(e,t){return u[e].sortId-u[t].sortId}));function g(e,t,n){var a={};return n.forEach((function(n){return a[n]=e.filter((function(e){return u[e][t]===n}))})),a}function m(e){return e.sort((function(e,t){return u[t].rarity-u[e].rarity}))}var f=Object.keys(u).filter((function(e){return u[e].iconId.match(/^(MTL_SKILL|MTL_SL_|MTL_ASC_|sprite_exp_)/)})).sort((function(e,t){return u[e].sortId-u[t].sortId})),h=Math.ceil(f.length/4),x=c()((function(e){return{root:{position:"relative",backgroundImage:"url('./img/items/72x72.png')"},count:{position:"absolute",background:"rgba(0,0,0,0.8)",color:function(e){return e.color?e.color:"#fff"},padding:"0 5px",height:"14px",lineHeight:"14px !important",fontSize:"11px",right:"5px",bottom:"2px",boxShadow:"-1px 1px 2px rgba(0,0,0,0.5)"},img:{position:"absolute",height:0,width:0,top:"52%",left:"50%",transform:"scale(0.5)",display:"flex",justifyContent:"space-around",alignItems:"center","& img":{position:"absolute",transform:function(e){return"scale(".concat(.01*e.size,")")}}}}}))((function(e){var t=e.classes,n=e.id,a=e.count,o=e.size,i=void 0===o?50:o,c=f.indexOf(String(n)),l=c%4*i,s=Math.floor(c/4)*i;return r.a.createElement("div",{className:t.root,style:{backgroundPosition:"".concat(-l,"px ").concat(-s,"px"),height:"".concat(i,"px"),width:"".concat(i,"px"),backgroundSize:"".concat(4*i,"px, ").concat(h*i,"px")},title:u[n].name},a&&r.a.createElement("div",{className:t.count},a))}));function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.a.createElement("span",{style:s[u[e].rarity]},u[e].name+(t?" x"+t.toString():""))}},471:function(e){e.exports=JSON.parse('"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"')},529:function(e,t,n){"use strict";var a=n(43),r=n(384),o=n(0),i=n.n(o),c=n(4),l=n.n(c),s=n(732),p=n(1063),u=n(430),d={"@lv.item":"#FFFFFF","@lv.rem":"#FFFFFF","@lv.fs":"#FF0000","@tu.kw":"#0098DC","@tu.imp":"#FF0000","@cc.vup":"#0098DC","@cc.vdown":"#FF6237","@cc.rem":"#F49800","@cc.kw":"#00B0FF","@cc.pn":null,"@cc.talpu":null,"@ba.vup":"#0098DC","@ba.vdown":"#FF6237","@ba.rem":"#F49800","@ba.kw":"#00B0FF","@ba.pn":null,"@ba.talpu":"#F49800","@eb.key":"#00FF00","@eb.danger":"#FF0000","@rc.title":"#FFFFFF","@rc.subtitle":"#FFC90E","@rc.em":"#FF7F27","@rc.eml":"#32CD32","@ga.title":"#FFFFFF","@ga.subtitle":"#FFC90E","@ga.up":"#FF7F27"},g=n.n(u)()((function(e){return{tooltip:{whiteSpace:"pre",fontSize:"13px"}}}));function m(e){var t=e.raw,n=e.blackboard,o=g(),c=i.a.useState(!1),l=Object(a.a)(c,2),u=l[0],m=l[1];function f(){m(!1)}var h=null===t?"None":t,x=!1;return n&&(h=function(e,t){var n,a=/[\[\]\.]/g,o=/\.([0]+)/,i=e,c=Object(r.a)(t);try{for(c.s();!(n=c.n()).done;)for(var l=n.value,s=l.key.replace(a,"\\$&"),p=new RegExp("\\{[+-]?"+s+"(:[0.%]*)?\\}","ig"),u=p.exec(e);p.lastIndex>0;){var d="-"===u[0][1],g=u[0].match(o),m=u[0].includes("%"),f=(m?100:1)*(d?-1:1)*l.value;i=u[0].includes(":")?i.replace(u[0],f.toFixed(g?g[1].length:0)+(m?"%":"")):i.replace(u[0],f.toString()),u=p.exec(e)}}catch(h){c.e(h)}finally{c.f()}return i}(h,n),x=n.map((function(e){return"".concat(e.key.replace(/_/g," ").toLowerCase().replace(/([^a-z]|^)[a-z]/g,(function(e){return e.toUpperCase()})),": ").concat(e.value)})).join("\n")),h=(h=h.replace(/\\n/g,"<br/>")).replace(/<\/>/g,"</span>"),Object.keys(d).forEach((function(e){h=h.replace(new RegExp("<".concat(e,">"),"gm"),'<span style="color:'.concat(d[e],'">'))})),n?i.a.createElement(p.a,{onClickAway:f},i.a.createElement(s.a,{classes:{tooltip:o.tooltip},interactive:!0,title:x,placement:"right",onClose:f,open:u,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0},i.a.createElement("p",{onClick:function(){m(!u)},dangerouslySetInnerHTML:{__html:h}}))):i.a.createElement("p",{dangerouslySetInnerHTML:{__html:h}})}m.ropTypes={raw:l.a.string.isRequired},t.a=m},530:function(e,t,n){"use strict";var a=n(384),r=n(114),o=n(115),i=n(117),c=n(116),l=n(0),s=n.n(l),p=n(504);function u(e,t,n,a){var r=e.toFixed(3),o=t.toFixed(3),i=a.toFixed(3);return s.a.createElement("path",{key:"".concat(e,",").concat(t),d:"M".concat(r," ").concat(o,"h").concat(i,"v").concat(i,"H").concat(r,"Z")})}var d=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.color,r=void 0===n?"#fff":n,o=e.width,i=e.height;if(!t){var c=i?o>i?i:o:o||16;return s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:o.toString(),height:i.toString()},s.a.createElement("path",{d:["M",(o-c/3)/2,(i-c/3)/2+c/3,"l",c/3,-c/3].map((function(e){return e.toString()})).join(" "),stroke:r,strokeWidth:"2px"}))}var l,d=p[t],g=0,m=0,f=0,h=0,x=[],v=Object(a.a)(d);try{for(v.s();!(l=v.n()).done;){var b=l.value;g=g<b[0]?g:b[0],m=m<b[1]?m:b[1],f=f>b[0]?f:b[0],h=h>b[1]?h:b[1]}}catch(D){v.e(D)}finally{v.f()}var E=18*(1+h-m)+2,k=18*(1+f-g)+2,w=16,A=16;o&&(w=(o-2)/(1+h-m)-2,E=o),i&&(A=(i-2)/(1+f-g)-2,k=i);var S,y=Math.min(16,w,A),F=(E-((y+2)*(1+h-m)+2))/2,C=(k-((y+2)*(1+f-g)+2))/2,j=Object(a.a)(d);try{for(j.s();!(S=j.n()).done;){var I=S.value;0===I[0]&&0===I[1]||x.push(u(F+(y+2)*(-m+I[1])+2,C+(y+2)*(-g+I[0])+2,0,y))}}catch(D){j.e(D)}finally{j.f()}return s.a.createElement("svg",{viewBox:[0,0,E,k],width:E,height:k},s.a.createElement("g",{fill:r,stroke:r,strokeWidth:1},u(F-(y+2)*m+2,C-(y+2)*g+2,0,y)),s.a.createElement("g",{fill:"none",stroke:r,strokeWidth:1},x))}}]),n}(s.a.PureComponent);t.a=d}}]);