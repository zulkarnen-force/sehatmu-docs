"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[5991],{87831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var s=a(87462),n=(a(67294),a(3905)),i=a(26389),o=a(94891),r=a(10586),l=a(47507),c=(a(24310),a(63303)),p=(a(75035),a(85162));const m={id:"diagnostic-report-patch",title:"DiagnosticReport - PATCH",description:"DiagnosticReport - PATCH",sidebar_label:"DiagnosticReport - PATCH",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > DiagnosticReport"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/status",value:"preliminary"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Fri, 07 Oct 2022 07:25:50 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY2NTEyNzU1MDM5MDcxMjAwMA"'}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/DiagnosticReport/ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6/_history/MTY2NTEyNzU1MDM5MDcxMjAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 07 Oct 2022 07:25:50 GMT"}},"content-length":{schema:{type:"integer",example:"1683"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"9220b6d9-c325-4f0b-9545-81c6b8faa13c"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{category:[{coding:[{code:"MB",display:"Microbiology",system:"http://terminology.hl7.org/CodeSystem/v2-0074"}]}],code:{coding:[{code:"647-8",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain.Ziehl-Neelsen",system:"http://loinc.org"}]},conclusionCode:[{coding:[{code:"260347006",display:"+",system:"http://snomed.info/sct"}]}],effectiveDateTime:"2012-12-01T12:00:00+01:00",encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],issued:"2012-12-01T12:00:00+01:00",meta:{lastUpdated:"2022-10-07T07:25:50.390712+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/DiagnosticReport|4.0.1"],versionId:"MTY2NTEyNzU1MDM5MDcxMjAwMA"},performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],resourceType:"DiagnosticReport",result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],status:"preliminary",subject:{reference:"Patient/100000030009"}}}}}},description:"DiagnosticReport - PATCH",method:"patch",path:"/DiagnosticReport/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:[{op:"replace",path:"/status",value:"preliminary"}],info:{title:"SehatMu",version:"1.0.0"},postman:{name:"DiagnosticReport - PATCH",description:{type:"text/plain"},url:{path:["DiagnosticReport",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},d=void 0,y={unversionedId:"sandbox/diagnostic-report-patch",id:"sandbox/diagnostic-report-patch",title:"DiagnosticReport - PATCH",description:"DiagnosticReport - PATCH",source:"@site/docs/sandbox/diagnostic-report-patch.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/diagnostic-report-patch",permalink:"/docs/sandbox/diagnostic-report-patch",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"diagnostic-report-patch",title:"DiagnosticReport - PATCH",description:"DiagnosticReport - PATCH",sidebar_label:"DiagnosticReport - PATCH",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > DiagnosticReport"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/status",value:"preliminary"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Fri, 07 Oct 2022 07:25:50 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY2NTEyNzU1MDM5MDcxMjAwMA"'}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/DiagnosticReport/ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6/_history/MTY2NTEyNzU1MDM5MDcxMjAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 07 Oct 2022 07:25:50 GMT"}},"content-length":{schema:{type:"integer",example:"1683"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"9220b6d9-c325-4f0b-9545-81c6b8faa13c"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{category:[{coding:[{code:"MB",display:"Microbiology",system:"http://terminology.hl7.org/CodeSystem/v2-0074"}]}],code:{coding:[{code:"647-8",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain.Ziehl-Neelsen",system:"http://loinc.org"}]},conclusionCode:[{coding:[{code:"260347006",display:"+",system:"http://snomed.info/sct"}]}],effectiveDateTime:"2012-12-01T12:00:00+01:00",encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],issued:"2012-12-01T12:00:00+01:00",meta:{lastUpdated:"2022-10-07T07:25:50.390712+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/DiagnosticReport|4.0.1"],versionId:"MTY2NTEyNzU1MDM5MDcxMjAwMA"},performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],resourceType:"DiagnosticReport",result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],status:"preliminary",subject:{reference:"Patient/100000030009"}}}}}},description:"DiagnosticReport - PATCH",method:"patch",path:"/DiagnosticReport/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:[{op:"replace",path:"/status",value:"preliminary"}],info:{title:"SehatMu",version:"1.0.0"},postman:{name:"DiagnosticReport - PATCH",description:{type:"text/plain"},url:{path:["DiagnosticReport",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"DiagnosticReport - Update",permalink:"/docs/sandbox/diagnostic-report-update"},next:{title:"Resource > AllergyIntolerance",permalink:"/docs/sandbox/resource-allergy-intolerance"}},u={},g=[{value:"DiagnosticReport - PATCH",id:"diagnosticreport---patch",level:2}],h={toc:g};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"diagnosticreport---patch"},"DiagnosticReport - PATCH"),(0,n.kt)("p",null,"DiagnosticReport - PATCH"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6"},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},mdxType:"ParamsItem"})))),(0,n.kt)(o.Z,{mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object"))))))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Response Headers")),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"last-modified"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-type"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"etag"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"location"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"vary"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-length"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-xss-protection"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-frame-options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-content-type-options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-request-id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Via"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Alt-Svc"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object")))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "category": [\n    {\n      "coding": [\n        {\n          "code": "MB",\n          "display": "Microbiology",\n          "system": "http://terminology.hl7.org/CodeSystem/v2-0074"\n        }\n      ]\n    }\n  ],\n  "code": {\n    "coding": [\n      {\n        "code": "647-8",\n        "display": "Microscopic observation [Identifier] in Sputum by Acid fast stain.Ziehl-Neelsen",\n        "system": "http://loinc.org"\n      }\n    ]\n  },\n  "conclusionCode": [\n    {\n      "coding": [\n        {\n          "code": "260347006",\n          "display": "+",\n          "system": "http://snomed.info/sct"\n        }\n      ]\n    }\n  ],\n  "effectiveDateTime": "2012-12-01T12:00:00+01:00",\n  "encounter": {\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "id": "ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",\n      "use": "official",\n      "value": "5234342"\n    }\n  ],\n  "issued": "2012-12-01T12:00:00+01:00",\n  "meta": {\n    "lastUpdated": "2022-10-07T07:25:50.390712+00:00",\n    "profile": [\n      "https://fhir.kemkes.go.id/r4/StructureDefinition/DiagnosticReport|4.0.1"\n    ],\n    "versionId": "MTY2NTEyNzU1MDM5MDcxMjAwMA"\n  },\n  "performer": [\n    {\n      "reference": "Practitioner/N10000001"\n    },\n    {\n      "reference": "Organization/10000004"\n    }\n  ],\n  "resourceType": "DiagnosticReport",\n  "result": [\n    {\n      "reference": "Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"\n    }\n  ],\n  "specimen": [\n    {\n      "reference": "Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"\n    }\n  ],\n  "status": "preliminary",\n  "subject": {\n    "reference": "Patient/100000030009"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);