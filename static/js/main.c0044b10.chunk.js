(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t){e.exports={"v86state.bin":"https://storage.googleapis.com/hypertalk-static/v86state.bin","windows98.img":"https://storage.googleapis.com/hypertalk-static/windows98.img"}},41:function(e,t,n){e.exports=n.p+"static/media/logo.5d13d1b8.svg"},43:function(e,t,n){e.exports=n.p+"static/media/seabios.b72845a6.bin"},44:function(e,t,n){e.exports=n.p+"static/media/vgabios.1747aff3.bin"},46:function(e,t,n){e.exports=n(86)},75:function(e,t){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(24),i=n.n(r),c=n(2),s=n.n(c),l=n(11),u=n(5),d=n(6),h=n(9),f=n(7),p=n(8),m=n(1),v=n(38),g=n.n(v),b=n(39),y=n.n(b),w=n(10),E=n(45),S=function(e){return function(t){var n=new String("".concat(t).concat(e));return n.raw=t,n}},O=S("em"),k=S("px"),T={Create:function(e){var t={};for(var n in e)t[n]=Object(E.a)(e[n]);return t},vars:{colors:{black:"#1c1d20",white:"#ffffff",orange:"#ffea8d",grey0:"#e1e6e9",grey1:"#a5abb4",grey2:"#3e4043",blue:"#4a9cdd"},pageWidth:k(1080),spacing:{xs:k(4),small:k(8),regular:k(16),medium:k(24),large:k(38),xl:k(56)},fontSize:{small:k(12),regular:k(15),medium:k(18),large:k(22),xl:k(28),xxl:k(36)},lineHeights:{regular:O(1.5),small:O(1.25)}}},j={display:"flex"},C={textAlign:"left",padding:"0 ".concat(T.vars.spacing.regular.raw/2,"px")},x={flex:1},_={textAlign:"left",paddingLeft:0},P={textAlign:"right",paddingRight:0},R={paddingLeft:0,paddingRight:0,textAlign:"center"},A=function(e){var t=e.children,n=e.first,a=e.last,r=e.equalWidth,i=e.centered,c=e.style,s=T.Create(Object(w.a)({},C,n?_:{},a?P:{},n&&a||i?R:{},n&&a?R:{},r?x:{},c||{}));return o.a.createElement("div",{style:s},t)};A.defaultProps={centered:!1,equalWidth:!0};var L=function(e){var t=e.children,n=e.alignColumns,a=o.a.Children.toArray(t).filter(function(e){return e}),r=a.length,i=T.Create(Object(w.a)({},j,{alignItems:n}));return o.a.createElement("div",{style:i},a.map(function(e,t){return o.a.cloneElement(e,{first:0===t,last:t===r-1})}))},N=T.Create({button:{border:"none",textAlign:"center",backgroundColor:T.vars.colors.grey0,cursor:"pointer",padding:"".concat(T.vars.spacing.xs," ").concat(T.vars.spacing.small),color:T.vars.colors.black},menuContainer:{marginTop:T.vars.spacing.small,textAlign:"right"}}),H=function(e){var t=e.style,n=e.children,a=Object(w.a)({},N.button,t);return o.a.createElement("button",Object.assign({},e,{style:a}),n)},M=function(e){var t=e.style,n=e.children,a=o.a.Children.toArray(n).filter(function(e){return e}),r=Object(w.a)({},N.menuContainer,t);return o.a.createElement("div",Object.assign({},e,{style:r}),a.map(function(e,t){return o.a.cloneElement(e,{style:{marginLeft:T.vars.spacing.regular}})}))},W=n(41),U=n.n(W),I=T.Create({img:{height:"80px",width:"auto"},root:{marginBottom:T.vars.spacing.regular}}),D=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.items;return o.a.createElement("div",{style:I.root},o.a.createElement(L,null,o.a.createElement(A,null,o.a.createElement("img",{style:I.img,src:U.a,alt:"logo"})),o.a.createElement(A,{style:{flex:3}},o.a.createElement(M,null,e.map(function(e,t){return o.a.createElement(H,Object.assign({key:t},e))})))))}}]),t}(a.Component);D.defaultProps={items:[]};var B=D,V=n(42),J=n.n(V),F=T.Create({root:{border:"none",width:"100%",font:"".concat(T.vars.spacing.regular," monospace"),color:T.vars.colors.black},disabled:{backgroundColor:T.vars.colors.orange}}),z=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).focus=n.focus.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.focus()}},{key:"componentWillReceiveProps",value:function(e){!e.disabled&&this.props.disabled&&setTimeout(this.focus,500)}},{key:"focus",value:function(){var e=this.props._autoFocus;if(console.log("focus textarea-autofocus"),e){var t=window.document.querySelectorAll(".textarea-autofocus");t.length&&(t[0].focus(),t[0].select(),t[0].click())}}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.children,a=e.disabled,r=Object(w.a)({},F.root,t,a?F.disabled:{});return o.a.createElement(J.a,Object.assign({className:"textarea-autofocus"},this.props,{style:r}),n)}}]),t}(a.Component);z.defaultProps={disabled:!1,_autoFocus:!1};var q=z,G=n(43),K=n.n(G),X=n(44),Z=n.n(X),$=n(25),Q=n.n($),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");Y?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):te(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):te(t,e)})}}function te(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ne={},ae={};function oe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return new Promise(function(n,a){if(ne[e])n(ne[e]);else if(ae[e]){!function t(){console.log("waiting for ".concat(e," in cache")),ne[e]?n(ne[e]):setTimeout(t,500)}()}else{ae[e]=!0;var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="arraybuffer",o.addEventListener("load",function(){200===o.status?(ne[e]=o.response,ae[e]=!1,n(o.response),ee()):a()},!1),o.addEventListener("progress",t),o.send()}})}function re(e){return new Promise(function(t){return setTimeout(t,e)})}var ie=!1;function ce(e){return e[Math.floor(Math.random()*e.length)]}function se(){var e=ce(["Moon unit","Ravioli","Anthoni","Mookie","Diesel","Ulysses","Jose","\u200eLasernut","\u200eMartha","\u200eBig boy","\u200eBaby girl","\u200eMcNugget","Frederico","Sloan","Miller","Gordon","Lafayette","Jethro","Naomi","\u200eTowelette","Demitri","\u200eLopez","\u200eSullivan","\u200eSatchmo","Armando","Tiberius","Phoebe","Titan","Janus","Callisto","Puck","Belinda","Bianca","Dugan","Kiplet","Gomez","Kermit","Cedric","Solomon","\u200eEustace","\u200eZero","Flash","Tonto","Lazarus","Forbes","Skippy","Ripto","Sierra","Gilligan","Seymour","Mordechai","Vincent","Stacia","Poot","Janet","Penelope"]),t=window.localStorage.name?window.localStorage.name:window.prompt("whats ur name?",e);return window.localStorage.name=t,t}function le(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=ce(["[:nb]","[:nh]","[:nk]","[:nf]","[:nd]","[:dv ap 10]","[:dv ap 200]","[:dv hs 1]","[:dv pr 1]","[:dv gv 100]","[:nb][:dv pr 1][:dv br 200][:dv gv 40][:dv hs 50][:rate 30]"]),n=window.localStorage.voice?window.localStorage.voice:e?t:window.prompt("whats ur voice?",t);return window.localStorage.voice=n,n}function ue(){return-1!==window.location.href.indexOf("child")}var de=0;function he(){return window.location.hash.split("=").pop()}function fe(){for(var e="".concat(ue()?"child".concat(he()):"parent",": "),t=0;t<arguments.length;t++){var n=arguments[t];"string"===typeof n?e+=" ".concat(n):n.data?e+=" ".concat(JSON.stringify(n.data,null,2)):e+=" ".concat(n)}console.log(e)}var pe={};function me(e,t){fe("sendMessageToChild",e,t),pe[e].contentWindow.postMessage(t,"*")}var ve={};function ge(e){fe("sendMessageToParent",e),window.parent.postMessage(e)}var be=null;var ye=1048576,we=Q.a["windows98.img"],Ee=Q.a["v86state.bin"],Se="true"===Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_USE_LOCAL_ASSETS;function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onXHRProgress,n=e.whatToSay,a=++de;return new Promise(function(e,o){var r,i=[oe(Ee,t)];Se&&i.push(oe(we)),Promise.all(i).then(function(t){var o,i,c=t[0],s=t[1];i=function(t){switch(t.data){case"child:".concat(a,":ready"):r=["parent:sendAssets",c],Se?r.push(s):r.push(null),me(a,r);break;case"child:".concat(a,":booted"):me(a,r=["parent:speak",n]);break;case"child:".concat(a,":doneSpeaking"):o=a,window.removeEventListener("message",ve[o],!1),delete ve[o],function(e){fe("destroyChild",e),pe[e].remove(),pe[e]=null,delete pe[e]}(a),e()}var o},ve[o=a]=function(e){fe("receiveMessageFromChild",o,e),i(e)},window.addEventListener("message",ve[o],!1),function(e){fe("createChild",e);var t=document.createElement("iframe");t.src="".concat(window.location.href,"?cachebust=").concat(Date.now(),"#childID=").concat(e),t.width=ie?"1000":"1",t.height=ie?"500":"1",document.querySelector("body").appendChild(t),pe[e]=t}(a)})})}function ke(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e,t,n=he();function a(){e.stop(),window.removeEventListener("message",be,!1),ge("child:".concat(n,":doneSpeaking"))}t=function(t){switch(t.data[0]){case"parent:sendAssets":var o=t.data[1],r=t.data[2],i=Se?{buffer:r}:{url:we,async:!0,size:300*ye};try{(e=new window.V86Starter({screen_container:ie?document.getElementById("screen_container"):null,bios:{url:K.a},vga_bios:{url:Z.a},hda:i,autostart:!0,memory_size:128*ye,vga_memory_size:8*ye,disable_mouse:!0,disable_keyboard:!0})).add_listener("emulator-ready",Object(l.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.restore_state(o),ge("child:".concat(n,":booted"));case 2:case"end":return t.stop()}},t,this)}))),d="cpu-event-halt",e.add_listener(d,function(){fe('fault detected with "'.concat(d,'" event')),a()})}catch(t){fe("fault detected"),fe(t),a()}break;case"parent:speak":var c=t.data[1],u="";e.add_listener("serial0-output-char",function(e){-1!==(u+=e).indexOf("ready")&&a()}),e.serial0_send(c)}var d},be=function(e){fe("receiveMessageFromParent",e),t(e)},window.addEventListener("message",be,!1),ge("child:".concat(n,":ready"))}Se&&(we="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_CHATSERVER_ENDPOINT,"/static/").concat("windows98.img"),Ee="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_CHATSERVER_ENDPOINT,"/static/").concat("v86state.bin"));var Te=y()(Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_CHATSERVER_ENDPOINT,{transports:["polling"]}),je=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],ce(["How are you gentlemen?","happy birthday","Sure why not","Listen","Lets circle back on that","Who cares","Are you f\u2019realz","Welcome to my world","I have thoughts on that","Uh","Last time for everything","Need you to get real aware","there's no there there","Show me the data","bulbous","Who fuks"])}(),Ce=T.Create({chatHistory:{},chatHistoryItem:{marginTop:T.vars.spacing.medium}}),xe=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={whatToSay:"",blockTextEditing:!0,busyText:"Please wait...",name:se(),voice:le(!0),chatHistory:[]},n.broadcast=n.broadcast.bind(Object(m.a)(Object(m.a)(n))),window.say=n.broadcast,n.utterance=n.utterance.bind(Object(m.a)(Object(m.a)(n))),n.onResetName=n.onResetName.bind(Object(m.a)(Object(m.a)(n))),n.onResetVoice=n.onResetVoice.bind(Object(m.a)(Object(m.a)(n))),n.onChangeWhatToSay=n.onChangeWhatToSay.bind(Object(m.a)(Object(m.a)(n))),n.onMaybeSubmitWhatToSay=n.onMaybeSubmitWhatToSay.bind(Object(m.a)(Object(m.a)(n))),n.onUpdateChatHistory=n.onUpdateChatHistory.bind(Object(m.a)(Object(m.a)(n))),n.createEmulator=n.createEmulator.bind(Object(m.a)(Object(m.a)(n))),n.stopEmulator=n.stopEmulator.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"onUpdateChatHistory",value:function(e,t){var n=this.state.chatHistory;n=[{name:e,whatToSay:t}].concat(n),this.setState({chatHistory:n})}},{key:"broadcast",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,n,a,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.voice,a=t.name,o=t.whatToSay,Te.emit("chat message",JSON.stringify({name:a,whatToSay:o,voice:n})),e.next=4,this.utterance(n,o,!0);case 4:this.onUpdateChatHistory(a,o);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"utterance",value:function(){var e=Object(l.a)(s.a.mark(function e(t,n,a){var o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a&&this.setState({whatToSay:"",blockTextEditing:!0,busyText:"Processing speech..."}),"["===t[0]&&"]"===t[t.length-1]||(t=le(!0)),o="[:phoneme on]".concat(t).concat(n,"213p"),e.next=5,this.createEmulator(o);case 5:a&&this.setState({blockTextEditing:!1,busyText:"Type something to say it..."});case 6:case"end":return e.stop()}},e,this)}));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"createEmulator",value:function(){var e=Object(l.a)(s.a.mark(function e(t){var n=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe({whatToSay:t,onXHRProgress:function(e){if(e.lengthComputable){var t=e.loaded/e.total*100;n.setState({blockTextEditing:!0,busyText:"Please wait... ".concat(parseInt(t,10),"% loaded. Make sure ur sound is on. This doesn't really work phones yet (at least not on my phone).")})}},onEmulatorFault:function(){n.setState({blockTextEditing:!1,busyText:"Type something to say it..."})}});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"stopEmulator",value:function(){this.emulator.stop(),delete this.emulator}},{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Te.on("chat history",function(e){JSON.parse(e).forEach(function(e){var n=e.name,a=e.whatToSay;t.onUpdateChatHistory(n,a)})}),Te.emit("chat history"),Te.on("chat message",function(e){var n=JSON.parse(e),a=n.name,o=n.whatToSay,r=n.voice;t.onUpdateChatHistory(a,o),t.utterance(r,o,!1)}),e.next=5,re(1e3);case 5:return this.setState({whatToSay:je}),e.next=8,this.broadcast();case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onResetName",value:function(){delete window.localStorage.name,this.setState({name:se()})}},{key:"onResetVoice",value:function(){delete window.localStorage.voice,this.setState({voice:le()})}},{key:"onChangeWhatToSay",value:function(e){this.setState({whatToSay:e.target.value})}},{key:"onMaybeSubmitWhatToSay",value:function(e){"Enter"===e.key&&this.broadcast(this.state.whatToSay)}},{key:"render",value:function(){var e=this.state,t=e.blockTextEditing,n=e.busyText,a=e.whatToSay,r=e.name,i=e.voice,c=e.chatHistory;return o.a.createElement(g.a,{title:"hypertalk.doc"},o.a.createElement(B,{items:[{children:"name: ".concat(r),onClick:this.onResetName},{children:"voice: ".concat(i),onClick:this.onResetVoice}]}),o.a.createElement(q,{_autoFocus:!0,placeholder:n,value:a,disabled:t,onChange:this.onChangeWhatToSay,onKeyPress:this.onMaybeSubmitWhatToSay}),o.a.createElement("div",{style:Ce.chatHistory},c.map(function(e,t){var n=e.name,a=e.whatToSay,r="".concat(n,": ").concat(a);return o.a.createElement(q,{style:Ce.chatHistoryItem,key:"".concat(t,"-").concat(r),value:r,disabled:!0})})))}}]),t}(a.Component),_e=T.Create({screen:{whiteSpace:"pre",font:"".concat(T.vars.spacing.medium," monospace"),lineHeight:T.vars.spacing.medium}}),Pe=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){ke()}},{key:"render",value:function(){return o.a.createElement("div",null,ie&&o.a.createElement("div",null,o.a.createElement("div",{id:"screen_container"},o.a.createElement("div",{style:_e.screen}),o.a.createElement("canvas",{style:{display:"none"}}))))}}]),t}(a.Component);ue()?i.a.render(o.a.createElement(Pe,null),document.getElementById("root")):i.a.render(o.a.createElement(xe,null),document.getElementById("root"))}},[[46,2,1]]]);
//# sourceMappingURL=main.c0044b10.chunk.js.map