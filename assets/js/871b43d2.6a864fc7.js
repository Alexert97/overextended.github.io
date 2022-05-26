"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4772],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4968:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],s={title:"Usage"},c=void 0,l={unversionedId:"oxmysql/Usage/index",id:"oxmysql/Usage/index",title:"Usage",description:"",source:"@site/docs/oxmysql/Usage/index.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/",permalink:"/docs/oxmysql/Usage/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/index.md",tags:[],version:"current",frontMatter:{title:"Usage"},sidebar:"docs",previous:{title:"Placeholders",permalink:"/docs/oxmysql/Getting Started/placeholders"},next:{title:"Insert",permalink:"/docs/oxmysql/Usage/insert"}},u={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Lua\nMySQL.query('SELECT * from users WHERE identifier = ?', {identifier}, function(result)\n    -- callback response\n    -- same as MySQL.Async.fetchAll\nend)\nCreateThread(function()\n    local result = MySQL.query.await('SELECT * from users WHERE identifier = ?', {identifier})\n    -- await a promise to resolve\n    -- same as MySQL.Sync.fetchAll\nend)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// JS\nexports.oxmysql.query('SELECT * from users WHERE identifier = ?', [identifier], (result) => {\n  // callback response\n})(async () => {\n  const result = await exports.oxmysql.query_async('SELECT * from users WHERE identifier = ?', [identifier]);\n  // await a promise to resolve\n})();\nexports.oxmysql.query_async('SELECT * from users WHERE identifier = ?', [identifier]).then((result) => {\n  // utilise .then to resolve a promise like a callback\n});\n")))}m.isMDXComponent=!0}}]);