"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[792],{61015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var s=n(87462),i=(n(67294),n(3905)),a=n(26389),o=n(94891),r=n(75190),c=n(47507),p=(n(24310),n(63303)),l=(n(75035),n(85162));const m={id:"diagnostic-report-by-specimen-subject",title:"DiagnosticReport - By Specimen & Subject",description:"DiagnosticReport - By Specimen & Subject",sidebar_label:"DiagnosticReport - By Specimen & Subject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > DiagnosticReport"],parameters:[{name:"specimen",in:"query",schema:{type:"string"},example:"3095e36e-1624-487e-9ee4-737387e7b55f"},{name:"subject",in:"query",schema:{type:"integer"},example:"100000030009"}],responses:{200:{description:"OK",headers:{"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 02 Sep 2022 09:45:02 GMT"}},"content-length":{schema:{type:"integer",example:"2422"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"b846058f-f906-4166-8ffa-8e50e004bf96"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{entry:[{fullUrl:"https://api-SehatMu-dev.dto.kemkes.go.id/fhir-r4/v1/DiagnosticReport/a81ae9f7-6f97-46ad-9245-fc192f7fa458",resource:{category:[{coding:[{code:"MB",display:"Microbiology",system:"http://terminology.hl7.org/CodeSystem/v2-0074"}]}],code:{coding:[{code:"647-8",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain.Ziehl-Neelsen",system:"http://loinc.org"}]},conclusionCode:[{coding:[{code:"260347006",display:"+",system:"http://snomed.info/sct"}]}],effectiveDateTime:"2012-12-01T12:00:00+01:00",encounter:{reference:"Encounter/11c7253d-1474-4999-91ee-467470c31b06"},id:"a81ae9f7-6f97-46ad-9245-fc192f7fa458",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],issued:"2012-12-01T12:00:00+01:00",meta:{lastUpdated:"2022-09-02T01:25:55.627168+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/DiagnosticReport|4.0.1"],versionId:"MTY2MjA4MTk1NTYyNzE2ODAwMA"},performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],resourceType:"DiagnosticReport",result:[{reference:"Observation/889028b1-5a54-4a6f-b5ed-8083f9629b0e"}],specimen:[{reference:"Specimen/c336f80b-f033-45bf-a979-6f0c796c7849"}],status:"final",subject:{reference:"Patient/100000030009"}},search:{mode:"match"}}],resourceType:"Bundle",total:1,type:"searchset"}}}}},description:"DiagnosticReport - By Specimen & Subject",method:"get",path:"/DiagnosticReport",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"DiagnosticReport - By Specimen & Subject",description:{type:"text/plain"},url:{path:["DiagnosticReport"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"specimen",value:""},{disabled:!1,key:"subject",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},d=void 0,u={unversionedId:"sandbox/ongoing/diagnostic-report-by-specimen-subject",id:"sandbox/ongoing/diagnostic-report-by-specimen-subject",title:"DiagnosticReport - By Specimen & Subject",description:"DiagnosticReport - By Specimen & Subject",source:"@site/docs/sandbox/ongoing/diagnostic-report-by-specimen-subject.api.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/diagnostic-report-by-specimen-subject",permalink:"/docs/sandbox/ongoing/diagnostic-report-by-specimen-subject",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"diagnostic-report-by-specimen-subject",title:"DiagnosticReport - By Specimen & Subject",description:"DiagnosticReport - By Specimen & Subject",sidebar_label:"DiagnosticReport - By Specimen & Subject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > DiagnosticReport"],parameters:[{name:"specimen",in:"query",schema:{type:"string"},example:"3095e36e-1624-487e-9ee4-737387e7b55f"},{name:"subject",in:"query",schema:{type:"integer"},example:"100000030009"}],responses:{200:{description:"OK",headers:{"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 02 Sep 2022 09:45:02 GMT"}},"content-length":{schema:{type:"integer",example:"2422"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"b846058f-f906-4166-8ffa-8e50e004bf96"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{entry:[{fullUrl:"https://api-SehatMu-dev.dto.kemkes.go.id/fhir-r4/v1/DiagnosticReport/a81ae9f7-6f97-46ad-9245-fc192f7fa458",resource:{category:[{coding:[{code:"MB",display:"Microbiology",system:"http://terminology.hl7.org/CodeSystem/v2-0074"}]}],code:{coding:[{code:"647-8",display:"Microscopic observation [Identifier] in Sputum by Acid fast stain.Ziehl-Neelsen",system:"http://loinc.org"}]},conclusionCode:[{coding:[{code:"260347006",display:"+",system:"http://snomed.info/sct"}]}],effectiveDateTime:"2012-12-01T12:00:00+01:00",encounter:{reference:"Encounter/11c7253d-1474-4999-91ee-467470c31b06"},id:"a81ae9f7-6f97-46ad-9245-fc192f7fa458",identifier:[{system:"http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",use:"official",value:"5234342"}],issued:"2012-12-01T12:00:00+01:00",meta:{lastUpdated:"2022-09-02T01:25:55.627168+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/DiagnosticReport|4.0.1"],versionId:"MTY2MjA4MTk1NTYyNzE2ODAwMA"},performer:[{reference:"Practitioner/N10000001"},{reference:"Organization/10000004"}],resourceType:"DiagnosticReport",result:[{reference:"Observation/889028b1-5a54-4a6f-b5ed-8083f9629b0e"}],specimen:[{reference:"Specimen/c336f80b-f033-45bf-a979-6f0c796c7849"}],status:"final",subject:{reference:"Patient/100000030009"}},search:{mode:"match"}}],resourceType:"Bundle",total:1,type:"searchset"}}}}},description:"DiagnosticReport - By Specimen & Subject",method:"get",path:"/DiagnosticReport",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"DiagnosticReport - By Specimen & Subject",description:{type:"text/plain"},url:{path:["DiagnosticReport"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"specimen",value:""},{disabled:!1,key:"subject",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"DiagnosticReport - Create",permalink:"/docs/sandbox/ongoing/diagnostic-report-create"},next:{title:"DiagnosticReport - By ID",permalink:"/docs/sandbox/ongoing/diagnostic-report-by-id"}},y={},g=[{value:"DiagnosticReport - By Specimen &amp; Subject",id:"diagnosticreport---by-specimen--subject",level:2}],f={toc:g};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"diagnosticreport---by-specimen--subject"},"DiagnosticReport - By Specimen & Subject"),(0,i.kt)("p",null,"DiagnosticReport - By Specimen & Subject"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"specimen",in:"query",schema:{type:"string"},example:"3095e36e-1624-487e-9ee4-737387e7b55f"},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"subject",in:"query",schema:{type:"integer"},example:"100000030009"},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"vary"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-length"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-xss-protection"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-frame-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-content-type-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-request-id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Via"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Alt-Svc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "entry": [\n    {\n      "fullUrl": "https://api-SehatMu-dev.dto.kemkes.go.id/fhir-r4/v1/DiagnosticReport/a81ae9f7-6f97-46ad-9245-fc192f7fa458",\n      "resource": {\n        "category": [\n          {\n            "coding": [\n              {\n                "code": "MB",\n                "display": "Microbiology",\n                "system": "http://terminology.hl7.org/CodeSystem/v2-0074"\n              }\n            ]\n          }\n        ],\n        "code": {\n          "coding": [\n            {\n              "code": "647-8",\n              "display": "Microscopic observation [Identifier] in Sputum by Acid fast stain.Ziehl-Neelsen",\n              "system": "http://loinc.org"\n            }\n          ]\n        },\n        "conclusionCode": [\n          {\n            "coding": [\n              {\n                "code": "260347006",\n                "display": "+",\n                "system": "http://snomed.info/sct"\n              }\n            ]\n          }\n        ],\n        "effectiveDateTime": "2012-12-01T12:00:00+01:00",\n        "encounter": {\n          "reference": "Encounter/11c7253d-1474-4999-91ee-467470c31b06"\n        },\n        "id": "a81ae9f7-6f97-46ad-9245-fc192f7fa458",\n        "identifier": [\n          {\n            "system": "http://sys-ids.kemkes.go.id/diagnostic/10000004/lab",\n            "use": "official",\n            "value": "5234342"\n          }\n        ],\n        "issued": "2012-12-01T12:00:00+01:00",\n        "meta": {\n          "lastUpdated": "2022-09-02T01:25:55.627168+00:00",\n          "profile": [\n            "https://fhir.kemkes.go.id/r4/StructureDefinition/DiagnosticReport|4.0.1"\n          ],\n          "versionId": "MTY2MjA4MTk1NTYyNzE2ODAwMA"\n        },\n        "performer": [\n          {\n            "reference": "Practitioner/N10000001"\n          },\n          {\n            "reference": "Organization/10000004"\n          }\n        ],\n        "resourceType": "DiagnosticReport",\n        "result": [\n          {\n            "reference": "Observation/889028b1-5a54-4a6f-b5ed-8083f9629b0e"\n          }\n        ],\n        "specimen": [\n          {\n            "reference": "Specimen/c336f80b-f033-45bf-a979-6f0c796c7849"\n          }\n        ],\n        "status": "final",\n        "subject": {\n          "reference": "Patient/100000030009"\n        }\n      },\n      "search": {\n        "mode": "match"\n      }\n    }\n  ],\n  "resourceType": "Bundle",\n  "total": 1,\n  "type": "searchset"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);