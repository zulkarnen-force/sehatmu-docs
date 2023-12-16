"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[385],{54172:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>y,toc:()=>g});var a=i(87462),s=(i(67294),i(3905)),n=i(26389),o=i(94891),r=i(75190),d=i(47507),l=(i(24310),i(63303)),p=(i(75035),i(85162));const c={id:"medication-dispense-update",title:"MedicationDispense - UPDATE",description:"MedicationDispense - UPDATE",sidebar_label:"MedicationDispense - UPDATE",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > MedicationDispense"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"MedicationDispense",id:"71e27aa4-89d1-49a0-80ab-20e970a939cc",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],status:"in-progress",category:{coding:[{system:"http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category",code:"outpatient",display:"Outpatient"}]},medicationReference:{reference:"Medication/2b78a453-dd36-4d5f-8264-d575e3321a8b",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},context:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},performer:[{actor:{reference:"Practitioner/N10000003",display:"John Miller"}}],location:{reference:"Location/52e135eb-1956-4871-ba13-e833e662484d",display:"Apotek RSUD Jati Asih"},authorizingPrescription:[{reference:"MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838"}],quantity:{system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB",value:120},daysSupply:{value:30,unit:"Day",system:"http://unitsofmeasure.org",code:"d"},whenPrepared:"2022-01-15T10:20:00Z",whenHandedOver:"2022-01-15T16:20:00Z",dosageInstruction:[{sequence:1,text:"Diminum 4 tablet sekali dalam sehari",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}},doseAndRate:[{type:{coding:[{system:"http://terminology.hl7.org/CodeSystem/dose-rate-type",code:"ordered",display:"Ordered"}]},doseQuantity:{value:4,unit:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}]}]}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"65376601d5d316c396ddc9f1"}],responses:{200:{description:"OK",headers:{location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/MedicationDispense/71e27aa4-89d1-49a0-80ab-20e970a939cc/_history/MTY2NDQxMTI0OTk2ODU3MjAwMA"}},etag:{schema:{type:"string",example:'W/"MTY2NDQxMTI0OTk2ODU3MjAwMA"'}},"last-modified":{schema:{type:"string",example:"Thu, 29 Sep 2022 00:27:29 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 29 Sep 2022 00:27:29 GMT"}},"content-length":{schema:{type:"integer",example:"2663"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"e7af4d80-2349-45f4-97e7-0eef25dcf827"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{authorizingPrescription:[{reference:"MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838"}],category:{coding:[{code:"outpatient",display:"Outpatient",system:"http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category"}]},context:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},daysSupply:{code:"d",system:"http://unitsofmeasure.org",unit:"Day",value:30},dosageInstruction:[{doseAndRate:[{doseQuantity:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",unit:"TAB",value:4},type:{coding:[{code:"ordered",display:"Ordered",system:"http://terminology.hl7.org/CodeSystem/dose-rate-type"}]}}],sequence:1,text:"Diminum 4 tablet sekali dalam sehari",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}}}],id:"71e27aa4-89d1-49a0-80ab-20e970a939cc",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],location:{display:"Apotek RSUD Jati Asih",reference:"Location/52e135eb-1956-4871-ba13-e833e662484d"},medicationReference:{display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)",reference:"Medication/2b78a453-dd36-4d5f-8264-d575e3321a8b"},meta:{lastUpdated:"2022-09-29T00:27:29.968572+00:00",versionId:"MTY2NDQxMTI0OTk2ODU3MjAwMA"},performer:[{actor:{display:"John Miller",reference:"Practitioner/N10000003"}}],quantity:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:120},resourceType:"MedicationDispense",status:"in-progress",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},whenHandedOver:"2022-01-15T16:20:00Z",whenPrepared:"2022-01-15T10:20:00Z"}}}}},description:"MedicationDispense - UPDATE",method:"put",path:"/MedicationDispense/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],jsonRequestBodyExample:{resourceType:"MedicationDispense",id:"71e27aa4-89d1-49a0-80ab-20e970a939cc",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],status:"in-progress",category:{coding:[{system:"http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category",code:"outpatient",display:"Outpatient"}]},medicationReference:{reference:"Medication/2b78a453-dd36-4d5f-8264-d575e3321a8b",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},context:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},performer:[{actor:{reference:"Practitioner/N10000003",display:"John Miller"}}],location:{reference:"Location/52e135eb-1956-4871-ba13-e833e662484d",display:"Apotek RSUD Jati Asih"},authorizingPrescription:[{reference:"MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838"}],quantity:{system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB",value:120},daysSupply:{value:30,unit:"Day",system:"http://unitsofmeasure.org",code:"d"},whenPrepared:"2022-01-15T10:20:00Z",whenHandedOver:"2022-01-15T16:20:00Z",dosageInstruction:[{sequence:1,text:"Diminum 4 tablet sekali dalam sehari",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}},doseAndRate:[{type:{coding:[{system:"http://terminology.hl7.org/CodeSystem/dose-rate-type",code:"ordered",display:"Ordered"}]},doseQuantity:{value:4,unit:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}]}]},info:{title:"SehatMu On Going",version:"1.0.0"},postman:{name:"MedicationDispense - UPDATE",description:{type:"text/plain"},url:{path:["MedicationDispense",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/ongoing/sehatmu-on-going",custom_edit_url:null},m=void 0,y={unversionedId:"sandbox/ongoing/medication-dispense-update",id:"sandbox/ongoing/medication-dispense-update",title:"MedicationDispense - UPDATE",description:"MedicationDispense - UPDATE",source:"@site/docs/sandbox/ongoing/medication-dispense-update.api.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/medication-dispense-update",permalink:"/docs/sandbox/ongoing/medication-dispense-update",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"medication-dispense-update",title:"MedicationDispense - UPDATE",description:"MedicationDispense - UPDATE",sidebar_label:"MedicationDispense - UPDATE",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > MedicationDispense"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"MedicationDispense",id:"71e27aa4-89d1-49a0-80ab-20e970a939cc",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],status:"in-progress",category:{coding:[{system:"http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category",code:"outpatient",display:"Outpatient"}]},medicationReference:{reference:"Medication/2b78a453-dd36-4d5f-8264-d575e3321a8b",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},context:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},performer:[{actor:{reference:"Practitioner/N10000003",display:"John Miller"}}],location:{reference:"Location/52e135eb-1956-4871-ba13-e833e662484d",display:"Apotek RSUD Jati Asih"},authorizingPrescription:[{reference:"MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838"}],quantity:{system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB",value:120},daysSupply:{value:30,unit:"Day",system:"http://unitsofmeasure.org",code:"d"},whenPrepared:"2022-01-15T10:20:00Z",whenHandedOver:"2022-01-15T16:20:00Z",dosageInstruction:[{sequence:1,text:"Diminum 4 tablet sekali dalam sehari",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}},doseAndRate:[{type:{coding:[{system:"http://terminology.hl7.org/CodeSystem/dose-rate-type",code:"ordered",display:"Ordered"}]},doseQuantity:{value:4,unit:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}]}]}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"65376601d5d316c396ddc9f1"}],responses:{200:{description:"OK",headers:{location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/MedicationDispense/71e27aa4-89d1-49a0-80ab-20e970a939cc/_history/MTY2NDQxMTI0OTk2ODU3MjAwMA"}},etag:{schema:{type:"string",example:'W/"MTY2NDQxMTI0OTk2ODU3MjAwMA"'}},"last-modified":{schema:{type:"string",example:"Thu, 29 Sep 2022 00:27:29 UTC"}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 29 Sep 2022 00:27:29 GMT"}},"content-length":{schema:{type:"integer",example:"2663"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"e7af4d80-2349-45f4-97e7-0eef25dcf827"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{authorizingPrescription:[{reference:"MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838"}],category:{coding:[{code:"outpatient",display:"Outpatient",system:"http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category"}]},context:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},daysSupply:{code:"d",system:"http://unitsofmeasure.org",unit:"Day",value:30},dosageInstruction:[{doseAndRate:[{doseQuantity:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",unit:"TAB",value:4},type:{coding:[{code:"ordered",display:"Ordered",system:"http://terminology.hl7.org/CodeSystem/dose-rate-type"}]}}],sequence:1,text:"Diminum 4 tablet sekali dalam sehari",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}}}],id:"71e27aa4-89d1-49a0-80ab-20e970a939cc",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],location:{display:"Apotek RSUD Jati Asih",reference:"Location/52e135eb-1956-4871-ba13-e833e662484d"},medicationReference:{display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)",reference:"Medication/2b78a453-dd36-4d5f-8264-d575e3321a8b"},meta:{lastUpdated:"2022-09-29T00:27:29.968572+00:00",versionId:"MTY2NDQxMTI0OTk2ODU3MjAwMA"},performer:[{actor:{display:"John Miller",reference:"Practitioner/N10000003"}}],quantity:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:120},resourceType:"MedicationDispense",status:"in-progress",subject:{display:"Budi Santoso",reference:"Patient/100000030009"},whenHandedOver:"2022-01-15T16:20:00Z",whenPrepared:"2022-01-15T10:20:00Z"}}}}},description:"MedicationDispense - UPDATE",method:"put",path:"/MedicationDispense/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],jsonRequestBodyExample:{resourceType:"MedicationDispense",id:"71e27aa4-89d1-49a0-80ab-20e970a939cc",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],status:"in-progress",category:{coding:[{system:"http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category",code:"outpatient",display:"Outpatient"}]},medicationReference:{reference:"Medication/2b78a453-dd36-4d5f-8264-d575e3321a8b",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},context:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},performer:[{actor:{reference:"Practitioner/N10000003",display:"John Miller"}}],location:{reference:"Location/52e135eb-1956-4871-ba13-e833e662484d",display:"Apotek RSUD Jati Asih"},authorizingPrescription:[{reference:"MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838"}],quantity:{system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB",value:120},daysSupply:{value:30,unit:"Day",system:"http://unitsofmeasure.org",code:"d"},whenPrepared:"2022-01-15T10:20:00Z",whenHandedOver:"2022-01-15T16:20:00Z",dosageInstruction:[{sequence:1,text:"Diminum 4 tablet sekali dalam sehari",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}},doseAndRate:[{type:{coding:[{system:"http://terminology.hl7.org/CodeSystem/dose-rate-type",code:"ordered",display:"Ordered"}]},doseQuantity:{value:4,unit:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}]}]},info:{title:"SehatMu On Going",version:"1.0.0"},postman:{name:"MedicationDispense - UPDATE",description:{type:"text/plain"},url:{path:["MedicationDispense",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/ongoing/sehatmu-on-going",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"MedicationDispense - By ID",permalink:"/docs/sandbox/ongoing/medication-dispense-by-id"},next:{title:"MedicationDispense - PATCH",permalink:"/docs/sandbox/ongoing/medication-dispense-patch"}},u={},g=[{value:"MedicationDispense - UPDATE",id:"medicationdispense---update",level:2}],h={toc:g};function f(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"medicationdispense---update"},"MedicationDispense - UPDATE"),(0,s.kt)("p",null,"MedicationDispense - UPDATE"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"65376601d5d316c396ddc9f1"},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object"))))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"etag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last-modified"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"vary"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-xss-protection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-frame-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-content-type-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-request-id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Via"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Alt-Svc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "authorizingPrescription": [\n    {\n      "reference": "MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838"\n    }\n  ],\n  "category": {\n    "coding": [\n      {\n        "code": "outpatient",\n        "display": "Outpatient",\n        "system": "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category"\n      }\n    ]\n  },\n  "context": {\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "daysSupply": {\n    "code": "d",\n    "system": "http://unitsofmeasure.org",\n    "unit": "Day",\n    "value": 30\n  },\n  "dosageInstruction": [\n    {\n      "doseAndRate": [\n        {\n          "doseQuantity": {\n            "code": "TAB",\n            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n            "unit": "TAB",\n            "value": 4\n          },\n          "type": {\n            "coding": [\n              {\n                "code": "ordered",\n                "display": "Ordered",\n                "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type"\n              }\n            ]\n          }\n        }\n      ],\n      "sequence": 1,\n      "text": "Diminum 4 tablet sekali dalam sehari",\n      "timing": {\n        "repeat": {\n          "frequency": 1,\n          "period": 1,\n          "periodUnit": "d"\n        }\n      }\n    }\n  ],\n  "id": "71e27aa4-89d1-49a0-80ab-20e970a939cc",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/prescription/10000004",\n      "use": "official",\n      "value": "123456788"\n    },\n    {\n      "system": "http://sys-ids.kemkes.go.id/prescription-item/10000004",\n      "use": "official",\n      "value": "123456788-1"\n    }\n  ],\n  "location": {\n    "display": "Apotek RSUD Jati Asih",\n    "reference": "Location/52e135eb-1956-4871-ba13-e833e662484d"\n  },\n  "medicationReference": {\n    "display": "Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)",\n    "reference": "Medication/2b78a453-dd36-4d5f-8264-d575e3321a8b"\n  },\n  "meta": {\n    "lastUpdated": "2022-09-29T00:27:29.968572+00:00",\n    "versionId": "MTY2NDQxMTI0OTk2ODU3MjAwMA"\n  },\n  "performer": [\n    {\n      "actor": {\n        "display": "John Miller",\n        "reference": "Practitioner/N10000003"\n      }\n    }\n  ],\n  "quantity": {\n    "code": "TAB",\n    "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n    "value": 120\n  },\n  "resourceType": "MedicationDispense",\n  "status": "in-progress",\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  },\n  "whenHandedOver": "2022-01-15T16:20:00Z",\n  "whenPrepared": "2022-01-15T10:20:00Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);