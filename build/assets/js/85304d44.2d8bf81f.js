"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[782],{16227:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>g});var n=a(87462),s=(a(67294),a(3905)),i=a(26389),o=a(94891),l=a(75190),p=a(47507),r=(a(24310),a(63303)),m=(a(75035),a(85162));const d={id:"composition-patch",title:"Composition - PATCH",description:"Composition - PATCH",sidebar_label:"Composition - PATCH",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Composition"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/status",value:"amended"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64ed5782099578f233b21469"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Fri, 07 Oct 2022 07:30:36 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2NTEyNzgzNjA4NDg5NzAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Composition/e511fb00-3641-4816-a9fd-db2a55d1897d/_history/MTY2NTEyNzgzNjA4NDg5NzAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 07 Oct 2022 07:30:36 GMT"}},"content-length":{schema:{type:"integer",example:"1508"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"03d4e05c-6ef9-474d-8238-dfdc00719835"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{author:[{display:"Dokter Bronsig",reference:"Practitioner/N10000001"}],category:[{coding:[{code:"LP173421-1",display:"Report",system:"http://loinc.org"}]}],custodian:{reference:"Organization/10000004"},date:"2022-06-14",encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"e511fb00-3641-4816-a9fd-db2a55d1897d",identifier:{system:"http://sys-ids.kemkes.go.id/composition/10000004",value:"P20240001"},meta:{lastUpdated:"2022-10-07T07:30:36.084897+00:00",versionId:"MTY2NTEyNzgzNjA4NDg5NzAwMA"},resourceType:"Composition",section:[{code:{coding:[{code:"42344-2",display:"Discharge diet (narrative)",system:"http://loinc.org"}]},text:{div:"Rekomendasi diet rendah karbohidrat",status:"additional"}}],status:"amended",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},title:"Resume Medis Rawat Jalan",type:{coding:[{code:"18842-5",display:"Discharge summary",system:"http://loinc.org"}]}}}}}},description:"Composition - PATCH",method:"patch",path:"/Composition/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],jsonRequestBodyExample:[{op:"replace",path:"/status",value:"amended"}],info:{title:"SehatMu On Going",version:"1.0.0"},postman:{name:"Composition - PATCH",description:{type:"text/plain"},url:{path:["Composition",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/ongoing/sehatmu-on-going",custom_edit_url:null},c=void 0,y={unversionedId:"sandbox/ongoing/composition-patch",id:"sandbox/ongoing/composition-patch",title:"Composition - PATCH",description:"Composition - PATCH",source:"@site/docs/sandbox/ongoing/composition-patch.api.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/composition-patch",permalink:"/docs/sandbox/ongoing/composition-patch",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"composition-patch",title:"Composition - PATCH",description:"Composition - PATCH",sidebar_label:"Composition - PATCH",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Composition"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/status",value:"amended"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64ed5782099578f233b21469"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Fri, 07 Oct 2022 07:30:36 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2NTEyNzgzNjA4NDg5NzAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Composition/e511fb00-3641-4816-a9fd-db2a55d1897d/_history/MTY2NTEyNzgzNjA4NDg5NzAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 07 Oct 2022 07:30:36 GMT"}},"content-length":{schema:{type:"integer",example:"1508"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"03d4e05c-6ef9-474d-8238-dfdc00719835"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{author:[{display:"Dokter Bronsig",reference:"Practitioner/N10000001"}],category:[{coding:[{code:"LP173421-1",display:"Report",system:"http://loinc.org"}]}],custodian:{reference:"Organization/10000004"},date:"2022-06-14",encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"e511fb00-3641-4816-a9fd-db2a55d1897d",identifier:{system:"http://sys-ids.kemkes.go.id/composition/10000004",value:"P20240001"},meta:{lastUpdated:"2022-10-07T07:30:36.084897+00:00",versionId:"MTY2NTEyNzgzNjA4NDg5NzAwMA"},resourceType:"Composition",section:[{code:{coding:[{code:"42344-2",display:"Discharge diet (narrative)",system:"http://loinc.org"}]},text:{div:"Rekomendasi diet rendah karbohidrat",status:"additional"}}],status:"amended",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},title:"Resume Medis Rawat Jalan",type:{coding:[{code:"18842-5",display:"Discharge summary",system:"http://loinc.org"}]}}}}}},description:"Composition - PATCH",method:"patch",path:"/Composition/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],jsonRequestBodyExample:[{op:"replace",path:"/status",value:"amended"}],info:{title:"SehatMu On Going",version:"1.0.0"},postman:{name:"Composition - PATCH",description:{type:"text/plain"},url:{path:["Composition",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/ongoing/sehatmu-on-going",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Composition - Update",permalink:"/docs/sandbox/ongoing/composition-update"},next:{title:"Resource > Condition",permalink:"/docs/sandbox/ongoing/resource-condition"}},u={},g=[{value:"Composition - PATCH",id:"composition---patch",level:2}],h={toc:g};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"composition---patch"},"Composition - PATCH"),(0,s.kt)("p",null,"Composition - PATCH"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64ed5782099578f233b21469"},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object"))))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last-modified"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"etag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"vary"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-xss-protection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-frame-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-content-type-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-request-id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Via"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Alt-Svc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(r.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "author": [\n    {\n      "display": "Dokter Bronsig",\n      "reference": "Practitioner/N10000001"\n    }\n  ],\n  "category": [\n    {\n      "coding": [\n        {\n          "code": "LP173421-1",\n          "display": "Report",\n          "system": "http://loinc.org"\n        }\n      ]\n    }\n  ],\n  "custodian": {\n    "reference": "Organization/10000004"\n  },\n  "date": "2022-06-14",\n  "encounter": {\n    "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "id": "e511fb00-3641-4816-a9fd-db2a55d1897d",\n  "identifier": {\n    "system": "http://sys-ids.kemkes.go.id/composition/10000004",\n    "value": "P20240001"\n  },\n  "meta": {\n    "lastUpdated": "2022-10-07T07:30:36.084897+00:00",\n    "versionId": "MTY2NTEyNzgzNjA4NDg5NzAwMA"\n  },\n  "resourceType": "Composition",\n  "section": [\n    {\n      "code": {\n        "coding": [\n          {\n            "code": "42344-2",\n            "display": "Discharge diet (narrative)",\n            "system": "http://loinc.org"\n          }\n        ]\n      },\n      "text": {\n        "div": "Rekomendasi diet rendah karbohidrat",\n        "status": "additional"\n      }\n    }\n  ],\n  "status": "amended",\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  },\n  "title": "Resume Medis Rawat Jalan",\n  "type": {\n    "coding": [\n      {\n        "code": "18842-5",\n        "display": "Discharge summary",\n        "system": "http://loinc.org"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);