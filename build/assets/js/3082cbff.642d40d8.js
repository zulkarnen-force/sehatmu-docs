"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[2025],{2063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var a=n(87462),s=(n(67294),n(3905)),i=n(26389),o=n(94891),r=n(10586),l=n(47507),c=(n(24310),n(63303)),p=(n(75035),n(85162));const d={id:"encounter-patch-dictionary",title:"Encounter - PATCH Dictionary",description:"Encounter - PATCH Dictionary",sidebar_label:"Encounter - PATCH Dictionary",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Encounter"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/period/start",value:"2023-06-17T07:00:00+07:00"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"653a1dfdff890a17d7909709"}],responses:{200:{description:"OK",headers:{location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Encounter/4f735a03-128b-464d-bf91-e6eacdf1c38f/_history/MTY2NTEyNzEzMzkxMjUwMzAwMA"}},etag:{schema:{type:"string",example:'W/"MTY2NTEyNzEzMzkxMjUwMzAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Fri, 07 Oct 2022 07:18:53 UTC"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 07 Oct 2022 07:18:53 GMT"}},"content-length":{schema:{type:"integer",example:"2745"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"bc9a6bb3-3057-4a54-bb3d-e82199557aa4"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{class:{code:"AMB",display:"ambulatory",system:"http://terminology.hl7.org/CodeSystem/v3-ActCode"},diagnosis:[{condition:{display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",reference:"Condition/4bbbe654-14f5-4ab3-a36e-a1e307f67bb8"},rank:1,use:{coding:[{code:"DD",display:"Discharge diagnosis",system:"http://terminology.hl7.org/CodeSystem/diagnosis-role"}]}},{condition:{display:"Non-insulin-dependent diabetes mellitus without complications",reference:"Condition/666970c2-d79f-4242-89f9-d0ffab9e36cf"},rank:2,use:{coding:[{code:"DD",display:"Discharge diagnosis",system:"http://terminology.hl7.org/CodeSystem/diagnosis-role"}]}}],id:"4f735a03-128b-464d-bf91-e6eacdf1c38f",identifier:[{system:"http://sys-ids.kemkes.go.id/encounter/1000004",value:"P20240001"}],location:[{location:{display:"Ruang 1A, Poliklinik Rawat Jalan",reference:"Location/ef011065-38c9-46f8-9c35-d1fe68966a3e"}}],meta:{lastUpdated:"2022-10-07T07:18:53.912503+00:00",versionId:"MTY2NTEyNzEzMzkxMjUwMzAwMA"},participant:[{individual:{display:"Dokter Bronsig",reference:"Practitioner/N10000001"},type:[{coding:[{code:"ATND",display:"attender",system:"http://terminology.hl7.org/CodeSystem/v3-ParticipationType"}]}]}],period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-17T07:00:00+07:00"},resourceType:"Encounter",serviceProvider:{reference:"Organization/10000004"},status:"finished",statusHistory:[{period:{end:"2022-06-14T08:00:00+07:00",start:"2022-06-17T07:00:00+07:00"},status:"arrived"},{period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-14T08:00:00+07:00"},status:"in-progress"},{period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-14T09:00:00+07:00"},status:"finished"}],subject:{display:"Budi Santoso",reference:"Patient/100000030009"}}}}}},description:"Encounter - PATCH Dictionary",method:"patch",path:"/Encounter/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:[{op:"replace",path:"/period/start",value:"2023-06-17T07:00:00+07:00"}],info:{title:"SehatMu",version:"1.0.0"},postman:{name:"Encounter - PATCH Dictionary",description:{type:"text/plain"},url:{path:["Encounter",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},m=void 0,y={unversionedId:"sandbox/encounter-patch-dictionary",id:"sandbox/encounter-patch-dictionary",title:"Encounter - PATCH Dictionary",description:"Encounter - PATCH Dictionary",source:"@site/docs/sandbox/encounter-patch-dictionary.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/encounter-patch-dictionary",permalink:"/sehatmu/developer/docs/sandbox/encounter-patch-dictionary",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"encounter-patch-dictionary",title:"Encounter - PATCH Dictionary",description:"Encounter - PATCH Dictionary",sidebar_label:"Encounter - PATCH Dictionary",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Encounter"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/period/start",value:"2023-06-17T07:00:00+07:00"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"653a1dfdff890a17d7909709"}],responses:{200:{description:"OK",headers:{location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Encounter/4f735a03-128b-464d-bf91-e6eacdf1c38f/_history/MTY2NTEyNzEzMzkxMjUwMzAwMA"}},etag:{schema:{type:"string",example:'W/"MTY2NTEyNzEzMzkxMjUwMzAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Fri, 07 Oct 2022 07:18:53 UTC"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 07 Oct 2022 07:18:53 GMT"}},"content-length":{schema:{type:"integer",example:"2745"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"bc9a6bb3-3057-4a54-bb3d-e82199557aa4"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{class:{code:"AMB",display:"ambulatory",system:"http://terminology.hl7.org/CodeSystem/v3-ActCode"},diagnosis:[{condition:{display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",reference:"Condition/4bbbe654-14f5-4ab3-a36e-a1e307f67bb8"},rank:1,use:{coding:[{code:"DD",display:"Discharge diagnosis",system:"http://terminology.hl7.org/CodeSystem/diagnosis-role"}]}},{condition:{display:"Non-insulin-dependent diabetes mellitus without complications",reference:"Condition/666970c2-d79f-4242-89f9-d0ffab9e36cf"},rank:2,use:{coding:[{code:"DD",display:"Discharge diagnosis",system:"http://terminology.hl7.org/CodeSystem/diagnosis-role"}]}}],id:"4f735a03-128b-464d-bf91-e6eacdf1c38f",identifier:[{system:"http://sys-ids.kemkes.go.id/encounter/1000004",value:"P20240001"}],location:[{location:{display:"Ruang 1A, Poliklinik Rawat Jalan",reference:"Location/ef011065-38c9-46f8-9c35-d1fe68966a3e"}}],meta:{lastUpdated:"2022-10-07T07:18:53.912503+00:00",versionId:"MTY2NTEyNzEzMzkxMjUwMzAwMA"},participant:[{individual:{display:"Dokter Bronsig",reference:"Practitioner/N10000001"},type:[{coding:[{code:"ATND",display:"attender",system:"http://terminology.hl7.org/CodeSystem/v3-ParticipationType"}]}]}],period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-17T07:00:00+07:00"},resourceType:"Encounter",serviceProvider:{reference:"Organization/10000004"},status:"finished",statusHistory:[{period:{end:"2022-06-14T08:00:00+07:00",start:"2022-06-17T07:00:00+07:00"},status:"arrived"},{period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-14T08:00:00+07:00"},status:"in-progress"},{period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-14T09:00:00+07:00"},status:"finished"}],subject:{display:"Budi Santoso",reference:"Patient/100000030009"}}}}}},description:"Encounter - PATCH Dictionary",method:"patch",path:"/Encounter/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:[{op:"replace",path:"/period/start",value:"2023-06-17T07:00:00+07:00"}],info:{title:"SehatMu",version:"1.0.0"},postman:{name:"Encounter - PATCH Dictionary",description:{type:"text/plain"},url:{path:["Encounter",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Encounter - Update Finished",permalink:"/sehatmu/developer/docs/sandbox/encounter-update-finished"}},u={},h=[{value:"Encounter - PATCH Dictionary",id:"encounter---patch-dictionary",level:2}],g={toc:h};function k(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"encounter---patch-dictionary"},"Encounter - PATCH Dictionary"),(0,s.kt)("p",null,"Encounter - PATCH Dictionary"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"653a1dfdff890a17d7909709"},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object"))))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"etag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last-modified"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"vary"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-xss-protection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-frame-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-content-type-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-request-id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Via"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Alt-Svc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "class": {\n    "code": "AMB",\n    "display": "ambulatory",\n    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode"\n  },\n  "diagnosis": [\n    {\n      "condition": {\n        "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture",\n        "reference": "Condition/4bbbe654-14f5-4ab3-a36e-a1e307f67bb8"\n      },\n      "rank": 1,\n      "use": {\n        "coding": [\n          {\n            "code": "DD",\n            "display": "Discharge diagnosis",\n            "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role"\n          }\n        ]\n      }\n    },\n    {\n      "condition": {\n        "display": "Non-insulin-dependent diabetes mellitus without complications",\n        "reference": "Condition/666970c2-d79f-4242-89f9-d0ffab9e36cf"\n      },\n      "rank": 2,\n      "use": {\n        "coding": [\n          {\n            "code": "DD",\n            "display": "Discharge diagnosis",\n            "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role"\n          }\n        ]\n      }\n    }\n  ],\n  "id": "4f735a03-128b-464d-bf91-e6eacdf1c38f",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/encounter/1000004",\n      "value": "P20240001"\n    }\n  ],\n  "location": [\n    {\n      "location": {\n        "display": "Ruang 1A, Poliklinik Rawat Jalan",\n        "reference": "Location/ef011065-38c9-46f8-9c35-d1fe68966a3e"\n      }\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2022-10-07T07:18:53.912503+00:00",\n    "versionId": "MTY2NTEyNzEzMzkxMjUwMzAwMA"\n  },\n  "participant": [\n    {\n      "individual": {\n        "display": "Dokter Bronsig",\n        "reference": "Practitioner/N10000001"\n      },\n      "type": [\n        {\n          "coding": [\n            {\n              "code": "ATND",\n              "display": "attender",\n              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "period": {\n    "end": "2022-06-14T09:00:00+07:00",\n    "start": "2022-06-17T07:00:00+07:00"\n  },\n  "resourceType": "Encounter",\n  "serviceProvider": {\n    "reference": "Organization/10000004"\n  },\n  "status": "finished",\n  "statusHistory": [\n    {\n      "period": {\n        "end": "2022-06-14T08:00:00+07:00",\n        "start": "2022-06-17T07:00:00+07:00"\n      },\n      "status": "arrived"\n    },\n    {\n      "period": {\n        "end": "2022-06-14T09:00:00+07:00",\n        "start": "2022-06-14T08:00:00+07:00"\n      },\n      "status": "in-progress"\n    },\n    {\n      "period": {\n        "end": "2022-06-14T09:00:00+07:00",\n        "start": "2022-06-14T09:00:00+07:00"\n      },\n      "status": "finished"\n    }\n  ],\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);