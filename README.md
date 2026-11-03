# Tsalits Sabila Fatah — Luxury Editorial Portfolio

Sebuah website personal portfolio dengan mengadaptasi **visual direction, layout philosophy, dan user experience** dari **Gucci Osteria Florence** (https://www.gucciosteria.com/en/florence).

Didesain untuk merepresentasikan identitas **Tsalits Sabila Fatah**, seorang Creative Technologist dan mahasiswa tingkat akhir S1 Informatika di **Telkom University Surabaya** (IPK 3.84 / Cum Laude Track), yang bergerak di titik temu antara **Frontend Architecture**, **UI/UX Craftsmanship**, dan **Artificial Intelligence Research**.

---

## 1. Konsep & Filosofi Desain

- **Luxury Editorial Design:** Nuansa majalah dan buku monograf eksklusif, bukan template portofolio developer pada umumnya.
- **Minimalist but Expressive:** Ruang bernapas (*whitespace*) yang luas dipadukan dengan tipografi ekspresif dan tata letak asimetris.
- **Contemporary Art Direction:** Komposisi foto berbingkai museum, stempel kuratorial, nomor monograf (*N° 01*, *N° 02*), serta aksen angka Romawi (*I, II, III, IV*).
- **Immersive Visual Storytelling:** Penyajian proyek terpilih (*Selected Works*) dengan visual besar berselang-seling (*alternating layout*) serta modul interaktif *Monograph Case Study*.

---

## 2. Identitas Visual

### Palet Warna
- **Warm Ivory / Off-White (`#FAF7F2` & `#FFFDF9`):** Latar belakang utama yang hangat dan elegan.
- **Deep Charcoal / Black (`#191817` & `#2C2A28`):** Teks kontras tinggi dan bingkai monograf.
- **Muted Burgundy (`#6B1D2F`):** Warna aksen khas editorial mewah untuk detail penting, stempel, dan penekanan.
- **Warm Beige (`#EBE3D5` & `#F4EFE6`):** Warna pendukung untuk seksi selang-seling dan aksen halus.

### Tipografi
- **Headings & Display:** *Cormorant Garamond* & *Playfair Display* (Serif kontras tinggi dengan aksen miring puitis).
- **Body & Metadata:** *Plus Jakarta Sans* (Sans-serif kontemporer dengan *tracking* longgar pada teks navigasi dan label).

---

## 3. Struktur Website

1. **Navigation Bar:** Minimalis dengan monogram personal `TSF`, navigasi lengkap (About, Expertise, Projects, Experience, Leadership, Skills, Contact), dan jam langsung kota Surabaya (*WIB / UTC+7*).
2. **Hero Section:** Tipografi *oversized*, komposisi foto potret Tsalits berbingkai editorial museum, stempel koordinat geografis (*7° 15′ S, 112° 45′ E*), statistik prestasi, dan indikator scroll minimalis.
3. **About Section:** Narasi personal dan filosofis, foto potret sekunder, tanda tangan autentik (*signature.png*), dan rincian latar belakang akademis Telkom University.
4. **Expertise Pillars (Chapter II):** Layout kurasi editorial (bukan kumpulan kartu generik) mencakup *Frontend Development*, *UI/UX Design*, *Artificial Intelligence*, dan *Web Systems & QA*.
5. **Selected Works (Chapter III):** Showcase visual skala besar dengan layout bergantian asimetris. Dilengkapi tombol *Read Monograph & Case Study* yang membuka dialog interaktif berisi *Overview*, *The Challenge*, *Architectural Solution*, *Impact*, dan galeri pendukung.
6. **Chronicle: Experience & Education (Chapter IV):** Garis waktu editorial mencakup *cmlabs*, *Bandung Techno Park WRAP*, asisten praktikum basis data, serta kurikulum inti S1 Informatika.
7. **Governance & Leadership (Chapter V):** Rekapitulasi peran kepemimpinan di *BEM KEMA Telkom University*, kepanitiaan kaderisasi *Diklat PKKMB & MC*, *Pekan Ilmiah Mahasiswa (PIM)*, dan *Volunteer BEM Mengajar*.
8. **Skills & Accreditations (Chapter VI):** Matriks kompetensi teknis dan katalog 5 sertifikasi autentik terverifikasi (Azure Generative AI, API Automation QA, QA Full Mastery, QA Intro, Data Science Professional).
9. **Closing Monograph & Contact (Chapter VII):** Penutup dramatis bertema gelap arang dengan tipografi raksasa *"Let's Create Something Meaningful"*, tombol *Copy Email* dengan notifikasi toast instan, WhatsApp, LinkedIn, dan GitHub.
10. **Footer:** Monogram resmi `TSF`, hak cipta 2026, dan tombol halus *Ascend to Top*.

---

## 4. Cara Menjalankan

### Cara 1: Langsung di Browser (Tanpa Instalasi)
Cukup buka file `index.html` menggunakan browser modern (Chrome, Edge, Firefox, Safari).

### Cara 2: Menggunakan Vite / Live Server
1. Jalankan terminal di folder `PORTOFOLIO`:
   ```bash
   npx vite
   ```
2. Buka URL lokal yang muncul (misalnya `http://localhost:5173`).

---

## 5. Struktur Berkas

```
PORTOFOLIO/
├── index.html                   # Halaman utama portofolio
├── package.json                 # Konfigurasi npm / vite
├── README.md                    # Dokumentasi lengkap
├── assets/                      # Asset gambar autentik
│   ├── foto.png                 # Foto potret utama Tsalits
│   ├── portrait_salis.png       # Foto potret sekunder
│   ├── signature.png            # Tanda tangan asli
│   └── projects/                # Visual & mockup proyek
│       ├── cohive.jpg
│       ├── cohive_home.png
│       ├── cohive_figma.png
│       ├── plagiarism_checker.png
│       ├── plagiarism_login.png
│       ├── takur.png
│       ├── ai_mockup.svg
│       ├── promusic_mockup.svg
│       └── brainybuddies_mockup.svg
├── css/
│   └── style.css                # CSS editorial, kursor mewah, efek grain
└── js/
    ├── data.js                  # Seluruh data autentik Tsalits
    └── app.js                   # Interaktivitas, observer, modal monograf
```

