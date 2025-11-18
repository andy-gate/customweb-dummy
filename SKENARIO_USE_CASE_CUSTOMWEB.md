# SKENARIO USE CASE - CUSTOMWEB SPAN

## 1. DASHBOARD

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Melihat ringkasan statistik dan informasi keseluruhan sistem CustomWeb SPAN

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Sistem sudah memiliki data transaksi dan aktivitas

**Pasca Kondisi:**
- Dashboard berhasil ditampilkan dengan semua statistik dan grafik
- User dapat melihat informasi real-time tentang status sistem

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengakses halaman Dashboard | 2. Menampilkan halaman Dashboard dengan statistik: Total Satker Aktif, Proses Revisi, Error/Reject, Total DIPA, Total Pagu, Penerimaan Hari Ini, Validasi Berhasil, Data Posting |
| 3. Melihat grafik trend dan distribusi status | 4. Menampilkan chart trend penerimaan ADK (7 hari terakhir) dan chart distribusi status revisi |
| 5. Melihat aktivitas terbaru dan top kementerian | 6. Menampilkan list aktivitas terbaru dan tabel top 5 kementerian aktif |
| 7. Melihat progress keseluruhan | 8. Menampilkan progress bar untuk Penerimaan ADK, Validasi, dan Posting |

---

## 2. MONITORING STATUS ADK (Monitor Upload)

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Memantau status pengunggahan dan validasi data ADK dari SATKER

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data ADK sudah ada di sistem (sudah di-upload atau diterima dari SAKTI)

**Pasca Kondisi:**
- Status monitoring ADK berhasil ditampilkan sesuai filter
- User dapat melihat detail validasi dan error jika ada
- Laporan monitoring dapat diekspor atau dicetak

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Monitoring Status ADK" | 2. Menampilkan halaman monitoring dengan filter pencarian dan grid data |
| 3. Mengatur filter pencarian (tanggal upload dari/sampai, jenis data, phase code, SATKER, status validasi) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Cari Data" | 6. Mengambil data sesuai filter dari database |
| 7. Melihat hasil pencarian | 8. Menampilkan list data di grid dengan kolom: No, SATKER, Nama SATKER, No. Revisi, XML Parse, Digital Stamp, Internal Valid, COA Valid, Submit Status, Aksi |
| 9. Mengklik tombol "Detail" pada salah satu data | 10. Menampilkan detail lengkap status validasi untuk SATKER tersebut |
| 11. Mengklik tombol "Lihat Error" pada data yang gagal | 12. Menampilkan modal dengan detail error validasi (kode error, deskripsi, lokasi) |
| 13. Mengklik tombol "Export Excel" | 14. Mengekspor data hasil monitoring ke file Excel |
| 15. Mengklik tombol "Print Report" | 16. Mencetak laporan monitoring upload |

---

## 3. PENERIMAAN ADK DARI SAKTI

**Aktor:** User (Admin, Staf Eselon I KL)

**Tujuan:** Menerima data ADK dari sistem SAKTI melalui integrasi API

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Koneksi ke SAKTI API sudah dikonfigurasi
- User memiliki akses untuk request data dari SAKTI

**Pasca Kondisi:**
- Data ADK berhasil diterima dari SAKTI
- Data ADK tersimpan di sistem CustomWeb SPAN
- Status koneksi SAKTI dapat dilihat dan diuji

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Penerimaan ADK" | 2. Menampilkan halaman penerimaan ADK dengan status koneksi SAKTI |
| 3. Melihat status koneksi SAKTI | 4. Menampilkan status koneksi (Connected/Disconnected), API Endpoint, Last Sync |
| 5. Mengklik tombol "Test Koneksi" | 6. Melakukan test koneksi ke SAKTI API dan menampilkan hasil |
| 7. Memilih tipe data (Initial/Revision) | 8. Menampilkan form request data sesuai tipe yang dipilih |
| 9. Memilih Kementerian/Lembaga, Unit, dan SATKER | 10. Menampilkan dropdown yang sudah terisi |
| 11. Mengklik tombol "Request Data" | 12. Mengirim request ke SAKTI API untuk mengambil data ADK |
| 13. Menunggu proses request | 14. Menampilkan progress bar dan status proses request |
| 15. Melihat hasil request | 15. Menampilkan notifikasi sukses/gagal dan data ADK yang diterima |
| 17. Melihat daftar data ADK yang sudah diterima | 18. Menampilkan tabel list data ADK dengan informasi: No, SATKER, Tipe Data, Tanggal Terima, Status, Aksi |
| 19. Mengklik tombol "Sync Manual" | 20. Melakukan sinkronisasi manual dengan SAKTI dan menampilkan data terbaru |

---

## 4. MONITORING

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Memantau berbagai aspek sistem (upload, validasi, posting, dll) secara real-time

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data transaksi sudah ada di sistem

**Pasca Kondisi:**
- Data monitoring berhasil ditampilkan sesuai filter
- User dapat melihat status berbagai proses di sistem
- Data monitoring dapat diekspor atau di-refresh

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Monitoring" | 2. Menampilkan halaman monitoring dengan berbagai tab dan filter |
| 3. Memilih tab monitoring (Upload, Validasi, Posting, dll) | 4. Menampilkan konten sesuai tab yang dipilih |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Melihat hasil monitoring | 10. Menampilkan data dalam bentuk grid/tabel sesuai tab yang dipilih |
| 11. Mengklik tombol "Export" | 12. Mengekspor data monitoring ke file Excel |
| 13. Mengklik tombol "Refresh" | 14. Memperbarui data monitoring dengan data terbaru |

---

## 5. CREATE DIPA INDUK

**Aktor:** User (Admin, Echelon IV DJA)

**Tujuan:** Membuat DIPA Induk untuk SATKER tertentu

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data RKAKL sudah ada dan tervalidasi untuk SATKER yang akan dibuat DIPA-nya
- User memiliki akses untuk membuat DIPA

**Pasca Kondisi:**
- DIPA Induk berhasil dibuat dan tersimpan di database
- DIPA Induk dapat di-preview dan dicetak
- DIPA Induk siap digunakan untuk proses selanjutnya

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Monitoring Admin" -> "Create DIPA Induk" | 2. Menampilkan halaman Create DIPA Induk dengan form input |
| 3. Memilih Tahun Anggaran | 4. Menampilkan dropdown tahun anggaran |
| 5. Memilih Kementerian/Lembaga | 6. Menampilkan dropdown kementerian |
| 7. Memilih Unit dan SATKER | 8. Menampilkan dropdown unit dan SATKER sesuai pilihan sebelumnya |
| 9. Mengisi data DIPA Induk (nomor DIPA, tanggal, dll) | 10. Menampilkan form yang sudah terisi |
| 11. Mengklik tombol "Generate DIPA" | 12. Memproses pembuatan DIPA Induk berdasarkan data yang diinput |
| 13. Melihat preview DIPA Induk | 14. Menampilkan preview DIPA Induk yang akan dibuat |
| 15. Mengklik tombol "Simpan" | 16. Menyimpan DIPA Induk ke database dan menampilkan notifikasi sukses |
| 17. Mengklik tombol "Print" | 18. Mencetak DIPA Induk yang sudah dibuat |

---

## 6. CREATE DIPA PETIKAN

**Aktor:** User (Admin, Echelon IV DJA)

**Tujuan:** Membuat DIPA Petikan dari DIPA Induk untuk program/kegiatan tertentu

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- DIPA Induk sudah ada di sistem
- Program/kegiatan sudah terdaftar di DIPA Induk

**Pasca Kondisi:**
- DIPA Petikan berhasil dibuat dan tersimpan di database
- DIPA Petikan dapat di-preview dan dicetak
- DIPA Petikan siap digunakan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Monitoring Admin" -> "Create DIPA Petikan" | 2. Menampilkan halaman Create DIPA Petikan dengan form input |
| 3. Memilih DIPA Induk | 4. Menampilkan dropdown/list DIPA Induk yang tersedia |
| 5. Memilih program/kegiatan yang akan dibuat petikannya | 6. Menampilkan list program/kegiatan dari DIPA Induk yang dipilih |
| 7. Mengisi data DIPA Petikan | 8. Menampilkan form yang sudah terisi |
| 9. Mengklik tombol "Generate DIPA Petikan" | 10. Memproses pembuatan DIPA Petikan berdasarkan DIPA Induk dan program/kegiatan yang dipilih |
| 11. Melihat preview DIPA Petikan | 12. Menampilkan preview DIPA Petikan yang akan dibuat |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan DIPA Petikan ke database dan menampilkan notifikasi sukses |
| 15. Mengklik tombol "Print" | 16. Mencetak DIPA Petikan yang sudah dibuat |

---

## 7. POSTING INTERFACE

**Aktor:** User (Admin, Echelon IV DJA)

**Tujuan:** Melakukan posting data yang sudah tervalidasi ke sistem EBS

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data sudah tervalidasi dan siap untuk diposting
- Koneksi ke sistem EBS sudah tersedia

**Pasca Kondisi:**
- Data berhasil diposting ke sistem EBS
- Status posting tersimpan di database
- Data yang sudah diposting tidak dapat diubah lagi

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Monitoring Admin" -> "Posting Interface" | 2. Menampilkan halaman Posting Interface dengan daftar data yang siap diposting |
| 3. Melihat daftar data yang siap diposting | 4. Menampilkan tabel dengan kolom: No, SATKER, Jenis Data, Tanggal Validasi, Status, Aksi |
| 5. Memilih data yang akan diposting (checkbox) | 6. Menandai data yang dipilih |
| 7. Mengklik tombol "Posting ke EBS" | 8. Memproses posting data ke sistem EBS |
| 9. Melihat progress posting | 10. Menampilkan progress bar dan status posting untuk setiap data |
| 11. Melihat hasil posting | 12. Menampilkan notifikasi sukses/gagal untuk setiap data yang diposting |
| 13. Mengklik tombol "Refresh Status" | 14. Memperbarui status posting dari sistem EBS |

---

## 8. EMAIL NOTIFICATION

**Aktor:** User (Admin)

**Tujuan:** Mengelola template email notifikasi yang digunakan sistem

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin untuk mengelola notifikasi

**Pasca Kondisi:**
- Template notifikasi berhasil dibuat/diubah dan tersimpan di database
- Template dapat digunakan untuk mengirim notifikasi
- Template dapat diuji dengan test send

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Monitoring Admin" -> "Email Notification" | 2. Menampilkan halaman Email Notification dengan daftar template notifikasi |
| 3. Melihat daftar template notifikasi | 4. Menampilkan tabel dengan kolom: No, Jenis Notifikasi, Subject, Status, Aksi |
| 5. Mengklik tombol "Tambah Template" | 6. Menampilkan form untuk membuat template notifikasi baru |
| 7. Mengisi data template (jenis, subject, body email) | 8. Menampilkan form yang sudah terisi |
| 9. Mengklik tombol "Simpan" | 10. Menyimpan template notifikasi ke database |
| 11. Mengklik tombol "Edit" pada salah satu template | 12. Menampilkan form edit dengan data template yang sudah ada |
| 13. Mengubah isi template | 14. Menampilkan form yang sudah diubah |
| 15. Mengklik tombol "Simpan" | 16. Menyimpan perubahan template ke database |
| 17. Mengklik tombol "Test Send" | 18. Mengirim email test dengan template yang dipilih |

---

## 9. RKA SATKER

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Mencetak atau mengekspor laporan RKA SATKER

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data RKAKL sudah ada di sistem untuk SATKER yang akan dicetak

**Pasca Kondisi:**
- Laporan RKA SATKER berhasil di-generate dalam format yang dipilih (Excel/PDF)
- Laporan dapat dicetak atau disimpan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "RKAKL Reports" -> "RKA SATKER" | 2. Menampilkan halaman RKA SATKER dengan filter pencarian |
| 3. Mengatur filter (Tahun Anggaran, Kementerian, Unit, SATKER) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Search" | 6. Mengambil data RKA SATKER sesuai filter dari database |
| 7. Melihat hasil pencarian | 8. Menampilkan data RKA SATKER dalam bentuk tabel |
| 9. Mengklik tombol "Export Excel" | 10. Mengekspor data RKA SATKER ke file Excel |
| 11. Mengklik tombol "Print" | 12. Mencetak laporan RKA SATKER |

---

## 10. LAMPIRAN KERTAS KERJA

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Mencetak atau mengekspor laporan Lampiran Kertas Kerja

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data RKAKL sudah ada di sistem untuk SATKER yang akan dicetak

**Pasca Kondisi:**
- Laporan Lampiran Kertas Kerja berhasil di-generate dalam format yang dipilih (Excel/PDF)
- Laporan dapat dicetak atau disimpan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "RKAKL Reports" -> "Lampiran Kertas Kerja" | 2. Menampilkan halaman Lampiran Kertas Kerja dengan filter pencarian |
| 3. Mengatur filter (Tahun Anggaran, Kementerian, Unit, SATKER) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Search" | 6. Mengambil data Lampiran Kertas Kerja sesuai filter dari database |
| 7. Melihat hasil pencarian | 8. Menampilkan data Lampiran Kertas Kerja dalam bentuk tabel |
| 9. Mengklik tombol "Export Excel" | 10. Mengekspor data Lampiran Kertas Kerja ke file Excel |
| 11. Mengklik tombol "Print" | 12. Mencetak laporan Lampiran Kertas Kerja |

---

## 11. DHP

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Mencetak atau mengekspor laporan DHP (Daftar Harga Pokok)

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data RKAKL sudah ada di sistem untuk SATKER yang akan dicetak

**Pasca Kondisi:**
- Laporan DHP berhasil di-generate dalam format yang dipilih (Excel/PDF)
- Laporan dapat dicetak atau disimpan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "RKAKL Reports" -> "DHP" | 2. Menampilkan halaman DHP dengan filter pencarian |
| 3. Mengatur filter (Tahun Anggaran, Kementerian, Unit, SATKER) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Search" | 6. Mengambil data DHP sesuai filter dari database |
| 7. Melihat hasil pencarian | 8. Menampilkan data DHP dalam bentuk tabel |
| 9. Mengklik tombol "Export Excel" | 10. Mengekspor data DHP ke file Excel |
| 11. Mengklik tombol "Print" | 12. Mencetak laporan DHP |

---

## 12. LAPORAN HIMPUNAN

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Mencetak atau mengekspor laporan Himpunan

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data RKAKL sudah ada di sistem untuk SATKER yang akan dicetak

**Pasca Kondisi:**
- Laporan Himpunan berhasil di-generate dalam format yang dipilih (Excel/PDF)
- Laporan dapat dicetak atau disimpan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "RKAKL Reports" -> "Laporan Himpunan" | 2. Menampilkan halaman Laporan Himpunan dengan filter pencarian |
| 3. Mengatur filter (Tahun Anggaran, Kementerian, Unit, SATKER) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Search" | 6. Mengambil data Laporan Himpunan sesuai filter dari database |
| 7. Melihat hasil pencarian | 8. Menampilkan data Laporan Himpunan dalam bentuk tabel |
| 9. Mengklik tombol "Export Excel" | 10. Mengekspor data Laporan Himpunan ke file Excel |
| 11. Mengklik tombol "Print" | 12. Mencetak laporan Laporan Himpunan |

---

## 13. LAPORAN KEPPRES

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Mencetak atau mengekspor laporan Keppres

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data RKAKL sudah ada di sistem untuk SATKER yang akan dicetak

**Pasca Kondisi:**
- Laporan Keppres berhasil di-generate dalam format yang dipilih (Excel/PDF)
- Laporan dapat dicetak atau disimpan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "RKAKL Reports" -> "Laporan Keppres" | 2. Menampilkan halaman Laporan Keppres dengan filter pencarian |
| 3. Mengatur filter (Tahun Anggaran, Kementerian, Unit, SATKER) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Search" | 6. Mengambil data Laporan Keppres sesuai filter dari database |
| 7. Melihat hasil pencarian | 8. Menampilkan data Laporan Keppres dalam bentuk tabel |
| 9. Mengklik tombol "Export Excel" | 10. Mengekspor data Laporan Keppres ke file Excel |
| 11. Mengklik tombol "Print" | 12. Mencetak laporan Laporan Keppres |

---

## 14. PRINTING DIPA INDUK

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Mencetak DIPA Induk yang sudah dibuat

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- DIPA Induk sudah ada di sistem untuk SATKER yang akan dicetak

**Pasca Kondisi:**
- DIPA Induk berhasil di-generate dalam format PDF
- DIPA Induk dapat dicetak atau disimpan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "DIPA Reports" -> "Printing DIPA Induk" | 2. Menampilkan halaman Printing DIPA Induk dengan filter pencarian |
| 3. Mengatur filter (Tahun Anggaran, Kementerian, Unit, SATKER, Nomor DIPA) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Search" | 6. Mengambil data DIPA Induk sesuai filter dari database |
| 7. Melihat hasil pencarian | 8. Menampilkan list DIPA Induk yang sesuai dengan filter |
| 9. Memilih DIPA Induk yang akan dicetak | 10. Menandai DIPA Induk yang dipilih |
| 11. Mengklik tombol "Preview" | 12. Menampilkan preview DIPA Induk sebelum dicetak |
| 13. Mengklik tombol "Print" | 14. Mencetak DIPA Induk yang dipilih |

---

## 15. PRINTING DIPA PETIKAN

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Mencetak DIPA Petikan yang sudah dibuat

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- DIPA Petikan sudah ada di sistem untuk SATKER yang akan dicetak

**Pasca Kondisi:**
- DIPA Petikan berhasil di-generate dalam format PDF
- DIPA Petikan dapat dicetak atau disimpan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "DIPA Reports" -> "Printing DIPA Petikan" | 2. Menampilkan halaman Printing DIPA Petikan dengan filter pencarian |
| 3. Mengatur filter (Tahun Anggaran, Kementerian, Unit, SATKER, Nomor DIPA) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Search" | 6. Mengambil data DIPA Petikan sesuai filter dari database |
| 7. Melihat hasil pencarian | 8. Menampilkan list DIPA Petikan yang sesuai dengan filter |
| 9. Memilih DIPA Petikan yang akan dicetak | 10. Menandai DIPA Petikan yang dipilih |
| 11. Mengklik tombol "Preview" | 12. Menampilkan preview DIPA Petikan sebelum dicetak |
| 13. Mengklik tombol "Print" | 14. Mencetak DIPA Petikan yang dipilih |

---

## 16. MONITORING PAGU

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Memantau penggunaan PAGU anggaran per SATKER

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data anggaran dan penggunaan PAGU sudah ada di sistem

**Pasca Kondisi:**
- Data monitoring PAGU berhasil ditampilkan sesuai filter
- User dapat melihat distribusi dan penggunaan PAGU
- Laporan monitoring PAGU dapat diekspor

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Internal Reports" -> "Monitoring PAGU" | 2. Menampilkan halaman Monitoring PAGU dengan filter pencarian |
| 3. Mengatur filter (Tahun Anggaran, Kementerian, Unit, SATKER) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Search" | 6. Mengambil data monitoring PAGU sesuai filter dari database |
| 7. Melihat hasil pencarian | 8. Menampilkan data monitoring PAGU dalam bentuk tabel dengan informasi: Total PAGU, PAGU Terpakai, Sisa PAGU, Persentase |
| 9. Melihat grafik distribusi PAGU | 10. Menampilkan chart distribusi PAGU per kementerian/unit |
| 11. Mengklik tombol "Export Excel" | 12. Mengekspor data monitoring PAGU ke file Excel |

---

## 17. MATRIKS PERUBAHAN

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Melihat perbandingan perubahan anggaran sebelum dan sesudah revisi

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data revisi anggaran sudah ada di sistem

**Pasca Kondisi:**
- Matriks perubahan berhasil ditampilkan sesuai filter
- User dapat melihat perbandingan sebelum dan sesudah perubahan
- Laporan matriks perubahan dapat dicetak atau diekspor

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Internal Reports" -> "Matriks Perubahan" | 2. Menampilkan halaman Matriks Perubahan dengan filter pencarian |
| 3. Mengatur filter (Tahun Anggaran, Kementerian, Unit, SATKER, Jenis Perubahan) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Search" | 6. Mengambil data matriks perubahan sesuai filter dari database |
| 7. Melihat hasil pencarian | 8. Menampilkan matriks perubahan dalam bentuk tabel dengan perbandingan sebelum dan sesudah perubahan |
| 9. Mengklik tombol "Export Excel" | 10. Mengekspor data matriks perubahan ke file Excel |
| 11. Mengklik tombol "Print" | 12. Mencetak laporan matriks perubahan |

---

## 18. LAPORAN REVISI

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Mencetak laporan Revisi

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data RKAKL DIPA sudah ada di sistem untuk Satker yang akan dicetak

**Pasca Kondisi:**
- Laporan Revisi berhasil di-generate dalam format PDF
- Laporan dapat dicetak atau disimpan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Internal Reports" -> "Laporan Revisi" | 2. Menampilkan halaman Laporan Revisi dengan filter pencarian |
| 3. Mengatur filter (Tahun Anggaran, Kementerian, Unit, SATKER, Jenis Revisi, Status) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Search" | 6. Mengambil data laporan revisi sesuai filter dari database |
| 7. Melihat hasil pencarian | 8. Menampilkan data laporan revisi dalam bentuk tabel dengan informasi: No Revisi, SATKER, Jenis Revisi, Tanggal, Status, Aksi |
| 9. Mengklik tombol "Detail" pada salah satu revisi | 10. Menampilkan detail lengkap revisi tersebut |
| 11. Mengklik tombol "Export Excel" | 12. Mengekspor data laporan revisi ke file Excel |
| 13. Mengklik tombol "Print" | 14. Mencetak laporan revisi |

---

## 19. COPY DATA TAHUN DEPAN

**Aktor:** User (Admin)

**Tujuan:** Menyalin data dari tahun anggaran tertentu ke tahun anggaran berikutnya

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin
- Data tahun sumber sudah ada di sistem
- Tahun tujuan sudah dibuat di sistem

**Pasca Kondisi:**
- Data berhasil di-copy dari tahun sumber ke tahun tujuan
- Data yang di-copy tersimpan di database tahun tujuan
- Summary hasil copy ditampilkan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Basic Information" -> "Copy Data ke Tahun Depan" | 2. Menampilkan halaman Copy Data ke Tahun Depan dengan form input |
| 3. Memilih Tahun Sumber | 4. Menampilkan dropdown tahun sumber |
| 5. Memilih Tahun Tujuan | 6. Menampilkan dropdown tahun tujuan |
| 7. Memilih jenis data yang akan di-copy (SATKER, Program, Kegiatan, dll) | 8. Menampilkan checkbox untuk memilih jenis data |
| 9. Mengklik tombol "Preview" | 10. Menampilkan preview data yang akan di-copy |
| 11. Mengklik tombol "Copy Data" | 12. Memproses copy data dari tahun sumber ke tahun tujuan |
| 13. Melihat progress copy data | 14. Menampilkan progress bar dan status copy untuk setiap jenis data |
| 15. Melihat hasil copy data | 16. Menampilkan notifikasi sukses/gagal dan summary data yang berhasil di-copy |

---

## 20. MANAGE BUDGETING PERIOD

**Aktor:** User (Admin)

**Tujuan:** Mengelola periode budgeting (Tahun Anggaran) di sistem

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Period budgeting berhasil dibuat/diubah dan tersimpan di database
- Period dapat diaktifkan atau ditutup
- Hanya satu period yang dapat aktif dalam satu waktu

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Basic Information" -> "Manage Budgeting period" | 2. Menampilkan halaman Manage Budgeting Period dengan daftar period |
| 3. Melihat daftar budgeting period | 4. Menampilkan tabel dengan kolom: No, Tahun Anggaran, Tanggal Mulai, Tanggal Selesai, Status, Keterangan, Aksi |
| 5. Mengklik tombol "Tambah Period Baru" | 6. Menampilkan form untuk menambah period baru |
| 7. Mengisi data period (Tahun Anggaran, Tanggal Mulai, Tanggal Selesai, Status, Keterangan) | 8. Menampilkan form yang sudah terisi |
| 9. Mengklik tombol "Simpan" | 10. Menyimpan period baru ke database dan menampilkan notifikasi sukses |
| 11. Mengklik tombol "Edit" pada salah satu period | 12. Menampilkan form edit dengan data period yang sudah ada |
| 13. Mengubah data period | 14. Menampilkan form yang sudah diubah |
| 15. Mengklik tombol "Simpan" | 16. Menyimpan perubahan period ke database |
| 17. Memilih period dan mengklik tombol "Aktifkan Period" | 18. Mengaktifkan period yang dipilih dan menonaktifkan period yang sedang aktif |
| 19. Memilih period dan mengklik tombol "Tutup Period" | 20. Menutup period yang dipilih |

---

## 21. MANAGE BUDGET SATKER LIST

**Aktor:** User (Admin)

**Tujuan:** Mengelola daftar SATKER yang akan digunakan dalam proses budgeting

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data SATKER berhasil ditambah/diubah dan tersimpan di database
- Data SATKER dapat di-import dari Excel atau di-sync dari SPAN
- Daftar SATKER dapat diekspor ke Excel

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Basic Information" -> "Manage Budget Satker List" | 2. Menampilkan halaman Manage Budget Satker List dengan daftar SATKER |
| 3. Melihat daftar SATKER | 4. Menampilkan tabel dengan kolom: No, Kode SATKER, Nama SATKER, Kementerian, Unit, Status, Aksi |
| 5. Mengatur filter pencarian (Kementerian, Unit, Kode SATKER, Status) | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data SATKER sesuai filter dari database |
| 9. Mengklik tombol "Tambah SATKER Baru" | 10. Menampilkan form untuk menambah SATKER baru |
| 11. Mengisi data SATKER (Kode, Nama, Kementerian, Unit, Alamat, Status) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan SATKER baru ke database dan menampilkan notifikasi sukses |
| 15. Mengklik tombol "Edit" pada salah satu SATKER | 16. Menampilkan form edit dengan data SATKER yang sudah ada |
| 17. Mengubah data SATKER | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan SATKER ke database |
| 21. Mengklik tombol "Import dari Excel" | 22. Membuka dialog untuk upload file Excel dan memproses import data SATKER |
| 23. Mengklik tombol "Export ke Excel" | 24. Mengekspor daftar SATKER ke file Excel |
| 25. Mengklik tombol "Sync dari SPAN" | 26. Melakukan sinkronisasi data SATKER dari sistem SPAN |

---

## 22. MANAGING NOTIFICATION CONTENTS

**Aktor:** User (Admin)

**Tujuan:** Mengelola template konten notifikasi email yang digunakan sistem

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Template notifikasi berhasil dibuat/diubah dan tersimpan di database
- Template dapat diuji dengan test send
- Template dapat digunakan untuk mengirim notifikasi

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Basic Information" -> "Managing Notification contents" | 2. Menampilkan halaman Managing Notification Contents dengan daftar template notifikasi |
| 3. Melihat daftar template notifikasi | 4. Menampilkan tabel dengan kolom: No, Jenis Notifikasi, Subject, Status, Aksi |
| 5. Mengklik tombol "Tambah Template" | 6. Menampilkan form untuk membuat template notifikasi baru |
| 7. Mengisi data template (Jenis, Subject, Body Email) | 8. Menampilkan form yang sudah terisi |
| 9. Mengklik tombol "Simpan" | 10. Menyimpan template notifikasi ke database |
| 11. Mengklik tombol "Edit" pada salah satu template | 12. Menampilkan form edit dengan data template yang sudah ada |
| 13. Mengubah isi template | 14. Menampilkan form yang sudah diubah |
| 15. Mengklik tombol "Simpan" | 16. Menyimpan perubahan template ke database |
| 17. Mengklik tombol "Preview" | 18. Menampilkan preview email dengan template yang dipilih |
| 19. Mengklik tombol "Test Send" | 20. Mengirim email test dengan template yang dipilih |

---

## 23. MANAGING DISCLAIMER

**Aktor:** User (Admin)

**Tujuan:** Mengelola disclaimer yang ditampilkan di sistem

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Disclaimer berhasil dibuat/diubah dan tersimpan di database
- Disclaimer dapat diaktifkan atau dinonaktifkan
- Disclaimer dapat di-preview

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Basic Information" -> "Managing Disclaimer" | 2. Menampilkan halaman Managing Disclaimer dengan daftar disclaimer |
| 3. Melihat daftar disclaimer | 4. Menampilkan tabel dengan kolom: No, Jenis Disclaimer, Isi, Status, Aksi |
| 5. Mengklik tombol "Tambah Disclaimer" | 6. Menampilkan form untuk membuat disclaimer baru |
| 7. Mengisi data disclaimer (Jenis, Isi, Status) | 8. Menampilkan form yang sudah terisi |
| 9. Mengklik tombol "Simpan" | 10. Menyimpan disclaimer ke database |
| 11. Mengklik tombol "Edit" pada salah satu disclaimer | 12. Menampilkan form edit dengan data disclaimer yang sudah ada |
| 13. Mengubah isi disclaimer | 14. Menampilkan form yang sudah diubah |
| 15. Mengklik tombol "Simpan" | 16. Menyimpan perubahan disclaimer ke database |
| 17. Mengklik tombol "Preview" | 18. Menampilkan preview disclaimer yang dipilih |

---

## 24. MANAGING JENIS REVISI

**Aktor:** User (Admin)

**Tujuan:** Mengelola jenis-jenis revisi yang dapat dilakukan di sistem

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Jenis revisi berhasil ditambah/diubah dan tersimpan di database
- Jenis revisi dapat digunakan dalam proses revisi anggaran

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Basic Information" -> "Managing Jenis Revisi" | 2. Menampilkan halaman Managing Jenis Revisi dengan daftar jenis revisi |
| 3. Melihat daftar jenis revisi | 4. Menampilkan tabel dengan kolom: No, Kode Revisi, Nama Revisi, Keterangan, Status, Aksi |
| 5. Mengklik tombol "Tambah Jenis Revisi" | 6. Menampilkan form untuk menambah jenis revisi baru |
| 7. Mengisi data jenis revisi (Kode, Nama, Keterangan, Status) | 8. Menampilkan form yang sudah terisi |
| 9. Mengklik tombol "Simpan" | 10. Menyimpan jenis revisi ke database |
| 11. Mengklik tombol "Edit" pada salah satu jenis revisi | 12. Menampilkan form edit dengan data jenis revisi yang sudah ada |
| 13. Mengubah data jenis revisi | 14. Menampilkan form yang sudah diubah |
| 15. Mengklik tombol "Simpan" | 16. Menyimpan perubahan jenis revisi ke database |

---

## 25. UPLOAD BAPPENAS DATA

**Aktor:** User (Admin)

**Tujuan:** Mengunggah data referensi dari BAPPENAS ke sistem

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin
- File Excel data BAPPENAS sudah disiapkan sesuai format

**Pasca Kondisi:**
- Data BAPPENAS berhasil di-upload dan tersimpan di database
- Data yang error ditampilkan untuk diperbaiki
- Data yang valid dapat digunakan sebagai referensi

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Upload BAPPENAS Data" | 2. Menampilkan halaman Upload BAPPENAS Data dengan form upload |
| 3. Memilih jenis data yang akan di-upload | 4. Menampilkan dropdown jenis data (Program, Kegiatan, Output, dll) |
| 5. Memilih file Excel yang akan di-upload | 6. Menampilkan nama file yang dipilih |
| 7. Mengklik tombol "Upload" | 8. Memproses upload file Excel |
| 9. Melihat progress upload | 10. Menampilkan progress bar dan status upload |
| 11. Melihat hasil validasi data | 12. Menampilkan hasil validasi data (sukses/error) |
| 13. Melihat data yang berhasil di-upload | 14. Menampilkan tabel data yang berhasil di-upload |
| 15. Melihat data yang error | 16. Menampilkan tabel data yang error beserta keterangan errornya |
| 17. Mengklik tombol "Download Template" | 18. Mengunduh template Excel untuk upload data |

---

## 26. JENIS BELANJA/AKUN

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi jenis belanja dan akun

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data jenis belanja/akun berhasil ditambah/diubah dan tersimpan di database
- Data dapat di-import dari Excel atau diekspor ke Excel
- Data dapat digunakan sebagai referensi dalam proses budgeting

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Atribut Anggaran" -> "Jenis Belanja/Akun" | 2. Menampilkan halaman Jenis Belanja/Akun dengan daftar data |
| 3. Melihat daftar jenis belanja/akun | 4. Menampilkan tabel dengan kolom: No, Kode Akun, Nama Akun, Jenis Belanja, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Data" | 10. Menampilkan form untuk menambah data baru |
| 11. Mengisi data (Kode Akun, Nama Akun, Jenis Belanja) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan data ke database |
| 15. Mengklik tombol "Edit" pada salah satu data | 16. Menampilkan form edit dengan data yang sudah ada |
| 17. Mengubah data | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan data ke database |
| 21. Mengklik tombol "Import Excel" | 22. Membuka dialog untuk upload file Excel dan memproses import data |
| 23. Mengklik tombol "Export Excel" | 24. Mengekspor data ke file Excel |

---

## 27. BEBAN/SUMBER DANA

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi beban dan sumber dana

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data beban/sumber dana berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Atribut Anggaran" -> "Beban/Sumber Dana" | 2. Menampilkan halaman Beban/Sumber Dana dengan daftar data |
| 3. Melihat daftar beban/sumber dana | 4. Menampilkan tabel dengan kolom: No, Kode, Nama, Jenis, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Data" | 10. Menampilkan form untuk menambah data baru |
| 11. Mengisi data (Kode, Nama, Jenis) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan data ke database |
| 15. Mengklik tombol "Edit" pada salah satu data | 16. Menampilkan form edit dengan data yang sudah ada |
| 17. Mengubah data | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan data ke database |

---

## 28. FUNGSI

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi fungsi anggaran

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data fungsi berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Atribut Anggaran" -> "Fungsi" | 2. Menampilkan halaman Fungsi dengan daftar data |
| 3. Melihat daftar fungsi | 4. Menampilkan tabel dengan kolom: No, Kode Fungsi, Nama Fungsi, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Data" | 10. Menampilkan form untuk menambah data baru |
| 11. Mengisi data (Kode Fungsi, Nama Fungsi) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan data ke database |
| 15. Mengklik tombol "Edit" pada salah satu data | 16. Menampilkan form edit dengan data yang sudah ada |
| 17. Mengubah data | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan data ke database |

---

## 29. PROGRAM/KEGIATAN

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi program dan kegiatan

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data program/kegiatan berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Atribut Anggaran" -> "Program/Kegiatan" | 2. Menampilkan halaman Program/Kegiatan dengan daftar data |
| 3. Melihat daftar program/kegiatan | 4. Menampilkan tabel dengan kolom: No, Kode Program, Nama Program, Kode Kegiatan, Nama Kegiatan, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Data" | 10. Menampilkan form untuk menambah data baru |
| 11. Mengisi data (Kode Program, Nama Program, Kode Kegiatan, Nama Kegiatan) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan data ke database |
| 15. Mengklik tombol "Edit" pada salah satu data | 16. Menampilkan form edit dengan data yang sudah ada |
| 17. Mengubah data | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan data ke database |

---

## 30. ATRIBUT ANGGARAN LAIN-LAIN

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi atribut anggaran lainnya

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data atribut anggaran berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Atribut Anggaran" -> "Lain-lain" | 2. Menampilkan halaman Atribut Anggaran Lain-lain dengan daftar data |
| 3. Melihat daftar atribut anggaran | 4. Menampilkan tabel dengan kolom: No, Kode, Nama, Keterangan, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Data" | 10. Menampilkan form untuk menambah data baru |
| 11. Mengisi data (Kode, Nama, Keterangan) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan data ke database |
| 15. Mengklik tombol "Edit" pada salah satu data | 16. Menampilkan form edit dengan data yang sudah ada |
| 17. Mengubah data | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan data ke database |

---

## 31. KL/UNIT

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi Kementerian/Lembaga dan Unit

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data KL/Unit berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Struktur Organisasi" -> "KL/Unit" | 2. Menampilkan halaman KL/Unit dengan daftar data |
| 3. Melihat daftar KL/Unit | 4. Menampilkan tabel dengan kolom: No, Kode KL, Nama KL, Kode Unit, Nama Unit, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Data" | 10. Menampilkan form untuk menambah data baru |
| 11. Mengisi data (Kode KL, Nama KL, Kode Unit, Nama Unit) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan data ke database |
| 15. Mengklik tombol "Edit" pada salah satu data | 16. Menampilkan form edit dengan data yang sudah ada |
| 17. Mengubah data | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan data ke database |

---

## 32. LOKASI/KPPN

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi lokasi dan KPPN

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data lokasi/KPPN berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Struktur Organisasi" -> "Lokasi/KPPN" | 2. Menampilkan halaman Lokasi/KPPN dengan daftar data |
| 3. Melihat daftar lokasi/KPPN | 4. Menampilkan tabel dengan kolom: No, Kode Lokasi, Nama Lokasi, Kode KPPN, Nama KPPN, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Data" | 10. Menampilkan form untuk menambah data baru |
| 11. Mengisi data (Kode Lokasi, Nama Lokasi, Kode KPPN, Nama KPPN) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan data ke database |
| 15. Mengklik tombol "Edit" pada salah satu data | 16. Menampilkan form edit dengan data yang sudah ada |
| 17. Mengubah data | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan data ke database |

---

## 33. PENANGGUNG JAWAB KEGIATAN

**Aktor:** User (Admin)

**Tujuan:** Mengelola data penanggung jawab kegiatan

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data penanggung jawab kegiatan berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Struktur Organisasi" -> "Penanggung Jawab Kegiatan" | 2. Menampilkan halaman Penanggung Jawab Kegiatan dengan daftar data |
| 3. Melihat daftar penanggung jawab kegiatan | 4. Menampilkan tabel dengan kolom: No, NIP, Nama, Jabatan, Unit, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Data" | 10. Menampilkan form untuk menambah data baru |
| 11. Mengisi data (NIP, Nama, Jabatan, Unit) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan data ke database |
| 15. Mengklik tombol "Edit" pada salah satu data | 16. Menampilkan form edit dengan data yang sudah ada |
| 17. Mengubah data | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan data ke database |

---

## 34. PENANDA TANGAN

**Aktor:** User (Admin)

**Tujuan:** Mengelola data penanda tangan dokumen

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data penanda tangan berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses pembuatan dokumen

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Struktur Organisasi" -> "Penanda Tangan" | 2. Menampilkan halaman Penanda Tangan dengan daftar data |
| 3. Melihat daftar penanda tangan | 4. Menampilkan tabel dengan kolom: No, NIP, Nama, Jabatan, Unit, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Data" | 10. Menampilkan form untuk menambah data baru |
| 11. Mengisi data (NIP, Nama, Jabatan, Unit) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan data ke database |
| 15. Mengklik tombol "Edit" pada salah satu data | 16. Menampilkan form edit dengan data yang sudah ada |
| 17. Mengubah data | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan data ke database |

---

## 35. XML DOWNLOAD

**Aktor:** User (Admin, Staf Eselon I KL, Echelon IV DJA)

**Tujuan:** Mengunduh data dalam format XML

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- Data yang akan di-download sudah ada di sistem

**Pasca Kondisi:**
- File XML berhasil di-generate dan diunduh
- File XML dapat digunakan untuk keperluan integrasi atau backup

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "XML Download" | 2. Menampilkan halaman XML Download dengan form filter |
| 3. Mengatur filter (Tahun Anggaran, Kementerian, Unit, SATKER, Jenis Data) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Search" | 6. Mengambil data sesuai filter dari database |
| 7. Melihat daftar data yang tersedia | 8. Menampilkan tabel dengan kolom: No, SATKER, Jenis Data, Tanggal, Status, Aksi |
| 9. Memilih data yang akan di-download | 10. Menandai data yang dipilih |
| 11. Mengklik tombol "Download XML" | 12. Memproses generate file XML dan mengunduh file tersebut |
| 13. Mengklik tombol "Download All" | 14. Mengunduh semua data yang sesuai filter dalam format ZIP |

---

## 36. MANAGE COMMON CODE

**Aktor:** User (Admin)

**Tujuan:** Mengelola common code yang digunakan di sistem

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Common code berhasil ditambah/diubah dan tersimpan di database
- Common code dapat digunakan di seluruh sistem

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Common code" | 2. Menampilkan halaman Manage Common Code dengan daftar common code |
| 3. Melihat daftar common code | 4. Menampilkan tabel dengan kolom: No, Kode, Nama, Keterangan, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Data" | 10. Menampilkan form untuk menambah data baru |
| 11. Mengisi data (Kode, Nama, Keterangan) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan data ke database |
| 15. Mengklik tombol "Edit" pada salah satu data | 16. Menampilkan form edit dengan data yang sudah ada |
| 17. Mengubah data | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan data ke database |

---

## 37. MANAGE PROGRAM

**Aktor:** User (Admin)

**Tujuan:** Mengelola program aplikasi di sistem

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Program berhasil ditambah/diubah dan tersimpan di database
- Program dapat digunakan untuk mengatur akses dan menu

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Application" -> "Manage Program" | 2. Menampilkan halaman Manage Program dengan daftar program |
| 3. Melihat daftar program | 4. Menampilkan tabel dengan kolom: No, Kode Program, Nama Program, Keterangan, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Program" | 10. Menampilkan form untuk menambah program baru |
| 11. Mengisi data (Kode Program, Nama Program, Keterangan) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan program ke database |
| 15. Mengklik tombol "Edit" pada salah satu program | 16. Menampilkan form edit dengan data program yang sudah ada |
| 17. Mengubah data program | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan program ke database |

---

## 38. MANAGE MENU

**Aktor:** User (Admin)

**Tujuan:** Mengelola menu aplikasi di sistem

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Menu berhasil ditambah/diubah dan tersimpan di database
- Menu dapat digunakan untuk navigasi dan pengaturan akses

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Application" -> "Manage Menu" | 2. Menampilkan halaman Manage Menu dengan daftar menu |
| 3. Melihat daftar menu | 4. Menampilkan tabel dengan kolom: No, Kode Menu, Nama Menu, Parent Menu, URL, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Menu" | 10. Menampilkan form untuk menambah menu baru |
| 11. Mengisi data (Kode Menu, Nama Menu, Parent Menu, URL) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan menu ke database |
| 15. Mengklik tombol "Edit" pada salah satu menu | 16. Menampilkan form edit dengan data menu yang sudah ada |
| 17. Mengubah data menu | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan menu ke database |

---

## 39. BATCH MONITORING

**Aktor:** User (Admin)

**Tujuan:** Memantau status batch job yang berjalan di sistem

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin
- Batch job sudah ada atau sedang berjalan di sistem

**Pasca Kondisi:**
- Status batch job berhasil ditampilkan
- Batch job dapat di-rerun atau dihentikan jika diperlukan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Application" -> "Batch Monitoring" | 2. Menampilkan halaman Batch Monitoring dengan daftar batch job |
| 3. Melihat daftar batch job | 4. Menampilkan tabel dengan kolom: No, Nama Batch, Status, Waktu Mulai, Waktu Selesai, Durasi, Aksi |
| 5. Mengatur filter pencarian (Status, Tanggal) | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Melihat detail batch job | 10. Menampilkan detail batch job yang dipilih (log, error, dll) |
| 11. Mengklik tombol "Rerun" pada batch yang gagal | 12. Menjalankan ulang batch job yang gagal |
| 13. Mengklik tombol "Stop" pada batch yang sedang berjalan | 14. Menghentikan batch job yang sedang berjalan |

---

## 40. MANAGE JOB POSITION

**Aktor:** User (Admin)

**Tujuan:** Mengelola data jabatan yang digunakan untuk otorisasi

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data jabatan berhasil ditambah/diubah dan tersimpan di database
- Jabatan dapat digunakan untuk mengatur akses user

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Authority" -> "Manage Job position" | 2. Menampilkan halaman Manage Job Position dengan daftar jabatan |
| 3. Melihat daftar jabatan | 4. Menampilkan tabel dengan kolom: No, Kode Jabatan, Nama Jabatan, Level, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Jabatan" | 10. Menampilkan form untuk menambah jabatan baru |
| 11. Mengisi data (Kode Jabatan, Nama Jabatan, Level) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan jabatan ke database |
| 15. Mengklik tombol "Edit" pada salah satu jabatan | 16. Menampilkan form edit dengan data jabatan yang sudah ada |
| 17. Mengubah data jabatan | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan jabatan ke database |

---

## 41. MANAGE AUTHORITY CODE

**Aktor:** User (Admin)

**Tujuan:** Mengelola kode otorisasi yang digunakan untuk mengatur akses

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Authority code berhasil ditambah/diubah dan tersimpan di database
- Authority code dapat digunakan untuk mengatur akses user ke menu

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Authority" -> "Manage Authority code" | 2. Menampilkan halaman Manage Authority Code dengan daftar authority code |
| 3. Melihat daftar authority code | 4. Menampilkan tabel dengan kolom: No, Kode Authority, Nama Authority, Level, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Authority Code" | 10. Menampilkan form untuk menambah authority code baru |
| 11. Mengisi data (Kode Authority, Nama Authority, Level) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan authority code ke database |
| 15. Mengklik tombol "Edit" pada salah satu authority code | 16. Menampilkan form edit dengan data authority code yang sudah ada |
| 17. Mengubah data authority code | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan authority code ke database |

---

## 42. MANAGE AUTHORITY OVER MENU

**Aktor:** User (Admin)

**Tujuan:** Mengatur otorisasi akses menu berdasarkan authority code

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin
- Authority code dan menu sudah ada di sistem

**Pasca Kondisi:**
- Authority menu berhasil ditambah/diubah dan tersimpan di database
- User dengan authority code tertentu dapat mengakses menu yang diizinkan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Authority" -> "Manage Authority over menu" | 2. Menampilkan halaman Manage Authority Over Menu dengan daftar authority dan menu |
| 3. Melihat daftar authority dan menu | 4. Menampilkan tabel dengan kolom: No, Authority Code, Menu, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah Authority Menu" | 10. Menampilkan form untuk menambah authority menu baru |
| 11. Memilih Authority Code dan Menu | 12. Menampilkan dropdown yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan authority menu ke database |
| 15. Mengklik tombol "Edit" pada salah satu authority menu | 16. Menampilkan form edit dengan data authority menu yang sudah ada |
| 17. Mengubah authority menu | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan authority menu ke database |

---

## 43. MANAGE USER INFORMATION

**Aktor:** User (Admin)

**Tujuan:** Mengelola informasi user dan akses mereka ke sistem

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data user berhasil ditambah/diubah dan tersimpan di database
- User dapat login dengan kredensial yang sudah dibuat
- Password user dapat direset jika diperlukan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Authority" -> "Manage User information" | 2. Menampilkan halaman Manage User Information dengan daftar user |
| 3. Melihat daftar user | 4. Menampilkan tabel dengan kolom: No, NIP, Nama, Email, Authority, Status, Aksi |
| 5. Mengatur filter pencarian | 6. Menampilkan form filter yang sudah diisi |
| 7. Mengklik tombol "Search" | 8. Mengambil data sesuai filter dari database |
| 9. Mengklik tombol "Tambah User" | 10. Menampilkan form untuk menambah user baru |
| 11. Mengisi data (NIP, Nama, Email, Authority, Password) | 12. Menampilkan form yang sudah terisi |
| 13. Mengklik tombol "Simpan" | 14. Menyimpan user ke database |
| 15. Mengklik tombol "Edit" pada salah satu user | 16. Menampilkan form edit dengan data user yang sudah ada |
| 17. Mengubah data user | 18. Menampilkan form yang sudah diubah |
| 19. Mengklik tombol "Simpan" | 20. Menyimpan perubahan user ke database |
| 21. Mengklik tombol "Reset Password" | 22. Mereset password user dan mengirim email notifikasi |

---

## 44. AUDIT TRAIL

**Aktor:** User (Admin)

**Tujuan:** Melihat log aktivitas dan perubahan data di sistem

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin
- Sistem sudah mencatat aktivitas user

**Pasca Kondisi:**
- Data audit trail berhasil ditampilkan sesuai filter
- User dapat melihat detail aktivitas dan perubahan data
- Laporan audit trail dapat dicetak atau diekspor

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Audit Trail" | 2. Menampilkan halaman Audit Trail dengan filter pencarian |
| 3. Mengatur filter (Tanggal, User, Aksi, Modul) | 4. Menampilkan form filter yang sudah diisi |
| 5. Mengklik tombol "Search" | 6. Mengambil data audit trail sesuai filter dari database |
| 7. Melihat hasil pencarian | 8. Menampilkan tabel audit trail dengan kolom: No, Tanggal/Waktu, User, Modul, Aksi, Detail, IP Address |
| 9. Mengklik tombol "Detail" pada salah satu record | 10. Menampilkan detail lengkap audit trail (data sebelum dan sesudah perubahan) |
| 11. Mengklik tombol "Export Excel" | 12. Mengekspor data audit trail ke file Excel |
| 13. Mengklik tombol "Print" | 14. Mencetak laporan audit trail |

---

## CATATAN

Dokumen ini berisi skenario use case lengkap untuk semua halaman di CustomWeb SPAN. Setiap skenario mencakup:
- **Aktor:** Siapa yang menggunakan fitur ini
- **Tujuan:** Tujuan dari use case
- **Pra Kondisi:** Kondisi yang harus dipenuhi sebelum use case dijalankan
- **Pasca Kondisi:** Kondisi setelah use case selesai dijalankan
- **Skenario normal:** Langkah-langkah interaksi antara aktor dan sistem dalam format tabel dua kolom

Format ini memudahkan untuk di-copy paste ke Microsoft Word dan digunakan dalam dokumentasi SRS (Software Requirements Specification).
