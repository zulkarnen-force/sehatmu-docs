"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[9488],{54469:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>y});var a=s(87462),i=(s(67294),s(3905)),n=s(26389),o=s(94891),r=(s(10586),s(47507)),l=(s(24310),s(63303)),d=(s(75035),s(85162));const c={id:"composition-edukasi-diet",title:"Composition - Edukasi Diet",description:"Composition - Edukasi Diet",sidebar_label:"Composition - Edukasi Diet",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Composition"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Composition",identifier:{system:"http://sys-ids.kemkes.go.id/composition/10000004",value:"P20240001"},status:"final",type:{coding:[{system:"http://loinc.org",code:"18842-5",display:"Discharge summary"}]},category:[{coding:[{system:"http://loinc.org",code:"LP173421-1",display:"Report"}]}],subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},date:"2022-06-14",author:[{reference:"Practitioner/N10000001",display:"Dokter Bronsig"}],title:"Resume Medis Rawat Jalan",custodian:{reference:"Organization/10000004"},section:[{code:{coding:[{system:"http://loinc.org",code:"42344-2",display:"Discharge diet (narrative)"}]},text:{status:"additional",div:"Rekomendasi diet rendah lemak, rendah kalori"}}]}}}}},responses:{201:{description:"Created",headers:{"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Fri, 26 Aug 2022 07:12:33 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2MTQ5Nzk1MzIwNjEzMTAwMA"'}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Composition/e511fb00-3641-4816-a9fd-db2a55d1897d/_history/MTY2MTQ5Nzk1MzIwNjEzMTAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 26 Aug 2022 07:12:33 GMT"}},"content-length":{schema:{type:"integer",example:"1515"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"c766f17c-ddbb-476d-930c-e80b85f6498a"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{author:[{display:"Dokter Bronsig",reference:"Practitioner/N10000001"}],category:[{coding:[{code:"LP173421-1",display:"Report",system:"http://loinc.org"}]}],custodian:{reference:"Organization/10000004"},date:"2022-06-14",encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"e511fb00-3641-4816-a9fd-db2a55d1897d",identifier:{system:"http://sys-ids.kemkes.go.id/composition/10000004",value:"P20240001"},meta:{lastUpdated:"2022-08-26T07:12:33.206131+00:00",versionId:"MTY2MTQ5Nzk1MzIwNjEzMTAwMA"},resourceType:"Composition",section:[{code:{coding:[{code:"42344-2",display:"Discharge diet (narrative)",system:"http://loinc.org"}]},text:{div:"Rekomendasi diet rendah lemak, rendah kalori",status:"additional"}}],status:"final",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},title:"Resume Medis Rawat Jalan",type:{coding:[{code:"18842-5",display:"Discharge summary",system:"http://loinc.org"}]}}}}}},description:"Composition - Edukasi Diet",method:"post",path:"/compositions",servers:[{url:"http://103.19.182.20/api-sehatmu/"},{url:"http://localhost:8000"},{url:"http://{{base_url_production}}"},{url:"http://{{base_url}}"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Composition",identifier:{system:"http://sys-ids.kemkes.go.id/composition/10000004",value:"P20240001"},status:"final",type:{coding:[{system:"http://loinc.org",code:"18842-5",display:"Discharge summary"}]},category:[{coding:[{system:"http://loinc.org",code:"LP173421-1",display:"Report"}]}],subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},date:"2022-06-14",author:[{reference:"Practitioner/N10000001",display:"Dokter Bronsig"}],title:"Resume Medis Rawat Jalan",custodian:{reference:"Organization/10000004"},section:[{code:{coding:[{system:"http://loinc.org",code:"42344-2",display:"Discharge diet (narrative)"}]},text:{status:"additional",div:"Rekomendasi diet rendah lemak, rendah kalori"}}]},info:{title:"LabMu",version:"1.0.0"},postman:{name:"Composition - Edukasi Diet",description:{type:"text/plain"},url:{path:["compositions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},p=void 0,m={unversionedId:"sandbox/composition-edukasi-diet",id:"sandbox/composition-edukasi-diet",title:"Composition - Edukasi Diet",description:"Composition - Edukasi Diet",source:"@site/docs/sandbox/composition-edukasi-diet.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/composition-edukasi-diet",permalink:"/sehatmu/developer/docs/sandbox/composition-edukasi-diet",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"composition-edukasi-diet",title:"Composition - Edukasi Diet",description:"Composition - Edukasi Diet",sidebar_label:"Composition - Edukasi Diet",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Composition"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Composition",identifier:{system:"http://sys-ids.kemkes.go.id/composition/10000004",value:"P20240001"},status:"final",type:{coding:[{system:"http://loinc.org",code:"18842-5",display:"Discharge summary"}]},category:[{coding:[{system:"http://loinc.org",code:"LP173421-1",display:"Report"}]}],subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},date:"2022-06-14",author:[{reference:"Practitioner/N10000001",display:"Dokter Bronsig"}],title:"Resume Medis Rawat Jalan",custodian:{reference:"Organization/10000004"},section:[{code:{coding:[{system:"http://loinc.org",code:"42344-2",display:"Discharge diet (narrative)"}]},text:{status:"additional",div:"Rekomendasi diet rendah lemak, rendah kalori"}}]}}}}},responses:{201:{description:"Created",headers:{"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Fri, 26 Aug 2022 07:12:33 UTC"}},etag:{schema:{type:"string",example:'W/"MTY2MTQ5Nzk1MzIwNjEzMTAwMA"'}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Composition/e511fb00-3641-4816-a9fd-db2a55d1897d/_history/MTY2MTQ5Nzk1MzIwNjEzMTAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 26 Aug 2022 07:12:33 GMT"}},"content-length":{schema:{type:"integer",example:"1515"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"c766f17c-ddbb-476d-930c-e80b85f6498a"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{author:[{display:"Dokter Bronsig",reference:"Practitioner/N10000001"}],category:[{coding:[{code:"LP173421-1",display:"Report",system:"http://loinc.org"}]}],custodian:{reference:"Organization/10000004"},date:"2022-06-14",encounter:{display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"e511fb00-3641-4816-a9fd-db2a55d1897d",identifier:{system:"http://sys-ids.kemkes.go.id/composition/10000004",value:"P20240001"},meta:{lastUpdated:"2022-08-26T07:12:33.206131+00:00",versionId:"MTY2MTQ5Nzk1MzIwNjEzMTAwMA"},resourceType:"Composition",section:[{code:{coding:[{code:"42344-2",display:"Discharge diet (narrative)",system:"http://loinc.org"}]},text:{div:"Rekomendasi diet rendah lemak, rendah kalori",status:"additional"}}],status:"final",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},title:"Resume Medis Rawat Jalan",type:{coding:[{code:"18842-5",display:"Discharge summary",system:"http://loinc.org"}]}}}}}},description:"Composition - Edukasi Diet",method:"post",path:"/compositions",servers:[{url:"http://103.19.182.20/api-sehatmu/"},{url:"http://localhost:8000"},{url:"http://{{base_url_production}}"},{url:"http://{{base_url}}"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Composition",identifier:{system:"http://sys-ids.kemkes.go.id/composition/10000004",value:"P20240001"},status:"final",type:{coding:[{system:"http://loinc.org",code:"18842-5",display:"Discharge summary"}]},category:[{coding:[{system:"http://loinc.org",code:"LP173421-1",display:"Report"}]}],subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787",display:"Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022"},date:"2022-06-14",author:[{reference:"Practitioner/N10000001",display:"Dokter Bronsig"}],title:"Resume Medis Rawat Jalan",custodian:{reference:"Organization/10000004"},section:[{code:{coding:[{system:"http://loinc.org",code:"42344-2",display:"Discharge diet (narrative)"}]},text:{status:"additional",div:"Rekomendasi diet rendah lemak, rendah kalori"}}]},info:{title:"LabMu",version:"1.0.0"},postman:{name:"Composition - Edukasi Diet",description:{type:"text/plain"},url:{path:["compositions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/labmu",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Resource > Composition",permalink:"/sehatmu/developer/docs/sandbox/resource-composition"},next:{title:"Composition - Search by Encounter",permalink:"/sehatmu/developer/docs/sandbox/composition-search-by-encounter"}},u={},y=[{value:"Composition - Edukasi Diet",id:"composition---edukasi-diet",level:2}],h={toc:y};function g(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"composition---edukasi-diet"},"Composition - Edukasi Diet"),(0,i.kt)("p",null,"Composition - Edukasi Diet"),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Created")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"last-modified"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"etag"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"location"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"vary"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-length"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-xss-protection"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-frame-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-content-type-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-request-id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Via"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Alt-Svc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "author": [\n    {\n      "display": "Dokter Bronsig",\n      "reference": "Practitioner/N10000001"\n    }\n  ],\n  "category": [\n    {\n      "coding": [\n        {\n          "code": "LP173421-1",\n          "display": "Report",\n          "system": "http://loinc.org"\n        }\n      ]\n    }\n  ],\n  "custodian": {\n    "reference": "Organization/10000004"\n  },\n  "date": "2022-06-14",\n  "encounter": {\n    "display": "Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022",\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "id": "e511fb00-3641-4816-a9fd-db2a55d1897d",\n  "identifier": {\n    "system": "http://sys-ids.kemkes.go.id/composition/10000004",\n    "value": "P20240001"\n  },\n  "meta": {\n    "lastUpdated": "2022-08-26T07:12:33.206131+00:00",\n    "versionId": "MTY2MTQ5Nzk1MzIwNjEzMTAwMA"\n  },\n  "resourceType": "Composition",\n  "section": [\n    {\n      "code": {\n        "coding": [\n          {\n            "code": "42344-2",\n            "display": "Discharge diet (narrative)",\n            "system": "http://loinc.org"\n          }\n        ]\n      },\n      "text": {\n        "div": "Rekomendasi diet rendah lemak, rendah kalori",\n        "status": "additional"\n      }\n    }\n  ],\n  "status": "final",\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  },\n  "title": "Resume Medis Rawat Jalan",\n  "type": {\n    "coding": [\n      {\n        "code": "18842-5",\n        "display": "Discharge summary",\n        "system": "http://loinc.org"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);