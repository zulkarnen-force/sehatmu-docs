"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[5389],{34950:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var s=a(87462),n=(a(67294),a(3905)),i=a(26389),o=a(94891),r=a(10586),l=a(47507),d=(a(24310),a(63303)),p=(a(75035),a(85162));const m={id:"medication-dispense-by-id",title:"MedicationDispense - By ID",description:"MedicationDispense - By ID",sidebar_label:"MedicationDispense - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > MedicationDispense"],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f1a1f6fe6af4a3d7757d19"}],responses:{200:{description:"OK",headers:{"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Thu, 29 Sep 2022 00:27:29 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2NDQxMTI0OTk2ODU3MjAwMA"'}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 29 Sep 2022 00:27:47 GMT"}},"content-length":{schema:{type:"integer",example:"2663"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"93ed6305-dc36-4103-9a9e-3376faf162df"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{authorizingPrescription:[{reference:"MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838"}],category:{coding:[{code:"outpatient",display:"Outpatient",system:"http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category"}]},context:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},daysSupply:{code:"d",system:"http://unitsofmeasure.org",unit:"Day",value:30},dosageInstruction:[{doseAndRate:[{doseQuantity:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",unit:"TAB",value:4},type:{coding:[{code:"ordered",display:"Ordered",system:"http://terminology.hl7.org/CodeSystem/dose-rate-type"}]}}],sequence:1,text:"Diminum 4 tablet sekali dalam sehari",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}}}],id:"71e27aa4-89d1-49a0-80ab-20e970a939cc",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],location:{display:"Apotek RSUD Jati Asih",reference:"Location/52e135eb-1956-4871-ba13-e833e662484d"},medicationReference:{display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)",reference:"Medication/2b78a453-dd36-4d5f-8264-d575e3321a8b"},meta:{lastUpdated:"2022-09-29T00:27:29.968572+00:00",versionId:"MTY2NDQxMTI0OTk2ODU3MjAwMA"},performer:[{actor:{display:"John Miller",reference:"Practitioner/N10000003"}}],quantity:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:120},resourceType:"MedicationDispense",status:"in-progress",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},whenHandedOver:"2022-01-15T16:20:00Z",whenPrepared:"2022-01-15T10:20:00Z"}}}}},description:"MedicationDispense - By ID",method:"get",path:"/MedicationDispense/{id}",servers:[{url:"http://103.19.182.20/api-sehatmu/"},{url:"http://localhost:8000"},{url:"http://{{base_url_production}}"},{url:"http://{{base_url}}"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"LabMu",version:"1.0.0"},postman:{name:"MedicationDispense - By ID",description:{type:"text/plain"},url:{path:["MedicationDispense",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},c=void 0,y={unversionedId:"sandbox/medication-dispense-by-id",id:"sandbox/medication-dispense-by-id",title:"MedicationDispense - By ID",description:"MedicationDispense - By ID",source:"@site/docs/sandbox/medication-dispense-by-id.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/medication-dispense-by-id",permalink:"/sehatmu/developer/docs/sandbox/medication-dispense-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"medication-dispense-by-id",title:"MedicationDispense - By ID",description:"MedicationDispense - By ID",sidebar_label:"MedicationDispense - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > MedicationDispense"],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f1a1f6fe6af4a3d7757d19"}],responses:{200:{description:"OK",headers:{"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Thu, 29 Sep 2022 00:27:29 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2NDQxMTI0OTk2ODU3MjAwMA"'}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 29 Sep 2022 00:27:47 GMT"}},"content-length":{schema:{type:"integer",example:"2663"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"93ed6305-dc36-4103-9a9e-3376faf162df"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{authorizingPrescription:[{reference:"MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838"}],category:{coding:[{code:"outpatient",display:"Outpatient",system:"http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category"}]},context:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},daysSupply:{code:"d",system:"http://unitsofmeasure.org",unit:"Day",value:30},dosageInstruction:[{doseAndRate:[{doseQuantity:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",unit:"TAB",value:4},type:{coding:[{code:"ordered",display:"Ordered",system:"http://terminology.hl7.org/CodeSystem/dose-rate-type"}]}}],sequence:1,text:"Diminum 4 tablet sekali dalam sehari",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}}}],id:"71e27aa4-89d1-49a0-80ab-20e970a939cc",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],location:{display:"Apotek RSUD Jati Asih",reference:"Location/52e135eb-1956-4871-ba13-e833e662484d"},medicationReference:{display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)",reference:"Medication/2b78a453-dd36-4d5f-8264-d575e3321a8b"},meta:{lastUpdated:"2022-09-29T00:27:29.968572+00:00",versionId:"MTY2NDQxMTI0OTk2ODU3MjAwMA"},performer:[{actor:{display:"John Miller",reference:"Practitioner/N10000003"}}],quantity:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:120},resourceType:"MedicationDispense",status:"in-progress",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},whenHandedOver:"2022-01-15T16:20:00Z",whenPrepared:"2022-01-15T10:20:00Z"}}}}},description:"MedicationDispense - By ID",method:"get",path:"/MedicationDispense/{id}",servers:[{url:"http://103.19.182.20/api-sehatmu/"},{url:"http://localhost:8000"},{url:"http://{{base_url_production}}"},{url:"http://{{base_url}}"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"LabMu",version:"1.0.0"},postman:{name:"MedicationDispense - By ID",description:{type:"text/plain"},url:{path:["MedicationDispense",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"MedicationDispense - Search by Subject and Encounter",permalink:"/sehatmu/developer/docs/sandbox/medication-dispense-search-by-subject-and-encounter"},next:{title:"MedicationDispense - UPDATE",permalink:"/sehatmu/developer/docs/sandbox/medication-dispense-update"}},u={},h=[{value:"MedicationDispense - By ID",id:"medicationdispense---by-id",level:2}],g={toc:h};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"medicationdispense---by-id"},"MedicationDispense - By ID"),(0,n.kt)("p",null,"MedicationDispense - By ID"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f1a1f6fe6af4a3d7757d19"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Response Headers")),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-type"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"last-modified"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"etag"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"vary"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-length"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-xss-protection"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-frame-options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-content-type-options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-request-id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Via"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Alt-Svc"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object")))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "authorizingPrescription": [\n    {\n      "reference": "MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838"\n    }\n  ],\n  "category": {\n    "coding": [\n      {\n        "code": "outpatient",\n        "display": "Outpatient",\n        "system": "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category"\n      }\n    ]\n  },\n  "context": {\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "daysSupply": {\n    "code": "d",\n    "system": "http://unitsofmeasure.org",\n    "unit": "Day",\n    "value": 30\n  },\n  "dosageInstruction": [\n    {\n      "doseAndRate": [\n        {\n          "doseQuantity": {\n            "code": "TAB",\n            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n            "unit": "TAB",\n            "value": 4\n          },\n          "type": {\n            "coding": [\n              {\n                "code": "ordered",\n                "display": "Ordered",\n                "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type"\n              }\n            ]\n          }\n        }\n      ],\n      "sequence": 1,\n      "text": "Diminum 4 tablet sekali dalam sehari",\n      "timing": {\n        "repeat": {\n          "frequency": 1,\n          "period": 1,\n          "periodUnit": "d"\n        }\n      }\n    }\n  ],\n  "id": "71e27aa4-89d1-49a0-80ab-20e970a939cc",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/prescription/10000004",\n      "use": "official",\n      "value": "123456788"\n    },\n    {\n      "system": "http://sys-ids.kemkes.go.id/prescription-item/10000004",\n      "use": "official",\n      "value": "123456788-1"\n    }\n  ],\n  "location": {\n    "display": "Apotek RSUD Jati Asih",\n    "reference": "Location/52e135eb-1956-4871-ba13-e833e662484d"\n  },\n  "medicationReference": {\n    "display": "Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)",\n    "reference": "Medication/2b78a453-dd36-4d5f-8264-d575e3321a8b"\n  },\n  "meta": {\n    "lastUpdated": "2022-09-29T00:27:29.968572+00:00",\n    "versionId": "MTY2NDQxMTI0OTk2ODU3MjAwMA"\n  },\n  "performer": [\n    {\n      "actor": {\n        "display": "John Miller",\n        "reference": "Practitioner/N10000003"\n      }\n    }\n  ],\n  "quantity": {\n    "code": "TAB",\n    "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n    "value": 120\n  },\n  "resourceType": "MedicationDispense",\n  "status": "in-progress",\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  },\n  "whenHandedOver": "2022-01-15T16:20:00Z",\n  "whenPrepared": "2022-01-15T10:20:00Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);