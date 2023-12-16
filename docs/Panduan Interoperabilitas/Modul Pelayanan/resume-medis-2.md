# Resume Medis - Rawat Jalan Jilid 2

Panduan SehatMu Use Case Resume Medis Rawat Jalan terdiri dari 2 jilid yaitu:

1. Jilid 1: Alur interoperabilitas secara umum untuk resume medis rawat jalan

2. Jilid 2: Alur interoperabilitas untuk pemeriksaan penunjang (laboratorium dan radiologi)

Tahapan alur interoperabilitas dan resource yang digunakan untuk Resume Medis Rawat Jalan dapat dilihat pada gambar di bawah ini.

![Alur Integrasi Resume Medis Rawat Jalan](https://SehatMu.kemkes.go.id/platform/docs/id/interoperability/_images/diagram-rawjal.png)

Alur integrasi dan format pengiriman data terkait pemeriksaan penunjang akan dijelaskan pada Buku Panduan SehatMu Resume Medis Rawat Jalan Jilid 2. Adapun langkah yang akan dijelaskan pada Buku Panduan SehatMu Resume Medis Rawat Jalan Jilid 2 yaitu:

1. Permintaan Pemeriksaan Penunjang
2. Spesimen
   - 2.a. Hasil Pemeriksaan Penunjang
   - 2.b. Hasil Radiologi (DICOM)
3. Laporan Hasil Pemeriksaan Penunjang

Data atau variabel resume medis rawat jalan yang dipertukarkan adalah:

<table class="tableblock frame-all grid-all stripes-even stretch">
<caption class="title">Tabel 1. Informasi Variabel</caption>
 
<thead>
<tr>
<th class="tableblock halign-center valign-top">No</th>
<th class="tableblock halign-left valign-middle" colspan="2">Variabel</th>
<th class="tableblock halign-center valign-top">Resource FHIR</th>
<th class="tableblock halign-center valign-top">Path FHIR</th>
<th class="tableblock halign-center valign-top">Fase</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>1</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="5"><p class="tableblock"><strong>Identitas Umum Pasien</strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>a</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>Nomor SehatMu Pasien</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Patient</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Patient.identifier.use</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="19"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Patient.identifier.system</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Patient.identifier.value</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>b</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Nama Lengkap</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Patient</code></strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Patient.name.text</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>c</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>Nomor Induk Kependudukan (NIK)</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Patient</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Patient.identifier.use</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Patient.identifier.system</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Patient.identifier.value</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>d</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>Nomor Identitas Lain (Khusus WNA): Nomor Paspor / KITAS</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Patient</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Patient.identifier.use</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Patient.identifier.system</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Patient.identifier.value</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>e</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Tempat Lahir</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Patient</code></strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Patient.extension:birthPlace</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>f</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Tanggal Lahir</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Patient</code></strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Patient.birthDate</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>g</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Jenis Kelamin</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Patient</code></strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Patient.gender</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>h</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Nama Penjamin</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Patient</code></strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Patient.contact.name.text</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>i</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>Nomor Telepon Penjamin</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Patient</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Patient.contact.telecom.system</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Patient.contact.telecom.value</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Patient.contact.telecom.use</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>j</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Ruangan / Kelas / Poli</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Encounter.location</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>k</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Nama Dokter Penanggung Jawab Pelayanan (DPJP)</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Encounter.participant</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>2</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="5"><p class="tableblock"><strong>Tanggal dan Waktu Masuk</strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>a</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Tanggal Masuk</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Encounter.period.start</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>b</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Jam masuk</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Encounter.period.start</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>3</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="5"><p class="tableblock"><strong>Tanggal dan Waktu Discharge Administrasi</strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>a</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Tanggal Discharge Administrasi</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Encounter.period.end</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>b</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Jam Discharge Administrasi</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong><code>Encounter.period.end</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>4</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="5"><p class="tableblock"><strong>Diagnosis</strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>a</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>Diagnosis Awal / Masuk</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter.diagnosis.condition</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="12"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter.diagnosis.use</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Condition</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Condition.code</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>b</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="3"><p class="tableblock"><strong>Diagnosis Akhir / Keluar</strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="4"></td>
<td class="tableblock halign-left valign-middle" rowspan="4"></td>
<td class="tableblock halign-left valign-middle" rowspan="4"><p class="tableblock"><strong>1. Diagnosis Primer / Utama</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter.diagnosis.condition</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter.diagnosis.use</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter.diagnosis.rank</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Condition</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Condition.code</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="4"></td>
<td class="tableblock halign-left valign-middle" rowspan="4"></td>
<td class="tableblock halign-left valign-middle" rowspan="4"><p class="tableblock"><strong>2. Diagnosis Sekunder / Penyerta</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter.diagnosis.condition.code</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter.diagnosis.use</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter.diagnosis.rank</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Condition</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Condition.code</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>5</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="5"><p class="tableblock"><strong>Pemeriksaan Penunjang</strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>a</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>Laboratorium</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Observation</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.category.coding</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.code.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.value[x]</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top" rowspan="2"><p class="tableblock"><strong>6</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="2" rowspan="2"><p class="tableblock"><strong>Tindakan / Prosedur Medis</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong><code>Procedure</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Procedure.code.coding</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Procedure.category.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>7</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="5"><p class="tableblock"><strong>Obat-obatan / Terapi</strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top" rowspan="2"></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>a</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>Nama Obat</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Medication</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Medication.code</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="11"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest.medicationReference</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top" rowspan="2"></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>b</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>Bentuk / Sediaan</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Medication</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Medication.form</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest.medicationReference</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>c</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Jumlah Obat</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest.dispenseRequest.quantity</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>d</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Metode / Rute Pemberian</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest.dosageInstruction.route</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>e</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Dosis Obat yang Diberikan</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest.dosageInstruction.doseAndRate.doseQuantity.value</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>f</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Unit</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest.dosageInstruction.doseAndRate.doseQuantity.unit</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>g</strong></p></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>Frekuensi / Interval</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest.dosageInstruction.timing</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top" rowspan="2"></td>
<td class="tableblock halign-center valign-top" rowspan="2"><p class="tableblock"><strong>h</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>Aturan Tambahan</strong></p></td>
<td class="tableblock halign-center valign-top" rowspan="2"><p class="tableblock"><strong><code>MedicationRequest</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest.dosageInstruction.additionalInstruction.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationRequest.dosageInstruction.additionalInstruction.text</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top" rowspan="4"><p class="tableblock"><strong>8</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="2" rowspan="4"><p class="tableblock"><strong>Diet</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="4"><p class="tableblock"><strong><code>Composition</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Composition.type</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="4"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Composition.section.code.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Composition.text.status</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Composition.text.div</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>9</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="2" rowspan="2"><p class="tableblock"><strong>Alergi</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong><code>AllergyIntolerance</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>AllergyIntolerance.category.coding</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>AllergyIntolerance.code.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>10</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="2"><p class="tableblock"><strong>Prognosis</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>ClinicalImpression</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>ClinicalImpression.prognosisCodeableConcept.coding</code></strong></p></td>
<td class="tableblock halign-left valign-top"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>11</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="2" rowspan="2"><p class="tableblock"><strong>Kondisi Saat Meninggalkan Rumah Sakit</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Condition</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Condition.code</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>  class="xref page"><code>Encounter.hospitalization.dischargeDisposition</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>12</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="2" rowspan="3"><p class="tableblock"><strong>Tingkat Kesadaran</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Observation</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.category.coding</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.code.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.valueCodeableConcept.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>13</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="5"><p class="tableblock"><strong>Keadaan umum</strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>a</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="4"><p class="tableblock"><strong>Vital Sign</strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>1. Denyut jantung</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Observation</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.category.coding</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="16"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.code.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.valueQuantity</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>2. Pernapasan</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Observation</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.category.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.code.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.valueQuantity</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"></td>
<td class="tableblock halign-center valign-top"></td>
<td class="tableblock halign-left valign-middle"><p class="tableblock"><strong>3. Tekanan darah</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="2"></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><div class="content"><div class="ulist">
<ul>
<li>
<p>Sistole</p>
</li>
</ul>
</div></div></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Observation</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.category.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.code.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.valueQuantity</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><div class="content"><div class="ulist">
<ul>
<li>
<p>Diastole</p>
</li>
</ul>
</div></div></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Observation</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.category.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.code.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.valueQuantity</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>4. Suhu tubuh</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong><code>Observation</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.category.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.code.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Observation.valueQuantity</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>14</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="2" rowspan="2"><p class="tableblock"><strong>Rencana Tindak Lanjut / Cara Keluar dari Rumah Sakit</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter.hospitalization.dischargeDisposition</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>ServiceRequest</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>ServiceRequest.code.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>15</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="5"><p class="tableblock"><strong>Obat yang Dibawa Pulang</strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="2"></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>a</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>Nama Obat</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Medication</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Medication.code</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="11"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense.medicationReference</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="2"></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>b</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>Bentuk / Sediaan</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Medication</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Medication.form</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense.medicationReference</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>c</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Jumlah Obat</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense.quantity</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>d</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Metode / Rute Pemberian</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense.dosageInstruction.route</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>e</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Dosis Obat yang Diberikan</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense.dosageInstruction.doseAndRate.doseQuantity.value</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>f</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Unit</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense.dosageInstruction.doseAndRate.doseQuantity.unit</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>g</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Frekuensi / Interval</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense.dosageInstruction.timing</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="2"></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>h</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>Aturan Tambahan</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong><code>MedicationDispense</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense.dosageInstruction.additionalInstruction.coding</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>MedicationDispense.dosageInstruction.additionalInstruction.text</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>16</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="5"><p class="tableblock"><strong>Instruksi untuk Tindak Lanjut</strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="3"></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>a</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="3"><p class="tableblock"><strong>Kontrol ke</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="5"><p class="tableblock"><strong><code>ServiceRequest</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>ServiceRequest.performer.organization</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="5"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>ServiceRequest.performer.locationReference</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>ServiceRequest.performer.locationCode</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>b</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Tanggal</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>ServiceRequest.occurenceDateTime</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"></td>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>c</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Dalam Keadaan Darurat dapat Menghubungi</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>ServiceRequest.patientInstruction</code></strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>17</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="2"><p class="tableblock"><strong>Edukasi</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Procedure</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Procedure.code.coding</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>5</strong></p></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>18</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="2"><p class="tableblock"><strong>Sarana Transportasi Untuk Rujuk</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>ServiceRequest</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>ServiceRequest.locationCode</code></strong></p></td>
<td class="tableblock halign-left valign-top"></td>
</tr>
<tr>
<td class="tableblock halign-center valign-top"><p class="tableblock"><strong>19</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="2"><p class="tableblock"><strong>Pasien / Penanggung Jawab (Nama dan Tanda Tangan)</strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter.subject</code></strong></p></td>
<td class="tableblock halign-left valign-top"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong>20</strong></p></td>
<td class="tableblock halign-left valign-middle" colspan="2" rowspan="2"><p class="tableblock"><strong>Dokter Penanggung Jawab Pelayanan (Nama dan Tanda Tangan)</strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"><p class="tableblock"><strong><code>Encounter</code></strong></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter.participant</code></strong></p></td>
<td class="tableblock halign-left valign-middle" rowspan="2"></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><strong><code>Encounter.participant.type</code></strong></p></td>
</tr>
</tbody>
</table>

## Pendaftaran Pasien

Apabila melakukan pengiriman data kesehatan melalui SehatMu yang memiliki elemen data terkait pasien, maka diperlukan informasi {patient-ihs-number} dari pasien yang bersangkutan. {patient-ihs-number} seorang pasien didapatkan dari Master Patient Index (MPI) Kementerian Kesehatan. MPI menyimpan data-data demografi pasien berskala nasional, mulai dari nama, tanggal lahir, alamat, identitas resmi yang diterbitkan pemerintah, dan lain lain. Setelah mendapatkan {patient-ihs-number}, ID dapat disimpan secara di masing-masing sistem internal fasyankes maupun partner non-fasyankes. {patient-ihs-number} akan mempermudah pelaporan pelayanan kesehatan yang berhubungan dengan pasien, karena partner tidak diwajibkan menyertakan data diri setiap ada pengiriman data {patient-ihs-number} juga dapat digunakan untuk melihat data diri pasien secara menyeluruh.

Proses pencarian {patient-ihs-number} dari pasien dapat dilakukan melalui FHIR API dengan metode GET. Untuk metode pencarian data pasien di SehatMu secara detail dapat dilihat dalam resource Patient dan terkait panduan/playbook MPI dapat dilihat dalam dokumen Master Patient Index.

## Pendaftaran Kunjungan Pasien

Kunjungan pasien dapat didefinisikan sebagai interaksi pasien terhadap suatu layanan fasyankes. Sebagai contoh, dalam satu rangkaian rawat jalan, seluruh rangkaian dapat didefinisikan sebagai satu Encounter. Data-data kunjungan pasien yang direkam meliputi kapan pertemuan tersebut mulai dan selesai, siapa tenaga kesehatan yang melayani, siapa subjek dari pelayanannya, dan informasi pendukung lainnya.

Berikut pemetaan nilai untuk Encounter yang direpresentasikan dalam peta referensi (path) ke properti (element id) terkait, untuk konteks data kunjungan:

- Encounter.identifier[i]
- \*Encounter.status
- \*Encounter.statusHistory[i].status
- \*Encounter.statusHistory[i].period
- \*Encounter.class
- \*Encounter.classHistory[i].class
- \*Encounter.classHistory[i].period
- Encounter.type[i]
- Encounter.serviceType
- Encounter.priority
- \*Encounter.subject
- Encounter.episodeOfCare[i]
- Encounter.basedOn[i]
- Encounter.participant[i].type
- Encounter.participant[i].individual
- \*Encounter.period
- Encounter.length
- Encounter.reasonCode[i]
- i[Encounter.reasonReference[i\]]
- \*Encounter.diagnosis[i].condition
- Encounter.diagnosis.use
- Encounter.diagnosis.rank
- Encounter.account[i]
- Encounter.hospitalization.preAdmissionIdentifier
- Encounter.hospitalization.origin
- Encounter.hospitalization.admitSource
- Encounter.hospitalization.reAdmission
- Encounter.hospitalization.dietPreference[i]
- Encounter.hospitalization.specialArrangement[i]
- Encounter.hospitalization.destination
- Encounter.hospitalization.dischargeDisposition
- \*Encounter.location[i]
- \*Encounter.serviceProvider
- Encounter.partOf

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/path di dalam resource Encounter (data pendaftaran kunjungan pasien), dapat dilihat dalam resource Encounter. Untuk contoh pengiriman data atau payload dari Encounter dapat dilihat dalam Postman Collection.

## Skema Pengiriman Data Terkait Pemeriksaan Penunjang Laboratorium

1. **Pemeriksaan Penunjang Tunggal**
   - Data yang perlu dikirimkan, yaitu:
     - 1 data permintaan (`ServiceRequest`)
     - 1 data spesimen (`Specimen`)
     - 1 data hasil pemeriksaan (`Observation`)
     - 1 data laporan pemeriksaan (`DiagnosticReport`)

![Gambar 2. Skema Pemeriksaan Penunjang Tunggal](https://SehatMu.kemkes.go.id/platform/docs/id/interoperability/_images/penunjang-tunggal.png)

2. **Pemeriksaan Penunjang Panel/Paket**
   - Contoh kasus: Seorang dokter melakukan permintaan pemeriksaan panel elektrolit darah yang terdiri dari 3 parameter yaitu natrium, kalium, dan klorida darah. Maka, data yang perlu dikirimkan yaitu:
     - 1 data permintaan (`ServiceRequest`) dengan kode LOINC untuk panel elektrolit darah
     - 1 data spesimen (`Specimen`)
     - 3 data hasil pemeriksaan (`Observation`) terdiri dari kode LOINC untuk natrium darah, kalium darah, klorida darah
     - 1 data laporan pemeriksaan (`DiagnosticReport`) dengan kode LOINC untuk panel elektrolit darah. 3 data hasil pemeriksaan (`Observation`) akan di referensi dalam data `DiagnosticReport`.

![Gambar 2. Skema Pemeriksaan Penunjang Panel](https://SehatMu.kemkes.go.id/platform/docs/id/interoperability/_images/penunjang-panel.png)

## Pengiriman Data Permintaan Pemeriksaan Penunjang Laboratorium

Sebelum melakukan pemeriksaan penunjang seperti laboratorium, diperlukan langkah permintaan pemeriksaan penunjang. Pengiriman data terkait permintaan pemeriksaan penunjang dapat dilakukan menggunakan resource ServiceRequest. Data permintaan pemeriksaan penunjang laboratorium yang dapat dikirimkan antara lain nama pemeriksaan, pasien terkait, kunjungan terkait, tanggal permintaan akan dilakukan, tanggal permintaan dibuat, dan tenaga kesehatan yang melakukan permintaan.

Kode LOINC atau kode Pemeriksaan Penunjang Nasional digunakan pada elemen ServiceRequest.code untuk merepresentasikan nama pemeriksaan yang diminta. Referensi pemetaan pemeriksaan laboratorium dengan kode LOINC dapat dilihat melalui kode LOINC. Gunakan parameter pemeriksaan dengan kategori “Permintaan” atau “Permintaan & Hasil” pada file Terminologi Laboratorium ketika mengirimkan data melalui resource ServiceRequest.

Satu payload atau satu record dari resource ServiceRequest hanya dapat digunakan untuk 1 kode/permintaan parameter laboratorium. Sehingga, apabila dilakukan permintaan 2 parameter laboratorium, sebagai contoh panel elektrolit dan hemoglobin, maka perlu mengirimkan 2 payload dimana 1 payload berisi 1 kode panel elektrolit dan 1 payload berisi kode parameter hemoglobin.

Berikut pemetaan nilai untuk ServiceRequest yang direpresentasikan dalam peta referensi (path) ke properti (element id) terkait, untuk konteks jenis perawatan:

- ServiceRequest.identifier[i]
- ServiceRequest.basedOn[i]
- ServiceRequest.replaces[i]
- ServiceRequest.requisition
- \*ServiceRequest.status
- \*ServiceRequest.intent
- ServiceRequest.category[i]
- ServiceRequest.priority
- ServiceRequest.doNotPerform
- \*ServiceRequest.code
- ServiceRequest.orderDetail[i]
- ServiceRequest.quantityQuantity
- ServiceRequest.quantityRatio
- ServiceRequest.quantityRange
- \*ServiceRequest.subject
- \*ServiceRequest.encounter
- ServiceRequest.occurrenceDateTime
- ServiceRequest.occurrencePeriod
- ServiceRequest.occurrenceTiming
- ServiceRequest.asNeededBoolean
- ServiceRequest.authoredOn
- ServiceRequest.requester
- ServiceRequest.performerType
- ServiceRequest.performer[i]
- ServiceRequest.locationCode[i]
- ServiceRequest.locationReference[i]
- ServiceRequest.reasonCode[i]
- ServiceRequest.reasonReference[i]
- ServiceRequest.insurance[i]
- ServiceRequest.supportingInfo[i]
- ServiceRequest.specimen[i]
- ServiceRequest.bodySite[i]
- ServiceRequest.note[i]
- ServiceRequest.patientInstruction
- ServiceRequest.relevantHistory[i]

Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/path di dalam resource ServiceRequest (data permintaan pemeriksaan penunjang laboratorium), dapat dilihat dalam resource ServiceRequest. Untuk contoh pengiriman data atau payload dari ServiceRequest dapat dilihat dalam Postman Collection.

## Pengiriman Data Spesimen

Pengiriman data spesimen yang digunakan pada pemeriksaan laboratorium dapat dikirimkan menggunakan resource Specimen. Data spesimen yang dapat dikirimkan antara lain jenis spesimen, waktu pengambilan spesimen, metode pengambilan spesimen, pasien terkait, kunjungan terkait, waktu spesimen diterima, tenaga kesehatan yang melakukan pengambilan sampel, permintaan terkait.

Satu payload atau satu record dari resource Specimen hanya dapat digunakan untuk 1 kode jenis spesimen. Sehingga, apabila diambil 2 jenis spesimen, sebagai contoh spesimen darah dan urin, maka perlu mengirimkan 2 payload dimana 1 payload berisi 1 kode spesimen darah dan 1 payload berisi kode spesimen urin.

Berikut pemetaan nilai untuk Specimen yang direpresentasikan dalam peta referensi (path) ke properti (element id) terkait, untuk konteks Pengiriman Data Spesimen:

- Specimen.identifier[i]
- Specimen.accessionIdentifier
- \*Specimen.status
- \*Specimen.type
- \*Specimen.subject
- Specimen.receivedTime
- Specimen.parent[i]
- Specimen.request[i]
- Specimen.collection.collector
- Spec imen.collection.collected<?>
- Specimen.collection.collectedDateTime
- Specimen.collection.collectedPeriod
- Specimen.collection.duration
- Specimen.collection.quantity
- Specimen.collection.method
- Specimen.collection.bodySite
- Specimen.collection.fastingStatus<?>
- Specimen.collection.fastingStatusCodeableConcept
- Specimen.collection.fastingStatusDuration
- Specimen.processing[i]
- Specimen.processing.description
- Specimen.processing.procedure
- Specimen.processing.additive[i]
- Specimen.processing.time<?>
- Specimen.processing.timeDateTime
- Specimen.processing.timePeriod
- Specimen.container[i]
- Specimen.container.identifier[i]
- Specimen.container.description
- Specimen.container.type
- Specimen.container.capacity
- Specimen.container.specimenQuantity
- Specimen.container.additive<?>
- Specimen.container.additiveCodeableConcept
- Specimen.container.additiveReference
- Specimen.condition[i]
- Specimen.note[i]
  Penjelasan tipe mandatoris, deskripsi dan format pengisian dari setiap elemen data/path di dalam resource Specimen (data permintaan spesimen), dapat dilihat dalam resource Specimen. Untuk contoh pengiriman data atau payload dari ServiceRequest dapat dilihat dalam Postman Collection.

# Pengiriman Data Hasil Pemeriksaan Penunjang Laboratorium

Hasil pemeriksaan penunjang dapat dikirimkan menggunakan _resource_ [Observation]. Berikut adalah ketentuan pengisian data hasil pemeriksaan laboratorium melalui _resource_ [Observation]:

1. Kode LOINC atau kode Pemeriksaan Penunjang Nasional digunakan pada elemen `Observation.code` untuk merepresentasikan nama pemeriksaan yang dihasilkan. Referensi pemetaan pemeriksaan laboratorium dengan kode LOINC dapat dilihat melalui [kode LOINC]. Gunakan parameter pemeriksaan dengan kategori "Hasil" atau "Permintaan & Hasil" pada file Terminologi Laboratorium ketika mengirimkan data melalui _resource_ [Observation].

2. Elemen `Observation.category.coding` diisi dengan kode _laboratory_.

3. Pemilihan elemen `Observation.value[x]` disesuaikan dengan Tipe hasil pemeriksaan laboratorium:

   - `Observation.valueCodeableConcept` untuk tipe hasil Nominal
   - `Observation.valueCodeableConcept` untuk tipe hasil Ordinal
   - `Observation.valueQuantity` untuk tipe hasil Kuantitatif/Quantitative
   - `Observation.valueString` untuk tipe hasil Naratif/Narrative

4. Elemen `Observation.referenceRange` direkomendasikan untuk selalu diisikan guna mempermudah interpretasi hasil laboratorium oleh tenaga kesehatan lainnya. Nilai normal yang dicantumkan disesuaikan dengan nilai normal yang ada dimasing-masing laboratorium berdasarkan alat maupun reagen yang tersedia.

Satu _payload_ atau satu _record_ dari _resource_ `Observation` hanya dapat digunakan untuk 1 kode hasil parameter laboratorium. Sehingga, apabila terdapat 2 hasil laboratorium, sebagai contoh hasil pemeriksaan hemoglobin dan hematokrit, maka perlu mengirimkan 2 _payload_ dimana 1 _payload_ berisi 1 kode pemeriksaan hemoglobin dan 1 _payload_ berisi kode pemeriksaan hematokrit.

### Pemetaan nilai untuk `Observation`

Berikut pemetaan nilai untuk beberapa elemen yang terkait dengan `Observation`:

- Observation.identifier[i]
- Observation.basedOn[i]
- Observation.partOf[i]
- Observation.status
- Observation.category[i]
- Observation.code
- Observation.subject
- Observation.focus[i]
- Observation.encounter
- Observation.effective<?>
- Observation.effectiveDateTime
- Observation.effectivePeriod
- Observation.effectiveTiming
- Observation.effectiveInstant
- Observation.issued
- Observation.performer[i]
- Observation.value<?>
- Observation.valueQuantity
- Observation.valueCodeableConcept
- Observation.valueString
- Observation.valueBoolean
- Observation.valueInteger
- Observation.valueRange
- Observation.valueRatio
- Observation.valueSampledData
- Observation.valueTime
- Observation.valueDateTime
- Observation.valuePeriod
- Observation.dataAbsentReason
- Observation.interpretation[i]
- Observation.note[i]
- Observation.bodySite
- Observation.method
- Observation.specimen
- Observation.device
- Observation.referenceRange[i]
- Observation.referenceRange.type
- Observation.hasMember[i]
- Observation.derivedFrom[i]

Penjelasan tipe mandatoris, deskripsi, dan format pengisian dari setiap elemen data/path di dalam _resource_ `Observation` (data hasil pemeriksaan laboratorium), dapat dilihat dalam _resource_ [Observation]. Untuk contoh pengiriman data atau _payload_ dari `Observation`, dapat dilihat dalam Postman Collection.

Berikut adalah daftar contoh variasi pengiriman data hasil pemeriksaan yang dapat dilihat pada Postman Collection:

1. Panel nominal (Golongan darah)
2. Panel ordinal (Apusan bakteri tahan asam)
3. Panel kuantitatif (Kolesterol total)
4. Panel naratif (Pap smear)
