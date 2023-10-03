"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[4909],{36007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var n=a(87462),s=(a(67294),a(3905)),i=a(26389),l=a(94891),o=a(10586),r=a(47507),p=(a(24310),a(63303)),m=(a(75035),a(85162));const c={id:"organization-patch",title:"Organization - Patch",description:"Organization - Patch",sidebar_label:"Organization - Patch",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Organization"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/name",value:"RAJAL TERPADU"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64ec3d8cd5b630014f1dda4c"}],responses:{200:{description:"OK",headers:{etag:{schema:{type:"string",example:'W/"MTY2NTA1NDE2OTIxNTQ5MzAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-stg/locations/asia-southeast2/datasets/stg/fhirStores/fhir-r4/fhir/Organization/abddd50b-b22f-4d68-a1c3-d2c29a27698b/_history/MTY2NTA1NDE2OTIxNTQ5MzAwMA"}},"last-modified":{schema:{type:"string",example:"Thu, 06 Oct 2022 11:02:49 UTC"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 06 Oct 2022 11:02:49 GMT"}},"content-length":{schema:{type:"integer",example:"1755"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"4ba5cd9f-d825-4554-b8eb-bad2c0d41817"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{active:!1,address:[{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"31"},{url:"city",valueCode:"3171"},{url:"district",valueCode:"317101"},{url:"village",valueCode:"31710101"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Jalan Jati Asih"],postalCode:"55292",type:"both",use:"work"}],id:"abddd50b-b22f-4d68-a1c3-d2c29a27698b",identifier:[{system:"http://sys-ids.kemkes.go.id/organization/10000004",use:"official",value:"R220001"}],meta:{lastUpdated:"2022-10-06T11:02:49.215493+00:00",versionId:"MTY2NTA1NDE2OTIxNTQ5MzAwMA"},name:"RAJAL TERPADU",partOf:{reference:"Organization/10000004"},resourceType:"Organization",telecom:[{system:"phone",use:"work",value:"+6221-783042654"},{system:"email",use:"work",value:"rs-satusehat@gmail.com"},{system:"url",use:"work",value:"www.rs-satusehat@gmail.com"}],type:[{coding:[{code:"dept",display:"Hospital Department",system:"http://terminology.hl7.org/CodeSystem/organization-type"}]}]}}}}},description:"Organization - Patch",method:"patch",path:"/Organization/{id}",servers:[{url:"http://103.19.182.20/api-sehatmu/"},{url:"http://localhost:8000"},{url:"http://{{base_url_production}}"},{url:"http://{{base_url}}"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:[{op:"replace",path:"/name",value:"RAJAL TERPADU"}],info:{title:"LabMu",version:"1.0.0"},postman:{name:"Organization - Patch",description:{type:"text/plain"},url:{path:["Organization",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},d=void 0,u={unversionedId:"sandbox/organization-patch",id:"sandbox/organization-patch",title:"Organization - Patch",description:"Organization - Patch",source:"@site/docs/sandbox/organization-patch.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/organization-patch",permalink:"/sehatmu/developer/docs/sandbox/organization-patch",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"organization-patch",title:"Organization - Patch",description:"Organization - Patch",sidebar_label:"Organization - Patch",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Organization"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/name",value:"RAJAL TERPADU"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64ec3d8cd5b630014f1dda4c"}],responses:{200:{description:"OK",headers:{etag:{schema:{type:"string",example:'W/"MTY2NTA1NDE2OTIxNTQ5MzAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-stg/locations/asia-southeast2/datasets/stg/fhirStores/fhir-r4/fhir/Organization/abddd50b-b22f-4d68-a1c3-d2c29a27698b/_history/MTY2NTA1NDE2OTIxNTQ5MzAwMA"}},"last-modified":{schema:{type:"string",example:"Thu, 06 Oct 2022 11:02:49 UTC"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 06 Oct 2022 11:02:49 GMT"}},"content-length":{schema:{type:"integer",example:"1755"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"4ba5cd9f-d825-4554-b8eb-bad2c0d41817"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{active:!1,address:[{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"31"},{url:"city",valueCode:"3171"},{url:"district",valueCode:"317101"},{url:"village",valueCode:"31710101"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Jalan Jati Asih"],postalCode:"55292",type:"both",use:"work"}],id:"abddd50b-b22f-4d68-a1c3-d2c29a27698b",identifier:[{system:"http://sys-ids.kemkes.go.id/organization/10000004",use:"official",value:"R220001"}],meta:{lastUpdated:"2022-10-06T11:02:49.215493+00:00",versionId:"MTY2NTA1NDE2OTIxNTQ5MzAwMA"},name:"RAJAL TERPADU",partOf:{reference:"Organization/10000004"},resourceType:"Organization",telecom:[{system:"phone",use:"work",value:"+6221-783042654"},{system:"email",use:"work",value:"rs-satusehat@gmail.com"},{system:"url",use:"work",value:"www.rs-satusehat@gmail.com"}],type:[{coding:[{code:"dept",display:"Hospital Department",system:"http://terminology.hl7.org/CodeSystem/organization-type"}]}]}}}}},description:"Organization - Patch",method:"patch",path:"/Organization/{id}",servers:[{url:"http://103.19.182.20/api-sehatmu/"},{url:"http://localhost:8000"},{url:"http://{{base_url_production}}"},{url:"http://{{base_url}}"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:[{op:"replace",path:"/name",value:"RAJAL TERPADU"}],info:{title:"LabMu",version:"1.0.0"},postman:{name:"Organization - Patch",description:{type:"text/plain"},url:{path:["Organization",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Organization - Update",permalink:"/sehatmu/developer/docs/sandbox/organization-update"},next:{title:"Resource > Condition",permalink:"/sehatmu/developer/docs/sandbox/resource-condition"}},y={},h=[{value:"Organization - Patch",id:"organization---patch",level:2}],g={toc:h};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"organization---patch"},"Organization - Patch"),(0,s.kt)("p",null,"Organization - Patch"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"64ec3d8cd5b630014f1dda4c"},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},mdxType:"ParamsItem"})))),(0,s.kt)(l.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object"))))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"etag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last-modified"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"vary"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-xss-protection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-frame-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-content-type-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-request-id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Via"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Alt-Svc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "active": false,\n  "address": [\n    {\n      "city": "Jakarta",\n      "country": "ID",\n      "extension": [\n        {\n          "extension": [\n            {\n              "url": "province",\n              "valueCode": "31"\n            },\n            {\n              "url": "city",\n              "valueCode": "3171"\n            },\n            {\n              "url": "district",\n              "valueCode": "317101"\n            },\n            {\n              "url": "village",\n              "valueCode": "31710101"\n            }\n          ],\n          "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"\n        }\n      ],\n      "line": [\n        "Jalan Jati Asih"\n      ],\n      "postalCode": "55292",\n      "type": "both",\n      "use": "work"\n    }\n  ],\n  "id": "abddd50b-b22f-4d68-a1c3-d2c29a27698b",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/organization/10000004",\n      "use": "official",\n      "value": "R220001"\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2022-10-06T11:02:49.215493+00:00",\n    "versionId": "MTY2NTA1NDE2OTIxNTQ5MzAwMA"\n  },\n  "name": "RAJAL TERPADU",\n  "partOf": {\n    "reference": "Organization/10000004"\n  },\n  "resourceType": "Organization",\n  "telecom": [\n    {\n      "system": "phone",\n      "use": "work",\n      "value": "+6221-783042654"\n    },\n    {\n      "system": "email",\n      "use": "work",\n      "value": "rs-satusehat@gmail.com"\n    },\n    {\n      "system": "url",\n      "use": "work",\n      "value": "www.rs-satusehat@gmail.com"\n    }\n  ],\n  "type": [\n    {\n      "coding": [\n        {\n          "code": "dept",\n          "display": "Hospital Department",\n          "system": "http://terminology.hl7.org/CodeSystem/organization-type"\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);