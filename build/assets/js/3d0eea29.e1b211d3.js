"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[8272],{511:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>g});var a=s(87462),i=(s(67294),s(3905)),n=s(26389),o=s(94891),r=s(10586),c=s(47507),l=(s(24310),s(63303)),p=(s(75035),s(85162));const d={id:"diagnostic-report-update",title:"DiagnosticReport - Update",description:"DiagnosticReport - Update",sidebar_label:"DiagnosticReport - Update",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > DiagnosticReport"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"DiagnosticReport",id:"ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],status:"final",category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0074",code:"MB",display:"Microbiology"}]}],code:{coding:[{system:"http://loinc.org",code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain"}]},subject:{reference:"Patient/100000030009"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},effectiveDateTime:"2012-12-01T12:00:00+01:00",issued:"2012-12-01T12:00:00+01:00",performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],conclusionCode:[{coding:[{system:"http://snomed.info/sct",code:"2667000",display:"Absent"}]}]}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f058d9b4242558ac9d5c4c"}],responses:{201:{description:"Created",headers:{etag:{schema:{type:"string",example:'W/"MTY3ODMzMDQ4MDQ0NTc0MDAwMA"'}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev-ver2/fhir/DiagnosticReport/ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6/_history/MTY3ODMzMDQ4MDQ0NTc0MDAwMA"}},"last-modified":{schema:{type:"string",example:"Thu, 09 Mar 2023 02:54:40 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 09 Mar 2023 02:54:40 GMT"}},"content-length":{schema:{type:"integer",example:"1564"}},"X-Xss-Protection":{schema:{type:"string",example:"1; mode=block"}},"X-Frame-Options":{schema:{type:"string",example:"SAMEORIGIN"}},"X-Content-Type-Options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"9457cffa-785b-41b3-95e3-2a425f9e165d"}},Via:{schema:{type:"string",example:"1.1 google"}},"Strict-Transport-Security":{schema:{type:"string",example:"max-age=31536000; includeSubDomains"}},"Referrer-Policy":{schema:{type:"string",example:"strict-origin"}},"Permissions-Policy":{schema:{type:"string",example:"camera=(), microphone=(), geolocation=(), browsing-topics=()"}},"Content-Security-Policy":{schema:{type:"string",example:"default-src 'self' http: https: data: blob: 'unsafe-inline'"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{category:[{coding:[{code:"MB",display:"Microbiology",system:"http://terminology.hl7.org/CodeSystem/v2-0074"}]}],code:{coding:[{code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain",system:"http://loinc.org"}]},conclusionCode:[{coding:[{code:"2667000",display:"Absent",system:"http://snomed.info/sct"}]}],effectiveDateTime:"2012-12-01T12:00:00+01:00",encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],issued:"2012-12-01T12:00:00+01:00",meta:{lastUpdated:"2023-03-09T02:54:40.445740+00:00",versionId:"MTY3ODMzMDQ4MDQ0NTc0MDAwMA"},performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],resourceType:"DiagnosticReport",result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],status:"final",subject:{reference:"Patient/100000030009"}}}}}},description:"DiagnosticReport - Update",method:"put",path:"/DiagnosticReport/{id}",servers:[{url:"http://103.19.182.20/api-sehatmu/"},{url:"http://localhost:8000"},{url:"http://{{base_url_production}}"},{url:"http://{{base_url}}"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"DiagnosticReport",id:"ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],status:"final",category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0074",code:"MB",display:"Microbiology"}]}],code:{coding:[{system:"http://loinc.org",code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain"}]},subject:{reference:"Patient/100000030009"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},effectiveDateTime:"2012-12-01T12:00:00+01:00",issued:"2012-12-01T12:00:00+01:00",performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],conclusionCode:[{coding:[{system:"http://snomed.info/sct",code:"2667000",display:"Absent"}]}]},info:{title:"LabMu",version:"1.0.0"},postman:{name:"DiagnosticReport - Update",description:{type:"text/plain"},url:{path:["DiagnosticReport",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},m=void 0,y={unversionedId:"sandbox/diagnostic-report-update",id:"sandbox/diagnostic-report-update",title:"DiagnosticReport - Update",description:"DiagnosticReport - Update",source:"@site/docs/sandbox/diagnostic-report-update.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/diagnostic-report-update",permalink:"/sehatmu/developer/docs/sandbox/diagnostic-report-update",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"diagnostic-report-update",title:"DiagnosticReport - Update",description:"DiagnosticReport - Update",sidebar_label:"DiagnosticReport - Update",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > DiagnosticReport"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"DiagnosticReport",id:"ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],status:"final",category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0074",code:"MB",display:"Microbiology"}]}],code:{coding:[{system:"http://loinc.org",code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain"}]},subject:{reference:"Patient/100000030009"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},effectiveDateTime:"2012-12-01T12:00:00+01:00",issued:"2012-12-01T12:00:00+01:00",performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],conclusionCode:[{coding:[{system:"http://snomed.info/sct",code:"2667000",display:"Absent"}]}]}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f058d9b4242558ac9d5c4c"}],responses:{201:{description:"Created",headers:{etag:{schema:{type:"string",example:'W/"MTY3ODMzMDQ4MDQ0NTc0MDAwMA"'}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev-ver2/fhir/DiagnosticReport/ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6/_history/MTY3ODMzMDQ4MDQ0NTc0MDAwMA"}},"last-modified":{schema:{type:"string",example:"Thu, 09 Mar 2023 02:54:40 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 09 Mar 2023 02:54:40 GMT"}},"content-length":{schema:{type:"integer",example:"1564"}},"X-Xss-Protection":{schema:{type:"string",example:"1; mode=block"}},"X-Frame-Options":{schema:{type:"string",example:"SAMEORIGIN"}},"X-Content-Type-Options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"9457cffa-785b-41b3-95e3-2a425f9e165d"}},Via:{schema:{type:"string",example:"1.1 google"}},"Strict-Transport-Security":{schema:{type:"string",example:"max-age=31536000; includeSubDomains"}},"Referrer-Policy":{schema:{type:"string",example:"strict-origin"}},"Permissions-Policy":{schema:{type:"string",example:"camera=(), microphone=(), geolocation=(), browsing-topics=()"}},"Content-Security-Policy":{schema:{type:"string",example:"default-src 'self' http: https: data: blob: 'unsafe-inline'"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{category:[{coding:[{code:"MB",display:"Microbiology",system:"http://terminology.hl7.org/CodeSystem/v2-0074"}]}],code:{coding:[{code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain",system:"http://loinc.org"}]},conclusionCode:[{coding:[{code:"2667000",display:"Absent",system:"http://snomed.info/sct"}]}],effectiveDateTime:"2012-12-01T12:00:00+01:00",encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],issued:"2012-12-01T12:00:00+01:00",meta:{lastUpdated:"2023-03-09T02:54:40.445740+00:00",versionId:"MTY3ODMzMDQ4MDQ0NTc0MDAwMA"},performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],resourceType:"DiagnosticReport",result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],status:"final",subject:{reference:"Patient/100000030009"}}}}}},description:"DiagnosticReport - Update",method:"put",path:"/DiagnosticReport/{id}",servers:[{url:"http://103.19.182.20/api-sehatmu/"},{url:"http://localhost:8000"},{url:"http://{{base_url_production}}"},{url:"http://{{base_url}}"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"DiagnosticReport",id:"ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],status:"final",category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0074",code:"MB",display:"Microbiology"}]}],code:{coding:[{system:"http://loinc.org",code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain"}]},subject:{reference:"Patient/100000030009"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},effectiveDateTime:"2012-12-01T12:00:00+01:00",issued:"2012-12-01T12:00:00+01:00",performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],conclusionCode:[{coding:[{system:"http://snomed.info/sct",code:"2667000",display:"Absent"}]}]},info:{title:"LabMu",version:"1.0.0"},postman:{name:"DiagnosticReport - Update",description:{type:"text/plain"},url:{path:["DiagnosticReport",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"DiagnosticReport - By ID",permalink:"/sehatmu/developer/docs/sandbox/diagnostic-report-by-id"},next:{title:"DiagnosticReport - PATCH",permalink:"/sehatmu/developer/docs/sandbox/diagnostic-report-patch"}},u={},g=[{value:"DiagnosticReport - Update",id:"diagnosticreport---update",level:2}],f={toc:g};function h(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"diagnosticreport---update"},"DiagnosticReport - Update"),(0,i.kt)("p",null,"DiagnosticReport - Update"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f058d9b4242558ac9d5c4c"},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Created")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"etag"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"location"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"last-modified"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"vary"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-length"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"X-Xss-Protection"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"X-Frame-Options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"X-Content-Type-Options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-request-id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Via"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Strict-Transport-Security"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Referrer-Policy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Permissions-Policy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Content-Security-Policy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Alt-Svc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "category": [\n    {\n      "coding": [\n        {\n          "code": "MB",\n          "display": "Microbiology",\n          "system": "http://terminology.hl7.org/CodeSystem/v2-0074"\n        }\n      ]\n    }\n  ],\n  "code": {\n    "coding": [\n      {\n        "code": "11477-7",\n        "display": "Microscopic observation [Identifier] in Sputum by Acid fast stain",\n        "system": "http://loinc.org"\n      }\n    ]\n  },\n  "conclusionCode": [\n    {\n      "coding": [\n        {\n          "code": "2667000",\n          "display": "Absent",\n          "system": "http://snomed.info/sct"\n        }\n      ]\n    }\n  ],\n  "effectiveDateTime": "2012-12-01T12:00:00+01:00",\n  "encounter": {\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "id": "ec63dc9a-738d-4f7b-8a4d-86ca9e621ef6",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",\n      "use": "official",\n      "value": "5234342"\n    }\n  ],\n  "issued": "2012-12-01T12:00:00+01:00",\n  "meta": {\n    "lastUpdated": "2023-03-09T02:54:40.445740+00:00",\n    "versionId": "MTY3ODMzMDQ4MDQ0NTc0MDAwMA"\n  },\n  "performer": [\n    {\n      "reference": "Practitioner/N10000001"\n    },\n    {\n      "reference": "Organization/10000004"\n    }\n  ],\n  "resourceType": "DiagnosticReport",\n  "result": [\n    {\n      "reference": "Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"\n    }\n  ],\n  "specimen": [\n    {\n      "reference": "Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"\n    }\n  ],\n  "status": "final",\n  "subject": {\n    "reference": "Patient/100000030009"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);