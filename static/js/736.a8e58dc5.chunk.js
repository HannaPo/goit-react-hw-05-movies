"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(n,t,r){r.r(t),r.d(t,{Cast:function(){return g},default:function(){return w}});var e,a,c,u,o=r(439),i=r(791),s=r(689),p=r(234),f=r(766),d=r(686),h=d.Z.img(e||(e=(0,f.Z)(["\n  max-width: 150px;\n  height: auto;\n  object-fit: cover;\n"]))),l=d.Z.ul(a||(a=(0,f.Z)(["\n  display: grid;\n  max-width: calc(150vw - 38px);\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=d.Z.li(c||(c=(0,f.Z)(["\n  margin-bottom: 10px;\n  background-color: #f2f2f2;\n  padding: 8px;\n  border-radius: 5px;\n\n  font-weight: 500;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 10px;\n  overflow: hidden;\n\n  &:hover {\n    background-color: #13573a5c;\n  }\n"]))),v=d.Z.p(u||(u=(0,f.Z)(["\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 14px;\n  line-height: 1.25;\n"]))),x=r(184),g=function(){var n=(0,s.UO)().movieId,t=(0,i.useState)([]),r=(0,o.Z)(t,2),e=r[0],a=r[1],c=(0,i.useState)(""),u=(0,o.Z)(c,2),f=u[0],d=u[1];return(0,i.useEffect)((function(){(0,p.kK)(n).then((function(n){a(n)})).catch((function(n){d(n.message)}))}),[n]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l,{children:e.map((function(n){var t=n.id,r=n.profile_path,e=n.name,a=n.character;return(0,x.jsxs)(m,{children:[(0,x.jsx)(h,{src:"".concat(r?"https://image.tmdb.org/t/p/w200/".concat(r):"https://via.placeholder.com/150x225?text=".concat(e)),alt:e}),(0,x.jsxs)(v,{children:["Actor: ",e]}),(0,x.jsxs)(v,{children:["Character: ",a]})]},t)}))}),f&&(0,x.jsx)("p",{children:"There is no information about movie cast "})]})},w=g},234:function(n,t,r){r.d(t,{PY:function(){return i},kK:function(){return f},l2:function(){return p},sv:function(){return d},z1:function(){return s}});var e=r(861),a=r(687),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=new URLSearchParams({api_key:"a20661da71bad761bc63fca9b3028f72",method:"GET",language:"en-US",include_adult:!1}),i=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?".concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(o,"&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?").concat(o));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?").concat(o));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?").concat(o));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.a8e58dc5.chunk.js.map