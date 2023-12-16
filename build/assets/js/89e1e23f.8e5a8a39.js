"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[5505],{41477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var s=n(87462),i=(n(67294),n(3905)),o=n(26389),a=n(94891),r=(n(75190),n(47507)),c=(n(24310),n(63303)),l=(n(75035),n(85162));const p={id:"diagnostic-report-create",title:"DiagnosticReport - Create",description:"DiagnosticReport - Create",sidebar_label:"DiagnosticReport - Create",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > DiagnosticReport"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"DiagnosticReport",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],status:"final",category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0074",code:"MB",display:"Microbiology"}]}],code:{coding:[{system:"http://loinc.org",code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain"}]},subject:{reference:"Patient/100000030009"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},effectiveDateTime:"2012-12-01T12:00:00+01:00",issued:"2012-12-01T12:00:00+01:00",performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],conclusionCode:[{coding:[{system:"http://snomed.info/sct",code:"260347006",display:"+"}]}]}}}}},responses:{201:{description:"Created",headers:{"last-modified":{schema:{type:"string",example:"Tue, 06 Sep 2022 03:26:41 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/DiagnosticReport/9b08ba9f-4d82-4d02-be6b-9e9bd6b48c7a/_history/MTY2MjQzNDgwMTUzNDU1NTAwMA"}},etag:{schema:{type:"string",example:'W/"MTY2MjQzNDgwMTUzNDU1NTAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Tue, 06 Sep 2022 03:26:41 GMT"}},"content-length":{schema:{type:"integer",example:"1665"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"4a57b0ff-7a84-4e7b-8f79-9bde771f8ccf"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{category:[{coding:[{code:"MB",display:"Microbiology",system:"http://terminology.hl7.org/CodeSystem/v2-0074"}]}],code:{coding:[{code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain",system:"http://loinc.org"}]},conclusionCode:[{coding:[{code:"260347006",display:"+",system:"http://snomed.info/sct"}]}],effectiveDateTime:"2012-12-01T12:00:00+01:00",encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"9b08ba9f-4d82-4d02-be6b-9e9bd6b48c7a",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],issued:"2012-12-01T12:00:00+01:00",meta:{lastUpdated:"2022-09-06T03:26:41.534555+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/DiagnosticReport|4.0.1"],versionId:"MTY2MjQzNDgwMTUzNDU1NTAwMA"},performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],resourceType:"DiagnosticReport",result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],status:"final",subject:{reference:"Patient/100000030009"}}}}}},description:"DiagnosticReport - Create",method:"post",path:"/DiagnosticReport",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],jsonRequestBodyExample:{resourceType:"DiagnosticReport",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],status:"final",category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0074",code:"MB",display:"Microbiology"}]}],code:{coding:[{system:"http://loinc.org",code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain"}]},subject:{reference:"Patient/100000030009"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},effectiveDateTime:"2012-12-01T12:00:00+01:00",issued:"2012-12-01T12:00:00+01:00",performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],conclusionCode:[{coding:[{system:"http://snomed.info/sct",code:"260347006",display:"+"}]}]},info:{title:"SehatMu On Going",version:"1.0.0"},postman:{name:"DiagnosticReport - Create",description:{type:"text/plain"},url:{path:["DiagnosticReport"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/ongoing/sehatmu-on-going",custom_edit_url:null},d=void 0,m={unversionedId:"sandbox/ongoing/diagnostic-report-create",id:"sandbox/ongoing/diagnostic-report-create",title:"DiagnosticReport - Create",description:"DiagnosticReport - Create",source:"@site/docs/sandbox/ongoing/diagnostic-report-create.api.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/diagnostic-report-create",permalink:"/docs/sandbox/ongoing/diagnostic-report-create",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"diagnostic-report-create",title:"DiagnosticReport - Create",description:"DiagnosticReport - Create",sidebar_label:"DiagnosticReport - Create",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > DiagnosticReport"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"DiagnosticReport",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],status:"final",category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0074",code:"MB",display:"Microbiology"}]}],code:{coding:[{system:"http://loinc.org",code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain"}]},subject:{reference:"Patient/100000030009"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},effectiveDateTime:"2012-12-01T12:00:00+01:00",issued:"2012-12-01T12:00:00+01:00",performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],conclusionCode:[{coding:[{system:"http://snomed.info/sct",code:"260347006",display:"+"}]}]}}}}},responses:{201:{description:"Created",headers:{"last-modified":{schema:{type:"string",example:"Tue, 06 Sep 2022 03:26:41 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/DiagnosticReport/9b08ba9f-4d82-4d02-be6b-9e9bd6b48c7a/_history/MTY2MjQzNDgwMTUzNDU1NTAwMA"}},etag:{schema:{type:"string",example:'W/"MTY2MjQzNDgwMTUzNDU1NTAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Tue, 06 Sep 2022 03:26:41 GMT"}},"content-length":{schema:{type:"integer",example:"1665"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"4a57b0ff-7a84-4e7b-8f79-9bde771f8ccf"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{category:[{coding:[{code:"MB",display:"Microbiology",system:"http://terminology.hl7.org/CodeSystem/v2-0074"}]}],code:{coding:[{code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain",system:"http://loinc.org"}]},conclusionCode:[{coding:[{code:"260347006",display:"+",system:"http://snomed.info/sct"}]}],effectiveDateTime:"2012-12-01T12:00:00+01:00",encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"9b08ba9f-4d82-4d02-be6b-9e9bd6b48c7a",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],issued:"2012-12-01T12:00:00+01:00",meta:{lastUpdated:"2022-09-06T03:26:41.534555+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/DiagnosticReport|4.0.1"],versionId:"MTY2MjQzNDgwMTUzNDU1NTAwMA"},performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],resourceType:"DiagnosticReport",result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],status:"final",subject:{reference:"Patient/100000030009"}}}}}},description:"DiagnosticReport - Create",method:"post",path:"/DiagnosticReport",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],jsonRequestBodyExample:{resourceType:"DiagnosticReport",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],status:"final",category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0074",code:"MB",display:"Microbiology"}]}],code:{coding:[{system:"http://loinc.org",code:"11477-7",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain"}]},subject:{reference:"Patient/100000030009"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},effectiveDateTime:"2012-12-01T12:00:00+01:00",issued:"2012-12-01T12:00:00+01:00",performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],result:[{reference:"Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"}],specimen:[{reference:"Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"}],conclusionCode:[{coding:[{system:"http://snomed.info/sct",code:"260347006",display:"+"}]}]},info:{title:"SehatMu On Going",version:"1.0.0"},postman:{name:"DiagnosticReport - Create",description:{type:"text/plain"},url:{path:["DiagnosticReport"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/ongoing/sehatmu-on-going",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Resource > DiagnosticReport",permalink:"/docs/sandbox/ongoing/resource-diagnostic-report"},next:{title:"DiagnosticReport - By Specimen & Subject",permalink:"/docs/sandbox/ongoing/diagnostic-report-by-specimen-subject"}},g={},y=[{value:"DiagnosticReport - Create",id:"diagnosticreport---create",level:2}],u={toc:y};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"diagnosticreport---create"},"DiagnosticReport - Create"),(0,i.kt)("p",null,"DiagnosticReport - Create"),(0,i.kt)(a.Z,{mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Created")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"last-modified"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"location"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"etag"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"vary"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-length"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-xss-protection"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-frame-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-content-type-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-request-id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Via"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Alt-Svc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "category": [\n    {\n      "coding": [\n        {\n          "code": "MB",\n          "display": "Microbiology",\n          "system": "http://terminology.hl7.org/CodeSystem/v2-0074"\n        }\n      ]\n    }\n  ],\n  "code": {\n    "coding": [\n      {\n        "code": "11477-7",\n        "display": "Microscopic observation [Identifier] in Sputum by Acid fast stain",\n        "system": "http://loinc.org"\n      }\n    ]\n  },\n  "conclusionCode": [\n    {\n      "coding": [\n        {\n          "code": "260347006",\n          "display": "+",\n          "system": "http://snomed.info/sct"\n        }\n      ]\n    }\n  ],\n  "effectiveDateTime": "2012-12-01T12:00:00+01:00",\n  "encounter": {\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "id": "9b08ba9f-4d82-4d02-be6b-9e9bd6b48c7a",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",\n      "use": "official",\n      "value": "5234342"\n    }\n  ],\n  "issued": "2012-12-01T12:00:00+01:00",\n  "meta": {\n    "lastUpdated": "2022-09-06T03:26:41.534555+00:00",\n    "profile": [\n      "https://fhir.kemkes.go.id/r4/StructureDefinition/DiagnosticReport|4.0.1"\n    ],\n    "versionId": "MTY2MjQzNDgwMTUzNDU1NTAwMA"\n  },\n  "performer": [\n    {\n      "reference": "Practitioner/N10000001"\n    },\n    {\n      "reference": "Organization/10000004"\n    }\n  ],\n  "resourceType": "DiagnosticReport",\n  "result": [\n    {\n      "reference": "Observation/dc0b1b9c-d2c8-4830-b8bb-d73c68174f02"\n    }\n  ],\n  "specimen": [\n    {\n      "reference": "Specimen/3095e36e-1624-487e-9ee4-737387e7b55f"\n    }\n  ],\n  "status": "final",\n  "subject": {\n    "reference": "Patient/100000030009"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);