# GradeUp — Landing Page Kalkulator Nilai Mahasiswa

Project tugas individu Landing Page dengan Input, Output, dan Backend Logic sederhana.

## Fitur
- Landing page modern dan responsif
- Input nama mahasiswa
- Input nilai Tugas, UTS, dan UAS
- Backend Node.js + Express
- Perhitungan nilai akhir:
  - Tugas = 30%
  - UTS = 30%
  - UAS = 40%
- Grade A sampai E
- Status LULUS / TIDAK LULUS
- Validasi input
- Hasil ditampilkan tanpa reload halaman

## Cara Menjalankan

Pastikan Node.js sudah terinstall.

```bash
npm install
npm start
```

Kemudian buka:

http://localhost:3000

## Struktur Folder

```text
landing-page-student-grade/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── package.json
├── server.js
└── README.md
```

## Backend Logic

Endpoint:

`POST /api/calculate`

Contoh data yang dikirim:

```json
{
  "name": "Alfaridho",
  "assignment": 90,
  "uts": 80,
  "uas": 85
}
```

Nilai akhir dihitung menggunakan:

`(Tugas × 30%) + (UTS × 30%) + (UAS × 40%)`

Contoh:

`(90 × 0.30) + (80 × 0.30) + (85 × 0.40) = 85`

Hasil:

- Nilai Akhir: 85
- Grade: A
- Status: LULUS

## Upload ke GitHub

Buat repository baru di GitHub, lalu jalankan:

```bash
git init
git add .
git commit -m "Initial project GradeUp"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPOSITORY.git
git push -u origin main
```

Ganti `USERNAME/NAMA-REPOSITORY` sesuai repository GitHub kamu.
