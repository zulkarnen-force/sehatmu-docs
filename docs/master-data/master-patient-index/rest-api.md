---
sidebar_position: 4
---

import Alert from '@site/src/components/Alert';

# ReST API

# 1. Autentikasi

Untuk melakukan transaksi data dari Master Patient Index (MPI), perlu dilakukan proses autentikasi terlebih dahulu agar mendapatkan akses yang tersedia. Autentikasi yang digunakan oleh MPI mengikuti standar protokol OAuth 2 dengan tipe pemberian akses (grant type) adalah client_credentials.

Autentikasi menggunakan grant type client_credentials adalah proses autentikasi yang dilakukan antara server to server, sehingga tidak ada proses registrasi atau log in di sini. Autentikasi dengan tipe tersebut hanya memerlukan data berupa client_id dan client_server, dimana nilai tersebut didapatkan ketika pihak yang ingin menggunakan atau mengakses MSI ini telah melakukan pengajuan, terdaftar, serta mendapatkan persetujuan dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia.

<!-- <Alert type="success">Setiap teks yang berwarna biru muda, dapat diklik untuk melompat ke bagian yang direferensikan.</Alert> -->

## 2. Akses Token

### Mendapatkan Token

Melakukan proses autentikasi untuk mendapatkan akses token yang akan dipakai pada setiap request ReST API SATUSEHAT selanjutnya.

<Alert type="error">Setiap terdapat simbol asterik <code>*</code> sebelum nama variabel atau parameter yang disebutkan, maka variabel atau parameter tersebut bersifat <strong>WAJIB</strong>, <strong>harus ada</strong>, atau <strong>pasti selalu ada</strong>, contoh: <code>*variabel</code> .</Alert>

### Request

```URL
https://api-satusehat-dev.dto.kemkes.go.id/oauth2/v1/accesstoken
```

### HTTP Verb/Method

```URL
POST
```

### Header

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
      <td><code>*Content-Type</code></td>
      <td><code>string</code></td>
      <td>
        <p><em>Mime type</em> dari <em>payload</em> data yang akan dikirimkan di dalam <em>body</em> dalam bentuk <em>URL Encoded</em>, <strong>WAJIB</strong> diisi dengan <code>application/x-www-form-urlencoded</code></p>
      </td>
    </tr>
  </tbody>
</table>

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

<Alert type="warning">
Setiap nilai yang dicontohkan atau ditampilkan di dokumentasi ini adalah nilai yang tidak sebenarnya dan tidak dapat dipakai. Nilai-nilai tersebut hanya untuk keperluan contoh saja, tidak untuk dipakai</Alert>

```YAML
client_id: oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF
client_secret: tFb3el8LGjW08mWcGLyBDdiJp1hwymrAb9qrmhapuV7WcDhVq2u9n9diBVGfMRfD
```

### Response

Hasil response, dengan HTTP Status Code berpola 2xx atau 4xx, yang dikembalikan dari server mempunyai parameter Content-Type dengan nilai application/json di salah satu parameter header-nya.

### 2xx Success

Dari hasil response ini, PERLU disimpan nilai akses token yang didapat dari properti access_token, dimana tipe token (lihat properti token_type) tersebut adalah BearerToken. Nilai akses token tersebut WAJIB selalu digunakan sebagai nilai dari header Authorization: Bearer <access_token> saat melakukan request lainnya dari ReST API SATUSEHAT.

### Contoh

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

```URL
Gateway Timeout
```

### Contoh Pengunaan

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

## Postman

1. Create a new request using `New > HTTP Request`, or click `+` to create a new request tab.

2. Enter the request URL:

   ```
   https://api-satusehat-dev.dto.kemkes.go.id/oauth2/v1/accesstoken
   ```

3. Choose the request method `POST`.

4. In the `Params` tab, under `Query Params`:

   a. Enter the key `grant_type`.

   b. Enter the value `client_credentials`.

5. In the `Body` tab:

   a. Select `x-www-form-urlencoded`.

   b. Enter the key `client_id`.

   c. Enter the value (your client ID obtained from "Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia") in the value field.

   d. Enter the key `client_secret`.

   e. Enter the value (your client secret obtained from "Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia") in the value field.

6. Click the `Send` button.

7. The response will be displayed in the `Response` section.

### Penambahan Data

Fungsi dari ReST API ini adalah untuk melakukan penambahan data terkait resource Patient ke dalam Ekosistem SATUSEHAT.

### Request

### URL

```
https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient:
```

### HTTP Verb/Method

```
POST
```

### Header

| Nama Parameter  | Tipe Data | Keterangan                                                                                                                                                                                                                  |
| --------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*Authorization | string    | Header ini WAJIB diisi dengan nilai sesuai format: `Bearer <access_token>`. Nilai dari variabel `<access_token>` didapatkan dari properti `access_token` pada `object` dari hasil response JSON setelah proses autentikasi. |
| \*Content-Type  | string    | Mime type dari payload data yang akan dikirimkan di dalam body dalam format JSON, WAJIB diisi dengan `application/json`.                                                                                                    |

`Body (application/json), dengan identifier NIK Pasien`.

Di bagian body ini payload JSON dari resource Patient sesuai standar FHIR dimasukkan. Terkait cara pengisian dari format FHIR tersebut di luar cakupan dari dokumentasi ini, silakan melihat pada dokumentasi terkait Petunjuk Teknis atau Playbook yang telah disediakan oleh tim SATUSEHAT dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia.

Bentuk umum dari payload untuk penambahan data sebagai berikut:

```json
{
  "resourceType": "Patient",
  "identifier": [
    {
      "use": "official",
      "system": "https://fhir.kemkes.go.id/id/nik",
      "value": "3171012345678901"
    }
    //data.terkait.indentifier.lainnya
  ]
  //data.terkait.resource.Patient
}
```

`Body (application/json), dengan identifier NIK Ibu`
Di bagian body ini payload JSON dari resource Patient dengan identifier NIK Ibu sesuai standar FHIR dimasukkan. Terkait cara pengisian dari format FHIR tersebut di luar cakupan dari dokumentasi ini, silakan melihat pada dokumentasi terkait Petunjuk Teknis atau Playbook yang telah disediakan oleh tim SATUSEHAT dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia.

Bentuk umum dari payload untuk penambahan data sebagai berikut:

```json
{
  "resourceType": "Patient",
  "identifier": [
    {
      "use": "official",
      "system": "https://fhir.kemkes.go.id/id/nik-ibu",
      "value": "367400001111222"
    }
    //data.terkait.indentifier.lainnya
  ]
  //data.terkait.resource.Patient
}
```

### Response

Hasil response, dengan HTTP Status Code berpola 2xx atau 4xx, yang dikembalikan dari server mempunyai parameter Content-Type dengan nilai application/json di salah satu parameter header-nya.

### 2xx Success

Dari hasil response ini, PERLU disimpan nilai UUID yang didapat dari properti id, dimana nilai tersebut kemungkinan akan digunakan dalam proses lainnya yang terkait resource Patient ini.

### Contoh Data

```json
{
  "resourceType": "Patient",
  "id": "100000000001"
  //data.terkait.resource.Patient
}
```

### 4xx Client Error

Sistem akan mengembalikan pesan error bila client belum melakukan autentikasi, tidak memiliki akses, menggunakan HTTP method yang tidak tepat, atau mengirimkan data dengan format atau ketentuan lainnya yang tidak sesuai atau tidak dimengerti oleh sistem.

### Contoh Data

```json
{
  "resourceType": "OperationOutcome"
  //data.terkait.resource.OperationOutcome
}
```

### 5xx Server Error (Content-Type: text/plain)

Sistem akan mengembalikan pesan error bila terjadi kesalahan pada sisi server saat memproses data yang telah dikirimkan.

### Contoh Data

```URL
Gateway Timeout
```

### Contoh Pengunaan

### cURL (Windows)

```curl
 --insecure --location ^
  --header "Authorization: Bearer k8JIDROZHfXjmUcQJE62lMqQwlLU" ^
  --header "Content-Type: application/json" ^
  --data-raw "{
    \"resourceType\": \"Patient\",
    ...
  }" ^
  --request POST ^
  "https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient"
```

### cURL (Linux)

```curl
  --insecure --location \
  --header 'Authorization: Bearer k8JIDROZHfXjmUcQJE62lMqQwlLU' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "resourceType": "Patient",
    ...
  }' \
  --request POST \
  'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient'
```

### Postman

1. Buat request baru menggunakan `New > HTTP Request`, atau klik `+` untuk buat tab request baru.

2. Masukkan request URL:

   ```
   https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient:
   ```

3. Pilih request method `POST`.

4. Pada tab **Auth**:
   a. Pada pilihan **Type**, pilih `Bearer Token`.
   b. Masukkan nilai akses token yang sudah didapatkan pada saat autentikasi pada kotak inputan **Token**.

5. Pada tab **Body**:
   a. Pilih **raw**.
   b. Kemudian disamping nilai tadi pilih **JSON**.
   c. Terakhir, masukkan resource JSON dari **Patient** yang akan diproses ke kotak inputan di bawah pilihan tadi. Contoh:

   ```json
   Unresolved include directive in modules/api-catalogue/partials/snippets/apidoc/file-example.adoc - include::api-catalogue:example$api/onboardings/patient/add/req.jsonc[]
   ```

6. Klik tombol **Send**.

7. Hasil response akan ditampilkan di bagian **Response**.

## Pembaruan Sebagian Data

Fungsi dari ReST API ini adalah untuk melakukan perubahan sebagian dari data terkait resource Patient ke dalam Ekosistem SATUSEHAT, yang sebelumnya sudah ditambahkan dan tersedia di dalam Ekosistem SATUSEHAT. Untuk melakukan perubahan sebagian (patching) data, PERLU ID dari resource Patient yang akan diubah dan juga nama/ID elemen dari Patient yang akan dilakukan perubahan.

> Setiap terdapat simbol asterik `*` sebelum nama variabel atau parameter yang disebutkan, maka variabel atau parameter tersebut bersifat WAJIB, harus ada, atau pasti selalu ada, contoh: `*variabel`.

### Request

### URL

```http
https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/:id
```

### HTTP Verb/Method

```http
PATCH
```

#### Parameter Path URI

| Nama Parameter | Tipe Data | Keterangan                                                                             |
| -------------- | --------- | -------------------------------------------------------------------------------------- |
| \*:id          | uuid      | ID referensi dari resource Patient yang akan dilakukan proses pembaruan data (update). |

#### Header

| Nama Parameter  | Tipe Data | Keterangan                                                                                                                                                                                                                  |
| --------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*Authorization | string    | Header ini WAJIB diisi dengan nilai sesuai format: `Bearer <access_token>`. Nilai dari variabel `<access_token>` didapatkan dari properti `access_token` pada `object` dari hasil response JSON setelah proses autentikasi. |
| \*Content-Type  | string    | Mime type dari payload data yang akan dikirimkan di dalam body dalam format JSON, WAJIB diisi dengan `application/json`.                                                                                                    |

Body (application/json)
Di bagian body ini payload JSON dari resource Patient sesuai standar FHIR dimasukkan. Terkait cara pengisian dari format FHIR tersebut di luar cakupan dari dokumentasi ini, silakan melihat pada dokumentasi terkait Petunjuk Teknis atau Playbook yang telah disediakan oleh tim SATUSEHAT dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia.

Bentuk umum dari payload untuk patching sebagai berikut:

```json
[
  {
    "op": "<operasi>",
    "path": "<element-path>",
    "value": "<nilai-baru>"
  }
]
```

Dari bentuk umum tersebut, nilai:

- `<operasi>`, saat ini hanya tersedia operasi `replace` saja, yaitu untuk mengganti nilai properti/elemen dari resource Patient dengan ID terkait.

- `<element-path>`, nama properti/element dari resource Patient dengan ID terkait yang akan diganti nilainya, dengan format `/path/to/element`. Simbol `/` sebagai pemisah dari nama properti/element yang dimaksud.

  Contoh, misalkan pada resource Patient ini ada properti/element dengan nama `language`, yang dalam bentuk path FHIR `Patient.language`, maka penulisan nilai `<element-path>` ini adalah `/language`.

- `<nilai-baru>`, diisi dengan nilai pengantinya.

Sehingga contoh payload-nya sebagai berikut:

```json
[
  {
    "op": "replace",
    "path": "/language",
    "value": "id"
  }
]
```

### Response

Hasil response, dengan HTTP Status Code berpola 2xx atau 4xx, yang dikembalikan dari server mempunyai parameter Content-Type dengan nilai application/json di salah satu parameter header-nya.

#### 2xx Success

Bila proses pembaruan data berhasil maka akan mengembalikan payload dari resource Patient yang sebelumnya telah dikirim.

#### Contoh Data

```json
{
  "resourceType": "Patient",
  "id": "100000000001"
  //data.terkait.resource.Patient
}
```

#### 4xx Client Error

Sistem akan mengembalikan pesan error bila client belum melakukan autentikasi, tidak memiliki akses, menggunakan HTTP method yang tidak tepat, atau mengirimkan data dengan format, parameter, atau ketentuan lainnya yang tidak sesuai atau tidak dimengerti oleh sistem.

#### Contoh Data

```json
{
  "resourceType": "OperationOutcome"
  //data.terkait.resource.OperationOutcome
}
```

#### 5xx Server Error (Content-Type: text/plain)

Sistem akan mengembalikan pesan error bila terjadi kesalahan pada sisi server saat memproses data yang telah dikirimkan.

#### Contoh Data

```
Gateway Timeout
```

### Contoh Pengunaan

#### cURL (Windows)

```curl
 --insecure --location ^
  --header "Authorization: Bearer k8JIDROZHfXjmUcQJE62lMqQwlLU" ^
  --header "Content-Type: application/json" ^
  --data-raw "[
      {
          \"op\" : \"<operasi>\",
          \"path\" : \"<element-path>\",
          \"value\" : \"<nilai-baru>\"
      }
  ]" ^
  --request PATCH ^
  "https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/100000000001"
```

#### cURL (Linux)

```
--insecure --location \
  --header 'Authorization: Bearer k8JIDROZHfXjmUcQJE62lMqQwlLU' \
  --header 'Content-Type: application/json' \
  --data-raw '[
    {
      "op": "<operasi>",
      "path": "<element-path>",
      "value": "<nilai-baru>"
    }
  ]' \
  --request PATCH \
  'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/100000000001'
```

#### Postman

1. Buat request baru menggunakan **New** > **HTTP Request**, atau klik **+** untuk buat tab request baru.

2. Masukkan request URL:

   ```
   https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/:id
   ```

3. Pilih request method `PATCH`.

4. Pada tab **Auth**:

- Pada pilihan **Type**, pilih `Bearer Token`.
- Masukkan nilai akses token yang sudah didapatkan pada saat autentikasi pada kotak inputan **Token**.

5. Pada tab **Params**, di bagian **Path Variables**:

- Isi nilai parameter `id` dengan ID dari resource Patient yang akan diperbarui (update).

6. Pada tab **Body**:

- Pilih **raw**.
- Kemudian, disamping nilai tadi, pilih **JSON**.
- Terakhir, masukkan payload JSON untuk melakukan perubahan ke kotak masukan di bawah pilihan tadi. Contoh:

  ```json
  [
    {
      "op": "replace",
      "path": "/language",
      "value": "id"
    }
  ]
  ```

7. Klik tombol **Send**.

8. Hasil response akan ditampilkan di bagian **Response**.
