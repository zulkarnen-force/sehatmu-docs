"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[6462],{52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),o=n(86010),c=n(53438),i=n(39960),s=n(13919),a=n(95999);const u="cardContainer_fWXF",l="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",u)},n)}function p(e){let{href:t,icon:n,title:c,description:i}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",l),title:c},n," ",c),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",d),title:i},i))}function g(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:o?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function E(e){let{className:t}=e;const n=(0,c.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(E,e);const i=(0,c.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},4607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),c=n(52991),i=n(53438);const s={id:"resource-encounter",title:"Resource > Encounter",description:"Resource > Encounter",custom_edit_url:null},a=void 0,u={unversionedId:"sandbox/ongoing/resource-encounter",id:"sandbox/ongoing/resource-encounter",title:"Resource > Encounter",description:"Resource > Encounter",source:"@site/docs/sandbox/ongoing/resource-encounter.tag.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/resource-encounter",permalink:"/docs/sandbox/ongoing/resource-encounter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"resource-encounter",title:"Resource > Encounter",description:"Resource > Encounter",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"HealthcareService - PATCH",permalink:"/docs/sandbox/ongoing/healthcare-service-patch"},next:{title:"Encounter - Create",permalink:"/docs/sandbox/ongoing/encounter-create"}},l={},d=[],m={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);