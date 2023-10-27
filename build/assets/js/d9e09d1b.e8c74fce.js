"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[562],{46822:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>p,toc:()=>y});var i=a(87462),n=(a(67294),a(3905)),s=a(26389),r=a(94891),o=a(10586),l=a(47507),d=(a(24310),a(63303)),c=(a(75035),a(85162));const m={id:"practitioner-post",title:"Practitioner - POST",description:"Practitioner - POST",sidebar_label:"Practitioner - POST",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Practitioner"],requestBody:{content:{"application/json":{schema:{type:"object",example:{address:[{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],postalCode:"12950",use:"home"}],birthDate:"1945-11-17",gender:"male",id:"N10000001",identifier:[{system:"https://fhir.kemkes.go.id/id/nakes-his-number",use:"official",value:"N10000001"},{system:"https://fhir.kemkes.go.id/id/nik",use:"official",value:"367400001111201"}],meta:{lastUpdated:"2022-12-14T22:46:46.060771+00:00",versionId:"MTY3MTA1ODAwNjA2MDc3MTAwMA"},name:[{prefix:["Dr.","dr."],suffix:["MARS."],text:"Voigt",use:"official"}],qualification:[{code:{coding:[{code:"STR-KKI",display:"Surat Tanda Registrasi Dokter",system:"https://terminology.kemkes.go.id/v1-0302"}]},identifier:[{system:"https://fhir.kemkes.go.id/id/str-kki-number",use:"official",value:"2938/28377/STR/00001"}],issuer:{display:"Konsil Kedokteran Indonesia",reference:"Organization/10000003"},period:{end:"2023-01-01",start:"1995-01-01"}},{code:{coding:[{code:"BS",display:"Bachelor of Science",system:"http://terminology.hl7.org/CodeSystem/v2-0360"}],text:"Bachelor of Science"},identifier:[{system:"http://example-university.ac.id/certificate-number",value:"12345"}],issuer:{display:"Universitas Example",reference:"Organization/10000002"},period:{start:"1995"}}],resourceType:"Practitioner",telecom:[{system:"phone",use:"mobile",value:"08123456789"},{system:"phone",use:"home",value:"+622123456789"},{system:"email",use:"home",value:"voigt@xyz.com"}]}}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json"}],responses:{201:{description:"Created",headers:{"X-Powered-By":{schema:{type:"string",example:"Express"}},"Access-Control-Allow-Origin":{schema:{type:"string",example:"*"}},"Content-Type":{schema:{type:"string",example:"application/json; charset=utf-8"}},"Content-Length":{schema:{type:"integer",example:"2725"}},ETag:{schema:{type:"string",example:'W/"aa5-+77QIE8ewA3pJL1rMp7QHsrloG4"'}},Date:{schema:{type:"string",example:"Thu, 26 Oct 2023 07:18:34 GMT"}},Connection:{schema:{type:"string",example:"keep-alive"}},"Keep-Alive":{schema:{type:"string",example:"timeout=5"}}},content:{"application/json":{schema:{type:"object"},example:{address:[{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"10",_id:"653a12cafc152d304bbfa566"},{url:"city",valueCode:"1010",_id:"653a12cafc152d304bbfa567"},{url:"district",valueCode:"1010101",_id:"653a12cafc152d304bbfa568"},{url:"village",valueCode:"1010101101",_id:"653a12cafc152d304bbfa569"},{url:"rt",valueCode:"1",_id:"653a12cafc152d304bbfa56a"},{url:"rw",valueCode:"2",_id:"653a12cafc152d304bbfa56b"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",_id:"653a12cafc152d304bbfa565"}],line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],postalCode:"12950",use:"home",_id:"653a12cafc152d304bbfa564"}],birthDate:"1945-11-17T00:00:00.000Z",gender:"male",id:"653a12cafc152d304bbfa563",identifier:[{system:"https://fhir.kemkes.go.id/id/nakes-his-number",use:"official",value:"N10000001",_id:"653a12cafc152d304bbfa56c"},{system:"https://fhir.kemkes.go.id/id/nik",use:"official",value:"367400001111201",_id:"653a12cafc152d304bbfa56d"}],meta:{lastUpdated:"2022-12-14T22:46:46.060Z",versionId:"MTY3MTA1ODAwNjA2MDc3MTAwMA"},name:[{prefix:["Dr.","dr."],suffix:["MARS."],text:"Voigt",use:"official",_id:"653a12cafc152d304bbfa56e"}],qualification:[{code:{coding:[{code:"STR-KKI",display:"Surat Tanda Registrasi Dokter",system:"https://terminology.kemkes.go.id/v1-0302",_id:"653a12cafc152d304bbfa570"}]},identifier:[{system:"https://fhir.kemkes.go.id/id/str-kki-number",use:"official",value:"2938/28377/STR/00001",_id:"653a12cafc152d304bbfa571"}],issuer:{display:"Konsil Kedokteran Indonesia",reference:"Organization/10000003"},period:{end:"2023-01-01T00:00:00.000Z",start:"1995-01-01T00:00:00.000Z"},_id:"653a12cafc152d304bbfa56f"},{code:{coding:[{code:"BS",display:"Bachelor of Science",system:"http://terminology.hl7.org/CodeSystem/v2-0360",_id:"653a12cafc152d304bbfa573"}],text:"Bachelor of Science"},identifier:[{system:"http://example-university.ac.id/certificate-number",value:"12345",_id:"653a12cafc152d304bbfa574"}],issuer:{display:"Universitas Example",reference:"Organization/10000002"},period:{start:"1995-01-01T00:00:00.000Z"},_id:"653a12cafc152d304bbfa572"}],resourceType:"Practitioner",telecom:[{system:"phone",use:"mobile",value:"08123456789",_id:"653a12cafc152d304bbfa575"},{system:"phone",use:"home",value:"+622123456789",_id:"653a12cafc152d304bbfa576"},{system:"email",use:"home",value:"voigt@xyz.com",_id:"653a12cafc152d304bbfa577"}],timestamps:{created_at:"2023-10-26T07:12:57.303Z",updated_at:"2023-10-26T07:12:57.303Z"}}}}}},description:"Practitioner - POST",method:"post",path:"/Practitioner",servers:[{url:"http://103.19.182.20/api/sehatmu/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{address:[{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],postalCode:"12950",use:"home"}],birthDate:"1945-11-17",gender:"male",id:"N10000001",identifier:[{system:"https://fhir.kemkes.go.id/id/nakes-his-number",use:"official",value:"N10000001"},{system:"https://fhir.kemkes.go.id/id/nik",use:"official",value:"367400001111201"}],meta:{lastUpdated:"2022-12-14T22:46:46.060771+00:00",versionId:"MTY3MTA1ODAwNjA2MDc3MTAwMA"},name:[{prefix:["Dr.","dr."],suffix:["MARS."],text:"Voigt",use:"official"}],qualification:[{code:{coding:[{code:"STR-KKI",display:"Surat Tanda Registrasi Dokter",system:"https://terminology.kemkes.go.id/v1-0302"}]},identifier:[{system:"https://fhir.kemkes.go.id/id/str-kki-number",use:"official",value:"2938/28377/STR/00001"}],issuer:{display:"Konsil Kedokteran Indonesia",reference:"Organization/10000003"},period:{end:"2023-01-01",start:"1995-01-01"}},{code:{coding:[{code:"BS",display:"Bachelor of Science",system:"http://terminology.hl7.org/CodeSystem/v2-0360"}],text:"Bachelor of Science"},identifier:[{system:"http://example-university.ac.id/certificate-number",value:"12345"}],issuer:{display:"Universitas Example",reference:"Organization/10000002"},period:{start:"1995"}}],resourceType:"Practitioner",telecom:[{system:"phone",use:"mobile",value:"08123456789"},{system:"phone",use:"home",value:"+622123456789"},{system:"email",use:"home",value:"voigt@xyz.com"}]},info:{title:"LabMu",version:"1.0.0"},postman:{name:"Practitioner - POST",description:{type:"text/plain"},url:{path:["Practitioner"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},u=void 0,p={unversionedId:"sandbox/practitioner-post",id:"sandbox/practitioner-post",title:"Practitioner - POST",description:"Practitioner - POST",source:"@site/docs/sandbox/practitioner-post.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/practitioner-post",permalink:"/sehatmu/developer/docs/sandbox/practitioner-post",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"practitioner-post",title:"Practitioner - POST",description:"Practitioner - POST",sidebar_label:"Practitioner - POST",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Practitioner"],requestBody:{content:{"application/json":{schema:{type:"object",example:{address:[{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],postalCode:"12950",use:"home"}],birthDate:"1945-11-17",gender:"male",id:"N10000001",identifier:[{system:"https://fhir.kemkes.go.id/id/nakes-his-number",use:"official",value:"N10000001"},{system:"https://fhir.kemkes.go.id/id/nik",use:"official",value:"367400001111201"}],meta:{lastUpdated:"2022-12-14T22:46:46.060771+00:00",versionId:"MTY3MTA1ODAwNjA2MDc3MTAwMA"},name:[{prefix:["Dr.","dr."],suffix:["MARS."],text:"Voigt",use:"official"}],qualification:[{code:{coding:[{code:"STR-KKI",display:"Surat Tanda Registrasi Dokter",system:"https://terminology.kemkes.go.id/v1-0302"}]},identifier:[{system:"https://fhir.kemkes.go.id/id/str-kki-number",use:"official",value:"2938/28377/STR/00001"}],issuer:{display:"Konsil Kedokteran Indonesia",reference:"Organization/10000003"},period:{end:"2023-01-01",start:"1995-01-01"}},{code:{coding:[{code:"BS",display:"Bachelor of Science",system:"http://terminology.hl7.org/CodeSystem/v2-0360"}],text:"Bachelor of Science"},identifier:[{system:"http://example-university.ac.id/certificate-number",value:"12345"}],issuer:{display:"Universitas Example",reference:"Organization/10000002"},period:{start:"1995"}}],resourceType:"Practitioner",telecom:[{system:"phone",use:"mobile",value:"08123456789"},{system:"phone",use:"home",value:"+622123456789"},{system:"email",use:"home",value:"voigt@xyz.com"}]}}}}},parameters:[{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json"}],responses:{201:{description:"Created",headers:{"X-Powered-By":{schema:{type:"string",example:"Express"}},"Access-Control-Allow-Origin":{schema:{type:"string",example:"*"}},"Content-Type":{schema:{type:"string",example:"application/json; charset=utf-8"}},"Content-Length":{schema:{type:"integer",example:"2725"}},ETag:{schema:{type:"string",example:'W/"aa5-+77QIE8ewA3pJL1rMp7QHsrloG4"'}},Date:{schema:{type:"string",example:"Thu, 26 Oct 2023 07:18:34 GMT"}},Connection:{schema:{type:"string",example:"keep-alive"}},"Keep-Alive":{schema:{type:"string",example:"timeout=5"}}},content:{"application/json":{schema:{type:"object"},example:{address:[{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"10",_id:"653a12cafc152d304bbfa566"},{url:"city",valueCode:"1010",_id:"653a12cafc152d304bbfa567"},{url:"district",valueCode:"1010101",_id:"653a12cafc152d304bbfa568"},{url:"village",valueCode:"1010101101",_id:"653a12cafc152d304bbfa569"},{url:"rt",valueCode:"1",_id:"653a12cafc152d304bbfa56a"},{url:"rw",valueCode:"2",_id:"653a12cafc152d304bbfa56b"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",_id:"653a12cafc152d304bbfa565"}],line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],postalCode:"12950",use:"home",_id:"653a12cafc152d304bbfa564"}],birthDate:"1945-11-17T00:00:00.000Z",gender:"male",id:"653a12cafc152d304bbfa563",identifier:[{system:"https://fhir.kemkes.go.id/id/nakes-his-number",use:"official",value:"N10000001",_id:"653a12cafc152d304bbfa56c"},{system:"https://fhir.kemkes.go.id/id/nik",use:"official",value:"367400001111201",_id:"653a12cafc152d304bbfa56d"}],meta:{lastUpdated:"2022-12-14T22:46:46.060Z",versionId:"MTY3MTA1ODAwNjA2MDc3MTAwMA"},name:[{prefix:["Dr.","dr."],suffix:["MARS."],text:"Voigt",use:"official",_id:"653a12cafc152d304bbfa56e"}],qualification:[{code:{coding:[{code:"STR-KKI",display:"Surat Tanda Registrasi Dokter",system:"https://terminology.kemkes.go.id/v1-0302",_id:"653a12cafc152d304bbfa570"}]},identifier:[{system:"https://fhir.kemkes.go.id/id/str-kki-number",use:"official",value:"2938/28377/STR/00001",_id:"653a12cafc152d304bbfa571"}],issuer:{display:"Konsil Kedokteran Indonesia",reference:"Organization/10000003"},period:{end:"2023-01-01T00:00:00.000Z",start:"1995-01-01T00:00:00.000Z"},_id:"653a12cafc152d304bbfa56f"},{code:{coding:[{code:"BS",display:"Bachelor of Science",system:"http://terminology.hl7.org/CodeSystem/v2-0360",_id:"653a12cafc152d304bbfa573"}],text:"Bachelor of Science"},identifier:[{system:"http://example-university.ac.id/certificate-number",value:"12345",_id:"653a12cafc152d304bbfa574"}],issuer:{display:"Universitas Example",reference:"Organization/10000002"},period:{start:"1995-01-01T00:00:00.000Z"},_id:"653a12cafc152d304bbfa572"}],resourceType:"Practitioner",telecom:[{system:"phone",use:"mobile",value:"08123456789",_id:"653a12cafc152d304bbfa575"},{system:"phone",use:"home",value:"+622123456789",_id:"653a12cafc152d304bbfa576"},{system:"email",use:"home",value:"voigt@xyz.com",_id:"653a12cafc152d304bbfa577"}],timestamps:{created_at:"2023-10-26T07:12:57.303Z",updated_at:"2023-10-26T07:12:57.303Z"}}}}}},description:"Practitioner - POST",method:"post",path:"/Practitioner",servers:[{url:"http://103.19.182.20/api/sehatmu/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{address:[{city:"Jakarta",country:"ID",extension:[{extension:[{url:"province",valueCode:"10"},{url:"city",valueCode:"1010"},{url:"district",valueCode:"1010101"},{url:"village",valueCode:"1010101101"},{url:"rt",valueCode:"1"},{url:"rw",valueCode:"2"}],url:"https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode"}],line:["Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"],postalCode:"12950",use:"home"}],birthDate:"1945-11-17",gender:"male",id:"N10000001",identifier:[{system:"https://fhir.kemkes.go.id/id/nakes-his-number",use:"official",value:"N10000001"},{system:"https://fhir.kemkes.go.id/id/nik",use:"official",value:"367400001111201"}],meta:{lastUpdated:"2022-12-14T22:46:46.060771+00:00",versionId:"MTY3MTA1ODAwNjA2MDc3MTAwMA"},name:[{prefix:["Dr.","dr."],suffix:["MARS."],text:"Voigt",use:"official"}],qualification:[{code:{coding:[{code:"STR-KKI",display:"Surat Tanda Registrasi Dokter",system:"https://terminology.kemkes.go.id/v1-0302"}]},identifier:[{system:"https://fhir.kemkes.go.id/id/str-kki-number",use:"official",value:"2938/28377/STR/00001"}],issuer:{display:"Konsil Kedokteran Indonesia",reference:"Organization/10000003"},period:{end:"2023-01-01",start:"1995-01-01"}},{code:{coding:[{code:"BS",display:"Bachelor of Science",system:"http://terminology.hl7.org/CodeSystem/v2-0360"}],text:"Bachelor of Science"},identifier:[{system:"http://example-university.ac.id/certificate-number",value:"12345"}],issuer:{display:"Universitas Example",reference:"Organization/10000002"},period:{start:"1995"}}],resourceType:"Practitioner",telecom:[{system:"phone",use:"mobile",value:"08123456789"},{system:"phone",use:"home",value:"+622123456789"},{system:"email",use:"home",value:"voigt@xyz.com"}]},info:{title:"LabMu",version:"1.0.0"},postman:{name:"Practitioner - POST",description:{type:"text/plain"},url:{path:["Practitioner"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Practitioner - Search Name, Gender, Birthdate",permalink:"/sehatmu/developer/docs/sandbox/practitioner-search-name-gender-birthdate"},next:{title:"Practitioner - By ID",permalink:"/sehatmu/developer/docs/sandbox/practitioner-by-id"}},f={},y=[{value:"Practitioner - POST",id:"practitioner---post",level:2}],h={toc:y};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"practitioner---post"},"Practitioner - POST"),(0,n.kt)("p",null,"Practitioner - POST"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"Content-Type",in:"header",schema:{type:"string"},example:"application/json"},mdxType:"ParamsItem"})))),(0,n.kt)(r.Z,{mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object"))))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Created")),(0,n.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Response Headers")),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"X-Powered-By"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Access-Control-Allow-Origin"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Content-Type"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Content-Length"),(0,n.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"ETag"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Connection"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)),(0,n.kt)("li",{className:"schemaItem"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Keep-Alive"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string")),(0,n.kt)("div",null)))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"object")))))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "address": [\n    {\n      "city": "Jakarta",\n      "country": "ID",\n      "extension": [\n        {\n          "extension": [\n            {\n              "url": "province",\n              "valueCode": "10",\n              "_id": "653a12cafc152d304bbfa566"\n            },\n            {\n              "url": "city",\n              "valueCode": "1010",\n              "_id": "653a12cafc152d304bbfa567"\n            },\n            {\n              "url": "district",\n              "valueCode": "1010101",\n              "_id": "653a12cafc152d304bbfa568"\n            },\n            {\n              "url": "village",\n              "valueCode": "1010101101",\n              "_id": "653a12cafc152d304bbfa569"\n            },\n            {\n              "url": "rt",\n              "valueCode": "1",\n              "_id": "653a12cafc152d304bbfa56a"\n            },\n            {\n              "url": "rw",\n              "valueCode": "2",\n              "_id": "653a12cafc152d304bbfa56b"\n            }\n          ],\n          "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode",\n          "_id": "653a12cafc152d304bbfa565"\n        }\n      ],\n      "line": [\n        "Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"\n      ],\n      "postalCode": "12950",\n      "use": "home",\n      "_id": "653a12cafc152d304bbfa564"\n    }\n  ],\n  "birthDate": "1945-11-17T00:00:00.000Z",\n  "gender": "male",\n  "id": "653a12cafc152d304bbfa563",\n  "identifier": [\n    {\n      "system": "https://fhir.kemkes.go.id/id/nakes-his-number",\n      "use": "official",\n      "value": "N10000001",\n      "_id": "653a12cafc152d304bbfa56c"\n    },\n    {\n      "system": "https://fhir.kemkes.go.id/id/nik",\n      "use": "official",\n      "value": "367400001111201",\n      "_id": "653a12cafc152d304bbfa56d"\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2022-12-14T22:46:46.060Z",\n    "versionId": "MTY3MTA1ODAwNjA2MDc3MTAwMA"\n  },\n  "name": [\n    {\n      "prefix": [\n        "Dr.",\n        "dr."\n      ],\n      "suffix": [\n        "MARS."\n      ],\n      "text": "Voigt",\n      "use": "official",\n      "_id": "653a12cafc152d304bbfa56e"\n    }\n  ],\n  "qualification": [\n    {\n      "code": {\n        "coding": [\n          {\n            "code": "STR-KKI",\n            "display": "Surat Tanda Registrasi Dokter",\n            "system": "https://terminology.kemkes.go.id/v1-0302",\n            "_id": "653a12cafc152d304bbfa570"\n          }\n        ]\n      },\n      "identifier": [\n        {\n          "system": "https://fhir.kemkes.go.id/id/str-kki-number",\n          "use": "official",\n          "value": "2938/28377/STR/00001",\n          "_id": "653a12cafc152d304bbfa571"\n        }\n      ],\n      "issuer": {\n        "display": "Konsil Kedokteran Indonesia",\n        "reference": "Organization/10000003"\n      },\n      "period": {\n        "end": "2023-01-01T00:00:00.000Z",\n        "start": "1995-01-01T00:00:00.000Z"\n      },\n      "_id": "653a12cafc152d304bbfa56f"\n    },\n    {\n      "code": {\n        "coding": [\n          {\n            "code": "BS",\n            "display": "Bachelor of Science",\n            "system": "http://terminology.hl7.org/CodeSystem/v2-0360",\n            "_id": "653a12cafc152d304bbfa573"\n          }\n        ],\n        "text": "Bachelor of Science"\n      },\n      "identifier": [\n        {\n          "system": "http://example-university.ac.id/certificate-number",\n          "value": "12345",\n          "_id": "653a12cafc152d304bbfa574"\n        }\n      ],\n      "issuer": {\n        "display": "Universitas Example",\n        "reference": "Organization/10000002"\n      },\n      "period": {\n        "start": "1995-01-01T00:00:00.000Z"\n      },\n      "_id": "653a12cafc152d304bbfa572"\n    }\n  ],\n  "resourceType": "Practitioner",\n  "telecom": [\n    {\n      "system": "phone",\n      "use": "mobile",\n      "value": "08123456789",\n      "_id": "653a12cafc152d304bbfa575"\n    },\n    {\n      "system": "phone",\n      "use": "home",\n      "value": "+622123456789",\n      "_id": "653a12cafc152d304bbfa576"\n    },\n    {\n      "system": "email",\n      "use": "home",\n      "value": "voigt@xyz.com",\n      "_id": "653a12cafc152d304bbfa577"\n    }\n  ],\n  "timestamps": {\n    "created_at": "2023-10-26T07:12:57.303Z",\n    "updated_at": "2023-10-26T07:12:57.303Z"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);