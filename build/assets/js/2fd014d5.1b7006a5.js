"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[1562],{95719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var a=n(87462),s=(n(67294),n(3905)),i=n(26389),o=n(94891),r=n(75190),l=n(47507),c=(n(24310),n(63303)),d=(n(75035),n(85162));const m={id:"encounter-by-id",title:"Encounter - By ID",description:"Encounter - By ID",sidebar_label:"Encounter - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Encounter"],security:[{bearerAuth:[]}],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"657d68bf9b323d3530919bf6"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Tue, 02 Aug 2022 07:57:45 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY1OTQyNzA2NTA4MDgyMDAwMA"'}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Tue, 09 Aug 2022 02:44:56 GMT"}},"content-length":{schema:{type:"integer",example:"1401"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"77c7eb68-ad0f-47f6-a46f-1180e6fb5efa"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{class:{code:"AMB",display:"ambulatory",system:"http://terminology.hl7.org/CodeSystem/v3-ActCode"},diagnosis:[{condition:{display:"Laboratory examination",reference:"Condition/0abfe934-9956-4e8e-b389-cd8f7c7971ae"},rank:1,use:{coding:[{code:"encounter-diagnosis",display:"Discharge diagnosis",system:"http://terminology.hl7.org/CodeSystem/condition-category"}]}}],id:"4a6174db-e672-4f89-9829-02b758a9fb21",identifier:[{system:"http://sys-ids.kemkes.go.id/encounter/10080017",value:"P20240001"}],location:[{location:{display:"LABKLIN KF RADIO DALAM",reference:"Location/8cbc0f08-73ae-4d0e-a469-72d57e5c25ec"}}],meta:{lastUpdated:"2022-08-02T07:57:45.080820+00:00",versionId:"MTY1OTQyNzA2NTA4MDgyMDAwMA"},period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-14T07:00:00+07:00"},resourceType:"Encounter",serviceProvider:{display:"LABKLIN KF RADIO DALAM",reference:"Organization/10080017"},status:"finished",subject:{display:"Budi Santoso",reference:"Patient/100000030009"}}}}}},description:"Encounter - By ID",method:"get",path:"/Encounter/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Encounter - By ID",description:{type:"text/plain"},url:{path:["Encounter",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/sehatmu-docs",custom_edit_url:null},p=void 0,y={unversionedId:"sandbox/encounter-by-id",id:"sandbox/encounter-by-id",title:"Encounter - By ID",description:"Encounter - By ID",source:"@site/docs/sandbox/encounter-by-id.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/encounter-by-id",permalink:"/docs/sandbox/encounter-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"encounter-by-id",title:"Encounter - By ID",description:"Encounter - By ID",sidebar_label:"Encounter - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Encounter"],security:[{bearerAuth:[]}],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"657d68bf9b323d3530919bf6"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Tue, 02 Aug 2022 07:57:45 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY1OTQyNzA2NTA4MDgyMDAwMA"'}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Tue, 09 Aug 2022 02:44:56 GMT"}},"content-length":{schema:{type:"integer",example:"1401"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"77c7eb68-ad0f-47f6-a46f-1180e6fb5efa"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{class:{code:"AMB",display:"ambulatory",system:"http://terminology.hl7.org/CodeSystem/v3-ActCode"},diagnosis:[{condition:{display:"Laboratory examination",reference:"Condition/0abfe934-9956-4e8e-b389-cd8f7c7971ae"},rank:1,use:{coding:[{code:"encounter-diagnosis",display:"Discharge diagnosis",system:"http://terminology.hl7.org/CodeSystem/condition-category"}]}}],id:"4a6174db-e672-4f89-9829-02b758a9fb21",identifier:[{system:"http://sys-ids.kemkes.go.id/encounter/10080017",value:"P20240001"}],location:[{location:{display:"LABKLIN KF RADIO DALAM",reference:"Location/8cbc0f08-73ae-4d0e-a469-72d57e5c25ec"}}],meta:{lastUpdated:"2022-08-02T07:57:45.080820+00:00",versionId:"MTY1OTQyNzA2NTA4MDgyMDAwMA"},period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-14T07:00:00+07:00"},resourceType:"Encounter",serviceProvider:{display:"LABKLIN KF RADIO DALAM",reference:"Organization/10080017"},status:"finished",subject:{display:"Budi Santoso",reference:"Patient/100000030009"}}}}}},description:"Encounter - By ID",method:"get",path:"/Encounter/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Encounter - By ID",description:{type:"text/plain"},url:{path:["Encounter",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Encounter - All",permalink:"/docs/sandbox/encounter-all"},next:{title:"Encounter - Update Finished",permalink:"/docs/sandbox/encounter-update-finished"}},u={},h=[{value:"Encounter - By ID",id:"encounter---by-id",level:2}],g={toc:h};function k(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"encounter---by-id"},"Encounter - By ID"),(0,s.kt)("p",null,"Encounter - By ID"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"657d68bf9b323d3530919bf6"},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last-modified"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"etag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"vary"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-xss-protection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-frame-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-content-type-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-request-id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Via"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Alt-Svc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "class": {\n    "code": "AMB",\n    "display": "ambulatory",\n    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode"\n  },\n  "diagnosis": [\n    {\n      "condition": {\n        "display": "Laboratory examination",\n        "reference": "Condition/0abfe934-9956-4e8e-b389-cd8f7c7971ae"\n      },\n      "rank": 1,\n      "use": {\n        "coding": [\n          {\n            "code": "encounter-diagnosis",\n            "display": "Discharge diagnosis",\n            "system": "http://terminology.hl7.org/CodeSystem/condition-category"\n          }\n        ]\n      }\n    }\n  ],\n  "id": "4a6174db-e672-4f89-9829-02b758a9fb21",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/encounter/10080017",\n      "value": "P20240001"\n    }\n  ],\n  "location": [\n    {\n      "location": {\n        "display": "LABKLIN KF RADIO DALAM",\n        "reference": "Location/8cbc0f08-73ae-4d0e-a469-72d57e5c25ec"\n      }\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2022-08-02T07:57:45.080820+00:00",\n    "versionId": "MTY1OTQyNzA2NTA4MDgyMDAwMA"\n  },\n  "period": {\n    "end": "2022-06-14T09:00:00+07:00",\n    "start": "2022-06-14T07:00:00+07:00"\n  },\n  "resourceType": "Encounter",\n  "serviceProvider": {\n    "display": "LABKLIN KF RADIO DALAM",\n    "reference": "Organization/10080017"\n  },\n  "status": "finished",\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);