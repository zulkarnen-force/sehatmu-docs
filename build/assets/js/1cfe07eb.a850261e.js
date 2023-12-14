"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[9691],{79108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var s=a(87462),n=(a(67294),a(3905)),r=a(26389),i=a(94891),o=a(10586),l=a(47507),d=(a(24310),a(63303)),c=(a(75035),a(85162));const p={id:"procedure-by-id",title:"Procedure - By ID",description:"Procedure - By ID",sidebar_label:"Procedure - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Procedure"],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f1951e9ee46a46240ebe41"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Fri, 26 Aug 2022 07:13:22 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2MTQ5ODAwMjYxOTIyMjAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 26 Aug 2022 07:13:36 GMT"}},"content-length":{schema:{type:"integer",example:"1692"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"d9fe9352-aa48-4903-94e8-ce9a9bbe08bc"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{bodySite:[{coding:[{code:"302551006",display:"Entire Thorax",system:"http://snomed.info/sct"}]}],category:{coding:[{code:"103693007",display:"Diagnostic procedure",system:"http://snomed.info/sct"}],text:"Diagnostic procedure"},code:{coding:[{code:"87.44",display:"Routine chest x-ray, so described",system:"http://hl7.org/fhir/sid/icd-9-cm"}]},encounter:{display:"Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"87859868-c35b-4f7b-86dd-da9830ae58c5",meta:{lastUpdated:"2022-08-26T07:13:22.619222+00:00",versionId:"MTY2MTQ5ODAwMjYxOTIyMjAwMA"},note:[{text:"Rontgen thorax melihat perluasan infiltrat dan kavitas."}],performedPeriod:{end:"2022-06-14T14:27:00+01:00",start:"2022-06-14T13:31:00+01:00"},performer:[{actor:{display:"Dokter Bronsig",reference:"Practitioner/N10000001"}}],reasonCode:[{coding:[{code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",system:"http://hl7.org/fhir/sid/icd-10"}]}],resourceType:"Procedure",status:"completed",subject:{display:"Budi Santoso",reference:"Patient/P00030004"}}}}}},description:"Procedure - By ID",method:"get",path:"/Procedure/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"Procedure - By ID",description:{type:"text/plain"},url:{path:["Procedure",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},m=void 0,u={unversionedId:"sandbox/procedure-by-id",id:"sandbox/procedure-by-id",title:"Procedure - By ID",description:"Procedure - By ID",source:"@site/docs/sandbox/procedure-by-id.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/procedure-by-id",permalink:"/docs/sandbox/procedure-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"procedure-by-id",title:"Procedure - By ID",description:"Procedure - By ID",sidebar_label:"Procedure - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Procedure"],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f1951e9ee46a46240ebe41"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Fri, 26 Aug 2022 07:13:22 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2MTQ5ODAwMjYxOTIyMjAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 26 Aug 2022 07:13:36 GMT"}},"content-length":{schema:{type:"integer",example:"1692"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"d9fe9352-aa48-4903-94e8-ce9a9bbe08bc"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{bodySite:[{coding:[{code:"302551006",display:"Entire Thorax",system:"http://snomed.info/sct"}]}],category:{coding:[{code:"103693007",display:"Diagnostic procedure",system:"http://snomed.info/sct"}],text:"Diagnostic procedure"},code:{coding:[{code:"87.44",display:"Routine chest x-ray, so described",system:"http://hl7.org/fhir/sid/icd-9-cm"}]},encounter:{display:"Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"87859868-c35b-4f7b-86dd-da9830ae58c5",meta:{lastUpdated:"2022-08-26T07:13:22.619222+00:00",versionId:"MTY2MTQ5ODAwMjYxOTIyMjAwMA"},note:[{text:"Rontgen thorax melihat perluasan infiltrat dan kavitas."}],performedPeriod:{end:"2022-06-14T14:27:00+01:00",start:"2022-06-14T13:31:00+01:00"},performer:[{actor:{display:"Dokter Bronsig",reference:"Practitioner/N10000001"}}],reasonCode:[{coding:[{code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",system:"http://hl7.org/fhir/sid/icd-10"}]}],resourceType:"Procedure",status:"completed",subject:{display:"Budi Santoso",reference:"Patient/P00030004"}}}}}},description:"Procedure - By ID",method:"get",path:"/Procedure/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"Procedure - By ID",description:{type:"text/plain"},url:{path:["Procedure",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Procedure - Search by Encounter",permalink:"/docs/sandbox/procedure-search-by-encounter"},next:{title:"Procedure - Update",permalink:"/docs/sandbox/procedure-update"}},y={},h=[{value:"Procedure - By ID",id:"procedure---by-id",level:2}],g={toc:h};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"procedure---by-id"},"Procedure - By ID"),(0,n.kt)("p",null,"Procedure - By ID"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f1951e9ee46a46240ebe41"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Response Headers")),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"last-modified"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"etag"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-type"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"vary"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-length"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-xss-protection"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-frame-options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-content-type-options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-request-id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Via"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Alt-Svc"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object")))))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "bodySite": [\n    {\n      "coding": [\n        {\n          "code": "302551006",\n          "display": "Entire Thorax",\n          "system": "http://snomed.info/sct"\n        }\n      ]\n    }\n  ],\n  "category": {\n    "coding": [\n      {\n        "code": "103693007",\n        "display": "Diagnostic procedure",\n        "system": "http://snomed.info/sct"\n      }\n    ],\n    "text": "Diagnostic procedure"\n  },\n  "code": {\n    "coding": [\n      {\n        "code": "87.44",\n        "display": "Routine chest x-ray, so described",\n        "system": "http://hl7.org/fhir/sid/icd-9-cm"\n      }\n    ]\n  },\n  "encounter": {\n    "display": "Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022",\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "id": "87859868-c35b-4f7b-86dd-da9830ae58c5",\n  "meta": {\n    "lastUpdated": "2022-08-26T07:13:22.619222+00:00",\n    "versionId": "MTY2MTQ5ODAwMjYxOTIyMjAwMA"\n  },\n  "note": [\n    {\n      "text": "Rontgen thorax melihat perluasan infiltrat dan kavitas."\n    }\n  ],\n  "performedPeriod": {\n    "end": "2022-06-14T14:27:00+01:00",\n    "start": "2022-06-14T13:31:00+01:00"\n  },\n  "performer": [\n    {\n      "actor": {\n        "display": "Dokter Bronsig",\n        "reference": "Practitioner/N10000001"\n      }\n    }\n  ],\n  "reasonCode": [\n    {\n      "coding": [\n        {\n          "code": "A15.0",\n          "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture",\n          "system": "http://hl7.org/fhir/sid/icd-10"\n        }\n      ]\n    }\n  ],\n  "resourceType": "Procedure",\n  "status": "completed",\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/P00030004"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);