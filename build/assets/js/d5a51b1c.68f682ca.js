"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[5419],{52991:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(67294),o=r(86010),s=r(53438),i=r(39960),a=r(13919),c=r(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:s,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:s},r," ",s),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",u),title:i},i))}function v(e){let{item:t}=e;const r=(0,s.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,s.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(v,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,s.jA)();return n.createElement(T,{items:r.items,className:t})}function T(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,s.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},94913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),s=r(52991),i=r(53438);const a={id:"resource-observation-ttv",title:"Resource > Observation - TTV",description:"Resource > Observation - TTV",custom_edit_url:null},c=void 0,l={unversionedId:"sandbox/resource-observation-ttv",id:"sandbox/resource-observation-ttv",title:"Resource > Observation - TTV",description:"Resource > Observation - TTV",source:"@site/docs/sandbox/resource-observation-ttv.tag.mdx",sourceDirName:"sandbox",slug:"/sandbox/resource-observation-ttv",permalink:"/sehatmu/developer/docs/sandbox/resource-observation-ttv",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"resource-observation-ttv",title:"Resource > Observation - TTV",description:"Resource > Observation - TTV",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Condition - Patch",permalink:"/sehatmu/developer/docs/sandbox/condition-patch"},next:{title:"Observation - Create",permalink:"/sehatmu/developer/docs/sandbox/observation-create"}},d={},u=[],m={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);