(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[4994],{44765:(e,t,o)=>{"use strict";o(67294),o(93162)},92272:(e,t,o)=>{"use strict";o(67294),o(44996),o(50941)},18466:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>l});var n=o(87462),a=(o(67294),o(3905)),i=(o(92272),o(63303)),s=o(85162);o(44765);const r={id:"sehatmu-docs",title:"SehatMu Docs",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},c=void 0,u={unversionedId:"sandbox/sehatmu-docs",id:"sandbox/sehatmu-docs",title:"SehatMu Docs",description:"",source:"@site/docs/sandbox/sehatmu-docs.info.mdx",sourceDirName:"sandbox",slug:"/sandbox/sehatmu-docs",permalink:"/docs/sandbox/sehatmu-docs",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"sehatmu-docs",title:"SehatMu Docs",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"SehatMu API",permalink:"/docs/sandbox"},next:{title:"OAuth",permalink:"/docs/sandbox/o-auth"}},d={},l=[],p={toc:l};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 1.0.0"),(0,a.kt)("h1",{id:"sehatmu-docs"},"SehatMu Docs"),(0,a.kt)("div",{style:{marginBottom:"2rem"}},(0,a.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,a.kt)(i.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,a.kt)(s.Z,{label:"HTTP: Bearer Auth",value:"bearerAuth",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"http")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"HTTP Authorization Scheme:"),(0,a.kt)("td",null,"bearer")))))))))}m.isMDXComponent=!0},93162:function(e,t,o){var n,a,i,s=o(25108);a=[],void 0===(i="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(s.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){u(n.response,t,o)},n.onerror=function(){s.error("could not download file")},n.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,c=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,o){var s=r.URL||r.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?i(c):a(c.href)?n(e,t,o):i(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,s){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),o);else if(a(e))n(e,o,s);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){i(r)}))}}:function(e,t,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var i="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||i&&s||c)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(e)}else{var l=r.URL||r.webkitURL,p=l.createObjectURL(e);a?a.location=p:location.href=p,a=null,setTimeout((function(){l.revokeObjectURL(p)}),4e4)}});r.saveAs=u.saveAs=u,e.exports=u})?n.apply(t,a):n)||(e.exports=i)}}]);