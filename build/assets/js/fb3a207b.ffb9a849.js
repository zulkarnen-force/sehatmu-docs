"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[7122],{14703:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>k});var i=a(87462),n=(a(67294),a(3905)),s=a(26389),r=a(94891),l=a(10586),m=a(47507),o=(a(24310),a(63303)),p=(a(75035),a(85162));const d={id:"patient-search-name-birtdate-nik",title:"Patient - Search Name, Birtdate, NIK",description:"Patient - Search Name, Birtdate, NIK",sidebar_label:"Patient - Search Name, Birtdate, NIK",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Patient"],parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json"},{name:"name",in:"query",schema:{type:"string"},example:"John Smith"},{name:"birthdate",in:"query",schema:{type:"string"},example:"1945-11-17"},{name:"identifier",in:"query",schema:{type:"string"},example:"https://fhir.kemkes.go.id/id/nik|3174031002890009"}],responses:{200:{description:"OK",headers:{"content-type":{schema:{type:"string",example:"application/json"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Mon, 27 Mar 2023 01:53:47 GMT"}},"content-length":{schema:{type:"integer",example:"2051"}},"X-Xss-Protection":{schema:{type:"string",example:"1; mode=block"}},"X-Frame-Options":{schema:{type:"string",example:"SAMEORIGIN"}},"X-Content-Type-Options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"b442b266-7c36-4acd-a398-30b07d8296a1"}},Via:{schema:{type:"string",example:"1.1 google"}},"Strict-Transport-Security":{schema:{type:"string",example:"max-age=31536000; includeSubDomains"}},"Referrer-Policy":{schema:{type:"string",example:"strict-origin"}},"Permissions-Policy":{schema:{type:"string",example:"camera=(), microphone=(), geolocation=(), browsing-topics=()"}},"Content-Security-Policy":{schema:{type:"string",example:"default-src 'self' http: https: data: blob: 'unsafe-inline'"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{entry:[{fullUrl:"https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/P02478375538",resource:{active:!0,address:[{city:"MUNA",country:"ID",extension:[{extension:[{url:"province",valueCode:"74"},{url:"city",valueCode:"3"},{url:"district",valueCode:"26"},{url:"village",valueCode:"1008"},{url:"rw",valueCode:"1"},{url:"rt",valueCode:"1"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["KEL.TOMBULA"],use:"home"}],birthDate:"1980-12-03",communication:[{language:{coding:[{code:"id-ID",display:"Indonesian",system:"urn:ietf:bcp:47"}],text:"Indonesian"},preferred:!0}],deceasedBoolean:!1,extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/citizenshipStatus",valueCode:"WNI"}],gender:"male",id:"P02478375538",identifier:[{system:"https://fhir.kemkes.go.id/id/ihs-number",use:"official",value:"P02478375538"},{system:"https://fhir.kemkes.go.id/id/nik",use:"official",value:"9271060312000001"}],link:[{other:{reference:"Patient/P02478375538"},type:"refer"}],meta:{lastUpdated:"2023-03-08T13:11:53.191496+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Patient"],versionId:"MTY3ODI4MTExMzE5MTQ5NjAwMA"},multipleBirthBoolean:!1,name:[{text:"patient 1",use:"official"}],resourceType:"Patient"}}],link:[{relation:"search",url:"https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/?birthdate=1980-12-03&identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C9271060312000001&name=patient"},{relation:"first",url:"https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/?birthdate=1980-12-03&identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C9271060312000001&name=patient"},{relation:"self",url:"https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/?birthdate=1980-12-03&identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C9271060312000001&name=patient"}],resourceType:"Bundle",total:1,type:"searchset"}}}}},description:"Patient - Search Name, Birtdate, NIK",method:"get",path:"/Patient",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"Patient - Search Name, Birtdate, NIK",description:{type:"text/plain"},url:{path:["Patient"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"name",value:""},{disabled:!1,key:"birthdate",value:""},{disabled:!1,key:"identifier",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},c=void 0,u={unversionedId:"sandbox/patient-search-name-birtdate-nik",id:"sandbox/patient-search-name-birtdate-nik",title:"Patient - Search Name, Birtdate, NIK",description:"Patient - Search Name, Birtdate, NIK",source:"@site/docs/sandbox/patient-search-name-birtdate-nik.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/patient-search-name-birtdate-nik",permalink:"/docs/sandbox/patient-search-name-birtdate-nik",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"patient-search-name-birtdate-nik",title:"Patient - Search Name, Birtdate, NIK",description:"Patient - Search Name, Birtdate, NIK",sidebar_label:"Patient - Search Name, Birtdate, NIK",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Patient"],parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json"},{name:"name",in:"query",schema:{type:"string"},example:"John Smith"},{name:"birthdate",in:"query",schema:{type:"string"},example:"1945-11-17"},{name:"identifier",in:"query",schema:{type:"string"},example:"https://fhir.kemkes.go.id/id/nik|3174031002890009"}],responses:{200:{description:"OK",headers:{"content-type":{schema:{type:"string",example:"application/json"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Mon, 27 Mar 2023 01:53:47 GMT"}},"content-length":{schema:{type:"integer",example:"2051"}},"X-Xss-Protection":{schema:{type:"string",example:"1; mode=block"}},"X-Frame-Options":{schema:{type:"string",example:"SAMEORIGIN"}},"X-Content-Type-Options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"b442b266-7c36-4acd-a398-30b07d8296a1"}},Via:{schema:{type:"string",example:"1.1 google"}},"Strict-Transport-Security":{schema:{type:"string",example:"max-age=31536000; includeSubDomains"}},"Referrer-Policy":{schema:{type:"string",example:"strict-origin"}},"Permissions-Policy":{schema:{type:"string",example:"camera=(), microphone=(), geolocation=(), browsing-topics=()"}},"Content-Security-Policy":{schema:{type:"string",example:"default-src 'self' http: https: data: blob: 'unsafe-inline'"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{entry:[{fullUrl:"https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/P02478375538",resource:{active:!0,address:[{city:"MUNA",country:"ID",extension:[{extension:[{url:"province",valueCode:"74"},{url:"city",valueCode:"3"},{url:"district",valueCode:"26"},{url:"village",valueCode:"1008"},{url:"rw",valueCode:"1"},{url:"rt",valueCode:"1"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["KEL.TOMBULA"],use:"home"}],birthDate:"1980-12-03",communication:[{language:{coding:[{code:"id-ID",display:"Indonesian",system:"urn:ietf:bcp:47"}],text:"Indonesian"},preferred:!0}],deceasedBoolean:!1,extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/citizenshipStatus",valueCode:"WNI"}],gender:"male",id:"P02478375538",identifier:[{system:"https://fhir.kemkes.go.id/id/ihs-number",use:"official",value:"P02478375538"},{system:"https://fhir.kemkes.go.id/id/nik",use:"official",value:"9271060312000001"}],link:[{other:{reference:"Patient/P02478375538"},type:"refer"}],meta:{lastUpdated:"2023-03-08T13:11:53.191496+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Patient"],versionId:"MTY3ODI4MTExMzE5MTQ5NjAwMA"},multipleBirthBoolean:!1,name:[{text:"patient 1",use:"official"}],resourceType:"Patient"}}],link:[{relation:"search",url:"https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/?birthdate=1980-12-03&identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C9271060312000001&name=patient"},{relation:"first",url:"https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/?birthdate=1980-12-03&identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C9271060312000001&name=patient"},{relation:"self",url:"https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/?birthdate=1980-12-03&identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C9271060312000001&name=patient"}],resourceType:"Bundle",total:1,type:"searchset"}}}}},description:"Patient - Search Name, Birtdate, NIK",method:"get",path:"/Patient",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"Patient - Search Name, Birtdate, NIK",description:{type:"text/plain"},url:{path:["Patient"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"name",value:""},{disabled:!1,key:"birthdate",value:""},{disabled:!1,key:"identifier",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Resource > Patient",permalink:"/docs/sandbox/resource-patient"},next:{title:"Patient - Create by Mother's NIK (Newborn)",permalink:"/docs/sandbox/patient-create-by-mothers-nik-newborn"}},h={},k=[{value:"Patient - Search Name, Birtdate, NIK",id:"patient---search-name-birtdate-nik",level:2}],y={toc:k};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"patient---search-name-birtdate-nik"},"Patient - Search Name, Birtdate, NIK"),(0,n.kt)("p",null,"Patient - Search Name, Birtdate, NIK"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"name",in:"query",schema:{type:"string"},example:"John Smith"},mdxType:"ParamsItem"}),(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"birthdate",in:"query",schema:{type:"string"},example:"1945-11-17"},mdxType:"ParamsItem"}),(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"identifier",in:"query",schema:{type:"string"},example:"https://fhir.kemkes.go.id/id/nik|3174031002890009"},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Response Headers")),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-type"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"vary"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content-length"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"X-Xss-Protection"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"X-Frame-Options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"X-Content-Type-Options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"x-request-id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Via"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Strict-Transport-Security"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Referrer-Policy"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Permissions-Policy"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Content-Security-Policy"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Alt-Svc"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object")))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "entry": [\n    {\n      "fullUrl": "https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/P02478375538",\n      "resource": {\n        "active": true,\n        "address": [\n          {\n            "city": "MUNA",\n            "country": "ID",\n            "extension": [\n              {\n                "extension": [\n                  {\n                    "url": "province",\n                    "valueCode": "74"\n                  },\n                  {\n                    "url": "city",\n                    "valueCode": "3"\n                  },\n                  {\n                    "url": "district",\n                    "valueCode": "26"\n                  },\n                  {\n                    "url": "village",\n                    "valueCode": "1008"\n                  },\n                  {\n                    "url": "rw",\n                    "valueCode": "1"\n                  },\n                  {\n                    "url": "rt",\n                    "valueCode": "1"\n                  }\n                ],\n                "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"\n              }\n            ],\n            "line": [\n              "KEL.TOMBULA"\n            ],\n            "use": "home"\n          }\n        ],\n        "birthDate": "1980-12-03",\n        "communication": [\n          {\n            "language": {\n              "coding": [\n                {\n                  "code": "id-ID",\n                  "display": "Indonesian",\n                  "system": "urn:ietf:bcp:47"\n                }\n              ],\n              "text": "Indonesian"\n            },\n            "preferred": true\n          }\n        ],\n        "deceasedBoolean": false,\n        "extension": [\n          {\n            "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/citizenshipStatus",\n            "valueCode": "WNI"\n          }\n        ],\n        "gender": "male",\n        "id": "P02478375538",\n        "identifier": [\n          {\n            "system": "https://fhir.kemkes.go.id/id/ihs-number",\n            "use": "official",\n            "value": "P02478375538"\n          },\n          {\n            "system": "https://fhir.kemkes.go.id/id/nik",\n            "use": "official",\n            "value": "9271060312000001"\n          }\n        ],\n        "link": [\n          {\n            "other": {\n              "reference": "Patient/P02478375538"\n            },\n            "type": "refer"\n          }\n        ],\n        "meta": {\n          "lastUpdated": "2023-03-08T13:11:53.191496+00:00",\n          "profile": [\n            "https://fhir.kemkes.go.id/r4/StructureDefinition/Patient"\n          ],\n          "versionId": "MTY3ODI4MTExMzE5MTQ5NjAwMA"\n        },\n        "multipleBirthBoolean": false,\n        "name": [\n          {\n            "text": "patient 1",\n            "use": "official"\n          }\n        ],\n        "resourceType": "Patient"\n      }\n    }\n  ],\n  "link": [\n    {\n      "relation": "search",\n      "url": "https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/?birthdate=1980-12-03&identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C9271060312000001&name=patient"\n    },\n    {\n      "relation": "first",\n      "url": "https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/?birthdate=1980-12-03&identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C9271060312000001&name=patient"\n    },\n    {\n      "relation": "self",\n      "url": "https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/?birthdate=1980-12-03&identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C9271060312000001&name=patient"\n    }\n  ],\n  "resourceType": "Bundle",\n  "total": 1,\n  "type": "searchset"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);