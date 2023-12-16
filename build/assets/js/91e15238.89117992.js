"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[1246],{16841:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>g});var n=i(87462),s=(i(67294),i(3905)),a=i(26389),o=i(94891),r=i(75190),d=i(47507),c=(i(24310),i(63303)),l=(i(75035),i(85162));const p={id:"medication-request-put",title:"MedicationRequest - PUT",description:"MedicationRequest - PUT",sidebar_label:"MedicationRequest - PUT",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > MedicationRequest"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"MedicationRequest",id:"b5293e6d-31c6-4111-8214-609ae5890838",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],status:"cancelled",intent:"order",category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/medicationrequest-category",code:"outpatient",display:"Outpatient"}]}],priority:"routine",medicationReference:{reference:"Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},authoredOn:"2022-08-04",requester:{reference:"Practitioner/N10000001",display:"Dokter Bronsig"},reasonCode:[{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"}]}],courseOfTherapyType:{coding:[{system:"http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",code:"continuous",display:"Continuing long term therapy"}]},dosageInstruction:[{sequence:1,text:"4 tablet per hari",additionalInstruction:[{text:"Diminum setiap hari"}],patientInstruction:"4 tablet perhari, diminum setiap hari tanpa jeda sampai prose pengobatan berakhir",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}},route:{coding:[{system:"http://www.whocc.no/atc",code:"O",display:"Oral"}]},doseAndRate:[{type:{coding:[{system:"http://terminology.hl7.org/CodeSystem/dose-rate-type",code:"ordered",display:"Ordered"}]},doseQuantity:{value:4,unit:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}]}],dispenseRequest:{dispenseInterval:{value:1,unit:"days",system:"http://unitsofmeasure.org",code:"d"},validityPeriod:{start:"2022-01-01",end:"2022-01-30"},numberOfRepeatsAllowed:0,quantity:{value:120,unit:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"},expectedSupplyDuration:{value:30,unit:"days",system:"http://unitsofmeasure.org",code:"d"},performer:{reference:"Organization/10000004"}}}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"6538c0d6c0d2273705de6c4a"}],responses:{201:{description:"Created",headers:{etag:{schema:{type:"string",example:'W/"MTY2MTQ4ODU3MjM1NzI0NTAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Fri, 26 Aug 2022 04:36:12 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838/_history/MTY2MTQ4ODU3MjM1NzI0NTAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 26 Aug 2022 04:36:12 GMT"}},"content-length":{schema:{type:"integer",example:"3674"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"88743338-f91f-4187-a561-2ae348cf062e"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{authoredOn:"2022-08-04",category:[{coding:[{code:"outpatient",display:"Outpatient",system:"http://terminology.hl7.org/CodeSystem/medicationrequest-category"}]}],courseOfTherapyType:{coding:[{code:"continuous",display:"Continuing long term therapy",system:"http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy"}]},dispenseRequest:{dispenseInterval:{code:"d",system:"http://unitsofmeasure.org",unit:"days",value:1},expectedSupplyDuration:{code:"d",system:"http://unitsofmeasure.org",unit:"days",value:30},numberOfRepeatsAllowed:0,performer:{reference:"Organization/10000004"},quantity:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",unit:"TAB",value:120},validityPeriod:{end:"2022-01-30",start:"2022-01-01"}},dosageInstruction:[{additionalInstruction:[{text:"Diminum setiap hari"}],doseAndRate:[{doseQuantity:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",unit:"TAB",value:4},type:{coding:[{code:"ordered",display:"Ordered",system:"http://terminology.hl7.org/CodeSystem/dose-rate-type"}]}}],patientInstruction:"4 tablet perhari, diminum setiap hari tanpa jeda sampai prose pengobatan berakhir",route:{coding:[{code:"O",display:"Oral",system:"http://www.whocc.no/atc"}]},sequence:1,text:"4 tablet per hari",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}}}],encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"b5293e6d-31c6-4111-8214-609ae5890838",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],intent:"order",medicationReference:{display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)",reference:"Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1"},meta:{lastUpdated:"2022-08-26T04:36:12.357245+00:00",versionId:"MTY2MTQ4ODU3MjM1NzI0NTAwMA"},priority:"routine",reasonCode:[{coding:[{code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",system:"http://hl7.org/fhir/sid/icd-10"}]}],requester:{display:"Dokter Bronsig",reference:"Practitioner/N10000001"},resourceType:"MedicationRequest",status:"completed",subject:{display:"Budi Santoso",reference:"Patient/100000030009"}}}}}},description:"MedicationRequest - PUT",method:"put",path:"/MedicationRequest/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"MedicationRequest",id:"b5293e6d-31c6-4111-8214-609ae5890838",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],status:"cancelled",intent:"order",category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/medicationrequest-category",code:"outpatient",display:"Outpatient"}]}],priority:"routine",medicationReference:{reference:"Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},authoredOn:"2022-08-04",requester:{reference:"Practitioner/N10000001",display:"Dokter Bronsig"},reasonCode:[{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"}]}],courseOfTherapyType:{coding:[{system:"http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",code:"continuous",display:"Continuing long term therapy"}]},dosageInstruction:[{sequence:1,text:"4 tablet per hari",additionalInstruction:[{text:"Diminum setiap hari"}],patientInstruction:"4 tablet perhari, diminum setiap hari tanpa jeda sampai prose pengobatan berakhir",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}},route:{coding:[{system:"http://www.whocc.no/atc",code:"O",display:"Oral"}]},doseAndRate:[{type:{coding:[{system:"http://terminology.hl7.org/CodeSystem/dose-rate-type",code:"ordered",display:"Ordered"}]},doseQuantity:{value:4,unit:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}]}],dispenseRequest:{dispenseInterval:{value:1,unit:"days",system:"http://unitsofmeasure.org",code:"d"},validityPeriod:{start:"2022-01-01",end:"2022-01-30"},numberOfRepeatsAllowed:0,quantity:{value:120,unit:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"},expectedSupplyDuration:{value:30,unit:"days",system:"http://unitsofmeasure.org",code:"d"},performer:{reference:"Organization/10000004"}}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"MedicationRequest - PUT",description:{type:"text/plain"},url:{path:["MedicationRequest",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},u=void 0,m={unversionedId:"sandbox/ongoing/medication-request-put",id:"sandbox/ongoing/medication-request-put",title:"MedicationRequest - PUT",description:"MedicationRequest - PUT",source:"@site/docs/sandbox/ongoing/medication-request-put.api.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/medication-request-put",permalink:"/docs/sandbox/ongoing/medication-request-put",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"medication-request-put",title:"MedicationRequest - PUT",description:"MedicationRequest - PUT",sidebar_label:"MedicationRequest - PUT",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > MedicationRequest"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"MedicationRequest",id:"b5293e6d-31c6-4111-8214-609ae5890838",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],status:"cancelled",intent:"order",category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/medicationrequest-category",code:"outpatient",display:"Outpatient"}]}],priority:"routine",medicationReference:{reference:"Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},authoredOn:"2022-08-04",requester:{reference:"Practitioner/N10000001",display:"Dokter Bronsig"},reasonCode:[{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"}]}],courseOfTherapyType:{coding:[{system:"http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",code:"continuous",display:"Continuing long term therapy"}]},dosageInstruction:[{sequence:1,text:"4 tablet per hari",additionalInstruction:[{text:"Diminum setiap hari"}],patientInstruction:"4 tablet perhari, diminum setiap hari tanpa jeda sampai prose pengobatan berakhir",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}},route:{coding:[{system:"http://www.whocc.no/atc",code:"O",display:"Oral"}]},doseAndRate:[{type:{coding:[{system:"http://terminology.hl7.org/CodeSystem/dose-rate-type",code:"ordered",display:"Ordered"}]},doseQuantity:{value:4,unit:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}]}],dispenseRequest:{dispenseInterval:{value:1,unit:"days",system:"http://unitsofmeasure.org",code:"d"},validityPeriod:{start:"2022-01-01",end:"2022-01-30"},numberOfRepeatsAllowed:0,quantity:{value:120,unit:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"},expectedSupplyDuration:{value:30,unit:"days",system:"http://unitsofmeasure.org",code:"d"},performer:{reference:"Organization/10000004"}}}}}}},parameters:[{name:"id",in:"path",schema:{type:"string"},required:!0,example:"6538c0d6c0d2273705de6c4a"}],responses:{201:{description:"Created",headers:{etag:{schema:{type:"string",example:'W/"MTY2MTQ4ODU3MjM1NzI0NTAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Fri, 26 Aug 2022 04:36:12 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/MedicationRequest/b5293e6d-31c6-4111-8214-609ae5890838/_history/MTY2MTQ4ODU3MjM1NzI0NTAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Fri, 26 Aug 2022 04:36:12 GMT"}},"content-length":{schema:{type:"integer",example:"3674"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"88743338-f91f-4187-a561-2ae348cf062e"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{authoredOn:"2022-08-04",category:[{coding:[{code:"outpatient",display:"Outpatient",system:"http://terminology.hl7.org/CodeSystem/medicationrequest-category"}]}],courseOfTherapyType:{coding:[{code:"continuous",display:"Continuing long term therapy",system:"http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy"}]},dispenseRequest:{dispenseInterval:{code:"d",system:"http://unitsofmeasure.org",unit:"days",value:1},expectedSupplyDuration:{code:"d",system:"http://unitsofmeasure.org",unit:"days",value:30},numberOfRepeatsAllowed:0,performer:{reference:"Organization/10000004"},quantity:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",unit:"TAB",value:120},validityPeriod:{end:"2022-01-30",start:"2022-01-01"}},dosageInstruction:[{additionalInstruction:[{text:"Diminum setiap hari"}],doseAndRate:[{doseQuantity:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",unit:"TAB",value:4},type:{coding:[{code:"ordered",display:"Ordered",system:"http://terminology.hl7.org/CodeSystem/dose-rate-type"}]}}],patientInstruction:"4 tablet perhari, diminum setiap hari tanpa jeda sampai prose pengobatan berakhir",route:{coding:[{code:"O",display:"Oral",system:"http://www.whocc.no/atc"}]},sequence:1,text:"4 tablet per hari",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}}}],encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},id:"b5293e6d-31c6-4111-8214-609ae5890838",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],intent:"order",medicationReference:{display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)",reference:"Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1"},meta:{lastUpdated:"2022-08-26T04:36:12.357245+00:00",versionId:"MTY2MTQ4ODU3MjM1NzI0NTAwMA"},priority:"routine",reasonCode:[{coding:[{code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture",system:"http://hl7.org/fhir/sid/icd-10"}]}],requester:{display:"Dokter Bronsig",reference:"Practitioner/N10000001"},resourceType:"MedicationRequest",status:"completed",subject:{display:"Budi Santoso",reference:"Patient/100000030009"}}}}}},description:"MedicationRequest - PUT",method:"put",path:"/MedicationRequest/{id}",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"MedicationRequest",id:"b5293e6d-31c6-4111-8214-609ae5890838",identifier:[{system:"http://sys-ids.kemkes.go.id/prescription/10000004",use:"official",value:"123456788"},{system:"http://sys-ids.kemkes.go.id/prescription-item/10000004",use:"official",value:"123456788-1"}],status:"cancelled",intent:"order",category:[{coding:[{system:"http://terminology.hl7.org/CodeSystem/medicationrequest-category",code:"outpatient",display:"Outpatient"}]}],priority:"routine",medicationReference:{reference:"Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"},subject:{reference:"Patient/100000030009",display:"Budi Santoso"},encounter:{reference:"Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"},authoredOn:"2022-08-04",requester:{reference:"Practitioner/N10000001",display:"Dokter Bronsig"},reasonCode:[{coding:[{system:"http://hl7.org/fhir/sid/icd-10",code:"A15.0",display:"Tuberculosis of lung, confirmed by sputum microscopy with or without culture"}]}],courseOfTherapyType:{coding:[{system:"http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",code:"continuous",display:"Continuing long term therapy"}]},dosageInstruction:[{sequence:1,text:"4 tablet per hari",additionalInstruction:[{text:"Diminum setiap hari"}],patientInstruction:"4 tablet perhari, diminum setiap hari tanpa jeda sampai prose pengobatan berakhir",timing:{repeat:{frequency:1,period:1,periodUnit:"d"}},route:{coding:[{system:"http://www.whocc.no/atc",code:"O",display:"Oral"}]},doseAndRate:[{type:{coding:[{system:"http://terminology.hl7.org/CodeSystem/dose-rate-type",code:"ordered",display:"Ordered"}]},doseQuantity:{value:4,unit:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}]}],dispenseRequest:{dispenseInterval:{value:1,unit:"days",system:"http://unitsofmeasure.org",code:"d"},validityPeriod:{start:"2022-01-01",end:"2022-01-30"},numberOfRepeatsAllowed:0,quantity:{value:120,unit:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"},expectedSupplyDuration:{value:30,unit:"days",system:"http://unitsofmeasure.org",code:"d"},performer:{reference:"Organization/10000004"}}},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"MedicationRequest - PUT",description:{type:"text/plain"},url:{path:["MedicationRequest",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"MedicationRequest - By ID",permalink:"/docs/sandbox/ongoing/medication-request-by-id"},next:{title:"MedicationRequest - PATCH",permalink:"/docs/sandbox/ongoing/medication-request-patch"}},y={},g=[{value:"MedicationRequest - PUT",id:"medicationrequest---put",level:2}],h={toc:g};function f(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"medicationrequest---put"},"MedicationRequest - PUT"),(0,s.kt)("p",null,"MedicationRequest - PUT"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",schema:{type:"string"},required:!0,example:"6538c0d6c0d2273705de6c4a"},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object"))))))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Created")),(0,s.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Response Headers")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"etag"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"last-modified"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"location"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"vary"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"date"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content-length"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-xss-protection"),(0,s.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-frame-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-content-type-options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"x-request-id"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Via"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)),(0,s.kt)("li",{className:"schemaItem"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Alt-Svc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string")),(0,s.kt)("div",null)))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"object")))))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "authoredOn": "2022-08-04",\n  "category": [\n    {\n      "coding": [\n        {\n          "code": "outpatient",\n          "display": "Outpatient",\n          "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category"\n        }\n      ]\n    }\n  ],\n  "courseOfTherapyType": {\n    "coding": [\n      {\n        "code": "continuous",\n        "display": "Continuing long term therapy",\n        "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy"\n      }\n    ]\n  },\n  "dispenseRequest": {\n    "dispenseInterval": {\n      "code": "d",\n      "system": "http://unitsofmeasure.org",\n      "unit": "days",\n      "value": 1\n    },\n    "expectedSupplyDuration": {\n      "code": "d",\n      "system": "http://unitsofmeasure.org",\n      "unit": "days",\n      "value": 30\n    },\n    "numberOfRepeatsAllowed": 0,\n    "performer": {\n      "reference": "Organization/10000004"\n    },\n    "quantity": {\n      "code": "TAB",\n      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n      "unit": "TAB",\n      "value": 120\n    },\n    "validityPeriod": {\n      "end": "2022-01-30",\n      "start": "2022-01-01"\n    }\n  },\n  "dosageInstruction": [\n    {\n      "additionalInstruction": [\n        {\n          "text": "Diminum setiap hari"\n        }\n      ],\n      "doseAndRate": [\n        {\n          "doseQuantity": {\n            "code": "TAB",\n            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n            "unit": "TAB",\n            "value": 4\n          },\n          "type": {\n            "coding": [\n              {\n                "code": "ordered",\n                "display": "Ordered",\n                "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type"\n              }\n            ]\n          }\n        }\n      ],\n      "patientInstruction": "4 tablet perhari, diminum setiap hari tanpa jeda sampai prose pengobatan berakhir",\n      "route": {\n        "coding": [\n          {\n            "code": "O",\n            "display": "Oral",\n            "system": "http://www.whocc.no/atc"\n          }\n        ]\n      },\n      "sequence": 1,\n      "text": "4 tablet per hari",\n      "timing": {\n        "repeat": {\n          "frequency": 1,\n          "period": 1,\n          "periodUnit": "d"\n        }\n      }\n    }\n  ],\n  "encounter": {\n    "reference": "Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787"\n  },\n  "id": "b5293e6d-31c6-4111-8214-609ae5890838",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/prescription/10000004",\n      "use": "official",\n      "value": "123456788"\n    },\n    {\n      "system": "http://sys-ids.kemkes.go.id/prescription-item/10000004",\n      "use": "official",\n      "value": "123456788-1"\n    }\n  ],\n  "intent": "order",\n  "medicationReference": {\n    "display": "Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)",\n    "reference": "Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1"\n  },\n  "meta": {\n    "lastUpdated": "2022-08-26T04:36:12.357245+00:00",\n    "versionId": "MTY2MTQ4ODU3MjM1NzI0NTAwMA"\n  },\n  "priority": "routine",\n  "reasonCode": [\n    {\n      "coding": [\n        {\n          "code": "A15.0",\n          "display": "Tuberculosis of lung, confirmed by sputum microscopy with or without culture",\n          "system": "http://hl7.org/fhir/sid/icd-10"\n        }\n      ]\n    }\n  ],\n  "requester": {\n    "display": "Dokter Bronsig",\n    "reference": "Practitioner/N10000001"\n  },\n  "resourceType": "MedicationRequest",\n  "status": "completed",\n  "subject": {\n    "display": "Budi Santoso",\n    "reference": "Patient/100000030009"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);