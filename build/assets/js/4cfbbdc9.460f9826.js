"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[8159],{77884:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>g});var n=s(87462),i=(s(67294),s(3905)),a=s(26389),o=s(94891),r=s(10586),c=s(47507),l=(s(24310),s(63303)),p=(s(75035),s(85162));const d={id:"diagnostic-report-by-id",title:"DiagnosticReport - By ID",description:"DiagnosticReport - By ID",sidebar_label:"DiagnosticReport - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > DiagnosticReport"],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f058d9b4242558ac9d5c4c"}],responses:{200:{description:"OK",headers:{etag:{schema:{type:"string",example:'W/"MTY2MjQzNDgwMTUzNDU1NTAwMA"'}},"last-modified":{schema:{type:"string",example:"Tue, 06 Sep 2022 03:26:41 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Tue, 06 Sep 2022 03:27:18 GMT"}},"content-length":{schema:{type:"integer",example:"1665"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"73415e4f-aafb-40b7-a6a8-daebfedf0f70"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{category:[{coding:[{code:"MB",display:"Microbiology",system:"http://terminology.hl7.org/CodeSystem/v2-0074"}]}],code:{coding:[{code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain",system:"http://loinc.org"}]},conclusionCode:[{coding:[{code:"260347006",display:"+",system:"http://snomed.info/sct"}]}],effectiveDateTime:"2012-12-01T12:00:00+01:00",encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"9b08ba9f-4d82-4d02-be6b-9e9bd6b48c7a",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],issued:"2012-12-01T12:00:00+01:00",meta:{lastUpdated:"2022-09-06T03:26:41.534555+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/DiagnosticReport|4.0.1"],versionId:"MTY2MjQzNDgwMTUzNDU1NTAwMA"},performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],resourceType:"DiagnosticReport",result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],status:"final",subject:{reference:"Patient/100000030009"}}}}}},description:"DiagnosticReport - By ID",method:"get",path:"/DiagnosticReport/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"DiagnosticReport - By ID",description:{type:"text/plain"},url:{path:["DiagnosticReport",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},m=void 0,y={unversionedId:"sandbox/diagnostic-report-by-id",id:"sandbox/diagnostic-report-by-id",title:"DiagnosticReport - By ID",description:"DiagnosticReport - By ID",source:"@site/docs/sandbox/diagnostic-report-by-id.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/diagnostic-report-by-id",permalink:"/docs/sandbox/diagnostic-report-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"diagnostic-report-by-id",title:"DiagnosticReport - By ID",description:"DiagnosticReport - By ID",sidebar_label:"DiagnosticReport - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > DiagnosticReport"],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f058d9b4242558ac9d5c4c"}],responses:{200:{description:"OK",headers:{etag:{schema:{type:"string",example:'W/"MTY2MjQzNDgwMTUzNDU1NTAwMA"'}},"last-modified":{schema:{type:"string",example:"Tue, 06 Sep 2022 03:26:41 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Tue, 06 Sep 2022 03:27:18 GMT"}},"content-length":{schema:{type:"integer",example:"1665"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"73415e4f-aafb-40b7-a6a8-daebfedf0f70"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{category:[{coding:[{code:"MB",display:"Microbiology",system:"http://terminology.hl7.org/CodeSystem/v2-0074"}]}],code:{coding:[{code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain",system:"http://loinc.org"}]},conclusionCode:[{coding:[{code:"260347006",display:"+",system:"http://snomed.info/sct"}]}],effectiveDateTime:"2012-12-01T12:00:00+01:00",encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"9b08ba9f-4d82-4d02-be6b-9e9bd6b48c7a",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],issued:"2012-12-01T12:00:00+01:00",meta:{lastUpdated:"2022-09-06T03:26:41.534555+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/DiagnosticReport|4.0.1"],versionId:"MTY2MjQzNDgwMTUzNDU1NTAwMA"},performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],resourceType:"DiagnosticReport",result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],status:"final",subject:{reference:"Patient/100000030009"}}}}}},description:"DiagnosticReport - By ID",method:"get",path:"/DiagnosticReport/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"DiagnosticReport - By ID",description:{type:"text/plain"},url:{path:["DiagnosticReport",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"DiagnosticReport - By Specimen & Subject",permalink:"/docs/sandbox/diagnostic-report-by-specimen-subject"},next:{title:"DiagnosticReport - Update",permalink:"/docs/sandbox/diagnostic-report-update"}},u={},g=[{value:"DiagnosticReport - By ID",id:"diagnosticreport---by-id",level:2}],b={toc:g};function h(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"diagnosticreport---by-id"},"DiagnosticReport - By ID"),(0,i.kt)("p",null,"DiagnosticReport - By ID"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f058d9b4242558ac9d5c4c"},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"etag"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"last-modified"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"vary"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-length"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-xss-protection"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-frame-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-content-type-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-request-id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Via"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Alt-Svc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "category": [\n    {\n      "coding": [\n        {\n          "code": "MB",\n          "display": "Microbiology",\n          "system": "http://terminology.hl7.org/CodeSystem/v2-0074"\n        }\n      ]\n    }\n  ],\n  "code": {\n    "coding": [\n      {\n        "code": "11477-7",\n        "display": "Microscopic observation [Identifier] in Sputum by Acid fast stain",\n        "system": "http://loinc.org"\n      }\n    ]\n  },\n  "conclusionCode": [\n    {\n      "coding": [\n        {\n          "code": "260347006",\n          "display": "+",\n          "system": "http://snomed.info/sct"\n        }\n      ]\n    }\n  ],\n  "effectiveDateTime": "2012-12-01T12:00:00+01:00",\n  "encounter": {\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "id": "9b08ba9f-4d82-4d02-be6b-9e9bd6b48c7a",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",\n      "use": "official",\n      "value": "5234342"\n    }\n  ],\n  "issued": "2012-12-01T12:00:00+01:00",\n  "meta": {\n    "lastUpdated": "2022-09-06T03:26:41.534555+00:00",\n    "profile": [\n      "https://fhir.kemkes.go.id/r4/StructureDefinition/DiagnosticReport|4.0.1"\n    ],\n    "versionId": "MTY2MjQzNDgwMTUzNDU1NTAwMA"\n  },\n  "performer": [\n    {\n      "reference": "Practitioner/N10000001"\n    },\n    {\n      "reference": "Organization/10000004"\n    }\n  ],\n  "resourceType": "DiagnosticReport",\n  "result": [\n    {\n      "reference": "Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"\n    }\n  ],\n  "specimen": [\n    {\n      "reference": "Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"\n    }\n  ],\n  "status": "final",\n  "subject": {\n    "reference": "Patient/100000030009"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);