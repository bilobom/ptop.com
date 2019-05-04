(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5434:function(e,t,a){e.exports=a(5551)},5439:function(e,t,a){},5440:function(e,t,a){},5470:function(e,t){},5551:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(44),l=a.n(c),i=(a(5439),a(15)),s=a(16),m=a(18),u=a(17),d=a(19),p=(a(5440),a(107)),f=a.n(p),E=a(108),h=a.n(E),b="http://localhost:4000/";b="https://ptopc.herokuapp.com";var y=function(e){return{type:"UPDATE_ID",payload:e}},g=function(e){return{type:"UPDATE_REMOTE_ID",payload:e}},O=function(e){return{type:"UPDATE_DATA",payload:e}},v=a(28),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:null,data:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.initIO()}},{key:"componentDidMount",value:function(){console.log("qrViewer did mount")}},{key:"componentWillReceiveProps",value:function(e){var t=e.socket,a=t.id,n=t.data,r=t.remoteId;a&&this.setState({id:a}),void 0!==n&&this.setState({data:n}),r&&this.props.history.push("transfer")}},{key:"render",value:function(){var e=this.state,t=e.id,a=e.data;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header",size:200},t&&o.a.createElement(f.a,{includeMargin:!0,renderAs:"svg",value:t}),o.a.createElement("p",null,"Scan Qr Code to coppy"),a&&o.a.createElement("p",null,a)))}}]),t}(r.Component),w={initIO:function(){return function(e){(n=h()(b,{transports:["websocket","polling","flashsocket"]})).on("connect",function(){e(y(n.id))}),n.on("disconnect",function(){e(y(null))}),n.on("error",function(e){console.log("error",e)}),n.on("data",function(t){e(O(t))}),n.on("wantToConnect",function(t){e(g(t))})}}},D=Object(v.b)(function(e){return{socket:e.socket}},w)(j),x=a(1),k=a(13),A=a(110),T=Object(k.withStyles)(function(){return{holder:{alignItems:"center",justifyContent:"center",width:50,height:50,borderRadius:5,borderBottom:"5px solid green",borderLeft:"1px solid gray",borderRight:"1px solid gray",borderTop:"1px solid gray"}}})(function(e){var t=e.format,a=e.classes;return o.a.createElement(x.a,{container:!0,className:a.holder},o.a.createElement(x.a,{item:!0}," ",o.a.createElement(x.c,null,t)))}),N=a(111),I={name:"file.png",format:"PNG",completed:!1,progress:20},_=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(x.a,{container:!0,className:e.holder,spacing:8},o.a.createElement(x.a,{item:!0,xs:2},o.a.createElement(T,I)),o.a.createElement(x.a,{item:!0,xs:8},o.a.createElement(x.a,{container:!0,className:e.infoHolder},o.a.createElement(x.a,{item:!0,xs:12},o.a.createElement(x.a,{container:!0,className:e.fileNameRow},o.a.createElement(x.a,{item:!0},o.a.createElement(x.c,{style:{fontSize:18,fontWeight:"bold"}},I.name)),o.a.createElement(x.a,{item:!0},o.a.createElement(x.a,{container:!0,direction:"row",alignItems:"center"},o.a.createElement(x.a,{item:!0},o.a.createElement(x.c,{style:{fontWeight:"bold"}},I.progress+" %")),o.a.createElement(x.a,{item:!0},o.a.createElement(N.a,{style:{color:"#FFD6D6",backgroundColor:"red",borderRadius:50}})))))),o.a.createElement(x.a,{item:!0,xs:12},o.a.createElement(x.a,{container:!0,className:e.progressHolder},o.a.createElement(x.a,{item:!0,xs:12},o.a.createElement(x.c,{style:{fontSize:10,fontWeight:"300"}},I.completed?"COMPLETED":"TRANSFERING")),o.a.createElement(x.a,{item:!0,xs:12},o.a.createElement(x.b,{value:20})))))))}}]),t}(r.Component),S=Object(k.withStyles)(function(e){return{holder:{flexDirection:"row",alignItems:"center",alignSelf:"stretch",justifyContent:"space-around"},infoHolder:{alignItems:"center"},fileNameRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}})(_),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleDrop=function(e,t){console.log(e,t)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(x.a,{container:!0,className:e.container},o.a.createElement(x.a,{container:!0},o.a.createElement(x.a,{item:!0},o.a.createElement(x.c,null,"File Transfer "),o.a.createElement("hr",null))),o.a.createElement(x.a,{container:!0,className:e.TransferHolder,spacing:24},o.a.createElement(x.a,{item:!0,xs:!0,className:e.dropArea},o.a.createElement(x.a,{container:!0},o.a.createElement(x.a,{item:!0},o.a.createElement(A.a,{onDrop:this.handleDrop},"Drop some files here!")),o.a.createElement(x.a,{item:!0}))),o.a.createElement(x.a,{item:!0,xs:!0},o.a.createElement(x.a,{container:!0,className:e.fileArea,spacing:24},o.a.createElement(x.a,{item:!0,xs:12},o.a.createElement(S,null)),o.a.createElement(x.a,{item:!0,xs:12},o.a.createElement(S,null))))))}}]),t}(r.Component),R=Object(v.b)(function(e){return{}},{})(Object(k.withStyles)(function(e){return{container:{backgroundColor:"white",padding:150},TransferHolder:{flexDirection:"row",alignItems:"center"},dropArea:{border:"1px solid gray",borderRadius:5,borderStyle:"dotted"},fileArea:{flexDirection:"row"}}})(C)),P=a(23),M=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(P.c,null,o.a.createElement(P.a,{exact:!0,path:"/",component:D}),o.a.createElement(P.a,{path:"/transfer",component:R})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(20),W=a(113),H=a(46),F=Object(U.c)({socket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ID":return Object(H.a)({},e,{id:t.payload});case"UPDATE_REMOTE_ID":return Object(H.a)({},e,{remoteId:t.payload});case"UPDATE_DATA":return Object(H.a)({},e,{data:t.payload});default:return e}}}),z=[W.a],B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.d,L=Object(U.e)(F,B(U.a.apply(void 0,z))),G=a(64);l.a.render(o.a.createElement(v.a,{store:L},o.a.createElement(G.a,null,o.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5434,1,2]]]);
//# sourceMappingURL=main.9e3a223e.chunk.js.map