"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[1327],{52991:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(67294),r=n(86010),c=n(53438),i=n(39960),a=n(13919),s=n(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return o.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:c,description:i}=e;return o.createElement(m,{href:t},o.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:c},n," ",c),i&&o.createElement("p",{className:(0,r.Z)("text--truncate",d),title:i},i))}function g(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?o.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(t.docId??void 0);return o.createElement(p,{href:t.href,icon:n,title:t.label,description:r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(f,{item:t});case"category":return o.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,c.jA)();return o.createElement(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return o.createElement(b,e);const i=(0,c.MN)(t);return o.createElement("section",{className:(0,r.Z)("row",n)},i.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(h,{item:e})))))}},27028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),c=n(52991),i=n(53438);const a={id:"resource-location",title:"Resource > Location",description:"Resource > Location",custom_edit_url:null},s=void 0,l={unversionedId:"sandbox/ongoing/resource-location",id:"sandbox/ongoing/resource-location",title:"Resource > Location",description:"Resource > Location",source:"@site/docs/sandbox/ongoing/resource-location.tag.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/resource-location",permalink:"/docs/sandbox/ongoing/resource-location",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"resource-location",title:"Resource > Location",description:"Resource > Location",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Patient - By ID",permalink:"/docs/sandbox/ongoing/patient-by-id"},next:{title:"Location - Create",permalink:"/docs/sandbox/ongoing/location-create"}},u={},d=[],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);