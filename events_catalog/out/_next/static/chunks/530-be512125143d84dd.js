(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[530],{56138:function(e,n,r){var t={"./locale":9738,"./locale.js":9738};function a(e){var n=s(e);return r(n)}function s(e){if(!r.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=s,e.exports=a,a.id=56138},23357:function(e,n,r){"use strict";r.d(n,{Z:function(){return x}});var t=r(24246),a=r(27378),s=r(65859),i=r(23892),c=r.n(i)()().publicRuntimeConfig,o=(void 0===c?{}:c).basePath,l=void 0===o?"":o,d=function(e){return e.length>"50"?"".concat(e.substring(0,"50"),"..."):e},m=function(e,n,r){var t="/".concat(r?"domains/".concat(r,"/"):"").concat(n,"/").concat(e);return l?"".concat(l).concat(t):t},u=function(e,n,r,t){return"flowchart LR\n\n".concat(n.map((function(n){return"l-".concat(n.id,"[").concat(n.name,"]:::producer--\x3e").concat(e.id,"[").concat(e.name,"]:::event\n")})).join(""),"\nclassDef event stroke:").concat(t,",stroke-width: 4px;\n\nclassDef producer stroke:#75d7b6,stroke-width: 2px;\n\nclassDef consumer stroke:#818cf8,stroke-width: 2px;\n\n").concat(r.map((function(n){return"".concat(e.id,"[").concat(e.name,"]:::event--\x3er-").concat(n.id,"[").concat(n.name,"]:::consumer\n")})).join(""),"\n").concat(n.map((function(e){return"click l-".concat(e.id,' href "').concat(e.link,'" "Go to ').concat(e.name,'" _self\n')})).join(""),"\n").concat(r.map((function(e){return"click r-".concat(e.id,' href "').concat(e.link,'" "Go to ').concat(e.name,'" _self\n')})).join(""),"\nclick ").concat(e.id,' href "').concat(e.link,'" "Go to ').concat(e.name,'" _self\n\n')};s.Z.initialize({startOnLoad:!0,theme:"forest",securityLevel:"loose",flowchart:{useMaxWidth:!1},themeCSS:"\n  .node {\n      filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .2))\n  }\n  .mermaid svg {\n      width: 10000px\n  }\n  .node rect {\n      fill: white\n  }\n    ",fontFamily:"Fira Code"});var x=function(e){var n=e.data,r=e.source,i=void 0===r?"event":r,c=e.rootNodeColor,o=e.charts;if((0,a.useEffect)((function(){s.Z.contentLoaded()}),[]),o)return(0,t.jsx)(t.Fragment,{children:o.map((function(e,n){return(0,t.jsx)("div",{className:"mermaid",children:e},"chart-".concat(n))}))});var l="event"===i?function(e){var n=e.name,r=e.producerNames,t=e.consumerNames,a=e.producers,s=void 0===a?[]:a,i=e.consumers,c=void 0===i?[]:i,o=e.domain,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#2563eb",x=r.map(d).map((function(e){var n;return{id:e.replace(/ /g,"_"),name:e,link:m(e,"services",null===(n=s.find((function(n){return n.name===e})))||void 0===n?void 0:n.domain)}})),f=t.map(d).map((function(e){var n;return{id:e.replace(/ /g,"_"),name:e,link:m(e,"services",null===(n=c.find((function(n){return n.name===e})))||void 0===n?void 0:n.domain)}})),h={id:d(n.replace(/ /g,"_")),name:n,link:m(n,"events",o)};return u(h,x,f,l)}(n,c):function(e){var n=e.publishes,r=e.subscribes,t=e.name,a=e.domain,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#2563eb",i=r.map((function(e){return{event:e,truncatedName:d(e.name)}})).map((function(e){var n=e.event,r=e.truncatedName;return{id:r.replace(/ /g,"_"),name:r,link:m(n.name,"events",n.domain)}})),c=n.map((function(e){return{event:e,truncatedName:d(e.name)}})).map((function(e){var n=e.event,r=e.truncatedName;return{id:r.replace(/ /g,"_"),name:r,link:m(n.name,"events",n.domain)}})),o={id:d(t.replace(/ /g,"_")),name:t,link:m(t,"services",a)};return u(o,i,c,s)}(n,c);return(0,t.jsx)("div",{className:"mermaid",children:l})}},89736:function(e,n,r){"use strict";var t=r(24246),a=(r(27378),r(79961)),s=["purple","pink","green","yellow","blue","indigo"];n.Z=function(e){var n=e.tags;return(0,t.jsx)("div",{className:" py-6 space-y-8",children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("h2",{className:"text-sm font-medium text-gray-500",children:[(0,t.jsx)(a.Z,{className:"h-5 w-5 text-gray-400 inline-block mr-2","aria-hidden":"true"}),"Tags"]}),(0,t.jsx)("div",{className:"mt-3 space-y-2",children:n.map((function(e,n){var r=e.label,a=e.url,i=s[n%s.length];return a?(0,t.jsx)("a",{href:a,className:"inline-block underline",target:"_blank",rel:"noreferrer",children:(0,t.jsx)("span",{className:"underline inline-block mr-2 items-center px-2.5 py-0.5 rounded-full text-xs font-medium -top-0.5 relative bg-".concat(i,"-100 text-").concat(i,"-800"),children:r})}):(0,t.jsx)("span",{className:"inline-block mr-2 items-center px-2.5 py-0.5 rounded-full text-xs font-medium -top-0.5 relative bg-".concat(i,"-100 text-").concat(i,"-800"),children:r})}))})]})})}},9008:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return G},default:function(){return L}});var t=r(85034),a=r(70169),s=r(24246),i=r(88038),c=r.n(i),o=r(17532),l=r(52835),d=r(65218),m=r.n(d),u=(r(58684),m()(Promise.all([r.e(270),r.e(154),r.e(869),r.e(830),r.e(664),r.e(553)]).then(r.bind(r,61463)),{loadableGenerated:{webpack:function(){return[null]}},ssr:!1}));function x(e){var n=e.spec,r=e.showTitle,t=void 0===r||r,a=e.url,i=t?"":"swagger-hide-title";return(0,s.jsxs)("div",{className:"my-4 border border-gray-300 border-dashed px-5 eventcatalog-swagger ".concat(i),children:[!t&&(0,s.jsx)("span",{className:"text-2xl block mt-10 font-bold -mb-8",children:"OpenAPI Specification"}),(0,s.jsx)(u,{spec:n,tryItOutEnabled:!1,url:a})]})}r(82884);var f=m()(Promise.all([r.e(730),r.e(154),r.e(830),r.e(509),r.e(623)]).then(r.bind(r,45509)),{loadableGenerated:{webpack:function(){return[45509]}},ssr:!1}),h={show:{errors:!1}};function v(e){var n=e.spec;return(0,s.jsx)("div",{className:"my-4 border border-gray-300 border-dashed px-5 ",children:(0,s.jsx)(f,{schema:n,config:h})})}var p=r(15651),g=r(23357),j=(r(27378),r(79894)),b=r.n(j),y=r(21135),N=r(96833),k=r(41978),w=r(42789),Z=r(89736),_=r(2175),A=r(49138),C=function(e){return e.domain?"/domains/".concat(e.domain,"/events/").concat(e.name):"/events/".concat(e.name)};var P=function(e){var n=e.service,r=n.owners,t=n.subscribes,a=n.publishes,i=n.repository,c=n.tags,o=void 0===c?[]:c,l=n.externalLinks,d=n.domain,m=i.language,u=i.url,x=[];m&&(x=Array.isArray(m)?m:[m]);var f="";return u&&(f=u.replace(/(^\w+:|^)\/\//,"")),(0,s.jsxs)("aside",{className:"hidden xl:block xl:pl-8 ",children:[(0,s.jsx)("h2",{className:"sr-only",children:"Details"}),a.length>0&&(0,s.jsx)(A.Z,{title:"Publishes Events (".concat(a.length,")"),titleIcon:{icon:y.Z,className:"text-indigo-400"},items:a.map((function(e){return{label:e.name,href:C(e),bgColor:"indigo"}}))}),t.length>0&&(0,s.jsx)(A.Z,{title:"Subscribes to Events (".concat(t.length,")"),titleIcon:{icon:y.Z,className:"text-green-400"},items:t.map((function(e){return{label:e.name,href:C(e),bgColor:"green"}}))}),d&&(0,s.jsx)("div",{className:"border-t border-gray-200 py-6 space-y-8",children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{className:"text-sm font-medium text-gray-500",children:[(0,s.jsx)(N.Z,{className:"h-5 w-5 text-yellow-400 inline-block mr-2","aria-hidden":"true"}),"Domain"]}),(0,s.jsx)("ul",{className:"mt-2 leading-8",children:(0,s.jsx)("li",{className:"inline",children:(0,s.jsx)(b(),{href:"/domains/".concat(d),children:(0,s.jsxs)("a",{href:"#",className:"relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5",children:[(0,s.jsx)("div",{className:"absolute flex-shrink-0 flex items-center justify-center",children:(0,s.jsx)("span",{className:"h-1.5 w-1.5 rounded-full bg-yellow-500 animate animate-pulse","aria-hidden":"true"})}),(0,s.jsx)("div",{className:"ml-3.5 text-sm font-medium text-gray-900",children:d})]})})},d)})]})}),r.length>0&&(0,s.jsx)(_.Z,{owners:r}),(null===i||void 0===i?void 0:i.url)&&(0,s.jsx)("div",{className:"border-t border-gray-200 py-6 space-y-8",children:(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsx)("h2",{className:"text-sm font-medium text-gray-500",children:"Repository"}),(0,s.jsx)("ul",{className:" leading-8 space-y-2",children:(0,s.jsx)("li",{className:"flex justify-start",children:(0,s.jsx)("a",{href:null===i||void 0===i?void 0:i.url,target:"_blank",className:"flex items-center space-x-3 text-blue-600 underline text-sm",rel:"noreferrer",children:f})})})]})}),x.length>0&&(0,s.jsx)("div",{className:"border-t border-gray-200 py-6 space-y-8",children:(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsx)("h2",{className:"text-sm font-medium text-gray-500",children:"Language"}),x.map((function(e){return(0,s.jsxs)("div",{className:"relative flex items-center mt-2",children:[(0,s.jsx)("div",{className:"absolute flex-shrink-0 flex items-center justify-center",children:(0,s.jsx)("span",{className:"h-2 w-2 rounded-full","aria-hidden":"true",style:{background:(0,k.Z)(e)}})}),(0,s.jsx)("div",{className:"ml-3.5 text-sm font-medium text-gray-900",children:e})]},e)}))]})}),(0,s.jsx)(b(),{href:"/visualiser?type=service&name=".concat(n.name),children:(0,s.jsx)("a",{className:"hidden w-full md:inline-flex h-10 justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200",children:(0,s.jsx)("span",{children:"View in Visualiser"})})}),l.length>0&&(0,s.jsx)(w.Z,{externalLinks:l}),o.length>0&&(0,s.jsx)(Z.Z,{tags:o})]})},S=r(52217),D=r(84061),E=r(90476),I=r(6010);function O(e){var n=e.title,r=e.service,t=e.charts;return(0,s.jsxs)("div",{className:"mx-auto w-full py-10",children:[n&&(0,s.jsx)("h2",{className:"text-lg font-medium text-gray-900 underline",children:n}),(0,s.jsx)(g.Z,{source:"service",data:r,rootNodeColor:(0,k.Z)(r.name),charts:t})]})}var G=!0;function L(e){var n=e.service,r=e.markdown,i=e.notFound,d=e.breadCrumbs,m=(0,E.ZR)().title,u=(0,E.wG)(),f=u.getEditUrl,h=u.hasEditUrl,g=function(){if(!h)return"";var e=n.domain?"/domains/".concat(n.domain,"/services/").concat(n.name,"/index.md"):"/services/".concat(n.name,"/index.md");return f(e)};if(i)return(0,s.jsx)(D.Z,{type:"service",name:n.name,editUrl:g()});var j=n.name,b=n.summary,y=n.draft,N=r.lastModifiedDate,w=function(e){return{Admonition:p.Z,AsyncAPI:function(){return e.asyncAPISpec?(0,s.jsx)(v,{spec:e.asyncAPISpec}):null},OpenAPI:function(n){var r=n.url;return e.openAPISpec?(0,s.jsx)(x,{spec:e.openAPISpec,url:r}):null},Mermaid:function(n){var r=n.title,t=n.charts;return(0,s.jsx)(O,{service:e,title:r,charts:t})},NodeGraph:function(n){var r=n.title,t=n.maxHeight,a=n.maxZoom,i=n.fitView,c=n.zoomOnScroll,o=n.isAnimated,l=n.isDraggable;return(0,s.jsxs)("div",{className:"mx-auto w-full",children:[r&&(0,s.jsx)("h2",{className:"text-lg font-medium text-gray-900 underline",children:r}),(0,s.jsx)(I.Z,{source:"service",data:e,rootNodeColor:(0,k.Z)(e.name),maxHeight:t,maxZoom:a,fitView:i,zoomOnScroll:c,isAnimated:o,isDraggable:l})]})}}}(n);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c(),{children:(0,s.jsxs)("title",{children:[m," - ",j]})}),(0,s.jsx)(l.Z,{title:j,editUrl:g(),subtitle:b,draft:y,lastModifiedDate:N,breadCrumbs:(0,s.jsx)(S.Z,{pages:d,homePath:"/services"}),sidebar:(0,s.jsx)(P,{service:n}),children:(0,s.jsx)(o.R,(0,a.Z)((0,t.Z)({},r.source),{components:w}))})]})}}}]);