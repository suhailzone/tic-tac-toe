(this["webpackJsonpfour-tictactoe"]=this["webpackJsonpfour-tictactoe"]||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},22:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),l=a.n(r),o=(a(19),a(10)),m=a(12);var s=function(e){switch(e.name){case"circle":return c.a.createElement(m.a,{className:"icon-circle"});case"cross":return c.a.createElement(m.b,{className:"icon-cross"});default:return c.a.createElement("div",null)}},i=a(11),u=(a(20),a(29)),f=a(30),E=a(31),p=a(32),d=a(33),y=a(34),b=(a(21),a(8)),h=(a(22),new Array(9).fill("empty")),w=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),m=Object(o.a)(l,2),w=m[0],x=m[1],g=Object(n.useState)(null),k=Object(o.a)(g,2),v=k[0],N=k[1],j=function(){r(!1),x(""),h.fill("empty",0,9)},O=function(){return""===w&&(h[0]===h[1]&&h[0]===h[2]&&"empty"!==h[0]?(x("".concat(h[0]," wins")),!0):"empty"!==h[3]&&h[3]===h[4]&&h[3]===h[5]?(x("".concat(h[3]," wins")),!0):"empty"!==h[6]&&h[6]===h[7]&&h[6]===h[8]?(x("".concat(h[6]," wins")),!0):"empty"!==h[0]&&h[0]===h[3]&&h[0]===h[6]?(x("".concat(h[0]," wins")),!0):"empty"!==h[1]&&h[1]===h[4]&&h[1]===h[7]?(x("".concat(h[1]," wins")),!0):"empty"!==h[2]&&h[2]===h[5]&&h[2]===h[8]?(x("".concat(h[2]," wins")),!0):"empty"!==h[0]&&h[0]===h[4]&&h[0]===h[8]?(x("".concat(h[0]," wins")),!0):"empty"!==h[2]&&h[2]===h[4]&&h[2]===h[6]?(x("".concat(h[2]," wins")),!0):function(){for(var e=0;e<9;e++)if("empty"===h[e])return!1;return!0}()?(x("Match Tied"),!0):void 0)},C=function e(){var t=Math.floor(9*Math.random());if("empty"===h[t]){if(w)return Object(i.b)(w,{type:"success"});h[t]=a?"circle":"cross",r(a),T(),O()}else e()},T=function(){return c.a.createElement("div",{className:"grid"},h.map((function(e,t){return c.a.createElement(u.a,{key:t,color:"alert",onClick:function(){return function(e){if(w)return Object(i.b)(w,{type:"info"});"empty"===h[e]&&(h[e]=a?"cross":"circle",r(!a),O(),O()||!1!==v||setTimeout((function(){C()}),1e3))}(t)}},c.a.createElement(f.a,{className:"box"},c.a.createElement(s,{name:e})))})))};return c.a.createElement(E.a,{className:"p-5"},c.a.createElement("h1",{className:"text-center text-white"},"Tic Tac Toe"),c.a.createElement(i.a,{position:"bottom-center"}),null===v?c.a.createElement("div",null,c.a.createElement(p.a,null,c.a.createElement(d.a,{md:6,className:"offset-md-3 mt-5"},c.a.createElement(y.a,{block:!0,size:"lg",color:"info",onClick:function(){return N(!1)}},c.a.createElement(b.c,{style:{margin:"0 10px"}}),"Single Player"))),c.a.createElement(p.a,null,c.a.createElement(d.a,{md:6,className:"offset-md-3 mt-5"},c.a.createElement(y.a,{block:!0,color:"primary",size:"lg",onClick:function(){return N(!0)}},c.a.createElement(b.d,{style:{margin:"0 10px"}}),"Dual Player")))):c.a.createElement(p.a,null,c.a.createElement(d.a,{md:6,className:"offset-md-3"},w?c.a.createElement("div",{className:"mb-2 mt-2"},c.a.createElement("h2",{className:"text-success text-center text-uppercase"},w),c.a.createElement(y.a,{block:!0,onClick:j,color:"info"},c.a.createElement(b.b,{style:{margin:"0 10px"}}),"Reload Game")):c.a.createElement("div",null,a?c.a.createElement("h2",{className:"mb-5 text-center text-primary"},"Cross Turns"):c.a.createElement("h2",{className:"mb-5 text-center text-warning"},"Circle Turns")),T(),c.a.createElement(p.a,null,c.a.createElement(d.a,{md:6,className:"offset-md-3 mt-3"},c.a.createElement(y.a,{block:!0,onClick:function(){N(null),j()},color:"danger"},c.a.createElement(b.a,{style:{margin:"0 10px"}}),"Back to Home"))))),c.a.createElement("p",{className:"mt-2 text-white text-center"},"github.com/suhailzone"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.70228dcc.chunk.js.map