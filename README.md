# Tsalits Sabila Fatah — Dark Editorial Portfolio

Sebuah website personal portfolio dengan mengadaptasi **visual direction, layout philosophy, dan user experience** dari **Gucci Osteria Florence** (https://www.gucciosteria.com/en/florence), diolah menjadi tema gelap yang bersih dan profesional.

Didesain untuk merepresentasikan identitas **Tsalits Sabila Fatah**, lulusan S1 Informatika **Telkom University Surabaya** (IPK 3.84 / 4.00), dengan fokus pada **Software Quality Assurance** dan **System Analysis**, berlatar belakang **Frontend Development** dan **UI/UX Design**.

---

## 1. Konsep & Filosofi Desain

- **Dark Editorial Design:** Nuansa majalah dan buku monograf dalam tampilan gelap yang elegan, bukan template portofolio developer pada umumnya.
- **Minimalist but Expressive:** Ruang bernapas (*whitespace*) yang luas dipadukan dengan tipografi serif ekspresif, aksen miring (*italic*), dan tata letak yang tenang.
- **Contemporary Art Direction:** Lapisan *film grain*, kursor kustom, nomor *watermark* pada kartu (*01*, *02*, *03*), serta kartu dengan efek *hover lift* dan *glow* biru halus.
- **Immersive Ambient Background:** Latar konstelasi interaktif (*canvas*) dan cahaya *aurora* lembut pada bagian hero, serta animasi *reveal* saat halaman digulir.
- **Recruiter-Friendly:** Informasi inti (peran, pengalaman, proyek, kontak) bisa ditemukan dalam beberapa klik, dengan status *Open to Work* yang terlihat jelas.

---

## 2. Identitas Visual

### Palet Warna
- **Deep Black (`#050505`):** Latar belakang utama.
- **Surface Dark (`#0D0F14` & `#141A26`):** Permukaan kartu dan section pendukung.
- **Navy / Biru Tua (`#1E3A8A` & `#172554`):** Tombol utama, border aksen, *glow*, dan latar badge.
- **Blue Accent (`#60A5FA`):** Biru terang khusus untuk teks aksen, tautan, dan ikon kecil agar kontras tetap terbaca.
- **White (`#FFFFFF`) & Muted Gray (`#A1A8B8`):** Teks utama dan teks sekunder.

### Tipografi
- **Headings & Display:** *Cormorant Garamond* & *Playfair Display* (Serif kontras tinggi dengan aksen miring puitis).
- **Body & Metadata:** *Plus Jakarta Sans* (Sans-serif kontemporer dengan *tracking* longgar pada teks navigasi dan label).

---

## 3. Struktur Website

1. **Navigation Bar:** Minimalis dengan menu Home, About, Experience, Project, Organization, Skills, dan Contact. Nama *TSALITS* muncul saat pengguna menggulir meninggalkan bagian hero. Di perangkat mobile tersedia menu layar penuh (*fullscreen overlay*).
2. **Hero Section:** Tata letak terpusat tanpa foto, dengan badge *Open to Work & Opportunities*, nama berukuran besar dengan aksen miring *"I'm"*, headline **QA & System Analysis | Frontend & UI/UX Background**, deskripsi singkat, ikon LinkedIn, GitHub, dan Email, serta tombol *Resume / About*.
3. **Overview (3 Kartu):** Tiga kartu mandiri bernomor *watermark* yang menuju halaman rinci:
   - **Work Experience (01):** Pengalaman kerja di cmlabs, inkubasi startup Bandung Techno Park, dan asisten praktikum laboratorium basis data.
   - **Project Experience (02):** Proyek pengujian perangkat lunak, analisis dan perancangan sistem, aplikasi web, perancangan antarmuka UI/UX, serta riset kecerdasan buatan.
   - **Organizational & Committee Experience (03):** Pengalaman di BEM Telkom University, tata kelola anggaran kepanitiaan, dan Master of Ceremony (MC).
4. **Skills & Tools:** Tiga baris *marquee* yang berjalan terus: (1) frontend dan desain, (2) data, QA, dan perancangan sistem (Python, SQL, Software QA, UML, Laravel), serta (3) keahlian analisis dan soft skill (pengujian perangkat lunak, analisis kebutuhan, perancangan sistem, komunikasi, kerja tim, manajemen waktu, pemecahan masalah).
5. **Contact:** Penutup bertema gelap dengan tipografi besar *"Let's Create Something Meaningful"*, badge *Open for Hiring & Collaborations*, dan tiga tombol kontak langsung (Email, LinkedIn, Instagram).
6. **Footer:** Hak cipta 2026 dan tombol *Ascend to Top*.
7. **Halaman About (`about.html`):** Profil dan latar belakang.
8. **Halaman Experience (`experience.html`):** Rincian pengalaman kerja.
9. **Halaman Project (`projects.html`):** Rincian proyek.
10. **Halaman Organization (`organization.html`):** Rincian pengalaman organisasi dan kepanitiaan.

---

## 4. Cara Menjalankan

Halaman memuat `js/app.js` sebagai *ES module*, sehingga situs **harus dijalankan lewat server lokal** dan tidak bisa hanya dibuka dengan klik ganda pada `index.html`.

### Cara 1: Menggunakan Vite (Disarankan)
Prasyarat: Node.js versi 20 atau lebih baru.

1. Jalankan terminal di folder proyek (`portofolio-tsalits`):
   ```bash
   npm install
   npm run dev
   ```
2. Buka URL lokal yang muncul (biasanya `http://localhost:5173`).

### Cara 2: Build & Preview Versi Produksi
```bash
npm run build      # membuat hasil build di folder dist/
npm run preview    # menjalankan hasil build secara lokal
```

---

## 5. Deployment & Alur Branch

Situs di-deploy melalui **Netlify** yang terhubung ke repositori GitHub.

- **Branch `main`:** Pengembangan. Semua perubahan dikerjakan dan diuji di sini.
- **Branch `production`:** Rilis. Netlify mempublikasikan branch ini sebagai situs publik.
- **Pengaturan build Netlify:** *Build command* `npm run build`, *Publish directory* `dist` (tersimpan di `netlify.toml`).

Alur merilis perubahan:
```bash
git checkout main
git add .
git commit -m "Deskripsi perubahan"
git push

# setelah yakin, rilis ke publik
git checkout production
git merge main
git push
git checkout main
```

---

## 6. Struktur Berkas

```
portofolio-tsalits/
├── index.html                   # Halaman utama portofolio
├── about.html                   # Halaman About
├── experience.html              # Halaman Work Experience
├── projects.html                # Halaman Project Experience
├── organization.html            # Halaman Organizational & Committee Experience
├── package.json                 # Konfigurasi npm / vite
├── netlify.toml                 # Konfigurasi build & deploy Netlify
├── README.md                    # Dokumentasi lengkap
├── assets/                      # Aset gambar dan visual
├── Dokumentasi/                 # Dokumen pendukung
├── css/
│   └── style.css                # CSS editorial, kursor kustom, efek grain, marquee
└── js/
    └── app.js                   # Interaktivitas, navigasi, animasi reveal, canvas hero
```