(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t){e.exports={"v86state.bin":"https://storage.googleapis.com/hypertalk-static/v86state.bin","windows98.img":"https://storage.googleapis.com/hypertalk-static/windows98.img"}},44:function(e,t,a){e.exports=a.p+"static/media/logo.186ee9ec.svg"},46:function(e,t,a){e.exports=a.p+"static/media/seabios.b72845a6.bin"},47:function(e,t,a){e.exports=a.p+"static/media/vgabios.1747aff3.bin"},49:function(e,t,a){e.exports=a(93)},79:function(e,t){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),i=a.n(r),s=a(5),c=a.n(s),l=a(13),u=a(8),d=a(9),h=a(11),p=a(10),g=a(12),m=a(1),f=a(40),v=a.n(f),b=a(4),y=a(25),w=a(41),S=a.n(w),k=a(42),O=a.n(k),x=a(48),j=function(e){return function(t){var a=new String("".concat(t).concat(e));return a.raw=t,a}},T=j("em"),E=j("px"),C={Create:function(e){var t={};for(var a in e)t[a]=Object(x.a)(e[a]);return t},vars:{colors:{black:"#1c1d20",white:"#ffffff",orange:"#ffea8d",grey0:"#e1e6e9",grey1:"#a5abb4",grey2:"#3e4043",blue:"#4a9cdd"},pageWidth:E(1080),spacing:{xs:E(4),small:E(8),regular:E(16),medium:E(24),large:E(38),xl:E(56)},fontSize:{small:E(12),regular:E(15),medium:E(18),large:E(22),xl:E(28),xxl:E(36)},lineHeights:{regular:T(1.5),small:T(1.25)}}},W=new S.a(Object(b.a)({},O.a,{baseFontSize:C.vars.fontSize.regular,baseLineHeight:C.vars.lineHeights.regular,blockMarginBottom:.5,scaleRatio:1.5})),H=C.Create({container:{backgroundColor:C.vars.colors.grey1,maxWidth:C.vars.pageWidth,margin:"0 auto",padding:C.vars.spacing.large}}),P=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.TypographyStyle,{typography:W}),o.a.createElement(y.GoogleFont,{typography:W}),o.a.createElement("div",{style:H.container},t))},R={display:"flex"},A={textAlign:"left",padding:"0 ".concat(C.vars.spacing.regular.raw/2,"px")},L={flex:1},M={textAlign:"left",paddingLeft:0},_={textAlign:"right",paddingRight:0},N={paddingLeft:0,paddingRight:0,textAlign:"center"},U=function(e){var t=e.children,a=e.first,n=e.last,r=e.equalWidth,i=e.centered,s=e.style,c=C.Create(Object(b.a)({},A,a?M:{},n?_:{},a&&n||i?N:{},a&&n?N:{},r?L:{},s||{}));return o.a.createElement("div",{style:c},t)};U.defaultProps={centered:!1,equalWidth:!0};var z=function(e){var t=e.children,a=e.alignColumns,n=o.a.Children.toArray(t).filter(function(e){return e}),r=n.length,i=C.Create(Object(b.a)({},R,{alignItems:a}));return o.a.createElement("div",{style:i},n.map(function(e,t){return o.a.cloneElement(e,{first:0===t,last:t===r-1})}))},J=C.Create({button:{border:"none",textAlign:"center",backgroundColor:C.vars.colors.grey0,cursor:"pointer",padding:"".concat(C.vars.spacing.xs," ").concat(C.vars.spacing.small),color:C.vars.colors.black},menuContainer:{marginTop:C.vars.spacing.small,textAlign:"right"}}),B=function(e){var t=e.style,a=e.children,n=Object(b.a)({},J.button,t);return o.a.createElement("button",Object.assign({},e,{style:n}),a)},I=function(e){var t=e.style,a=e.children,n=o.a.Children.toArray(a).filter(function(e){return e}),r=Object(b.a)({},J.menuContainer,t);return o.a.createElement("div",Object.assign({},e,{style:r}),n.map(function(e,t){return o.a.cloneElement(e,{style:{marginLeft:C.vars.spacing.regular}})}))},F=a(44),V=a.n(F),G=C.Create({img:{height:"80px",width:"auto"}}),D=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.items;return o.a.createElement("div",{style:G.root},o.a.createElement(z,null,o.a.createElement(U,null,o.a.createElement("img",{style:G.img,src:V.a,alt:"logo"})),o.a.createElement(U,{style:{flex:3}},o.a.createElement(I,null,e.map(function(e,t){return o.a.createElement(B,Object.assign({key:t},e))})))))}}]),t}(n.Component);D.defaultProps={items:[]};var q=D,K=a(45),X=a.n(K),Z=C.Create({root:{width:"100%",font:"".concat(C.vars.spacing.regular," monospace"),color:C.vars.colors.black},disabled:{backgroundColor:C.vars.colors.orange}}),$=function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).call(this,e))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.style,n=t.children,r=t.disabled,i=Object(b.a)({},Z.root,a,r?Z.disabled:{});return o.a.createElement(X.a,Object.assign({},this.props,{ref:function(t){e.ref=t},style:i}),n)}}]),t}(n.Component);$.defaultProps={disabled:!1};var Q=$,Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");Y?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):te(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):te(t,e)})}}function te(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return new Promise(function(a,n){var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="arraybuffer",o.addEventListener("load",function(){200===o.status?a(o.response):n()},!1),o.addEventListener("progress",t),o.send()})}function ne(e){return new Promise(function(t){return setTimeout(t,e)})}var oe=!1;function re(e){return e[Math.floor(Math.random()*e.length)]}function ie(){var e=re(["Moon unit","Ravioli","Anthoni","Mookie","Diesel","Ulysses","Jose","\u200eLasernut","\u200eMartha","\u200eBig boy","\u200eBaby girl","\u200eMcNugget","Frederico","Sloan","Miller","Gordon","Lafayette","Jethro","Naomi","\u200eTowelette","Demitri","\u200eLopez","\u200eSullivan","\u200eSatchmo","Armando","Tiberius","Phoebe","Titan","Janus","Callisto","Puck","Belinda","Bianca","Dugan","Kiplet","Gomez","Kermit","Cedric","Solomon","\u200eEustace","\u200eZero","Flash","Tonto","Lazarus","Forbes","Skippy","Ripto","Sierra","Gilligan","Seymour","Mordechai","Vincent","Stacia","Poot","Janet","Penelope"]),t=window.localStorage.name?window.localStorage.name:window.prompt("whats ur name?",e);return window.localStorage.name=t,t}function se(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=re(["[:nb]","[:nh]","[:nk]","[:nf]","[:nd]","[:dv ap 10]","[:dv ap 200]","[:dv hs 1]","[:dv pr 1]","[:dv gv 100]","[:nb][:dv pr 1][:dv br 200][:dv gv 40][:dv hs 50][:rate 30]"]),a=window.localStorage.voice?window.localStorage.voice:e?t:window.prompt("whats ur voice?",t);return window.localStorage.voice=a,a}var ce=a(46),le=a.n(ce),ue=a(47),de=a.n(ue),he=a(26),pe=a.n(he),ge=1048576,me=pe.a["windows98.img"],fe=pe.a["v86state.bin"],ve=!1;ve&&(me="".concat("https://hypertalk-221623.appspot.com","/static/").concat("windows98.img"),fe="".concat("https://hypertalk-221623.appspot.com","/static/").concat("v86state.bin"));var be=function(e){var t=e.onSerialOutput,a=e.onXHRProgress;return new Promise(function(e,n){var o=[ae(fe,a)];ve&&o.push(ae(me)),Promise.all(o).then(function(a){var n=a[0],o=a[1],r=ve?{buffer:o}:{url:me,async:!0,size:300*ge},i=new window.V86Starter({screen_container:oe?document.getElementById("screen_container"):null,bios:{url:le.a},vga_bios:{url:de.a},hda:r,autostart:!0,memory_size:128*ge,vga_memory_size:8*ge,disable_mouse:!0,disable_keyboard:!0});window.emulator=i,i.add_listener("emulator-ready",Object(l.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:i.restore_state(n),e(i);case 2:case"end":return t.stop()}},t,this)}))),i.add_listener("cpu-event-halt",function(){console.log("fuk"),i.stop(),i.reset(),i.start(),i.restore_state(n)}),i.add_listener("serial0-output-char",function(e){t(e)})})})},ye=v()("https://hypertalk-221623.appspot.com",{transports:["polling"]}),we=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],re(["How are you gentlemen?","happy birthday","Sure why not","Listen","Lets circle back on that","Who cares","Are you f\u2019realz","Welcome to my world","I have thoughts on that","Uh","Last time for everything","Need you to get real aware","there's no there there","Show me the data","bulbous","Who fuks"])}(),Se=C.Create({screen:{whiteSpace:"pre",font:"".concat(C.vars.spacing.medium," monospace"),lineHeight:C.vars.spacing.medium},chatHistory:{},chatHistoryItem:{marginTop:C.vars.spacing.medium}}),ke=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={whatToSay:"",blockTextEditing:!0,busy:!0,busyText:"Please wait...",serialOutput:"",name:ie(),voice:se(!0),chatHistory:[]},a.broadcast=a.broadcast.bind(Object(m.a)(Object(m.a)(a))),window.say=a.broadcast,a.utterance=a.utterance.bind(Object(m.a)(Object(m.a)(a))),a.onResetName=a.onResetName.bind(Object(m.a)(Object(m.a)(a))),a.onResetVoice=a.onResetVoice.bind(Object(m.a)(Object(m.a)(a))),a.onChangeWhatToSay=a.onChangeWhatToSay.bind(Object(m.a)(Object(m.a)(a))),a.onMaybeSubmitWhatToSay=a.onMaybeSubmitWhatToSay.bind(Object(m.a)(Object(m.a)(a))),a.onUpdateChatHistory=a.onUpdateChatHistory.bind(Object(m.a)(Object(m.a)(a))),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"onUpdateChatHistory",value:function(e,t){var a=this.state.chatHistory;a=[{name:e,whatToSay:t}].concat(a),this.setState({chatHistory:a})}},{key:"broadcast",value:function(){var e=this.state,t=e.voice,a=e.name,n=e.whatToSay;this.utterance(t,n,!0),this.onUpdateChatHistory(a,n),ye.emit("chat message",JSON.stringify({name:a,whatToSay:n,voice:t}))}},{key:"utterance",value:function(){var e=Object(l.a)(c.a.mark(function e(t,a,n){var o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.busy){e.next=15;break}this.setState({busy:!0,busyText:"Please wait, text to speech processing"}),n&&this.setState({blockTextEditing:!0,serialOutput:"",whatToSay:""}),o="[:phoneme on]".concat(t).concat(a,"213p"),this.emulator.serial0_send(o);case 5:return e.next=8,ne(1e3);case 8:if(-1===this.state.serialOutput.indexOf("ready")){e.next=13;break}return this.setState({busy:!1,busyText:"Type something to say it..."}),n&&this.setState({blockTextEditing:!1}),e.abrupt("return");case 13:e.next=5;break;case 15:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return ye.on("chat history",function(e){JSON.parse(e).forEach(function(e){var a=e.name,n=e.whatToSay;t.onUpdateChatHistory(a,n)})}),ye.emit("chat history"),e.next=4,be({onSerialOutput:function(e){var a=t.state.serialOutput;a+=e,t.setState({serialOutput:a})},onXHRProgress:function(e){if(e.lengthComputable){var a=e.loaded/e.total*100;t.setState({busyText:"Please wait... ".concat(parseInt(a,10),"% loaded. Oh make sure ur sound is on.\nThis doesn't really work on mobile yet (at least not on my phone).")})}}});case 4:return this.emulator=e.sent,ee(),e.next=8,ne(1e3);case 8:return this.setState({busy:!1,whatToSay:we}),e.next=11,this.broadcast();case 11:ye.on("chat message",function(e){var a=JSON.parse(e),n=a.name,o=a.whatToSay,r=a.voice;t.onUpdateChatHistory(n,o),t.utterance(r,o,!1)});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onResetName",value:function(){delete window.localStorage.name,this.setState({name:ie()})}},{key:"onResetVoice",value:function(){delete window.localStorage.voice,this.setState({voice:se()})}},{key:"onChangeWhatToSay",value:function(e){this.setState({whatToSay:e.target.value})}},{key:"onMaybeSubmitWhatToSay",value:function(e){"Enter"===e.key&&this.broadcast(this.state.whatToSay)}},{key:"render",value:function(){var e=this.state,t=e.blockTextEditing,a=e.busyText,n=e.whatToSay,r=e.name,i=e.voice,s=e.chatHistory;return o.a.createElement(P,null,o.a.createElement(q,{items:[{children:"name: ".concat(r),onClick:this.onResetName},{children:"voice: ".concat(i),onClick:this.onResetVoice}]}),o.a.createElement(Q,{placeholder:a,value:n,disabled:t,onChange:this.onChangeWhatToSay,onKeyPress:this.onMaybeSubmitWhatToSay}),o.a.createElement("div",{style:Se.chatHistory},s.map(function(e,t){var a=e.name,n=e.whatToSay,r="".concat(a,": ").concat(n);return o.a.createElement(Q,{style:Se.chatHistoryItem,key:"".concat(t,"-").concat(r),value:r,disabled:!0})})),oe&&o.a.createElement("div",null,o.a.createElement("div",{id:"screen_container"},o.a.createElement("div",{style:Se.screen}),o.a.createElement("canvas",{style:{display:"none"}}))))}}]),t}(n.Component);i.a.render(o.a.createElement(ke,null),document.getElementById("root"))}},[[49,2,1]]]);
//# sourceMappingURL=main.9abadd15.chunk.js.map