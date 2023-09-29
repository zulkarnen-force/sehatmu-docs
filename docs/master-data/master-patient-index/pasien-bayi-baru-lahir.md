---
sidebar_position: 3
---

import Alert from '@site/src/components/Alert';

# Pasien Bayi Baru Lahir

# 1. Ruang Lingkup

**Pasien bayi baru lahir** akan memiliki proses sebagai berikut:

- Create Patient Data.
- Get Patient Data.

## 1.1. Persyaratan Data Minimum

Berikut ini persyaratan data minimum untuk pasien bayi baru lahir:

<Alert type="error">Setiap terdapat simbol asterik <code>*</code> sebelum nama variabel atau parameter yang disebutkan, maka variabel atau parameter tersebut bersifat <strong>WAJIB</strong>, <strong>harus ada</strong>, atau <strong>pasti selalu ada</strong>, contoh: <code>*variabel</code>.</Alert>

| Data Point    | Keterangan                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `*identifier` | Identitas yang digunakan oleh Pasien, saat ini Identitas yang dapat digunakan hanya ada 2 (dua) jenis yaitu: NIK (`nik`) dan NIK Ibu (`nik-ibu`) |
| `*name`       | Nama pasien bayi baru lahir yang diberikan di fasyankes. Penamaan yang mungkin:                                                                  |

- Nama lengkap diberikan oleh keluarga
- Penamaan generik dari fasyankes, contoh `Bayi Ny. [Nama ibu]` |
  | `*birthDate` | Tanggal Lahir dari Pasien Bayi. dengan format: `YYYY-MM-DD` |
  | `birthPlace` | Digunakan untuk menyimpan informasi Tempat lahir dari Pasien, sesuai standar penulisan NIK/KTP |
  | `*gender` | Jenis Kelamin dari Pasien, terdiri dari `male`, dan `female` |
  | `Nomor Kartu Keluarga` | Nomor administrasi keluarga yang diterbitkan DUKCAPIL |
  | `*multipleBirthInteger` | Digunakan untuk menyimpan informasi urutan kelahiran untuk pasien Bayi baru lahir, berisi nominal `1`, `2`, dan seterusnya sesuai dengan urutan kelahiran dalam kasus kelahiran kembar. Untuk kasus kelahiran tidak kembar dapat memasukan nilai `0` |
  | `*address` | Alamat pasien sesuai dengan KTP/NIK, untuk pasien Bayi baru lahir dapat menggunakan informasi alamat dari Orang Tua Bayi. Informasi alamat terdiri dari komponen:
- `use` - peruntukan alamat dalam hal ini menggunakan rumah atau `home`
- `line` - alamat lengkap sesuai KTP/NIK
- `city` - nama kota
- `postalCode` - kode pos
- `country` - negara, dalam hal ini menggunakan `ID`
- `extension` - penerapan kode administratif wilayah
  Kode administratif mengacu ke kode wilayah Kemendagri. Daftar kode wilayah terbaru dapat didapatkan di tahun berikut [Kode Wilayah KEMENDAGRI](https://docs.google.com/spreadsheets/d/13F87ScHgEikqYgv65ZAU1vsRLmXNFo1i/edit?usp=sharing&ouid=116173098464208547917&rtpof=true&sd=true) |
  | `*address-extension` | Digunakan untuk memuat informasi kode administratif wilayah dari alamat pasien sesuai NIK/KTP, yang terdiri dari:
- `province` - Kode Provinsi
- `city` - Kode Kab/Kota
- `district` - Kode Kecamatan
- `village` - Kode Desa/Kelurahan
- `rt` - Nomor RT
- `rw` - Nomor RW |
  | `telecom` | Digunakan untuk menyimpan informasi kontak pasien yang dapat dihubungi seperti telepon atau email |
  | `maritalStatus` | Digunakan untuk menyimpan informasi status pernikahan dari Pasien, seperti `S` - Never Married |
  | `citizenshipStatus`| Digunakan untuk menyimpan informasi status kewarganegaraan, dalam hal ini `WNI` atau `WNA` |

::: important
Setiap data harus unik / **TIDAK BOLEH** terdapat duplikasi
:::

### 1.2. Persyaratan Data Minimum - Orang Terkait

Berikut ini persyaratan data minimum untuk orang yang berkaitan dengan bayi baru lahir (Ibu/ Ayah):

::: important
Setiap terdapat simbol asterik `*` sebelum nama variabel atau parameter yang disebutkan, maka variabel atau parameter tersebut bersifat **WAJIB**, **harus ada**, atau **pasti selalu ada**, contoh: `*variabel`.
:::

Tabel 2. Persyaratan data minimum orang terkait:

| Data Points                    | Rationale                                                                                             |
| ------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `*ID Related Person`           | **An unique identifier** dari **record** orang yang terkait (Ibu/ Ayah) - **Generate** UUID dari FHIR |
| `*Related person’s Identifier` | Identitas pasien dari orang yang terkait (Ibu/ Ayah) (`Nomor IHS`)                                    |
| `*Patient’s Identifier`        | Identifier pasien (`Nomor IHS`)                                                                       |
| `*Relationship type`           | Hubungan pasien dengan orang yang terkait (Ibu/ Ayah)                                                 |
| `*Name`                        | Nama lengkap orang yang terkait (Ibu/ Ayah)                                                           |
| `*Gender`                      | Jenis kelamin orang yang terkait (Ibu/ Ayah)                                                          |
| `*Birth Date`                  | Tanggal lahir orang yang terkait (Ibu/ Ayah)                                                          |
| `*Address`                     | Alamat orang yang terkait (Ibu/ Ayah)                                                                 |
| `*Phone Number`                | Nomor telepon orang yang terkait (Ibu/ Ayah)                                                          |

<Alert type="warning">Orang terkait mengacu pada pasien terkait, misalnya Ibu, atau Ayah dari bayi yang baru lahir.</Alert>

## 2. Alur Pembuatan Data

Untuk membuat data pasien bayi baru lahir di SATUSEHAT, silahkan ikut langkah-langkah berikut:

### Tabel 1. Alur pembuatan data (NIK Ibu)

<table>
  <caption>Tabel 1. Alur pembuatan data (NIK Ibu)</caption>
  <tbody>
    <tr>
      <td><strong>Langkah</strong></td>
      <td><strong>Approach</strong></td>
    </tr>
    <tr>
      <td>Langkah 1: <strong>GET</strong> informasi Ibu pasien dari SATUSEHAT
        (<em>Untuk memastikan data Pasien Ibu sudah ada di SATUSEHAT</em>)
      </td>
      <td>
        <ul>
          <li><strong><em>Search by</em></strong> <code>nomor IHS</code> atau</li>
          <li><strong><em>Search by</em> NIK</strong> untuk <strong>GET</strong> <code>nomor IHS</code></li>
          <li>Parameter yang didapatkan:
            <ul>
              <li><code>Nomor IHS</code></li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Langkah 1.a: <strong>POST</strong> <em>Create Patient record</em> dari Ibu ke APIGee
        (Jika <em>record</em> Ibu pasien tidak ditemukan)
      </td>
      <td>
        <ul>
          <li>Parameter ini diperlukan untuk <em>create patient record</em>:
            <ul>
              <li><code>NIK</code> sebagai <code>Identifier</code></li>
              <li><code>Nama</code></li>
              <li><code>Tanggal Lahir</code></li>
              <li><code>Tempat Lahir</code></li>
              <li><code>Jenis Kelamin</code></li>
              <li><code>Alamat</code></li>
              <li><code>Provinsi</code></li>
              <li><code>Kota</code></li>
              <li><code>Daerah</code></li>
              <li><code>Kecamatan</code></li>
            </ul>
          </li>
          <li>Data akan dikirimkan ke API MPI</li>
          <li>Periksa kesamaan NIK di MPI</li>
          <li>Jika tidak ditemukan maka:
            <ul>
              <li>Validasi NIK oleh pasien itu sendiri</li>
              <li>Validasi NIK akan dilakukan oleh pasien itu sendiri dengan data DUKCAPIL</li>
              <li>Jika NIK Valid (sesuai dengan data DUKCAPIL), maka <em>generate</em> <code>Nomor IHS</code> Baru
                <ul>
                  <li>Jika tidak, <em>return Error not Valid</em> DUKCAPIL ke APIGee</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><em>Return</em> <code>Nomor IHS</code> ke APIGee</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Step 2.a: <strong>POST</strong> Informasi Pasien Bayi Baru Lahir ke APIGee</td>
      <td>
        <ul>
          <li>Parameter ini diperlukan untuk membuat <em>record</em> pasien bayi baru lahir
            <ul>
              <li><code>NIK Ibu</code> sebagai <code>Identifier</code></li>
              <li><code>Nama</code></li>
              <li><code>Tanggal Lahir</code></li>
              <li><code>Tempat Lahir*</code></li>
              <li><code>Jenis Kelamin</code></li>
              <li><code>Urutan Kelahiran</code></li>
              <li><code>Alamat (gunakan Alamat Ibu)</code></li>
              <li><code>Provinsi</code></li>
              <li><code>Kota</code></li>
              <li><code>Daerah</code></li>
              <li><code>Kecamatan (Desa)</code></li>
              <li><code>Nomor KK (Opsional)</code></li>
            </ul>
          </li>
          <li>Mengirimkan Data ke MPI API</li>
          <li>Cek kesamaan pada NIK Ibu untuk duplikasi data berdasarkan parameter:
            <ul>
              <li><code>Nama</code></li>
              <li><code>Tanggal Lahir</code></li>
              <li><code>Jenis Kelamin</code></li>
              <li><code>Urutan Kelahiran</code></li>
            </ul>
          </li>
          <li>Jika tidak ditemukan duplikasi, maka: Buat <code>Nomor IHS</code> untuk Pasien Bayi Baru Lahir di MPI
            <ul>
              <li>Jika tidak, <em>return</em> <code>Nomor IHS</code> yang ada</li>
            </ul>
          </li>
          <li><em>Return</em> <code>Nomor IHS</code> ke APIGee</li>
          <li><strong>POST</strong> Data Pasien ke FHIR SATUSEHAT dari MPI</li>
          <li>Lanjutkan ke langkah 2.b untuk membuat <em>resources</em> <code>RelatedPerson</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Step 2.b: <strong>POST</strong> <em>Create record</em> <code>RelatedPerson</code> ke APIGee dan menghubungkan ke <em>record</em> Ibu dari Bayi Baru Lahir (saat ini dijalankan otomatis dari system)</td>
      <td>
        <ul>
          <li>Parameter ini diperlukan untuk membuat record <code>RelatedPerson</code>:
            <ul>
              <li><code>Nomor IHS Ibu</code></li>
              <li><code>Nomor IHS Pasien</code></li>
              <li><code>Relation Type: MTH</code></li>
              <li><code>Nama Ibu</code></li>
              <li><code>Tanggal Lahir Ibu</code></li>
              <li><code>Jenis Kelamin Ibu</code></li>
              <li><code>Alamat Ibu</code></li>
              <li><code>Nomor Telepon Ibu</code></li>
            </ul>
          </li>
          <li><code>POST</code> <code>RelatedPerson</code> <em>resource record</em> ke FHIR SATUSEHAT dari MPI API <em>service</em>
            <ul>
              <li><em>Generate</em> <code>RelatedPerson</code> ID</li>
            </ul>
          </li>
          <li><strong>PUT</strong> <em>record</em> <code>RelatedPerson</code> sebagai LINK ke <em>record</em> Ibu Pasien</li>
          <li><strong>SAVE</strong> <code>RelatedPerson</code> <em>resource record</em> ke MPI Database (MongoDB)</li>
          <li>Return Success to APIGee</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 3. Alur Mendapatkan Data

<table>
 
  <tbody>
    <tr>
      <td><strong>Options</strong></td>
      <td><strong>Approach</strong></td>
    </tr>
    <tr>
      <td>Option 1: Gunakan <code>Nomor IHS</code> Pasien ke SATUSEHAT.
        (Use Patient IHS Number to SATUSEHAT)
      </td>
      <td>
        <ul>
          <li>Jika <code>Nomor IHS</code> sudah benar, maka akan dikirimkan data Pasien.</li>
          <li>Informasi yang akan dikirim kembali ke APIGEE:
            <ul>
              <li><code>NIK</code></li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Option 2a: Gunakan NIK Pasien sebagai parameter <code>Identifier</code> untuk SATUSEHAT.</td>
      <td>
        <ul>
          <li>Memeriksa NIK</li>
          <li>Informasi yang akan dikirim kembali ke APIGEE:
            <ul>
              <li><code>IHS Number Pasien</code></li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Option 2b: Gunakan NIK Pasien sebagai parameter <code>Identifier</code> untuk SATUSEHAT.</td>
      <td>
        <ul>
          <li>Memeriksa NIK, Nama, dan Tanggal Lahir Pasien.</li>
          <li>Informasi yang akan dikirim kembali ke APIGEE:
            <ul>
              <li><code>Nama Pasien</code></li>
              <li><code>Tanggal Lahir Pasien</code></li>
              <li><code>Tempat Lahir Pasien</code></li>
              <li><code>Alamat Pasien</code></li>
              <li><code>Jenis Kelamin Pasien</code></li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Option 3a: Gunakan NIK Ibu untuk mendapatkan Data Pasien Bayi Baru Lahir.</td>
      <td>
        <ul>
          <li><strong>GET</strong> dengan menggunakan <code>identifier</code> system NIK Ibu.</li>
          <li>Jika ditemukan, maka mengembalikan parameter pasien:
            <ul>
              <li><code>Nomor IHS</code></li>
              <li><code>Nama</code></li>
              <li><code>Urutan Kelahiran</code></li>
            </ul>
          </li>
          <li>Jika kasus kelahiran kembar, <em>return</em> semua pasien yang menggunakan NIK Ibu.</li>
          <li>Fasyankes perlu memeriksa pasien mana (jika lebih dari satu) yang perlu dirujuk.</li>
          <li>Gunakan <code>nomor IHS</code> untuk mendapatkan Informasi Pasien.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Option 3b: Gunakan Informasi Ibu Pasien untuk mendapatkan informasi <code>RelatedPerson</code>.</td>
      <td>
        <ul>
          <li>Mendapatkan sumber Ibu pasien, dengan menggunakan metode ini:
            <ul>
              <li><code>Nomor IHS Ibu</code>, atau</li>
              <li><code>Kombinasi NIK Ibu</code>, <code>Nama</code>, dan <code>Tanggal Lahir</code></li>
            </ul>
          </li>
          <li>Memeriksa NIK Ibu, Nama, dan Tanggal Lahir.</li>
          <li><em>return</em> <code>nomor IHS</code> Pasien yang berasal dari <code>RelatedPersons</code> <em>record</em> dari informasi Ibu yang memiliki tipe relasi “MTH” atau “Ibu”.</li>
          <li>Informasi yang akan dikirim:
            <ul>
              <li><code>Nomor IHS Pasien</code></li>
              <li><code>Nama Pasien</code></li>
              <li><code>Urutan Kelahiran Pasien</code></li>
            </ul>
          </li>
          <li>Fasyankes perlu memeriksa pasien mana (jika lebih dari satu) yang perlu dirujuk.</li>
          <li>Gunakan <code>nomor IHS</code> untuk mendapatkan informasi Pasien.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<h2>4. Update/Merge Data</h2>
<p>Fasyankes dapat melakukan pemutakhiran data pasien baru dengan NIK di SATUSEHAT, jika kondisi ini terpenuhi:</p>
<ul>
  <li>Data pasien baru lahir <strong>WAJIB</strong> tidak divalidasi oleh DUKCAPIL</li>
</ul>
<p>Informasi pasien yang dapat diperbarui adalah:</p>
<ul>
  <li>NIK (identifier)</li>
  <li>Nama lengkap</li>
  <li>Tanggal lahir</li>
  <li>Tempat Lahir</li>
  <li>Jenis kelamin</li>
</ul>

<table>
  <tbody>
    <tr>
      <td><strong>Options</strong></td>
    </tr>
    <tr>
      <td><strong>Approach</strong></td>
    </tr>
    <tr>
      <td>Option 1: Memperbarui Informasi Pasien menggunakan <code>Nomor IHS</code> Pasien oleh petugas fasyankes.</td>
    </tr>
    <tr>
      <td>
        <ul>
          <li>Jika <code>Nomor IHS</code> sudah benar, maka akan mengembalikan data Pasien.</li>
          <li>Fasyankes dapat memperbarui data dengan menggunakan <strong>PUT</strong> <em>Resource Patient</em> ke Apigee.</li>
          <li>Data dikirimkan ke MPI API.</li>
          <li>Data Pasien sudah diperbarui.</li>
          <li>MPI <strong>PUT</strong> data pasien baru ke FHIR SATUSEHAT.
            <ul>
              <li>Jika terdapat Nomor NIK, tindak lanjut validasi oleh pasien itu sendiri dan ke DUKCAPIL.</li>
            </ul>
          </li>
          <li><em>Return Success</em> APIGee
            <ul>
              <li>Jika terdapat Nomor NIK, <em>Return Success</em> jika NIK sudah divalidasi oleh DUKCAPIL, selain itu <em>Return Error</em> NIK Not Valid DUKCAPIL.</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Option 2: Menggabungkan data pasien jika fasyankes mendaftarkannya sebagai pasien baru.</td>
    </tr>
    <tr>
      <td>
        <ul>
          <li>Data Pasien Baru perlu divalidasi dengan DUKCAPIL:
            <ul>
              <li><code>NIK</code></li>
              <li><code>Nama Lengkap</code></li>
              <li><code>Tanggal Lahir</code></li>
              <li><code>Jenis Kelamin</code></li>
            </ul>
          </li>
          <li>Data Pasien Baru akan digabungkan berdasarkan parameter pencarian ini:
            <ul>
              <li><code>NIK Ibu</code></li>
              <li><code>Nama Lengkap Ibu</code></li>
              <li><code>Nomor KK [Opsional]</code></li>
            </ul>
          </li>
          <li>Jika ada kecocokan, data Pasien Baru akan diperbarui ke data Pasien Bayi Baru Lahir.
            <ul>
              <li><code>NIK</code> (<code>Identifier</code>)</li>
              <li><code>Nama Lengkap</code></li>
              <li><code>Tanggal Lahir</code></li>
              <li><code>Tempat Lahir</code></li>
              <li><code>Jenis Kelamin</code></li>
            </ul>
          </li>
          <li>Data akan digabungkan dalam MPI dan akan menghasilkan Parameter "Link" yang menghubungkan <code>Nomor IHS</code> Bayi Baru Lahir ke <code>Nomor IHS</code> Pasien Baru Terdaftar.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 5. Proses Verifikasi

Ada beberapa data NIK yang perlu diverifikasi oleh DUKCAPIL sebagai single source of truth (SSOT)

<table>
  <caption>Tabel 1. NIK yang diverifikasi oleh DUKCAPIL</caption>
  
  <tbody>
    <tr>
      <td><strong>Options</strong></td>
      <td><strong>Process</strong></td>
    </tr>
    <tr>
      <td>Option 1: NIK Pasien.</td>
      <td>
        <ul>
          <li>Setiap data Pasien Baru dibuat atau informasi NIK Baru diperbarui.</li>
          <li>Data yang akan dikirim untuk verifikasi:
            <ul>
              <li><code>NIK</code></li>
              <li><code>Nama Lengkap</code></li>
              <li><code>Tanggal Lahir</code></li>
              <li><code>Jenis Kelamin</code></li>
            </ul>
          </li>
          <li>Data Pasien akan diverifikasi ke DUKCAPIL.</li>
          <li>Jika data record pasien telah terverifikasi maka data tersebut akan diperlakukan sebagai "Golden Record".</li>
          <li>Setiap data pasien yang terhubung yang dibuat menggunakan <code>Identifier</code> lain akan dirujuk ke “Golden Record”.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Option 2: NIK Ibu dari Pasien Bayi Baru Lahir.</td>
      <td>
        <ul>
          <li>Saat NIK Ibu dimasukkan sebagai parameter untuk Bayi Baru Lahir.</li>
          <li>NIK Ibu akan diperiksa ke data MPI jika sudah ada data pasien tersebut disana.</li>
          <li>Jika tidak ada kecocokan pada NIK pasien, maka perlu dikirim ke DUKCAPIL untuk diverifikasi.</li>
          <li>Data yang akan dikirim untuk diverifikasi:
            <ul>
              <li><code>NIK Ibu</code></li>
              <li><code>Nama Ibu</code></li>
            </ul>
          </li>
          <li>Jika NIK dan nama tidak cocok, NIK Ibu tidak dapat digunakan.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
