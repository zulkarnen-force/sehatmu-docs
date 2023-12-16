"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[1104],{39554:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>g});var n=a(87462),s=(a(67294),a(3905)),i=a(26389),r=a(94891),o=a(75190),l=a(47507),m=(a(24310),a(63303)),p=(a(75035),a(85162));const u={id:"organization-search-by-queries",title:"Organization - Search by Queries",description:"Organization - Search by Queries",sidebar_label:"Organization - Search by Queries",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Organization"],parameters:[{name:"name",in:"query",schema:{type:"string"},example:"Pos Imunisasi"},{name:"partof",in:"query",schema:{type:"integer"},example:"10000004"}],responses:{200:{description:"OK",headers:{"X-Powered-By":{schema:{type:"string",example:"Express"}},"Access-Control-Allow-Origin":{schema:{type:"string",example:"*"}},"Content-Type":{schema:{type:"string",example:"application/json; charset=utf-8"}},"Content-Length":{schema:{type:"integer",example:"1191"}},ETag:{schema:{type:"string",example:'W/"4a7-d4SqCYd/e/n+jFmLUF7Bpok/oqA"'}},Date:{schema:{type:"string",example:"Mon, 20 Nov 2023 08:03:53 GMT"}},Connection:{schema:{type:"string",example:"keep-alive"}},"Keep-Alive":{schema:{type:"string",example:"timeout=5"}}},content:{"application/json":{schema:{type:"object"},example:{entry:[{resourceType:"Organization",active:!0,identifier:[{use:"official",system:"http://sys-ids.kemkes.go.id/organization/1000079374",value:"Pos Imunisasi LUBUK BATANG",_id:"655b0866ff1bbe7ae30a3d80"}],type:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/organization-type",code:"dept",display:"Hospital Department"}]}],name:"Pos Imunisasi",telecom:[{system:"phone",value:"+6221-783042654",use:"work"},{system:"email",value:"rs-SehatMu@gmail.com",use:"work"},{system:"url",value:"www.rs-SehatMu@gmail.com",use:"work"}],address:[{use:"work",type:"both",line:["Jalan Jati Asih"],city:"Jakarta",postalCode:"55292",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"31"},{url:"city",valueCode:"3171"},{url:"district",valueCode:"317101"},{url:"village",valueCode:"31710101"}]}]}],partOf:{reference:"Organization/10000004"},id:"655b0866ff1bbe7ae30a3d7f",timestamps:{created_at:"2023-11-20T07:18:50.981Z",updated_at:"2023-11-20T07:18:50.981Z"}}],resourceType:"Bundle",total:1,type:"searchset"}}}}},description:"Organization - Search by Queries",method:"get",path:"/Organization",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Organization - Search by Queries",description:{type:"text/plain"},url:{path:["Organization"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"name",value:""},{disabled:!1,key:"partof",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},c=void 0,d={unversionedId:"sandbox/ongoing/organization-search-by-queries",id:"sandbox/ongoing/organization-search-by-queries",title:"Organization - Search by Queries",description:"Organization - Search by Queries",source:"@site/docs/sandbox/ongoing/organization-search-by-queries.api.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/organization-search-by-queries",permalink:"/docs/sandbox/ongoing/organization-search-by-queries",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"organization-search-by-queries",title:"Organization - Search by Queries",description:"Organization - Search by Queries",sidebar_label:"Organization - Search by Queries",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Organization"],parameters:[{name:"name",in:"query",schema:{type:"string"},example:"Pos Imunisasi"},{name:"partof",in:"query",schema:{type:"integer"},example:"10000004"}],responses:{200:{description:"OK",headers:{"X-Powered-By":{schema:{type:"string",example:"Express"}},"Access-Control-Allow-Origin":{schema:{type:"string",example:"*"}},"Content-Type":{schema:{type:"string",example:"application/json; charset=utf-8"}},"Content-Length":{schema:{type:"integer",example:"1191"}},ETag:{schema:{type:"string",example:'W/"4a7-d4SqCYd/e/n+jFmLUF7Bpok/oqA"'}},Date:{schema:{type:"string",example:"Mon, 20 Nov 2023 08:03:53 GMT"}},Connection:{schema:{type:"string",example:"keep-alive"}},"Keep-Alive":{schema:{type:"string",example:"timeout=5"}}},content:{"application/json":{schema:{type:"object"},example:{entry:[{resourceType:"Organization",active:!0,identifier:[{use:"official",system:"http://sys-ids.kemkes.go.id/organization/1000079374",value:"Pos Imunisasi LUBUK BATANG",_id:"655b0866ff1bbe7ae30a3d80"}],type:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/organization-type",code:"dept",display:"Hospital Department"}]}],name:"Pos Imunisasi",telecom:[{system:"phone",value:"+6221-783042654",use:"work"},{system:"email",value:"rs-SehatMu@gmail.com",use:"work"},{system:"url",value:"www.rs-SehatMu@gmail.com",use:"work"}],address:[{use:"work",type:"both",line:["Jalan Jati Asih"],city:"Jakarta",postalCode:"55292",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"31"},{url:"city",valueCode:"3171"},{url:"district",valueCode:"317101"},{url:"village",valueCode:"31710101"}]}]}],partOf:{reference:"Organization/10000004"},id:"655b0866ff1bbe7ae30a3d7f",timestamps:{created_at:"2023-11-20T07:18:50.981Z",updated_at:"2023-11-20T07:18:50.981Z"}}],resourceType:"Bundle",total:1,type:"searchset"}}}}},description:"Organization - Search by Queries",method:"get",path:"/Organization",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Organization - Search by Queries",description:{type:"text/plain"},url:{path:["Organization"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"name",value:""},{disabled:!1,key:"partof",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Organization - Create",permalink:"/docs/sandbox/ongoing/organization-create"},next:{title:"Organization - By ID",permalink:"/docs/sandbox/ongoing/organization-by-id"}},y={},g=[{value:"Organization - Search by Queries",id:"organization---search-by-queries",level:2}],h={toc:g};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"organization---search-by-queries"},"Organization - Search by Queries"),(0,s.kt)("p",null,"Organization - Search by Queries"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"name",in:"query",schema:{type:"string"},example:"Pos Imunisasi"},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"partof",in:"query",schema:{type:"integer"},example:"10000004"},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"X-Powered-By"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Access-Control-Allow-Origin"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Content-Type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Content-Length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"ETag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Connection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Keep-Alive"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "entry": [\n    {\n      "resourceType": "Organization",\n      "active": true,\n      "identifier": [\n        {\n          "use": "official",\n          "system": "http://sys-ids.kemkes.go.id/organization/1000079374",\n          "value": "Pos Imunisasi LUBUK BATANG",\n          "_id": "655b0866ff1bbe7ae30a3d80"\n        }\n      ],\n      "type": [\n        {\n          "coding": [\n            {\n              "system": "http://terminology.hl7.org/CodeSystem/organization-type",\n              "code": "dept",\n              "display": "Hospital Department"\n            }\n          ]\n        }\n      ],\n      "name": "Pos Imunisasi",\n      "telecom": [\n        {\n          "system": "phone",\n          "value": "+6221-783042654",\n          "use": "work"\n        },\n        {\n          "system": "email",\n          "value": "rs-SehatMu@gmail.com",\n          "use": "work"\n        },\n        {\n          "system": "url",\n          "value": "www.rs-SehatMu@gmail.com",\n          "use": "work"\n        }\n      ],\n      "address": [\n        {\n          "use": "work",\n          "type": "both",\n          "line": [\n            "Jalan Jati Asih"\n          ],\n          "city": "Jakarta",\n          "postalCode": "55292",\n          "country": "ID",\n          "extension": [\n            {\n              "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",\n              "extension": [\n                {\n                  "url": "province",\n                  "valueCode": "31"\n                },\n                {\n                  "url": "city",\n                  "valueCode": "3171"\n                },\n                {\n                  "url": "district",\n                  "valueCode": "317101"\n                },\n                {\n                  "url": "village",\n                  "valueCode": "31710101"\n                }\n              ]\n            }\n          ]\n        }\n      ],\n      "partOf": {\n        "reference": "Organization/10000004"\n      },\n      "id": "655b0866ff1bbe7ae30a3d7f",\n      "timestamps": {\n        "created_at": "2023-11-20T07:18:50.981Z",\n        "updated_at": "2023-11-20T07:18:50.981Z"\n      }\n    }\n  ],\n  "resourceType": "Bundle",\n  "total": 1,\n  "type": "searchset"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);