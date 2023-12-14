"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[5294],{39763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var n=a(87462),s=(a(67294),a(3905)),i=a(26389),o=a(94891),l=a(75190),r=a(47507),c=(a(24310),a(63303)),p=(a(75035),a(85162));const m={id:"location-patch",title:"Location - Patch",description:"Location - Patch",sidebar_label:"Location - Patch",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Location"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/status",value:"inactive"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"dc01c797-547a-4e4d-97cd-4ece0630e380"}],responses:{200:{description:"OK",headers:{"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Thu, 06 Oct 2022 11:04:49 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2NTA1NDI4OTQ0MDgwNzAwMA"'}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Location/dc01c797-547a-4e4d-97cd-4ece0630e380/_history/MTY2NTA1NDI4OTQ0MDgwNzAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 06 Oct 2022 11:04:49 GMT"}},"content-length":{schema:{type:"integer",example:"2107"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"f9ae82be-6014-4e95-ac20-2c14a03438a0"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{address:{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],postalCode:"12950",use:"work"},description:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",id:"dc01c797-547a-4e4d-97cd-4ece0630e380",identifier:[{system:"http://sys-ids.kemkes.go.id/location/1000001",value:"G-2-R-1A"}],managingOrganization:{reference:"Organization/10000004"},meta:{lastUpdated:"2022-10-06T11:04:49.440807+00:00",versionId:"MTY2NTA1NDI4OTQ0MDgwNzAwMA"},mode:"instance",name:"Ruang 1A IRJT",physicalType:{coding:[{code:"ro",display:"Room",system:"http://terminology.hl7.org/CodeSystem/location-physical-type"}]},position:{altitude:0,latitude:106.83239885393944,longitude:-6.23115426275766},resourceType:"Location",status:"inactive",telecom:[{system:"phone",use:"work",value:"2328"},{system:"fax",use:"work",value:"2329"},{system:"email",value:"second wing admissions"},{system:"url",use:"work",value:"http://sampleorg.com/southwing"}]}}}}},description:"Location - Patch",method:"patch",path:"/Location/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:[{op:"replace",path:"/status",value:"inactive"}],info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Location - Patch",description:{type:"text/plain"},url:{path:["Location",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/sehatmu-docs",custom_edit_url:null},d=void 0,u={unversionedId:"sandbox/location-patch",id:"sandbox/location-patch",title:"Location - Patch",description:"Location - Patch",source:"@site/docs/sandbox/location-patch.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/location-patch",permalink:"/docs/sandbox/location-patch",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"location-patch",title:"Location - Patch",description:"Location - Patch",sidebar_label:"Location - Patch",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Location"],requestBody:{content:{"application/json":{schema:{type:"object",example:[{op:"replace",path:"/status",value:"inactive"}]}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},{name:"id",in:"path",schema:{type:"string"},required:!0,example:"dc01c797-547a-4e4d-97cd-4ece0630e380"}],responses:{200:{description:"OK",headers:{"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Thu, 06 Oct 2022 11:04:49 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2NTA1NDI4OTQ0MDgwNzAwMA"'}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Location/dc01c797-547a-4e4d-97cd-4ece0630e380/_history/MTY2NTA1NDI4OTQ0MDgwNzAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 06 Oct 2022 11:04:49 GMT"}},"content-length":{schema:{type:"integer",example:"2107"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"f9ae82be-6014-4e95-ac20-2c14a03438a0"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{address:{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],postalCode:"12950",use:"work"},description:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",id:"dc01c797-547a-4e4d-97cd-4ece0630e380",identifier:[{system:"http://sys-ids.kemkes.go.id/location/1000001",value:"G-2-R-1A"}],managingOrganization:{reference:"Organization/10000004"},meta:{lastUpdated:"2022-10-06T11:04:49.440807+00:00",versionId:"MTY2NTA1NDI4OTQ0MDgwNzAwMA"},mode:"instance",name:"Ruang 1A IRJT",physicalType:{coding:[{code:"ro",display:"Room",system:"http://terminology.hl7.org/CodeSystem/location-physical-type"}]},position:{altitude:0,latitude:106.83239885393944,longitude:-6.23115426275766},resourceType:"Location",status:"inactive",telecom:[{system:"phone",use:"work",value:"2328"},{system:"fax",use:"work",value:"2329"},{system:"email",value:"second wing admissions"},{system:"url",use:"work",value:"http://sampleorg.com/southwing"}]}}}}},description:"Location - Patch",method:"patch",path:"/Location/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:[{op:"replace",path:"/status",value:"inactive"}],info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Location - Patch",description:{type:"text/plain"},url:{path:["Location",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/sandbox/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Location - Update",permalink:"/docs/sandbox/location-update"},next:{title:"Resource > Condition",permalink:"/docs/sandbox/resource-condition"}},y={},h=[{value:"Location - Patch",id:"location---patch",level:2}],g={toc:h};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"location---patch"},"Location - Patch"),(0,s.kt)("p",null,"Location - Patch"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"dc01c797-547a-4e4d-97cd-4ece0630e380"},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json-patch+json"},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object"))))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last-modified"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"etag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"vary"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-xss-protection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-frame-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-content-type-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-request-id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Via"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Alt-Svc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "address": {\n    "city": "Jakarta",\n    "country": "ID",\n    "extension": [\n      {\n        "extension": [\n          {\n            "url": "province",\n            "valueCode": "10"\n          },\n          {\n            "url": "city",\n            "valueCode": "1010"\n          },\n          {\n            "url": "district",\n            "valueCode": "1010101"\n          },\n          {\n            "url": "village",\n            "valueCode": "1010101101"\n          },\n          {\n            "url": "rt",\n            "valueCode": "1"\n          },\n          {\n            "url": "rw",\n            "valueCode": "2"\n          }\n        ],\n        "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"\n      }\n    ],\n    "line": [\n      "Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"\n    ],\n    "postalCode": "12950",\n    "use": "work"\n  },\n  "description": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",\n  "id": "dc01c797-547a-4e4d-97cd-4ece0630e380",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/location/1000001",\n      "value": "G-2-R-1A"\n    }\n  ],\n  "managingOrganization": {\n    "reference": "Organization/10000004"\n  },\n  "meta": {\n    "lastUpdated": "2022-10-06T11:04:49.440807+00:00",\n    "versionId": "MTY2NTA1NDI4OTQ0MDgwNzAwMA"\n  },\n  "mode": "instance",\n  "name": "Ruang 1A IRJT",\n  "physicalType": {\n    "coding": [\n      {\n        "code": "ro",\n        "display": "Room",\n        "system": "http://terminology.hl7.org/CodeSystem/location-physical-type"\n      }\n    ]\n  },\n  "position": {\n    "altitude": 0,\n    "latitude": 106.83239885393944,\n    "longitude": -6.23115426275766\n  },\n  "resourceType": "Location",\n  "status": "inactive",\n  "telecom": [\n    {\n      "system": "phone",\n      "use": "work",\n      "value": "2328"\n    },\n    {\n      "system": "fax",\n      "use": "work",\n      "value": "2329"\n    },\n    {\n      "system": "email",\n      "value": "second wing admissions"\n    },\n    {\n      "system": "url",\n      "use": "work",\n      "value": "http://sampleorg.com/southwing"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);