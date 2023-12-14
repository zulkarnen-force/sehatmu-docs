"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[572],{75529:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>p,default:()=>u,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var s=a(87462),i=(a(67294),a(3905)),l=a(26389),n=a(94891),o=(a(10586),a(47507)),r=(a(24310),a(63303)),c=(a(75035),a(85162));const d={id:"healthcare-service-buat-poli",title:"HealthcareService - Buat Poli",description:"HealthcareService - Buat Poli",sidebar_label:"HealthcareService - Buat Poli",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > HealthcareService"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"HealthcareService",identifier:[{system:"http://sys-ids.kemkes.go.id/healthcareservice/10000004",value:"HS-19920029"}],active:!0,providedBy:{reference:"Organization/10000004"},type:[{coding:[{system:"http://sys-ids.kemkes.go.id/bpjs-poli",code:"JAN",display:"Poli Jantung"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"305",display:"Counselling"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"221",display:"Surgery - General"}]}],specialty:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/clinical-speciality",code:"S001.09",display:"Penyakit dalam kardiovaskular "}]}],location:[{reference:"Location/b017aa54-f1df-4ec2-9d84-8823815d7228",display:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"}],name:"Poliklinik Bedah Rawat Jalan Terpadu",program:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/program",code:"1000200",display:"Program JKN"}]}]}}}}},responses:{201:{description:"Created",headers:{"last-modified":{schema:{type:"string",example:"Thu, 06 Oct 2022 23:50:20 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY2NTEwMDIyMDAxODg0NTAwMA"'}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/HealthcareService/8cfb2d6f-dc20-4068-9113-805d426a6f17/_history/MTY2NTEwMDIyMDAxODg0NTAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 06 Oct 2022 23:50:20 GMT"}},"content-length":{schema:{type:"integer",example:"1679"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"3d734160-cad8-4f6b-9f6c-d516315c2a2e"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{active:!0,id:"8cfb2d6f-dc20-4068-9113-805d426a6f17",identifier:[{system:"http://sys-ids.kemkes.go.id/healthcareservice/10000004",value:"HS-19920029"}],location:[{display:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",reference:"Location/b017aa54-f1df-4ec2-9d84-8823815d7228"}],meta:{lastUpdated:"2022-10-06T23:50:20.018845+00:00",versionId:"MTY2NTEwMDIyMDAxODg0NTAwMA"},name:"Poliklinik Bedah Rawat Jalan Terpadu",program:[{coding:[{code:"1000200",display:"Program JKN",system:"http://terminology.kemkes.go.id/CodeSystem/program"}]}],providedBy:{reference:"Organization/10000004"},resourceType:"HealthcareService",specialty:[{coding:[{code:"S001.09",display:"Penyakit dalam kardiovaskular ",system:"http://terminology.kemkes.go.id/CodeSystem/clinical-speciality"}]}],type:[{coding:[{code:"JAN",display:"Poli Jantung",system:"http://sys-ids.kemkes.go.id/bpjs-poli"}]},{coding:[{code:"305",display:"Counselling",system:"http://terminology.hl7.org/CodeSystem/service-type"}]},{coding:[{code:"221",display:"Surgery - General",system:"http://terminology.hl7.org/CodeSystem/service-type"}]}]}}}}},description:"HealthcareService - Buat Poli",method:"post",path:"/HealthcareService",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"HealthcareService",identifier:[{system:"http://sys-ids.kemkes.go.id/healthcareservice/10000004",value:"HS-19920029"}],active:!0,providedBy:{reference:"Organization/10000004"},type:[{coding:[{system:"http://sys-ids.kemkes.go.id/bpjs-poli",code:"JAN",display:"Poli Jantung"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"305",display:"Counselling"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"221",display:"Surgery - General"}]}],specialty:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/clinical-speciality",code:"S001.09",display:"Penyakit dalam kardiovaskular "}]}],location:[{reference:"Location/b017aa54-f1df-4ec2-9d84-8823815d7228",display:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"}],name:"Poliklinik Bedah Rawat Jalan Terpadu",program:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/program",code:"1000200",display:"Program JKN"}]}]},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"HealthcareService - Buat Poli",description:{type:"text/plain"},url:{path:["HealthcareService"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},p=void 0,m={unversionedId:"sandbox/healthcare-service-buat-poli",id:"sandbox/healthcare-service-buat-poli",title:"HealthcareService - Buat Poli",description:"HealthcareService - Buat Poli",source:"@site/docs/sandbox/healthcare-service-buat-poli.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/healthcare-service-buat-poli",permalink:"/docs/sandbox/healthcare-service-buat-poli",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"healthcare-service-buat-poli",title:"HealthcareService - Buat Poli",description:"HealthcareService - Buat Poli",sidebar_label:"HealthcareService - Buat Poli",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > HealthcareService"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"HealthcareService",identifier:[{system:"http://sys-ids.kemkes.go.id/healthcareservice/10000004",value:"HS-19920029"}],active:!0,providedBy:{reference:"Organization/10000004"},type:[{coding:[{system:"http://sys-ids.kemkes.go.id/bpjs-poli",code:"JAN",display:"Poli Jantung"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"305",display:"Counselling"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"221",display:"Surgery - General"}]}],specialty:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/clinical-speciality",code:"S001.09",display:"Penyakit dalam kardiovaskular "}]}],location:[{reference:"Location/b017aa54-f1df-4ec2-9d84-8823815d7228",display:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"}],name:"Poliklinik Bedah Rawat Jalan Terpadu",program:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/program",code:"1000200",display:"Program JKN"}]}]}}}}},responses:{201:{description:"Created",headers:{"last-modified":{schema:{type:"string",example:"Thu, 06 Oct 2022 23:50:20 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY2NTEwMDIyMDAxODg0NTAwMA"'}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/HealthcareService/8cfb2d6f-dc20-4068-9113-805d426a6f17/_history/MTY2NTEwMDIyMDAxODg0NTAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 06 Oct 2022 23:50:20 GMT"}},"content-length":{schema:{type:"integer",example:"1679"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"3d734160-cad8-4f6b-9f6c-d516315c2a2e"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{active:!0,id:"8cfb2d6f-dc20-4068-9113-805d426a6f17",identifier:[{system:"http://sys-ids.kemkes.go.id/healthcareservice/10000004",value:"HS-19920029"}],location:[{display:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",reference:"Location/b017aa54-f1df-4ec2-9d84-8823815d7228"}],meta:{lastUpdated:"2022-10-06T23:50:20.018845+00:00",versionId:"MTY2NTEwMDIyMDAxODg0NTAwMA"},name:"Poliklinik Bedah Rawat Jalan Terpadu",program:[{coding:[{code:"1000200",display:"Program JKN",system:"http://terminology.kemkes.go.id/CodeSystem/program"}]}],providedBy:{reference:"Organization/10000004"},resourceType:"HealthcareService",specialty:[{coding:[{code:"S001.09",display:"Penyakit dalam kardiovaskular ",system:"http://terminology.kemkes.go.id/CodeSystem/clinical-speciality"}]}],type:[{coding:[{code:"JAN",display:"Poli Jantung",system:"http://sys-ids.kemkes.go.id/bpjs-poli"}]},{coding:[{code:"305",display:"Counselling",system:"http://terminology.hl7.org/CodeSystem/service-type"}]},{coding:[{code:"221",display:"Surgery - General",system:"http://terminology.hl7.org/CodeSystem/service-type"}]}]}}}}},description:"HealthcareService - Buat Poli",method:"post",path:"/HealthcareService",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"HealthcareService",identifier:[{system:"http://sys-ids.kemkes.go.id/healthcareservice/10000004",value:"HS-19920029"}],active:!0,providedBy:{reference:"Organization/10000004"},type:[{coding:[{system:"http://sys-ids.kemkes.go.id/bpjs-poli",code:"JAN",display:"Poli Jantung"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"305",display:"Counselling"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"221",display:"Surgery - General"}]}],specialty:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/clinical-speciality",code:"S001.09",display:"Penyakit dalam kardiovaskular "}]}],location:[{reference:"Location/b017aa54-f1df-4ec2-9d84-8823815d7228",display:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"}],name:"Poliklinik Bedah Rawat Jalan Terpadu",program:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/program",code:"1000200",display:"Program JKN"}]}]},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"HealthcareService - Buat Poli",description:{type:"text/plain"},url:{path:["HealthcareService"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Resource > HealthcareService",permalink:"/docs/sandbox/resource-healthcare-service"},next:{title:"HealthcareService - GET by specialty",permalink:"/docs/sandbox/healthcare-service-get-by-specialty"}},y={},g=[{value:"HealthcareService - Buat Poli",id:"healthcareservice---buat-poli",level:2}],h={toc:g};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"healthcareservice---buat-poli"},"HealthcareService - Buat Poli"),(0,i.kt)("p",null,"HealthcareService - Buat Poli"),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))))),(0,i.kt)("div",null,(0,i.kt)(l.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Created")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"last-modified"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"etag"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"location"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"vary"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-length"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-xss-protection"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-frame-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-content-type-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-request-id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Via"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Alt-Svc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(r.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "active": true,\n  "id": "8cfb2d6f-dc20-4068-9113-805d426a6f17",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/healthcareservice/10000004",\n      "value": "HS-19920029"\n    }\n  ],\n  "location": [\n    {\n      "display": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",\n      "reference": "Location/b017aa54-f1df-4ec2-9d84-8823815d7228"\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2022-10-06T23:50:20.018845+00:00",\n    "versionId": "MTY2NTEwMDIyMDAxODg0NTAwMA"\n  },\n  "name": "Poliklinik Bedah Rawat Jalan Terpadu",\n  "program": [\n    {\n      "coding": [\n        {\n          "code": "1000200",\n          "display": "Program JKN",\n          "system": "http://terminology.kemkes.go.id/CodeSystem/program"\n        }\n      ]\n    }\n  ],\n  "providedBy": {\n    "reference": "Organization/10000004"\n  },\n  "resourceType": "HealthcareService",\n  "specialty": [\n    {\n      "coding": [\n        {\n          "code": "S001.09",\n          "display": "Penyakit dalam kardiovaskular ",\n          "system": "http://terminology.kemkes.go.id/CodeSystem/clinical-speciality"\n        }\n      ]\n    }\n  ],\n  "type": [\n    {\n      "coding": [\n        {\n          "code": "JAN",\n          "display": "Poli Jantung",\n          "system": "http://sys-ids.kemkes.go.id/bpjs-poli"\n        }\n      ]\n    },\n    {\n      "coding": [\n        {\n          "code": "305",\n          "display": "Counselling",\n          "system": "http://terminology.hl7.org/CodeSystem/service-type"\n        }\n      ]\n    },\n    {\n      "coding": [\n        {\n          "code": "221",\n          "display": "Surgery - General",\n          "system": "http://terminology.hl7.org/CodeSystem/service-type"\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}u.isMDXComponent=!0}}]);