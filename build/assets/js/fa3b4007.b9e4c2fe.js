"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[1095],{6665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var n=a(87462),l=(a(67294),a(3905)),i=a(26389),r=a(94891),o=(a(10586),a(47507)),s=(a(24310),a(63303)),c=(a(75035),a(85162));const d={id:"allergy-intolerance-create",title:"AllergyIntolerance - Create",description:"AllergyIntolerance - Create",sidebar_label:"AllergyIntolerance - Create",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > AllergyIntolerance"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"AllergyIntolerance",identifier:[{system:"http://sys-ids.kemkes.go.id/allergy/1000004",use:"official",value:"98457729"}],clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",code:"active",display:"Active"}]},verificationStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",code:"confirmed",display:"Confirmed"}]},category:["food"],code:{coding:[{system:"http://snomed.info/sct",code:"89811004",display:"Gluten"}],text:"Alergi bahan gluten, khususnya ketika makan roti gandum"},patient:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},recordedDate:"2022-06-14T15:37:31+07:00",recorder:{reference:"Practitioner/N10000001"}}}}}},responses:{201:{description:"Created",headers:{"X-Powered-By":{schema:{type:"string",example:"Express"}},"Access-Control-Allow-Origin":{schema:{type:"string",example:"*"}},"Content-Type":{schema:{type:"string",example:"application/json; charset=utf-8"}},"Content-Length":{schema:{type:"integer",example:"1108"}},ETag:{schema:{type:"string",example:'W/"454-F9rLeQN5gMZF+h+QDuqbr8tfDRk"'}},Date:{schema:{type:"string",example:"Mon, 23 Oct 2023 08:04:18 GMT"}},Connection:{schema:{type:"string",example:"keep-alive"}},"Keep-Alive":{schema:{type:"string",example:"timeout=5"}}},content:{"application/json":{schema:{type:"object"},example:{resourceType:"AllergyIntolerance",identifier:[{system:"http://sys-ids.kemkes.go.id/allergy/1000004",use:"official",value:"98457729",_id:"6536290298e09c0a99f2a795"}],clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",code:"active",display:"Active",_id:"6536290298e09c0a99f2a796"}]},verificationStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",code:"confirmed",display:"Confirmed",_id:"6536290298e09c0a99f2a797"}]},category:["food"],code:{coding:[{system:"http://snomed.info/sct",code:"89811004",display:"Gluten",_id:"6536290298e09c0a99f2a798"}],text:"Alergi bahan gluten, khususnya ketika makan roti gandum"},patient:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},recordedDate:"2022-06-14T08:37:31.000Z",recorder:{reference:"Practitioner/N10000001"},id:"6536290298e09c0a99f2a794",timestamps:{}}}}}},description:"AllergyIntolerance - Create",method:"post",path:"/AllergyIntolerance",servers:[{url:"http://103.19.182.20/api/sehatmu/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"AllergyIntolerance",identifier:[{system:"http://sys-ids.kemkes.go.id/allergy/1000004",use:"official",value:"98457729"}],clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",code:"active",display:"Active"}]},verificationStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",code:"confirmed",display:"Confirmed"}]},category:["food"],code:{coding:[{system:"http://snomed.info/sct",code:"89811004",display:"Gluten"}],text:"Alergi bahan gluten, khususnya ketika makan roti gandum"},patient:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},recordedDate:"2022-06-14T15:37:31+07:00",recorder:{reference:"Practitioner/N10000001"}},info:{title:"LabMu",version:"1.0.0"},postman:{name:"AllergyIntolerance - Create",description:{type:"text/plain"},url:{path:["AllergyIntolerance"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},y=void 0,m={unversionedId:"sandbox/allergy-intolerance-create",id:"sandbox/allergy-intolerance-create",title:"AllergyIntolerance - Create",description:"AllergyIntolerance - Create",source:"@site/docs/sandbox/allergy-intolerance-create.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/allergy-intolerance-create",permalink:"/sehatmu/developer/docs/sandbox/allergy-intolerance-create",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"allergy-intolerance-create",title:"AllergyIntolerance - Create",description:"AllergyIntolerance - Create",sidebar_label:"AllergyIntolerance - Create",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > AllergyIntolerance"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"AllergyIntolerance",identifier:[{system:"http://sys-ids.kemkes.go.id/allergy/1000004",use:"official",value:"98457729"}],clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",code:"active",display:"Active"}]},verificationStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",code:"confirmed",display:"Confirmed"}]},category:["food"],code:{coding:[{system:"http://snomed.info/sct",code:"89811004",display:"Gluten"}],text:"Alergi bahan gluten, khususnya ketika makan roti gandum"},patient:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},recordedDate:"2022-06-14T15:37:31+07:00",recorder:{reference:"Practitioner/N10000001"}}}}}},responses:{201:{description:"Created",headers:{"X-Powered-By":{schema:{type:"string",example:"Express"}},"Access-Control-Allow-Origin":{schema:{type:"string",example:"*"}},"Content-Type":{schema:{type:"string",example:"application/json; charset=utf-8"}},"Content-Length":{schema:{type:"integer",example:"1108"}},ETag:{schema:{type:"string",example:'W/"454-F9rLeQN5gMZF+h+QDuqbr8tfDRk"'}},Date:{schema:{type:"string",example:"Mon, 23 Oct 2023 08:04:18 GMT"}},Connection:{schema:{type:"string",example:"keep-alive"}},"Keep-Alive":{schema:{type:"string",example:"timeout=5"}}},content:{"application/json":{schema:{type:"object"},example:{resourceType:"AllergyIntolerance",identifier:[{system:"http://sys-ids.kemkes.go.id/allergy/1000004",use:"official",value:"98457729",_id:"6536290298e09c0a99f2a795"}],clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",code:"active",display:"Active",_id:"6536290298e09c0a99f2a796"}]},verificationStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",code:"confirmed",display:"Confirmed",_id:"6536290298e09c0a99f2a797"}]},category:["food"],code:{coding:[{system:"http://snomed.info/sct",code:"89811004",display:"Gluten",_id:"6536290298e09c0a99f2a798"}],text:"Alergi bahan gluten, khususnya ketika makan roti gandum"},patient:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},recordedDate:"2022-06-14T08:37:31.000Z",recorder:{reference:"Practitioner/N10000001"},id:"6536290298e09c0a99f2a794",timestamps:{}}}}}},description:"AllergyIntolerance - Create",method:"post",path:"/AllergyIntolerance",servers:[{url:"http://103.19.182.20/api/sehatmu/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"AllergyIntolerance",identifier:[{system:"http://sys-ids.kemkes.go.id/allergy/1000004",use:"official",value:"98457729"}],clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",code:"active",display:"Active"}]},verificationStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",code:"confirmed",display:"Confirmed"}]},category:["food"],code:{coding:[{system:"http://snomed.info/sct",code:"89811004",display:"Gluten"}],text:"Alergi bahan gluten, khususnya ketika makan roti gandum"},patient:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},recordedDate:"2022-06-14T15:37:31+07:00",recorder:{reference:"Practitioner/N10000001"}},info:{title:"LabMu",version:"1.0.0"},postman:{name:"AllergyIntolerance - Create",description:{type:"text/plain"},url:{path:["AllergyIntolerance"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Resource > AllergyIntolerance",permalink:"/sehatmu/developer/docs/sandbox/resource-allergy-intolerance"},next:{title:"AllergyIntolerance - Search by Subject with/without Allergy Code",permalink:"/sehatmu/developer/docs/sandbox/allergy-intolerance-search-by-subject-with-without-allergy-code"}},p={},u=[{value:"AllergyIntolerance - Create",id:"allergyintolerance---create",level:2}],g={toc:u};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"allergyintolerance---create"},"AllergyIntolerance - Create"),(0,l.kt)("p",null,"AllergyIntolerance - Create"),(0,l.kt)(r.Z,{mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Request Body")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"object"))))))),(0,l.kt)("div",null,(0,l.kt)(i.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Created")),(0,l.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Response Headers")),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"X-Powered-By"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Access-Control-Allow-Origin"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Content-Type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Content-Length"),(0,l.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"ETag"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Date"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Connection"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)),(0,l.kt)("li",{className:"schemaItem"},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Keep-Alive"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")),(0,l.kt)("div",null)))),(0,l.kt)("div",null,(0,l.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(s.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("strong",null,"object")))))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "resourceType": "AllergyIntolerance",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/allergy/1000004",\n      "use": "official",\n      "value": "98457729",\n      "_id": "6536290298e09c0a99f2a795"\n    }\n  ],\n  "clinicalStatus": {\n    "coding": [\n      {\n        "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",\n        "code": "active",\n        "display": "Active",\n        "_id": "6536290298e09c0a99f2a796"\n      }\n    ]\n  },\n  "verificationStatus": {\n    "coding": [\n      {\n        "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",\n        "code": "confirmed",\n        "display": "Confirmed",\n        "_id": "6536290298e09c0a99f2a797"\n      }\n    ]\n  },\n  "category": [\n    "food"\n  ],\n  "code": {\n    "coding": [\n      {\n        "system": "http://snomed.info/sct",\n        "code": "89811004",\n        "display": "Gluten",\n        "_id": "6536290298e09c0a99f2a798"\n      }\n    ],\n    "text": "Alergi bahan gluten, khususnya ketika makan roti gandum"\n  },\n  "patient": {\n    "reference": "Patient/100000030009",\n    "display": "Budi Santoso"\n  },\n  "encounter": {\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",\n    "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"\n  },\n  "recordedDate": "2022-06-14T08:37:31.000Z",\n  "recorder": {\n    "reference": "Practitioner/N10000001"\n  },\n  "id": "6536290298e09c0a99f2a794",\n  "timestamps": {}\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);