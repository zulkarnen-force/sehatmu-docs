"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[3802],{55912:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>y});var s=a(87462),i=(a(67294),a(3905)),n=a(26389),r=a(94891),o=(a(75190),a(47507)),l=(a(24310),a(63303)),m=(a(75035),a(85162));const u={id:"patient-create-by-mothers-nik-newborn",title:"Patient - Create by Mother's NIK (Newborn)",description:"Patient - Create by Mother's NIK (Newborn)",sidebar_label:"Patient - Create by Mother's NIK (Newborn)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Patient"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Patient",meta:{profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Patient"]},identifier:[{use:"official",system:"https://fhir.kemkes.go.id/id/nik-ibu",value:"360328000"}],active:!0,name:[{use:"official",text:"John Smith"}],telecom:[{system:"phone",value:"08123456789",use:"mobile"},{system:"phone",value:"+622123456789",use:"home"},{system:"email",value:"john.smith@xyz.com",use:"home"}],gender:"female",birthDate:"1920-02-28",deceasedBoolean:!1,address:[{use:"home",line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],city:"Jakarta",postalCode:"12950",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"2"},{url:"rw",valueCode:"2"}]}]}],maritalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",code:"M",display:"Married"}],text:"Married"},multipleBirthInteger:0,contact:[{relationship:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0131",code:"C"}]}],name:{use:"official",text:"Jane Smith"},telecom:[{system:"phone",value:"0690383372",use:"mobile"}]}],communication:[{language:{coding:[{system:"urn:ietf:bcp:47",code:"id-ID",display:"Indonesian"}],text:"Indonesian"},preferred:!0}],extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/birthPlace",valueAddress:{city:"Bandung",country:"ID"}},{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/citizenshipStatus",valueCode:"WNI"}]}}}}},security:[{bearerAuth:[]}],responses:{200:{description:"OK",headers:{"content-type":{schema:{type:"string",example:"application/json"}},"x-request-id":{schema:{type:"string",example:"1348ba7a-9c91-4723-b663-75fe0658f3c9"}},"content-length":{schema:{type:"integer",example:"125"}},date:{schema:{type:"string",example:"Fri, 03 Mar 2023 13:26:45 GMT"}},Via:{schema:{type:"string",example:"1.1 google"}},"X-Frame-Options":{schema:{type:"string",example:"SAMEORIGIN"}},"X-Content-Type-Options":{schema:{type:"string",example:"nosniff"}},"Strict-Transport-Security":{schema:{type:"string",example:"max-age=31536000; includeSubDomains"}},"Referrer-Policy":{schema:{type:"string",example:"strict-origin"}},"X-Xss-Protection":{schema:{type:"string",example:"1; mode=block"}},"Permissions-Policy":{schema:{type:"string",example:"camera=(), microphone=(), geolocation=(), browsing-topics=()"}},"Content-Security-Policy":{schema:{type:"string",example:"default-src 'self' http: https: data: blob: 'unsafe-inline'"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},examples:{"example-0":{summary:"Patient Exist",value:{success:!1,message:"Failed to create new patient, another identifier has found",data:{resourceID:"P02029102427"}}},"example-1":{summary:"Patient - Create by Mother's NIK (Newborn)",value:{success:!0,message:"New Patient has been created successfully",data:{"Patient ID:":"P02029102701"}}}}}}}},description:"Patient - Create by Mother's NIK (Newborn)",method:"post",path:"/Patient",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Patient",meta:{profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Patient"]},identifier:[{use:"official",system:"https://fhir.kemkes.go.id/id/nik-ibu",value:"360328000"}],active:!0,name:[{use:"official",text:"John Smith"}],telecom:[{system:"phone",value:"08123456789",use:"mobile"},{system:"phone",value:"+622123456789",use:"home"},{system:"email",value:"john.smith@xyz.com",use:"home"}],gender:"female",birthDate:"1920-02-28",deceasedBoolean:!1,address:[{use:"home",line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],city:"Jakarta",postalCode:"12950",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"2"},{url:"rw",valueCode:"2"}]}]}],maritalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",code:"M",display:"Married"}],text:"Married"},multipleBirthInteger:0,contact:[{relationship:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0131",code:"C"}]}],name:{use:"official",text:"Jane Smith"},telecom:[{system:"phone",value:"0690383372",use:"mobile"}]}],communication:[{language:{coding:[{system:"urn:ietf:bcp:47",code:"id-ID",display:"Indonesian"}],text:"Indonesian"},preferred:!0}],extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/birthPlace",valueAddress:{city:"Bandung",country:"ID"}},{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/citizenshipStatus",valueCode:"WNI"}]},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Patient - Create by Mother's NIK (Newborn)",description:{type:"text/plain"},url:{path:["Patient"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/sehatmu-docs",custom_edit_url:null},c=void 0,p={unversionedId:"sandbox/patient-create-by-mothers-nik-newborn",id:"sandbox/patient-create-by-mothers-nik-newborn",title:"Patient - Create by Mother's NIK (Newborn)",description:"Patient - Create by Mother's NIK (Newborn)",source:"@site/docs/sandbox/patient-create-by-mothers-nik-newborn.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/patient-create-by-mothers-nik-newborn",permalink:"/docs/sandbox/patient-create-by-mothers-nik-newborn",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"patient-create-by-mothers-nik-newborn",title:"Patient - Create by Mother's NIK (Newborn)",description:"Patient - Create by Mother's NIK (Newborn)",sidebar_label:"Patient - Create by Mother's NIK (Newborn)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Patient"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Patient",meta:{profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Patient"]},identifier:[{use:"official",system:"https://fhir.kemkes.go.id/id/nik-ibu",value:"360328000"}],active:!0,name:[{use:"official",text:"John Smith"}],telecom:[{system:"phone",value:"08123456789",use:"mobile"},{system:"phone",value:"+622123456789",use:"home"},{system:"email",value:"john.smith@xyz.com",use:"home"}],gender:"female",birthDate:"1920-02-28",deceasedBoolean:!1,address:[{use:"home",line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],city:"Jakarta",postalCode:"12950",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"2"},{url:"rw",valueCode:"2"}]}]}],maritalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",code:"M",display:"Married"}],text:"Married"},multipleBirthInteger:0,contact:[{relationship:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0131",code:"C"}]}],name:{use:"official",text:"Jane Smith"},telecom:[{system:"phone",value:"0690383372",use:"mobile"}]}],communication:[{language:{coding:[{system:"urn:ietf:bcp:47",code:"id-ID",display:"Indonesian"}],text:"Indonesian"},preferred:!0}],extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/birthPlace",valueAddress:{city:"Bandung",country:"ID"}},{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/citizenshipStatus",valueCode:"WNI"}]}}}}},security:[{bearerAuth:[]}],responses:{200:{description:"OK",headers:{"content-type":{schema:{type:"string",example:"application/json"}},"x-request-id":{schema:{type:"string",example:"1348ba7a-9c91-4723-b663-75fe0658f3c9"}},"content-length":{schema:{type:"integer",example:"125"}},date:{schema:{type:"string",example:"Fri, 03 Mar 2023 13:26:45 GMT"}},Via:{schema:{type:"string",example:"1.1 google"}},"X-Frame-Options":{schema:{type:"string",example:"SAMEORIGIN"}},"X-Content-Type-Options":{schema:{type:"string",example:"nosniff"}},"Strict-Transport-Security":{schema:{type:"string",example:"max-age=31536000; includeSubDomains"}},"Referrer-Policy":{schema:{type:"string",example:"strict-origin"}},"X-Xss-Protection":{schema:{type:"string",example:"1; mode=block"}},"Permissions-Policy":{schema:{type:"string",example:"camera=(), microphone=(), geolocation=(), browsing-topics=()"}},"Content-Security-Policy":{schema:{type:"string",example:"default-src 'self' http: https: data: blob: 'unsafe-inline'"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},examples:{"example-0":{summary:"Patient Exist",value:{success:!1,message:"Failed to create new patient, another identifier has found",data:{resourceID:"P02029102427"}}},"example-1":{summary:"Patient - Create by Mother's NIK (Newborn)",value:{success:!0,message:"New Patient has been created successfully",data:{"Patient ID:":"P02029102701"}}}}}}}},description:"Patient - Create by Mother's NIK (Newborn)",method:"post",path:"/Patient",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Patient",meta:{profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Patient"]},identifier:[{use:"official",system:"https://fhir.kemkes.go.id/id/nik-ibu",value:"360328000"}],active:!0,name:[{use:"official",text:"John Smith"}],telecom:[{system:"phone",value:"08123456789",use:"mobile"},{system:"phone",value:"+622123456789",use:"home"},{system:"email",value:"john.smith@xyz.com",use:"home"}],gender:"female",birthDate:"1920-02-28",deceasedBoolean:!1,address:[{use:"home",line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],city:"Jakarta",postalCode:"12950",country:"ID",extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"2"},{url:"rw",valueCode:"2"}]}]}],maritalStatus:{coding:[{system:"http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",code:"M",display:"Married"}],text:"Married"},multipleBirthInteger:0,contact:[{relationship:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v2-0131",code:"C"}]}],name:{use:"official",text:"Jane Smith"},telecom:[{system:"phone",value:"0690383372",use:"mobile"}]}],communication:[{language:{coding:[{system:"urn:ietf:bcp:47",code:"id-ID",display:"Indonesian"}],text:"Indonesian"},preferred:!0}],extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/birthPlace",valueAddress:{city:"Bandung",country:"ID"}},{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/citizenshipStatus",valueCode:"WNI"}]},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Patient - Create by Mother's NIK (Newborn)",description:{type:"text/plain"},url:{path:["Patient"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Patient - Search By Query",permalink:"/docs/sandbox/patient-search-by-query"},next:{title:"Patient - By ID",permalink:"/docs/sandbox/patient-by-id"}},d={},y=[{value:"Patient - Create by Mother&#39;s NIK (Newborn)",id:"patient---create-by-mothers-nik-newborn",level:2}],h={toc:y};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"patient---create-by-mothers-nik-newborn"},"Patient - Create by Mother's NIK (Newborn)"),(0,i.kt)("p",null,"Patient - Create by Mother's NIK (Newborn)"),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-request-id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-length"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Via"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"X-Frame-Options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"X-Content-Type-Options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Strict-Transport-Security"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Referrer-Policy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"X-Xss-Protection"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Permissions-Policy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Content-Security-Policy"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Alt-Svc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(m.Z,{label:"example-0",value:"example-0",mdxType:"TabItem"},(0,i.kt)("p",null," Patient Exist"),(0,i.kt)(o.Z,{responseExample:'{\n  "success": false,\n  "message": "Failed to create new patient, another identifier has found",\n  "data": {\n    "resourceID": "P02029102427"\n  }\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(m.Z,{label:"example-1",value:"example-1",mdxType:"TabItem"},(0,i.kt)("p",null," Patient - Create by Mother's NIK (Newborn)"),(0,i.kt)(o.Z,{responseExample:'{\n  "success": true,\n  "message": "New Patient has been created successfully",\n  "data": {\n    "Patient ID:": "P02029102701"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);