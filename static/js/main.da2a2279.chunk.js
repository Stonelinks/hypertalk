(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t){e.exports={"v86state.bin":"https://storage.googleapis.com/hypertalk-static/v86state.bin","windows98.img":"https://storage.googleapis.com/hypertalk-static/windows98.img"}},41:function(e,t,a){e.exports=a.p+"static/media/logo.5d13d1b8.svg"},43:function(e,t,a){e.exports=a.p+"static/media/seabios.b72845a6.bin"},44:function(e,t,a){e.exports=a.p+"static/media/vgabios.1747aff3.bin"},46:function(e,t,a){e.exports=a(86)},75:function(e,t){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),i=a.n(r),c=a(2),s=a.n(c),l=a(11),u=a(5),d=a(6),h=a(9),p=a(7),f=a(8),m=a(1),v=a(38),g=a.n(v),b=a(39),y=a.n(b),w=a(10),k=a(45),S=function(e){return function(t){var a=new String("".concat(t).concat(e));return a.raw=t,a}},O=S("em"),j=S("px"),E={Create:function(e){var t={};for(var a in e)t[a]=Object(k.a)(e[a]);return t},vars:{colors:{black:"#1c1d20",white:"#ffffff",orange:"#ffea8d",grey0:"#e1e6e9",grey1:"#a5abb4",grey2:"#3e4043",blue:"#4a9cdd"},pageWidth:j(1080),spacing:{xs:j(4),small:j(8),regular:j(16),medium:j(24),large:j(38),xl:j(56)},fontSize:{small:j(12),regular:j(15),medium:j(18),large:j(22),xl:j(28),xxl:j(36)},lineHeights:{regular:O(1.5),small:O(1.25)}}},T={display:"flex"},x={textAlign:"left",padding:"0 ".concat(E.vars.spacing.regular.raw/2,"px")},C={flex:1},M={textAlign:"left",paddingLeft:0},W={textAlign:"right",paddingRight:0},P={paddingLeft:0,paddingRight:0,textAlign:"center"},H=function(e){var t=e.children,a=e.first,n=e.last,r=e.equalWidth,i=e.centered,c=e.style,s=E.Create(Object(w.a)({},x,a?M:{},n?W:{},a&&n||i?P:{},a&&n?P:{},r?C:{},c||{}));return o.a.createElement("div",{style:s},t)};H.defaultProps={centered:!1,equalWidth:!0};var A=function(e){var t=e.children,a=e.alignColumns,n=o.a.Children.toArray(t).filter(function(e){return e}),r=n.length,i=E.Create(Object(w.a)({},T,{alignItems:a}));return o.a.createElement("div",{style:i},n.map(function(e,t){return o.a.cloneElement(e,{first:0===t,last:t===r-1})}))},L=E.Create({button:{border:"none",textAlign:"center",backgroundColor:E.vars.colors.grey0,cursor:"pointer",padding:"".concat(E.vars.spacing.xs," ").concat(E.vars.spacing.small),color:E.vars.colors.black},menuContainer:{marginTop:E.vars.spacing.small,textAlign:"right"}}),R=function(e){var t=e.style,a=e.children,n=Object(w.a)({},L.button,t);return o.a.createElement("button",Object.assign({},e,{style:n}),a)},_=function(e){var t=e.style,a=e.children,n=o.a.Children.toArray(a).filter(function(e){return e}),r=Object(w.a)({},L.menuContainer,t);return o.a.createElement("div",Object.assign({},e,{style:r}),n.map(function(e,t){return o.a.cloneElement(e,{style:{marginLeft:E.vars.spacing.regular}})}))},N=a(41),U=a.n(N),J=E.Create({img:{height:"80px",width:"auto"},root:{marginBottom:E.vars.spacing.regular}}),B=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.items;return o.a.createElement("div",{style:J.root},o.a.createElement(A,null,o.a.createElement(H,null,o.a.createElement("img",{style:J.img,src:U.a,alt:"logo"})),o.a.createElement(H,{style:{flex:3}},o.a.createElement(_,null,e.map(function(e,t){return o.a.createElement(R,Object.assign({key:t},e))})))))}}]),t}(n.Component);B.defaultProps={items:[]};var F=B,I=a(42),z=a.n(I),D=E.Create({root:{border:"none",width:"100%",font:"".concat(E.vars.spacing.regular," monospace"),color:E.vars.colors.black},disabled:{backgroundColor:E.vars.colors.orange}}),V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).focus=a.focus.bind(Object(m.a)(Object(m.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.focus()}},{key:"componentWillReceiveProps",value:function(e){!e.disabled&&this.props.disabled&&setTimeout(this.focus,500)}},{key:"focus",value:function(){var e=this.props._autoFocus;if(console.log("focus textarea-autofocus"),e){var t=window.document.querySelectorAll(".textarea-autofocus");t.length&&(t[0].focus(),t[0].select(),t[0].click())}}},{key:"render",value:function(){var e=this.props,t=e.style,a=e.children,n=e.disabled,r=Object(w.a)({},D.root,t,n?D.disabled:{});return o.a.createElement(z.a,Object.assign({className:"textarea-autofocus"},this.props,{style:r}),a)}}]),t}(n.Component);V.defaultProps={disabled:!1,_autoFocus:!1};var q=V,G=a(43),K=a.n(G),X=a(44),Z=a.n(X),$=a(25),Q=a.n($),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");Y?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):te(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):te(t,e)})}}function te(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ae={},ne={};function oe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return new Promise(function(a,n){if(ae[e])a(ae[e]);else if(ne[e]){!function t(){console.log("waiting for ".concat(e," in cache")),ae[e]?a(ae[e]):setTimeout(t,500)}()}else{ne[e]=!0;var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="arraybuffer",o.addEventListener("load",function(){200===o.status?(ae[e]=o.response,ne[e]=!1,a(o.response),ee()):n()},!1),o.addEventListener("progress",t),o.send()}})}function re(e){return new Promise(function(t){return setTimeout(t,e)})}var ie=!1;function ce(e){return e[Math.floor(Math.random()*e.length)]}function se(){var e=ce(["Moon unit","Ravioli","Anthoni","Mookie","Diesel","Ulysses","Jose","\u200eLasernut","\u200eMartha","\u200eBig boy","\u200eBaby girl","\u200eMcNugget","Frederico","Sloan","Miller","Gordon","Lafayette","Jethro","Naomi","\u200eTowelette","Demitri","\u200eLopez","\u200eSullivan","\u200eSatchmo","Armando","Tiberius","Phoebe","Titan","Janus","Callisto","Puck","Belinda","Bianca","Dugan","Kiplet","Gomez","Kermit","Cedric","Solomon","\u200eEustace","\u200eZero","Flash","Tonto","Lazarus","Forbes","Skippy","Ripto","Sierra","Gilligan","Seymour","Mordechai","Vincent","Stacia","Poot","Janet","Penelope"]),t=window.localStorage.name?window.localStorage.name:window.prompt("whats ur name?",e);return window.localStorage.name=t,t}function le(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=ce(["[:nb]","[:nh]","[:nk]","[:nf]","[:nd]","[:dv ap 10]","[:dv ap 200]","[:dv hs 1]","[:dv pr 1]","[:dv gv 100]","[:nb][:dv pr 1][:dv br 200][:dv gv 40][:dv hs 50][:rate 30]"]),a=window.localStorage.voice?window.localStorage.voice:e?t:window.prompt("whats ur voice?",t);return window.localStorage.voice=a,a}function ue(){return-1!==window.location.href.indexOf("child")}var de=0;function he(){return window.location.hash.split("=").pop()}function pe(){for(var e="".concat(ue()?"child".concat(he()):"parent",": "),t=0;t<arguments.length;t++){var a=arguments[t];"string"===typeof a?e+=" ".concat(a):a.data?e+=" ".concat(JSON.stringify(a.data,null,2)):e+=" ".concat(a)}console.log(e)}var fe={};function me(e,t){pe("sendMessageToChild",e,t),fe[e].contentWindow.postMessage(t,"*")}var ve={};function ge(e){pe("sendMessageToParent",e),window.parent.postMessage(e)}var be=null;var ye=1048576,we=Q.a["windows98.img"],ke=Q.a["v86state.bin"],Se=!1;function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onXHRProgress,a=e.whatToSay,n=++de;return new Promise(function(e,o){var r,i=[oe(ke,t)];Se&&i.push(oe(we)),Promise.all(i).then(function(t){var o,i,c=t[0],s=t[1];i=function(t){switch(t.data){case"child:".concat(n,":ready"):r=["parent:sendAssets",c],Se?r.push(s):r.push(null),me(n,r);break;case"child:".concat(n,":booted"):me(n,r=["parent:speak",a]);break;case"child:".concat(n,":doneSpeaking"):o=n,window.removeEventListener("message",ve[o],!1),delete ve[o],function(e){pe("destroyChild",e),fe[e].remove(),fe[e]=null,delete fe[e]}(n),e()}var o},ve[o=n]=function(e){pe("receiveMessageFromChild",o,e),i(e)},window.addEventListener("message",ve[o],!1),function(e){pe("createChild",e);var t=document.createElement("iframe");t.src="".concat(window.location.href,"?cachebust=").concat(Date.now(),"#childID=").concat(e),t.width=ie?"1000":"1",t.height=ie?"500":"1",document.querySelector("body").appendChild(t),fe[e]=t}(n)})})}function je(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e,t,a=he();function n(){e.stop(),window.removeEventListener("message",be,!1),ge("child:".concat(a,":doneSpeaking"))}t=function(t){switch(t.data[0]){case"parent:sendAssets":var o=t.data[1],r=t.data[2],i=Se?{buffer:r}:{url:we,async:!0,size:300*ye};try{(e=new window.V86Starter({screen_container:ie?document.getElementById("screen_container"):null,bios:{url:K.a},vga_bios:{url:Z.a},hda:i,autostart:!0,memory_size:128*ye,vga_memory_size:8*ye,disable_mouse:!0,disable_keyboard:!0})).add_listener("emulator-ready",Object(l.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.restore_state(o),ge("child:".concat(a,":booted"));case 2:case"end":return t.stop()}},t,this)}))),d="cpu-event-halt",e.add_listener(d,function(){pe('fault detected with "'.concat(d,'" event')),n()})}catch(t){pe("fault detected"),pe(t),n()}break;case"parent:speak":var c=t.data[1],u="";e.add_listener("serial0-output-char",function(e){-1!==(u+=e).indexOf("ready")&&n()}),e.serial0_send(c)}var d},be=function(e){pe("receiveMessageFromParent",e),t(e)},window.addEventListener("message",be,!1),ge("child:".concat(a,":ready"))}Se&&(we="".concat("https://hypertalk-221623.appspot.com","/static/").concat("windows98.img"),ke="".concat("https://hypertalk-221623.appspot.com","/static/").concat("v86state.bin"));var Ee=y()("https://hypertalk-221623.appspot.com",{transports:["polling"]}),Te=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],ce(["How are you gentlemen?","happy birthday","Sure why not","Listen","Lets circle back on that","Who cares","Are you f\u2019realz","Welcome to my world","I have thoughts on that","Uh","Last time for everything","Need you to get real aware","there's no there there","Show me the data","bulbous","Who fuks"])}(),xe=E.Create({chatHistory:{},chatHistoryItem:{marginTop:E.vars.spacing.medium}}),Ce=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={whatToSay:"",blockTextEditing:!0,busyText:"Please wait...",name:se(),voice:le(!0),chatHistory:[]},a.broadcast=a.broadcast.bind(Object(m.a)(Object(m.a)(a))),window.say=a.broadcast,a.utterance=a.utterance.bind(Object(m.a)(Object(m.a)(a))),a.onResetName=a.onResetName.bind(Object(m.a)(Object(m.a)(a))),a.onResetVoice=a.onResetVoice.bind(Object(m.a)(Object(m.a)(a))),a.onChangeWhatToSay=a.onChangeWhatToSay.bind(Object(m.a)(Object(m.a)(a))),a.onMaybeSubmitWhatToSay=a.onMaybeSubmitWhatToSay.bind(Object(m.a)(Object(m.a)(a))),a.onUpdateChatHistory=a.onUpdateChatHistory.bind(Object(m.a)(Object(m.a)(a))),a.createEmulator=a.createEmulator.bind(Object(m.a)(Object(m.a)(a))),a.stopEmulator=a.stopEmulator.bind(Object(m.a)(Object(m.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"onUpdateChatHistory",value:function(e,t){var a=this.state.chatHistory;a=[{name:e,whatToSay:t}].concat(a),this.setState({chatHistory:a})}},{key:"broadcast",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,a,n,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.voice,n=t.name,o=t.whatToSay,Ee.emit("chat message",JSON.stringify({name:n,whatToSay:o,voice:a})),e.next=4,this.utterance(a,o,!0);case 4:this.onUpdateChatHistory(n,o);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"utterance",value:function(){var e=Object(l.a)(s.a.mark(function e(t,a,n){var o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n&&this.setState({whatToSay:"",blockTextEditing:!0,busyText:"Processing speech..."}),"["===t[0]&&"]"===t[t.length-1]||(t=le(!0)),o="[:phoneme on]".concat(t).concat(a,"213p"),e.next=5,this.createEmulator(o);case 5:n&&this.setState({blockTextEditing:!1,busyText:"Type something to say it..."});case 6:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"createEmulator",value:function(){var e=Object(l.a)(s.a.mark(function e(t){var a=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe({whatToSay:t,onXHRProgress:function(e){if(e.lengthComputable){var t=e.loaded/e.total*100;a.setState({blockTextEditing:!0,busyText:"Please wait... ".concat(parseInt(t,10),"% loaded. Make sure ur sound is on. This doesn't really work phones yet (at least not on my phone).")})}},onEmulatorFault:function(){a.setState({blockTextEditing:!1,busyText:"Type something to say it..."})}});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"stopEmulator",value:function(){this.emulator.stop(),delete this.emulator}},{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Ee.on("chat history",function(e){JSON.parse(e).forEach(function(e){var a=e.name,n=e.whatToSay;t.onUpdateChatHistory(a,n)})}),Ee.emit("chat history"),Ee.on("chat message",function(e){var a=JSON.parse(e),n=a.name,o=a.whatToSay,r=a.voice;t.onUpdateChatHistory(n,o),t.utterance(r,o,!1)}),e.next=5,re(1e3);case 5:return this.setState({whatToSay:Te}),e.next=8,this.broadcast();case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onResetName",value:function(){delete window.localStorage.name,this.setState({name:se()})}},{key:"onResetVoice",value:function(){delete window.localStorage.voice,this.setState({voice:le()})}},{key:"onChangeWhatToSay",value:function(e){this.setState({whatToSay:e.target.value})}},{key:"onMaybeSubmitWhatToSay",value:function(e){"Enter"===e.key&&this.broadcast(this.state.whatToSay)}},{key:"render",value:function(){var e=this.state,t=e.blockTextEditing,a=e.busyText,n=e.whatToSay,r=e.name,i=e.voice,c=e.chatHistory;return o.a.createElement(g.a,{title:"hypertalk-".concat("5fd412d",".doc")},o.a.createElement(F,{items:[{children:"name: ".concat(r),onClick:this.onResetName},{children:"voice: ".concat(i),onClick:this.onResetVoice}]}),o.a.createElement(q,{_autoFocus:!0,placeholder:a,value:n,disabled:t,onChange:this.onChangeWhatToSay,onKeyPress:this.onMaybeSubmitWhatToSay}),o.a.createElement("div",{style:xe.chatHistory},c.map(function(e,t){var a=e.name,n=e.whatToSay,r="".concat(a,": ").concat(n);return o.a.createElement(q,{style:xe.chatHistoryItem,key:"".concat(t,"-").concat(r),value:r,disabled:!0})})))}}]),t}(n.Component),Me=E.Create({screen:{whiteSpace:"pre",font:"".concat(E.vars.spacing.medium," monospace"),lineHeight:E.vars.spacing.medium}}),We=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){je()}},{key:"render",value:function(){return o.a.createElement("div",null,ie&&o.a.createElement("div",null,o.a.createElement("div",{id:"screen_container"},o.a.createElement("div",{style:Me.screen}),o.a.createElement("canvas",{style:{display:"none"}}))))}}]),t}(n.Component);ue()?i.a.render(o.a.createElement(We,null),document.getElementById("root")):i.a.render(o.a.createElement(Ce,null),document.getElementById("root"))}},[[46,2,1]]]);
//# sourceMappingURL=main.da2a2279.chunk.js.map