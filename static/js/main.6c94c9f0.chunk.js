(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t){e.exports={"v86state.bin":"https://storage.googleapis.com/hypertalk-static/v86state.bin","windows98.img":"https://storage.googleapis.com/hypertalk-static/windows98.img"}},42:function(e,t,a){e.exports=a.p+"static/media/logo.5d13d1b8.svg"},44:function(e,t,a){e.exports=a.p+"static/media/seabios.b72845a6.bin"},45:function(e,t,a){e.exports=a.p+"static/media/vgabios.1747aff3.bin"},47:function(e,t,a){e.exports=a(89)},80:function(e,t){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),i=a.n(r),c=a(4),s=a.n(c),l=a(13),u=a(5),d=a(6),h=a(9),m=a(7),p=a(8),b=a(1),y=a(39),v=a.n(y),g=a(40),f=a.n(g),w=a(10),S=a(46),k=function(e){return function(t){var a=new String("".concat(t).concat(e));return a.raw=t,a}},O=k("em"),E=k("px"),j={Create:function(e){var t={};for(var a in e)t[a]=Object(S.a)(e[a]);return t},vars:{colors:{black:"#1c1d20",white:"#ffffff",orange:"#ffea8d",grey0:"#e1e6e9",grey1:"#a5abb4",grey2:"#3e4043",blue:"#4a9cdd"},pageWidth:E(1080),spacing:{xs:E(4),small:E(8),regular:E(16),medium:E(24),large:E(38),xl:E(56)},fontSize:{small:E(12),regular:E(15),medium:E(18),large:E(22),xl:E(28),xxl:E(36)},lineHeights:{regular:O(1.5),small:O(1.25)}}},T={display:"flex"},x={textAlign:"left",padding:"0 ".concat(j.vars.spacing.regular.raw/2,"px")},C={flex:1},M={textAlign:"left",paddingLeft:0},H={textAlign:"right",paddingRight:0},P={paddingLeft:0,paddingRight:0,textAlign:"center"},L=function(e){var t=e.children,a=e.first,n=e.last,r=e.equalWidth,i=e.centered,c=e.style,s=j.Create(Object(w.a)({},x,a?M:{},n?H:{},a&&n||i?P:{},a&&n?P:{},r?C:{},c||{}));return o.a.createElement("div",{style:s},t)};L.defaultProps={centered:!1,equalWidth:!0};var R=function(e){var t=e.children,a=e.alignColumns,n=o.a.Children.toArray(t).filter(function(e){return e}),r=n.length,i=j.Create(Object(w.a)({},T,{alignItems:a}));return o.a.createElement("div",{style:i},n.map(function(e,t){return o.a.cloneElement(e,{first:0===t,last:t===r-1})}))},W=j.Create({button:{border:"none",textAlign:"center",backgroundColor:j.vars.colors.grey0,cursor:"pointer",padding:"".concat(j.vars.spacing.xs," ").concat(j.vars.spacing.small),color:j.vars.colors.black},menuContainer:{marginTop:j.vars.spacing.small,textAlign:"right"}}),_=function(e){var t=e.style,a=e.children,n=Object(w.a)({},W.button,t);return o.a.createElement("button",Object.assign({},e,{style:n}),a)},A=function(e){var t=e.style,a=e.children,n=o.a.Children.toArray(a).filter(function(e){return e}),r=Object(w.a)({},W.menuContainer,t);return o.a.createElement("div",Object.assign({},e,{style:r}),n.map(function(e,t){return o.a.cloneElement(e,{style:{marginLeft:j.vars.spacing.regular}})}))},N=a(42),J=a.n(N),z=j.Create({img:{height:"80px",width:"auto"}}),B=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.items;return o.a.createElement("div",{style:z.root},o.a.createElement(R,null,o.a.createElement(L,null,o.a.createElement("img",{style:z.img,src:J.a,alt:"logo"})),o.a.createElement(L,{style:{flex:3}},o.a.createElement(A,null,e.map(function(e,t){return o.a.createElement(_,Object.assign({key:t},e))})))))}}]),t}(n.Component);B.defaultProps={items:[]};var I=B,U=a(43),D=a.n(U),F=j.Create({root:{border:"none",width:"100%",font:"".concat(j.vars.spacing.regular," monospace"),color:j.vars.colors.black},disabled:{backgroundColor:j.vars.colors.orange}}),V=function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).call(this,e))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.style,n=t.children,r=t.disabled,i=Object(w.a)({},F.root,a,r?F.disabled:{});return o.a.createElement(D.a,Object.assign({},this.props,{ref:function(t){e.ref=t},style:i}),n)}}]),t}(n.Component);V.defaultProps={disabled:!1};var q=V,G=a(44),K=a.n(G),X=a(45),Z=a.n(X),$=a(25),Q=a.n($),Y={};function ee(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return new Promise(function(a,n){if(Y[e])a(Y[e]);else{var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="arraybuffer",o.addEventListener("load",function(){200===o.status?(Y[e]=o.response,a(o.response)):n()},!1),o.addEventListener("progress",t),o.send()}})}function te(e){return new Promise(function(t){return setTimeout(t,e)})}var ae=!1;function ne(e){return e[Math.floor(Math.random()*e.length)]}function oe(){var e=ne(["Moon unit","Ravioli","Anthoni","Mookie","Diesel","Ulysses","Jose","\u200eLasernut","\u200eMartha","\u200eBig boy","\u200eBaby girl","\u200eMcNugget","Frederico","Sloan","Miller","Gordon","Lafayette","Jethro","Naomi","\u200eTowelette","Demitri","\u200eLopez","\u200eSullivan","\u200eSatchmo","Armando","Tiberius","Phoebe","Titan","Janus","Callisto","Puck","Belinda","Bianca","Dugan","Kiplet","Gomez","Kermit","Cedric","Solomon","\u200eEustace","\u200eZero","Flash","Tonto","Lazarus","Forbes","Skippy","Ripto","Sierra","Gilligan","Seymour","Mordechai","Vincent","Stacia","Poot","Janet","Penelope"]),t=window.localStorage.name?window.localStorage.name:window.prompt("whats ur name?",e);return window.localStorage.name=t,t}function re(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=ne(["[:nb]","[:nh]","[:nk]","[:nf]","[:nd]","[:dv ap 10]","[:dv ap 200]","[:dv hs 1]","[:dv pr 1]","[:dv gv 100]","[:nb][:dv pr 1][:dv br 200][:dv gv 40][:dv hs 50][:rate 30]"]),a=window.localStorage.voice?window.localStorage.voice:e?t:window.prompt("whats ur voice?",t);return window.localStorage.voice=a,a}function ie(){return-1!==window.location.href.indexOf("child")}var ce;a(88);function se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{data:""};console.log("isChild: ".concat(ie()," ").concat(e," ").concat(t.data))}function le(e){se("sendMessageToChild",e),ce.contentWindow.postMessage(e,"*")}var ue=null;function de(e){se("sendMessageToParent",e),window.parent.postMessage(e,"*")}var he=null;var me=1048576,pe=Q.a["windows98.img"],be=Q.a["v86state.bin"],ye=!1;function ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onXHRProgress,a=e.whatToSay;return new Promise(function(e,n){var o,r=[ee(be,t)];ye&&r.push(ee(pe)),Promise.all(r).then(function(t){var n,r=t[0],i=t[1];n=function(t){switch(t.data){case"child:ready":o=["parent:sendAssets",r],ye?o.push(i):o.push(null),le(o);break;case"child:booted":le(o=["parent:speak",a]);break;case"child:doneSpeaking":window.removeEventListener("message",ue,!1),se("destroyChild"),ce.remove(),ce=null,e()}},ue=function(e){se("receiveMessageFromChild",e),n(e)},window.addEventListener("message",ue,!1),se("createChild"),(ce=document.createElement("iframe")).src="".concat(window.location.href,"?cachebust=").concat(Date.now(),"#child"),ce.width=ae?"1000":"1",ce.height=ae?"500":"1",document.querySelector("body").appendChild(ce)})})}function ge(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0];function a(){e.stop(),window.removeEventListener("message",he,!1),de("child:doneSpeaking")}t=function(t){switch(t.data[0]){case"parent:sendAssets":var n=t.data[1],o=t.data[2],r=ye?{buffer:o}:{url:pe,async:!0,size:300*me};try{(e=new window.V86Starter({screen_container:ae?document.getElementById("screen_container"):null,bios:{url:K.a},vga_bios:{url:Z.a},hda:r,autostart:!0,memory_size:128*me,vga_memory_size:8*me,disable_mouse:!0,disable_keyboard:!0})).add_listener("emulator-ready",Object(l.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.restore_state(n),de("child:booted");case 2:case"end":return t.stop()}},t,this)}))),u="cpu-event-halt",e.add_listener(u,function(){console.error('fault detected with "'.concat(u,'" event')),e.stop(),de("child:doneSpeaking")})}catch(t){console.error("fault detected"),console.error(t),a()}break;case"parent:speak":var i=t.data[1],c="";e.add_listener("serial0-output-char",function(e){-1!==(c+=e).indexOf("ready")&&a()}),e.serial0_send(i)}var u},he=function(e){se("receiveMessageFromParent",e),t(e)},window.addEventListener("message",he,!1),de("child:ready")}ye&&(pe="".concat("https://hypertalk-221623.appspot.com","/static/").concat("windows98.img"),be="".concat("https://hypertalk-221623.appspot.com","/static/").concat("v86state.bin"));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=f()("https://hypertalk-221623.appspot.com",{transports:["polling"]}),we=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],ne(["How are you gentlemen?","happy birthday","Sure why not","Listen","Lets circle back on that","Who cares","Are you f\u2019realz","Welcome to my world","I have thoughts on that","Uh","Last time for everything","Need you to get real aware","there's no there there","Show me the data","bulbous","Who fuks"])}(),Se=j.Create({chatHistory:{},chatHistoryItem:{marginTop:j.vars.spacing.medium}}),ke=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={whatToSay:"",blockTextEditing:!0,busy:!0,busyText:"Please wait...",name:oe(),voice:re(!0),chatHistory:[]},a.broadcast=a.broadcast.bind(Object(b.a)(Object(b.a)(a))),window.say=a.broadcast,a.utterance=a.utterance.bind(Object(b.a)(Object(b.a)(a))),a.onResetName=a.onResetName.bind(Object(b.a)(Object(b.a)(a))),a.onResetVoice=a.onResetVoice.bind(Object(b.a)(Object(b.a)(a))),a.onChangeWhatToSay=a.onChangeWhatToSay.bind(Object(b.a)(Object(b.a)(a))),a.onMaybeSubmitWhatToSay=a.onMaybeSubmitWhatToSay.bind(Object(b.a)(Object(b.a)(a))),a.onUpdateChatHistory=a.onUpdateChatHistory.bind(Object(b.a)(Object(b.a)(a))),a.createEmulator=a.createEmulator.bind(Object(b.a)(Object(b.a)(a))),a.stopEmulator=a.stopEmulator.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"onUpdateChatHistory",value:function(e,t){var a=this.state.chatHistory;a=[{name:e,whatToSay:t}].concat(a),this.setState({chatHistory:a})}},{key:"broadcast",value:function(){var e=this.state,t=e.voice,a=e.name,n=e.whatToSay;this.utterance(t,n,!0),this.onUpdateChatHistory(a,n),fe.emit("chat message",JSON.stringify({name:a,whatToSay:n,voice:t}))}},{key:"utterance",value:function(){var e=Object(l.a)(s.a.mark(function e(t,a,n){var o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.busy){e.next=8;break}return this.setState({busy:!0,busyText:"Please wait, text to speech processing"}),n&&this.setState({blockTextEditing:!0,whatToSay:""}),o="[:phoneme on]".concat(t).concat(a,"213p"),e.next=6,this.createEmulator(o);case 6:this.setState({busy:!1,busyText:"Type something to say it..."}),n&&this.setState({blockTextEditing:!1});case 8:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"createEmulator",value:function(){var e=Object(l.a)(s.a.mark(function e(t){var a=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve({whatToSay:t,onXHRProgress:function(e){if(e.lengthComputable){var t=e.loaded/e.total*100;a.setState({busyText:"Please wait... ".concat(parseInt(t,10),"% loaded. Oh make sure ur sound is on.\nThis doesn't really work on mobile yet (at least not on my phone).")})}},onEmulatorFault:function(){a.setState({busy:!1,blockTextEditing:!1,busyText:"Type something to say it..."})}});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"stopEmulator",value:function(){this.emulator.stop(),delete this.emulator}},{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return fe.on("chat history",function(e){JSON.parse(e).forEach(function(e){var a=e.name,n=e.whatToSay;t.onUpdateChatHistory(a,n)})}),fe.emit("chat history"),fe.on("chat message",function(e){var a=JSON.parse(e),n=a.name,o=a.whatToSay,r=a.voice;t.onUpdateChatHistory(n,o),t.utterance(r,o,!1)}),e.next=5,te(1e3);case 5:return this.setState({busy:!1,whatToSay:we}),e.next=8,this.broadcast();case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onResetName",value:function(){delete window.localStorage.name,this.setState({name:oe()})}},{key:"onResetVoice",value:function(){delete window.localStorage.voice,this.setState({voice:re()})}},{key:"onChangeWhatToSay",value:function(e){this.setState({whatToSay:e.target.value})}},{key:"onMaybeSubmitWhatToSay",value:function(e){"Enter"===e.key&&this.broadcast(this.state.whatToSay)}},{key:"render",value:function(){var e=this.state,t=e.blockTextEditing,a=e.busyText,n=e.whatToSay,r=e.name,i=e.voice,c=e.chatHistory;return o.a.createElement(v.a,{title:"hypertalk.doc"},o.a.createElement(I,{items:[{children:"name: ".concat(r),onClick:this.onResetName},{children:"voice: ".concat(i),onClick:this.onResetVoice}]}),o.a.createElement(q,{placeholder:a,value:n,disabled:t,onChange:this.onChangeWhatToSay,onKeyPress:this.onMaybeSubmitWhatToSay}),o.a.createElement("div",{style:Se.chatHistory},c.map(function(e,t){var a=e.name,n=e.whatToSay,r="".concat(a,": ").concat(n);return o.a.createElement(q,{style:Se.chatHistoryItem,key:"".concat(t,"-").concat(r),value:r,disabled:!0})})))}}]),t}(n.Component),Oe=j.Create({screen:{whiteSpace:"pre",font:"".concat(j.vars.spacing.medium," monospace"),lineHeight:j.vars.spacing.medium}}),Ee=function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).call(this,e))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){ge()}},{key:"render",value:function(){return o.a.createElement("div",null,ae&&o.a.createElement("div",null,o.a.createElement("div",{id:"screen_container"},o.a.createElement("div",{style:Oe.screen}),o.a.createElement("canvas",{style:{display:"none"}}))))}}]),t}(n.Component);ie()?i.a.render(o.a.createElement(Ee,null),document.getElementById("root")):i.a.render(o.a.createElement(ke,null),document.getElementById("root"))}},[[47,2,1]]]);
//# sourceMappingURL=main.6c94c9f0.chunk.js.map