"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{680:function(r,t,e){e.r(t);var n=e(861),c=e(439),a=e(757),u=e.n(a),o=e(791),i=e(87),s=e(394),p=e(184);t.default=function(){var r=(0,o.useState)([]),t=(0,c.Z)(r,2),e=t[0],a=t[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,s.Df)();case 2:t=r.sent,a(t);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Trending Movies"}),(0,p.jsx)("ul",{children:e.map((function(r){return(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"/movies/".concat(r.id),children:r.title})},r.id)}))})]})}},394:function(r,t,e){e.d(t,{Df:function(){return i},TP:function(){return p},tx:function(){return f},zv:function(){return s}});var n=e(861),c=e(757),a=e.n(c),u=e(340),o="26362fc59abb5f3a891dc2f9c6943e3e",i=function(){var r=(0,n.Z)(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o));case 3:return e=r.sent,r.abrupt("return",e.data.cast);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie credits:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.5954f4ff.chunk.js.map