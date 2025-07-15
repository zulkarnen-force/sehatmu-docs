---
sidebar_position: 1
---

# Pengajuan dan Verifikasi Akses

Untuk mengakses SehatMu API, Anda perlu membuat akun dan mendapatkan kredensial API yang valid. Panduan ini akan membantu Anda melalui proses registrasi, pengajuan akses, dan penggunaan Console SehatMu untuk mengelola aplikasi Anda.

## Tentang SehatMu API

SehatMu API adalah platform interoperabilitas kesehatan yang dikembangkan oleh Persyarikatan Muhammadiyah untuk mendukung digitalisasi layanan kesehatan. API ini memungkinkan integrasi antar sistem informasi kesehatan dengan standar FHIR (Fast Healthcare Interoperability Resources).

## Environment yang Tersedia

SehatMu menyediakan dua environment untuk keperluan yang berbeda:

### 1. Production Environment

- **URL Console**: [sehat.muhammadiyah.or.id/console](https://sehat.muhammadiyah.or.id/console)
- **Base URL API**: `https://api.sehat.muhammadiyah.or.id`
- **Deskripsi**: Lingkungan produksi untuk aplikasi yang sudah siap digunakan oleh pengguna akhir
- **Penggunaan**: Aplikasi live, sistem yang sudah stabil dan telah melalui tahap testing
- **Ketersediaan**: 99.9% uptime, monitoring 24/7

### 2. Development/Staging Environment

- **URL Console**: [staging.sehat.muhammadiyah.or.id](https://staging.sehat.muhammadiyah.or.id)
- **Base URL API**: `https://staging-api.sehat.muhammadiyah.or.id`
- **Deskripsi**: Lingkungan pengembangan dan testing untuk pengujian aplikasi
- **Penggunaan**: Development, testing, dan eksperimen fitur baru
- **Catatan**: Data dapat direset secara berkala untuk keperluan maintenance

## Persyaratan Akses

Sebelum memulai proses registrasi, pastikan Anda memiliki:

1. **Email aktif** yang dapat menerima verifikasi
2. **Informasi organisasi/institusi** yang lengkap
3. **Dokumen identitas** organisasi (jika diperlukan)
4. **Deskripsi aplikasi** yang akan dikembangkan
5. **Pemahaman** tentang standar FHIR dan API RESTful

## Langkah-langkah Pengajuan Akses

### Langkah 1: Registrasi Akun Developer

#### A. Akses Console SehatMu

**Untuk Production Environment:**

1. Buka browser dan kunjungi [sehat.muhammadiyah.or.id/console](https://sehat.muhammadiyah.or.id/console)
2. Anda akan melihat halaman login Console SehatMu

**Untuk Development/Staging Environment:**

1. Buka browser dan kunjungi [staging.sehat.muhammadiyah.or.id](https://staging.sehat.muhammadiyah.or.id)
2. Interface yang sama dengan production namun untuk testing

#### B. Proses Registrasi

1. **Klik tombol "Daftar" atau "Register"** pada halaman login
2. **Isi formulir registrasi** dengan informasi berikut:

   - **Nama Lengkap**: Nama sesuai identitas
   - **Email**: Email aktif yang akan digunakan untuk komunikasi
   - **Nomor Telepon**: Nomor yang dapat dihubungi
   - **Organisasi/Institusi**:
     - Nama lengkap organisasi
     - Jenis organisasi (Rumah Sakit, Klinik, Puskesmas, Vendor, dll.)
     - Alamat lengkap organisasi
   - **Password**:
     - Minimal 8 karakter
     - Kombinasi huruf besar, kecil, angka, dan simbol
     - Hindari penggunaan informasi pribadi

3. **Setujui Terms of Service** dan Privacy Policy
4. **Klik "Daftar"** untuk mengirim formulir

#### C. Verifikasi Email

1. **Cek email** yang telah didaftarkan
2. **Buka email verifikasi** dari SehatMu (cek folder spam jika tidak ada di inbox)
3. **Klik link verifikasi** dalam email
4. **Konfirmasi akun** telah terverifikasi
5. **Login** menggunakan email dan password yang telah dibuat

### Langkah 2: Pembuatan Aplikasi

Setelah berhasil login ke Console SehatMu:

#### A. Navigasi ke Menu Aplikasi

1. **Dashboard Console**: Setelah login, Anda akan berada di dashboard utama
2. **Menu Aplikasi**: Klik menu "Applications" atau "Aplikasi" di sidebar kiri
3. **Daftar Aplikasi**: Anda akan melihat daftar aplikasi yang telah dibuat (kosong untuk pengguna baru)

#### B. Buat Aplikasi Baru

1. **Klik tombol "Buat Aplikasi Baru"** atau "Create New Application"
2. **Isi informasi aplikasi**:

   **Informasi Dasar:**

   - **Nama Aplikasi**: Nama yang mudah diidentifikasi
   - **Deskripsi**: Penjelasan singkat tentang fungsi aplikasi
   - **Kategori**: Pilih kategori yang sesuai
     - EMR (Electronic Medical Record)
     - HIS (Hospital Information System)
     - Mobile Health App
     - Telemedicine
     - Analytics & Reporting
     - Lainnya

   **Konfigurasi Teknis:**

   - **Jenis Aplikasi**:

     - Web Application
     - Mobile Application (iOS/Android)
     - Desktop Application
     - Server-to-Server Integration

   - **URL Aplikasi**: URL utama aplikasi Anda (jika ada)
   - **Callback URLs**: URL untuk OAuth redirect (jika menggunakan OAuth)
   - **Webhook URLs**: URL untuk menerima notifikasi (opsional)

   **Informasi Keamanan:**

   - **IP Whitelist**: Daftar IP address yang diizinkan mengakses API (opsional)
   - **Scope Permissions**: Pilih permission yang dibutuhkan aplikasi

#### C. Konfigurasi Permissions

1. **Pilih Scope API** yang dibutuhkan aplikasi Anda:

   **Patient Management:**

   - `patient:read` - Membaca data pasien
   - `patient:write` - Menulis/update data pasien
   - `patient:search` - Mencari data pasien

   **Clinical Data:**

   - `observation:read` - Membaca hasil pemeriksaan
   - `observation:write` - Menulis hasil pemeriksaan
   - `encounter:read` - Membaca data kunjungan
   - `encounter:write` - Menulis data kunjungan

   **Medication:**

   - `medication:read` - Membaca data obat
   - `medication:write` - Menulis resep obat

   **Diagnostic:**

   - `diagnostic:read` - Membaca hasil diagnostik
   - `diagnostic:write` - Menulis hasil diagnostik

2. **Pilih level akses** berdasarkan kebutuhan:

   - **Read Only**: Hanya membaca data
   - **Read/Write**: Membaca dan menulis data
   - **Admin**: Akses penuh termasuk manajemen user

3. **Konfirmasi Terms of Service** untuk penggunaan API

### Langkah 3: Generate Kredensial API

#### A. Mendapatkan API Credentials

Setelah aplikasi dibuat:

1. **Navigasi ke detail aplikasi** yang baru dibuat
2. **Tab "Credentials"** atau "API Keys":

   **Client ID:**

   - Otomatis di-generate oleh sistem
   - Bersifat public dan dapat dibagikan
   - Digunakan untuk identifikasi aplikasi

   **Client Secret:**

   - Hanya ditampilkan sekali saat pembuatan
   - **SIMPAN DENGAN AMAN** - tidak dapat dilihat lagi
   - Jangan pernah dibagikan atau commit ke repository
   - Gunakan untuk autentikasi server-side

   **API Key** (jika applicable):

   - Key tambahan untuk akses API
   - Digunakan dalam header request

#### B. Download dan Simpan Credentials

1. **Download file konfigurasi** yang berisi semua credentials
2. **Simpan di tempat yang aman**:
   - Environment variables
   - Secure configuration management
   - Encrypted storage
3. **Jangan pernah**:
   - Commit credentials ke Git repository
   - Simpan dalam plain text
   - Bagikan melalui email atau chat

### Langkah 4: Pengajuan Review dan Aktivasi

#### A. Submit untuk Review

1. **Review informasi aplikasi** yang telah diisi
2. **Pastikan semua data sudah benar** dan lengkap
3. **Klik "Submit untuk Review"** atau "Request Approval"
4. **Status aplikasi** akan berubah menjadi "Under Review"

#### B. Proses Review

**Timeline Review:**

- **Development Environment**: Otomatis approved (biasanya dalam 5-10 menit)
- **Production Environment**: Manual review 1-3 hari kerja

**Kriteria Review:**

- Kelengkapan informasi aplikasi
- Validitas organisasi/institusi
- Kejelasan use case dan tujuan penggunaan
- Compliance dengan regulasi kesehatan
- Keamanan konfigurasi aplikasi

**Status yang Mungkin:**

- **Pending Review**: Menunggu review tim
- **Approved**: Disetujui dan siap digunakan
- **Rejected**: Ditolak dengan alasan yang diberikan
- **Needs More Info**: Memerlukan informasi tambahan

#### C. Aktivasi Akses

Setelah aplikasi disetujui:

1. **Notifikasi email** akan dikirim ke email terdaftar
2. **Status aplikasi** berubah menjadi "Active"
3. **API credentials** siap digunakan untuk mengakses API
4. **Rate limits** dan quotas mulai berlaku

## Panduan Penggunaan Console SehatMu

### Dashboard Utama

**Fitur yang Tersedia:**

- **Overview**: Statistik penggunaan API, error rate, dan status
- **Analytics**: Grafik penggunaan harian/bulanan
- **Alerts**: Notifikasi penting terkait aplikasi
- **Quick Actions**: Shortcut untuk fungsi-fungsi umum

### Manajemen Aplikasi

**Informasi Aplikasi:**

- Edit konfigurasi aplikasi
- Update permissions dan scope
- Regenerate credentials
- View API usage statistics

**Monitoring:**

- Real-time API calls monitoring
- Error logs dan debugging
- Performance metrics
- Rate limiting status

### Manajemen User dan Tim

**Team Management:**

- Invite team members
- Assign roles dan permissions
- Manage access controls

**Roles yang Tersedia:**

- **Owner**: Full access ke semua fitur
- **Admin**: Manage applications dan users
- **Developer**: Access ke development tools
- **Viewer**: Read-only access

## Informasi Penting

### Keamanan Credentials

**Best Practices:**

- **Jangan pernah** commit credentials ke version control
- **Gunakan environment variables** untuk menyimpan secrets
- **Regenerate credentials** secara berkala (setiap 6-12 bulan)
- **Monitor suspicious activities** di console
- **Gunakan HTTPS** untuk semua komunikasi API
- **Implement proper error handling** untuk tidak expose credentials

**Incident Response:**

- Jika credentials bocor, segera regenerate di console
- Report security incident ke tim SehatMu
- Update aplikasi dengan credentials baru

### Rate Limiting dan Quotas

**Production Environment:**

- **Rate Limit**: 1000 requests per hour per application
- **Burst Limit**: 50 requests per minute
- **Daily Quota**: 10,000 requests per day
- **Monthly Quota**: 300,000 requests per month

**Development Environment:**

- **Rate Limit**: 100 requests per hour per application
- **Burst Limit**: 10 requests per minute
- **Daily Quota**: 500 requests per day

**Upgrade Options:**

- Untuk kebutuhan lebih tinggi, hubungi tim support
- Enterprise plans tersedia untuk organisasi besar
- Custom quotas dapat dinegosiasikan

### Support dan Bantuan

**Kanal Support:**

- **Email**: support@sehat.muhammadiyah.or.id
- **Phone**: +62-274-xxx-xxxx (jam kerja)
- **Live Chat**: Tersedia di console (jam kerja)
- **Forum Community**: [forum.sehat.muhammadiyah.or.id]

**Response Time:**

- **Critical Issues**: 2-4 jam
- **High Priority**: 8-24 jam
- **Normal**: 1-3 hari kerja
- **Low Priority**: 5-7 hari kerja

**Documentation:**

- **API Reference**: Dokumentasi lengkap semua endpoints
- **SDKs**: Library untuk berbagai bahasa pemrograman
- **Tutorials**: Step-by-step guides dan examples
- **Best Practices**: Panduan penggunaan optimal

## Testing dan Implementasi

### Testing Koneksi

**Health Check Endpoint:**

```bash
# Production
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
     -H "Content-Type: application/json" \
     https://api.sehat.muhammadiyah.or.id/v1/health

# Staging
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
     -H "Content-Type: application/json" \
     https://staging-api.sehat.muhammadiyah.or.id/v1/health
```

**Expected Response:**

```json
{
  "status": "healthy",
  "version": "v1.0.0",
  "timestamp": "2025-07-15T10:30:00Z",
  "environment": "production"
}
```

### Sample API Calls

**Get Patient Data:**

```bash
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
     -H "Content-Type: application/fhir+json" \
     https://api.sehat.muhammadiyah.or.id/v1/Patient/12345
```

**Search Patients:**

```bash
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
     -H "Content-Type: application/fhir+json" \
     "https://api.sehat.muhammadiyah.or.id/v1/Patient?name=John&birthdate=1990-01-01"
```

### Error Handling

**Common Error Codes:**

- **401 Unauthorized**: Token tidak valid atau expired
- **403 Forbidden**: Tidak memiliki permission
- **429 Too Many Requests**: Rate limit exceeded
- **500 Internal Server Error**: Server error

**Error Response Format:**

```json
{
  "error": {
    "code": "INVALID_TOKEN",
    "message": "The provided access token is invalid or expired",
    "details": "Please regenerate your access token"
  }
}
```

## Troubleshooting

### Masalah Umum dan Solusi

**1. Email verifikasi tidak diterima**

- Cek folder spam/junk mail
- Pastikan email address benar
- Tunggu 5-10 menit untuk delivery
- Request resend verification email

**2. Login gagal setelah registrasi**

- Pastikan email sudah diverifikasi
- Check caps lock untuk password
- Reset password jika perlu
- Clear browser cache dan cookies

**3. Aplikasi tidak muncul setelah dibuat**

- Refresh halaman browser
- Logout dan login kembali
- Cek apakah ada error message

**4. API calls mendapat error 401**

- Pastikan token masih valid (tidak expired)
- Check format Authorization header
- Regenerate token jika perlu

**5. Rate limit exceeded**

- Implement exponential backoff
- Optimize API calls untuk efisiensi
- Upgrade plan jika perlu

**6. Aplikasi ditolak saat review**

- Baca feedback yang diberikan
- Lengkapi informasi yang kurang
- Submit ulang setelah perbaikan

### Kontak Support

Jika mengalami masalah yang tidak dapat diselesaikan dengan troubleshooting di atas:

**Email Support:**

- General: support@sehat.muhammadiyah.or.id
- Technical: tech-support@sehat.muhammadiyah.or.id
- Business: business@sehat.muhammadiyah.or.id

**Informasi yang Dibutuhkan Saat Menghubungi Support:**

- Application ID atau nama aplikasi
- Environment (production/staging)
- Error message lengkap
- Steps yang dilakukan sebelum error
- Screenshot jika memungkinkan
- Request/response logs (tanpa credentials)

**SLA Support:**

- Weekdays: 08:00 - 17:00 WIB
- Response time: 2-24 jam tergantung prioritas
- Weekend: Emergency support only

---

_Panduan ini akan terus diperbarui seiring dengan pengembangan platform SehatMu. Untuk versi terbaru, selalu rujuk ke dokumentasi online._
