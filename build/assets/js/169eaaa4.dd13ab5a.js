"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[4715],{63035:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=t(87462),i=(t(67294),t(3905));const r={sidebar_position:2},l="Access Token",s={unversionedId:"catalog-rest-api/authentikasi/access-token",id:"catalog-rest-api/authentikasi/access-token",title:"Access Token",description:"Mendapatkan Token",source:"@site/docs/catalog-rest-api/authentikasi/access-token.md",sourceDirName:"catalog-rest-api/authentikasi",slug:"/catalog-rest-api/authentikasi/access-token",permalink:"/docs/catalog-rest-api/authentikasi/access-token",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/catalog-rest-api/authentikasi/access-token.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pengajuan dan Verifikasi Akses",permalink:"/docs/catalog-rest-api/authentikasi/pengajuan-dan-verifikasi-akses"},next:{title:"Orientasi",permalink:"/docs/category/orientasi"}},o={},d=[{value:"Mendapatkan Token",id:"mendapatkan-token",level:2},{value:"Request",id:"request",level:3},{value:"URL",id:"url",level:4},{value:"HTTP Verb/Method",id:"http-verbmethod",level:4},{value:"Header",id:"header",level:2},{value:"Request",id:"request-1",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Query String",id:"query-string",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Body (<code>application/x-www-form-urlencoded</code>)",id:"body-applicationx-www-form-urlencoded",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Contoh Data",id:"contoh-data",level:4},{value:"Response",id:"response",level:3},{value:"2xx Success",id:"2xx-success",level:4},{value:"Struktur Data",id:"struktur-data",level:4},{value:"Contoh Data",id:"contoh-data-1",level:4},{value:"4xx Client Error",id:"4xx-client-error",level:4},{value:"Struktur Data",id:"struktur-data-1",level:4},{value:"Contoh Data",id:"contoh-data-2",level:4},{value:"5xx Server Error (Content-Type: text/plain)",id:"5xx-server-error-content-type-textplain",level:4},{value:"Contoh Data",id:"contoh-data-3",level:4},{value:"Contoh Pengunaan",id:"contoh-pengunaan",level:4},{value:"cURL (Windows)",id:"curl-windows",level:4},{value:"cURL (Linux)",id:"curl-linux",level:4},{value:"Postman",id:"postman",level:4}],p={toc:d};function k(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"access-token"},"Access Token"),(0,i.kt)("h2",{id:"mendapatkan-token"},"Mendapatkan Token"),(0,i.kt)("p",null,"Melakukan proses autentikasi untuk mendapatkan akses token yang akan dipakai pada setiap request ReST API SehatMu selanjutnya."),(0,i.kt)("h3",{id:"request"},"Request"),(0,i.kt)("h4",{id:"url"},"URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-url"},"https://istanbul.muhammadiyah.or.id/oauth/token\n")),(0,i.kt)("h4",{id:"http-verbmethod"},"HTTP Verb/Method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST\n")),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("h3",{id:"request-1"},"Request"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Nama Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipe Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Keterangan"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*Content-Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Mime type dari payload data yang akan dikirimkan dalam bentuk URL Encoded, ",(0,i.kt)("strong",{parentName:"td"},"WAJIB")," diisi dengan ",(0,i.kt)("inlineCode",{parentName:"td"},"application/x-www-form-urlencoded"),".")))),(0,i.kt)("h3",{id:"query-string"},"Query String"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Nama Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipe Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Keterangan"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*grant_type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Tipe permintaan akses (grant) Oauth2, ",(0,i.kt)("strong",{parentName:"td"},"WAJIB")," diisi dengan ",(0,i.kt)("inlineCode",{parentName:"td"},"client_credentials"),".")))),(0,i.kt)("h3",{id:"body-applicationx-www-form-urlencoded"},"Body (",(0,i.kt)("inlineCode",{parentName:"h3"},"application/x-www-form-urlencoded"),")"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Nama Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipe Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Keterangan"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*client_id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Nilai client ID yang telah didapatkan dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia setelah melakukan pengajuan via email, ",(0,i.kt)("strong",{parentName:"td"},"WAJIB")," diisi. Nilai ini bisa disamakan seperti username yang akan digunakan untuk akses aplikasi.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*client_secret")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Nilai client secret yang telah didapatkan dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia setelah melakukan pengajuan via email, ",(0,i.kt)("strong",{parentName:"td"},"WAJIB")," diisi. Nilai ini bisa disamakan seperti kata sandi (password) yang akan digunakan untuk akses aplikasi.")))),(0,i.kt)("h4",{id:"contoh-data"},"Contoh Data"),(0,i.kt)("p",null,"Setiap nilai yang dicontohkan atau ditampilkan di dokumentasi ini adalah nilai yang tidak sebenarnya dan tidak dapat dipakai. Nilai-nilai tersebut hanya untuk keperluan contoh saja, tidak untuk dipakai."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"client_id: 0d8d0652-3a1d-47c3-97a6-d5a513c5f285.sehatmu.client\nclient_secret: 906959aa4211487066072588249854ac1ca54e06a54940bc35b3311fc594ed2a\n")),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"Hasil response, dengan HTTP Status Code berpola 2xx atau 4xx, yang dikembalikan dari server mempunyai parameter Content-Type dengan nilai application/json di salah satu parameter header-nya."),(0,i.kt)("h4",{id:"2xx-success"},"2xx Success"),(0,i.kt)("p",null,"Dari hasil response ini, PERLU disimpan nilai akses token yang didapat dari properti access_token, dimana tipe token (lihat properti token_type) tersebut adalah BearerToken. Nilai akses token tersebut WAJIB selalu digunakan sebagai nilai dari header Authorization: Bearer <access_token> saat melakukan request lainnya dari ReST API SehatMu."),(0,i.kt)("h4",{id:"struktur-data"},"Struktur Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"{\n  accessToken: number\n  accessTokenExpiresAt: string\n  clientId: string\n  client: object\n  userId: string\n  user: object\n}\n")),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Respon yang diterima berupa object."),(0,i.kt)("li",null,"Properti developer.email bertipe string, berisi informasi akun kredensial (email) pengguna pada API SehatMu."),(0,i.kt)("li",null,"Properti issued_at bertipe string, berisi informasi waktu pembuatan access_token."),(0,i.kt)("li",null,"Properti client_id bertipe string, berisi nilai akses API SehatMu yang dapat dilihat pada website SehatMu.kemkes.go.id/platf"),"orm.",(0,i.kt)("li",null,"Properti access_token bertipe string, berisi nilai bearer token untuk digunakan di header authorization pada pemanggilan API SAT"),"USEHAT.",(0,i.kt)("li",null,"Properti expires_in bertipe number, berisi informasi durasi waktu access_token dapat digunakan (dalam satuan detik).")),(0,i.kt)("h4",{id:"contoh-data-1"},"Contoh Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accessToken": "718d19c515f12c68dcfce7a97b7510c160c4678f",\n  "accessTokenExpiresAt": "2023-12-17T05:31:48.002Z",\n  "clientId": "3310fd56-10fb-4319-8044-9c0eb570a25f.sehatmu.client",\n  "client": {\n    "name": "John Doe System",\n    "email": "john.doe@example.com"\n  },\n  "userId": "64eb3286e34e01fa5887d9b6",\n  "user": {\n    "id": "64eb3286e34e01fa5887d9b6",\n    "email": "john.doe@example.com",\n    "name": "John Doe System"\n  }\n}\n')),(0,i.kt)("h4",{id:"4xx-client-error"},"4xx Client Error"),(0,i.kt)("p",null,"Sistem akan mengembalikan pesan error bila client belum melakukan autentikasi (Unauthorized), tidak memiliki akses, menggunakan HTTP method yang tidak tepat, atau mengirimkan data dengan format atau ketentuan yang tidak sesuai."),(0,i.kt)("h4",{id:"struktur-data-1"},"Struktur Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"{ (1)\n  *resourceType: string (2)\n  *issue: [{ (3)\n    *severity: string\n    *code: string\n    *details: {\n      *text: string\n      }\n    }\n  ]\n}\n")),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Respon yang diterima berupa object."),(0,i.kt)("li",null,"Properti resourceType bertipe string, berisi nilai OperationOutcome (Resource FHIR untuk informasi hasil pemrosesan sistem)."),(0,i.kt)("li",null,'Properti issue bertipe array of objects, berisi informasi "The user or system was not able to be authenticated (either client_id or client_secret combination is unacceptable)" (Ada kesalahan pengisian client_id atau client_secret pada body request) atau "Authentication temporarily cannot be performed due to the rate limit policy. Rate limit: 1 request per minute after a failed attempt." (Setiap client_id, hanya boleh salah pengisian client_secret 1x dalam 1 menit, atau terlalu sering melakukan generate token baru dalam 1 menit).')),(0,i.kt)("h4",{id:"contoh-data-2"},"Contoh Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "invalid",\n      "code": "value",\n      "details": {\n        "text": "The user or system was not able to be authenticated (either client_id or client_secret combination is unacceptable)"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h4",{id:"5xx-server-error-content-type-textplain"},"5xx Server Error (Content-Type: text/plain)"),(0,i.kt)("p",null,"Sistem akan mengembalikan pesan error bila terjadi kesalahan pada sisi server saat memproses data yang telah dikirimkan."),(0,i.kt)("h4",{id:"contoh-data-3"},"Contoh Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Gateway Timeout\n")),(0,i.kt)("h4",{id:"contoh-pengunaan"},"Contoh Pengunaan"),(0,i.kt)("h4",{id:"curl-windows"},"cURL (Windows)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},'--insecure --location \\\n --header "Content-Type: application/x-www-form-urlencoded" ^\n--data-urlencode "client_id=oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF" ^\n--data-urlencode "client_secret=tFb3el8LGjW08mWcGLyBDdiJp1hwymrAb9qrmhapuV7WcDhVq2u9n9diBVGfMRfD" ^\n--request POST ^\n"https://istanbul.muhammadiyah.or.id/oauth/token"\n')),(0,i.kt)("h4",{id:"curl-linux"},"cURL (Linux)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},"--insecure --location \\\n\n--header 'Content-Type: application/x-www-form-urlencoded' \\\n --data-urlencode 'client_id=oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF' \\\n --data-urlencode 'client_secret=tFb3el8LGjW08mWcGLyBDdiJp1hwymrAb9qrmhapuV7WcDhVq2u9n9diBVGfMRfD' \\\n --request POST \\\n 'https://istanbul.muhammadiyah.or.id/oauth/token'\n")),(0,i.kt)("h4",{id:"postman"},"Postman"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buat request baru menggunakan ",(0,i.kt)("strong",{parentName:"p"},"New")," > ",(0,i.kt)("strong",{parentName:"p"},"HTTP Request"),", atau klik ",(0,i.kt)("strong",{parentName:"p"},"+")," untuk buat tab request baru.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Masukkan request URL:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://istanbul.muhammadiyah.or.id/oauth/token\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lalu pilih request method ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada tab ",(0,i.kt)("strong",{parentName:"p"},"Params"),", di bagian ",(0,i.kt)("strong",{parentName:"p"},"Query Params"),":\na. Masukkan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"grant_type")," pada kotak masukan pada kolom ",(0,i.kt)("strong",{parentName:"p"},"KEY"),",\nb. Lalu masukkan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"client_credentials")," pada kotak masukan pada kolom ",(0,i.kt)("strong",{parentName:"p"},"VALUE"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada tab ",(0,i.kt)("strong",{parentName:"p"},"Body"),":\na. Pilih ",(0,i.kt)("strong",{parentName:"p"},"x-www-form-urlencoded"),",\nb. Masukkan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," pada kotak masukan pada kolom ",(0,i.kt)("strong",{parentName:"p"},"KEY"),",\nc. Lalu masukkan nilai ",(0,i.kt)("em",{parentName:"p"},"client ID")," yang sudah didapatkan dari ",(0,i.kt)("strong",{parentName:"p"},"Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia")," pada kotak masukan pada kolom ",(0,i.kt)("strong",{parentName:"p"},"VALUE"),",\nd. Selanjutnya masukkan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret")," pada kotak masukan pada kolom ",(0,i.kt)("strong",{parentName:"p"},"KEY"),",\ne. Terakhir masukkan nilai ",(0,i.kt)("em",{parentName:"p"},"client secret")," yang sudah didapatkan dari ",(0,i.kt)("strong",{parentName:"p"},"Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia")," pada kotak masukan pada kolom ",(0,i.kt)("strong",{parentName:"p"},"VALUE"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Klik tombol ",(0,i.kt)("strong",{parentName:"p"},"Send"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Hasil response akan ditampilkan di bagian ",(0,i.kt)("strong",{parentName:"p"},"Response"),"."))))}k.isMDXComponent=!0}}]);