"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[563],{73839:(a,e,t)=>{t.d(e,{Z:()=>i});var n=t(67294);function i(a){let{children:e,type:t}=a;const i=`alert ${t}`;return n.createElement(n.Fragment,null,n.createElement("label",null,n.createElement("input",{type:"checkbox",class:"alertCheckbox",autocomplete:"off"}),n.createElement("div",{class:i},n.createElement("span",{class:"alertClose"},"X"),n.createElement("span",{class:"alertText"},e,n.createElement("br",{class:"clear"})))))}},1646:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=t(87462),i=(t(67294),t(3905)),r=t(73839);const l={sidebar_position:4},d="ReST API",p={unversionedId:"master-data/master-patient-index/rest-api",id:"master-data/master-patient-index/rest-api",title:"ReST API",description:"Untuk melakukan transaksi data dari Master Patient Index (MPI), perlu dilakukan proses autentikasi terlebih dahulu agar mendapatkan akses yang tersedia. Autentikasi yang digunakan oleh MPI mengikuti standar protokol OAuth 2 dengan tipe pemberian akses (grant type) adalah client_credentials.",source:"@site/docs/master-data/master-patient-index/rest-api.md",sourceDirName:"master-data/master-patient-index",slug:"/master-data/master-patient-index/rest-api",permalink:"/docs/master-data/master-patient-index/rest-api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/master-data/master-patient-index/rest-api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Pasien Bayi Baru Lahir",permalink:"/docs/master-data/master-patient-index/pasien-bayi-baru-lahir"},next:{title:"Pendahuluan",permalink:"/docs/master-data/master-sarana-index/pendahuluan"}},o={},s=[{value:"2. Akses Token",id:"2-akses-token",level:2},{value:"Mendapatkan Token",id:"mendapatkan-token",level:3},{value:"Request",id:"request",level:3},{value:"HTTP Verb/Method",id:"http-verbmethod",level:3},{value:"Header",id:"header",level:3},{value:"Query String",id:"query-string",level:3},{value:"Body (application/x-www-form-urlencoded)",id:"body-applicationx-www-form-urlencoded",level:3},{value:"Contoh Data",id:"contoh-data",level:3},{value:"Response",id:"response",level:3},{value:"2xx Success",id:"2xx-success",level:3},{value:"Contoh",id:"contoh",level:3},{value:"4xx Client Error",id:"4xx-client-error",level:3},{value:"Contoh Data",id:"contoh-data-1",level:3},{value:"5xx Server Error (Content-Type: text/plain)",id:"5xx-server-error-content-type-textplain",level:3},{value:"Contoh Data",id:"contoh-data-2",level:3},{value:"Contoh Pengunaan",id:"contoh-pengunaan",level:3},{value:"cURL (Windows)",id:"curl-windows",level:3},{value:"cURL (Linux)",id:"curl-linux",level:3},{value:"Postman",id:"postman",level:2},{value:"Penambahan Data",id:"penambahan-data",level:3},{value:"Request",id:"request-1",level:3},{value:"URL",id:"url",level:3},{value:"HTTP Verb/Method",id:"http-verbmethod-1",level:3},{value:"Header",id:"header-1",level:3},{value:"Response",id:"response-1",level:3},{value:"2xx Success",id:"2xx-success-1",level:3},{value:"Contoh Data",id:"contoh-data-3",level:3},{value:"4xx Client Error",id:"4xx-client-error-1",level:3},{value:"Contoh Data",id:"contoh-data-4",level:3},{value:"5xx Server Error (Content-Type: text/plain)",id:"5xx-server-error-content-type-textplain-1",level:3},{value:"Contoh Data",id:"contoh-data-5",level:3},{value:"Contoh Pengunaan",id:"contoh-pengunaan-1",level:3},{value:"cURL (Windows)",id:"curl-windows-1",level:3},{value:"cURL (Linux)",id:"curl-linux-1",level:3},{value:"Postman",id:"postman-1",level:3},{value:"Pembaruan Sebagian Data",id:"pembaruan-sebagian-data",level:2},{value:"Request",id:"request-2",level:3},{value:"URL",id:"url-1",level:3},{value:"HTTP Verb/Method",id:"http-verbmethod-2",level:3},{value:"Parameter Path URI",id:"parameter-path-uri",level:4},{value:"Header",id:"header-2",level:4},{value:"Response",id:"response-2",level:3},{value:"2xx Success",id:"2xx-success-2",level:4},{value:"Contoh Data",id:"contoh-data-6",level:4},{value:"4xx Client Error",id:"4xx-client-error-2",level:4},{value:"Contoh Data",id:"contoh-data-7",level:4},{value:"5xx Server Error (Content-Type: text/plain)",id:"5xx-server-error-content-type-textplain-2",level:4},{value:"Contoh Data",id:"contoh-data-8",level:4},{value:"Contoh Pengunaan",id:"contoh-pengunaan-2",level:3},{value:"cURL (Windows)",id:"curl-windows-2",level:4},{value:"cURL (Linux)",id:"curl-linux-2",level:4},{value:"Postman",id:"postman-2",level:4}],k={toc:s};function u(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,n.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rest-api"},"ReST API"),(0,i.kt)("h1",{id:"1-autentikasi"},"1. Autentikasi"),(0,i.kt)("p",null,"Untuk melakukan transaksi data dari Master Patient Index (MPI), perlu dilakukan proses autentikasi terlebih dahulu agar mendapatkan akses yang tersedia. Autentikasi yang digunakan oleh MPI mengikuti standar protokol OAuth 2 dengan tipe pemberian akses (grant type) adalah client_credentials."),(0,i.kt)("p",null,"Autentikasi menggunakan grant type client_credentials adalah proses autentikasi yang dilakukan antara server to server, sehingga tidak ada proses registrasi atau log in di sini. Autentikasi dengan tipe tersebut hanya memerlukan data berupa client_id dan client_server, dimana nilai tersebut didapatkan ketika pihak yang ingin menggunakan atau mengakses MSI ini telah melakukan pengajuan, terdaftar, serta mendapatkan persetujuan dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia."),(0,i.kt)("h2",{id:"2-akses-token"},"2. Akses Token"),(0,i.kt)("h3",{id:"mendapatkan-token"},"Mendapatkan Token"),(0,i.kt)("p",null,"Melakukan proses autentikasi untuk mendapatkan akses token yang akan dipakai pada setiap request ReST API SehatMu selanjutnya."),(0,i.kt)(r.Z,{type:"error",mdxType:"Alert"},"Setiap terdapat simbol asterik ",(0,i.kt)("code",null,"*")," sebelum nama variabel atau parameter yang disebutkan, maka variabel atau parameter tersebut bersifat ",(0,i.kt)("strong",null,"WAJIB"),", ",(0,i.kt)("strong",null,"harus ada"),", atau ",(0,i.kt)("strong",null,"pasti selalu ada"),", contoh: ",(0,i.kt)("code",null,"*variabel")," ."),(0,i.kt)("h3",{id:"request"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-URL"},"https://api-SehatMu-dev.dto.kemkes.go.id/oauth2/v1/accesstoken\n")),(0,i.kt)("h3",{id:"http-verbmethod"},"HTTP Verb/Method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-URL"},"POST\n")),(0,i.kt)("h3",{id:"header"},"Header"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Nama Parameter"),(0,i.kt)("th",null,"Tipe Data"),(0,i.kt)("th",null,"Keterangan"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"*Content-Type")),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("em",null,"Mime type")," dari ",(0,i.kt)("em",null,"payload")," data yang akan dikirimkan di dalam ",(0,i.kt)("em",null,"body")," dalam bentuk ",(0,i.kt)("em",null,"URL Encoded"),", ",(0,i.kt)("strong",null,"WAJIB")," diisi dengan ",(0,i.kt)("code",null,"application/x-www-form-urlencoded")))))),(0,i.kt)("h3",{id:"query-string"},"Query String"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Nama Parameter"),(0,i.kt)("th",null,"Tipe Data"),(0,i.kt)("th",null,"Keterangan"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"*grant_type")),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Tipe permintaan akses (",(0,i.kt)("em",null,"grant"),") Oauth2, ",(0,i.kt)("strong",null,"WAJIB")," diisi dengan ",(0,i.kt)("code",null,"client_credentials"),"."))))),(0,i.kt)("h3",{id:"body-applicationx-www-form-urlencoded"},"Body (application/x-www-form-urlencoded)"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Nama Parameter"),(0,i.kt)("th",null,"Tipe Data"),(0,i.kt)("th",null,"Keterangan"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"*client_id")),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Nilai ",(0,i.kt)("em",null,"client ID")," yang telah didapatkan dari ",(0,i.kt)("strong",null,"Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia")," setelah melakukan pengajuan via ",(0,i.kt)("em",null,"email"),", ",(0,i.kt)("strong",null,"WAJIB")," diisi. Nilai ini bisa disamakan seperti ",(0,i.kt)("em",null,"username")," yang akan digunakan untuk akses aplikasi."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"*client_secret")),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,(0,i.kt)("p",null,"Nilai ",(0,i.kt)("em",null,"client secret")," yang telah didapatkan dari ",(0,i.kt)("strong",null,"Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia")," setelah melakukan pengajuan via ",(0,i.kt)("em",null,"email"),", ",(0,i.kt)("strong",null,"WAJIB")," diisi. Nilai ini bisa disamakan seperti kata sandi (",(0,i.kt)("em",null,"password"),") yang akan digunakan untuk akses aplikasi."))))),(0,i.kt)("h3",{id:"contoh-data"},"Contoh Data"),(0,i.kt)(r.Z,{type:"warning",mdxType:"Alert"},"Setiap nilai yang dicontohkan atau ditampilkan di dokumentasi ini adalah nilai yang tidak sebenarnya dan tidak dapat dipakai. Nilai-nilai tersebut hanya untuk keperluan contoh saja, tidak untuk dipakai"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"client_id: oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF\nclient_secret: tFb3el8LGjW08mWcGLyBDdiJp1hwymrAb9qrmhapuV7WcDhVq2u9n9diBVGfMRfD\n")),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"Hasil response, dengan HTTP Status Code berpola 2xx atau 4xx, yang dikembalikan dari server mempunyai parameter Content-Type dengan nilai application/json di salah satu parameter header-nya."),(0,i.kt)("h3",{id:"2xx-success"},"2xx Success"),(0,i.kt)("p",null,"Dari hasil response ini, PERLU disimpan nilai akses token yang didapat dari properti access_token, dimana tipe token (lihat properti token_type) tersebut adalah BearerToken. Nilai akses token tersebut WAJIB selalu digunakan sebagai nilai dari header Authorization: Bearer <access_token> saat melakukan request lainnya dari ReST API SehatMu."),(0,i.kt)("h3",{id:"contoh"},"Contoh"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "refresh_token_expires_in": "0",\n  "api_product_list": "[api-SehatMu-stg, api-dev, pl-api-SehatMu-stg, pl-api-dev]",\n  "api_product_list_json": [\n    "api-SehatMu-stg",\n    "api-dev",\n    "pl-api-SehatMu-stg",\n    "pl-api-dev"\n  ],\n  "organization_name": "ihs-prod-1",\n  "developer.email": "ihs.developer@dto.kemkes.go.id",\n  "token_type": "BearerToken",\n  "issued_at": "1671109805593",\n  "client_id": "oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF",\n  "access_token": "k8JIDROZHfXjmUcQJE62lMqQwlLU",\n  "application_name": "992291b8-a613-40aa-b27c-41e480c7585f",\n  "scope": "",\n  "expires_in": "3599",\n  "refresh_count": "0",\n  "status": "approved"\n}\n')),(0,i.kt)("h3",{id:"4xx-client-error"},"4xx Client Error"),(0,i.kt)("p",null,"Sistem akan mengembalikan pesan error bila client belum melakukan autentikasi, tidak memiliki akses, menggunakan HTTP method yang tidak tepat, atau mengirimkan data dengan format atau ketentuan yang tidak sesuai."),(0,i.kt)("h3",{id:"contoh-data-1"},"Contoh Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "invalid",\n      "code": "value",\n      "details": {\n        "text": "The user or system was not able to be authenticated (either client_id or client_secret combination is unacceptable)"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"5xx-server-error-content-type-textplain"},"5xx Server Error (Content-Type: text/plain)"),(0,i.kt)("p",null,"Sistem akan mengembalikan pesan error bila terjadi kesalahan pada sisi server saat memproses data yang telah dikirimkan."),(0,i.kt)("h3",{id:"contoh-data-2"},"Contoh Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-URL"},"Gateway Timeout\n")),(0,i.kt)("h3",{id:"contoh-pengunaan"},"Contoh Pengunaan"),(0,i.kt)("h3",{id:"curl-windows"},"cURL (Windows)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},'--insecure --location \\\n  --header "Content-Type: application/x-www-form-urlencoded" ^\n  --data-urlencode "client_id=oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF" ^\n  --data-urlencode "client_secret=tFb3el8LGjW08mWcGLyBDdiJp1hwymrAb9qrmhapuV7WcDhVq2u9n9diBVGfMRfD" ^\n  --request POST ^\n  "https://api-SehatMu-dev.dto.kemkes.go.id/oauth2/v1/accesstoken?grant_type=client_credentials"\n')),(0,i.kt)("h3",{id:"curl-linux"},"cURL (Linux)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"}," --insecure --location \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'client_id=oGt4MwoRp35O6Bg3LaWwXuIPQGj9FmXvKUGezvwXr4fuJicF' \\\n  --data-urlencode 'client_secret=tFb3el8LGjW08mWcGLyBDdiJp1hwymrAb9qrmhapuV7WcDhVq2u9n9diBVGfMRfD' \\\n  --request POST \\\n  'https://api-SehatMu-dev.dto.kemkes.go.id/oauth2/v1/accesstoken?grant_type=client_credentials'\n")),(0,i.kt)("h2",{id:"postman"},"Postman"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new request using ",(0,i.kt)("inlineCode",{parentName:"p"},"New > HTTP Request"),", or click ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," to create a new request tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the request URL:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"https://api-SehatMu-dev.dto.kemkes.go.id/oauth2/v1/accesstoken\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose the request method ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Params")," tab, under ",(0,i.kt)("inlineCode",{parentName:"p"},"Query Params"),":"),(0,i.kt)("p",{parentName:"li"},"a. Enter the key ",(0,i.kt)("inlineCode",{parentName:"p"},"grant_type"),"."),(0,i.kt)("p",{parentName:"li"},"b. Enter the value ",(0,i.kt)("inlineCode",{parentName:"p"},"client_credentials"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Body")," tab:"),(0,i.kt)("p",{parentName:"li"},"a. Select ",(0,i.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded"),"."),(0,i.kt)("p",{parentName:"li"},"b. Enter the key ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id"),"."),(0,i.kt)("p",{parentName:"li"},'c. Enter the value (your client ID obtained from "Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia") in the value field.'),(0,i.kt)("p",{parentName:"li"},"d. Enter the key ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret"),"."),(0,i.kt)("p",{parentName:"li"},'e. Enter the value (your client secret obtained from "Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia") in the value field.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Send")," button.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The response will be displayed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Response")," section."))),(0,i.kt)("h3",{id:"penambahan-data"},"Penambahan Data"),(0,i.kt)("p",null,"Fungsi dari ReST API ini adalah untuk melakukan penambahan data terkait resource Patient ke dalam Ekosistem SehatMu."),(0,i.kt)("h3",{id:"request-1"},"Request"),(0,i.kt)("h3",{id:"url"},"URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://api-SehatMu-dev.dto.kemkes.go.id/fhir-r4/v1/Patient:\n")),(0,i.kt)("h3",{id:"http-verbmethod-1"},"HTTP Verb/Method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST\n")),(0,i.kt)("h3",{id:"header-1"},"Header"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Nama Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipe Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Keterangan"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"*","Authorization"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Header ini WAJIB diisi dengan nilai sesuai format: ",(0,i.kt)("inlineCode",{parentName:"td"},"Bearer <access_token>"),". Nilai dari variabel ",(0,i.kt)("inlineCode",{parentName:"td"},"<access_token>")," didapatkan dari properti ",(0,i.kt)("inlineCode",{parentName:"td"},"access_token")," pada ",(0,i.kt)("inlineCode",{parentName:"td"},"object")," dari hasil response JSON setelah proses autentikasi.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"*","Content-Type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Mime type dari payload data yang akan dikirimkan di dalam body dalam format JSON, WAJIB diisi dengan ",(0,i.kt)("inlineCode",{parentName:"td"},"application/json"),".")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Body (application/json), dengan identifier NIK Pasien"),"."),(0,i.kt)("p",null,"Di bagian body ini payload JSON dari resource Patient sesuai standar FHIR dimasukkan. Terkait cara pengisian dari format FHIR tersebut di luar cakupan dari dokumentasi ini, silakan melihat pada dokumentasi terkait Petunjuk Teknis atau Playbook yang telah disediakan oleh tim SehatMu dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia."),(0,i.kt)("p",null,"Bentuk umum dari payload untuk penambahan data sebagai berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "Patient",\n  "identifier": [\n    {\n      "use": "official",\n      "system": "https://fhir.kemkes.go.id/id/nik",\n      "value": "3171012345678901"\n    }\n    //data.terkait.indentifier.lainnya\n  ]\n  //data.terkait.resource.Patient\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Body (application/json), dengan identifier NIK Ibu"),"\nDi bagian body ini payload JSON dari resource Patient dengan identifier NIK Ibu sesuai standar FHIR dimasukkan. Terkait cara pengisian dari format FHIR tersebut di luar cakupan dari dokumentasi ini, silakan melihat pada dokumentasi terkait Petunjuk Teknis atau Playbook yang telah disediakan oleh tim SehatMu dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia."),(0,i.kt)("p",null,"Bentuk umum dari payload untuk penambahan data sebagai berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "Patient",\n  "identifier": [\n    {\n      "use": "official",\n      "system": "https://fhir.kemkes.go.id/id/nik-ibu",\n      "value": "367400001111222"\n    }\n    //data.terkait.indentifier.lainnya\n  ]\n  //data.terkait.resource.Patient\n}\n')),(0,i.kt)("h3",{id:"response-1"},"Response"),(0,i.kt)("p",null,"Hasil response, dengan HTTP Status Code berpola 2xx atau 4xx, yang dikembalikan dari server mempunyai parameter Content-Type dengan nilai application/json di salah satu parameter header-nya."),(0,i.kt)("h3",{id:"2xx-success-1"},"2xx Success"),(0,i.kt)("p",null,"Dari hasil response ini, PERLU disimpan nilai UUID yang didapat dari properti id, dimana nilai tersebut kemungkinan akan digunakan dalam proses lainnya yang terkait resource Patient ini."),(0,i.kt)("h3",{id:"contoh-data-3"},"Contoh Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "Patient",\n  "id": "100000000001"\n  //data.terkait.resource.Patient\n}\n')),(0,i.kt)("h3",{id:"4xx-client-error-1"},"4xx Client Error"),(0,i.kt)("p",null,"Sistem akan mengembalikan pesan error bila client belum melakukan autentikasi, tidak memiliki akses, menggunakan HTTP method yang tidak tepat, atau mengirimkan data dengan format atau ketentuan lainnya yang tidak sesuai atau tidak dimengerti oleh sistem."),(0,i.kt)("h3",{id:"contoh-data-4"},"Contoh Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome"\n  //data.terkait.resource.OperationOutcome\n}\n')),(0,i.kt)("h3",{id:"5xx-server-error-content-type-textplain-1"},"5xx Server Error (Content-Type: text/plain)"),(0,i.kt)("p",null,"Sistem akan mengembalikan pesan error bila terjadi kesalahan pada sisi server saat memproses data yang telah dikirimkan."),(0,i.kt)("h3",{id:"contoh-data-5"},"Contoh Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-URL"},"Gateway Timeout\n")),(0,i.kt)("h3",{id:"contoh-pengunaan-1"},"Contoh Pengunaan"),(0,i.kt)("h3",{id:"curl-windows-1"},"cURL (Windows)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},' --insecure --location ^\n  --header "Authorization: Bearer k8JIDROZHfXjmUcQJE62lMqQwlLU" ^\n  --header "Content-Type: application/json" ^\n  --data-raw "{\n    \\"resourceType\\": \\"Patient\\",\n    ...\n  }" ^\n  --request POST ^\n  "https://api-SehatMu-dev.dto.kemkes.go.id/fhir-r4/v1/Patient"\n')),(0,i.kt)("h3",{id:"curl-linux-1"},"cURL (Linux)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},"  --insecure --location \\\n  --header 'Authorization: Bearer k8JIDROZHfXjmUcQJE62lMqQwlLU' \\\n  --header 'Content-Type: application/json' \\\n  --data-raw '{\n    \"resourceType\": \"Patient\",\n    ...\n  }' \\\n  --request POST \\\n  'https://api-SehatMu-dev.dto.kemkes.go.id/fhir-r4/v1/Patient'\n")),(0,i.kt)("h3",{id:"postman-1"},"Postman"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buat request baru menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"New > HTTP Request"),", atau klik ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," untuk buat tab request baru.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Masukkan request URL:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"https://api-SehatMu-dev.dto.kemkes.go.id/fhir-r4/v1/Patient:\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pilih request method ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada tab ",(0,i.kt)("strong",{parentName:"p"},"Auth"),":\na. Pada pilihan ",(0,i.kt)("strong",{parentName:"p"},"Type"),", pilih ",(0,i.kt)("inlineCode",{parentName:"p"},"Bearer Token"),".\nb. Masukkan nilai akses token yang sudah didapatkan pada saat autentikasi pada kotak inputan ",(0,i.kt)("strong",{parentName:"p"},"Token"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada tab ",(0,i.kt)("strong",{parentName:"p"},"Body"),":\na. Pilih ",(0,i.kt)("strong",{parentName:"p"},"raw"),".\nb. Kemudian disamping nilai tadi pilih ",(0,i.kt)("strong",{parentName:"p"},"JSON"),".\nc. Terakhir, masukkan resource JSON dari ",(0,i.kt)("strong",{parentName:"p"},"Patient")," yang akan diproses ke kotak inputan di bawah pilihan tadi. Contoh:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},"Unresolved include directive in modules/api-catalogue/partials/snippets/apidoc/file-example.adoc - include::api-catalogue:example$api/onboardings/patient/add/req.jsonc[]\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Klik tombol ",(0,i.kt)("strong",{parentName:"p"},"Send"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Hasil response akan ditampilkan di bagian ",(0,i.kt)("strong",{parentName:"p"},"Response"),"."))),(0,i.kt)("h2",{id:"pembaruan-sebagian-data"},"Pembaruan Sebagian Data"),(0,i.kt)("p",null,"Fungsi dari ReST API ini adalah untuk melakukan perubahan sebagian dari data terkait resource Patient ke dalam Ekosistem SehatMu, yang sebelumnya sudah ditambahkan dan tersedia di dalam Ekosistem SehatMu. Untuk melakukan perubahan sebagian (patching) data, PERLU ID dari resource Patient yang akan diubah dan juga nama/ID elemen dari Patient yang akan dilakukan perubahan."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Setiap terdapat simbol asterik ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," sebelum nama variabel atau parameter yang disebutkan, maka variabel atau parameter tersebut bersifat WAJIB, harus ada, atau pasti selalu ada, contoh: ",(0,i.kt)("inlineCode",{parentName:"p"},"*variabel"),".")),(0,i.kt)("h3",{id:"request-2"},"Request"),(0,i.kt)("h3",{id:"url-1"},"URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"https://api-SehatMu-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/:id\n")),(0,i.kt)("h3",{id:"http-verbmethod-2"},"HTTP Verb/Method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"PATCH\n")),(0,i.kt)("h4",{id:"parameter-path-uri"},"Parameter Path URI"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Nama Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipe Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Keterangan"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"*",":id"),(0,i.kt)("td",{parentName:"tr",align:null},"uuid"),(0,i.kt)("td",{parentName:"tr",align:null},"ID referensi dari resource Patient yang akan dilakukan proses pembaruan data (update).")))),(0,i.kt)("h4",{id:"header-2"},"Header"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Nama Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipe Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Keterangan"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"*","Authorization"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Header ini WAJIB diisi dengan nilai sesuai format: ",(0,i.kt)("inlineCode",{parentName:"td"},"Bearer <access_token>"),". Nilai dari variabel ",(0,i.kt)("inlineCode",{parentName:"td"},"<access_token>")," didapatkan dari properti ",(0,i.kt)("inlineCode",{parentName:"td"},"access_token")," pada ",(0,i.kt)("inlineCode",{parentName:"td"},"object")," dari hasil response JSON setelah proses autentikasi.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"*","Content-Type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Mime type dari payload data yang akan dikirimkan di dalam body dalam format JSON, WAJIB diisi dengan ",(0,i.kt)("inlineCode",{parentName:"td"},"application/json"),".")))),(0,i.kt)("p",null,"Body (application/json)\nDi bagian body ini payload JSON dari resource Patient sesuai standar FHIR dimasukkan. Terkait cara pengisian dari format FHIR tersebut di luar cakupan dari dokumentasi ini, silakan melihat pada dokumentasi terkait Petunjuk Teknis atau Playbook yang telah disediakan oleh tim SehatMu dari Pusat Data dan Teknologi Informasi - Digital Transformation Office (DTO) Kementerian Kesehatan Republik Indonesia."),(0,i.kt)("p",null,"Bentuk umum dari payload untuk patching sebagai berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "op": "<operasi>",\n    "path": "<element-path>",\n    "value": "<nilai-baru>"\n  }\n]\n')),(0,i.kt)("p",null,"Dari bentuk umum tersebut, nilai:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"<operasi>"),", saat ini hanya tersedia operasi ",(0,i.kt)("inlineCode",{parentName:"p"},"replace")," saja, yaitu untuk mengganti nilai properti/elemen dari resource Patient dengan ID terkait.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"<element-path>"),", nama properti/element dari resource Patient dengan ID terkait yang akan diganti nilainya, dengan format ",(0,i.kt)("inlineCode",{parentName:"p"},"/path/to/element"),". Simbol ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," sebagai pemisah dari nama properti/element yang dimaksud."),(0,i.kt)("p",{parentName:"li"},"Contoh, misalkan pada resource Patient ini ada properti/element dengan nama ",(0,i.kt)("inlineCode",{parentName:"p"},"language"),", yang dalam bentuk path FHIR ",(0,i.kt)("inlineCode",{parentName:"p"},"Patient.language"),", maka penulisan nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"<element-path>")," ini adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"/language"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"<nilai-baru>"),", diisi dengan nilai pengantinya."))),(0,i.kt)("p",null,"Sehingga contoh payload-nya sebagai berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "op": "replace",\n    "path": "/language",\n    "value": "id"\n  }\n]\n')),(0,i.kt)("h3",{id:"response-2"},"Response"),(0,i.kt)("p",null,"Hasil response, dengan HTTP Status Code berpola 2xx atau 4xx, yang dikembalikan dari server mempunyai parameter Content-Type dengan nilai application/json di salah satu parameter header-nya."),(0,i.kt)("h4",{id:"2xx-success-2"},"2xx Success"),(0,i.kt)("p",null,"Bila proses pembaruan data berhasil maka akan mengembalikan payload dari resource Patient yang sebelumnya telah dikirim."),(0,i.kt)("h4",{id:"contoh-data-6"},"Contoh Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "Patient",\n  "id": "100000000001"\n  //data.terkait.resource.Patient\n}\n')),(0,i.kt)("h4",{id:"4xx-client-error-2"},"4xx Client Error"),(0,i.kt)("p",null,"Sistem akan mengembalikan pesan error bila client belum melakukan autentikasi, tidak memiliki akses, menggunakan HTTP method yang tidak tepat, atau mengirimkan data dengan format, parameter, atau ketentuan lainnya yang tidak sesuai atau tidak dimengerti oleh sistem."),(0,i.kt)("h4",{id:"contoh-data-7"},"Contoh Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome"\n  //data.terkait.resource.OperationOutcome\n}\n')),(0,i.kt)("h4",{id:"5xx-server-error-content-type-textplain-2"},"5xx Server Error (Content-Type: text/plain)"),(0,i.kt)("p",null,"Sistem akan mengembalikan pesan error bila terjadi kesalahan pada sisi server saat memproses data yang telah dikirimkan."),(0,i.kt)("h4",{id:"contoh-data-8"},"Contoh Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Gateway Timeout\n")),(0,i.kt)("h3",{id:"contoh-pengunaan-2"},"Contoh Pengunaan"),(0,i.kt)("h4",{id:"curl-windows-2"},"cURL (Windows)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},' --insecure --location ^\n  --header "Authorization: Bearer k8JIDROZHfXjmUcQJE62lMqQwlLU" ^\n  --header "Content-Type: application/json" ^\n  --data-raw "[\n      {\n          \\"op\\" : \\"<operasi>\\",\n          \\"path\\" : \\"<element-path>\\",\n          \\"value\\" : \\"<nilai-baru>\\"\n      }\n  ]" ^\n  --request PATCH ^\n  "https://api-SehatMu-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/100000000001"\n')),(0,i.kt)("h4",{id:"curl-linux-2"},"cURL (Linux)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'--insecure --location \\\n  --header \'Authorization: Bearer k8JIDROZHfXjmUcQJE62lMqQwlLU\' \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'[\n    {\n      "op": "<operasi>",\n      "path": "<element-path>",\n      "value": "<nilai-baru>"\n    }\n  ]\' \\\n  --request PATCH \\\n  \'https://api-SehatMu-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/100000000001\'\n')),(0,i.kt)("h4",{id:"postman-2"},"Postman"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buat request baru menggunakan ",(0,i.kt)("strong",{parentName:"p"},"New")," > ",(0,i.kt)("strong",{parentName:"p"},"HTTP Request"),", atau klik ",(0,i.kt)("strong",{parentName:"p"},"+")," untuk buat tab request baru.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Masukkan request URL:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"https://api-SehatMu-dev.dto.kemkes.go.id/fhir-r4/v1/Patient/:id\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pilih request method ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada tab ",(0,i.kt)("strong",{parentName:"p"},"Auth"),":"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pada pilihan ",(0,i.kt)("strong",{parentName:"li"},"Type"),", pilih ",(0,i.kt)("inlineCode",{parentName:"li"},"Bearer Token"),"."),(0,i.kt)("li",{parentName:"ul"},"Masukkan nilai akses token yang sudah didapatkan pada saat autentikasi pada kotak inputan ",(0,i.kt)("strong",{parentName:"li"},"Token"),".")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Pada tab ",(0,i.kt)("strong",{parentName:"li"},"Params"),", di bagian ",(0,i.kt)("strong",{parentName:"li"},"Path Variables"),":")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Isi nilai parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," dengan ID dari resource Patient yang akan diperbarui (update).")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Pada tab ",(0,i.kt)("strong",{parentName:"li"},"Body"),":")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pilih ",(0,i.kt)("strong",{parentName:"p"},"raw"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kemudian, disamping nilai tadi, pilih ",(0,i.kt)("strong",{parentName:"p"},"JSON"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Terakhir, masukkan payload JSON untuk melakukan perubahan ke kotak masukan di bawah pilihan tadi. Contoh:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "op": "replace",\n    "path": "/language",\n    "value": "id"\n  }\n]\n')))),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Klik tombol ",(0,i.kt)("strong",{parentName:"p"},"Send"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Hasil response akan ditampilkan di bagian ",(0,i.kt)("strong",{parentName:"p"},"Response"),"."))))}u.isMDXComponent=!0}}]);