"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[4203],{52991:(e,t,n)=>{n.d(t,{Z:()=>g});var i=n(67294),s=n(86010),r=n(53438),c=n(39960),o=n(13919),a=n(95999);const d="cardContainer_fWXF",l="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return i.createElement(c.Z,{href:t,className:(0,s.Z)("card padding--lg",d)},n)}function p(e){let{href:t,icon:n,title:r,description:c}=e;return i.createElement(m,{href:t},i.createElement("h2",{className:(0,s.Z)("text--truncate",l),title:r},n," ",r),c&&i.createElement("p",{className:(0,s.Z)("text--truncate",u),title:c},c))}function f(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?i.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.xz)(t.docId??void 0);return i.createElement(p,{href:t.href,icon:n,title:t.label,description:s?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(h,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.jA)();return i.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return i.createElement(x,e);const c=(0,r.MN)(t);return i.createElement("section",{className:(0,s.Z)("row",n)},c.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(b,{item:e})))))}},79534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var i=n(87462),s=(n(67294),n(3905)),r=n(52991),c=n(53438);const o={id:"resource-medication-dispense",title:"Resource > MedicationDispense",description:"Resource > MedicationDispense",custom_edit_url:null},a=void 0,d={unversionedId:"sandbox/resource-medication-dispense",id:"sandbox/resource-medication-dispense",title:"Resource > MedicationDispense",description:"Resource > MedicationDispense",source:"@site/docs/sandbox/resource-medication-dispense.tag.mdx",sourceDirName:"sandbox",slug:"/sandbox/resource-medication-dispense",permalink:"/sehatmu/developer/docs/sandbox/resource-medication-dispense",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"resource-medication-dispense",title:"Resource > MedicationDispense",description:"Resource > MedicationDispense",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Encounter - Create",permalink:"/sehatmu/developer/docs/sandbox/encounter-create"},next:{title:"MedicationDispense - Create",permalink:"/sehatmu/developer/docs/sandbox/medication-dispense-create"}},l={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);