"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[1248],{23169:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var n=a(87462),i=(a(67294),a(3905)),s=a(26389),o=a(94891),l=a(75190),r=a(47507),m=(a(24310),a(63303)),p=(a(75035),a(85162));const d={id:"organization-by-id",title:"Organization - By ID",description:"Organization - By ID",sidebar_label:"Organization - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Organization"],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"655b0866ff1bbe7ae30a3d7a"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Tue, 23 Aug 2022 06:36:12 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY2MTIzNjU3MjU1NzU4MTAwMA"'}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Tue, 23 Aug 2022 06:36:37 GMT"}},"content-length":{schema:{type:"integer",example:"1760"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"f7f7ab95-b3be-4545-9e83-19bc270e4098"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{active:!0,address:[{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"31"},{url:"city",valueCode:"3171"},{url:"district",valueCode:"317101"},{url:"village",valueCode:"31710101"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Jalan Jati Asih"],postalCode:"55292",type:"both",use:"work"}],id:"abddd50b-b22f-4d68-a1c3-d2c29a27698b",identifier:[{system:"http://sys-ids.kemkes.go.id/organization/10000004",use:"official",value:"R220001"}],meta:{lastUpdated:"2022-08-23T06:36:12.557581+00:00",versionId:"MTY2MTIzNjU3MjU1NzU4MTAwMA"},name:"Rawat Jalan Terpadu",partOf:{reference:"Organization/10000004"},resourceType:"Organization",telecom:[{system:"phone",use:"work",value:"+6221-783042654"},{system:"email",use:"work",value:"rs-SehatMu@gmail.com"},{system:"url",use:"work",value:"www.rs-SehatMu@gmail.com"}],type:[{coding:[{code:"dept",display:"Hospital Department",system:"http://terminology.hl7.org/CodeSystem/organization-type"}]}]}}}}},description:"Organization - By ID",method:"get",path:"/Organization/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Organization - By ID",description:{type:"text/plain"},url:{path:["Organization",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},c=void 0,u={unversionedId:"sandbox/ongoing/organization-by-id",id:"sandbox/ongoing/organization-by-id",title:"Organization - By ID",description:"Organization - By ID",source:"@site/docs/sandbox/ongoing/organization-by-id.api.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/organization-by-id",permalink:"/docs/sandbox/ongoing/organization-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"organization-by-id",title:"Organization - By ID",description:"Organization - By ID",sidebar_label:"Organization - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Organization"],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"655b0866ff1bbe7ae30a3d7a"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Tue, 23 Aug 2022 06:36:12 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY2MTIzNjU3MjU1NzU4MTAwMA"'}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Tue, 23 Aug 2022 06:36:37 GMT"}},"content-length":{schema:{type:"integer",example:"1760"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"f7f7ab95-b3be-4545-9e83-19bc270e4098"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{active:!0,address:[{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"31"},{url:"city",valueCode:"3171"},{url:"district",valueCode:"317101"},{url:"village",valueCode:"31710101"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Jalan Jati Asih"],postalCode:"55292",type:"both",use:"work"}],id:"abddd50b-b22f-4d68-a1c3-d2c29a27698b",identifier:[{system:"http://sys-ids.kemkes.go.id/organization/10000004",use:"official",value:"R220001"}],meta:{lastUpdated:"2022-08-23T06:36:12.557581+00:00",versionId:"MTY2MTIzNjU3MjU1NzU4MTAwMA"},name:"Rawat Jalan Terpadu",partOf:{reference:"Organization/10000004"},resourceType:"Organization",telecom:[{system:"phone",use:"work",value:"+6221-783042654"},{system:"email",use:"work",value:"rs-SehatMu@gmail.com"},{system:"url",use:"work",value:"www.rs-SehatMu@gmail.com"}],type:[{coding:[{code:"dept",display:"Hospital Department",system:"http://terminology.hl7.org/CodeSystem/organization-type"}]}]}}}}},description:"Organization - By ID",method:"get",path:"/Organization/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Organization - By ID",description:{type:"text/plain"},url:{path:["Organization",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Organization - Search by Queries",permalink:"/docs/sandbox/ongoing/organization-search-by-queries"},next:{title:"Organization - Update",permalink:"/docs/sandbox/ongoing/organization-update"}},y={},g=[{value:"Organization - By ID",id:"organization---by-id",level:2}],h={toc:g};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"organization---by-id"},"Organization - By ID"),(0,i.kt)("p",null,"Organization - By ID"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"655b0866ff1bbe7ae30a3d7a"},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"last-modified"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"etag"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"vary"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-length"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-xss-protection"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-frame-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-content-type-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-request-id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Via"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Alt-Svc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "active": true,\n  "address": [\n    {\n      "city": "Jakarta",\n      "country": "ID",\n      "extension": [\n        {\n          "extension": [\n            {\n              "url": "province",\n              "valueCode": "31"\n            },\n            {\n              "url": "city",\n              "valueCode": "3171"\n            },\n            {\n              "url": "district",\n              "valueCode": "317101"\n            },\n            {\n              "url": "village",\n              "valueCode": "31710101"\n            }\n          ],\n          "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"\n        }\n      ],\n      "line": [\n        "Jalan Jati Asih"\n      ],\n      "postalCode": "55292",\n      "type": "both",\n      "use": "work"\n    }\n  ],\n  "id": "abddd50b-b22f-4d68-a1c3-d2c29a27698b",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/organization/10000004",\n      "use": "official",\n      "value": "R220001"\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2022-08-23T06:36:12.557581+00:00",\n    "versionId": "MTY2MTIzNjU3MjU1NzU4MTAwMA"\n  },\n  "name": "Rawat Jalan Terpadu",\n  "partOf": {\n    "reference": "Organization/10000004"\n  },\n  "resourceType": "Organization",\n  "telecom": [\n    {\n      "system": "phone",\n      "use": "work",\n      "value": "+6221-783042654"\n    },\n    {\n      "system": "email",\n      "use": "work",\n      "value": "rs-SehatMu@gmail.com"\n    },\n    {\n      "system": "url",\n      "use": "work",\n      "value": "www.rs-SehatMu@gmail.com"\n    }\n  ],\n  "type": [\n    {\n      "coding": [\n        {\n          "code": "dept",\n          "display": "Hospital Department",\n          "system": "http://terminology.hl7.org/CodeSystem/organization-type"\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);