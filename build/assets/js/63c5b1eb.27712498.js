"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[8457],{52991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(67294),i=n(86010),c=n(53438),o=n(39960),a=n(13919),s=n(95999);const d="cardContainer_fWXF",l="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",d)},n)}function p(e){let{href:t,icon:n,title:c,description:o}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:c},n," ",c),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",u),title:o},o))}function f(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:i?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,c.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(x,e);const o=(0,c.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},35511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),c=n(52991),o=n(53438);const a={id:"resource-medication",title:"Resource > Medication",description:"Resource > Medication",custom_edit_url:null},s=void 0,d={unversionedId:"sandbox/resource-medication",id:"sandbox/resource-medication",title:"Resource > Medication",description:"Resource > Medication",source:"@site/docs/sandbox/resource-medication.tag.mdx",sourceDirName:"sandbox",slug:"/sandbox/resource-medication",permalink:"/docs/sandbox/resource-medication",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"resource-medication",title:"Resource > Medication",description:"Resource > Medication",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Procedure - PATCH",permalink:"/docs/sandbox/procedure-patch"},next:{title:"Medication - Create",permalink:"/docs/sandbox/medication-create"}},l={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);