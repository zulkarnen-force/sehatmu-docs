"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[5425],{92139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>k,frontMatter:()=>m,metadata:()=>c,toc:()=>g});var s=a(87462),i=(a(67294),a(3905)),n=a(26389),o=a(94891),r=a(75190),l=a(47507),d=(a(24310),a(63303)),p=(a(75035),a(85162));const m={id:"organization-update",title:"Organization - Update",description:"Organization - Update",sidebar_label:"Organization - Update",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Organization"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Organization",id:"abddd50b-b22f-4d68-a1c3-d2c29a27698b",active:!0,identifier:[{use:"official",system:"http://sys-ids.kemkes.go.id/organization/10000004",value:"R220001"}],type:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/organization-type",code:"dept",display:"Hospital Department"}]}],name:"Rawat Jalan Terpadu",telecom:[{system:"phone",value:"+6221-783042654",use:"work"},{system:"email",value:"rs-satusehat@gmail.com",use:"work"},{system:"url",value:"www.rs-satusehat@gmail.com",use:"work"}],address:[{use:"work",type:"both",line:["Jalan Jati Asih"],city:"Jakarta",postalCode:"55292",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"31"},{url:"city",valueCode:"3171"},{url:"district",valueCode:"317101"},{url:"village",valueCode:"31710101"}]}]}],partOf:{reference:"Organization/10000004"}}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"655b0866ff1bbe7ae30a3d7f"}],responses:{200:{description:"OK",headers:{etag:{schema:{type:"string",example:'W/"MTY2MzkwNTU5MzYwNTg2MTAwMA"'}},"last-modified":{schema:{type:"string",example:"Fri, 23 Sep 2022 03:59:53 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Organization/abddd50b-b22f-4d68-a1c3-d2c29a27698b/_history/MTY2MzkwNTU5MzYwNTg2MTAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 23 Sep 2022 03:59:53 GMT"}},"content-length":{schema:{type:"integer",example:"1861"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"6d9cad1f-0824-42e5-92c7-6cdb8b3d286b"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{active:!1,address:[{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"31"},{url:"city",valueCode:"3171"},{url:"district",valueCode:"317101"},{url:"village",valueCode:"31710101"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Jalan Jati Asih"],postalCode:"55292",type:"both",use:"work"}],id:"abddd50b-b22f-4d68-a1c3-d2c29a27698b",identifier:[{system:"http://sys-ids.kemkes.go.id/organization/10000004",use:"official",value:"R220001"}],meta:{lastUpdated:"2022-09-23T03:59:53.605861+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Organization|4.0.1"],versionId:"MTY2MzkwNTU5MzYwNTg2MTAwMA"},name:"Rawat Jalan Terpadu",partOf:{reference:"Organization/10000004"},resourceType:"Organization",telecom:[{system:"phone",use:"work",value:"+6221-783042654"},{system:"email",use:"work",value:"rs-satusehat@gmail.com"},{system:"url",use:"work",value:"www.rs-satusehat@gmail.com"}],type:[{coding:[{code:"dept",display:"Hospital Department",system:"http://terminology.hl7.org/CodeSystem/organization-type"}]}]}}}}},description:"Organization - Update",method:"put",path:"/Organization/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Organization",id:"abddd50b-b22f-4d68-a1c3-d2c29a27698b",active:!0,identifier:[{use:"official",system:"http://sys-ids.kemkes.go.id/organization/10000004",value:"R220001"}],type:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/organization-type",code:"dept",display:"Hospital Department"}]}],name:"Rawat Jalan Terpadu",telecom:[{system:"phone",value:"+6221-783042654",use:"work"},{system:"email",value:"rs-satusehat@gmail.com",use:"work"},{system:"url",value:"www.rs-satusehat@gmail.com",use:"work"}],address:[{use:"work",type:"both",line:["Jalan Jati Asih"],city:"Jakarta",postalCode:"55292",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"31"},{url:"city",valueCode:"3171"},{url:"district",valueCode:"317101"},{url:"village",valueCode:"31710101"}]}]}],partOf:{reference:"Organization/10000004"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Organization - Update",description:{type:"text/plain"},url:{path:["Organization",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/sehatmu-docs",custom_edit_url:null},u=void 0,c={unversionedId:"sandbox/organization-update",id:"sandbox/organization-update",title:"Organization - Update",description:"Organization - Update",source:"@site/docs/sandbox/organization-update.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/organization-update",permalink:"/docs/sandbox/organization-update",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"organization-update",title:"Organization - Update",description:"Organization - Update",sidebar_label:"Organization - Update",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Organization"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Organization",id:"abddd50b-b22f-4d68-a1c3-d2c29a27698b",active:!0,identifier:[{use:"official",system:"http://sys-ids.kemkes.go.id/organization/10000004",value:"R220001"}],type:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/organization-type",code:"dept",display:"Hospital Department"}]}],name:"Rawat Jalan Terpadu",telecom:[{system:"phone",value:"+6221-783042654",use:"work"},{system:"email",value:"rs-satusehat@gmail.com",use:"work"},{system:"url",value:"www.rs-satusehat@gmail.com",use:"work"}],address:[{use:"work",type:"both",line:["Jalan Jati Asih"],city:"Jakarta",postalCode:"55292",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"31"},{url:"city",valueCode:"3171"},{url:"district",valueCode:"317101"},{url:"village",valueCode:"31710101"}]}]}],partOf:{reference:"Organization/10000004"}}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"655b0866ff1bbe7ae30a3d7f"}],responses:{200:{description:"OK",headers:{etag:{schema:{type:"string",example:'W/"MTY2MzkwNTU5MzYwNTg2MTAwMA"'}},"last-modified":{schema:{type:"string",example:"Fri, 23 Sep 2022 03:59:53 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Organization/abddd50b-b22f-4d68-a1c3-d2c29a27698b/_history/MTY2MzkwNTU5MzYwNTg2MTAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 23 Sep 2022 03:59:53 GMT"}},"content-length":{schema:{type:"integer",example:"1861"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"6d9cad1f-0824-42e5-92c7-6cdb8b3d286b"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{active:!1,address:[{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"31"},{url:"city",valueCode:"3171"},{url:"district",valueCode:"317101"},{url:"village",valueCode:"31710101"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Jalan Jati Asih"],postalCode:"55292",type:"both",use:"work"}],id:"abddd50b-b22f-4d68-a1c3-d2c29a27698b",identifier:[{system:"http://sys-ids.kemkes.go.id/organization/10000004",use:"official",value:"R220001"}],meta:{lastUpdated:"2022-09-23T03:59:53.605861+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Organization|4.0.1"],versionId:"MTY2MzkwNTU5MzYwNTg2MTAwMA"},name:"Rawat Jalan Terpadu",partOf:{reference:"Organization/10000004"},resourceType:"Organization",telecom:[{system:"phone",use:"work",value:"+6221-783042654"},{system:"email",use:"work",value:"rs-satusehat@gmail.com"},{system:"url",use:"work",value:"www.rs-satusehat@gmail.com"}],type:[{coding:[{code:"dept",display:"Hospital Department",system:"http://terminology.hl7.org/CodeSystem/organization-type"}]}]}}}}},description:"Organization - Update",method:"put",path:"/Organization/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Organization",id:"abddd50b-b22f-4d68-a1c3-d2c29a27698b",active:!0,identifier:[{use:"official",system:"http://sys-ids.kemkes.go.id/organization/10000004",value:"R220001"}],type:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/organization-type",code:"dept",display:"Hospital Department"}]}],name:"Rawat Jalan Terpadu",telecom:[{system:"phone",value:"+6221-783042654",use:"work"},{system:"email",value:"rs-satusehat@gmail.com",use:"work"},{system:"url",value:"www.rs-satusehat@gmail.com",use:"work"}],address:[{use:"work",type:"both",line:["Jalan Jati Asih"],city:"Jakarta",postalCode:"55292",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"31"},{url:"city",valueCode:"3171"},{url:"district",valueCode:"317101"},{url:"village",valueCode:"31710101"}]}]}],partOf:{reference:"Organization/10000004"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Organization - Update",description:{type:"text/plain"},url:{path:["Organization",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Organization - By ID",permalink:"/docs/sandbox/organization-by-id"},next:{title:"Organization - Patch",permalink:"/docs/sandbox/organization-patch"}},y={},g=[{value:"Organization - Update",id:"organization---update",level:2}],h={toc:g};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"organization---update"},"Organization - Update"),(0,i.kt)("p",null,"Organization - Update"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"655b0866ff1bbe7ae30a3d7f"},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"etag"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"last-modified"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"location"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"vary"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-length"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-xss-protection"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-frame-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-content-type-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-request-id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Via"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Alt-Svc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "active": false,\n  "address": [\n    {\n      "city": "Jakarta",\n      "country": "ID",\n      "extension": [\n        {\n          "extension": [\n            {\n              "url": "province",\n              "valueCode": "31"\n            },\n            {\n              "url": "city",\n              "valueCode": "3171"\n            },\n            {\n              "url": "district",\n              "valueCode": "317101"\n            },\n            {\n              "url": "village",\n              "valueCode": "31710101"\n            }\n          ],\n          "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"\n        }\n      ],\n      "line": [\n        "Jalan Jati Asih"\n      ],\n      "postalCode": "55292",\n      "type": "both",\n      "use": "work"\n    }\n  ],\n  "id": "abddd50b-b22f-4d68-a1c3-d2c29a27698b",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/organization/10000004",\n      "use": "official",\n      "value": "R220001"\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2022-09-23T03:59:53.605861+00:00",\n    "profile": [\n      "https://fhir.kemkes.go.id/r4/StructureDefinition/Organization|4.0.1"\n    ],\n    "versionId": "MTY2MzkwNTU5MzYwNTg2MTAwMA"\n  },\n  "name": "Rawat Jalan Terpadu",\n  "partOf": {\n    "reference": "Organization/10000004"\n  },\n  "resourceType": "Organization",\n  "telecom": [\n    {\n      "system": "phone",\n      "use": "work",\n      "value": "+6221-783042654"\n    },\n    {\n      "system": "email",\n      "use": "work",\n      "value": "rs-satusehat@gmail.com"\n    },\n    {\n      "system": "url",\n      "use": "work",\n      "value": "www.rs-satusehat@gmail.com"\n    }\n  ],\n  "type": [\n    {\n      "coding": [\n        {\n          "code": "dept",\n          "display": "Hospital Department",\n          "system": "http://terminology.hl7.org/CodeSystem/organization-type"\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);