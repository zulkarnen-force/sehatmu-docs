"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[9453],{75643:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var s=o(87462),i=(o(67294),o(3905)),a=o(26389),n=o(94891),m=(o(75190),o(47507)),r=(o(24310),o(63303)),d=(o(75035),o(85162));const l={id:"medication-create",title:"Medication - Create",description:"Medication - Create",sidebar_label:"Medication - Create",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Medication"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Medication",meta:{profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Medication"]},identifier:[{system:"http://sys-ids.kemkes.go.id/medication/10000004",use:"official",value:"123456789"}],code:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"93001019",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"}]},status:"active",manufacturer:{reference:"Organization/900001"},form:{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/medication-form",code:"BS023",display:"Kaplet Salut Selaput"}]},ingredient:[{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000330",display:"Rifampin"}]},isActive:!0,strength:{numerator:{value:150,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}},{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000328",display:"Isoniazid"}]},isActive:!0,strength:{numerator:{value:75,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}},{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000329",display:"Pyrazinamide"}]},isActive:!0,strength:{numerator:{value:400,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}},{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000288",display:"Ethambutol"}]},isActive:!0,strength:{numerator:{value:275,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}}],extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType",valueCodeableConcept:{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/medication-type",code:"NC",display:"Non-compound"}]}}]}}}}},responses:{201:{description:"Created",headers:{etag:{schema:{type:"string",example:'W/"MTY2MTQxNDIzNzM1NDA2NDAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Thu, 25 Aug 2022 07:57:17 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1/_history/MTY2MTQxNDIzNzM1NDA2NDAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 25 Aug 2022 07:57:17 GMT"}},"content-length":{schema:{type:"integer",example:"3790"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"e0bbb066-4d1f-4002-ba87-531107a08799"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{code:{coding:[{code:"93001019",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)",system:"http://sys-ids.kemkes.go.id/kfa"}]},extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType",valueCodeableConcept:{coding:[{code:"NC",display:"Non-compound",system:"http://terminology.kemkes.go.id/CodeSystem/medication-type"}]}}],form:{coding:[{code:"BS023",display:"Kaplet Salut Selaput",system:"http://terminology.kemkes.go.id/CodeSystem/medication-form"}]},id:"8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",identifier:[{system:"http://sys-ids.kemkes.go.id/medication/10000004",use:"official",value:"123456789"}],ingredient:[{isActive:!0,itemCodeableConcept:{coding:[{code:"91000330",display:"Rifampin",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:150}}},{isActive:!0,itemCodeableConcept:{coding:[{code:"91000328",display:"Isoniazid",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:75}}},{isActive:!0,itemCodeableConcept:{coding:[{code:"91000329",display:"Pyrazinamide",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:400}}},{isActive:!0,itemCodeableConcept:{coding:[{code:"91000288",display:"Ethambutol",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:275}}}],manufacturer:{reference:"Organization/900001"},meta:{lastUpdated:"2022-08-25T07:57:17.354064+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Medication|4.0.1","https://fhir.kemkes.go.id/r4/StructureDefinition/Medication"],versionId:"MTY2MTQxNDIzNzM1NDA2NDAwMA"},resourceType:"Medication",status:"active"}}}}},description:"Medication - Create",method:"post",path:"/Medication",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Medication",meta:{profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Medication"]},identifier:[{system:"http://sys-ids.kemkes.go.id/medication/10000004",use:"official",value:"123456789"}],code:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"93001019",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"}]},status:"active",manufacturer:{reference:"Organization/900001"},form:{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/medication-form",code:"BS023",display:"Kaplet Salut Selaput"}]},ingredient:[{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000330",display:"Rifampin"}]},isActive:!0,strength:{numerator:{value:150,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}},{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000328",display:"Isoniazid"}]},isActive:!0,strength:{numerator:{value:75,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}},{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000329",display:"Pyrazinamide"}]},isActive:!0,strength:{numerator:{value:400,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}},{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000288",display:"Ethambutol"}]},isActive:!0,strength:{numerator:{value:275,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}}],extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType",valueCodeableConcept:{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/medication-type",code:"NC",display:"Non-compound"}]}}]},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Medication - Create",description:{type:"text/plain"},url:{path:["Medication"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},c=void 0,p={unversionedId:"sandbox/ongoing/medication-create",id:"sandbox/ongoing/medication-create",title:"Medication - Create",description:"Medication - Create",source:"@site/docs/sandbox/ongoing/medication-create.api.mdx",sourceDirName:"sandbox/ongoing",slug:"/sandbox/ongoing/medication-create",permalink:"/docs/sandbox/ongoing/medication-create",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"medication-create",title:"Medication - Create",description:"Medication - Create",sidebar_label:"Medication - Create",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Resource > Medication"],requestBody:{content:{"application/json":{schema:{type:"object",example:{resourceType:"Medication",meta:{profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Medication"]},identifier:[{system:"http://sys-ids.kemkes.go.id/medication/10000004",use:"official",value:"123456789"}],code:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"93001019",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"}]},status:"active",manufacturer:{reference:"Organization/900001"},form:{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/medication-form",code:"BS023",display:"Kaplet Salut Selaput"}]},ingredient:[{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000330",display:"Rifampin"}]},isActive:!0,strength:{numerator:{value:150,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}},{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000328",display:"Isoniazid"}]},isActive:!0,strength:{numerator:{value:75,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}},{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000329",display:"Pyrazinamide"}]},isActive:!0,strength:{numerator:{value:400,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}},{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000288",display:"Ethambutol"}]},isActive:!0,strength:{numerator:{value:275,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}}],extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType",valueCodeableConcept:{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/medication-type",code:"NC",display:"Non-compound"}]}}]}}}}},responses:{201:{description:"Created",headers:{etag:{schema:{type:"string",example:'W/"MTY2MTQxNDIzNzM1NDA2NDAwMA"'}},"content-type":{schema:{type:"string",example:"application/fhir+json;charset=utf-8"}},"last-modified":{schema:{type:"string",example:"Thu, 25 Aug 2022 07:57:17 UTC"}},location:{schema:{type:"string",example:"https://healthcare.googleapis.com/v1/projects/dto-ihs-dev/locations/asia-southeast2/datasets/dev/fhirStores/fhir-v4-dev/fhir/Medication/8f299a19-5887-4b8e-90a2-c2c15ecbe1d1/_history/MTY2MTQxNDIzNzM1NDA2NDAwMA"}},vary:{schema:{type:"string",example:"Referer"}},date:{schema:{type:"string",example:"Thu, 25 Aug 2022 07:57:17 GMT"}},"content-length":{schema:{type:"integer",example:"3790"}},"x-xss-protection":{schema:{type:"integer",example:"0"}},"x-frame-options":{schema:{type:"string",example:"SAMEORIGIN"}},"x-content-type-options":{schema:{type:"string",example:"nosniff"}},"x-request-id":{schema:{type:"string",example:"e0bbb066-4d1f-4002-ba87-531107a08799"}},Via:{schema:{type:"string",example:"1.1 google"}},"Alt-Svc":{schema:{type:"string",example:'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000'}}},content:{"application/json":{schema:{type:"object"},example:{code:{coding:[{code:"93001019",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)",system:"http://sys-ids.kemkes.go.id/kfa"}]},extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType",valueCodeableConcept:{coding:[{code:"NC",display:"Non-compound",system:"http://terminology.kemkes.go.id/CodeSystem/medication-type"}]}}],form:{coding:[{code:"BS023",display:"Kaplet Salut Selaput",system:"http://terminology.kemkes.go.id/CodeSystem/medication-form"}]},id:"8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",identifier:[{system:"http://sys-ids.kemkes.go.id/medication/10000004",use:"official",value:"123456789"}],ingredient:[{isActive:!0,itemCodeableConcept:{coding:[{code:"91000330",display:"Rifampin",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:150}}},{isActive:!0,itemCodeableConcept:{coding:[{code:"91000328",display:"Isoniazid",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:75}}},{isActive:!0,itemCodeableConcept:{coding:[{code:"91000329",display:"Pyrazinamide",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:400}}},{isActive:!0,itemCodeableConcept:{coding:[{code:"91000288",display:"Ethambutol",system:"http://sys-ids.kemkes.go.id/kfa"}]},strength:{denominator:{code:"TAB",system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",value:1},numerator:{code:"mg",system:"http://unitsofmeasure.org",value:275}}}],manufacturer:{reference:"Organization/900001"},meta:{lastUpdated:"2022-08-25T07:57:17.354064+00:00",profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Medication|4.0.1","https://fhir.kemkes.go.id/r4/StructureDefinition/Medication"],versionId:"MTY2MTQxNDIzNzM1NDA2NDAwMA"},resourceType:"Medication",status:"active"}}}}},description:"Medication - Create",method:"post",path:"/Medication",servers:[{url:"https://istanbul.muhammadiyah.or.id/",description:"Sandbox environment server"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{resourceType:"Medication",meta:{profile:["https://fhir.kemkes.go.id/r4/StructureDefinition/Medication"]},identifier:[{system:"http://sys-ids.kemkes.go.id/medication/10000004",use:"official",value:"123456789"}],code:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"93001019",display:"Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)"}]},status:"active",manufacturer:{reference:"Organization/900001"},form:{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/medication-form",code:"BS023",display:"Kaplet Salut Selaput"}]},ingredient:[{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000330",display:"Rifampin"}]},isActive:!0,strength:{numerator:{value:150,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}},{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000328",display:"Isoniazid"}]},isActive:!0,strength:{numerator:{value:75,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}},{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000329",display:"Pyrazinamide"}]},isActive:!0,strength:{numerator:{value:400,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}},{itemCodeableConcept:{coding:[{system:"http://sys-ids.kemkes.go.id/kfa",code:"91000288",display:"Ethambutol"}]},isActive:!0,strength:{numerator:{value:275,system:"http://unitsofmeasure.org",code:"mg"},denominator:{value:1,system:"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",code:"TAB"}}}],extension:[{url:"https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType",valueCodeableConcept:{coding:[{system:"http://terminology.kemkes.go.id/CodeSystem/medication-type",code:"NC",display:"Non-compound"}]}}]},info:{title:"SehatMu Docs",version:"1.0.0"},postman:{name:"Medication - Create",description:{type:"text/plain"},url:{path:["Medication"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/sandbox/ongoing/sehatmu-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Resource > Medication",permalink:"/docs/sandbox/ongoing/resource-medication"},next:{title:"Medication - By ID",permalink:"/docs/sandbox/ongoing/medication-by-id"}},y={},u=[{value:"Medication - Create",id:"medication---create",level:2}],g={toc:u};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"medication---create"},"Medication - Create"),(0,i.kt)("p",null,"Medication - Create"),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Created")),(0,i.kt)("details",{style:{textAlign:"left",marginBottom:"1rem"},"data-collaposed":!0,open:!1},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Response Headers")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"etag"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"last-modified"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"location"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"vary"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content-length"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-xss-protection"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-frame-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-content-type-options"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"x-request-id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Via"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)),(0,i.kt)("li",{className:"schemaItem"},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Alt-Svc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")),(0,i.kt)("div",null)))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(r.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "code": {\n    "coding": [\n      {\n        "code": "93001019",\n        "display": "Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput (KIMIA FARMA)",\n        "system": "http://sys-ids.kemkes.go.id/kfa"\n      }\n    ]\n  },\n  "extension": [\n    {\n      "url": "https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType",\n      "valueCodeableConcept": {\n        "coding": [\n          {\n            "code": "NC",\n            "display": "Non-compound",\n            "system": "http://terminology.kemkes.go.id/CodeSystem/medication-type"\n          }\n        ]\n      }\n    }\n  ],\n  "form": {\n    "coding": [\n      {\n        "code": "BS023",\n        "display": "Kaplet Salut Selaput",\n        "system": "http://terminology.kemkes.go.id/CodeSystem/medication-form"\n      }\n    ]\n  },\n  "id": "8f299a19-5887-4b8e-90a2-c2c15ecbe1d1",\n  "identifier": [\n    {\n      "system": "http://sys-ids.kemkes.go.id/medication/10000004",\n      "use": "official",\n      "value": "123456789"\n    }\n  ],\n  "ingredient": [\n    {\n      "isActive": true,\n      "itemCodeableConcept": {\n        "coding": [\n          {\n            "code": "91000330",\n            "display": "Rifampin",\n            "system": "http://sys-ids.kemkes.go.id/kfa"\n          }\n        ]\n      },\n      "strength": {\n        "denominator": {\n          "code": "TAB",\n          "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n          "value": 1\n        },\n        "numerator": {\n          "code": "mg",\n          "system": "http://unitsofmeasure.org",\n          "value": 150\n        }\n      }\n    },\n    {\n      "isActive": true,\n      "itemCodeableConcept": {\n        "coding": [\n          {\n            "code": "91000328",\n            "display": "Isoniazid",\n            "system": "http://sys-ids.kemkes.go.id/kfa"\n          }\n        ]\n      },\n      "strength": {\n        "denominator": {\n          "code": "TAB",\n          "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n          "value": 1\n        },\n        "numerator": {\n          "code": "mg",\n          "system": "http://unitsofmeasure.org",\n          "value": 75\n        }\n      }\n    },\n    {\n      "isActive": true,\n      "itemCodeableConcept": {\n        "coding": [\n          {\n            "code": "91000329",\n            "display": "Pyrazinamide",\n            "system": "http://sys-ids.kemkes.go.id/kfa"\n          }\n        ]\n      },\n      "strength": {\n        "denominator": {\n          "code": "TAB",\n          "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n          "value": 1\n        },\n        "numerator": {\n          "code": "mg",\n          "system": "http://unitsofmeasure.org",\n          "value": 400\n        }\n      }\n    },\n    {\n      "isActive": true,\n      "itemCodeableConcept": {\n        "coding": [\n          {\n            "code": "91000288",\n            "display": "Ethambutol",\n            "system": "http://sys-ids.kemkes.go.id/kfa"\n          }\n        ]\n      },\n      "strength": {\n        "denominator": {\n          "code": "TAB",\n          "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",\n          "value": 1\n        },\n        "numerator": {\n          "code": "mg",\n          "system": "http://unitsofmeasure.org",\n          "value": 275\n        }\n      }\n    }\n  ],\n  "manufacturer": {\n    "reference": "Organization/900001"\n  },\n  "meta": {\n    "lastUpdated": "2022-08-25T07:57:17.354064+00:00",\n    "profile": [\n      "https://fhir.kemkes.go.id/r4/StructureDefinition/Medication|4.0.1",\n      "https://fhir.kemkes.go.id/r4/StructureDefinition/Medication"\n    ],\n    "versionId": "MTY2MTQxNDIzNzM1NDA2NDAwMA"\n  },\n  "resourceType": "Medication",\n  "status": "active"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);