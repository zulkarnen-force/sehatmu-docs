"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[1743],{96946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var s=n(87462),i=(n(67294),n(3905)),a=n(26389),o=n(94891),r=n(75190),d=n(47507),l=(n(24310),n(63303)),c=(n(75035),n(85162));const p={id:"encounter-update-finished",title:"Encounter - Update Finished",description:"Encounter - Update Finished",sidebar_label:"Encounter - Update Finished",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Encounter"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Encounter",id:"3dedcec9-885d-435e-9ac5-58853cb216bb",identifier:[{system:"http://sys-ids.kemkes.go.id/encounter/1000004",value:"P20240001"}],status:"finished",class:{system:"http://terminology.hl7.org/CodeSystem/v3-ActCode",code:"AMB",display:"ambulatory"},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},participant:[{type:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v3-ParticipationType",code:"ATND",display:"attender"}]}],individual:{reference:"Practitioner/N10000001",display:"Dokter Bronsig"}}],period:{start:"2022-06-14T07:00:00+07:00",end:"2022-06-14T09:00:00+07:00"},location:[{location:{reference:"Location/ef011065-38c9-46f8-9c35-d1fe68966a3e",display:"Ruang 1A, Poliklinik Rawat Jalan"}}],diagnosis:[{condition:{reference:"Condition/4bbbe654-14f5-4ab3-a36e-a1e307f67bb8",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"},use:{coding:[{system:"http://terminology.hl7.org/CodeSystem/diagnosis-role",code:"DD",display:"Discharge diagnosis"}]},rank:1},{condition:{reference:"Condition/666970c2-d79f-4242-89f9-d0ffab9e36cf",display:"Non-insulin-dependent diabetes mellitus without complications"},use:{coding:[{system:"http://terminology.hl7.org/CodeSystem/diagnosis-role",code:"DD",display:"Discharge diagnosis"}]},rank:2}],statusHistory:[{status:"arrived",period:{start:"2022-06-14T07:00:00+07:00",end:"2022-06-14T08:00:00+07:00"}},{status:"in-progress",period:{start:"2022-06-14T08:00:00+07:00",end:"2022-06-14T09:00:00+07:00"}},{status:"finished",period:{start:"2022-06-14T09:00:00+07:00",end:"2022-06-14T09:00:00+07:00"}}],serviceProvider:{reference:"Organization/10000004"}}}}}},security:[{bearerAuth:[]}],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"657d68bf9b323d3530919bf6"}],responses:{200:{description:"OK",headers:{location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/ihs-1-339301/locations/asia-southeast1/datasets/ihs/fhirStores/poc-fhir/fhir/Encounter/3dedcec9-885d-435e-9ac5-58853cb216bb/_history/MTY2MDAxMzA5MDY3MDY5MDAwMA"}},etag:{schema:{type:"string",example:'W/"MTY2MDAxMzA5MDY3MDY5MDAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Tue, 09 Aug 2022 02:44:50 UTC"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Tue, 09 Aug 2022 02:44:50 GMT"}},"content-length":{schema:{type:"integer",example:"2745"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"54e509b0-5fe2-499c-96db-260bedda583a"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{class:{code:"AMB",display:"ambulatory",system:"http://terminology.hl7.org/CodeSystem/v3-ActCode"},diagnosis:[{condition:{display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",reference:"Condition/4bbbe654-14f5-4ab3-a36e-a1e307f67bb8"},rank:1,use:{coding:[{code:"DD",display:"Discharge diagnosis",system:"http://terminology.hl7.org/CodeSystem/diagnosis-role"}]}},{condition:{display:"Non-insulin-dependent diabetes mellitus without complications",reference:"Condition/666970c2-d79f-4242-89f9-d0ffab9e36cf"},rank:2,use:{coding:[{code:"DD",display:"Discharge diagnosis",system:"http://terminology.hl7.org/CodeSystem/diagnosis-role"}]}}],id:"3dedcec9-885d-435e-9ac5-58853cb216bb",identifier:[{system:"http://sys-ids.kemkes.go.id/encounter/1000004",value:"P20240001"}],location:[{location:{display:"Ruang 1A, Poliklinik Rawat Jalan",reference:"Location/ef011065-38c9-46f8-9c35-d1fe68966a3e"}}],meta:{lastUpdated:"2022-08-09T02:44:50.670690+00:00",versionId:"MTY2MDAxMzA5MDY3MDY5MDAwMA"},participant:[{individual:{display:"Dokter Bronsig",reference:"Practitioner/N10000001"},type:[{coding:[{code:"ATND",display:"attender",system:"http://terminology.hl7.org/CodeSystem/v3-ParticipationType"}]}]}],period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-14T07:00:00+07:00"},resourceType:"Encounter",serviceProvider:{reference:"Organization/10000004"},status:"finished",statusHistory:[{period:{end:"2022-06-14T08:00:00+07:00",start:"2022-06-14T07:00:00+07:00"},status:"arrived"},{period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-14T08:00:00+07:00"},status:"in-progress"},{period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-14T09:00:00+07:00"},status:"finished"}],subject:{display:"Budi Santoso",reference:"Patient/100000030009"}}}}}},description:"Encounter - Update Finished",method:"put",path:"/Encounter/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Encounter",id:"3dedcec9-885d-435e-9ac5-58853cb216bb",identifier:[{system:"http://sys-ids.kemkes.go.id/encounter/1000004",value:"P20240001"}],status:"finished",class:{system:"http://terminology.hl7.org/CodeSystem/v3-ActCode",code:"AMB",display:"ambulatory"},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},participant:[{type:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v3-ParticipationType",code:"ATND",display:"attender"}]}],individual:{reference:"Practitioner/N10000001",display:"Dokter Bronsig"}}],period:{start:"2022-06-14T07:00:00+07:00",end:"2022-06-14T09:00:00+07:00"},location:[{location:{reference:"Location/ef011065-38c9-46f8-9c35-d1fe68966a3e",display:"Ruang 1A, Poliklinik Rawat Jalan"}}],diagnosis:[{condition:{reference:"Condition/4bbbe654-14f5-4ab3-a36e-a1e307f67bb8",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"},use:{coding:[{system:"http://terminology.hl7.org/CodeSystem/diagnosis-role",code:"DD",display:"Discharge diagnosis"}]},rank:1},{condition:{reference:"Condition/666970c2-d79f-4242-89f9-d0ffab9e36cf",display:"Non-insulin-dependent diabetes mellitus without complications"},use:{coding:[{system:"http://terminology.hl7.org/CodeSystem/diagnosis-role",code:"DD",display:"Discharge diagnosis"}]},rank:2}],statusHistory:[{status:"arrived",period:{start:"2022-06-14T07:00:00+07:00",end:"2022-06-14T08:00:00+07:00"}},{status:"in-progress",period:{start:"2022-06-14T08:00:00+07:00",end:"2022-06-14T09:00:00+07:00"}},{status:"finished",period:{start:"2022-06-14T09:00:00+07:00",end:"2022-06-14T09:00:00+07:00"}}],serviceProvider:{reference:"Organization/10000004"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Encounter - Update Finished",description:{type:"text/plain"},url:{path:["Encounter",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/sehatmu-docs",custom_edit_url:null},m=void 0,u={unversionedId:"sandbox/encounter-update-finished",id:"sandbox/encounter-update-finished",title:"Encounter - Update Finished",description:"Encounter - Update Finished",source:"@site/docs/sandbox/encounter-update-finished.api.mdx",sourceDirName:"sandbox",slug:"/sandbox/encounter-update-finished",permalink:"/docs/sandbox/encounter-update-finished",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"encounter-update-finished",title:"Encounter - Update Finished",description:"Encounter - Update Finished",sidebar_label:"Encounter - Update Finished",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Encounter"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Encounter",id:"3dedcec9-885d-435e-9ac5-58853cb216bb",identifier:[{system:"http://sys-ids.kemkes.go.id/encounter/1000004",value:"P20240001"}],status:"finished",class:{system:"http://terminology.hl7.org/CodeSystem/v3-ActCode",code:"AMB",display:"ambulatory"},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},participant:[{type:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v3-ParticipationType",code:"ATND",display:"attender"}]}],individual:{reference:"Practitioner/N10000001",display:"Dokter Bronsig"}}],period:{start:"2022-06-14T07:00:00+07:00",end:"2022-06-14T09:00:00+07:00"},location:[{location:{reference:"Location/ef011065-38c9-46f8-9c35-d1fe68966a3e",display:"Ruang 1A, Poliklinik Rawat Jalan"}}],diagnosis:[{condition:{reference:"Condition/4bbbe654-14f5-4ab3-a36e-a1e307f67bb8",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"},use:{coding:[{system:"http://terminology.hl7.org/CodeSystem/diagnosis-role",code:"DD",display:"Discharge diagnosis"}]},rank:1},{condition:{reference:"Condition/666970c2-d79f-4242-89f9-d0ffab9e36cf",display:"Non-insulin-dependent diabetes mellitus without complications"},use:{coding:[{system:"http://terminology.hl7.org/CodeSystem/diagnosis-role",code:"DD",display:"Discharge diagnosis"}]},rank:2}],statusHistory:[{status:"arrived",period:{start:"2022-06-14T07:00:00+07:00",end:"2022-06-14T08:00:00+07:00"}},{status:"in-progress",period:{start:"2022-06-14T08:00:00+07:00",end:"2022-06-14T09:00:00+07:00"}},{status:"finished",period:{start:"2022-06-14T09:00:00+07:00",end:"2022-06-14T09:00:00+07:00"}}],serviceProvider:{reference:"Organization/10000004"}}}}}},security:[{bearerAuth:[]}],parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"657d68bf9b323d3530919bf6"}],responses:{200:{description:"OK",headers:{location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/ihs-1-339301/locations/asia-southeast1/datasets/ihs/fhirStores/poc-fhir/fhir/Encounter/3dedcec9-885d-435e-9ac5-58853cb216bb/_history/MTY2MDAxMzA5MDY3MDY5MDAwMA"}},etag:{schema:{type:"string",example:'W/"MTY2MDAxMzA5MDY3MDY5MDAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Tue, 09 Aug 2022 02:44:50 UTC"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Tue, 09 Aug 2022 02:44:50 GMT"}},"content-length":{schema:{type:"integer",example:"2745"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"54e509b0-5fe2-499c-96db-260bedda583a"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{class:{code:"AMB",display:"ambulatory",system:"http://terminology.hl7.org/CodeSystem/v3-ActCode"},diagnosis:[{condition:{display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",reference:"Condition/4bbbe654-14f5-4ab3-a36e-a1e307f67bb8"},rank:1,use:{coding:[{code:"DD",display:"Discharge diagnosis",system:"http://terminology.hl7.org/CodeSystem/diagnosis-role"}]}},{condition:{display:"Non-insulin-dependent diabetes mellitus without complications",reference:"Condition/666970c2-d79f-4242-89f9-d0ffab9e36cf"},rank:2,use:{coding:[{code:"DD",display:"Discharge diagnosis",system:"http://terminology.hl7.org/CodeSystem/diagnosis-role"}]}}],id:"3dedcec9-885d-435e-9ac5-58853cb216bb",identifier:[{system:"http://sys-ids.kemkes.go.id/encounter/1000004",value:"P20240001"}],location:[{location:{display:"Ruang 1A, Poliklinik Rawat Jalan",reference:"Location/ef011065-38c9-46f8-9c35-d1fe68966a3e"}}],meta:{lastUpdated:"2022-08-09T02:44:50.670690+00:00",versionId:"MTY2MDAxMzA5MDY3MDY5MDAwMA"},participant:[{individual:{display:"Dokter Bronsig",reference:"Practitioner/N10000001"},type:[{coding:[{code:"ATND",display:"attender",system:"http://terminology.hl7.org/CodeSystem/v3-ParticipationType"}]}]}],period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-14T07:00:00+07:00"},resourceType:"Encounter",serviceProvider:{reference:"Organization/10000004"},status:"finished",statusHistory:[{period:{end:"2022-06-14T08:00:00+07:00",start:"2022-06-14T07:00:00+07:00"},status:"arrived"},{period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-14T08:00:00+07:00"},status:"in-progress"},{period:{end:"2022-06-14T09:00:00+07:00",start:"2022-06-14T09:00:00+07:00"},status:"finished"}],subject:{display:"Budi Santoso",reference:"Patient/100000030009"}}}}}},description:"Encounter - Update Finished",method:"put",path:"/Encounter/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Encounter",id:"3dedcec9-885d-435e-9ac5-58853cb216bb",identifier:[{system:"http://sys-ids.kemkes.go.id/encounter/1000004",value:"P20240001"}],status:"finished",class:{system:"http://terminology.hl7.org/CodeSystem/v3-ActCode",code:"AMB",display:"ambulatory"},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},participant:[{type:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/v3-ParticipationType",code:"ATND",display:"attender"}]}],individual:{reference:"Practitioner/N10000001",display:"Dokter Bronsig"}}],period:{start:"2022-06-14T07:00:00+07:00",end:"2022-06-14T09:00:00+07:00"},location:[{location:{reference:"Location/ef011065-38c9-46f8-9c35-d1fe68966a3e",display:"Ruang 1A, Poliklinik Rawat Jalan"}}],diagnosis:[{condition:{reference:"Condition/4bbbe654-14f5-4ab3-a36e-a1e307f67bb8",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"},use:{coding:[{system:"http://terminology.hl7.org/CodeSystem/diagnosis-role",code:"DD",display:"Discharge diagnosis"}]},rank:1},{condition:{reference:"Condition/666970c2-d79f-4242-89f9-d0ffab9e36cf",display:"Non-insulin-dependent diabetes mellitus without complications"},use:{coding:[{system:"http://terminology.hl7.org/CodeSystem/diagnosis-role",code:"DD",display:"Discharge diagnosis"}]},rank:2}],statusHistory:[{status:"arrived",period:{start:"2022-06-14T07:00:00+07:00",end:"2022-06-14T08:00:00+07:00"}},{status:"in-progress",period:{start:"2022-06-14T08:00:00+07:00",end:"2022-06-14T09:00:00+07:00"}},{status:"finished",period:{start:"2022-06-14T09:00:00+07:00",end:"2022-06-14T09:00:00+07:00"}}],serviceProvider:{reference:"Organization/10000004"}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Encounter - Update Finished",description:{type:"text/plain"},url:{path:["Encounter",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Encounter - By ID",permalink:"/docs/sandbox/encounter-by-id"},next:{title:"Encounter - PATCH Dictionary",permalink:"/docs/sandbox/encounter-patch-dictionary"}},y={},h=[{value:"Encounter - Update Finished",id:"encounter---update-finished",level:2}],g={toc:h};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"encounter---update-finished"},"Encounter - Update Finished"),(0,i.kt)("p",null,"Encounter - Update Finished"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"657d68bf9b323d3530919bf6"},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"location"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"etag"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"last-modified"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"vary"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-length"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-xss-protection"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-frame-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-content-type-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-request-id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Via"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Alt-Svc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "class": {\n    "code": "AMB",\n    "display": "ambulatory",\n    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode"\n  },\n  "diagnosis": [\n    {\n      "condition": {\n        "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture",\n        "reference": "Condition/4bbbe654-14f5-4ab3-a36e-a1e307f67bb8"\n      },\n      "rank": 1,\n      "use": {\n        "coding": [\n          {\n            "code": "DD",\n            "display": "Discharge diagnosis",\n            "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role"\n          }\n        ]\n      }\n    },\n    {\n      "condition": {\n        "display": "Non-insulin-dependent diabetes mellitus without complications",\n        "reference": "Condition/666970c2-d79f-4242-89f9-d0ffab9e36cf"\n      },\n      "rank": 2,\n      "use": {\n        "coding": [\n          {\n            "code": "DD",\n            "display": "Discharge diagnosis",\n            "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role"\n          }\n        ]\n      }\n    }\n  ],\n  "id": "3dedcec9-885d-435e-9ac5-58853cb216bb",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/encounter/1000004",\n      "value": "P20240001"\n    }\n  ],\n  "location": [\n    {\n      "location": {\n        "display": "Ruang 1A, Poliklinik Rawat Jalan",\n        "reference": "Location/ef011065-38c9-46f8-9c35-d1fe68966a3e"\n      }\n    }\n  ],\n  "meta": {\n    "lastUpdated": "2022-08-09T02:44:50.670690+00:00",\n    "versionId": "MTY2MDAxMzA5MDY3MDY5MDAwMA"\n  },\n  "participant": [\n    {\n      "individual": {\n        "display": "Dokter Bronsig",\n        "reference": "Practitioner/N10000001"\n      },\n      "type": [\n        {\n          "coding": [\n            {\n              "code": "ATND",\n              "display": "attender",\n              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "period": {\n    "end": "2022-06-14T09:00:00+07:00",\n    "start": "2022-06-14T07:00:00+07:00"\n  },\n  "resourceType": "Encounter",\n  "serviceProvider": {\n    "reference": "Organization/10000004"\n  },\n  "status": "finished",\n  "statusHistory": [\n    {\n      "period": {\n        "end": "2022-06-14T08:00:00+07:00",\n        "start": "2022-06-14T07:00:00+07:00"\n      },\n      "status": "arrived"\n    },\n    {\n      "period": {\n        "end": "2022-06-14T09:00:00+07:00",\n        "start": "2022-06-14T08:00:00+07:00"\n      },\n      "status": "in-progress"\n    },\n    {\n      "period": {\n        "end": "2022-06-14T09:00:00+07:00",\n        "start": "2022-06-14T09:00:00+07:00"\n      },\n      "status": "finished"\n    }\n  ],\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);