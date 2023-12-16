"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[5033],{50293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var n=a(87462),s=(a(67294),a(3905)),o=a(26389),r=a(94891),i=a(75190),l=a(47507),c=(a(24310),a(63303)),p=(a(75035),a(85162));const d={id:"procedure-patch",title:"Procedure - PATCH",description:"Procedure - PATCH",sidebar_label:"Procedure - PATCH",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Procedure"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/category/text",value:"Surgical procedure"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64ed5e3570ea34787505b042"}],responses:{200:{description:"OK",headers:{etag:{schema:{type:"string",example:'W/"MTY2NTEyNzM2MzI4OTk5MTAwMA"'}},"last-modified":{schema:{type:"string",example:"Fri, 07 Oct 2022 07:22:43 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Procedure/87859868-c35b-4f7b-86dd-da9830ae58c5/_history/MTY2NTEyNzM2MzI4OTk5MTAwMA"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 07 Oct 2022 07:22:43 GMT"}},"content-length":{schema:{type:"integer",example:"1690"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"59179cf8-13ac-485d-86e3-c803067bb884"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{bodySite:[{coding:[{code:"302551006",display:"Entire Thorax",system:"http://snomed.info/sct"}]}],category:{coding:[{code:"103693007",display:"Diagnostic procedure",system:"http://snomed.info/sct"}],text:"Surgical procedure"},code:{coding:[{code:"87.44",display:"Routine chest x-ray, so described",system:"http://hl7.org/fhir/sid/icd-9-cm"}]},encounter:{display:"Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"87859868-c35b-4f7b-86dd-da9830ae58c5",meta:{lastUpdated:"2022-10-07T07:22:43.289991+00:00",versionId:"MTY2NTEyNzM2MzI4OTk5MTAwMA"},note:[{text:"Rontgen thorax melihat perluasan infiltrat dan kavitas."}],performedPeriod:{end:"2022-06-14T14:27:00+01:00",start:"2022-06-14T13:31:00+01:00"},performer:[{actor:{display:"Dokter Bronsig",reference:"Practitioner/N10000001"}}],reasonCode:[{coding:[{code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",system:"http://hl7.org/fhir/sid/icd-10"}]}],resourceType:"Procedure",status:"completed",subject:{display:"Budi Santoso",reference:"Patient/P00030004"}}}}}},description:"Procedure - PATCH",method:"patch",path:"/Procedure/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],jsonRequestBodyExample:[{op:"replace",path:"/category/text",value:"Surgical procedure"}],info:{title:"SehatMu On Going",version:"1.0.0"},postman:{name:"Procedure - PATCH",description:{type:"text/plain"},url:{path:["Procedure",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/ongoing/sehatmu-on-going",custom_edit_url:null},m=void 0,u={unversionedId:"sandbox/ongoing/procedure-patch",id:"sandbox/ongoing/procedure-patch",title:"Procedure - PATCH",description:"Procedure - PATCH",source:"@site/docs/sandbox/ongoing/procedure-patch.api.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/procedure-patch",permalink:"/docs/sandbox/ongoing/procedure-patch",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"procedure-patch",title:"Procedure - PATCH",description:"Procedure - PATCH",sidebar_label:"Procedure - PATCH",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Procedure"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/category/text",value:"Surgical procedure"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64ed5e3570ea34787505b042"}],responses:{200:{description:"OK",headers:{etag:{schema:{type:"string",example:'W/"MTY2NTEyNzM2MzI4OTk5MTAwMA"'}},"last-modified":{schema:{type:"string",example:"Fri, 07 Oct 2022 07:22:43 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Procedure/87859868-c35b-4f7b-86dd-da9830ae58c5/_history/MTY2NTEyNzM2MzI4OTk5MTAwMA"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 07 Oct 2022 07:22:43 GMT"}},"content-length":{schema:{type:"integer",example:"1690"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"59179cf8-13ac-485d-86e3-c803067bb884"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{bodySite:[{coding:[{code:"302551006",display:"Entire Thorax",system:"http://snomed.info/sct"}]}],category:{coding:[{code:"103693007",display:"Diagnostic procedure",system:"http://snomed.info/sct"}],text:"Surgical procedure"},code:{coding:[{code:"87.44",display:"Routine chest x-ray, so described",system:"http://hl7.org/fhir/sid/icd-9-cm"}]},encounter:{display:"Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"87859868-c35b-4f7b-86dd-da9830ae58c5",meta:{lastUpdated:"2022-10-07T07:22:43.289991+00:00",versionId:"MTY2NTEyNzM2MzI4OTk5MTAwMA"},note:[{text:"Rontgen thorax melihat perluasan infiltrat dan kavitas."}],performedPeriod:{end:"2022-06-14T14:27:00+01:00",start:"2022-06-14T13:31:00+01:00"},performer:[{actor:{display:"Dokter Bronsig",reference:"Practitioner/N10000001"}}],reasonCode:[{coding:[{code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",system:"http://hl7.org/fhir/sid/icd-10"}]}],resourceType:"Procedure",status:"completed",subject:{display:"Budi Santoso",reference:"Patient/P00030004"}}}}}},description:"Procedure - PATCH",method:"patch",path:"/Procedure/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],jsonRequestBodyExample:[{op:"replace",path:"/category/text",value:"Surgical procedure"}],info:{title:"SehatMu On Going",version:"1.0.0"},postman:{name:"Procedure - PATCH",description:{type:"text/plain"},url:{path:["Procedure",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/ongoing/sehatmu-on-going",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Procedure - Update",permalink:"/docs/sandbox/ongoing/procedure-update"},next:{title:"Resource > MedicationRequest",permalink:"/docs/sandbox/ongoing/resource-medication-request"}},y={},h=[{value:"Procedure - PATCH",id:"procedure---patch",level:2}],g={toc:h};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"procedure---patch"},"Procedure - PATCH"),(0,s.kt)("p",null,"Procedure - PATCH"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(i.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64ed5e3570ea34787505b042"},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(i.Z,{className:"paramsItem",param:{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},mdxType:"ParamsItem"})))),(0,s.kt)(r.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object"))))))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"etag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last-modified"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"vary"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-xss-protection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-frame-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-content-type-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-request-id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Via"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Alt-Svc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "bodySite": [\n    {\n      "coding": [\n        {\n          "code": "302551006",\n          "display": "Entire Thorax",\n          "system": "http://snomed.info/sct"\n        }\n      ]\n    }\n  ],\n  "category": {\n    "coding": [\n      {\n        "code": "103693007",\n        "display": "Diagnostic procedure",\n        "system": "http://snomed.info/sct"\n      }\n    ],\n    "text": "Surgical procedure"\n  },\n  "code": {\n    "coding": [\n      {\n        "code": "87.44",\n        "display": "Routine chest x-ray, so described",\n        "system": "http://hl7.org/fhir/sid/icd-9-cm"\n      }\n    ]\n  },\n  "encounter": {\n    "display": "Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022",\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "id": "87859868-c35b-4f7b-86dd-da9830ae58c5",\n  "meta": {\n    "lastUpdated": "2022-10-07T07:22:43.289991+00:00",\n    "versionId": "MTY2NTEyNzM2MzI4OTk5MTAwMA"\n  },\n  "note": [\n    {\n      "text": "Rontgen thorax melihat perluasan infiltrat dan kavitas."\n    }\n  ],\n  "performedPeriod": {\n    "end": "2022-06-14T14:27:00+01:00",\n    "start": "2022-06-14T13:31:00+01:00"\n  },\n  "performer": [\n    {\n      "actor": {\n        "display": "Dokter Bronsig",\n        "reference": "Practitioner/N10000001"\n      }\n    }\n  ],\n  "reasonCode": [\n    {\n      "coding": [\n        {\n          "code": "A15.0",\n          "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture",\n          "system": "http://hl7.org/fhir/sid/icd-10"\n        }\n      ]\n    }\n  ],\n  "resourceType": "Procedure",\n  "status": "completed",\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/P00030004"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);