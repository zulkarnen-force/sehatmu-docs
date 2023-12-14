"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[7468],{94282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>k});var s=a(87462),n=(a(67294),a(3905)),i=a(26389),l=a(94891),r=a(10586),m=a(47507),p=(a(24310),a(63303)),o=(a(75035),a(85162));const c={id:"patient-by-id",title:"Patient - By ID",description:"Patient - By ID",sidebar_label:"Patient - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Patient"],parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"653768d1ebb69755d1208529"}],responses:{200:{description:"OK",headers:{etag:{schema:{type:"string",example:'W/"MTY3ODI4MTExMzE5MTQ5NjAwMA"'}},"content-type":{schema:{type:"string",example:"application/json"}},"last-modified":{schema:{type:"string",example:"Wed, 08 Mar 2023 13:11:53 UTC"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Mon, 27 Mar 2023 01:55:24 GMT"}},"content-length":{schema:{type:"integer",example:"499"}},"X-Xss-Protection":{schema:{type:"string",example:"1; mode=block"}},"X-Frame-Options":{schema:{type:"string",example:"SAMEORIGIN"}},"X-Content-Type-Options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"a811bc92-baea-4d60-a95b-de2b20ff0afe"}},Via:{schema:{type:"string",example:"1.1 google"}},"Strict-Transport-Security":{schema:{type:"string",example:"max-age=31536000; includeSubDomains"}},"Referrer-Policy":{schema:{type:"string",example:"strict-origin"}},"Permissions-Policy":{schema:{type:"string",example:"camera=(), microphone=(), geolocation=(), browsing-topics=()"}},"Content-Security-Policy":{schema:{type:"string",example:"default-src 'self' http: https: data: blob: 'unsafe-inline'"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{active:!0,id:"P02478375538",identifier:[{system:"https://fhir.kemkes.go.id/id/ihs-number",use:"official",value:"P02478375538"},{system:"https://fhir.kemkes.go.id/id/nik",use:"official",value:"################"}],link:[{other:{reference:"Patient/P02478375538"},type:"refer"}],meta:{lastUpdated:"2023-03-08T13:11:53.191496+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Patient"],versionId:"MTY3ODI4MTExMzE5MTQ5NjAwMA"},resourceType:"Patient"}}}}},description:"Patient - By ID",method:"get",path:"/Patient/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"Patient - By ID",description:{type:"text/plain"},url:{path:["Patient",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},y=void 0,d={unversionedId:"sandbox/patient-by-id",id:"sandbox/patient-by-id",title:"Patient - By ID",description:"Patient - By ID",source:"@site/docs/sandbox/patient-by-id.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/patient-by-id",permalink:"/docs/sandbox/patient-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"patient-by-id",title:"Patient - By ID",description:"Patient - By ID",sidebar_label:"Patient - By ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Patient"],parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"653768d1ebb69755d1208529"}],responses:{200:{description:"OK",headers:{etag:{schema:{type:"string",example:'W/"MTY3ODI4MTExMzE5MTQ5NjAwMA"'}},"content-type":{schema:{type:"string",example:"application/json"}},"last-modified":{schema:{type:"string",example:"Wed, 08 Mar 2023 13:11:53 UTC"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Mon, 27 Mar 2023 01:55:24 GMT"}},"content-length":{schema:{type:"integer",example:"499"}},"X-Xss-Protection":{schema:{type:"string",example:"1; mode=block"}},"X-Frame-Options":{schema:{type:"string",example:"SAMEORIGIN"}},"X-Content-Type-Options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"a811bc92-baea-4d60-a95b-de2b20ff0afe"}},Via:{schema:{type:"string",example:"1.1 google"}},"Strict-Transport-Security":{schema:{type:"string",example:"max-age=31536000; includeSubDomains"}},"Referrer-Policy":{schema:{type:"string",example:"strict-origin"}},"Permissions-Policy":{schema:{type:"string",example:"camera=(), microphone=(), geolocation=(), browsing-topics=()"}},"Content-Security-Policy":{schema:{type:"string",example:"default-src 'self' http: https: data: blob: 'unsafe-inline'"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{active:!0,id:"P02478375538",identifier:[{system:"https://fhir.kemkes.go.id/id/ihs-number",use:"official",value:"P02478375538"},{system:"https://fhir.kemkes.go.id/id/nik",use:"official",value:"################"}],link:[{other:{reference:"Patient/P02478375538"},type:"refer"}],meta:{lastUpdated:"2023-03-08T13:11:53.191496+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Patient"],versionId:"MTY3ODI4MTExMzE5MTQ5NjAwMA"},resourceType:"Patient"}}}}},description:"Patient - By ID",method:"get",path:"/Patient/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"Patient - By ID",description:{type:"text/plain"},url:{path:["Patient",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Patient - Create by Mother's NIK (Newborn)",permalink:"/docs/sandbox/patient-create-by-mothers-nik-newborn"},next:{title:"Resource > Location",permalink:"/docs/sandbox/resource-location"}},u={},k=[{value:"Patient - By ID",id:"patient---by-id",level:2}],h={toc:k};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"patient---by-id"},"Patient - By ID"),(0,n.kt)("p",null,"Patient - By ID"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"653768d1ebb69755d1208529"},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Response Headers")),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"etag"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-type"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"last-modified"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"vary"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-length"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"X-Xss-Protection"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"X-Frame-Options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"X-Content-Type-Options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-request-id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Via"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Strict-Transport-Security"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Referrer-Policy"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Permissions-Policy"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Content-Security-Policy"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Alt-Svc"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)))),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object")))))),(0,n.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "active": true,\n  "id": "P02478375538",\n  "identifier": [\n    {\n      "system": "https://fhir.kemkes.go.id/id/ihs-number",\n      "use": "official",\n      "value": "P02478375538"\n    },\n    {\n      "system": "https://fhir.kemkes.go.id/id/nik",\n      "use": "official",\n      "value": "################"\n    }\n  ],\n  "link": [\n    {\n      "other": {\n        "reference": "Patient/P02478375538"\n      },\n      "type": "refer"\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2023-03-08T13:11:53.191496+00:00",\n    "profile": [\n      "https://fhir.kemkes.go.id/r4/StructureDefinition/Patient"\n    ],\n    "versionId": "MTY3ODI4MTExMzE5MTQ5NjAwMA"\n  },\n  "resourceType": "Patient"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);