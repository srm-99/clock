(this["webpackJsonpclock-app"]=this["webpackJsonpclock-app"]||[]).push([[0],{11:function(o,n,e){},12:function(o,n,e){"use strict";e.r(n);var c=e(1),t=e.n(c),r=e(3),a=e.n(r),l=e(4),d=function(o){return{time:o.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}),seconds:o.getSeconds().toString(),date:o.toLocaleTimeString("es-ES",{weekday:"short",month:"short",day:"numeric"}).slice(0,-9)}},s=(e(9),e(0)),i=function(o){var n=o.currentColors,e=Object(c.useState)(d(new Date)),t=Object(l.a)(e,2),r=t[0],a=t[1];return setInterval((function(){a(d(new Date))}),1e3),Object(s.jsx)("div",{className:"clock-container",children:Object(s.jsx)("div",{className:"big-ellipse",style:{border:"1px solid ".concat(n.lightFontColor)},children:Object(s.jsx)("div",{className:"dash-ellipse",style:{border:"4px dashed ".concat(n.secondBackground)},children:Object(s.jsxs)("div",{className:"small-ellipse",style:{border:"2px solid ".concat(n.lightFontColor)},children:[Object(s.jsx)("div",{className:"time",style:{color:"".concat(n.lightFontColor)},children:r.time}),Object(s.jsx)("div",{className:"seconds",style:{color:"".concat(n.lightFontColor)},children:r.seconds}),Object(s.jsx)("div",{className:"location",style:{backgroundColor:"".concat(n.secondBackground),color:"".concat(n.darkFontColor)},children:"LA UNI\xd3N VALLE"}),Object(s.jsx)("div",{className:"date",style:{color:"".concat(n.lightFontColor)},children:r.date})]})})})})};e(11);var g=function(){var o=[{mainBackground:"#B71C1C",secondBackground:"#E57373",darkFontColor:"#212121",lightFontColor:"#FAFAFA"},{mainBackground:"#0D47A1",secondBackground:"#64B5F6",darkFontColor:"#212121",lightFontColor:"#FAFAFA"},{mainBackground:"#1B5E20",secondBackground:"#81C784",darkFontColor:"#212121",lightFontColor:"#FAFAFA"},{mainBackground:"#4A148C",secondBackground:"#BA68C8",darkFontColor:"#212121",lightFontColor:"#FAFAFA"},{mainBackground:"#1A237E",secondBackground:"#7986CB",darkFontColor:"#212121",lightFontColor:"#FAFAFA"},{mainBackground:"#E65100",secondBackground:"#FFB74D",darkFontColor:"#212121",lightFontColor:"#FAFAFA"},{mainBackground:"#004D40",secondBackground:"#4DB6AC",darkFontColor:"#212121",lightFontColor:"#FAFAFA"}][(new Date).getDay()-1];return console.log(o),Object(s.jsxs)("div",{className:"app",style:{backgroundColor:o.mainBackground},children:[Object(s.jsx)("header",{style:{backgroundColor:o.secondBackground}}),Object(s.jsx)(i,{currentColors:o}),Object(s.jsx)("footer",{style:{backgroundColor:o.secondBackground,color:o.darkFontColor},children:Object(s.jsx)("p",{children:"Powered by: SRM-99"})})]})};a.a.render(Object(s.jsx)(t.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))},9:function(o,n,e){}},[[12,1,2]]]);
//# sourceMappingURL=main.248007d8.chunk.js.map