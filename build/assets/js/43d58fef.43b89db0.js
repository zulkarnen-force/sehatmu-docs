"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[3303],{11344:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>c,toc:()=>g});var n=a(87462),s=(a(67294),a(3905)),i=a(26389),o=a(94891),l=a(10586),r=a(47507),d=(a(24310),a(63303)),u=(a(75035),a(85162));const m={id:"location-update",title:"Location - Update",description:"Location - Update",sidebar_label:"Location - Update",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Location"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Location",id:"dc01c797-547a-4e4d-97cd-4ece0630e380",identifier:[{system:"http://sys-ids.kemkes.go.id/location/1000001",value:"G-2-R-1A"}],status:"inactive",name:"Ruang 1A IRJT",description:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",mode:"instance",telecom:[{system:"phone",value:"2328",use:"work"},{system:"fax",value:"2329",use:"work"},{system:"email",value:"second wing admissions"},{system:"url",value:"http://sampleorg.com/southwing",use:"work"}],address:{use:"work",line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],city:"Jakarta",postalCode:"12950",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}]}]},physicalType:{coding:[{system:"http://terminology.hl7.org/CodeSystem/location-physical-type",code:"ro",display:"Room"}]},position:{longitude:-6.23115426275766,latitude:106.83239885393944,altitude:0},managingOrganization:{reference:"Organization/10000004"}}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"6535f5b0da3c1391a84c6145"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Fri, 23 Sep 2022 04:13:17 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Location/dc01c797-547a-4e4d-97cd-4ece0630e380/_history/MTY2MzkwNjM5NzQ4MDk2NzAwMA"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY2MzkwNjM5NzQ4MDk2NzAwMA"'}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 23 Sep 2022 04:13:17 GMT"}},"content-length":{schema:{type:"integer",example:"2107"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"89be164d-8ae8-41cd-9b54-bb839b3d5a0c"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},examples:{"example-0":{summary:"Location - Update",value:{address:{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],postalCode:"12950",use:"work"},description:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",id:"dc01c797-547a-4e4d-97cd-4ece0630e380",identifier:[{system:"http://sys-ids.kemkes.go.id/location/1000001",value:"G-2-R-1A"}],managingOrganization:{reference:"Organization/10000004"},meta:{lastUpdated:"2022-09-23T04:13:17.480967+00:00",versionId:"MTY2MzkwNjM5NzQ4MDk2NzAwMA"},mode:"instance",name:"Ruang 1A IRJT",physicalType:{coding:[{code:"ro",display:"Room",system:"http://terminology.hl7.org/CodeSystem/location-physical-type"}]},position:{altitude:0,latitude:106.83239885393944,longitude:-6.23115426275766},resourceType:"Location",status:"inactive",telecom:[{system:"phone",use:"work",value:"2328"},{system:"fax",use:"work",value:"2329"},{system:"email",value:"second wing admissions"},{system:"url",use:"work",value:"http://sampleorg.com/southwing"}]}},"example-1":{summary:"When Exists",value:{resourceType:"Location",identifier:[{system:"http://sys-ids.kemkes.go.id/location/1000001",value:"G-2-R-1A"}],status:"inactive",name:"Ruang 1A IRJT",description:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",mode:"instance",telecom:[{system:"phone",value:"2328",use:"work"},{system:"fax",value:"2329",use:"work"},{system:"email",value:"second wing admissions"},{system:"url",value:"http://sampleorg.com/southwing",use:"work"}],address:{use:"work",line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],city:"Jakarta",postalCode:"12950",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}]}]},physicalType:{coding:[{system:"http://terminology.hl7.org/CodeSystem/location-physical-type",code:"ro",display:"Room"}]},position:{longitude:-6.23115426275766,latitude:106.83239885393944,altitude:0},managingOrganization:{reference:"Organization/10000004"},id:"6535f5b0da3c1391a84c6145",timestamps:{created_at:"2023-10-23T04:25:01.419Z",updated_at:"2023-10-23T04:25:01.419Z"}}}}}}},404:{description:"Not Found",headers:{"X-Powered-By":{schema:{type:"string",example:"Express"}},"Access-Control-Allow-Origin":{schema:{type:"string",example:"*"}},"Content-Type":{schema:{type:"string",example:"application/json; charset=utf-8"}},"Content-Length":{schema:{type:"integer",example:"125"}},ETag:{schema:{type:"string",example:'W/"7d-a/mj3HbxfyFk/kkDBomuRYzMOMA"'}},Date:{schema:{type:"string",example:"Mon, 23 Oct 2023 04:29:18 GMT"}},Connection:{schema:{type:"string",example:"keep-alive"}},"Keep-Alive":{schema:{type:"string",example:"timeout=5"}}},content:{"application/json":{schema:{type:"object"},example:{resourceType:"OperationOutcome",issue:[{severity:"error",code:"not-found",details:{text:"resource not found"}}]}}}}},description:"Location - Update",method:"put",path:"/Location/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Location",id:"dc01c797-547a-4e4d-97cd-4ece0630e380",identifier:[{system:"http://sys-ids.kemkes.go.id/location/1000001",value:"G-2-R-1A"}],status:"inactive",name:"Ruang 1A IRJT",description:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",mode:"instance",telecom:[{system:"phone",value:"2328",use:"work"},{system:"fax",value:"2329",use:"work"},{system:"email",value:"second wing admissions"},{system:"url",value:"http://sampleorg.com/southwing",use:"work"}],address:{use:"work",line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],city:"Jakarta",postalCode:"12950",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}]}]},physicalType:{coding:[{system:"http://terminology.hl7.org/CodeSystem/location-physical-type",code:"ro",display:"Room"}]},position:{longitude:-6.23115426275766,latitude:106.83239885393944,altitude:0},managingOrganization:{reference:"Organization/10000004"}},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"Location - Update",description:{type:"text/plain"},url:{path:["Location",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},p=void 0,c={unversionedId:"sandbox/location-update",id:"sandbox/location-update",title:"Location - Update",description:"Location - Update",source:"@site/docs/sandbox/location-update.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/location-update",permalink:"/sehatmu/developer/docs/sandbox/location-update",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"location-update",title:"Location - Update",description:"Location - Update",sidebar_label:"Location - Update",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Location"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Location",id:"dc01c797-547a-4e4d-97cd-4ece0630e380",identifier:[{system:"http://sys-ids.kemkes.go.id/location/1000001",value:"G-2-R-1A"}],status:"inactive",name:"Ruang 1A IRJT",description:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",mode:"instance",telecom:[{system:"phone",value:"2328",use:"work"},{system:"fax",value:"2329",use:"work"},{system:"email",value:"second wing admissions"},{system:"url",value:"http://sampleorg.com/southwing",use:"work"}],address:{use:"work",line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],city:"Jakarta",postalCode:"12950",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}]}]},physicalType:{coding:[{system:"http://terminology.hl7.org/CodeSystem/location-physical-type",code:"ro",display:"Room"}]},position:{longitude:-6.23115426275766,latitude:106.83239885393944,altitude:0},managingOrganization:{reference:"Organization/10000004"}}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"6535f5b0da3c1391a84c6145"}],responses:{200:{description:"OK",headers:{"last-modified":{schema:{type:"string",example:"Fri, 23 Sep 2022 04:13:17 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Location/dc01c797-547a-4e4d-97cd-4ece0630e380/_history/MTY2MzkwNjM5NzQ4MDk2NzAwMA"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},etag:{schema:{type:"string",example:'W/"MTY2MzkwNjM5NzQ4MDk2NzAwMA"'}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 23 Sep 2022 04:13:17 GMT"}},"content-length":{schema:{type:"integer",example:"2107"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"89be164d-8ae8-41cd-9b54-bb839b3d5a0c"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},examples:{"example-0":{summary:"Location - Update",value:{address:{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],postalCode:"12950",use:"work"},description:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",id:"dc01c797-547a-4e4d-97cd-4ece0630e380",identifier:[{system:"http://sys-ids.kemkes.go.id/location/1000001",value:"G-2-R-1A"}],managingOrganization:{reference:"Organization/10000004"},meta:{lastUpdated:"2022-09-23T04:13:17.480967+00:00",versionId:"MTY2MzkwNjM5NzQ4MDk2NzAwMA"},mode:"instance",name:"Ruang 1A IRJT",physicalType:{coding:[{code:"ro",display:"Room",system:"http://terminology.hl7.org/CodeSystem/location-physical-type"}]},position:{altitude:0,latitude:106.83239885393944,longitude:-6.23115426275766},resourceType:"Location",status:"inactive",telecom:[{system:"phone",use:"work",value:"2328"},{system:"fax",use:"work",value:"2329"},{system:"email",value:"second wing admissions"},{system:"url",use:"work",value:"http://sampleorg.com/southwing"}]}},"example-1":{summary:"When Exists",value:{resourceType:"Location",identifier:[{system:"http://sys-ids.kemkes.go.id/location/1000001",value:"G-2-R-1A"}],status:"inactive",name:"Ruang 1A IRJT",description:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",mode:"instance",telecom:[{system:"phone",value:"2328",use:"work"},{system:"fax",value:"2329",use:"work"},{system:"email",value:"second wing admissions"},{system:"url",value:"http://sampleorg.com/southwing",use:"work"}],address:{use:"work",line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],city:"Jakarta",postalCode:"12950",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}]}]},physicalType:{coding:[{system:"http://terminology.hl7.org/CodeSystem/location-physical-type",code:"ro",display:"Room"}]},position:{longitude:-6.23115426275766,latitude:106.83239885393944,altitude:0},managingOrganization:{reference:"Organization/10000004"},id:"6535f5b0da3c1391a84c6145",timestamps:{created_at:"2023-10-23T04:25:01.419Z",updated_at:"2023-10-23T04:25:01.419Z"}}}}}}},404:{description:"Not Found",headers:{"X-Powered-By":{schema:{type:"string",example:"Express"}},"Access-Control-Allow-Origin":{schema:{type:"string",example:"*"}},"Content-Type":{schema:{type:"string",example:"application/json; charset=utf-8"}},"Content-Length":{schema:{type:"integer",example:"125"}},ETag:{schema:{type:"string",example:'W/"7d-a/mj3HbxfyFk/kkDBomuRYzMOMA"'}},Date:{schema:{type:"string",example:"Mon, 23 Oct 2023 04:29:18 GMT"}},Connection:{schema:{type:"string",example:"keep-alive"}},"Keep-Alive":{schema:{type:"string",example:"timeout=5"}}},content:{"application/json":{schema:{type:"object"},example:{resourceType:"OperationOutcome",issue:[{severity:"error",code:"not-found",details:{text:"resource not found"}}]}}}}},description:"Location - Update",method:"put",path:"/Location/{id}",servers:[{url:"http://103.19.182.20/api/sehatmu/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Location",id:"dc01c797-547a-4e4d-97cd-4ece0630e380",identifier:[{system:"http://sys-ids.kemkes.go.id/location/1000001",value:"G-2-R-1A"}],status:"inactive",name:"Ruang 1A IRJT",description:"Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",mode:"instance",telecom:[{system:"phone",value:"2328",use:"work"},{system:"fax",value:"2329",use:"work"},{system:"email",value:"second wing admissions"},{system:"url",value:"http://sampleorg.com/southwing",use:"work"}],address:{use:"work",line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],city:"Jakarta",postalCode:"12950",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}]}]},physicalType:{coding:[{system:"http://terminology.hl7.org/CodeSystem/location-physical-type",code:"ro",display:"Room"}]},position:{longitude:-6.23115426275766,latitude:106.83239885393944,altitude:0},managingOrganization:{reference:"Organization/10000004"}},info:{title:"SehatMu",version:"1.0.0"},postman:{name:"Location - Update",description:{type:"text/plain"},url:{path:["Location",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/sehatmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Location - By ID",permalink:"/sehatmu/developer/docs/sandbox/location-by-id"},next:{title:"Location - Patch",permalink:"/sehatmu/developer/docs/sandbox/location-patch"}},y={},g=[{value:"Location - Update",id:"location---update",level:2}],k={toc:g};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"location---update"},"Location - Update"),(0,s.kt)("p",null,"Location - Update"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"6535f5b0da3c1391a84c6145"},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object"))))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last-modified"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"etag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"vary"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-xss-protection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-frame-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-content-type-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-request-id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Via"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Alt-Svc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(u.Z,{label:"example-0",value:"example-0",mdxType:"TabItem"},(0,s.kt)("p",null," Location - Update"),(0,s.kt)(r.Z,{responseExample:'{\n  "address": {\n    "city": "Jakarta",\n    "country": "ID",\n    "extension": [\n      {\n        "extension": [\n          {\n            "url": "province",\n            "valueCode": "10"\n          },\n          {\n            "url": "city",\n            "valueCode": "1010"\n          },\n          {\n            "url": "district",\n            "valueCode": "1010101"\n          },\n          {\n            "url": "village",\n            "valueCode": "1010101101"\n          },\n          {\n            "url": "rt",\n            "valueCode": "1"\n          },\n          {\n            "url": "rw",\n            "valueCode": "2"\n          }\n        ],\n        "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"\n      }\n    ],\n    "line": [\n      "Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"\n    ],\n    "postalCode": "12950",\n    "use": "work"\n  },\n  "description": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",\n  "id": "dc01c797-547a-4e4d-97cd-4ece0630e380",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/location/1000001",\n      "value": "G-2-R-1A"\n    }\n  ],\n  "managingOrganization": {\n    "reference": "Organization/10000004"\n  },\n  "meta": {\n    "lastUpdated": "2022-09-23T04:13:17.480967+00:00",\n    "versionId": "MTY2MzkwNjM5NzQ4MDk2NzAwMA"\n  },\n  "mode": "instance",\n  "name": "Ruang 1A IRJT",\n  "physicalType": {\n    "coding": [\n      {\n        "code": "ro",\n        "display": "Room",\n        "system": "http://terminology.hl7.org/CodeSystem/location-physical-type"\n      }\n    ]\n  },\n  "position": {\n    "altitude": 0,\n    "latitude": 106.83239885393944,\n    "longitude": -6.23115426275766\n  },\n  "resourceType": "Location",\n  "status": "inactive",\n  "telecom": [\n    {\n      "system": "phone",\n      "use": "work",\n      "value": "2328"\n    },\n    {\n      "system": "fax",\n      "use": "work",\n      "value": "2329"\n    },\n    {\n      "system": "email",\n      "value": "second wing admissions"\n    },\n    {\n      "system": "url",\n      "use": "work",\n      "value": "http://sampleorg.com/southwing"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(u.Z,{label:"example-1",value:"example-1",mdxType:"TabItem"},(0,s.kt)("p",null," When Exists"),(0,s.kt)(r.Z,{responseExample:'{\n  "resourceType": "Location",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/location/1000001",\n      "value": "G-2-R-1A"\n    }\n  ],\n  "status": "inactive",\n  "name": "Ruang 1A IRJT",\n  "description": "Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G",\n  "mode": "instance",\n  "telecom": [\n    {\n      "system": "phone",\n      "value": "2328",\n      "use": "work"\n    },\n    {\n      "system": "fax",\n      "value": "2329",\n      "use": "work"\n    },\n    {\n      "system": "email",\n      "value": "second wing admissions"\n    },\n    {\n      "system": "url",\n      "value": "http://sampleorg.com/southwing",\n      "use": "work"\n    }\n  ],\n  "address": {\n    "use": "work",\n    "line": [\n      "Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"\n    ],\n    "city": "Jakarta",\n    "postalCode": "12950",\n    "country": "ID",\n    "extension": [\n      {\n        "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",\n        "extension": [\n          {\n            "url": "province",\n            "valueCode": "10"\n          },\n          {\n            "url": "city",\n            "valueCode": "1010"\n          },\n          {\n            "url": "district",\n            "valueCode": "1010101"\n          },\n          {\n            "url": "village",\n            "valueCode": "1010101101"\n          },\n          {\n            "url": "rt",\n            "valueCode": "1"\n          },\n          {\n            "url": "rw",\n            "valueCode": "2"\n          }\n        ]\n      }\n    ]\n  },\n  "physicalType": {\n    "coding": [\n      {\n        "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",\n        "code": "ro",\n        "display": "Room"\n      }\n    ]\n  },\n  "position": {\n    "longitude": -6.23115426275766,\n    "latitude": 106.83239885393944,\n    "altitude": 0\n  },\n  "managingOrganization": {\n    "reference": "Organization/10000004"\n  },\n  "id": "6535f5b0da3c1391a84c6145",\n  "timestamps": {\n    "created_at": "2023-10-23T04:25:01.419Z",\n    "updated_at": "2023-10-23T04:25:01.419Z"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(u.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Not Found")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"X-Powered-By"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Access-Control-Allow-Origin"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Content-Type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Content-Length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"ETag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Connection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Keep-Alive"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(u.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "not-found",\n      "details": {\n        "text": "resource not found"\n      }\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);