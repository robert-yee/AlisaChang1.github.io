(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(145),o=a(162),s=a.n(o),c=a(148);e.default=function(){return r.a.createElement(s.a,null,r.a.createElement(c.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("h1",null,"Oliver's Website"),r.a.createElement(i.a,{to:"/page-2/"},"Go to page 2"))}},145:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(32),c=a.n(s);a.d(e,"a",function(){return c.a});a(146);var u=r.a.createContext({}),d=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(t,e,a){var n;t.exports=(n=a(147))&&n.default||n},147:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(54),c=a(2),u=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},148:function(t,e,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(151),u=a.n(c);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=t.title,c=n.data.site,d=e||c.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=d},149:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-d65f7394e00adf48c450.js.map