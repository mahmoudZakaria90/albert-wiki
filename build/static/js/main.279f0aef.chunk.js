(this["webpackJsonpwiki-albert"]=this["webpackJsonpwiki-albert"]||[]).push([[0],{11:function(e,a,n){},13:function(e,a,n){},14:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(4),o=n.n(i),c=(n(11),n(1)),s=n.n(c),l=n(5),u=n(2),m=(n(13),[{name:"English",value:"en"},{name:"Fran\xe7ais",value:"fr"},{name:"Deutsch",value:"de"},{name:"\u0130taliano",value:"it"},{name:"Espa\xf1ol",value:"es"},{name:"Plattd\xfc\xfctsch",value:"nds"},{name:"Nederlands",value:"nl"},{name:"T\xfcrk\xe7e",value:"tr"},{name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",value:"ru"},{name:"Hindi",value:"hif"}]);var p=function(){var e=Object(t.useState)(navigator.language.split("-")[0]),a=Object(u.a)(e,2),n=a[0],i=a[1],o=Object(t.useState)("Loading wiki..."),c=Object(u.a)(o,2),p=c[0],v=c[1],d="https://".concat(n,".wikipedia.org/w/api.php?action=parse&format=json&page=Albert_Einstein&prop=text%7Cimages&formatversion=1&origin=*");return Object(t.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,v(n.parse.text["*"]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,"Welcome to Wikipedia viewer"),r.a.createElement("h4",null,"Choose your preferred language")),r.a.createElement("div",{className:"App-btns"},m.length&&m.map((function(e,a){var t=e.name,o=e.value;return r.a.createElement("button",{key:a,className:"wiki-btn ".concat(n===o?"selected":""),onClick:function(){return i(o)}},t)}))),r.a.createElement("div",{className:"wiki-view",dangerouslySetInnerHTML:{__html:p}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.279f0aef.chunk.js.map