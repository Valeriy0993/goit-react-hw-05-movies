"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[232],{713:function(e,n,t){t.d(n,{au:function(){return s},fh:function(){return u},q5:function(){return o},z1:function(){return h}});var r=t(294),a="26362fc59abb5f3a891dc2f9c6943e3e",c=r.Z.create({baseURL:"https://api.themoviedb.org/3"}),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFjNzI1MTA4Mjc2ZDkyM2RlMjQzOTE4NzUwNjJjNSIsInN1YiI6IjY1YjUwMjhhNGYzM2FkMDE3YTBiYTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVikyztACIvDZrPSWL56RBOBtNnjH3jDZKwNSqkZN54"}},u=function(e){return c.get("/movie/".concat(e,"?language=en-US&api_key=").concat(a),i)},s=function(e){return c.get("/movie/".concat(e,"/credits?language=en-US&api_key=").concat(a),i)},o=function(e){return c.get("/movie/".concat(e,"/reviews?language=en-US&api_key=").concat(a),i)},h=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(n,"&api_key=").concat(a),i)}},126:function(e,n,t){var r=t(689),a=t(87),c=t(184);n.Z=function(e){var n=e.items,t=(0,r.TH)(),i=n.map((function(e){var n=e.id,r=e.title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:t},children:r})},n)}));return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:i})})}},232:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(861),a=t(439),c=t(757),i=t.n(c),u=t(791),s=t(87),o=t(942),h=t(413),l=t(184),f=function(e){var n=e.onSubmit,t=(0,u.useState)({search:""}),r=(0,a.Z)(t,2),c=r[0],i=r[1],s=(0,u.useRef)(null);(0,u.useEffect)((function(){s.current.focus()}),[]);var f=function(){i({search:""})};return(0,l.jsx)("form",{onSubmit:function(e){e.preventDefault(),n((0,h.Z)({},c)),f()},children:(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{ref:s,value:c.search,onChange:function(e){var n=e.target,t=n.name,r=n.value;i((0,h.Z)((0,h.Z)({},c),{},(0,o.Z)({},t,r)))},required:!0,type:"text",name:"search",placeholder:"Enter search phrase"}),(0,l.jsx)("button",{type:"submit",children:(0,l.jsx)("span",{children:"Search"})})]})})})},d=t(126),p=t(713),v=function(){var e=(0,u.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],o=(0,u.useState)(!1),h=(0,a.Z)(o,2),v=h[0],j=h[1],g=(0,u.useState)(null),m=(0,a.Z)(g,2),x=m[0],Z=m[1],k=(0,s.lr)(),S=(0,a.Z)(k,2),b=S[0],y=S[1],I=b.get("search"),N=b.get("page");(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,p.z1)(I,N);case 4:n=e.sent,r=n.data,0===t.length&&c(r.results||[]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Z(e.t0.message);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();!I||"1"!==N&&N||e()}),[I,N,t]);var w=Boolean(t.length);return(0,l.jsxs)("div",{children:[(0,l.jsx)(f,{onSubmit:function(e){var n=e.search;y({search:n,page:1}),c([])}}),x&&(0,l.jsx)("p",{children:x}),v&&(0,l.jsx)("p",{children:"Loading..."}),w&&(0,l.jsx)(d.Z,{items:t})]})}}}]);
//# sourceMappingURL=232.6dbb4abd.chunk.js.map