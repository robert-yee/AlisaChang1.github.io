(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(145),c=a(151),u=a(149);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement(l.a,{to:"/page-2/"},r.a.createElement("h3",null,"More Information ")),r.a.createElement("h3",null,"Contact Us"),r.a.createElement("p",null,"My name is Oliver. My team and I are working on a secret project that I can't tell you about!!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(l.a,{to:"/page-2/"},r.a.createElement("h6",null,"Learn More")),r.a.createElement(l.a,null,r.a.createElement("h6",null,"Contact Us")),r.a.createElement(l.a,null,r.a.createElement("h6",null,"News")),r.a.createElement(l.a,null,r.a.createElement("h6",null,"Jobs")))}},145:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),u=a(32),i=a.n(u);a.d(t,"a",function(){return i.a});a(146);var m=r.a.createContext({}),o=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},146:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:""}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),u=a(54),i=a(2),m=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},149:function(e,t,a){"use strict";var n=a(150),r=a(0),l=a.n(r),c=a(4),u=a.n(c),i=a(153),m=a.n(i);function o(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,u=e.title,i=n.data.site,o=t||i.siteMetadata.description;return l.a.createElement(m.a,{htmlAttributes:{lang:a},title:u,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:u},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:o}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}o.defaultProps={lang:"en",meta:[],keywords:[]},o.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=o},150:function(e){e.exports={data:{site:{siteMetadata:{title:"",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},151:function(e,t,a){"use strict";var n=a(147),r=a(0),l=a.n(r),c=a(4),u=a.n(c),i=a(145),m=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"transparent",marginBottom:"1.45rem"}},l.a.createElement("h1",null,"Oliver's Website"),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(i.a,{to:"/",style:{color:"blue",textDecoration:"none"}},t))))};m.propTypes={siteTitle:u.a.string},m.defaultProps={siteTitle:""};var o=m,s=(a(152),function(e){var t=e.children;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});s.propTypes={children:u.a.node.isRequired};t.a=s}}]);
//# sourceMappingURL=component---src-pages-index-js-c9998ecdf1e23f218504.js.map