"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[667],{667:function(e,t,n){n.r(t);var r=n(861),a=n(439),o=n(757),s=n.n(o),c=n(791),u=n(689),i=n(87),l=n(184);t.default=function(){var e=(0,c.useState)(""),t=(0,a.Z)(e,2),n=t[0],o=t[1],f=(0,c.useState)([]),h=(0,a.Z)(f,2),v=h[0],d=h[1],p=(0,c.useState)(null),m=(0,a.Z)(p,2),w=m[0],x=m[1];(0,u.TH)();(0,c.useEffect)((function(){var e=localStorage.getItem("searchResults");e&&d(JSON.parse(e))}),[]);var g=function(){var e=(0,r.Z)(s().mark((function e(t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=".concat(n,"&api_key=26362fc59abb5f3a891dc2f9c6943e3e"));case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("Network response was not ok");case 7:return e.next=9,r.json();case 9:a=e.sent,d(a.results),localStorage.setItem("searchResults",JSON.stringify(a.results)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),x(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){var e=function(){localStorage.removeItem("searchResults")};return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Search Movies"}),(0,l.jsxs)("form",{onSubmit:g,children:[(0,l.jsx)("input",{type:"text",value:n,onChange:function(e){return o(e.target.value)}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),w&&(0,l.jsxs)("p",{children:["Error fetching data: ",w]}),(0,l.jsx)("ul",{children:v.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},861:function(e,t,n){function r(e,t,n,r,a,o,s){try{var c=e[o](s),u=c.value}catch(i){return void n(i)}c.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var s=e.apply(t,n);function c(e){r(s,a,o,c,u,"next",e)}function u(e){r(s,a,o,c,u,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=667.fa333e10.chunk.js.map