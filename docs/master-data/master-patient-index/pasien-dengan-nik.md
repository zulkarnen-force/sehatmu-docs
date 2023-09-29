---
sidebar_position: 2
---

import Alert from '@site/src/components/Alert';

# Pasien dengan NIK

## 1. Ruang Lingkup

**Pasien dengan NIK** akan memiliki proses sebagai berikut:

- Create Patient Data.
- Get Patient Data.

### 1.1. Persyaratan Data Minimum

Berikut ini persyaratan data minimum untuk pasien baru dengan NIK:
<Alert type="error">Setiap terdapat simbol asterik <code>*</code> sebelum nama variabel atau parameter yang disebutkan, maka variabel atau parameter tersebut bersifat <strong>WAJIB</strong>, <strong>harus ada</strong>, atau <strong>pasti selalu ada</strong>, contoh: <code>*variabel</code> .</Alert>

Tabel 1. Persyaratan data minimum pasien baru dengan NIK:

| Data Point           | Keterangan                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| \*identifier         | Identitas yang digunakan oleh Pasien, saat ini Identitas yang dapat digunakan yaitu: NIK (`nik`) |
| \*name               | Nama lengkap pasien sesuai KTP/NIK yang diberikan di fasyankes.                                  |
| \*birthDate          | Tanggal Lahir dari Pasien sesuai KTP/NIKi. dengan format: `YYYY-MM-DD`                           |
| birthPlace           | Digunakan untuk menyimpan informasi Tempat lahir dari Pasien, sesuai standar penulisan NIK/KTP   |
| \*gender             | Jenis Kelamin dari Pasien, terdiri dari `male`, dan `female`                                     |
| Nomor Kartu Keluarga | Nomor administrasi keluarga yang diterbitkan DUKCAPIL                                            |
| \*address            | Alamat pasien sesuai dengan KTP/NIK, informasi alamat terdiri dari komponen:                     |

- `use` - peruntukan alamat dalam hal ini menggunakan rumah atau `home`
- `line` - alamat lengkap sesuai KTP/NIK
- `city` - nama kota
- `postalCode` - kode pos
- `country` - negara, dalam hal ini menggunakan `ID`
- `extension` - penerapan kode administratif wilayah |
  | \*address-extension | Digunakan untuk memuat informasi kode administratif wilayah dari alamat pasien sesuai NIK/KTP, yang terdiri dari:
- `province` - Kode Provinsi
- `city` - Kode Kab/Kota
- `district` - Kode Kecamatan
- `village` - Kode Desa/Kelurahan
- `rt` - Nomor RT
- `rw` - Nomor RW
  Kode administratif mengacu ke kode wilayah kemendagri. Daftar kode wilayah terbaru dapat didapatkan di tautan berikut [Kode Wilayah KEMENDAGRI](https://docs.google.com/spreadsheets/d/13F87ScHgEikqYgv65ZAU1vsRLmXNFo1i/edit?usp=sharing&ouid=116173098464208547917&rtpof=true&sd=true) |
  | telecom | Digunakan untuk menyimpan informasi kontak pasien yang dapat dihubungi seperti telepon atau e-mail |
  | maritalStatus | Digunakan untuk menyimpan informasi status pernikahan dari Pasien, seperti:
- `S` - Never Married
- `M` - Married
- `W` - Widowed
- `D` - Divorced |
  | citizenshipStatus | Digunakan untuk menyimpan informasi status kewarganegaraan, dalam hal ini `WNI` atau `WNA` |

<Alert type="warning">Setiap data harus unik / TIDAK BOLEH terdapat duplikasi</Alert>

## 2. Alur Pembuatan Data

Untuk membuat data pasien baru dengan NIK di SATUSEHAT, silahkan ikut langkah-langkah berikut:

Tabel 1. Alur pembuatan data (NIK):

| Langkah                                                                                                | Approach                   |
| ------------------------------------------------------------------------------------------------------ | -------------------------- |
| Langkah 1: GET Patient Record dari Pasien berdasarkan NIK (Pastikan data pasien ada di FHIR SATUSEHAT) | Search by `nomor IHS` atau |

Search by NIK untuk `GET` `nomor IHS`
Parameter yang didapatkan:

- `Nomor IHS` |
  | Langkah 1: POST Create Patient record dari Pasien yang memiliki NIK ke APIGee | Parameter ini diperlukan untuk create patient record:
- `NIK` sebagai `Identifier`
- `Nama`
- `Tanggal Lahir`
- `Tempat Lahir`
- `Jenis Kelamin`
- `Alamat`
- `Provinsi`
- `Kota`
- `Daerah`
- `Kecamatan`
  Data akan dikirimkan ke API MPI
  Periksa kesamaan NIK di MPI
  Jika tidak ditemukan maka:
  - Validasi NIK oleh pasien itu sendiri
  - Validasi NIK akan dilakukan oleh pasien itu sendiri dengan data DUKCAPIL
  - Jika NIK Valid (sesuai dengan data DUKCAPIL), maka generate `Nomor IHS` Baru
  - Jika tidak, return Error not Valid DUKCAPIL ke APIGee
    Return `Nomor IHS` ke APIGee |

## 3. Alur Mendapatkan Data

Fasyankes dapat memperoleh data pasien baru dengan NIK di SATUSEHAT, dengan menggunakan opsi berikut:

Tabel 1. Alur mendapatkan data:

| Options                                                                                  | Approach                                                        |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Option 1: Gunakan `Nomor IHS` Pasien ke SATUSEHAT. (Use Patient IHS Number to SATUSEHAT) | Jika `Nomor IHS` sudah benar, maka akan dikirimkan data Pasien. |

Informasi yang akan dikirim kembali ke APIGEE:

- `NIK` |
  | Option 2a: Gunakan NIK Pasien sebagai parameter `Identifier` untuk SATUSEHAT. | Memeriksa NIK
  Informasi yang akan dikirim kembali ke APIGEE:
- `IHS Number Pasien` |
  | Option 2b: Gunakan NIK Pasien sebagai parameter `Identifier` untuk SATUSEHAT dan informasi sesuai KTP/NIK. | Memeriksa NIK, Nama, dan Tanggal Lahir Pasien.
  Informasi yang akan dikirim kembali ke APIGEE:
- `Nama Pasien`
- `Tanggal Lahir Pasien`
- `Tempat Lahir Pasien`
- `Alamat Pasien`
- `Jenis Kelamin Pasien` |

## 4. Proses Verifikasi

Ada beberapa data NIK yang perlu diverifikasi oleh DUKCAPIL sebagai single source of truth (SSOT)

Tabel 1. NIK yang diverifikasi oleh DUKCAPIL:

| Options      | Process                                                            |
| ------------ | ------------------------------------------------------------------ |
| `NIK Pasien` | Setiap data Pasien Baru dibuat atau informasi NIK Baru diperbarui. |

Data yang akan dikirim untuk verifikasi:

- `NIK`
- `Nama Lengkap`
- `Tanggal Lahir`
- `Jenis Kelamin`
  Data Pasien akan diverifikasi ke DUKCAPIL.
  Jika data record pasien telah terverifikasi maka data tersebut akan diperlakukan sebagai "Golden Record".
  Setiap data pasien yang terhubung yang dibuat menggunakan `Identifier` lain akan dirujuk ke “Golden Record”. |

<Alert type="warning">
Untuk Identifier lain, tidak akan ada proses verifikasi, dan akan menggunakan proses penggabungan untuk menautkan lebih dari satu profil pasien yang cocok.</Alert>
