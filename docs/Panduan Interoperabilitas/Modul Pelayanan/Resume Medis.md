# Resume Medis - Rawat Jalan Jilid 1

Panduan SATUSEHAT _Use Case_ Resume Medis Rawat Jalan terdiri dari 2 jilid yaitu:

1.  [Jilid 1](#content/id/modules/interoperability/pages/rme-rawat-jalan1/index.adoc): Alur interoperabilitas secara umum untuk resume medis rawat jalan
2.  [Jilid 2](#content:id:modules:interoperability:pages:rme-rawat-jalan2:index.adoc): Alur interoperabilitas untuk pemeriksaan penunjang (laboratorium dan radiologi)

Tahapan alur interoperabilitas dan _resource_ yang digunakan untuk **Resume Medis Rawat Jalan** dapat dilihat pada gambar di bawah ini.
![Diagram Resume Medis Rawat Jalan](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/_images/diagram-rawjal.png)

Gambar 1. Alur Integrasi Resume Medis Rawat Jalan

Alur integrasi dan format pengiriman data terkait secara umum selain data pemeriksaan penunjang dijelaskan pada Buku Panduan SATUSEHAT Resume Medis Rawat Jalan Jilid 1. Adapun langkah yang akan dijelaskan pada Buku Panduan SATUSEHAT Resume Medis Rawat Jalan Jilid 1 yaitu:  
1\. Pendaftaran Identitas Pasien  
2\. Pendataan Kunjungan  
3\. Anamnesis  
4\. Hasil Pemeriksaan Fisik  
9\. Tindakan/Prosedur Medis Diagnostik  
10\. Diagnosis  
11\. Tindakan/Prosedur Medis Terapetik  
12\. Tatalaksana  
13\. Prognosis  
14a. Rencana Tindak Lanjut/ Cara Keluar + dari Rumah Sakit  
14b. Instruksi untuk Tindak Lanjut  
14c. Sarana Transportasi untuk Rujuk  
15\. Kondisi Saat Meninggalkan RS  
16\. Pasien Pulang

Data atau variabel resume medis rawat jalan yang dapat dipertukarkan dalam SATUSEHAT sebagai berikut:

## [](#pendaftaran-pasien)Pendaftaran Pasien

Apabila melakukan pengiriman data kesehatan melalui SATUSEHAT yang memiliki elemen data terkait pasien, maka diperlukan informasi `{patient-ihs-number}` dari pasien yang bersangkutan. `{patient-ihs-number}` seorang pasien didapatkan dari _Master Patient Index_ (MPI) Kementerian Kesehatan. MPI menyimpan data-data demografi pasien berskala nasional, mulai dari nama, tanggal lahir, alamat, identitas resmi yang diterbitkan pemerintah, dan lain lain. Setelah mendapatkan `{patient-ihs-number}`, ID dapat disimpan secara di masing-masing sistem internal fasyankes maupun partner non-fasyankes. `{patient-ihs-number}` akan mempermudah pelaporan pelayanan kesehatan yang berhubungan dengan pasien, karena partner tidak diwajibkan menyertakan data diri setiap ada pengiriman data `{patient-ihs-number}` juga dapat digunakan untuk melihat data diri pasien secara menyeluruh.

Proses pencarian `{patient-ihs-number}` dari pasien dapat dilakukan melalui FHIR API dengan metode GET. Untuk metode pencarian data pasien di SATUSEHAT secara detail dapat dilihat dalam _resource_ [`Patient`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/patient/#patient) dan terkait panduan/playbook MPI dapat dilihat dalam dokumen [Master Patient Index](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/master-data/master-patient-index/preliminary/#prem-mpi).

## [](#_pendaftaran_kunjungan_pasien)Pendaftaran Kunjungan Pasien

Kunjungan pasien dapat didefinisikan sebagai interaksi pasien terhadap suatu layanan fasyankes. Sebagai contoh, dalam satu rangkaian rawat jalan, seluruh rangkaian dapat didefinisikan sebagai satu `Encounter`. Data-data kunjungan pasien yang direkam meliputi kapan pertemuan tersebut mulai dan selesai, siapa tenaga kesehatan yang melayani, siapa subjek dari pelayanannya, dan informasi pendukung lainnya.

### [](#_pemetaan_nilai)Pemetaan Nilai

Berikut pemetaan nilai untuk `Encounter` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks data kunjungan:

- [`*Encounter.identifier`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-identifier)
- [`*Encounter.status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-status)
- [`*Encounter.statusHistory[i].status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-statushistory-status)
- [`*Encounter.statusHistory[i].period`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-statushistory-status)
- [`*Encounter.class`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-class)
- [`*Encounter.classHistory[i].class`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-classHistory-class)
- [`*Encounter.classHistory[i].period`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-classHistory-period)
- [`Encounter.type[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-type)
- [`Encounter.serviceType`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-serviceType)
- [`Encounter.priority`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-priority)
- [`*Encounter.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-subject)
- [`Encounter.episodeOfCare[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-episodeOfCare)
- [`Encounter.basedOn`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-basedOn)
- [`*Encounter.participant[i].type`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-participant.type)
- [`Encounter.participant[i].individual`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-participant-individual)
- [`*Encounter.period`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-period)
- [`Encounter.length`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-length)
- [`Encounter.reasonCode`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-reasonCOde)
- [`Encounter.reasonReference`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-reasonReference)
- [`*Encounter.diagnosis[i].condition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-diagnosis-condition)
- [`Encounter.diagnosis[i].use`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-diagnosis-use)
- [`Encounter.diagnosis[i].rank`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-diagnosis-rank)
- [`Encounter.account[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-account)
- [`Encounter.hospitalization.preAdmissionIdentifier`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-hospitalization-preAdmissionIdentifier)
- [`Encounter.hospitalization.origin`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-hospitalization-origin)
- [`Encounter.hospitalization.admitSource`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-hospitalization-admitSource)
- [`Encounter.hospitalization.reAdmission`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-hospitalization-reAdmission)
- [`Encounter.hospitalization.dietPreference`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-hospitalization-dietPreference)
- [`Encounter.hospitalization.specialArrangement`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-hospitalization-specialArrangement)
- [`Encounter.hospitalization.destination`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-hospitalization-destination)
- [`*Encounter.hospitalization.dischargeDisposition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-hospitalization-dischargeDisposition)
- [`*Encounter.location`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-location)
- [`*Encounter.serviceProvider`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-serviceProvider)
- [`Encounter.partOf`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter-partOf)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Encounter` (data pendaftaran kunjungan pasien), dapat dilihat dalam _resource_ [`Encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter). Untuk contoh pengiriman data atau _payload_ dari `Encounter` dapat dilihat dalam Postman Collection.

## [](#_pengiriman_data_keluhan_utama)Pengiriman Data Keluhan Utama

Keluhan utama yang dimiliki pasien dapat dikirimkan menggunakan _resource_ [`Condition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition).

### [](#_pemetaan_nilai_2)Pemetaan Nilai

Berikut pemetaan nilai untuk `Condition` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks pengiriman data diagnosis pasien:

- [`Condition.identifier[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-identifier)
- [`Condition.clinicalStatus`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-clinicalStatus)
- [`Condition.verificationStatus`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-verificationStatus)
- [`Condition.category[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-category)
- [`Condition.severity`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-severity)
- [`*Condition.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-code)
- [`Condition.bodySite[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-bodySite)
- [`*Condition.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-subject)
- [`*Condition.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-encounter)
- [`Condition.onsetDateTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-onsetDateTime)
- [`Condition.onsetAge`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-onsetAge)
- [`Condition.onsetPeriod`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-onsetPeriod)
- [`Condition.onsetRange`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-onsetRange)
- [`Condition.onsetString`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-onsetString)
- [`Condition.abatementDateTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-abatementDateTime)
- [`Condition.abatementAge`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-abatementAge)
- [`Condition.abatementPeriod`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-abatementPeriod)
- [`Condition.abatementRange`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-abatementRange)
- [`Condition.abatementString`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-abatementString)
- [`Condition.recordedDate`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-recordedDate)
- [`Condition.recorder`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-recorder)
- [`Condition.asserter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-asserter)
- [`Condition.stage[i].summary`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-stage-summary)
- [`Condition.stage[i].assessment`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-stage-assessment)
- [`Condition.stage[i].type`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-stage-type)
- [`Condition.evidence[i].code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-evidence-code)
- [`Condition.evidence[i].detail`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-evidence-detail)
- [`Condition.note[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-note)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Condition` (data diagnosis), dapat dilihat dalam _resource_ [`Condition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition). Untuk contoh pengiriman data atau _payload_ dari `Condition` dapat dilihat dalam Postman Collection.

### [](#_pemetaan_variabel_dan_terminologi_spesifik)Pemetaan Variabel dan Terminologi Spesifik

Terminologi spesifik yang digunakan dalam pengiriman data keluhan utama melalui _resource_ [`Condition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition) dapat dilihat dalam tabel berikut:

Tabel 2. Pemetaan Variabel dan Terminologi Spesifik

Pemetaan Variabel Resource Condition

**Elemen/Path FHIR**

**Terminologi/Format Pengisian**

**1\. Keluhan Utama**

**`Condition.category.coding.system`**

**[http://terminology.hl7.org/CodeSystem/condition-category](http://terminology.hl7.org/CodeSystem/condition-category)**

**`Condition.category.coding.code`**

**problem-list-item**

**`Condition.category.coding.display`**

**Problem List Item**

**`Condition.code.coding.system`**

**[http://snomed.info/sct](http://snomed.info/sct)**

**`Condition.code.coding.code`**

**SNOMED-CT code**

**`Condition.code.coding.display`**

**SNOMED-CT Description**

## [](#_pengiriman_data_alergi)Pengiriman Data Alergi

Pasien mungkin memiliki informasi alergi terhadap zat atau bahan tertentu. Informasi tersebut dapat dimasukkan menggunakan [_resource_ `AllergyIntolerance`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance).

### [](#_pemetaan_nilai_3)Pemetaan Nilai

Berikut pemetaan nilai untuk `AllergyIntolerance` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks Pengiriman Data Alergi:

- [`AllergyIntolerance.identifier[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-identifier)
- [`AllergyIntolerance.clinicalStatus`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-clinicalstatus)
- [`AllergyIntolerance.verificationStatus`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-verificationstatus)
- [`AllergyIntolerance.type`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-type)
- [`*AllergyIntolerance.category[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-category)
- [`AllergyIntolerance.criticality`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-criticality)
- [`*AllergyIntolerance.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-code)
- [`*AllergyIntolerance.patient`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-patient)
- [`AllergyIntolerance.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-encounter)
- [`AllergyIntolerance.onsetDateTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-onsetdatetime)
- [`AllergyIntolerance.onsetAge`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-onsetage)
- [`AllergyIntolerance.onsetPeriod`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-onsetperiod)
- [`AllergyIntolerance.onsetRange`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-onsetrange)
- [`AllergyIntolerance.onsetString`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-onsetstring)
- [`AllergyIntolerance.recordedDate`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-recordeddate)
- [`AllergyIntolerance.recorder`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-recorder)
- [`AllergyIntolerance.asserter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-asserter)
- [`AllergyIntolerance.lastOccurrence`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-lastoccurrence)
- [`AllergyIntolerance.note[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-note)
- [`AllergyIntolerance.reaction[i].substance`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-reaction-substance)
- [`*AllergyIntolerance.reaction[i].manifestation`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-reaction-manifestation)
- [`AllergyIntolerance.reaction.description`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-reaction-description)
- [`AllergyIntolerance.reaction.onset`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-reaction-onset)
- [`AllergyIntolerance.reaction.severity`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-reaction-severity)
- [`AllergyIntolerance.reaction.exposureRoute`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-reaction-exposureroute)
- [`AllergyIntolerance.reaction.note[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance-reaction-note)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `AllergyIntolerance` (data alergi), dapat dilihat dalam [_resource_ `AllergyIntolerance`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/allergy-intolerance/#allergyintolerance). Untuk contoh pengiriman data atau _payload_ dari `AllergyIntolerance` dapat dilihat dalam Postman Collection.

## [](#_pengiriman_data_hasil_pemeriksaan)Pengiriman Data Hasil Pemeriksaan

### [](#_pemetaan_nilai_tanda_vital)Pemetaan Nilai Tanda Vital

Setelah sesi anamnesis, dokter akan melakukan beberapa pemeriksaan fisik dan tanda-tanda vital _(vital sign)_. Data hasil pemeriksaan fisik dapat dikirimkan melalui _resource_ [`Observation`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation).

Berikut pemetaan nilai untuk `Observation` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks pemeriksaan laboratorium:

- [`Observation.identifier[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-identifier)
- [`Observation.basedOn[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-basedOn)
- [`Observation.partOf[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-partOf)
- [`*Observation.status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-status)
- [`Observation.category[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-category)
- [`*Observation.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-code)
- [`*Observation.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-subject)
- [`Observation.focus[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-focus)
- [`*Observation.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-encounter)
- [`Observation.effectiveDateTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-effectiveDateTime)
- [`Observation.effectivePeriod`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-effectivePeriod)
- [`Observation.effectiveTiming`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-effectiveTiming)
- [`Observation.effectiveInstant`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-effectiveInstant)
- [`Observation.issued`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-issued)
- [`Observation.performer[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-performer)
- [`Observation.valueQuantity`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-valueQuantity)
- [`Observation.valueCodeableConcept`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-valueCodeableConcept)
- [`Observation.valueString`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-valueString)
- [`Observation.valueBoolean`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-valueBoolean)
- [`Observation.valueInteger`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-valueInteger)
- [`Observation.valueRange`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-valueRange)
- [`Observation.valueRatio`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-valueRatio)
- [`Observation.valueSampledData`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-valueSampledData)
- [`Observation.valueTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-valueTime)
- [`Observation.valueDateTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-valueDateTime)
- [`Observation.valuePeriod`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-valuePeriod)
- [`Observation.dataAbsentReason`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-dataAbsentReason)
- [`Observation.interpretation[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-interpretation)
- [`Observation.note[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-note)
- [`Observation.bodySite`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-bodySite)
- [`Observation.method`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-method)
- [`Observation.specimen`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-specimen)
- [`Observation.device`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-device)
- [`Observation.referenceRange[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-referenceRange)
- [`Observation.referenceRange.type`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-referenceRange-type)
- [`Observation.hasMember[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-hasMember)
- [`Observation.derivedFrom[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-derivedFrom)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Observation` (data tanda vital), dapat dilihat dalam _resource_ [`Observation`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation). Untuk contoh pengiriman data atau _payload_ dari `Observation` dapat dilihat dalam Postman Collection.

#### [](#_pemetaan_variabel_dan_terminologi_spesifik_2)Pemetaan Variabel dan Terminologi Spesifik

Terminologi spesifik yang digunakan dalam pengiriman data tanda vital melalui _resource_ [`Observation`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation) dapat dilihat dalam tabel berikut:

Tabel 3. Terminologi spesifik yang digunakan dalam pengiriman data tanda vital melalui resource Observation

Pemetaan Variabel Resource Observation

**Elemen/Path FHIR**

**Terminologi/Format Pengisian**

**Denyut Jantung**

**`Observation.category[i].coding[i].system`**

**[http://terminology.hl7.org/CodeSystem/observation-category](http://terminology.hl7.org/CodeSystem/observation-category)**

**`Observation.category[i].coding[i].code`**

**vital-signs**

**`Observation.category[i].coding[i].display`**

**Vital Signs**

**`*Observation.code.coding.system`**

**[http://loinc.org](http://loinc.org)**

**`*Observation.code.coding.code`**

**8867-4**

**`*Observation.code.coding.display`**

**Heart rate**

**`Observation.valueQuantity.value`**

**_(Tipe data Decimal)_**

**`Observation.valueQuantity.unit`**

**beats/min**

**`Observation.valueQuantity.system`**

**[http://unitsofmeasure.org](http://unitsofmeasure.org)**

**`Observation.valueQuantity.code`**

**/min**

**Pernapasan**

**`Observation.category[i].coding[i].system`**

**[http://terminology.hl7.org/CodeSystem/observation-category](http://terminology.hl7.org/CodeSystem/observation-category)**

**`Observation.category[i].coding[i].code`**

**vital-signs**

**`Observation.category[i].coding[i].display`**

**Vital Signs**

**`*Observation.code.coding.system`**

**[http://loinc.org](http://loinc.org)**

**`*Observation.code.coding.code`**

**9279-1**

**`*Observation.code.coding.display`**

**Respiratory rate**

**`Observation.valueQuantity.value`**

**_(Tipe data Decimal)_**

**`Observation.valueQuantity.unit`**

**breaths/min**

**`Observation.valueQuantity.system`**

**[http://unitsofmeasure.org](http://unitsofmeasure.org)**

**`Observation.valueQuantity.code`**

**/min**

**Tekanan Darah Sistole**

**`Observation.category[i].coding[i].system`**

**[http://terminology.hl7.org/CodeSystem/observation-category](http://terminology.hl7.org/CodeSystem/observation-category)**

**`Observation.category[i].coding[i].code`**

**vital-signs**

**`Observation.category[i].coding[i].display`**

**Vital Signs**

**`*Observation.code.coding.system`**

**[http://loinc.org](http://loinc.org)**

**`*Observation.code.coding.code`**

**8480-6**

**`*Observation.code.coding.display`**

**Systolic blood pressure**

**`Observation.valueQuantity.value`**

**_(Tipe data Decimal)_**

**`Observation.valueQuantity.unit`**

**mm\[Hg\]**

**`Observation.valueQuantity.system`**

**[http://unitsofmeasure.org](http://unitsofmeasure.org)**

**`Observation.valueQuantity.code`**

**mm\[Hg\]**

**Tekanan Darah Diastole**

**`Observation.category[i].coding[i].system`**

**[http://terminology.hl7.org/CodeSystem/observation-category](http://terminology.hl7.org/CodeSystem/observation-category)**

**`Observation.category[i].coding[i].code`**

**vital-signs**

**`Observation.category[i].coding[i].display`**

**Vital Signs**

**`*Observation.code.coding.system`**

**[http://loinc.org](http://loinc.org)**

**`*Observation.code.coding.code`**

**8462-4**

**`*Observation.code.coding.display`**

**Diastolic blood pressure**

**`Observation.valueQuantity.value`**

**_(Tipe data Decimal)_**

**`Observation.valueQuantity.unit`**

**mm\[Hg\]**

**`Observation.valueQuantity.system`**

**[http://unitsofmeasure.org](http://unitsofmeasure.org)**

**`Observation.valueQuantity.code`**

**mm\[Hg\]**

**Suhu Tubuh**

**`Observation.category[i].coding[i].system`**

**[http://terminology.hl7.org/CodeSystem/observation-category](http://terminology.hl7.org/CodeSystem/observation-category)**

**`Observation.category[i].coding[i].code`**

**vital-signs**

**`Observation.category[i].coding[i].display`**

**Vital Signs**

**`*Observation.code.coding.system`**

**[http://loinc.org](http://loinc.org)**

**`*Observation.code.coding.code`**

**8310-5**

**`*Observation.code.coding.display`**

**Body temperature**

**`Observation.valueQuantity.value`**

**_(Tipe data Decimal)_**

**`Observation.valueQuantity.unit`**

**C**

**`Observation.valueQuantity.system`**

**[http://unitsofmeasure.org](http://unitsofmeasure.org)**

**`Observation.valueQuantity.code`**

**Cel**

### [](#_pemetaan_nilai_tingkat_kesadaran)Pemetaan Nilai Tingkat Kesadaran

Hasil pemeriksaan tingkat kesadaran dapat dikirimkan menggunakan _resource_ [`Observation`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation).

Berikut pemetaan nilai untuk `Observation` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait:

- [`*Observation.status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-status)
- [`Observation.basedOn[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-basedOn)
- [`Observation.category[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-category)
- [`*Observation.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-code)
- [`*Observation.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-subject)
- [`*Observation.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-encounter)
- [`Observation.issued`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-issued)
- [`Observation.performer[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-performer)
- [`Observation.valueCodeableConcept`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation-valueCodeableConcept)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Observation` (data tingkat kesadaran), dapat dilihat dalam _resource_ [`Observation`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation). Untuk contoh pengiriman data atau _payload_ dari `Observation` dapat dilihat dalam Postman Collection.

#### [](#_pemetaan_variabel_dan_terminologi_spesifik_3)Pemetaan Variabel dan Terminologi Spesifik

Terminologi spesifik yang digunakan dalam pengiriman data tingkat kesadaran melalui _resource_ [`Observation`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/observation/#observation) dapat dilihat dalam tabel berikut:

Tabel 4. Terminologi spesifik yang digunakan dalam pengiriman data tingkat kesadaran melalui resource Observation

Resource Observation

**Elemen/Path FHIR**

**Terminologi/Format Pengisian**

**Tingkat Kesadaran**

**`Observation.category[i].coding.system`**

**[http://terminology.hl7.org/CodeSystem/observation-category](http://terminology.hl7.org/CodeSystem/observation-category)**

**`Observation.category[i].coding.code`**

**exam**

**`Observation.category[i].coding.display`**

**Exam**

**`*Observation.code.coding.system`**

**[http://loinc.org](http://loinc.org)**

**`*Observation.code.coding.code`**

**67775-7**

**`*Observation.code.coding.display`**

**Level of responsiveness**

**`Observation.valueCodeableConcept[i].coding.system`**

**`Observation.valueCodeableConcept[i].coding.code`**

**`Observation.valueCodeableConcept[i].coding.display`**

**Keterangan**

**[http://snomed.info/sct](http://snomed.info/sct)**

**248234008**

**Mentally alert**

**1\. Sadar Baik/Alert: 0**

**[http://snomed.info/sct](http://snomed.info/sct)**

**300202002**

**Response to voice**

**2\. Berespon dengan kata-kata/Voice: 1**

**[http://snomed.info/sct](http://snomed.info/sct)**

**450847001**

**Response to pain**

**3\. Hanya berespons jika dirangsang nyeri/pain: 2**

**[http://snomed.info/sct](http://snomed.info/sct)**

**422768004**

**Unresponsive**

**4\. Pasien tidak sadar/unresponsive: 3**

**[http://snomed.info/sct](http://snomed.info/sct)**

**130987000**

**Acute confusion**

**5\. Gelisah atau bingung: 4**

**[http://snomed.info/sct](http://snomed.info/sct)**

**2776000**

**Delirium**

**6\. Acute Confusional States: 5**

## [](#_pengiriman_data_tindakanprosedur_medis)Pengiriman Data Tindakan/Prosedur Medis

Pengiriman data tindakan/prosedur medis yang dilakukan terhadap seorang pasien baik tindakan diagnostik maupun tindakan terapetik dapat dikirimkan melalui _resource_ [`Procedure`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure). Tindakan yang dilaporkan dapat berupa tindakan non-invasif (konsultasi, edukasi) maupun invasive (contoh operasi). Standar kode tindakan/prosedur medis yang dikirimkan ke SATUSEHAT menggunakan kode ICD-9 CM.

### [](#_pemetaan_nilai_4)Pemetaan Nilai

Berikut pemetaan nilai untuk `Procedure` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks data tindakan/prosedur medis:

- [`Procedure.identifier[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-identifier)
- [`Procedure.basedOn[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-basedOn)
- [`Procedure.partOf[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-partOf)
- [`*Procedure.status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-status)
- [`Procedure.statusReason`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-statusReason)
- [`Procedure.category`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-category)
- [`*Procedure.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-code)
- [`*Procedure.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-subject)
- [`*Procedure.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-encounter)
- [`Procedure.performedDateTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-performedDateTime)
- [`Procedure.performedPeriod`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-performedPeriod)
- [`Procedure.performedString`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-performedString)
- [`Procedure.performedAge`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-performedAge)
- [`Procedure.performedRange`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-performedRange)
- [`Procedure.recorder`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-recorder)
- [`Procedure.asserter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-asserter)
- [`Procedure.performer[i].function`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-performer-function)
- [`*Procedure.performer[i].actor`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-performer-actor)
- [`Procedure.performer[i].onBehalfOf`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-performer-onBehalfOf)
- [`Procedure.location`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-location)
- [`Procedure.reasonCode[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-reasonCode)
- [`Procedure.reasonReference[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-reasonReference)
- [`Procedure.bodySite[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-bodySite)
- [`Procedure.outcome`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-outcome)
- [`Procedure.report[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-report)
- [`Procedure.complication[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-complication)
- [`Procedure.complicationDetail[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-complicationDetail)
- [`Procedure.followUp[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-followUp)
- [`Procedure.note[i].authorReference`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-note-authorReference)
- [`Procedure.note[i].note.time`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-note-time)
- [`Procedure.note[i].note.text`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-note-text)
- [`Procedure.focalDevice[i].action`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-focalDevice-action)
- [`*Procedure.focalDevice[i].manipulated`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-focalDevice-manipulated)
- [`Procedure.usedReference[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-usedReference)
- [`Procedure.usedCode[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-usedCode)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Procedure` (data tindakan/prosedur medis), dapat dilihat dalam _resource_ [`Procedure`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure). Untuk contoh pengiriman data atau _payload_ dari `Procedure` dapat dilihat dalam Postman Collection.

## [](#_pengiriman_data_peresepan_obat)Pengiriman Data Peresepan Obat

Pengiriman data peresepan obat akan menggunakan 2 _resources_ yaitu `Medication` dan `MedicationRequest`. _resource_ [`Medication`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication) akan mencatatkan data umum terkait obat yang akan diresepkan. Sedangkan [_resource_ `MedicationRequest`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest) akan digunakan untuk mengirimkan data terkait peresepan obat seperti jumlah yang diresepkan, instruksi minum obat dan lain-lain. Kedua data ini dikirimkan secara bersamaan sebagai 1 paket yaitu `Medication` dan `MedicationRequest`. Satu _payload_ `Medication` dan `MedicationRequest` hanya dapat digunakan untuk peresepan 1 jenis obat saja. Apabila terdapat 2 jenis obat yang diresepkan, maka dikirimkan 2 paket `Medication` dan `MedicationRequest`.

![Skema Peresepan 1 Obat](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/_images/skema-peresepan1.png)

Gambar 2. Skema Peresepan 1 Obat

![Skema Peresepan 2 Obat](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/_images/skema-peresepan2.png)

Gambar 3. Skema Peresepan 2 Obat

### [](#_pemetaan_nilai_medication)Pemetaan Nilai Medication

Berikut pemetaan nilai untuk `Medication` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks data kode lokal obat di masing-masing institusi:

- [`Medication.identifier[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication-identifier)
- [`Medication.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication-code)
- [`Medication.status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication-status)
- [`Medication.manufacturer`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication-manufacturer)
- [`Medication.form`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication-form)
- [`Medication.ingredient[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication-ingredient)
- [`Medication.batch`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication-batch)
- [`Medication.batch.lotNumber`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication-batch-lotNumber)
- [`Medication.batch.expirationDate`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication-batch-expirationDate)
- [`*Medication.extension[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication-extension)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Medication` (data peresepan obat), dapat dilihat dalam _resource_ [`Medication`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication). Untuk contoh pengiriman data atau _payload_ dari `Medication` dapat dilihat dalam Postman Collection.

### [](#_pemetaan_nilai_medicationrequest)Pemetaan Nilai MedicationRequest

Berikut pemetaan nilai untuk `MedicationRequest` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks data pengobatan yang diberikan:

- [`MedicationRequest.identifier[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-identifier)
- [`*MedicationRequest.status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-status)
- [`MedicationRequest.statusReason`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-statusReason)
- [`*MedicationRequest.intent`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-intent)
- [`MedicationRequest.category[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-category)
- [`MedicationRequest.priority`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-priority)
- [`MedicationRequest.reportedBoolean`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-reportedBoolean)
- [`MedicationRequest.medicationReference`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-medicationReference)
- [`*MedicationRequest.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-subject)
- [`MedicationRequest.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-encounter)
- [`MedicationRequest.authoredOn`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-authoredOn)
- [`MedicationRequest.requester`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-requester)
- [`MedicationRequest.performer`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-performer)
- [`MedicationRequest.performerType`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-performerType)
- [`MedicationRequest.recorder`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-recorder)
- [`MedicationRequest.reasonCode[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-reasonCode)
- [`MedicationRequest.reasonReference[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-reasonReference)
- [`MedicationRequest.basedOn[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-basedOn)
- [`MedicationRequest.courseOfTherapyType`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-courseOfTherapyType)
- [`MedicationRequest.insurance[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-insurance)
- [`MedicationRequest.note[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-note)
- [`MedicationRequest.dosageInstruction[i].sequence`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-sequence)
- [`MedicationRequest.dosageInstruction[i].text`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-text)
- [`MedicationRequest.dosageInstruction[i].additionalInstruction`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-identifier)
- [`MedicationRequest.dosageInstrution[i].patientInstruction`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-patientInstruction)
- [`MedicationRequest.dosageInstruction[i].timing`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-timing)
- [`MedicationRequest.dosageInstruction.timing[i].event`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-timing-event)
- [`*MedicationRequest.dosageInstruction[i].timing.repeat`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-timing-repeat)
- [`MedicationRequest.dosageInstruction[i].timing.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-timing-code)
- [`MedicationRequest.dosageInstruction[i].site`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction)
- [`*MedicationRequest.dosageInstruction[i].route`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction)
- [`MedicationRequest.dosageInstruction[i].method`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-doseAndRate-method)
- [`MedicationRequest.dosageInstruction[i].doseAndRate.type`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-doseAndRate-type)
- [`MedicationRequest.dosageInstruction[i].doseAndRate.dose<?>`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-doseAndRate-dose)
- [`MedicationRequest.dosageInstruction[i].doseAndRate.rate<?>`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-doseAndRate-rate)
- [`MedicationRequest.dosageInstruction[i].doseAndRate.rateRatio`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-doseAndRate-rateRatio)
- [`MedicationRequest.dosageInstruction[i].doseAndRate.rateRange`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-doseAndRate-rateRange)
- [`MedicationRequest.dosageInstruction[i].doseAndRate.rateQuantity`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-doseAndRate-rateQuantity)
- [`MedicationRequest.dosageInstruction[i].maxDosePerPeriod`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-maxDosePerPeriod)
- [`MedicationRequest.dosageInstruction[i].maxDosePerAdministration`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-maxDosePerAdministration)
- [`MedicationRequest.dosageInstruction[i].maxDosePerLifeTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dosageInstruction-maxDosePerLifeTime)
- [`MedicationRequest.dispenseRequest.dispenseInterval`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dispenseRequest-dispenseInterval)
- [`MedicationRequest.dispenseRequest.validityPeriod`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dispenseRequest-validityPeriod)
- [`MedicationRequest.dispenseRequest.numberOfRepeatsAllowed`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dispenseRequest-numberOfRepeatsAllowed)
- [`MedicationRequest.dispenseRequest.quantity`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dispenseRequest-quantity-numberOfRepeatsAllowed)
- [`MedicationRequest.dispenseRequest.expectedSupplyDuration`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dispenseRequest-expectedSupplyDuration)
- [`MedicationRequest.dispenseRequest.performer`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-dispenseRequest-performer)
- [`*MedicationRequest.substitution.allowed<?>`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-substitution-allowed)
- [`MedicationRequest.substitution.allowedBoolean`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-substitution-allowedBoolean)
- [`MedicationRequest.substitution.allowedCodeableConcept`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-substitution-allowedCodeableConcept)
- [`MedicationRequest.substitution.reason`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest-substitution-reason)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `MedicationRequest` (data peresepan obat), dapat dilihat dalam [_resource_ `MedicationRequest`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest). Untuk contoh pengiriman data atau _payload_ dari `MedicationRequest` dapat dilihat dalam Postman Collection.

### [](#_ketentuan_pengisian)Ketentuan Pengisian

Ketentuan pengisian secara spesifik untuk pengisian _resource_ [`Medication`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication) adalah sebagai berikut:

1.  `Medication.code`  
    `Medication.code` dapat diisi dengan kode obat yang digunakan akan menggunakan kode obat yang tersedia pada KFA (kamus farmasi dan alat kesehatan). Terdapat 3 tipe kode KFA yaitu:

    1.  Kode Produk Obat Template (92xxxxxx)
    2.  Kode Produk Obat Aktual (93xxxxxx) → kode untuk obat brand
    3.  Kode Produk Obat Aktual dalam Kemasan (94xxxxxx) Pengisian kode KFA tergantung jenis obat yang diresepkan atau dikeluarkan apakah dalam bentuk produk obat template atau produk obat aktual. Penjelasan struktur kamus KFA dapat dilihat dalam lampiran 1. Daftar kode obat KFA dapat dilihat dalam [kamus KFA](https://dto.kemkes.go.id/kfa-browser). `Medication.code` wajib diisi apabila mengirimkan data obat non-racikan. Untuk pengiriman data racikan, `Medication.code` dapat dikosongkan.

2.  `Medication.ingredient`  
    Terdapat 2 cara pengisian `Medication.ingredient` yaitu:

    1.  Peresepan/pengeluaran obat non-racikan dan obat racikan dengan instruksi berikan dalam dosis demikian/ d.t.d.

        - `Medication.ingredient` wajib diisi apabila data yang dikirimkan adalah obat racikan
        - `Medication.ingredient[i].itemCodeableConcept` diisikan kode zat aktif dari KFA (91xxxxxx). Daftar kode zat aktif dapat dilihat dalam [kamus KFA](https://dto.kemkes.go.id/kfa-browser)

    2.  Peresepan/pengeluaran obat racikan non-d.t.d (bagi dalam bagian-bagian yang sama) → Wajib diisi apabila data yang dikirimkan adalah obat racikan.

        - `Medication.ingredient` wajib diisi apabila data yang dikirimkan adalah obat racikan
        - `Medication.ingredient[i].itemCodeableConcept` diisikan kode obat template dari KFA (92xxxxxx). Daftar Kode Obat template dapat dilihat dalam [Daftar Kode Obat](https://dto.kemkes.go.id/kfa-browser)

Ketentuan pengisian secara spesifik untuk pengisian [_resource_ `MedicationRequest`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-request/#medicationrequest) adalah sebagai berikut:

1.  `MedicationRequest.recorder`  
    `MedicationRequest.recorder` menjelaskan siapa yang mencatatkan resep ke dalam sistem. Ketentuan pengisian elemen ini yaitu:

    - Bila diisi oleh dokter yang meresepkan, maka akan merefer ke Practitioner ID dari dokter tersebut
    - Bila diisi oleh apoteker yang mendapatkan resep dari fasilitas pelayanan kesehatan lain, maka akan merefer ke Practitioner ID dari apoteker tersebut

2.  `MedicationRequest.dosageInstruction[i].sequence`  
    `MedicationRequest.dosageInstruction[i].sequence` menjelaskan urutan aturan pemakaian dari obat.

    - Apabila dalam peresepan aturan pakai akan selalu sama dari awal sampai akhir, maka cukup menuliskan 1 paket aturan pakai dengan nilai sequence=1.
    - Apabila terdapat perubahan aturan pakai dalam peresepan, contoh _tapering-down_, maka perlu dituliskan 2 paket aturan pakai dengan paket pertama nilai sequence=1, sedangkan paket aturan pakai kedua dengan nilai sequence=2

3.  `MedicationRequest.dosageInstruction[i].timing.repeat`  
    `MedicationRequest.dosageInstruction[i].timing.repeat` berisi aturan kapan suatu obat harus dikonsumsi. Cara Pengisian dapat dilihat dalam Gambar 4.

4.  `MedicationRequest.dosageInstruction[i].timing.code`  
    `MedicationRequest.dosageInstruction[i].timing.code` berisi kode untuk aturan kapan suatu obat harus dikonsumsi. Apabila mengirimkan data menggunakan `MedicationRequest.dosageInstruction[i].timing.code`, elemen `MedicationRequest.dosageInstruction[i].timing.repeat` harus tetap diisi yang ekuivalen. Hubungan antara `MedicationRequest.dosageInstruction[i].timing.code` dengan `MedicationRequest.dosageInstruction[i].timing.repeat` dapat dilihat dalam Gambar 5.

Tabel 6. Hubungan antara MedicationRequest.dosageInstruction\[i\].timing.code dengan MedicationRequest.dosageInstruction\[i\].timing.repeat

## [](#_pengiriman_data_pengeluaran_obat)Pengiriman Data Pengeluaran Obat

Pengiriman data pengeluaran/_dispense_ obat akan menggunakan 2 _resources_ yaitu `Medication` dan `MedicationDispense`. _resource_ [`Medication`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication) akan mencatatkan data umum terkait obat yang akan di _dispense_. Sedangkan [_resource_ `MedicationDispense`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense) akan digunakan untuk mengirimkan data terkait proses `dispense` obat, seperti jumlah yang di _dispense_, instruksi minum obat dan lain-lain. Kedua data ini dikirimkan secara bersamaan sebagai 1 paket yaitu `Medication` dan `MedicationDispense`. Satu _payload_ `Medication` dan `MedicationDispense` hanya digunakan untuk _dispense_/pengeluaran 1 jenis obat saja. Apabila terdapat 2 jenis obat yang dikeluarkan, maka dikirimkan 2 paket `Medication` dan `MedicationDispense`.

![Skema Pengeluaran 1 Obat](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/_images/skema-pengeluaran1.png)

Gambar 4. Skema Pengeluaran 1 Obat

![Skema Pengeluaran 2 Obat](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/_images/skema-pengeluaran2.png)

Gambar 5. Skema Pengeluaran 2 Obat

Penjelasan ketentuan spesifik pengiriman data pada _resource_ `Medication` dapat dilihat dalam Bab C.6 Pengiriman Data Peresepan Obat.

### [](#_pemetaan_nilai_5)Pemetaan Nilai

Berikut pemetaan nilai untuk `MedicationDispense` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks data laporan hasil pemeriksaan:

- [`MedicationDispense.identifier[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-identifier)
- [`MedicationDispense.partOf[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-partOf)
- [`*MedicationDispense.status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-status)
- [`MedicationDispense.category`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-category)
- [`MedicationDispense.medicationReference`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-medicationReference)
- [`*MedicationDispense.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-subject)
- [`MedicationDispense.context`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-context)
- [`MedicationDispense.performer[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-performer)
- [`MedicationDispense.performer[i].function`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-performer-function)
- [`MedicationDispense.location`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-location)
- [`MedicationDispense.authorizingPrescription[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-authorizingPrescription)
- [`MedicationDispense.quantity`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-quantity)
- [`MedicationDispense.daysSupply`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-daysSupply)
- [`MedicationDispense.whenPrepared`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-whenPrepared)
- [`MedicationDispense.whenHandedOver`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-whenHandedOver)
- [`MedicationDispense.dosageInstruction[i].sequence`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-sequence)
- [`MedicationDispense.dosageInstruction[i].text`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-text)
- [`MedicationDispense.dosageInstruction[i].additionalInstruction`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-additionalInstruction)
- [`MedicationDispense.dosageInstrution[i].patientInstruction`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-patientInstruction)
- [`MedicationDispense.dosageInstruction[i].timing`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-timing)
- [`MedicationDispense.dosageInstruction[i].timing.event`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-timing-event)
- [`MedicationDispense.dosageInstruction[i].timing.repeat`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-timing-repeat)
- [`MedicationDispense.dosageInstruction[i].timing.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-timing-code)
- [`MedicationDispense.dosageInstruction[i].site`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-site)
- [`MedicationDispense.dosageInstruction[i].route`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-route)
- [`MedicationDispense.dosageInstruction[i].method`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-method)
- [`MedicationDispense.dosageInstruction[i].doseAndRate.type`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-doseAndRate-type)
- [`MedicationDispense.dosageInstruction[i].doseAndRate.dose<?>`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-doseAndRate-dose)
- [`MedicationDispense.dosageInstruction[i].doseAndRate.doseRange`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-doseAndRate-doseRange)
- [`MedicationDispense.dosageInstruction[i].doseAndRate.doseQuantity`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-doseAndRate-doseQuantity)
- [`MedicationDispense.dosageInstruction[i].doseAndRate.rate<?>`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-doseAndRate-)
- [`MedicationDispense.dosageInstruction[i].doseAndRate.rateRatio`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-doseAndRate-rateRatio)
- [`MedicationDispense.dosageInstruction[i].doseAndRate.rateRange`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-doseAndRate-rateRange)
- [`MedicationDispense.dosageInstruction[i].doseAndRate.rateQuantity`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-doseAndRate-rateQuantity)
- [`MedicationDispense.dosageInstruction[i].maxDosePerPeriod`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-maxDosePerPeriod)
- [`MedicationDispense.dosageInstruction[i].maxDosePerAdministration`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-maxDosePerAdministration)
- [`MedicationDispense.dosageInstruction[i].maxDosePerLifeTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-dosageInstruction-maxDosePerLifeTime)
- [`MedicationDispense.substitution.wasSubstituted`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-substitution-wasSubstituted)
- [`MedicationDispense.substitution.type`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-substitution-type)
- [`MedicationDispense.substitution.reason`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-substitution-reason)
- [`MedicationDispense.substitution.responsibleParty`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense-substitution-responsibleParty)

#### [](#_ketentuan_pengisian_2)Ketentuan Pengisian

Ketentuan pengisian secara spesifik untuk pengisian [_resource_ `MedicationDispense`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense) adalah sebagai berikut:

1.  `MedicationDispense.dosageInstruction[i].sequence`  
    `MedicationRequest.dosageInstruction[i].sequence` menjelaskan urutan aturan pemakaian dari obat.

    - Apabila dalam peresepan aturan pakai akan selalu sama dari awal sampai akhir, maka cukup menuliskan 1 paket aturan pakai dengan nilai sequence=1.
    - Apabila terdapat perubahan aturan pakai dalam peresepan, contoh _tapering-down_, maka perlu dituliskan 2 paket aturan pakai dengan paket pertama nilai sequence=1, sedangkan paket aturan pakai kedua dengan nilai sequence=2

2.  `MedicationDispense.dosageInstruction[i].timing.repeat`  
    `MedicationDispense.dosageInstruction[i].timing.repeat` berisi aturan kapan suatu obat harus dikonsumsi. Cara Pengisian dapat dilihat dalam Gambar 6.

Tabel 7. Tatacara pengisian MedicationDispense.dosageInstruction\[i\].timing.repeat

description

duration

durationUnit

frequency

frequencyMax

period

periodUnit

periodMax

DayofWeek

TimeOfDay

when

offset

bounds\[x\]

count

**Every 8 hours**

**1**

**8**

**h**

**Every 7 days**

**1**

**7**

**d**

**3 times a day**

**3**

**1**

**d**

**3-4 times a day**

**3**

**4**

**1**

**d**

**Every 4-6 hours**

**1**

**4**

**h**

**6**

**Every 21 days for 1 hours**

**1**

**hr**

**1**

**21**

**d**

**Three times a week for 1/2 hour**

**0.5**

**hr**

**3**

**1**

**wk**

**With breakfast**

**CM**

**For 5 minutes, 10 minutes before meals**

**5**

**min**

**AC**

**10**

**1 tablet 3 times daily, 30 minutes before meals**

**3**

**1**

**d**

**AC**

**30**

**BID, 30 mins before meal, for next 10 days**

**2**

**1**

**d**

**AC**

**30**

**Duration = 10 days**

**TID, for 14 days**

**3**

**1**

**d**

**Duration = 14 days**

**BID, start on 7/1/2015 at 1:00 PM**

**2**

**1**

**d**

**Period.start = 2015-07-01T13:00:00**

**Mon, Wed, Fri, Morning**

**1**

**1**

**d**

**mon l wed l fri**

**MORN**

**Every day at 10am**

**1**

**1**

**d**

**10:00**

**Take once, at any time**

**1**

**Take every second day, in the morning, until 20 have been taken**

**1**

**2**

**d**

**MORN**

**20**

1.  `MedicationDispense.dosageInstruction[i].timing.code` `MedicationDispense.dosageInstruction[i].timing.code` berisi kode untuk aturan kapan suatu obat harus dikonsumsi. Apabila mengirimkan data menggunakan `MedicationDispense.dosageInstruction[i].timing.code`, elemen `MedicationDispense.dosageInstruction[i].timing.repeat` harus tetap diisi yang ekuivalen. Hubungan antara `MedicationDispense.dosageInstruction[i].timing.code` dengan `MedicationDispense.dosageInstruction[i].timing.repeat` dapat dilihat dalam Gambar 7.

Tabel 8. Hubungan antara MedicationRequest.dosageInstruction\[i\].timing.code dengan MedicationRequest.dosageInstruction\[i\].timing.repeat

description

duration

durationUnit

frequency

frequencyMax

period

periodUnit

periodMax

when

bounds\[x\]

**QOD**

**1**

**2**

**d**

**QD**

**1**

**1**

**d**

**BID**

**2**

**1**

**d**

**TID**

**3**

**1**

**d**

**QID**

**4**

**1**

**d**

**Q4H**

**1**

**4**

**h**

**Q6H**

**1**

**6**

**h**

**AM**

**1**

**1**

**d**

**MORN**

**PM**

**1**

**1**

**d**

**AFT or EVE**

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Medication` dan `MedicationDispense` (data peresepan obat dan pengeluaran obat), dapat dilihat dalam _resource_ [`Medication`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication/#medication) dan [_resource_ `MedicationDispense`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/medication-dispense/#medicationdispense). Untuk contoh pengiriman data atau _payload_ dari `Medication` dan `MedicationDispense` dapat dilihat dalam Postman Collection.

## [](#_pengiriman_data_diagnosis)Pengiriman Data Diagnosis

Data diagnosis pasien dapat dikirimkan menggunakan _resource_ [`Condition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition). Informasi diagnosis yang dimiliki pasien dilaporkan menggunakan kode ICD-10. Satu _payload_ `Condition` hanya dapat digunakan untuk melaporkan 1 kode ICD-10. Sehingga apabila pasien memiliki 2 diagnosis, maka dikirimkan 2 _payload_ `Condition` dengan 2 kode ICD-10 yang berbeda.

### [](#_pemetaan_nilai_6)Pemetaan Nilai

Berikut pemetaan nilai untuk `Condition` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks pengiriman data diagnosis pasien:

- [`Condition.identifier[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-identifier)
- [`Condition.clinicalStatus`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-clinicalStatus)
- [`Condition.verificationStatus`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-verificationStatus)
- [`Condition.category[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-category)
- [`Condition.severity`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-severity)
- [`*Condition.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-code)
- [`Condition.bodySite[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-bodySite)
- [`*Condition.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-subject)
- [`*Condition.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-encounter)
- [`Condition.onsetDateTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-onsetDateTime)
- [`Condition.onsetAge`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-onsetAge)
- [`Condition.onsetPeriod`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-onsetPeriod)
- [`Condition.onsetRange`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-onsetRange)
- [`Condition.onsetString`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-onsetString)
- [`Condition.abatementDateTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-abatementDateTime)
- [`Condition.abatementAge`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-abatementAge)
- [`Condition.abatementPeriod`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-abatementPeriod)
- [`Condition.abatementRange`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-abatementRange)
- [`Condition.abatementString`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-abatementString)
- [`Condition.recordedDate`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-recordedDate)
- [`Condition.recorder`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-recorder)
- [`Condition.asserter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-asserter)
- [`Condition.stage[i].summary`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-stage-summary)
- [`Condition.stage[i].assessment`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-stage-assessment)
- [`Condition.stage[i].type`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-stage-type)
- [`Condition.evidence[i].code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-evidence-code)
- [`Condition.evidence[i].detail`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-evidence-detail`)
- [`Condition.note[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-note)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Condition` (data diagnosis), dapat dilihat dalam _resource_ [`Condition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition). Untuk contoh pengiriman data atau _payload_ dari `Condition` dapat dilihat dalam Postman Collection.

### [](#_pemetaan_variabel_dan_terminologi_spesifik_4)Pemetaan Variabel dan Terminologi Spesifik

Terminologi spesifik yang digunakan dalam pengiriman data diagnosis melalui _resource_ [`Condition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition) dapat dilihat dalam tabel berikut:

Tabel 9. Terminologi Spesifik

Pemetaan Variabel Resource Condition

**Elemen/Path FHIR**

**Terminologi/Format Pengisian**

**1\. Diagnosis**

**`Condition.category.coding.system`**

**[http://terminology.hl7.org/CodeSystem/condition-category](http://terminology.hl7.org/CodeSystem/condition-category)**

**`Condition.category.coding.code`**

**encounter-diagnosis**

**`Condition.category.coding.display`**

**Encounter Diagnosis**

**`Condition.code.coding.system`**

**[http://hl7.org/fhir/sid/icd-10](http://hl7.org/fhir/sid/icd-10)**

**`Condition.code.coding.code`**

**ICD-10 code**

**`Condition.code.coding.display`**

**ICD-10 Code Description**

## [](#_pengiriman_data_diet)Pengiriman Data Diet

Jika dokter memberikan rekomendasi diet untuk pasien atau rekomendasi untuk dietisien, informasi ini dapat dikirimkan melalui _resource_ [`Composition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition). Pengiriman rekomendasi diet dapat dikirimkan dengan tipe data `String`.

### [](#_pemetaan_nilai_7)Pemetaan Nilai

Berikut pemetaan nilai untuk `Composition` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks data diet pasien:

- [`Composition.identifier`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-identifier)
- [`*Composition.status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-status)
- [`*Composition.type`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-type)
- [`Composition.category[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-category)
- [`*Composition.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-subject)
- [`Composition.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-encounter)
- [`*Composition.date`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-date)
- [`*Composition.author[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-author)
- [`*Composition.title`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-title)
- [`Composition.confidentiality`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-confidentiality)
- [`*Composition.attester.mode`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-attester-mode)
- [`Composition.attester.time`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-attester-time)
- [`Composition.attester.party`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-attester-party)
- [`Composition.custodian`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-custodian)
- [`*Composition.relatesTo[i].code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-relatesTo-code)
- [`*Composition.relatesTo[i].target<?>`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-relatesTo-target)
- [`Composition.event[i].code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-event-code)
- [`Composition.event[i].period`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-event-period)
- [`Composition.event[i].detail`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-event-detail)
- [`Composition.section[i].title`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-section-title)
- [`Composition.section[i].code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-section-code)
- [`Composition.section[i].author`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-section-author)
- [`Composition.section[i].text`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-section-text)
- [`Composition.section[i].mode`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-section-mode)
- [`Composition.section[i].orderedBy`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-section-orderedBy)
- [`Composition.section[i].entry`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-section-entry)
- [`Composition.section[i].emptyReason`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition-section-emptyReason)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Composition` (data diet), dapat dilihat dalam _resource_ [`Composition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition). Untuk contoh pengiriman data atau _payload_ dari `Composition` dapat dilihat dalam Postman Collection.

Terminologi spesifik yang digunakan dalam pengiriman data diet melalui _resource_ [`Composition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/composition/#composition) dapat dilihat dalam tabel berikut:

Tabel 10. Terminologi Spesifik

Resource Composition

**Elemen/Path FHIR**

**Terminologi/Format Pengisian**

**Nama Variabel: Diet**

**`*Composition.type[i].coding.system`**

**[http://loinc.org/](http://loinc.org/)**

**`*Composition.type[i].coding.code`**

**18842-5**

**`*Composition.type[i].coding.display`**

**Discharge summary**

**`Composition.section[i].code.coding.system`**

**[http://loinc.org](http://loinc.org)**

**`Composition.section[i].code.coding.code`**

**42344-2**

**`Composition.section[i].code.coding.display`**

**Discharge diet (narrative)**

## [](#_pengiriman_data_prognosis)Pengiriman Data Prognosis

### [](#_pemetaan_nilai_8)Pemetaan Nilai

Berikut pemetaan nilai untuk `ClinicalImpression` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks pengiriman data keterangan prognosis pasien:

- [`ClinicalImpression.identifier[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-identifier)
- [`*ClinicalImpression.status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-status)
- [`ClinicalImpression.statusReason`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-statusReason)
- [`ClinicalImpression.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-code)
- [`ClinicalImpression.description`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-description)
- [`*ClinicalImpression.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-subject)
- [`*ClinicalImpression.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-encounter)
- [`ClinicalImpression.effective<?>`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-effective)
- [`ClinicalImpression.effectiveDateTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-effectiveDateTime)
- [`ClinicalImpression.effectivePeriod`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-effectivePeriod)
- [`ClinicalImpression.date`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-date)
- [`ClinicalImpression.assessor`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-assessor)
- [`ClinicalImpression.previous`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-previous)
- [`ClinicalImpression.problem[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-problem)
- [`*ClinicalImpression.investigation.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-investigation-code)
- [`ClinicalImpression.investigation.item[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-investigation-item)
- [`ClinicalImpression.protocol[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-protocol)
- [`ClinicalImpression.summary`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-summary)
- [`ClinicalImpression.finding.itemCodeableConcept`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-finding-itemCodeableConcept)
- [`ClinicalImpression.finding.itemReference`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-finding-itemReference)
- [`ClinicalImpression.finding.basis`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-finding-basis)
- [`*ClinicalImpression.prognosisCodeableConcept[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-prognosisCodeableConcept)
- [`ClinicalImpression.prognosisReference[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-prognosisReference)
- [`ClinicalImpression.supportingInfo[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-supportingInfo)
- [`ClinicalImpression.note[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression-note)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `ClinicalImpression` (data prognosis), dapat dilihat dalam [_resource_ `ClinicalImpression`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression). Untuk contoh pengiriman data atau _payload_ dari `ClinicalImpression` dapat dilihat dalam Postman Collection.

#### [](#_terminologi_spesifik)Terminologi Spesifik

Terminologi spesifik yang digunakan dalam pengiriman data prognosis melalui [_resource_ `ClinicalImpression`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/clinical-impression/#clinicalimpression) dapat dilihat dalam tabel berikut:

Tabel 11. Terminologi spesifik yang digunakan dalam pengiriman data prognosis melalui resource ClinicalImpression

Resource ClinicalImpression

**Nama Variabel: Prognosis**

**`*ClinicalImpression.prognosisCodeableConcept[i].coding.system`**

**`*ClinicalImpression.prognosisCodeableConcept[i].coding.code`**

**`*ClinicalImpression.prognosisCodeableConcept[i].coding.display`**

**Keterangan**

**[http://snomed.info/sct](http://snomed.info/sct)**

**170968001**

**Prognosis good**

**1\. Baik;**

**[http://snomed.info/sct](http://snomed.info/sct)**

**65872000**

**Fair prognosis**

**2\. Dubia et bonam / cenderung baik;**

**[http://snomed.info/sct](http://snomed.info/sct)**

**67334001**

**Guarded prognosis**

**3\. Dubia et malam / cenderung tidak baik;**

**[http://snomed.info/sct](http://snomed.info/sct)**

**170969009**

**Prognosis bad**

**4\. Tidak baik**

## [](#_pengiriman_data_kondisi_saat_meninggalkan_rumah_sakit)Pengiriman Data Kondisi Saat Meninggalkan Rumah Sakit

Data kondisi saat meninggalkan rumah sakit menunjukkan keadaan pasien saat meninggalkan rumah sakit. Pengisian pilihan jawaban dari kondisi saat meninggalkan rumah sakit dan _resource_ yang digunakan dapat dilihat dalam tabel berikut:

Tabel 12. Pilihan jawaban dari kondisi saat meninggalkan rumah sakit dan resource yang digunakan

Variabel

Format/Value

Resource

Elemen Data / Path

**Kondisi Saat Meninggalkan Rumah Sakit**

**1\. Stabil**

**`Condition`**

**`Condition.code.coding`**

**2\. Tidak stabil**

**`Condition`**

**`Condition.code.coding`**

**3\. Perbaikan**

**`Condition`**

**`Condition.code.coding`**

**4\. Pulang paksa**

**`Encounter`**

**`Encounter.hospitalization.dischargeDisposition.coding`**

**5\. Dirujuk**

**`Encounter`**

**`Encounter.hospitalization.dischargeDisposition.coding`**

**6\. Meninggal<48 jam**

**`Encounter`**

**`Encounter.hospitalization.dischargeDisposition.coding`**

**7\. Meninggal>48 jam**

**`Encounter`**

**`Encounter.hospitalization.dischargeDisposition.coding`**

**8\. Lain-lain (free text)**

**`Encounter`**

**`Encounter.hospitalization.dischargeDisposition.coding`**

Kondisi saat meninggalkan rumah sakit dengan pilihan jawaban “Stabil”, “Tidak stabil”, dan “Perbaikan” akan dikirimkan menggunakan _resource_ [`Condition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition).

### [](#_pemetaan_nilai_9)Pemetaan Nilai

Berikut pemetaan nilai untuk `Condition` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks jenis perawatan:

- [`Condition.clinicalStatus`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-clinicalStatus)
- [`Condition.category[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-category)
- [`*Condition.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-code)
- [`*Condition.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-subject)
- [`*Condition.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition-encounter)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Condition` (data diagnosis), dapat dilihat dalam _resource_ [`Condition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition). Untuk contoh pengiriman data atau _payload_ dari `Condition` seperti contoh pengiriman data atau _payload_ dari data kondisi saat meninggalkan rumah sakit dengan pilihan jawaban “Stabil”, “Tidak stabil”, dan “Perbaikan” dapat dilihat dalam Postman Collection.

#### [](#_pemetaan_variabel_dan_terminologi_spesifik_5)Pemetaan Variabel dan Terminologi Spesifik

Terminologi spesifik yang digunakan dalam pengiriman data kondisi saat meninggalkan rumah sakit dengan pilihan jawaban “Stabil”, “Tidak stabil”, dan “Perbaikan” melalui _resource_ [`Condition`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/condition/#condition) dapat dilihat dalam tabel berikut:

Tabel 13. Terminologi spesifik yang digunakan dalam pengiriman data kondisi saat meninggalkan rumah sakit melalui resource `Condition`

Resource Condition

**Elemen/Path FHIR**

**Terminologi/Format Pengisian**

**Nama Variabel: Kondisi Saat Meninggalkan Rumah Sakit**

**`Condition.category.coding.system`**

**[http://terminology.hl7.org/CodeSystem/condition-category](http://terminology.hl7.org/CodeSystem/condition-category)**

**`Condition.category.coding.code`**

**problem-list-item**

**`Condition.category.coding.display`**

**Problem List Item**

**`Condition.code.coding.system`**

**[http://snomed.info/sct](http://snomed.info/sct)**

**`Condition.code.coding.code`**

**359746009**

**162668006**

**268910001**

**`Condition.code.coding.display`**

**Patient’s condition stable**

**Patient’s condition unstable**

**Patient’s condition improved**

**Keterangan**

**Stabil**

**Tidak stabil**

**Perbaikan**

Kondisi saat meninggalkan rumah sakit dengan pilihan jawaban “Pulang paksa”, “Dirujuk”, “Meninggal <48 jam”, “Meninggal > 48 jam”, dan “lain-lain” akan dikirimkan menggunakan _resource_ [`Encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter) pada elemen `Encounter.hospitalization.dischargeDisposition.coding`. Sedangkan untuk pilihan jawaban lain-lain, keterangan tambahan dapat dikirimkan dengan tipe data `String` melalui elemen `Encounter.hospitalization.dischargeDisposition.text`.

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Encounter` (data pendaftaran kunjungan pasien), dapat dilihat dalam _resource_ [`Encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter). Untuk contoh pengiriman data atau _payload_ dari data kondisi saat meninggalkan rumah sakit dengan pilihan jawaban “Pulang paksa”, “Dirujuk”, “Meninggal <48 jam”, “Meninggal > 48 jam”, dan “lain-lain” dapat dilihat dalam Postman Collection.

Terminologi spesifik yang digunakan dalam pengiriman data kondisi saat meninggalkan rumah sakit dengan pilihan jawaban “Dirujuk”, “Meninggal <48 jam”, “Meninggal > 48 jam” melalui _resource_ [`Encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter) dapat dilihat dalam tabel berikut:

Tabel 14. Terminologi spesifik yang digunakan dalam pengiriman data kondisi saat meninggalkan rumah sakit melalui resource `Encounter`

Resource Encounter

**Nama Variabel: Kondisi Saat Meninggalkan Rumah Sakit**

**`Encounter.hospitalization.dischargeDisposition.coding.system`**

**`Encounter.hospitalization.dischargeDisposition.coding.code`**

**`Encounter.hospitalization.dischargeDisposition.coding.display`**

**Keterangan**

**[http://terminology.hl7.org/CodeSystem/discharge-disposition](http://terminology.hl7.org/CodeSystem/discharge-disposition)**

**aadvice**

**Left against advice**

**4\. Pulang paksa**

**[http://terminology.hl7.org/CodeSystem/discharge-disposition](http://terminology.hl7.org/CodeSystem/discharge-disposition)**

**other-hcf**

**Other healthcare facility**

**5\. Dirujuk**

**[http://terminology.kemkes.go.id/CodeSystem/discharge-disposition](http://terminology.kemkes.go.id/CodeSystem/discharge-disposition)**

**exp-lt48h**

**Meninggal <48 jam**

**6\. Meninggal <48 jam;**

**[http://terminology.kemkes.go.id/CodeSystem/discharge-disposition](http://terminology.kemkes.go.id/CodeSystem/discharge-disposition)**

**exp-gt48h**

**Meninggal >48 jam**

**7\. Meninggal >48 jam**

**[http://terminology.hl7.org/CodeSystem/discharge-disposition](http://terminology.hl7.org/CodeSystem/discharge-disposition)**

**oth**

**Other**

**8\. Lain-  
lain (free text)**

## [](#_pengiriman_data_rencana_tindak_lanjut_cara_keluar_dari_rumah_sakit_sarana_transportasi_untuk_rujuk)Pengiriman Data Rencana Tindak Lanjut / Cara Keluar dari Rumah Sakit & Sarana Transportasi Untuk Rujuk

Data rencana tindak lanjut/cara keluar dari rumah sakit menunjukkan rencana perawatan selanjutnya yang akan diterima oleh pasien setelah pulang. Pengisian pilihan jawaban dari rencana tindak lanjut/cara keluar dari rumah sakit dan _resource_ yang digunakan dapat dilihat dalam tabel berikut:

Tabel 15. Pilihan jawaban dari rencana tindak lanjut/cara keluar dari rumah sakit dan resource yang digunakan

Variabel

Format/Value

Resource

Elemen Data / Path

**Rencana Tindak Lanjut / Cara Keluar dari Rumah Sakit**

**1\. Pulang atas persetujuan dokter**

**`Encounter`**

**`Encounter.hospitalization.dischargeDisposition.coding`**

**2\. Pulang atas permintaan sendiri**

**`Encounter`**

**`Encounter.hospitalization.dischargeDisposition.coding`**

**3\. Dirujuk ke (free text)**

**`ServiceRequest`**

**`ServiceRequest.code.coding`**

**4\. Rawat inap**

**`ServiceRequest`**

**`ServiceRequest.code.coding`**

**5\. Lain-lain (free text)**

**`Encounter`**

**`Encounter.hospitalization.dischargeDisposition.text`**

Rencana tindak lanjut/cara keluar dari rumah sakit dengan pilihan jawaban “Pulang atas persetujuan dokter” dan “Pulang atas permintaan sendiri” akan dikirimkan menggunakan _resource_ [`Encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter) pada elemen `Encounter.hospitalization.dischargeDisposition.coding`. Sedangkan untuk pilihan jawaban “Lain-lain”, keterangan tambahan dapat dikirimkan dengan tipe data `String` melalui elemen `Encounter.hospitalization.dischargeDisposition.text`.

### [](#_pemetaan_nilai_10)Pemetaan Nilai

Berikut pemetaan nilai untuk `ServiceRequest` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks jenis perawatan:

- [`ServiceRequest.identifier[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-identifier)
- [`*ServiceRequest.status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-status)
- [`*ServiceRequest.intent`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-intent)
- [`*ServiceRequest.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-code)
- [`*ServiceRequest.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-subject)
- [`*ServiceRequest.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-encounter)
- [`ServiceRequest.authoredOn`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-authoredOn)
- [`ServiceRequest.locationCode[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-locationCode)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Encounter` (data pendaftaran kunjungan pasien), dapat dilihat dalam _resource_ [`Encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter). Untuk contoh pengiriman data atau _payload_ dari data rencana tindak lanjut/cara keluar dari rumah sakit dengan pilihan jawaban “Pulang atas persetujuan dokter” dan “Pulang atas permintaan sendiri”, dan “lain-lain” dapat dilihat dalam Postman Collection.

#### [](#_pemetaan_variabel_dan_terminologi_spesifik_6)Pemetaan Variabel dan Terminologi Spesifik

Terminologi spesifik yang digunakan dalam pengiriman data kondisi saat meninggalkan rumah sakit dengan pilihan jawaban “Dirujuk”, “Meninggal <48 jam”, “Meninggal > 48 jam” melalui _resource_ [`Encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter) dapat dilihat dalam tabel berikut.

Tabel 16. Terminologi spesifik yang digunakan dalam pengiriman data kondisi saat meninggalkan rumah sakit melalui resource `Encounter`

Resource Encounter

**Nama Variabel: Rencana tindak lanjut/cara keluar dari rumah sakit**

**`Encounter.hospitalization.   dischargeDisposition.   coding.system`**

**`Encounter.hospitalization.   dischargeDisposition.   coding.code`**

**`Encounter.hospitalization.   dischargeDisposition.   coding.display`**

**Keterangan**

**[http://terminology.hl7.org/CodeSystem/discharge-disposition](http://terminology.hl7.org/CodeSystem/discharge-disposition)**

**home**

**Home**

**1\. Pulang atas persetujuan dokter**

**[http://terminology.hl7.org/CodeSystem/discharge-disposition](http://terminology.hl7.org/CodeSystem/discharge-disposition)**

**aadvice**

**Left against advice**

**2\. Pulang atas permintaan sendiri**

**[http://terminology.hl7.org/CodeSystem/discharge-disposition](http://terminology.hl7.org/CodeSystem/discharge-disposition)**

**oth**

**Other**

**5\. Lain-lain (free text)**

Rencana tindak lanjut/cara keluar dari rumah sakit dengan pilihan jawaban “Dirujuk ke” dan “Rawat Inap” dikirimkan menggunakan [_resource_ `ServiceRequest`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest) pada elemen `ServiceRequest.code.coding`. Ketika memilih “Dirujuk ke”, maka variabel terkait “Sarana Transportasi Untuk Rujuk” wajib diisi melalui elemen `ServiceRequest.locationCode`.

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `ServiceRequest` (rencana tindak lanjut/cara keluar dari rumah sakit), dapat dilihat dalam [_resource_ `ServiceRequest`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest). Untuk contoh pengiriman data atau _payload_ dari data rencana tindak lanjut/cara keluar dari rumah sakit dengan pilihan jawaban “Dirujuk ke” dan “Rawat Inap” dapat dilihat dalam Postman Collection.

Terminologi spesifik yang digunakan dalam rencana tindak lanjut/cara keluar dari rumah sakit dengan pilihan jawaban “Dirujuk ke” dan “Rawat Inap” melalui [_resource_ `ServiceRequest`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest) dapat dilihat dalam tabel berikut:

Tabel 17. Terminologi spesifik yang digunakan dalam rencana tindak lanjut/cara keluar dari rumah sakit melalui resource ServiceRequest

Resource ServiceRequest

**Elemen/Path FHIR**

**Terminologi/Format Pengisian**

**Nama Variabel: Rencana tindak lanjut/cara keluar dari rumah sakit**

**`ServiceRequest.code.coding.system`**

**[http://snomed.info/sct](http://snomed.info/sct)**

**[http://snomed.info/sct](http://snomed.info/sct)**

**`ServiceRequest.code.coding.code`**

**3457005**

**737481003**

**`ServiceRequest.code.coding.display`**

**Patient referral**

**Inpatient care management**

**`Keterangan ServiceRequest.code`**

**3\. Dirujuk ke**

**4\. Rawat inap**

**`ServiceRequest.locationCode.coding.system`**

**[http://terminology.hl7.org/CodeSystem/v3-RoleCode](http://terminology.hl7.org/CodeSystem/v3-RoleCode)**

**`ServiceRequest.locationCode.code.coding.code`**

**AMB**

**`ServiceRequest.locationCode.code.coding.display`**

**Ambulance**

**`ServiceRequest.locationCode.text`**

**_Tipe data String_**

**Keterangan `ServiceRequest.locationCode`**

**\* Format pengisian untuk jawaban 1. Ambulans dapat melihat elemen `ServiceRequest.locationCode.coding` \* Format pengisian untuk 2. Lain-lain (free text) dapat melihat elemen `ServiceRequest.locationCode.text`**

## [](#_pengiriman_data_instruksi_untuk_tindak_lanjut)Pengiriman Data Instruksi untuk Tindak Lanjut

Variabel Instruksi untuk tindak lanjut dan _resource_ yang digunakan dapat dilihat dalam tabel berikut:

Tabel 18. Variabel instruksi untuk tindak lanjut dan resources yang digunakan

Variabel

Format/Value

Path FHIR

**Instruksi untuk Tindak Lanjut**

**Kontrol ke**

**1\. Poli**

**`ServiceRequest.locationCode` `ServiceRequest.code`**

**2\. Fasyankes**

**3\. Lain-lain (free text)**

**Tanggal**

**`ServiceRequest.occurrenceDateTime`**

**Dalam Keadaan Darurat dapat Menghubungi**

**`ServiceRequest.patientInstruction`**

### [](#_pemetaan_nilai_11)Pemetaan Nilai

Berikut pemetaan nilai untuk `ServiceRequest` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks jenis perawatan:

- [`ServiceRequest.identifier[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-identifier)
- [`*ServiceRequest.status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-status)
- [`*ServiceRequest.intent`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-intent)
- [`*ServiceRequest.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-code)
- [`*ServiceRequest.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-subject)
- [`*ServiceRequest.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-encounter)
- [`ServiceRequest.occurrenceDateTime`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-occurrence-date-time)
- [`ServiceRequest.authoredOn`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-authoredOn)
- [`ServiceRequest.performer[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-performer)
- [`ServiceRequest.locationCode[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-locationCode)
- [`ServiceRequest.locationReference[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-location-reference)
- [`ServiceRequest.patientInstruction`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest-patientinstruction)

Pengiriman data instruksi tindak lanjut dikirimkan melalui [_resource_ `ServiceRequest`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest). Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `ServiceRequest` (rencana/intruksi tindak lanjut/cara keluar dari rumah sakit), dapat dilihat dalam [_resource_ `ServiceRequest`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest). Untuk contoh pengiriman data atau _payload_ dari `ServiceRequest` dapat dilihat dalam Postman Collection.

#### [](#_pemetaan_variabel_dan_terminologi_spesifik_7)Pemetaan Variabel dan Terminologi Spesifik

Terminologi spesifik yang digunakan dalam instruksi tindak lanjut melalui [_resource_ `ServiceRequest`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/service-request/#servicerequest) dapat dilihat dalam tabel berikut:

Tabel 19. Pemetaan Variabel dan Terminologi Spesifik

Resource ServiceRequest

**Elemen/Path FHIR**

**Terminologi/Format Pengisian**

**Instruksi Tindak Lanjut**

**`ServiceRequest.code.coding.system`**

**[http://snomed.info/sct](http://snomed.info/sct)**

**`ServiceRequest.code.coding.code`**

**185389009**

**`ServiceRequest.code.coding.display`**

**Follow-up visit**

**`ServiceRequest.locationCode.coding.system`**

**[http://terminology.hl7.org/CodeSystem/v3-RoleCode](http://terminology.hl7.org/CodeSystem/v3-RoleCode)**

**`ServiceRequest.locationCode.code.coding.code`**

**OF**

**HOSP**

**PC**

**`ServiceRequest.locationCode.code.coding.display`**

**Outpatient facility**

**Hospital**

**Primary care clinic**

**Keterangan `ServiceRequest.locationCode`**

**1\. Poli**

**2\. Fasyankes**

**2\. Fasyankes**

**Untuk pilihan jawaban “3. Lain-lain (free-text)”, maka tuliskan keterangan melalui elemen ServiceRequest.locationCode.text**

**Rujukan Internal / Kontrol Ulang di Rumah Sakit yang Sama (Self Referral)**

**`ServiceRequest.code.coding.system`**

**[http://snomed.info/sct](http://snomed.info/sct)**

**`ServiceRequest.code.coding.code`**

**306098008**

**`ServiceRequest.code.coding.display`**

**Self-referral**

**`ServiceRequest.code.coding.system`**

**[http://snomed.info/sct](http://snomed.info/sct)**

**`ServiceRequest.code.coding.code`**

**11429006**

**`ServiceRequest.code.coding.display`**

**Consultation**

**Rujukan External menggunakan kode SNOMED-CT (Patient Referral)**

**`ServiceRequest.code.coding.system`**

**[http://snomed.info/sct](http://snomed.info/sct)**

**`ServiceRequest.code.coding.code`**

**3457005**

**`ServiceRequest.code.coding.display`**

**Patient referral**

**`ServiceRequest.code.coding.system`**

**[http://snomed.info/sct](http://snomed.info/sct)**

**`ServiceRequest.code.coding.code`**

**11429006**

**`ServiceRequest.code.coding.display`**

**Consultation**

## [](#_pengiriman_data_edukasi)Pengiriman Data Edukasi

Variabel edukasi menunjukkan edukasi dan instruksi kerja untuk membantu individu dan keluarga dalam meningkatkan kemampuan untuk mencapai kesehatan secara optimal dan bersedia berpartisipasi dalam proses penyembuhan pada saat pulang. Data terkait edukasi yang diberikan kepada pasien dikirimkan menggunakan _resource_ [`Procedure`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure).

### [](#_pemetaan_nilai_12)Pemetaan Nilai

Berikut pemetaan nilai untuk `Procedure` yang direpresentasikan dalam peta referensi _(path)_ ke properti _(element id)_ terkait, untuk konteks data laporan hasil pemeriksaan:

- [`Procedure.identifier[i]`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-identifier)
- [`*Procedure.status`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-status)
- [`Procedure.category`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-category)
- [`*Procedure.code`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-code)
- [`*Procedure.subject`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-subject)
- [`*Procedure.encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure-encounter)

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Procedure` (data edukasi), dapat dilihat dalam _resource_ [`Procedure`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure). Untuk contoh pengiriman data atau _payload_ dari `Procedure` dapat dilihat dalam Postman Collection.

#### [](#_pemetaan_variabel_dan_terminologi_spesifik_8)Pemetaan Variabel dan Terminologi Spesifik

Terminologi spesifik yang digunakan dalam data edukasi melalui _resource_ [`Procedure`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/procedure/#procedure) dapat dilihat dalam tabel berikut:

Tabel 20. Terminologi spesifik yang digunakan dalam data edukasi melalui resource Procedure

Resource Procedure

**Edukasi**

**`Procedure.code.coding.system`**

**`Procedure.code.coding.code`**

**`Procedure.code.coding.display`**

**Keterangan**

**[http://snomed.info/sct](http://snomed.info/sct)**

**84635008**

**Disease process or condition education**

**1\. Proses penyakit, diagnosis, dan rencana asuhan**

**[http://snomed.info/sct](http://snomed.info/sct)**

**967006**

**Medication education**

**2\. Obat-obatan**

**[http://snomed.info/sct](http://snomed.info/sct)**

**410082002**

**Rehabilitation therapy education**

**3\. Rehabilitasi medis**

**[http://snomed.info/sct](http://snomed.info/sct)**

**712651001**

**Education about pain**

**4\. Manajemen nyeri**

**[http://snomed.info/sct](http://snomed.info/sct)**

**61310001**

**Nutrition education**

**5\. Gizi**

**[http://snomed.info/sct](http://snomed.info/sct)**

**698608004**

**Hand washing education**

**6\. Cuci tangan**

**[http://snomed.info/sct](http://snomed.info/sct)**

**362978005**

**Medical equipment or device education**

**7\. Penggunaan alat medis**

## [](#_pembaharuan_data_kunjungan)Pembaharuan Data Kunjungan

Setelah pasien selesai melakukan kunjungan ke fasyankes, maka perlu dilakukan pembaharuan data kunjungan dengan menambahkan informasi seperti diagnosis primer, diagnosa sekunder, periode kunjungan selesai, Kondisi Saat Meninggalkan Rumah Sakit, dan Rencana Tindak Lanjut / Cara Keluar dari Rumah Sakit, atau informasi lainnya yang belum tersedia di awal kunjungan dengan metode PUT. Pastikan dalam _payload_ yang akan dilakukan pembaharuan, dimasukkan elemen `Encounter.id` yang berisi UUID balikan dari SATUSEHAT setelah pengiriman data kunjungan di awal.

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/_path_ di dalam _resource_ `Encounter` (pembaharuan data kunjungan), dapat dilihat dalam _resource_ [`Encounter`](https://satusehat.kemkes.go.id/platform/docs/id/interoperability/fhir/resources/encounter/#encounter). Untuk contoh pengiriman data atau _payload_ dari `Encounter` dapat dilihat dalam Postman Collection.
