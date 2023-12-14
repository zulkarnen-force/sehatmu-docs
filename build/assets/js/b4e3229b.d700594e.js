"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[8586],{40523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),o=a(94891),r=a(10586),c=a(47507),l=(a(24310),a(63303)),d=(a(75035),a(85162));const p={id:"clinical-impression-update",title:"ClinicalImpression - Update",description:"ClinicalImpression - Update",sidebar_label:"ClinicalImpression - Update",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > ClinicalImpression"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"ClinicalImpression",id:"8163695a-6224-401e-9a78-7dbc9bed69af",identifier:[{system:"http://sys-ids.kemkes.go.id/clinicalimpression/1000004",use:"official",value:"Prognosis_000123"}],status:"completed",description:"Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},effectiveDateTime:"2022-06-14T15:37:31+07:00",date:"2022-06-14T15:15:31+07:00",assessor:{reference:"Practitioner/N10000001"},problem:[{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}],investigation:[{code:{text:"Pemeriksaan Sputum BTA"},item:[{reference:"DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"},{reference:"Observation/56819f05-28b9-43c2-b0d1-3785768aa886"}]}],summary:"Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis",finding:[{itemCodeableConcept:{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"}]},itemReference:{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}}],prognosisCodeableConcept:[{coding:[{system:"http://snomed.info/sct",code:"65872000",display:"Fair prognosis"}]}]}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f6a3c38580ab03abbb3ca4"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Mon, 03 Oct 2022 03:06:26 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/ClinicalImpression/8163695a-6224-401e-9a78-7dbc9bed69af/_history/MTY2NDc2NjM4NjU2MzM1NTAwMA"}},etag:{schema:{type:"string",example:'W/"MTY2NDc2NjM4NjU2MzM1NTAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Mon, 03 Oct 2022 03:06:26 GMT"}},"content-length":{schema:{type:"integer",example:"2076"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"5cf527d6-be77-4ac0-b81e-85632261ac50"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{assessor:{reference:"Practitioner/N10000001"},date:"2022-06-14T15:15:31+07:00",description:"Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",effectiveDateTime:"2022-06-14T15:37:31+07:00",encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},finding:[{itemCodeableConcept:{coding:[{code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",system:"http://hl7.org/fhir/sid/icd-10"}]},itemReference:{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}}],id:"8163695a-6224-401e-9a78-7dbc9bed69af",identifier:[{system:"http://sys-ids.kemkes.go.id/clinicalimpression/1000004",use:"official",value:"Prognosis_000123"}],investigation:[{code:{text:"Pemeriksaan Sputum BTA"},item:[{reference:"DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"},{reference:"Observation/56819f05-28b9-43c2-b0d1-3785768aa886"}]}],meta:{lastUpdated:"2022-10-03T03:06:26.563355+00:00",versionId:"MTY2NDc2NjM4NjU2MzM1NTAwMA"},problem:[{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}],prognosisCodeableConcept:[{coding:[{code:"65872000",display:"Fair prognosis",system:"http://snomed.info/sct"}]}],resourceType:"ClinicalImpression",status:"completed",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},summary:"Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis"}}}}},description:"ClinicalImpression - Update",method:"put",path:"/ClinicalImpression/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"ClinicalImpression",id:"8163695a-6224-401e-9a78-7dbc9bed69af",identifier:[{system:"http://sys-ids.kemkes.go.id/clinicalimpression/1000004",use:"official",value:"Prognosis_000123"}],status:"completed",description:"Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},effectiveDateTime:"2022-06-14T15:37:31+07:00",date:"2022-06-14T15:15:31+07:00",assessor:{reference:"Practitioner/N10000001"},problem:[{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}],investigation:[{code:{text:"Pemeriksaan Sputum BTA"},item:[{reference:"DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"},{reference:"Observation/56819f05-28b9-43c2-b0d1-3785768aa886"}]}],summary:"Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis",finding:[{itemCodeableConcept:{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"}]},itemReference:{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}}],prognosisCodeableConcept:[{coding:[{system:"http://snomed.info/sct",code:"65872000",display:"Fair prognosis"}]}]},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"ClinicalImpression - Update",description:{type:"text/plain"},url:{path:["ClinicalImpression",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},m=void 0,u={unversionedId:"sandbox/clinical-impression-update",id:"sandbox/clinical-impression-update",title:"ClinicalImpression - Update",description:"ClinicalImpression - Update",source:"@site/docs/sandbox/clinical-impression-update.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/clinical-impression-update",permalink:"/docs/sandbox/clinical-impression-update",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"clinical-impression-update",title:"ClinicalImpression - Update",description:"ClinicalImpression - Update",sidebar_label:"ClinicalImpression - Update",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > ClinicalImpression"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"ClinicalImpression",id:"8163695a-6224-401e-9a78-7dbc9bed69af",identifier:[{system:"http://sys-ids.kemkes.go.id/clinicalimpression/1000004",use:"official",value:"Prognosis_000123"}],status:"completed",description:"Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},effectiveDateTime:"2022-06-14T15:37:31+07:00",date:"2022-06-14T15:15:31+07:00",assessor:{reference:"Practitioner/N10000001"},problem:[{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}],investigation:[{code:{text:"Pemeriksaan Sputum BTA"},item:[{reference:"DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"},{reference:"Observation/56819f05-28b9-43c2-b0d1-3785768aa886"}]}],summary:"Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis",finding:[{itemCodeableConcept:{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"}]},itemReference:{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}}],prognosisCodeableConcept:[{coding:[{system:"http://snomed.info/sct",code:"65872000",display:"Fair prognosis"}]}]}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f6a3c38580ab03abbb3ca4"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Mon, 03 Oct 2022 03:06:26 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/ClinicalImpression/8163695a-6224-401e-9a78-7dbc9bed69af/_history/MTY2NDc2NjM4NjU2MzM1NTAwMA"}},etag:{schema:{type:"string",example:'W/"MTY2NDc2NjM4NjU2MzM1NTAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Mon, 03 Oct 2022 03:06:26 GMT"}},"content-length":{schema:{type:"integer",example:"2076"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"5cf527d6-be77-4ac0-b81e-85632261ac50"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{assessor:{reference:"Practitioner/N10000001"},date:"2022-06-14T15:15:31+07:00",description:"Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",effectiveDateTime:"2022-06-14T15:37:31+07:00",encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},finding:[{itemCodeableConcept:{coding:[{code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",system:"http://hl7.org/fhir/sid/icd-10"}]},itemReference:{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}}],id:"8163695a-6224-401e-9a78-7dbc9bed69af",identifier:[{system:"http://sys-ids.kemkes.go.id/clinicalimpression/1000004",use:"official",value:"Prognosis_000123"}],investigation:[{code:{text:"Pemeriksaan Sputum BTA"},item:[{reference:"DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"},{reference:"Observation/56819f05-28b9-43c2-b0d1-3785768aa886"}]}],meta:{lastUpdated:"2022-10-03T03:06:26.563355+00:00",versionId:"MTY2NDc2NjM4NjU2MzM1NTAwMA"},problem:[{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}],prognosisCodeableConcept:[{coding:[{code:"65872000",display:"Fair prognosis",system:"http://snomed.info/sct"}]}],resourceType:"ClinicalImpression",status:"completed",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},summary:"Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis"}}}}},description:"ClinicalImpression - Update",method:"put",path:"/ClinicalImpression/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"ClinicalImpression",id:"8163695a-6224-401e-9a78-7dbc9bed69af",identifier:[{system:"http://sys-ids.kemkes.go.id/clinicalimpression/1000004",use:"official",value:"Prognosis_000123"}],status:"completed",description:"Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},effectiveDateTime:"2022-06-14T15:37:31+07:00",date:"2022-06-14T15:15:31+07:00",assessor:{reference:"Practitioner/N10000001"},problem:[{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}],investigation:[{code:{text:"Pemeriksaan Sputum BTA"},item:[{reference:"DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"},{reference:"Observation/56819f05-28b9-43c2-b0d1-3785768aa886"}]}],summary:"Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis",finding:[{itemCodeableConcept:{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"}]},itemReference:{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}}],prognosisCodeableConcept:[{coding:[{system:"http://snomed.info/sct",code:"65872000",display:"Fair prognosis"}]}]},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"ClinicalImpression - Update",description:{type:"text/plain"},url:{path:["ClinicalImpression",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"ClinicalImpression - Search by ID",permalink:"/docs/sandbox/clinical-impression-search-by-id"},next:{title:"ClinicalImpression - PATCH",permalink:"/docs/sandbox/clinical-impression-patch"}},y={},f=[{value:"ClinicalImpression - Update",id:"clinicalimpression---update",level:2}],b={toc:f};function g(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"clinicalimpression---update"},"ClinicalImpression - Update"),(0,s.kt)("p",null,"ClinicalImpression - Update"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f6a3c38580ab03abbb3ca4"},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object"))))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last-modified"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"etag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"vary"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-xss-protection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-frame-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-content-type-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-request-id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Via"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Alt-Svc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)("p",null," Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis"),(0,s.kt)(c.Z,{responseExample:'{\n  "assessor": {\n    "reference": "Practitioner/N10000001"\n  },\n  "date": "2022-06-14T15:15:31+07:00",\n  "description": "Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",\n  "effectiveDateTime": "2022-06-14T15:37:31+07:00",\n  "encounter": {\n    "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "finding": [\n    {\n      "itemCodeableConcept": {\n        "coding": [\n          {\n            "code": "A15.0",\n            "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture",\n            "system": "http://hl7.org/fhir/sid/icd-10"\n          }\n        ]\n      },\n      "itemReference": {\n        "reference": "Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"\n      }\n    }\n  ],\n  "id": "8163695a-6224-401e-9a78-7dbc9bed69af",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/clinicalimpression/1000004",\n      "use": "official",\n      "value": "Prognosis_000123"\n    }\n  ],\n  "investigation": [\n    {\n      "code": {\n        "text": "Pemeriksaan Sputum BTA"\n      },\n      "item": [\n        {\n          "reference": "DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"\n        },\n        {\n          "reference": "Observation/56819f05-28b9-43c2-b0d1-3785768aa886"\n        }\n      ]\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2022-10-03T03:06:26.563355+00:00",\n    "versionId": "MTY2NDc2NjM4NjU2MzM1NTAwMA"\n  },\n  "problem": [\n    {\n      "reference": "Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"\n    }\n  ],\n  "prognosisCodeableConcept": [\n    {\n      "coding": [\n        {\n          "code": "65872000",\n          "display": "Fair prognosis",\n          "system": "http://snomed.info/sct"\n        }\n      ]\n    }\n  ],\n  "resourceType": "ClinicalImpression",\n  "status": "completed",\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  },\n  "summary": "Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);