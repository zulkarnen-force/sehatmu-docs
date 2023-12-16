"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[3250],{75307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>u,frontMatter:()=>p,metadata:()=>y,toc:()=>h});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),l=a(94891),o=a(75190),r=a(47507),d=(a(24310),a(63303)),c=(a(75035),a(85162));const p={id:"healthcare-service-put",title:"HealthcareService - PUT",description:"HealthcareService - PUT",sidebar_label:"HealthcareService - PUT",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > HealthcareService"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"HealthcareService",id:"8cfb2d6f-dc20-4068-9113-805d426a6f17",identifier:[{system:"http://sys-ids.kemkes.go.id/healthcareservice/10000004",value:"HS-19920029_123"}],active:!0,providedBy:{reference:"Organization/10000004"},type:[{coding:[{system:"http://sys-ids.kemkes.go.id/bpjs-poli",code:"JAN",display:"Poli Jantung"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"305",display:"Counselling"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"221",display:"Surgery - General"}]}],specialty:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/clinical-speciality",code:"S001.09",display:"Penyakit dalam kardiovaskular "}]}],location:[{reference:"Location/b017aa54-f1df-4ec2-9d84-8823815d7228",display:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"}],name:"Poliklinik Bedah Rawat Jalan Terpadu",program:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/program",code:"1000200",display:"Program JKN"}]}]}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f6ab0aad79088533940381"}],responses:{200:{description:"OK",headers:{etag:{schema:{type:"string",example:'W/"MTY2NTcxNzM4MDk5NzkwNTAwMA"'}},"last-modified":{schema:{type:"string",example:"Fri, 14 Oct 2022 03:16:20 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/HealthcareService/8cfb2d6f-dc20-4068-9113-805d426a6f17/_history/MTY2NTcxNzM4MDk5NzkwNTAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 14 Oct 2022 03:16:21 GMT"}},"content-length":{schema:{type:"integer",example:"1683"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"24250222-7f90-4937-8d27-855489dbacb1"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{active:!0,id:"8cfb2d6f-dc20-4068-9113-805d426a6f17",identifier:[{system:"http://sys-ids.kemkes.go.id/healthcareservice/10000004",value:"HS-19920029_123"}],location:[{display:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",reference:"Location/b017aa54-f1df-4ec2-9d84-8823815d7228"}],meta:{lastUpdated:"2022-10-14T03:16:20.997905+00:00",versionId:"MTY2NTcxNzM4MDk5NzkwNTAwMA"},name:"Poliklinik Bedah Rawat Jalan Terpadu",program:[{coding:[{code:"1000200",display:"Program JKN",system:"http://terminology.kemkes.go.id/CodeSystem/program"}]}],providedBy:{reference:"Organization/10000004"},resourceType:"HealthcareService",specialty:[{coding:[{code:"S001.09",display:"Penyakit dalam kardiovaskular ",system:"http://terminology.kemkes.go.id/CodeSystem/clinical-speciality"}]}],type:[{coding:[{code:"JAN",display:"Poli Jantung",system:"http://sys-ids.kemkes.go.id/bpjs-poli"}]},{coding:[{code:"305",display:"Counselling",system:"http://terminology.hl7.org/CodeSystem/service-type"}]},{coding:[{code:"221",display:"Surgery - General",system:"http://terminology.hl7.org/CodeSystem/service-type"}]}]}}}}},description:"HealthcareService - PUT",method:"put",path:"/HealthcareService/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],jsonRequestBodyExample:{resourceType:"HealthcareService",id:"8cfb2d6f-dc20-4068-9113-805d426a6f17",identifier:[{system:"http://sys-ids.kemkes.go.id/healthcareservice/10000004",value:"HS-19920029_123"}],active:!0,providedBy:{reference:"Organization/10000004"},type:[{coding:[{system:"http://sys-ids.kemkes.go.id/bpjs-poli",code:"JAN",display:"Poli Jantung"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"305",display:"Counselling"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"221",display:"Surgery - General"}]}],specialty:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/clinical-speciality",code:"S001.09",display:"Penyakit dalam kardiovaskular "}]}],location:[{reference:"Location/b017aa54-f1df-4ec2-9d84-8823815d7228",display:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"}],name:"Poliklinik Bedah Rawat Jalan Terpadu",program:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/program",code:"1000200",display:"Program JKN"}]}]},info:{title:"SehatMu On Going",version:"1.0.0"},postman:{name:"HealthcareService - PUT",description:{type:"text/plain"},url:{path:["HealthcareService",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/ongoing/sehatmu-on-going",custom_edit_url:null},m=void 0,y={unversionedId:"sandbox/ongoing/healthcare-service-put",id:"sandbox/ongoing/healthcare-service-put",title:"HealthcareService - PUT",description:"HealthcareService - PUT",source:"@site/docs/sandbox/ongoing/healthcare-service-put.api.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/healthcare-service-put",permalink:"/docs/sandbox/ongoing/healthcare-service-put",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"healthcare-service-put",title:"HealthcareService - PUT",description:"HealthcareService - PUT",sidebar_label:"HealthcareService - PUT",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > HealthcareService"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"HealthcareService",id:"8cfb2d6f-dc20-4068-9113-805d426a6f17",identifier:[{system:"http://sys-ids.kemkes.go.id/healthcareservice/10000004",value:"HS-19920029_123"}],active:!0,providedBy:{reference:"Organization/10000004"},type:[{coding:[{system:"http://sys-ids.kemkes.go.id/bpjs-poli",code:"JAN",display:"Poli Jantung"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"305",display:"Counselling"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"221",display:"Surgery - General"}]}],specialty:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/clinical-speciality",code:"S001.09",display:"Penyakit dalam kardiovaskular "}]}],location:[{reference:"Location/b017aa54-f1df-4ec2-9d84-8823815d7228",display:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"}],name:"Poliklinik Bedah Rawat Jalan Terpadu",program:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/program",code:"1000200",display:"Program JKN"}]}]}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f6ab0aad79088533940381"}],responses:{200:{description:"OK",headers:{etag:{schema:{type:"string",example:'W/"MTY2NTcxNzM4MDk5NzkwNTAwMA"'}},"last-modified":{schema:{type:"string",example:"Fri, 14 Oct 2022 03:16:20 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/HealthcareService/8cfb2d6f-dc20-4068-9113-805d426a6f17/_history/MTY2NTcxNzM4MDk5NzkwNTAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 14 Oct 2022 03:16:21 GMT"}},"content-length":{schema:{type:"integer",example:"1683"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"24250222-7f90-4937-8d27-855489dbacb1"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{active:!0,id:"8cfb2d6f-dc20-4068-9113-805d426a6f17",identifier:[{system:"http://sys-ids.kemkes.go.id/healthcareservice/10000004",value:"HS-19920029_123"}],location:[{display:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",reference:"Location/b017aa54-f1df-4ec2-9d84-8823815d7228"}],meta:{lastUpdated:"2022-10-14T03:16:20.997905+00:00",versionId:"MTY2NTcxNzM4MDk5NzkwNTAwMA"},name:"Poliklinik Bedah Rawat Jalan Terpadu",program:[{coding:[{code:"1000200",display:"Program JKN",system:"http://terminology.kemkes.go.id/CodeSystem/program"}]}],providedBy:{reference:"Organization/10000004"},resourceType:"HealthcareService",specialty:[{coding:[{code:"S001.09",display:"Penyakit dalam kardiovaskular ",system:"http://terminology.kemkes.go.id/CodeSystem/clinical-speciality"}]}],type:[{coding:[{code:"JAN",display:"Poli Jantung",system:"http://sys-ids.kemkes.go.id/bpjs-poli"}]},{coding:[{code:"305",display:"Counselling",system:"http://terminology.hl7.org/CodeSystem/service-type"}]},{coding:[{code:"221",display:"Surgery - General",system:"http://terminology.hl7.org/CodeSystem/service-type"}]}]}}}}},description:"HealthcareService - PUT",method:"put",path:"/HealthcareService/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],jsonRequestBodyExample:{resourceType:"HealthcareService",id:"8cfb2d6f-dc20-4068-9113-805d426a6f17",identifier:[{system:"http://sys-ids.kemkes.go.id/healthcareservice/10000004",value:"HS-19920029_123"}],active:!0,providedBy:{reference:"Organization/10000004"},type:[{coding:[{system:"http://sys-ids.kemkes.go.id/bpjs-poli",code:"JAN",display:"Poli Jantung"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"305",display:"Counselling"}]},{coding:[{system:"http://terminology.hl7.org/CodeSystem/service-type",code:"221",display:"Surgery - General"}]}],specialty:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/clinical-speciality",code:"S001.09",display:"Penyakit dalam kardiovaskular "}]}],location:[{reference:"Location/b017aa54-f1df-4ec2-9d84-8823815d7228",display:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G"}],name:"Poliklinik Bedah Rawat Jalan Terpadu",program:[{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/program",code:"1000200",display:"Program JKN"}]}]},info:{title:"SehatMu On Going",version:"1.0.0"},postman:{name:"HealthcareService - PUT",description:{type:"text/plain"},url:{path:["HealthcareService",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/ongoing/sehatmu-on-going",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"HealthcareService - GET by ID",permalink:"/docs/sandbox/ongoing/healthcare-service-get-by-id"},next:{title:"HealthcareService - PATCH",permalink:"/docs/sandbox/ongoing/healthcare-service-patch"}},g={},h=[{value:"HealthcareService - PUT",id:"healthcareservice---put",level:2}],k={toc:h};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"healthcareservice---put"},"HealthcareService - PUT"),(0,s.kt)("p",null,"HealthcareService - PUT"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64f6ab0aad79088533940381"},mdxType:"ParamsItem"})))),(0,s.kt)(l.Z,{mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object"))))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"etag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last-modified"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"vary"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-xss-protection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-frame-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-content-type-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-request-id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Via"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Alt-Svc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "active": true,\n  "id": "8cfb2d6f-dc20-4068-9113-805d426a6f17",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/healthcareservice/10000004",\n      "value": "HS-19920029_123"\n    }\n  ],\n  "location": [\n    {\n      "display": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",\n      "reference": "Location/b017aa54-f1df-4ec2-9d84-8823815d7228"\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2022-10-14T03:16:20.997905+00:00",\n    "versionId": "MTY2NTcxNzM4MDk5NzkwNTAwMA"\n  },\n  "name": "Poliklinik Bedah Rawat Jalan Terpadu",\n  "program": [\n    {\n      "coding": [\n        {\n          "code": "1000200",\n          "display": "Program JKN",\n          "system": "http://terminology.kemkes.go.id/CodeSystem/program"\n        }\n      ]\n    }\n  ],\n  "providedBy": {\n    "reference": "Organization/10000004"\n  },\n  "resourceType": "HealthcareService",\n  "specialty": [\n    {\n      "coding": [\n        {\n          "code": "S001.09",\n          "display": "Penyakit dalam kardiovaskular ",\n          "system": "http://terminology.kemkes.go.id/CodeSystem/clinical-speciality"\n        }\n      ]\n    }\n  ],\n  "type": [\n    {\n      "coding": [\n        {\n          "code": "JAN",\n          "display": "Poli Jantung",\n          "system": "http://sys-ids.kemkes.go.id/bpjs-poli"\n        }\n      ]\n    },\n    {\n      "coding": [\n        {\n          "code": "305",\n          "display": "Counselling",\n          "system": "http://terminology.hl7.org/CodeSystem/service-type"\n        }\n      ]\n    },\n    {\n      "coding": [\n        {\n          "code": "221",\n          "display": "Surgery - General",\n          "system": "http://terminology.hl7.org/CodeSystem/service-type"\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}u.isMDXComponent=!0}}]);