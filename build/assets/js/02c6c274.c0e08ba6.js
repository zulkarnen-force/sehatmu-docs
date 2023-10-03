"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[9943],{70679:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var a=s(87462),n=(s(67294),s(3905)),i=s(26389),o=s(94891),l=s(10586),r=s(47507),p=(s(24310),s(63303)),m=(s(75035),s(85162));const d={id:"composition-by-id",title:"Composition - By ID",description:"Composition - By ID",sidebar_label:"Composition - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Composition"],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f19279b97e38f3506f22cc"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Fri, 26 Aug 2022 07:12:33 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY2MTQ5Nzk1MzIwNjEzMTAwMA"'}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 26 Aug 2022 07:12:43 GMT"}},"content-length":{schema:{type:"integer",example:"1515"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"2ba29099-fbcf-450b-a1e3-92995c9d31cc"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{author:[{display:"Dokter Bronsig",reference:"Practitioner/N10000001"}],category:[{coding:[{code:"LP173421-1",display:"Report",system:"http://loinc.org"}]}],custodian:{reference:"Organization/10000004"},date:"2022-06-14",encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"e511fb00-3641-4816-a9fd-db2a55d1897d",identifier:{system:"http://sys-ids.kemkes.go.id/composition/10000004",value:"P20240001"},meta:{lastUpdated:"2022-08-26T07:12:33.206131+00:00",versionId:"MTY2MTQ5Nzk1MzIwNjEzMTAwMA"},resourceType:"Composition",section:[{code:{coding:[{code:"42344-2",display:"Discharge diet (narrative)",system:"http://loinc.org"}]},text:{div:"Rekomendasi diet rendah lemak, rendah kalori",status:"additional"}}],status:"final",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},title:"Resume Medis Rawat Jalan",type:{coding:[{code:"18842-5",display:"Discharge summary",system:"http://loinc.org"}]}}}}}},description:"Composition - By ID",method:"get",path:"/compositions/{id}",servers:[{url:"http://103.19.182.20/api-sehatmu/"},{url:"http://localhost:8000"},{url:"http://{{base_url_production}}"},{url:"http://{{base_url}}"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"LabMu",version:"1.0.0"},postman:{name:"Composition - By ID",description:{type:"text/plain"},url:{path:["compositions",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},c=void 0,y={unversionedId:"sandbox/composition-by-id",id:"sandbox/composition-by-id",title:"Composition - By ID",description:"Composition - By ID",source:"@site/docs/sandbox/composition-by-id.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/composition-by-id",permalink:"/sehatmu/developer/docs/sandbox/composition-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"composition-by-id",title:"Composition - By ID",description:"Composition - By ID",sidebar_label:"Composition - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Composition"],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f19279b97e38f3506f22cc"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Fri, 26 Aug 2022 07:12:33 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY2MTQ5Nzk1MzIwNjEzMTAwMA"'}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 26 Aug 2022 07:12:43 GMT"}},"content-length":{schema:{type:"integer",example:"1515"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"2ba29099-fbcf-450b-a1e3-92995c9d31cc"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{author:[{display:"Dokter Bronsig",reference:"Practitioner/N10000001"}],category:[{coding:[{code:"LP173421-1",display:"Report",system:"http://loinc.org"}]}],custodian:{reference:"Organization/10000004"},date:"2022-06-14",encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"e511fb00-3641-4816-a9fd-db2a55d1897d",identifier:{system:"http://sys-ids.kemkes.go.id/composition/10000004",value:"P20240001"},meta:{lastUpdated:"2022-08-26T07:12:33.206131+00:00",versionId:"MTY2MTQ5Nzk1MzIwNjEzMTAwMA"},resourceType:"Composition",section:[{code:{coding:[{code:"42344-2",display:"Discharge diet (narrative)",system:"http://loinc.org"}]},text:{div:"Rekomendasi diet rendah lemak, rendah kalori",status:"additional"}}],status:"final",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},title:"Resume Medis Rawat Jalan",type:{coding:[{code:"18842-5",display:"Discharge summary",system:"http://loinc.org"}]}}}}}},description:"Composition - By ID",method:"get",path:"/compositions/{id}",servers:[{url:"http://103.19.182.20/api-sehatmu/"},{url:"http://localhost:8000"},{url:"http://{{base_url_production}}"},{url:"http://{{base_url}}"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"LabMu",version:"1.0.0"},postman:{name:"Composition - By ID",description:{type:"text/plain"},url:{path:["compositions",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Composition - Search by Encounter",permalink:"/sehatmu/developer/docs/sandbox/composition-search-by-encounter"},next:{title:"Composition - Update",permalink:"/sehatmu/developer/docs/sandbox/composition-update"}},u={},h=[{value:"Composition - By ID",id:"composition---by-id",level:2}],k={toc:h};function g(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"composition---by-id"},"Composition - By ID"),(0,n.kt)("p",null,"Composition - By ID"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f19279b97e38f3506f22cc"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Response Headers")),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"last-modified"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-type"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"etag"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"vary"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-length"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-xss-protection"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-frame-options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-content-type-options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-request-id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Via"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Alt-Svc"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object")))))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:'{\n  "author": [\n    {\n      "display": "Dokter Bronsig",\n      "reference": "Practitioner/N10000001"\n    }\n  ],\n  "category": [\n    {\n      "coding": [\n        {\n          "code": "LP173421-1",\n          "display": "Report",\n          "system": "http://loinc.org"\n        }\n      ]\n    }\n  ],\n  "custodian": {\n    "reference": "Organization/10000004"\n  },\n  "date": "2022-06-14",\n  "encounter": {\n    "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "id": "e511fb00-3641-4816-a9fd-db2a55d1897d",\n  "identifier": {\n    "system": "http://sys-ids.kemkes.go.id/composition/10000004",\n    "value": "P20240001"\n  },\n  "meta": {\n    "lastUpdated": "2022-08-26T07:12:33.206131+00:00",\n    "versionId": "MTY2MTQ5Nzk1MzIwNjEzMTAwMA"\n  },\n  "resourceType": "Composition",\n  "section": [\n    {\n      "code": {\n        "coding": [\n          {\n            "code": "42344-2",\n            "display": "Discharge diet (narrative)",\n            "system": "http://loinc.org"\n          }\n        ]\n      },\n      "text": {\n        "div": "Rekomendasi diet rendah lemak, rendah kalori",\n        "status": "additional"\n      }\n    }\n  ],\n  "status": "final",\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  },\n  "title": "Resume Medis Rawat Jalan",\n  "type": {\n    "coding": [\n      {\n        "code": "18842-5",\n        "display": "Discharge summary",\n        "system": "http://loinc.org"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);