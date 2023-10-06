"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[1095],{6665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var n=a(87462),l=(a(67294),a(3905)),s=a(26389),i=a(94891),o=(a(10586),a(47507)),r=(a(24310),a(63303)),c=(a(75035),a(85162));const d={id:"allergy-intolerance-create",title:"AllergyIntolerance - Create",description:"AllergyIntolerance - Create",sidebar_label:"AllergyIntolerance - Create",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > AllergyIntolerance"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"AllergyIntolerance",identifier:[{system:"http://sys-ids.kemkes.go.id/allergy/1000004",use:"official",value:"98457729"}],clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",code:"active",display:"Active"}]},verificationStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",code:"confirmed",display:"Confirmed"}]},category:["food"],code:{coding:[{system:"http://snomed.info/sct",code:"89811004",display:"Gluten"}],text:"Alergi bahan gluten, khususnya ketika makan roti gandum"},patient:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},recordedDate:"2022-06-14T15:37:31+07:00",recorder:{reference:"Practitioner/N10000001"}}}}}},responses:{201:{description:"Created",headers:{"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Mon, 03 Oct 2022 00:57:04 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/AllergyIntolerance/3feb260d-8688-4394-b5bc-ff25277e0021/_history/MTY2NDc1ODYyNDMyNTUwNTAwMA"}},etag:{schema:{type:"string",example:'W/"MTY2NDc1ODYyNDMyNTUwNTAwMA"'}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Mon, 03 Oct 2022 00:57:04 GMT"}},"content-length":{schema:{type:"integer",example:"1412"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"e65c024a-dffc-4d2e-9506-2999a82d5c37"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{category:["food"],clinicalStatus:{coding:[{code:"active",display:"Active",system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical"}]},code:{coding:[{code:"89811004",display:"Gluten (substance)",system:"http://snomed.info/sct"}],text:"Alergi bahan gluten, khususnya ketika makan roti gandum"},encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"3feb260d-8688-4394-b5bc-ff25277e0021",identifier:[{system:"http://sys-ids.kemkes.go.id/allergy/1000004",use:"official",value:"98457729"}],meta:{lastUpdated:"2022-10-03T00:57:04.325505+00:00",versionId:"MTY2NDc1ODYyNDMyNTUwNTAwMA"},patient:{display:"Budi Santoso",reference:"Patient/100000030009"},recordedDate:"2022-06-14T15:37:31+07:00",recorder:{reference:"Practitioner/N10000001"},resourceType:"AllergyIntolerance",verificationStatus:{coding:[{code:"confirmed",display:"Confirmed",system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification"}]}}}}}},description:"AllergyIntolerance - Create",method:"post",path:"/AllergyIntolerance",servers:[{url:"http://103.19.182.20/api-sehatmu/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"AllergyIntolerance",identifier:[{system:"http://sys-ids.kemkes.go.id/allergy/1000004",use:"official",value:"98457729"}],clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",code:"active",display:"Active"}]},verificationStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",code:"confirmed",display:"Confirmed"}]},category:["food"],code:{coding:[{system:"http://snomed.info/sct",code:"89811004",display:"Gluten"}],text:"Alergi bahan gluten, khususnya ketika makan roti gandum"},patient:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},recordedDate:"2022-06-14T15:37:31+07:00",recorder:{reference:"Practitioner/N10000001"}},info:{title:"LabMu",version:"1.0.0"},postman:{name:"AllergyIntolerance - Create",description:{type:"text/plain"},url:{path:["AllergyIntolerance"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},y=void 0,m={unversionedId:"sandbox/allergy-intolerance-create",id:"sandbox/allergy-intolerance-create",title:"AllergyIntolerance - Create",description:"AllergyIntolerance - Create",source:"@site/docs/sandbox/allergy-intolerance-create.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/allergy-intolerance-create",permalink:"/sehatmu/developer/docs/sandbox/allergy-intolerance-create",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"allergy-intolerance-create",title:"AllergyIntolerance - Create",description:"AllergyIntolerance - Create",sidebar_label:"AllergyIntolerance - Create",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > AllergyIntolerance"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"AllergyIntolerance",identifier:[{system:"http://sys-ids.kemkes.go.id/allergy/1000004",use:"official",value:"98457729"}],clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",code:"active",display:"Active"}]},verificationStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",code:"confirmed",display:"Confirmed"}]},category:["food"],code:{coding:[{system:"http://snomed.info/sct",code:"89811004",display:"Gluten"}],text:"Alergi bahan gluten, khususnya ketika makan roti gandum"},patient:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},recordedDate:"2022-06-14T15:37:31+07:00",recorder:{reference:"Practitioner/N10000001"}}}}}},responses:{201:{description:"Created",headers:{"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Mon, 03 Oct 2022 00:57:04 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/AllergyIntolerance/3feb260d-8688-4394-b5bc-ff25277e0021/_history/MTY2NDc1ODYyNDMyNTUwNTAwMA"}},etag:{schema:{type:"string",example:'W/"MTY2NDc1ODYyNDMyNTUwNTAwMA"'}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Mon, 03 Oct 2022 00:57:04 GMT"}},"content-length":{schema:{type:"integer",example:"1412"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"e65c024a-dffc-4d2e-9506-2999a82d5c37"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{category:["food"],clinicalStatus:{coding:[{code:"active",display:"Active",system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical"}]},code:{coding:[{code:"89811004",display:"Gluten (substance)",system:"http://snomed.info/sct"}],text:"Alergi bahan gluten, khususnya ketika makan roti gandum"},encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"3feb260d-8688-4394-b5bc-ff25277e0021",identifier:[{system:"http://sys-ids.kemkes.go.id/allergy/1000004",use:"official",value:"98457729"}],meta:{lastUpdated:"2022-10-03T00:57:04.325505+00:00",versionId:"MTY2NDc1ODYyNDMyNTUwNTAwMA"},patient:{display:"Budi Santoso",reference:"Patient/100000030009"},recordedDate:"2022-06-14T15:37:31+07:00",recorder:{reference:"Practitioner/N10000001"},resourceType:"AllergyIntolerance",verificationStatus:{coding:[{code:"confirmed",display:"Confirmed",system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification"}]}}}}}},description:"AllergyIntolerance - Create",method:"post",path:"/AllergyIntolerance",servers:[{url:"http://103.19.182.20/api-sehatmu/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"AllergyIntolerance",identifier:[{system:"http://sys-ids.kemkes.go.id/allergy/1000004",use:"official",value:"98457729"}],clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",code:"active",display:"Active"}]},verificationStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",code:"confirmed",display:"Confirmed"}]},category:["food"],code:{coding:[{system:"http://snomed.info/sct",code:"89811004",display:"Gluten"}],text:"Alergi bahan gluten, khususnya ketika makan roti gandum"},patient:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},recordedDate:"2022-06-14T15:37:31+07:00",recorder:{reference:"Practitioner/N10000001"}},info:{title:"LabMu",version:"1.0.0"},postman:{name:"AllergyIntolerance - Create",description:{type:"text/plain"},url:{path:["AllergyIntolerance"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Resource > AllergyIntolerance",permalink:"/sehatmu/developer/docs/sandbox/resource-allergy-intolerance"},next:{title:"AllergyIntolerance - Search by Subject with/without Allergy Code",permalink:"/sehatmu/developer/docs/sandbox/allergy-intolerance-search-by-subject-with-without-allergy-code"}},p={},u=[{value:"AllergyIntolerance - Create",id:"allergyintolerance---create",level:2}],g={toc:u};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"allergyintolerance---create"},"AllergyIntolerance - Create"),(0,l.kt)("p",null,"AllergyIntolerance - Create"),(0,l.kt)(i.Z,{mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Request Body")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"object"))))))),(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Created")),(0,l.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Response Headers")),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"content-type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"last-modified"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"location"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"etag"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"vary"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"date"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"content-length"),(0,l.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"x-xss-protection"),(0,l.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"x-frame-options"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"x-content-type-options"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"x-request-id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Via"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Alt-Svc"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)))),(0,l.kt)("div",null,(0,l.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"object")))))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "category": [\n    "food"\n  ],\n  "clinicalStatus": {\n    "coding": [\n      {\n        "code": "active",\n        "display": "Active",\n        "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical"\n      }\n    ]\n  },\n  "code": {\n    "coding": [\n      {\n        "code": "89811004",\n        "display": "Gluten (substance)",\n        "system": "http://snomed.info/sct"\n      }\n    ],\n    "text": "Alergi bahan gluten, khususnya ketika makan roti gandum"\n  },\n  "encounter": {\n    "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "id": "3feb260d-8688-4394-b5bc-ff25277e0021",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/allergy/1000004",\n      "use": "official",\n      "value": "98457729"\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2022-10-03T00:57:04.325505+00:00",\n    "versionId": "MTY2NDc1ODYyNDMyNTUwNTAwMA"\n  },\n  "patient": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  },\n  "recordedDate": "2022-06-14T15:37:31+07:00",\n  "recorder": {\n    "reference": "Practitioner/N10000001"\n  },\n  "resourceType": "AllergyIntolerance",\n  "verificationStatus": {\n    "coding": [\n      {\n        "code": "confirmed",\n        "display": "Confirmed",\n        "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);