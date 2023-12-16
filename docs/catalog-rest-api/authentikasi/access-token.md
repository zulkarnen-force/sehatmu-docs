---
sidebar_position: 2
---

# Access Token

## Mendapatkan Token

Melakukan proses autentikasi untuk mendapatkan akses token yang akan dipakai pada setiap request ReST API SehatMu selanjutnya.

### Request

#### URL

```url
https://istanbul.muhammadiyah.or.id/oauth/token
```

#### HTTP Verb/Method

```
POST
```

## Header

### Request

#### Parameters

| Nama Parameter  | Tipe Data | Keterangan                                                                                                                             |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `*Content-Type` | `string`  | Mime type dari payload data yang akan dikirimkan dalam bentuk URL Encoded, **WAJIB** diisi dengan `application/x-www-form-urlencoded`. |

### Query String

#### Parameters

| Nama Parameter | Tipe Data | Keterangan                                                                         |
| -------------- | --------- | ---------------------------------------------------------------------------------- |
| `*grant_type`  | `string`  | Tipe permintaan akses (grant) Oauth2, **WAJIB** diisi dengan `client_credentials`. |

### Body (`application/x-www-form-urlencoded`)

#### Parameters

| Nama Parameter   | Tipe Data | Keterangan                                                                                                                                                                                                                                                                                                                |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `*client_id`     | `string`  | Nilai client ID yang telah didapatkan dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia setelah melakukan pengajuan via email, **WAJIB** diisi. Nilai ini bisa disamakan seperti username yang akan digunakan untuk akses aplikasi.                  |
| `*client_secret` | `string`  | Nilai client secret yang telah didapatkan dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia setelah melakukan pengajuan via email, **WAJIB** diisi. Nilai ini bisa disamakan seperti kata sandi (password) yang akan digunakan untuk akses aplikasi. |

#### Contoh Data

Setiap nilai yang dicontohkan atau ditampilkan di dokumentasi ini adalah nilai yang tidak sebenarnya dan tidak dapat dipakai. Nilai-nilai tersebut hanya untuk keperluan contoh saja, tidak untuk dipakai.

```yaml
client_id: 0d8d0652-3a1d-47c3-97a6-d5a513c5f285.sehatmu.client
client_secret: 906959aa4211487066072588249854ac1ca54e06a54940bc35b3311fc594ed2a
```

### Response

Hasil response, dengan HTTP Status Code berpola 2xx atau 4xx, yang dikembalikan dari server mempunyai parameter Content-Type dengan nilai application/json di salah satu parameter header-nya.

#### 2xx Success

Dari hasil response ini, PERLU disimpan nilai akses token yang didapat dari properti access_token, dimana tipe token (lihat properti token_type) tersebut adalah BearerToken. Nilai akses token tersebut WAJIB selalu digunakan sebagai nilai dari header Authorization: Bearer <access_token> saat melakukan request lainnya dari ReST API SehatMu.

#### Struktur Data

```go
{
  accessToken: number
  accessTokenExpiresAt: string
  clientId: string
  client: object
  userId: string
  user: object
}
```

<ol>
<li>Respon yang diterima berupa object.</li>
<li>Properti developer.email bertipe string, berisi informasi akun kredensial (email) pengguna pada API SehatMu.</li>
<li>Properti issued_at bertipe string, berisi informasi waktu pembuatan access_token.</li>
<li>Properti client_id bertipe string, berisi nilai akses API SehatMu yang dapat dilihat pada website SehatMu.kemkes.go.id/platf</li>orm.
<li>Properti access_token bertipe string, berisi nilai bearer token untuk digunakan di header authorization pada pemanggilan API SAT</li>USEHAT.
<li>Properti expires_in bertipe number, berisi informasi durasi waktu access_token dapat digunakan (dalam satuan detik).</li>
</ol>

#### Contoh Data

```json
{
  "accessToken": "718d19c515f12c68dcfce7a97b7510c160c4678f",
  "accessTokenExpiresAt": "2023-12-17T05:31:48.002Z",
  "clientId": "3310fd56-10fb-4319-8044-9c0eb570a25f.sehatmu.client",
  "client": {
    "name": "John Doe System",
    "email": "john.doe@example.com"
  },
  "userId": "64eb3286e34e01fa5887d9b6",
  "user": {
    "id": "64eb3286e34e01fa5887d9b6",
    "email": "john.doe@example.com",
    "name": "John Doe System"
  }
}
```

#### 4xx Client Error

Sistem akan mengembalikan pesan error bila client belum melakukan autentikasi (Unauthorized), tidak memiliki akses, menggunakan HTTP method yang tidak tepat, atau mengirimkan data dengan format atau ketentuan yang tidak sesuai.

#### Struktur Data

```go
{ (1)
  *resourceType: string (2)
  *issue: [{ (3)
    *severity: string
    *code: string
    *details: {
      *text: string
      }
    }
  ]
}
```

<ol>
<li>Respon yang diterima berupa object.</li>
<li>Properti resourceType bertipe string, berisi nilai OperationOutcome (Resource FHIR untuk informasi hasil pemrosesan sistem).</li>
<li>Properti issue bertipe array of objects, berisi informasi "The user or system was not able to be authenticated (either client_id or client_secret combination is unacceptable)" (Ada kesalahan pengisian client_id atau client_secret pada body request) atau "Authentication temporarily cannot be performed due to the rate limit policy. Rate limit: 1 request per minute after a failed attempt." (Setiap client_id, hanya boleh salah pengisian client_secret 1x dalam 1 menit, atau terlalu sering melakukan generate token baru dalam 1 menit).</li>
</ol>

#### Contoh Data

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

#### 5xx Server Error (Content-Type: text/plain)

Sistem akan mengembalikan pesan error bila terjadi kesalahan pada sisi server saat memproses data yang telah dikirimkan.

#### Contoh Data

```
Gateway Timeout
```

#### Contoh Pengunaan

#### cURL (Windows)

```curl
--insecure --location \
 --header "Content-Type: application/x-www-form-urlencoded" ^
--data-urlencode "client_id=oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF" ^
--data-urlencode "client_secret=tFb3el8LGjW08mWcGLyBDdiJp1hwymrAb9qrmhapuV7WcDhVq2u9n9diBVGfMRfD" ^
--request POST ^
"https://istanbul.muhammadiyah.or.id/oauth/token"
```

#### cURL (Linux)

```curl
--insecure --location \

--header 'Content-Type: application/x-www-form-urlencoded' \
 --data-urlencode 'client_id=oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF' \
 --data-urlencode 'client_secret=tFb3el8LGjW08mWcGLyBDdiJp1hwymrAb9qrmhapuV7WcDhVq2u9n9diBVGfMRfD' \
 --request POST \
 'https://istanbul.muhammadiyah.or.id/oauth/token'
```

#### Postman

1. Buat request baru menggunakan **New** > **HTTP Request**, atau klik **+** untuk buat tab request baru.

2. Masukkan request URL:

```
https://istanbul.muhammadiyah.or.id/oauth/token
```

3. Lalu pilih request method `POST`.

4. Pada tab **Params**, di bagian **Query Params**:
   a. Masukkan nilai `grant_type` pada kotak masukan pada kolom **KEY**,
   b. Lalu masukkan nilai `client_credentials` pada kotak masukan pada kolom **VALUE**.

5. Pada tab **Body**:
   a. Pilih **x-www-form-urlencoded**,
   b. Masukkan nilai `client_id` pada kotak masukan pada kolom **KEY**,
   c. Lalu masukkan nilai _client ID_ yang sudah didapatkan dari **Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia** pada kotak masukan pada kolom **VALUE**,
   d. Selanjutnya masukkan nilai `client_secret` pada kotak masukan pada kolom **KEY**,
   e. Terakhir masukkan nilai _client secret_ yang sudah didapatkan dari **Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia** pada kotak masukan pada kolom **VALUE**.

6. Klik tombol **Send**.

7. Hasil response akan ditampilkan di bagian **Response**.
