"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[8530],{58983:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>y});var s=i(87462),n=(i(67294),i(3905)),a=i(26389),o=i(94891),r=(i(75190),i(47507)),c=(i(24310),i(63303)),l=(i(75035),i(85162));const d={id:"clinical-impression-create",title:"ClinicalImpression - Create",description:"ClinicalImpression - Create",sidebar_label:"ClinicalImpression - Create",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > ClinicalImpression"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"ClinicalImpression",identifier:[{system:"http://sys-ids.kemkes.go.id/clinicalimpression/1000004",use:"official",value:"Prognosis_000123"}],status:"completed",description:"Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},effectiveDateTime:"2022-06-14T15:37:31+07:00",date:"2022-06-14T15:15:31+07:00",assessor:{reference:"Practitioner/N10000001"},problem:[{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}],investigation:[{code:{text:"Pemeriksaan Sputum BTA"},item:[{reference:"DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"},{reference:"Observation/56819f05-28b9-43c2-b0d1-3785768aa886"}]}],summary:"Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis",finding:[{itemCodeableConcept:{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"}]},itemReference:{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}}],prognosisCodeableConcept:[{coding:[{system:"http://snomed.info/sct",code:"170968001",display:"Prognosis good"}]}]}}}}},responses:{201:{description:"Created",headers:{"last-modified":{schema:{type:"string",example:"Mon, 03 Oct 2022 03:00:24 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2NDc2NjAyNDcyMjA1OTAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/ClinicalImpression/8817f8e4-0ab3-4b81-b5e4-89ccc5c77ae0/_history/MTY2NDc2NjAyNDcyMjA1OTAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Mon, 03 Oct 2022 03:00:24 GMT"}},"content-length":{schema:{type:"integer",example:"2066"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"8f32c1c8-b427-4987-8344-bc8490a48de8"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{assessor:{reference:"Practitioner/N10000001"},date:"2022-06-14T15:15:31+07:00",description:"Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",effectiveDateTime:"2022-06-14T15:37:31+07:00",encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},finding:[{itemCodeableConcept:{coding:[{code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",system:"http://hl7.org/fhir/sid/icd-10"}]},itemReference:{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}}],id:"8817f8e4-0ab3-4b81-b5e4-89ccc5c77ae0",identifier:[{system:"http://sys-ids.kemkes.go.id/clinicalimpression/1000004",use:"official",value:"Prognosis_000123"}],investigation:[{code:{text:"Pemeriksaan Sputum BTA"},item:[{reference:"DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"},{reference:"Observation/56819f05-28b9-43c2-b0d1-3785768aa886"}]}],meta:{lastUpdated:"2022-10-03T03:00:24.722059+00:00",versionId:"MTY2NDc2NjAyNDcyMjA1OTAwMA"},problem:[{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}],prognosisCodeableConcept:[{coding:[{system:"http://snomed.info/sct",code:"170968001",display:"Prognosis good"}]}],resourceType:"ClinicalImpression",status:"completed",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},summary:"Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis"}}}}},description:"ClinicalImpression - Create",method:"post",path:"/ClinicalImpression",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"ClinicalImpression",identifier:[{system:"http://sys-ids.kemkes.go.id/clinicalimpression/1000004",use:"official",value:"Prognosis_000123"}],status:"completed",description:"Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},effectiveDateTime:"2022-06-14T15:37:31+07:00",date:"2022-06-14T15:15:31+07:00",assessor:{reference:"Practitioner/N10000001"},problem:[{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}],investigation:[{code:{text:"Pemeriksaan Sputum BTA"},item:[{reference:"DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"},{reference:"Observation/56819f05-28b9-43c2-b0d1-3785768aa886"}]}],summary:"Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis",finding:[{itemCodeableConcept:{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"}]},itemReference:{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}}],prognosisCodeableConcept:[{coding:[{system:"http://snomed.info/sct",code:"170968001",display:"Prognosis good"}]}]},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"ClinicalImpression - Create",description:{type:"text/plain"},url:{path:["ClinicalImpression"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},p=void 0,m={unversionedId:"sandbox/ongoing/clinical-impression-create",id:"sandbox/ongoing/clinical-impression-create",title:"ClinicalImpression - Create",description:"ClinicalImpression - Create",source:"@site/docs/sandbox/ongoing/clinical-impression-create.api.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/clinical-impression-create",permalink:"/docs/sandbox/ongoing/clinical-impression-create",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"clinical-impression-create",title:"ClinicalImpression - Create",description:"ClinicalImpression - Create",sidebar_label:"ClinicalImpression - Create",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > ClinicalImpression"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"ClinicalImpression",identifier:[{system:"http://sys-ids.kemkes.go.id/clinicalimpression/1000004",use:"official",value:"Prognosis_000123"}],status:"completed",description:"Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},effectiveDateTime:"2022-06-14T15:37:31+07:00",date:"2022-06-14T15:15:31+07:00",assessor:{reference:"Practitioner/N10000001"},problem:[{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}],investigation:[{code:{text:"Pemeriksaan Sputum BTA"},item:[{reference:"DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"},{reference:"Observation/56819f05-28b9-43c2-b0d1-3785768aa886"}]}],summary:"Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis",finding:[{itemCodeableConcept:{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"}]},itemReference:{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}}],prognosisCodeableConcept:[{coding:[{system:"http://snomed.info/sct",code:"170968001",display:"Prognosis good"}]}]}}}}},responses:{201:{description:"Created",headers:{"last-modified":{schema:{type:"string",example:"Mon, 03 Oct 2022 03:00:24 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2NDc2NjAyNDcyMjA1OTAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/ClinicalImpression/8817f8e4-0ab3-4b81-b5e4-89ccc5c77ae0/_history/MTY2NDc2NjAyNDcyMjA1OTAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Mon, 03 Oct 2022 03:00:24 GMT"}},"content-length":{schema:{type:"integer",example:"2066"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"8f32c1c8-b427-4987-8344-bc8490a48de8"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{assessor:{reference:"Practitioner/N10000001"},date:"2022-06-14T15:15:31+07:00",description:"Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",effectiveDateTime:"2022-06-14T15:37:31+07:00",encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},finding:[{itemCodeableConcept:{coding:[{code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",system:"http://hl7.org/fhir/sid/icd-10"}]},itemReference:{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}}],id:"8817f8e4-0ab3-4b81-b5e4-89ccc5c77ae0",identifier:[{system:"http://sys-ids.kemkes.go.id/clinicalimpression/1000004",use:"official",value:"Prognosis_000123"}],investigation:[{code:{text:"Pemeriksaan Sputum BTA"},item:[{reference:"DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"},{reference:"Observation/56819f05-28b9-43c2-b0d1-3785768aa886"}]}],meta:{lastUpdated:"2022-10-03T03:00:24.722059+00:00",versionId:"MTY2NDc2NjAyNDcyMjA1OTAwMA"},problem:[{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}],prognosisCodeableConcept:[{coding:[{system:"http://snomed.info/sct",code:"170968001",display:"Prognosis good"}]}],resourceType:"ClinicalImpression",status:"completed",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},summary:"Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis"}}}}},description:"ClinicalImpression - Create",method:"post",path:"/ClinicalImpression",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"ClinicalImpression",identifier:[{system:"http://sys-ids.kemkes.go.id/clinicalimpression/1000004",use:"official",value:"Prognosis_000123"}],status:"completed",description:"Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},effectiveDateTime:"2022-06-14T15:37:31+07:00",date:"2022-06-14T15:15:31+07:00",assessor:{reference:"Practitioner/N10000001"},problem:[{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}],investigation:[{code:{text:"Pemeriksaan Sputum BTA"},item:[{reference:"DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"},{reference:"Observation/56819f05-28b9-43c2-b0d1-3785768aa886"}]}],summary:"Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis",finding:[{itemCodeableConcept:{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"}]},itemReference:{reference:"Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"}}],prognosisCodeableConcept:[{coding:[{system:"http://snomed.info/sct",code:"170968001",display:"Prognosis good"}]}]},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"ClinicalImpression - Create",description:{type:"text/plain"},url:{path:["ClinicalImpression"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Resource > ClinicalImpression",permalink:"/docs/sandbox/ongoing/resource-clinical-impression"},next:{title:"ClinicalImpression- Search by Subject with/without Encounter",permalink:"/docs/sandbox/ongoing/clinical-impression-search-by-subject-with-without-encounter"}},u={},y=[{value:"ClinicalImpression - Create",id:"clinicalimpression---create",level:2}],f={toc:y};function b(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,s.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"clinicalimpression---create"},"ClinicalImpression - Create"),(0,n.kt)("p",null,"ClinicalImpression - Create"),(0,n.kt)(o.Z,{mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object"))))))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(l.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Created")),(0,n.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Response Headers")),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"last-modified"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"etag"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-type"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"location"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"vary"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-length"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-xss-protection"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-frame-options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-content-type-options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-request-id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Via"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Alt-Svc"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{mdxType:"SchemaTabs"},(0,n.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object")))))),(0,n.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)("p",null," Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis"),(0,n.kt)(r.Z,{responseExample:'{\n  "assessor": {\n    "reference": "Practitioner/N10000001"\n  },\n  "date": "2022-06-14T15:15:31+07:00",\n  "description": "Bapak Budi Santoso terdiagnosa TB, dan tidak menunjukkan adanya resistensi obat",\n  "effectiveDateTime": "2022-06-14T15:37:31+07:00",\n  "encounter": {\n    "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "finding": [\n    {\n      "itemCodeableConcept": {\n        "coding": [\n          {\n            "code": "A15.0",\n            "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture",\n            "system": "http://hl7.org/fhir/sid/icd-10"\n          }\n        ]\n      },\n      "itemReference": {\n        "reference": "Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"\n      }\n    }\n  ],\n  "id": "8817f8e4-0ab3-4b81-b5e4-89ccc5c77ae0",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/clinicalimpression/1000004",\n      "use": "official",\n      "value": "Prognosis_000123"\n    }\n  ],\n  "investigation": [\n    {\n      "code": {\n        "text": "Pemeriksaan Sputum BTA"\n      },\n      "item": [\n        {\n          "reference": "DiagnosticReport/a0fa6244-7638-43ba-bbc2-2af954761540"\n        },\n        {\n          "reference": "Observation/56819f05-28b9-43c2-b0d1-3785768aa886"\n        }\n      ]\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2022-10-03T03:00:24.722059+00:00",\n    "versionId": "MTY2NDc2NjAyNDcyMjA1OTAwMA"\n  },\n  "problem": [\n    {\n      "reference": "Condition/f2bc12fe-0ab2-4e5c-a3cd-32c66150cbe9"\n    }\n  ],\n  "prognosisCodeableConcept": [\n    {\n      "coding": [\n        {\n          "system": "http://snomed.info/sct",\n          "code": "170968001",\n          "display": "Prognosis good"\n        }\n      ]\n    }\n  ],\n  "resourceType": "ClinicalImpression",\n  "status": "completed",\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  },\n  "summary": "Prognosis terhadap gejala klinis dan terkonfirmasi Tuberculosis"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);