"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[2747],{29499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>y,toc:()=>g});var i=n(87462),a=(n(67294),n(3905)),s=n(26389),o=n(94891),d=n(75190),l=n(47507),c=(n(24310),n(63303)),r=(n(75035),n(85162));const p={id:"condition-update",title:"Condition - Update",description:"Condition - Update",sidebar_label:"Condition - Update",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Condition"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Condition",id:"f1369adf-26f6-47a5-90f2-ce08442639aa",clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/condition-clinical",code:"remission",display:"Remission"}]},category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/condition-category",code:"encounter-diagnosis",display:"Encounter Diagnosis"}]}],code:{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"K35.8",display:"Acute appendicitis, other and unspecified"}]},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/1a0951f7-c99e-4b54-9207-29709483895d",display:"Kunjungan Budi Santoso di hari Selasa, 17 Juni 2022"}}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"asdasdasd"}],responses:{200:{description:"OK",headers:{location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Condition/f1369adf-26f6-47a5-90f2-ce08442639aa/_history/MTY2NDc2ODI4Mzg3NDM4OTAwMA"}},"last-modified":{schema:{type:"string",example:"Mon, 03 Oct 2022 03:38:03 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2NDc2ODI4Mzg3NDM4OTAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Mon, 03 Oct 2022 03:38:03 GMT"}},"content-length":{schema:{type:"integer",example:"1089"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"a455e8e9-f835-463b-9620-c31570f5a708"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{category:[{coding:[{code:"encounter-diagnosis",display:"Encounter Diagnosis",system:"http://terminology.hl7.org/CodeSystem/condition-category"}]}],clinicalStatus:{coding:[{code:"remission",display:"Remission",system:"http://terminology.hl7.org/CodeSystem/condition-clinical"}]},code:{coding:[{code:"K35.8",display:"Acute appendicitis, other and unspecified",system:"http://hl7.org/fhir/sid/icd-10"}]},encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/1a0951f7-c99e-4b54-9207-29709483895d"},id:"f1369adf-26f6-47a5-90f2-ce08442639aa",meta:{lastUpdated:"2022-10-03T03:38:03.874389+00:00",versionId:"MTY2NDc2ODI4Mzg3NDM4OTAwMA"},resourceType:"Condition",subject:{display:"Budi Santoso",reference:"Patient/100000030009"}}}}}},description:"Condition - Update",method:"put",path:"/Condition/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Condition",id:"f1369adf-26f6-47a5-90f2-ce08442639aa",clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/condition-clinical",code:"remission",display:"Remission"}]},category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/condition-category",code:"encounter-diagnosis",display:"Encounter Diagnosis"}]}],code:{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"K35.8",display:"Acute appendicitis, other and unspecified"}]},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/1a0951f7-c99e-4b54-9207-29709483895d",display:"Kunjungan Budi Santoso di hari Selasa, 17 Juni 2022"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Condition - Update",description:{type:"text/plain"},url:{path:["Condition",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},m=void 0,y={unversionedId:"sandbox/ongoing/condition-update",id:"sandbox/ongoing/condition-update",title:"Condition - Update",description:"Condition - Update",source:"@site/docs/sandbox/ongoing/condition-update.api.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/condition-update",permalink:"/docs/sandbox/ongoing/condition-update",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"condition-update",title:"Condition - Update",description:"Condition - Update",sidebar_label:"Condition - Update",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Condition"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Condition",id:"f1369adf-26f6-47a5-90f2-ce08442639aa",clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/condition-clinical",code:"remission",display:"Remission"}]},category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/condition-category",code:"encounter-diagnosis",display:"Encounter Diagnosis"}]}],code:{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"K35.8",display:"Acute appendicitis, other and unspecified"}]},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/1a0951f7-c99e-4b54-9207-29709483895d",display:"Kunjungan Budi Santoso di hari Selasa, 17 Juni 2022"}}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"asdasdasd"}],responses:{200:{description:"OK",headers:{location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Condition/f1369adf-26f6-47a5-90f2-ce08442639aa/_history/MTY2NDc2ODI4Mzg3NDM4OTAwMA"}},"last-modified":{schema:{type:"string",example:"Mon, 03 Oct 2022 03:38:03 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2NDc2ODI4Mzg3NDM4OTAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Mon, 03 Oct 2022 03:38:03 GMT"}},"content-length":{schema:{type:"integer",example:"1089"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"a455e8e9-f835-463b-9620-c31570f5a708"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{category:[{coding:[{code:"encounter-diagnosis",display:"Encounter Diagnosis",system:"http://terminology.hl7.org/CodeSystem/condition-category"}]}],clinicalStatus:{coding:[{code:"remission",display:"Remission",system:"http://terminology.hl7.org/CodeSystem/condition-clinical"}]},code:{coding:[{code:"K35.8",display:"Acute appendicitis, other and unspecified",system:"http://hl7.org/fhir/sid/icd-10"}]},encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/1a0951f7-c99e-4b54-9207-29709483895d"},id:"f1369adf-26f6-47a5-90f2-ce08442639aa",meta:{lastUpdated:"2022-10-03T03:38:03.874389+00:00",versionId:"MTY2NDc2ODI4Mzg3NDM4OTAwMA"},resourceType:"Condition",subject:{display:"Budi Santoso",reference:"Patient/100000030009"}}}}}},description:"Condition - Update",method:"put",path:"/Condition/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Condition",id:"f1369adf-26f6-47a5-90f2-ce08442639aa",clinicalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/condition-clinical",code:"remission",display:"Remission"}]},category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/condition-category",code:"encounter-diagnosis",display:"Encounter Diagnosis"}]}],code:{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"K35.8",display:"Acute appendicitis, other and unspecified"}]},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/1a0951f7-c99e-4b54-9207-29709483895d",display:"Kunjungan Budi Santoso di hari Selasa, 17 Juni 2022"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Condition - Update",description:{type:"text/plain"},url:{path:["Condition",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Condition - By ID",permalink:"/docs/sandbox/ongoing/condition-by-id"},next:{title:"Condition - Patch",permalink:"/docs/sandbox/ongoing/condition-patch"}},u={},g=[{value:"Condition - Update",id:"condition---update",level:2}],h={toc:g};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"condition---update"},"Condition - Update"),(0,a.kt)("p",null,"Condition - Update"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(d.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"asdasdasd"},mdxType:"ParamsItem"})))),(0,a.kt)(o.Z,{mdxType:"MimeTabs"},(0,a.kt)(r.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",null,(0,a.kt)("strong",null,"object"))))))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(r.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"OK")),(0,a.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Response Headers")),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"location"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")),(0,a.kt)("div",null)),(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"last-modified"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")),(0,a.kt)("div",null)),(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"etag"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")),(0,a.kt)("div",null)),(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"content-type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")),(0,a.kt)("div",null)),(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"vary"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")),(0,a.kt)("div",null)),(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")),(0,a.kt)("div",null)),(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"content-length"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,a.kt)("div",null)),(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"x-xss-protection"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,a.kt)("div",null)),(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"x-frame-options"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")),(0,a.kt)("div",null)),(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"x-content-type-options"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")),(0,a.kt)("div",null)),(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"x-request-id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")),(0,a.kt)("div",null)),(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Via"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")),(0,a.kt)("div",null)),(0,a.kt)("li",{className:"schemaItem"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Alt-Svc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")),(0,a.kt)("div",null)))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(r.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(r.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",null,(0,a.kt)("strong",null,"object")))))),(0,a.kt)(r.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,a.kt)(r.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "category": [\n    {\n      "coding": [\n        {\n          "code": "encounter-diagnosis",\n          "display": "Encounter Diagnosis",\n          "system": "http://terminology.hl7.org/CodeSystem/condition-category"\n        }\n      ]\n    }\n  ],\n  "clinicalStatus": {\n    "coding": [\n      {\n        "code": "remission",\n        "display": "Remission",\n        "system": "http://terminology.hl7.org/CodeSystem/condition-clinical"\n      }\n    ]\n  },\n  "code": {\n    "coding": [\n      {\n        "code": "K35.8",\n        "display": "Acute appendicitis, other and unspecified",\n        "system": "http://hl7.org/fhir/sid/icd-10"\n      }\n    ]\n  },\n  "encounter": {\n    "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",\n    "reference": "Encounter/1a0951f7-c99e-4b54-9207-29709483895d"\n  },\n  "id": "f1369adf-26f6-47a5-90f2-ce08442639aa",\n  "meta": {\n    "lastUpdated": "2022-10-03T03:38:03.874389+00:00",\n    "versionId": "MTY2NDc2ODI4Mzg3NDM4OTAwMA"\n  },\n  "resourceType": "Condition",\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);