"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[1657],{52991:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(67294),i=r(86010),c=r(53438),o=r(39960),a=r(13919),s=r(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:c,description:o}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:c},r," ",c),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",u),title:o},o))}function h(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:i?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const o=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},8058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905)),c=r(52991),o=r(53438);const a={id:"resource-practitioner",title:"Resource > Practitioner",description:"Resource > Practitioner",custom_edit_url:null},s=void 0,l={unversionedId:"sandbox/resource-practitioner",id:"sandbox/resource-practitioner",title:"Resource > Practitioner",description:"Resource > Practitioner",source:"@site/docs/sandbox/resource-practitioner.tag.mdx",sourceDirName:"sandbox",slug:"/sandbox/resource-practitioner",permalink:"/sehatmu/developer/docs/sandbox/resource-practitioner",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"resource-practitioner",title:"Resource > Practitioner",description:"Resource > Practitioner",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Location - Patch",permalink:"/sehatmu/developer/docs/sandbox/location-patch"},next:{title:"Practitioner - Search Name, Gender, Birthdate",permalink:"/sehatmu/developer/docs/sandbox/practitioner-search-name-gender-birthdate"}},d={},u=[],m={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);