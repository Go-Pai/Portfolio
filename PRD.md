# PRD: Neobrutalism Web Portfolio (Blue Edition)

## 1. Arsitektur & Teknologi
- **Tipe:** Single-Page Application (SPA) dengan navigasi scroll ke setiap section.
- **Framework Utama:** Astro (untuk performa super cepat dan HTML statis).
- **Styling:** Tailwind CSS.
- **Interaktivitas (Opsional):** React (Hanya di-inject menggunakan Astro Islands jika ada bagian kompleks, seperti marquee atau efek hover khusus).
- **Struktur Folder (Rekomendasi):**
  ```text
  src/
  ├── pages/
  │   └── index.astro (File utama tempat semua komponen dipanggil)
  ├── components/
  │   ├── Navbar.astro
  │   ├── Hero.astro
  │   ├── About.astro
  │   ├── Experience.astro
  │   ├── Education.astro
  │   ├── Projects.astro
  │   ├── TechStack.astro
  │   └── Contact.astro
  ```

## 2. Sistem Desain & Visual
- **Latar Belakang (Background):** Warna dasar putih keabuan (off-white / `#F5F5F5`).
- **Pola Latar (Pattern):** Motif grid (kotak-kotak buku tulis) menggunakan garis tipis berwarna biru cerah (electric blue). Pola ini akan memenuhi seluruh layar di belakang konten.
- **Border & Bayangan (Neobrutalism):** Garis hitam pekat (solid black) berukuran 3px - 4px untuk semua elemen pembungkus (foto, kartu proyek, tombol). Drop-shadow berupa kotak hitam solid tanpa efek blur yang seolah bergeser ke kanan bawah.
- **Tipografi:** Font sans-serif yang tegas dan tebal (seperti Space Grotesk atau Archivo).

## 3. Susunan Halaman (Dari Atas ke Bawah)

### A. Navbar (Sticky)
- Menempel di atas dengan background putih solid dan border bawah hitam tebal agar terpisah dari pola grid di belakangnya.
- **Menu:** About, Experience, Education, Projects, Contact.

### B. Hero Section ("Hello, I'm...")
- **Layout:** 2 Kolom.
- **Kiri:** Teks sapaan berukuran masif dan headline utama (misalnya: fokus di Frontend & DevOps).
- **Kanan (Baru):** Foto Anda (bisa foto gaya kasual/profesional) yang dibingkai dengan kotak bergaris hitam tebal dan bayangan solid ala neobrutalism. Boleh ditambahkan elemen stiker atau lakban digital di sudut fotonya.

### C. About Section
- **Layout:** 2 Kolom.
- **Kiri:** Foto profil atau foto candid Anda yang sedang bekerja, dibingkai ala neobrutalism (bisa dibuat berbeda bentuk dari foto Hero, misalnya kotak memanjang atau lingkaran bergerigi).
- **Kanan:** Teks perkenalan. Menjelaskan asal mula Anda dari Rejang Lebong, pendekatan logis dan terstruktur Anda terhadap pengembangan software, serta kenyamanan Anda dalam lingkungan kerja yang memiliki kolaborasi dan arahan teknis yang jelas.

### D. Experience Section
- **Layout:** Vertical Timeline (Garis waktu dengan "tangkai" membelah di tengah).
- **Visual:** Garis lurus memanjang ke bawah di tengah layar.
- **Konten:** Kartu pengalaman kerja muncul bergantian. Pengalaman pertama di kanan atas (tangkai mengarah ke kiri), pengalaman kedua di kiri bawah (tangkai mengarah ke kanan). Bentuk kartunya tetap kotak kaku neobrutalism.

### E. Education Section
- **Layout:** Grid Horizontal (2 Kolom berdampingan rata sejajar).
- **Visual:** Dua kartu besar bersebelahan. Sebelah kiri untuk informasi SMA, sebelah kanan untuk informasi Kuliah. Tidak digabung dengan Experience, sehingga alur bacanya menjadi lebih rapi.

### F. Projects Section
- **Limitasi:** Menampilkan tepat 3 Proyek terbaik.
- **Struktur di dalam Kartu Proyek (Card):**
  - **Gambar (Thumbnail):** Tangkapan layar proyek di bagian paling atas kartu (dipisahkan dengan garis hitam tebal dari teks di bawahnya).
  - **Penjelasan:** Judul proyek dan deskripsi singkat (misalnya: Konfigurasi Home Server menggunakan Mini PC Dell i5, atau Sistem Deployment Website via GitHub).
  - **Kolom Framework:** Deretan kotak-kotak kecil berisi nama teknologi yang dipakai di proyek tersebut.
  - **Tombol Akses:** Tombol neobrutalist di bagian bawah kartu untuk menuju "Live Demo" atau "GitHub Repo".

### G. Tech Stack Section
- **Layout:** Infinite Marquee (Berjalan terus menerus dari kanan ke kiri melintasi pola grid biru).
- **Konten:** Deretan logo framework dan tools dalam bentuk kotak tebal. Sesuai daftar Anda: HTML, CSS, Tailwind, JS, Astro, React, Prisma, dan Git.

### H. Contact Section & Footer
- Formulir kontak (Nama, Email, Pesan) dengan input field bergaris tebal.
- Tombol "Send" full-width yang warnanya mungkin bisa biru atau kuning cerah agar kontras dengan latar belakang.
- **Footer:** Sederhana di paling bawah, mencantumkan hak cipta dan tautan sosial media.
