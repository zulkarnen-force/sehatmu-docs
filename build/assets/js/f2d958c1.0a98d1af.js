"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[6545],{55925:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>y,toc:()=>g});var a=s(87462),n=(s(67294),s(3905)),i=s(26389),o=s(94891),m=s(75190),r=s(47507),l=(s(24310),s(63303)),d=(s(75035),s(85162));const c={id:"medication-patch",title:"Medication - PATCH",description:"Medication - PATCH",sidebar_label:"Medication - PATCH",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Medication"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/status",value:"active"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64ed65d27e10f158f9884bed"}],responses:{200:{description:"OK",headers:{"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY2NTEyNzg0NTE1OTMyOTAwMA"'}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1/_history/MTY2NTEyNzg0NTE1OTMyOTAwMA"}},"last-modified":{schema:{type:"string",example:"Fri, 07 Oct 2022 07:30:45 UTC"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 07 Oct 2022 07:30:45 GMT"}},"content-length":{schema:{type:"integer",example:"3643"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"fddd1e4e-595d-4aa1-8863-feb0f744c039"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{code:{coding:[{display:"Obat Kapsul TB Bintang Toedjoe",system:"http://sys-ids.kemkes.go.id/kfa"}]},extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType",valueCodeableConcept:{coding:[{code:"NC",display:"Non-compound",system:"http://terminology.kemkes.go.id/CodeSystem/medication-type"}]}}],form:{coding:[{code:"BS019",display:"Kapsul",system:"http://terminology.kemkes.go.id/CodeSystem/medication-form"}]},id:"8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",identifier:[{system:"http://sys-ids.kemkes.go.id/medication/10000004",use:"official",value:"123456789"}],ingredient:[{isActive:!0,itemCodeableConcept:{coding:[{code:"91000330",display:"Rifampin",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:150}}},{isActive:!0,itemCodeableConcept:{coding:[{code:"91000328",display:"Isoniazid",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:75}}},{isActive:!0,itemCodeableConcept:{coding:[{code:"91000329",display:"Pyrazinamide",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:400}}},{isActive:!0,itemCodeableConcept:{coding:[{code:"91000288",display:"Ethambutol",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:275}}}],manufacturer:{reference:"Organization/900001"},meta:{lastUpdated:"2022-10-07T07:30:45.159329+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Medication|4.0.1","https://fhir.kemkes.go.id/r4/StructureDefinition/Medication"],versionId:"MTY2NTEyNzg0NTE1OTMyOTAwMA"},resourceType:"Medication",status:"inactive"}}}}},description:"Medication - PATCH",method:"patch",path:"/Medication/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:[{op:"replace",path:"/status",value:"active"}],info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Medication - PATCH",description:{type:"text/plain"},url:{path:["Medication",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/sehatmu-docs",custom_edit_url:null},p=void 0,y={unversionedId:"sandbox/medication-patch",id:"sandbox/medication-patch",title:"Medication - PATCH",description:"Medication - PATCH",source:"@site/docs/sandbox/medication-patch.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/medication-patch",permalink:"/docs/sandbox/medication-patch",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"medication-patch",title:"Medication - PATCH",description:"Medication - PATCH",sidebar_label:"Medication - PATCH",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Medication"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/status",value:"active"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64ed65d27e10f158f9884bed"}],responses:{200:{description:"OK",headers:{"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY2NTEyNzg0NTE1OTMyOTAwMA"'}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1/_history/MTY2NTEyNzg0NTE1OTMyOTAwMA"}},"last-modified":{schema:{type:"string",example:"Fri, 07 Oct 2022 07:30:45 UTC"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 07 Oct 2022 07:30:45 GMT"}},"content-length":{schema:{type:"integer",example:"3643"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"fddd1e4e-595d-4aa1-8863-feb0f744c039"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{code:{coding:[{display:"Obat Kapsul TB Bintang Toedjoe",system:"http://sys-ids.kemkes.go.id/kfa"}]},extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType",valueCodeableConcept:{coding:[{code:"NC",display:"Non-compound",system:"http://terminology.kemkes.go.id/CodeSystem/medication-type"}]}}],form:{coding:[{code:"BS019",display:"Kapsul",system:"http://terminology.kemkes.go.id/CodeSystem/medication-form"}]},id:"8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",identifier:[{system:"http://sys-ids.kemkes.go.id/medication/10000004",use:"official",value:"123456789"}],ingredient:[{isActive:!0,itemCodeableConcept:{coding:[{code:"91000330",display:"Rifampin",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:150}}},{isActive:!0,itemCodeableConcept:{coding:[{code:"91000328",display:"Isoniazid",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:75}}},{isActive:!0,itemCodeableConcept:{coding:[{code:"91000329",display:"Pyrazinamide",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:400}}},{isActive:!0,itemCodeableConcept:{coding:[{code:"91000288",display:"Ethambutol",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:275}}}],manufacturer:{reference:"Organization/900001"},meta:{lastUpdated:"2022-10-07T07:30:45.159329+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Medication|4.0.1","https://fhir.kemkes.go.id/r4/StructureDefinition/Medication"],versionId:"MTY2NTEyNzg0NTE1OTMyOTAwMA"},resourceType:"Medication",status:"inactive"}}}}},description:"Medication - PATCH",method:"patch",path:"/Medication/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:[{op:"replace",path:"/status",value:"active"}],info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Medication - PATCH",description:{type:"text/plain"},url:{path:["Medication",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Medication - UPDATE",permalink:"/docs/sandbox/medication-update"},next:{title:"Resource > MedicationRequest",permalink:"/docs/sandbox/resource-medication-request"}},u={},g=[{value:"Medication - PATCH",id:"medication---patch",level:2}],h={toc:g};function k(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"medication---patch"},"Medication - PATCH"),(0,n.kt)("p",null,"Medication - PATCH"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(m.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64ed65d27e10f158f9884bed"},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(m.Z,{className:"paramsItem",param:{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},mdxType:"ParamsItem"})))),(0,n.kt)(o.Z,{mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object"))))))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Response Headers")),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-type"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"etag"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"location"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"last-modified"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"vary"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-length"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-xss-protection"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-frame-options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-content-type-options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-request-id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Via"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Alt-Svc"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object")))))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:'{\n  "code": {\n    "coding": [\n      {\n        "display": "Obat Kapsul TB Bintang Toedjoe",\n        "system": "http://sys-ids.kemkes.go.id/kfa"\n      }\n    ]\n  },\n  "extension": [\n    {\n      "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType",\n      "valueCodeableConcept": {\n        "coding": [\n          {\n            "code": "NC",\n            "display": "Non-compound",\n            "system": "http://terminology.kemkes.go.id/CodeSystem/medication-type"\n          }\n        ]\n      }\n    }\n  ],\n  "form": {\n    "coding": [\n      {\n        "code": "BS019",\n        "display": "Kapsul",\n        "system": "http://terminology.kemkes.go.id/CodeSystem/medication-form"\n      }\n    ]\n  },\n  "id": "8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/medication/10000004",\n      "use": "official",\n      "value": "123456789"\n    }\n  ],\n  "ingredient": [\n    {\n      "isActive": true,\n      "itemCodeableConcept": {\n        "coding": [\n          {\n            "code": "91000330",\n            "display": "Rifampin",\n            "system": "http://sys-ids.kemkes.go.id/kfa"\n          }\n        ]\n      },\n      "strength": {\n        "denominator": {\n          "code": "TAB",\n          "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n          "value": 1\n        },\n        "numerator": {\n          "code": "mg",\n          "system": "http://unitsofmeasure.org",\n          "value": 150\n        }\n      }\n    },\n    {\n      "isActive": true,\n      "itemCodeableConcept": {\n        "coding": [\n          {\n            "code": "91000328",\n            "display": "Isoniazid",\n            "system": "http://sys-ids.kemkes.go.id/kfa"\n          }\n        ]\n      },\n      "strength": {\n        "denominator": {\n          "code": "TAB",\n          "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n          "value": 1\n        },\n        "numerator": {\n          "code": "mg",\n          "system": "http://unitsofmeasure.org",\n          "value": 75\n        }\n      }\n    },\n    {\n      "isActive": true,\n      "itemCodeableConcept": {\n        "coding": [\n          {\n            "code": "91000329",\n            "display": "Pyrazinamide",\n            "system": "http://sys-ids.kemkes.go.id/kfa"\n          }\n        ]\n      },\n      "strength": {\n        "denominator": {\n          "code": "TAB",\n          "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n          "value": 1\n        },\n        "numerator": {\n          "code": "mg",\n          "system": "http://unitsofmeasure.org",\n          "value": 400\n        }\n      }\n    },\n    {\n      "isActive": true,\n      "itemCodeableConcept": {\n        "coding": [\n          {\n            "code": "91000288",\n            "display": "Ethambutol",\n            "system": "http://sys-ids.kemkes.go.id/kfa"\n          }\n        ]\n      },\n      "strength": {\n        "denominator": {\n          "code": "TAB",\n          "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n          "value": 1\n        },\n        "numerator": {\n          "code": "mg",\n          "system": "http://unitsofmeasure.org",\n          "value": 275\n        }\n      }\n    }\n  ],\n  "manufacturer": {\n    "reference": "Organization/900001"\n  },\n  "meta": {\n    "lastUpdated": "2022-10-07T07:30:45.159329+00:00",\n    "profile": [\n      "https://fhir.kemkes.go.id/r4/StructureDefinition/Medication|4.0.1",\n      "https://fhir.kemkes.go.id/r4/StructureDefinition/Medication"\n    ],\n    "versionId": "MTY2NTEyNzg0NTE1OTMyOTAwMA"\n  },\n  "resourceType": "Medication",\n  "status": "inactive"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);