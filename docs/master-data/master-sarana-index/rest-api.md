---
sidebar_position: 2
---

import Alert from '@site/src/components/Alert';

# ReST API

## 1. Autentikasi

Untuk melakukan transaksi data dari Master Sarana Index (MSI), perlu dilakukan proses autentikasi terlebih dahulu agar mendapatkan akses yang tersedia. Autentikasi yang digunakan oleh MSI mengikuti standar protokol OAuth 2 dengan tipe pemberian akses (grant type) adalah client_credentials.

Autentikasi menggunakan grant type client_credentials adalah proses autentikasi yang dilakukan antara server to server, sehingga tidak ada proses registrasi atau log in di sini. Autentikasi dengan tipe tersebut hanya memerlukan data berupa client_id dan client_server, dimana nilai tersebut didapatkan ketika pihak yang ingin menggunakan atau mengakses MSI ini telah melakukan pengajuan, terdaftar, serta mendapatkan persetujuan dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia.

## 2. Postman Collection

Silakan mengunduh Postman Collection untuk melihat contoh/melakukan workshop secara mandiri pada website Postman Collection MSI melalui web browser Anda.

## 3. Akses Token

### Mendapatkan Token

Melakukan proses autentikasi untuk mendapatkan akses token yang akan dipakai pada setiap request ReST API SATUSEHAT selanjutnya.

#### Request

#### URL

```
https://api-satusehat-dev.dto.kemkes.go.id/oauth2/v1/accesstoken
```

#### HTTP Verb/Method

```
POST
```

#### Header

| Nama Parameter  | Tipe Data | Keterangan                                                                                                                                          |
| --------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `*Content-Type` | `string`  | Mime type dari payload data yang akan dikirimkan di dalam body dalam bentuk URL Encoded, **WAJIB** diisi dengan `application/x-www-form-urlencoded` |

### Query String

<table>
 
  <thead>
    <tr>
      <th>Nama Parameter</th>
      <th>Tipe Data</th>
      <th>Keterangan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*grant_type</code></td>
      <td><code>string</code></td>
      <td>
        <p>Tipe permintaan akses (<em>grant</em>) Oauth2, <strong>WAJIB</strong> diisi dengan <code>client_credentials</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

### Body (application/x-www-form-urlencoded)

<table>
 
  <thead>
    <tr>
      <th>Nama Parameter</th>
      <th>Tipe Data</th>
      <th>Keterangan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*client_id</code></td>
      <td><code>string</code></td>
      <td>
        <p>Nilai <em>client ID</em> yang telah didapatkan dari <strong>Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia</strong> setelah melakukan pengajuan via <em>email</em>, <strong>WAJIB</strong> diisi. Nilai ini bisa disamakan seperti <em>username</em> yang akan digunakan untuk akses aplikasi.</p>
      </td>
    </tr>
    <tr>
      <td><code>*client_secret</code></td>
      <td><code>string</code></td>
      <td>
        <p>Nilai <em>client secret</em> yang telah didapatkan dari <strong>Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia</strong> setelah melakukan pengajuan via <em>email</em>, <strong>WAJIB</strong> diisi. Nilai ini bisa disamakan seperti kata sandi (<em>password</em>) yang akan digunakan untuk akses aplikasi.</p>
      </td>
    </tr>
  </tbody>
</table>

### Contoh Data

```json
client_id: oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF
client_secret: tFb3el8LGjW08mWcGLyBDdiJp1hwymrAb9qrmhapuV7WcDhVq2u9n9diBVGfMRfD
```

### Response

Hasil response, dengan HTTP Status Code berpola 2xx atau 4xx, yang dikembalikan dari server mempunyai parameter Content-Type dengan nilai application/json di salah satu parameter header-nya.

### 2xx Success

Dari hasil response ini, PERLU disimpan nilai akses token yang didapat dari properti access_token, dimana tipe token (lihat properti token_type) tersebut adalah BearerToken. Nilai akses token tersebut WAJIB selalu digunakan sebagai nilai dari header Authorization: Bearer <access_token> saat melakukan request lainnya dari ReST API SATUSEHAT.

```json
{
  "refresh_token_expires_in": "0",
  "api_product_list": "[api-satusehat-stg, api-dev, pl-api-satusehat-stg, pl-api-dev]",
  "api_product_list_json": [
    "api-satusehat-stg",
    "api-dev",
    "pl-api-satusehat-stg",
    "pl-api-dev"
  ],
  "organization_name": "ihs-prod-1",
  "developer.email": "ihs.developer@dto.kemkes.go.id",
  "token_type": "BearerToken",
  "issued_at": "1671109805593",
  "client_id": "oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF",
  "access_token": "k8JIDROZHfXjmUcQJE62lMqQwlLU",
  "application_name": "992291b8-a613-40aa-b27c-41e480c7585f",
  "scope": "",
  "expires_in": "3599",
  "refresh_count": "0",
  "status": "approved"
}
```

### 4xx Client Error

Sistem akan mengembalikan pesan error bila client belum melakukan autentikasi, tidak memiliki akses, menggunakan HTTP method yang tidak tepat, atau mengirimkan data dengan format atau ketentuan yang tidak sesuai.

### Contoh Data

```json
{
  "resourceType": "OperationOutcome",
  "issue": [
    {
      "severity": "invalid",
      "code": "value",
      "details": {
        "text": "The user or system was not able to be authenticated (either client_id or client_secret combination is unacceptable)"
      }
    }
  ]
}
```

### 5xx Server Error (Content-Type: text/plain)

Sistem akan mengembalikan pesan error bila terjadi kesalahan pada sisi server saat memproses data yang telah dikirimkan.

### Contoh Data

```
Gateway Timeout
```

### Contoh Pengunaan

Setiap nilai yang dicontohkan atau ditampilkan di dokumentasi ini adalah nilai yang tidak sebenarnya dan tidak dapat dipakai. Nilai-nilai tersebut hanya untuk keperluan contoh saja, tidak untuk dipakai.

### cURL (Windows)

```curl
--insecure --location \
 --header "Content-Type: application/x-www-form-urlencoded" ^
--data-urlencode "client_id=oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF" ^
--data-urlencode "client_secret=tFb3el8LGjW08mWcGLyBDdiJp1hwymrAb9qrmhapuV7WcDhVq2u9n9diBVGfMRfD" ^
--request POST ^
"https://api-satusehat-dev.dto.kemkes.go.id/oauth2/v1/accesstoken?grant_type=client_credentials"
```

### cURL (Linux)

```curl
--insecure --location \
 --header 'Content-Type: application/x-www-form-urlencoded' \
 --data-urlencode 'client_id=oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF' \
 --data-urlencode 'client_secret=tFb3el8LGjW08mWcGLyBDdiJp1hwymrAb9qrmhapuV7WcDhVq2u9n9diBVGfMRfD' \
 --request POST \
 'https://api-satusehat-dev.dto.kemkes.go.id/oauth2/v1/accesstoken?grant_type=client_credentials'
```

### Postman

1. Buat _request_ baru menggunakan `New > HTTP Request`, atau klik `+` untuk buat tab _request_ baru.

2. Masukan _request_ URL:

```
https://api-satusehat-dev.dto.kemkes.go.id/oauth2/v1/accesstoken
```

3. Lalu pilih _request method_ `POST`.

4. Pada tab **Params**, di bagian **Query Params**:

a. masukan nilai `grant_type` pada kotak masukan pada kolom **KEY**,

b. lalu masukan nilai `client_credentials` pada kotak masukan pada kolom **VALUE**.

5. Pada tab **Body**:

a. pilih **x-www-form-urlencoded**,

b. masukan nilai `client_id` pada kotak masukan pada kolom **KEY**,

c. lalu masukan nilai _client ID_ yang sudah didapatkan dari **Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia** pada kotak masukan pada kolom **VALUE**,

d. selanjutnya masukan nilai `client_secret` pada kotak masukan pada kolom **KEY**,

e. terakhir masukan nilai _client secret_ yang sudah didapatkan dari **Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia** pada kotak masukan pada kolom **VALUE**.

6. Klik tombol `Send`.

7. Hasil _response_ akan ditampilkan di bagian **Response**.

## 4. API Master Sarana Index

### 4.1. Master Sarana Index - Multi Sarana

<Alert type="success">Master Sarana Index - Multi Sarana digunakan apabila ingin menampilkan data `jenis_sarana` lebih dari satu.</Alert>

### Request

### URL

```
https://api-satusehat.kemkes.go.id/masterdata/v1/mastersaranaindex/mastersarana
```

### HTTP Verb/Method

```
GET
```

### Header

| Nama Parameter  | Tipe Data | Keterangan                                                                                                                                          |
| --------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `*Content-Type` | `string`  | Mime type dari payload data yang akan dikirimkan di dalam body dalam bentuk URL Encoded, **WAJIB** diisi dengan `application/x-www-form-urlencoded` |

### Query String

| Nama Parameter           | Tipe Data | Keterangan                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `*limit`                 | `number`  | Isi dengan nomor banyaknya barisan dalam 1 halaman (page) yang diinginkan. Contoh: `1`.                                                                                                                                                                                                                                                                                                                                                 |
| `*page`                  | `number`  | Isi dengan nomor halaman (page) yang diinginkan. Contoh: `10`.                                                                                                                                                                                                                                                                                                                                                                          |
| `*jenis_sarana`          | `number`  | Jika parameter `jenis_sarana` ingin di-input multi maka tambahkan key `jenis_sarana` sesuai kebutuhan. Isi dengan kode jenis sarana. Kode unik yang ditetapkan untuk menentukan sarana fasyankes. Contoh: `104` dan `103`.                                                                                                                                                                                                              |
| `kode_satusehat`         | `number`  | Isi dengan nomor kode satusehat (10 digit). Contoh: `1000201991`.                                                                                                                                                                                                                                                                                                                                                                       |
| `kode_sarana`            | `string`  | Isi dengan nomor kode FASYANKES dari sumber data utama. Contoh: `1235959`.                                                                                                                                                                                                                                                                                                                                                              |
| `nama`                   | `string`  | Isi dengan nama FASYANKES. Contoh: `pratama`.                                                                                                                                                                                                                                                                                                                                                                                           |
| `kode_provinsi`          | `string`  | Isi dengan nomor kode dagri provinsi (2 digit). Contoh: `35`.                                                                                                                                                                                                                                                                                                                                                                           |
| `kode_kabkota`           | `string`  | Isi dengan nomor kode dagri kabupaten/kota (4 digit). Contoh: `3603`.                                                                                                                                                                                                                                                                                                                                                                   |
| `kode_kecamatan`         | `string`  | Isi dengan nomor kode dagri kecamatan (6 digit). Contoh: `350105`.                                                                                                                                                                                                                                                                                                                                                                      |
| `status_aktif`           | `string`  | Isi dengan status aktif dari jenis sarana FASYANKES `true` atau `false`. Contoh: `true`.                                                                                                                                                                                                                                                                                                                                                |
| `status_sarana`          | `string`  | Isi dengan status verifikasi sarana (`draft`, `verified`, `valid`, `reverified`). Contoh: `verified`.                                                                                                                                                                                                                                                                                                                                   |
| `sumber_identifier`      | `string`  | Untuk mengisi identifier, pilih sumber data yang diinginkan: `satset`, `dto_msfi`, `yankes_praktik_mandiri`, `yankes_klinik`, `yankes_rs`, `puskesmas_pusdatin_baru`, `puskesmas_pusdatin_lama`, `sisdmk_sarana`, `yankes_praktik_mandiri_kmk`, `yankes_klinik_kmk`, `yankes_utd`, `yankes_utd_kmk`, `yankes_labkes`, atau `yankes_labkes_kmk`. Misal, pilih sumber data dari SISDMK, gunakan kode identifier. Contoh: `sisdmk_sarana`. |
| `identifier_kode_sarana` | `string`  | Untuk mengisi kode identifier sarana, masukkan kode sarana pada sumber. Misal, kode sarana di sistem SISDMK, maka Contoh: `R3508055`.                                                                                                                                                                                                                                                                                                   |
| `lower_bound_updated_at` | `string`  | Isi seperti `update_date` from. Contoh: `2023-08-15`.                                                                                                                                                                                                                                                                                                                                                                                   |
| `upper_bound_updated_at` | `string`  | Isi seperti `update_date` to. Contoh: `2023-08-15`.                                                                                                                                                                                                                                                                                                                                                                                     |

### Response

Hasil response, dengan HTTP Status Code berpola 2xx atau 4xx, yang dikembalikan dari server mempunyai parameter Content-Type dengan nilai application/json di salah satu parameter header-nya.

#### 2xx Success

Struktur Data

```go
DATA STRUCTURE:
{ (1)
  *status_code: integer (2)
  *message: string (3)
  *page: integer (4)
  *total_page: integer (5)
  *data: [{ (6)
    *kode_satusehat: string (7)
    *kode_sarana: string (8)
    *nama: string (9)
    *telp: string (10)
    *email: string (11)
    *website: string (12)
    *longitude: string (13)
    *latitude: string (14)
    *operasional: boolean (15)
    *wilayah_perairan_darat: string (16)
    *wilayah_karakteristik: string (17)
    *sarana_administrasi: { (18)
      *kode: string (19)
      *nama: string (20)
      *kode_sarana: string (21)
      *status_aktif: boolean (22)
      *status_sarana: string (23)
    }
    *alamat: string (24)
    *provinsi: { (25)
      *kode: number (26)
      *nama: string (27)
      *kode_bps: string (28)
      *kode_lama: string (29)
    }
    *kabkota: { (30)
      *kode: number (31)
      *nama: string (32)
      *kode_bps: string (33)
      *kode_lama: string (34)
    }
    *jenis_sarana: { (35)
      *kode: string (36)
      *nama: string (37)
      *nama_alt: string (38)
    }
    *subjenis: { (39)
      *kode: string (40)
      *nama: string (41)
      *nama_alt: string (42)
    }
    *kelas_sarana: { (43)
      *kode: string (44)
      *nama: string (45)
    }
    *status_sarana: string (46)
    *status_aktif: boolean (47)
  }]
}
```

|     | Respon yang diterima berupa `object`.                                                                                                                                                   |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Properti `status_code` bertipe `integer`, berisi informasi kode hasil respon yang diterima.                                                                                             |
| 2   | Properti `message` bertipe `string`, berisi informasi hasil dari respon yang diterima.                                                                                                  |
| 3   | Properti `page` bertipe `integer`, berisi berapa baris halaman yang ingin ditampilkan.                                                                                                  |
| 4   | Properti `total_page` bertipe `integer`, total dari hasil pencarian.                                                                                                                    |
| 5   | Properti `data` bertipe `array of objects`, bila kosong akan mengembalikan array kosong. Setiap object item berisi data FASYANKES (Rumah Sakit, Klinik, Puskesmas, Praktek Mandiri).    |
| 6   | Properti `kode_satusehat` bertipe `string`, berisi informasi kode satu sehat (10 digit).                                                                                                |
| 7   | Properti `kode_sarana` bertipe `string`, berisi informasi kode FASYANKES.                                                                                                               |
| 8   | Properti `nama` bertipe `string`, berisi informasi nama FASYANKES.                                                                                                                      |
| 9   | Properti `telp` bertipe `string`, berisi informasi nomor telepon FASYANKES.                                                                                                             |
| 10  | Properti `email` bertipe `string`, berisi informasi alamat _email_ FASYANKES.                                                                                                           |
| 11  | Properti `website` bertipe `string`, berisi informasi _website_ FASYANKES.                                                                                                              |
| 12  | Properti `longtitude` bertipe `string`, garis bujur contoh : 106.821810.                                                                                                                |
| 13  | Properti `latitude` bertipe `string`, garis lintang contoh : -6.193125.                                                                                                                 |
| 14  | Properti `operasional` bertipe `boolean`, mengindikasikan apakah ada sarana FASYANKES beroperasi (_true_) atau tidak (_false_).                                                         |
| 15  | Properti `wilayah_perairan_darat` bertipe `string`, wilayah perairan darat.                                                                                                             |
| 16  | Properti `wilayah_karakteristik` bertipe `string`, wilayah karakteristik.                                                                                                               |
| 17  | Properti `sarana_administrasi` bertipe `object`, data sarana administrasi.                                                                                                              |
| 18  | Properti `kode` bertipe `string`, kode satusehat (10 digit) dari FASYANKES yang dinyatakan sebagai induk untuk administratif.                                                           |
| 19  | Properti `nama` bertipe `string`, nama FASYANKES yang dinyatakan sebagai induk untuk administratif.                                                                                     |
| 20  | Properti `kode_sarana` bertipe `string`, kode FASYANKES dari sumber data utama yang dinyatakan sebagai induk untuk administratif.                                                       |
| 21  | Properti `status_aktif` bertipe `string`, status keaktifan dari FASYANKES (_true_) atau tidak (_false_).                                                                                |
| 22  | Properti `status_sarana` bertipe `string`, status administrasi dari FASYANKES yang dinyatakan sebagai induk untuk administratif yang diisi _draft_, _review_, _verified_, atau _valid_. |
| 23  | Properti `alamat` bertipe `string`, berisi informasi alamat FASYANKES.                                                                                                                  |
| 24  | Properti `provinsi` bertipe `object`, berisi data letak provinsi FASYANKES.                                                                                                             |
| 25  | Properti `kode` bertipe `string`, berisi informasi kode dagri provinsi FASYANKES.                                                                                                       |
| 26  | Properti `nama` bertipe `string`, berisi informasi nama provinsi FASYANKES.                                                                                                             |
| 27  | Properti `kode_bps` bertipe `string`, kode BPS provinsi FASYANKES.                                                                                                                      |
| 28  | Properti `kode_lama` bertipe `string`, kode dagri provinsi yang lama (sebelum pemekaran) FASYANKES.                                                                                     |
| 29  | Properti `kabkota` bertipe `object`, berisi data letak kabupaten/kota sarana.                                                                                                           |
| 30  | Properti `kode` bertipe `string`, berisi informasi kode dagri kabupaten/kota.                                                                                                           |
| 31  | Properti `nama` bertipe `string` berisi informasi nama kabupaten/kota.                                                                                                                  |
| 32  | Properti `kode_bps` bertipe `string`, kode BPS kabupaten kota FASYANKES.                                                                                                                |
| 33  | Properti `kode_lama` bertipe `string`, kode dagri kabupaten kota yang lama (sebelum pemekaran) FASYANKES.                                                                               |
| 34  | Properti `jenis_sarana` bertipe `object`, berisi data jenis sarana.                                                                                                                     |
| 35  | Properti `kode` bertipe `string`, berisi informasi id jenis sarana.                                                                                                                     |
| 36  | Properti `nama` bertipe `string` berisi informasi deskripsi atau nama dari jenis sarana.                                                                                                |
| 37  | Properti `nama_alt` bertipe `string` berisi informasi nama alternatif dari jenis sarana.                                                                                                |
| 38  | Properti `subjenis` bertipe `object`, berisi data sub-jenis sarana.                                                                                                                     |
| 39  | Properti `kode` bertipe `string`, berisi informasi id sub-jenis sarana.                                                                                                                 |
| 40  | Properti `nama` bertipe `string`, berisi informasi deskripsi atau nama dari jenis sarana.                                                                                               |
| 41  | Properti `nama_alt` bertipe `string`, berisi informasi nama alternatif dari jenis sarana.                                                                                               |
| 42  | Properti `kelas_sarana` bertipe `object`, berisi data dari kelas sarana.                                                                                                                |
| 43  | Properti `kode` bertipe `string`, berisi informasi id kelas sarana.                                                                                                                     |
| 44  | Properti `nama` bertipe `string`, berisi informasi deskripsi atau nama dari kelas sarana.                                                                                               |
| 45  | Properti `status_sarana` bertipe `string`, berisi informasi status administrasi dari FASYANKES yang diisi _draft_, _review_, _verified_, atau _valid_.                                  |
| 46  | Properti `status_aktif` bertipe `boolean`, berisi informasi dari status keaktifan sarana FASYANKES (_true_) atau tidak (_false_).                                                       |

#### Contoh Data

```json
{
  "status_code": 200,
  "message": "Success",
  "page": 1,
  "total_page": 1849,
  "data": [
    {
      "kode_satusehat": "1000156689",
      "kode_sarana": "1230458",
      "nama": "Klinik TelkoMedika Health Center 19 Bogor",
      "telp": "082128617274_",
      "email": "thc19bogor.telkomedika@gmail.com",
      "website": null,
      "longitude": null,
      "latitude": null,
      "operasional": true,
      "wilayah_perairan_darat": null,
      "wilayah_karakteristik": null,
      "sarana_administrasi": {
        "kode": null,
        "nama": null,
        "kode_sarana": null,
        "status_aktif": null,
        "status_sarana": null
      },
      "alamat": "Jl. Pengadilan No. 14, RT. 02/ RW. 01, Kelurahan Pabaton, Kecamatan Bogor Tengah, Kota Bogor",
      "provinsi": {
        "kode": "32",
        "nama": "Jawa Barat",
        "kode_bps": "32",
        "kode_lama": "32"
      },
      "kabkota": {
        "kode": "3271",
        "nama": "Kota Bogor",
        "kode_bps": "3271",
        "kode_lama": "3271"
      },
      "jenis_sarana": {
        "kode": "103",
        "nama": "Klinik",
        "nama_alt": "Klinik"
      },
      "subjenis": {
        "kode": "10301",
        "nama": "Klinik Pratama",
        "nama_alt": null
      },
      "kelas_sarana": {
        "kode": null,
        "nama": null
      },
      "status_sarana": "valid",
      "status_aktif": true
    },
    /* lompat beberapa data */
    {
      "kode_satusehat": "1000208262",
      "kode_sarana": "1232475",
      "nama": "Satria Namira Husada 49",
      "telp": "0811324033___",
      "email": "klinikbpjs49@gmail.com",
      "website": null,
      "longitude": null,
      "latitude": null,
      "operasional": true,
      "wilayah_perairan_darat": null,
      "wilayah_karakteristik": null,
      "sarana_administrasi": {
        "kode": null,
        "nama": null,
        "kode_sarana": null,
        "status_aktif": null,
        "status_sarana": null
      },
      "alamat": "Jl. Raya Buduran No 337 Buduran Sidoarjo",
      "provinsi": {
        "kode": "35",
        "nama": "Jawa Timur",
        "kode_bps": "35",
        "kode_lama": "35"
      },
      "kabkota": {
        "kode": "3515",
        "nama": "Kab. Sidoarjo",
        "kode_bps": "3515",
        "kode_lama": "3515"
      },
      "jenis_sarana": {
        "kode": "103",
        "nama": "Klinik",
        "nama_alt": "Klinik"
      },
      "subjenis": {
        "kode": "10301",
        "nama": "Klinik Pratama",
        "nama_alt": null
      },
      "kelas_sarana": {
        "kode": null,
        "nama": null
      },
      "status_sarana": "valid",
      "status_aktif": true
    },
    {
      "kode_satusehat": "1000262775",
      "kode_sarana": "3275070",
      "nama": "RS umum Daerah Teluk Pucung",
      "telp": null,
      "email": null,
      "website": null,
      "longitude": null,
      "latitude": null,
      "operasional": true,
      "wilayah_perairan_darat": null,
      "wilayah_karakteristik": null,
      "sarana_administrasi": {
        "kode": null,
        "nama": null,
        "kode_sarana": null,
        "status_aktif": null,
        "status_sarana": null
      },
      "alamat": "Jl. Lingkar Utara Kel. Teluk Pucung Kec. Bekasi Utara",
      "provinsi": {
        "kode": "32",
        "nama": "Jawa Barat",
        "kode_bps": "32",
        "kode_lama": "32"
      },
      "kabkota": {
        "kode": "3275",
        "nama": "Kota Bekasi",
        "kode_bps": "3275",
        "kode_lama": "3275"
      },
      "jenis_sarana": {
        "kode": "104",
        "nama": "Rumah Sakit",
        "nama_alt": "RS"
      },
      "subjenis": {
        "kode": "10401",
        "nama": "Rumah Sakit Umum",
        "nama_alt": "RSU"
      },
      "kelas_sarana": {
        "kode": "nakes",
        "nama": "Pendidikan & Pelatihan Tenaga Kesehatan"
      },
      "status_sarana": "valid",
      "status_aktif": true
    },
    /* lompat beberapa data */
    {
      "kode_satusehat": "1000260600",
      "kode_sarana": "9110011",
      "nama": "RS Umum Pratama Type D Kab. Maybrat",
      "telp": "085244394272_",
      "email": null,
      "website": null,
      "longitude": null,
      "latitude": null,
      "operasional": true,
      "wilayah_perairan_darat": null,
      "wilayah_karakteristik": null,
      "sarana_administrasi": {
        "kode": null,
        "nama": null,
        "kode_sarana": null,
        "status_aktif": null,
        "status_sarana": null
      },
      "alamat": "Jl. Susumuk-Kumurkek Sonere Aifat Maybrat Papua Barat",
      "provinsi": {
        "kode": "96",
        "nama": "Papua Barat Daya",
        "kode_bps": null,
        "kode_lama": "96"
      },
      "kabkota": {
        "kode": "9605",
        "nama": "Kab. Maybrat",
        "kode_bps": "9110",
        "kode_lama": "9210"
      },
      "jenis_sarana": {
        "kode": "104",
        "nama": "Rumah Sakit",
        "nama_alt": "RS"
      },
      "subjenis": {
        "kode": "10401",
        "nama": "Rumah Sakit Umum",
        "nama_alt": "RSU"
      },
      "kelas_sarana": {
        "kode": "other",
        "nama": "Sarana Kesehatan Lainnya"
      },
      "status_sarana": "valid",
      "status_aktif": true
    }
  ]
}
```

### 4xx Client Error

Sistem akan mengembalikan pesan error bila client belum melakukan autentikasi, tidak memiliki akses, menggunakan HTTP method yang tidak tepat, atau mengirimkan data dengan format atau ketentuan yang tidak sesuai.

#### Contoh Data

```json
{
  "status_code": 400,
  "message": "limit cannot be more than 2000",
  "data": null
}
```

### 5xx Server Error (Content-Type: text/plain)

Sistem akan mengembalikan pesan error bila terjadi kesalahan pada sisi server saat memproses data yang telah dikirimkan.

#### Contoh Data

```
Gateway Timeout
```

### Contoh Pengunaan

### cURL (Windows)

```curl
--location ^
  --header "Authorization: Bearer {bearer_token}" ^
  --request GET ^
  "https://api-satusehat.kemkes.go.id/masterdata/v1/mastersaranaindex/mastersarana"
```

### cURL (Linux)

```curl
--location \
 --header 'Authorization: Bearer {bearer_token}' \
 --request GET \
 'https://api-satusehat.kemkes.go.id/masterdata/v1/mastersaranaindex/mastersarana'
```

### Postman

1. Buat _request_ baru menggunakan `New > HTTP Request`, atau klik `+` untuk buat tab _request_ baru.

2. Masukan _request_ URL:

```
https://api-satusehat.kemkes.go.id/masterdata/v1/mastersaranaindex/mastersarana
```

3. Lalu pilih _request method_ `GET`.
4. Pada tab **Auth**,
5. Pada tab **Header**:
6. Pada tab **Params**, di bagian **Query Params**:
7. Klik tombol `Send`.
8. Hasil _response_ akan ditampilkan di bagian **Response**.

### 4.2. Master Sarana Index - Rumah Sakit

### Request

### URL

```
https://api-satusehat.kemkes.go.id/masterdata/v1/mastersaranaindex/mastersarana
```

### HTTP Verb/Method

```
GET
```

### Header

| Nama Parameter  | Tipe Data | Keterangan                                                                                                                                          |
| --------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `*Content-Type` | `string`  | Mime type dari payload data yang akan dikirimkan di dalam body dalam bentuk URL Encoded, **WAJIB** diisi dengan `application/x-www-form-urlencoded` |
