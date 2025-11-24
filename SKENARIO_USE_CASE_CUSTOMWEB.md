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

**Tujuan:** Mengelola data referensi jenis belanja dan akun dengan struktur hierarki 2 level

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data jenis belanja/akun berhasil ditambah/diubah dan tersimpan di database
- Data dapat diekspor ke Excel
- Data dapat digunakan sebagai referensi dalam proses budgeting
- Data ditampilkan dalam format hierarki 2 level (Jenis Belanja sebagai parent, Akun sebagai child)

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Atribut Anggaran" -> "Jenis Belanja/Akun" | 2. Menampilkan halaman Jenis Belanja/Akun dengan filter, tabel hierarki, dan pagination |
| 3. Melihat filter pencarian dengan field "Keyword" | 4. Menampilkan form filter dengan field keyword dan tombol "Cari" |
| 4. Mengisi keyword untuk pencarian | 5. Menampilkan field keyword yang sudah diisi |
| 5. Mengklik tombol "Cari" | 6. Memfilter data berdasarkan keyword dan menampilkan hasil di tabel |
| 6. Melihat informasi total data dan jumlah per halaman | 7. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 7. Melihat struktur hierarki 2 level | 8. Menampilkan Jenis Belanja (level 1) dengan expand/collapse icon (▼/▶) dan Akun (level 2) sebagai child dengan indentasi |
| 8. Mengklik icon expand/collapse pada Jenis Belanja | 9. Menampilkan/menyembunyikan Akun yang merupakan child dari Jenis Belanja tersebut |
| 9. Melihat tombol "Ke excel" | 10. Menampilkan tombol export ke Excel di kanan atas |
| 10. Mengklik tombol "Ke excel" | 11. Mengekspor data jenis belanja dan akun ke file Excel |
| 11. Mengklik tombol "Edit" pada baris Jenis Belanja atau Akun | 12. Menampilkan modal form edit dengan data yang sudah terisi |
| 12. Melihat form edit untuk Jenis Belanja (2 level) | 13. Menampilkan field: Kode Kementerian* (readonly), Kode Jenis Belanja* (readonly), Uraian*, Aktif (Y/N) |
| 13. Melihat form edit untuk Akun (2 level) | 14. Menampilkan field: Kode Kementerian* (readonly), Kode Jenis Belanja* (readonly), Kode Akun* (readonly), Uraian*, Aktif (Y/N) |
| 14. Mengubah data | 15. Menampilkan form yang sudah diubah |
| 15. Mengklik tombol "Simpan" | 16. Menyimpan perubahan data ke database dan menampilkan notifikasi sukses |

---

## 27. BEBAN/SUMBER DANA

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi beban, sumber dana, dan jenis beban dengan struktur hierarki 2 level

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data beban/sumber dana berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting
- Data ditampilkan dalam format hierarki 2 level dengan 3 tab utama

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Atribut Anggaran" -> "Beban/Sumber Dana" | 2. Menampilkan halaman Beban/Sumber Dana dengan 3 main tabs: Beban, Sumber Dana, Jenis Beban |
| 3. Melihat 3 main tabs | 4. Menampilkan tab navigation yang dapat diklik untuk beralih antar jenis data |
| 4. Memilih salah satu tab (Beban, Sumber Dana, atau Jenis Beban) | 5. Menampilkan data sesuai tab yang dipilih dengan struktur hierarki 2 level |
| 5. Melihat filter pencarian dengan field "Keyword" | 6. Menampilkan form filter dengan field keyword dan tombol "Cari" |
| 6. Mengisi keyword untuk pencarian | 7. Menampilkan field keyword yang sudah diisi |
| 7. Mengklik tombol "Cari" | 8. Memfilter data berdasarkan keyword dan menampilkan hasil di tabel |
| 8. Melihat informasi total data dan jumlah per halaman | 9. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 9. Melihat struktur hierarki 2 level | 10. Menampilkan parent item (level 1) dengan expand/collapse icon (▼/▶) dan child item (level 2) dengan indentasi |
| 10. Mengklik icon expand/collapse pada parent item | 11. Menampilkan/menyembunyikan child items |
| 11. Melihat tombol "Tambah" dan "Ke excel" | 12. Menampilkan tombol Tambah dan Export Excel di kanan atas |
| 12. Mengklik tombol "Tambah" | 13. Menampilkan modal form untuk menambah data baru |
| 13. Mengisi data sesuai level hierarki | 14. Menampilkan form yang sudah terisi dengan field sesuai level |
| 14. Mengklik tombol "Simpan" | 15. Menyimpan data ke database dan menampilkan notifikasi sukses |
| 15. Mengklik tombol "Edit" pada baris data | 16. Menampilkan modal form edit dengan data yang sudah terisi |
| 16. Mengubah data | 17. Menampilkan form yang sudah diubah |
| 17. Mengklik tombol "Simpan" | 18. Menyimpan perubahan data ke database dan menampilkan notifikasi sukses |
| 18. Mengklik tombol "Ke excel" | 19. Mengekspor data sesuai tab yang aktif ke file Excel |

---

## 28. FUNGSI

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi fungsi anggaran dengan subfungsi secara hierarki

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data fungsi dan subfungsi berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting
- Data ditampilkan dalam format hierarki (Fungsi sebagai parent, Subfungsi sebagai child)

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Atribut Anggaran" -> "Fungsi" | 2. Menampilkan halaman Fungsi/Subfungsi dengan filter, tabel hierarki, dan pagination |
| 3. Melihat filter pencarian dengan field "Keyword" | 4. Menampilkan form filter dengan field keyword |
| 4. Mengisi keyword untuk pencarian | 5. Menampilkan field keyword yang sudah diisi |
| 5. Mengklik tombol "Cari" | 6. Memfilter data berdasarkan keyword dan menampilkan hasil di tabel |
| 6. Melihat informasi total data dan jumlah per halaman | 7. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 7. Melihat daftar fungsi dan subfungsi | 8. Menampilkan tabel hierarki dengan kolom: Kode, Uraian, Aktif, Tgl Modifikasi, User ID, Aksi (Edit) |
| 8. Melihat struktur hierarki (Fungsi -> Subfungsi) | 9. Menampilkan Fungsi sebagai parent dengan expand/collapse icon (▼/▶) dan Subfungsi sebagai child dengan indentasi |
| 9. Mengklik icon expand/collapse pada Fungsi | 10. Menampilkan/menyembunyikan Subfungsi yang merupakan child dari Fungsi tersebut |
| 10. Melihat tombol "Ke excel" | 11. Menampilkan tombol export ke Excel di kanan atas |
| 11. Mengklik tombol "Ke excel" | 12. Mengekspor data fungsi dan subfungsi ke file Excel |
| 12. Mengklik tombol "Edit" pada baris Fungsi atau Subfungsi | 13. Menampilkan modal form edit dengan data yang sudah terisi |
| 13. Melihat form edit untuk Fungsi (2 level) | 14. Menampilkan field: Kode Kementerian* (readonly), Kode Fungsi* (readonly), Uraian*, Aktif (Y/N) |
| 14. Melihat form edit untuk Subfungsi (2 level) | 15. Menampilkan field: Kode Kementerian* (readonly), Kode Fungsi* (readonly), Kode Subfungsi* (readonly), Uraian*, Aktif (Y/N) |
| 15. Mengubah data | 16. Menampilkan form yang sudah diubah |
| 16. Mengklik tombol "Simpan" | 17. Menyimpan perubahan data ke database dan menampilkan notifikasi sukses |

---

## 29. PROGRAM/KEGIATAN

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi program, outcome, kegiatan, output, dan indikator kinerja secara hierarki

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data program/kegiatan berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting
- Data ditampilkan dalam format hierarki 3 level (Kementerian -> Unit -> Program/Outcome/Kegiatan/Output/Indikator)

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Atribut Anggaran" -> "Program/Kegiatan" | 2. Menampilkan halaman Program dengan 6 main tabs: Program, Outcome, Kegiatan, Output, Indikator Kinerja Utama, Indikator Kinerja Kegiatan |
| 3. Melihat tab navigation | 4. Menampilkan 6 tab utama yang dapat diklik untuk beralih antar jenis data |
| 4. Memilih tab "Program", "Outcome", "Kegiatan", "Output", "Indikator Kinerja Utama", atau "Indikator Kinerja Kegiatan" | 5. Menampilkan data sesuai tab yang dipilih dengan struktur hierarki 3 level |
| 5. Melihat filter pencarian dengan field "Keyword" | 6. Menampilkan form filter dengan field keyword dan tombol "Cari" |
| 6. Mengisi keyword untuk pencarian | 7. Menampilkan field keyword yang sudah diisi |
| 7. Mengklik tombol "Cari" | 8. Memfilter data berdasarkan keyword dan menampilkan hasil di tabel |
| 8. Melihat informasi total data dan jumlah per halaman | 9. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 9. Melihat struktur hierarki 3 level | 10. Menampilkan Kementerian (level 1) dengan expand/collapse, Unit (level 2) dengan expand/collapse, Program/Outcome/Kegiatan/Output/Indikator (level 3) dengan indentasi jelas |
| 10. Mengklik icon expand/collapse pada Kementerian | 11. Menampilkan/menyembunyikan Unit yang merupakan child dari Kementerian tersebut |
| 11. Mengklik icon expand/collapse pada Unit | 12. Menampilkan/menyembunyikan Program/Outcome/Kegiatan/Output/Indikator yang merupakan child dari Unit tersebut |
| 12. Melihat tombol "Ke excel" | 13. Menampilkan tombol export ke Excel di kanan atas |
| 13. Mengklik tombol "Ke excel" | 14. Mengekspor data sesuai tab yang aktif ke file Excel |
| 14. Mengklik tombol "Edit" pada baris data level 3 | 15. Menampilkan modal form edit dengan data yang sudah terisi |
| 15. Melihat form edit untuk data hierarki 3 level | 16. Menampilkan field: Kode Kementerian* (readonly), Kode Unit* (readonly), Kode Program/Outcome/Kegiatan/Output/Indikator* (readonly), Uraian*, Aktif (Y/N) |
| 16. Mengubah data | 17. Menampilkan form yang sudah diubah |
| 17. Mengklik tombol "Simpan" | 18. Menyimpan perubahan data ke database dan menampilkan notifikasi sukses |

---

## 30. ATRIBUT ANGGARAN LAIN-LAIN

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi atribut anggaran lainnya dengan 14 jenis data berbeda

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data atribut anggaran berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting
- Data ditampilkan dalam format hierarki 2 level (Kementerian -> Visi/Misi/Sasaran/dll) dengan auto-expand

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Atribut Anggaran" -> "Lain-lain" | 2. Menampilkan halaman Atribut Anggaran Lain-lain dengan 14 main tabs dalam 2 baris |
| 3. Melihat 14 main tabs | 4. Menampilkan tab: Visi, Misi, Misi Unit, Sasaran, Sasaran Kegiatan, PROGSAS, Jenis Prioritas, Prioritas Ke, Inisiatif Baru, Jenis Dokumen, Blokir, Kurs, Register, Cara Tarik |
| 4. Memilih salah satu tab | 5. Menampilkan data sesuai tab yang dipilih dengan struktur hierarki 2 level |
| 5. Melihat filter pencarian dengan field "Keyword" | 6. Menampilkan form filter dengan field keyword dan tombol "Cari" |
| 6. Mengisi keyword untuk pencarian | 7. Menampilkan field keyword yang sudah diisi |
| 7. Mengklik tombol "Cari" | 8. Memfilter data berdasarkan keyword dan menampilkan hasil di tabel |
| 8. Melihat informasi total data dan jumlah per halaman | 9. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 9. Melihat struktur hierarki 2 level dengan auto-expand | 10. Menampilkan Kementerian (level 1) dan Visi/Misi/Sasaran/dll (level 2) dengan semua parent item otomatis expanded saat load |
| 10. Melihat expand/collapse icon pada Kementerian | 11. Menampilkan icon expand/collapse (▼/▶) yang dapat diklik untuk expand/collapse child items |
| 11. Mengklik icon expand/collapse | 12. Menampilkan/menyembunyikan child items dengan animasi |
| 12. Melihat tombol "Ke excel" | 13. Menampilkan tombol export ke Excel di kanan atas |
| 13. Mengklik tombol "Ke excel" | 14. Mengekspor data sesuai tab yang aktif ke file Excel |
| 14. Mengklik tombol "Edit" pada baris data level 2 | 15. Menampilkan modal form edit dengan data yang sudah terisi |
| 15. Melihat form edit untuk data hierarki 2 level | 16. Menampilkan field: Kode Kementerian* (readonly), Kode Visi/Misi/Sasaran/dll* (readonly), Uraian*, Aktif (Y/N) |
| 16. Mengubah data | 17. Menampilkan form yang sudah diubah |
| 17. Mengklik tombol "Simpan" | 18. Menyimpan perubahan data ke database dan menampilkan notifikasi sukses |

---

## 31. KL/UNIT

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi Kementerian/Lembaga, Unit, Eselon 2, Satuan Kerja, dan Jenis Satker

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data KL/Unit berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting
- Data ditampilkan dalam format flat (non-hierarki) dengan 5 tab utama

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Struktur Organisasi" -> "KL/Unit" | 2. Menampilkan halaman KL/Unit dengan 5 main tabs: Kementerian, Unit, Eselon 2, Satuan Kerja, Jenis Satker |
| 3. Melihat 5 main tabs | 4. Menampilkan tab navigation yang dapat diklik untuk beralih antar jenis data |
| 4. Memilih salah satu tab (Kementerian, Unit, Eselon 2, Satuan Kerja, atau Jenis Satker) | 5. Menampilkan data sesuai tab yang dipilih dalam format tabel flat |
| 5. Melihat filter pencarian dengan field "Keyword" | 6. Menampilkan form filter dengan field keyword dan tombol "Cari" |
| 6. Mengisi keyword untuk pencarian | 7. Menampilkan field keyword yang sudah diisi |
| 7. Mengklik tombol "Cari" | 8. Memfilter data berdasarkan keyword dan menampilkan hasil di tabel |
| 8. Melihat informasi total data dan jumlah per halaman | 9. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 9. Melihat daftar data sesuai tab | 10. Menampilkan tabel dengan kolom: Kode, Uraian, Aktif, Tgl Modifikasi, User ID, Aksi (Edit) |
| 10. Melihat tombol "Ke excel" | 11. Menampilkan tombol export ke Excel di kanan atas |
| 11. Mengklik tombol "Ke excel" | 12. Mengekspor data sesuai tab yang aktif ke file Excel |
| 12. Mengklik tombol "Edit" pada salah satu baris | 13. Menampilkan modal form edit dengan data yang sudah terisi |
| 13. Melihat form edit untuk data flat | 14. Menampilkan field: Kode* (readonly), Uraian*, Aktif (Y/N) |
| 14. Mengubah data | 15. Menampilkan form yang sudah diubah |
| 15. Mengklik tombol "Simpan" | 16. Menyimpan perubahan data ke database dan menampilkan notifikasi sukses |

---

## 32. LOKASI/KPPN

**Aktor:** User (Admin)

**Tujuan:** Mengelola data referensi lokasi, Kabupaten/Kota, Kanwil, KPPN, dan DEKON

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data lokasi/KPPN berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting
- Data ditampilkan dalam format flat (non-hierarki) dengan 5 tab utama

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Struktur Organisasi" -> "Lokasi/KPPN" | 2. Menampilkan halaman Lokasi/KPPN dengan 5 main tabs: Lokasi, Kabupaten/Kota, Kanwil, KPPN, DEKON |
| 3. Melihat 5 main tabs | 4. Menampilkan tab navigation yang dapat diklik untuk beralih antar jenis data |
| 4. Memilih salah satu tab (Lokasi, Kabupaten/Kota, Kanwil, KPPN, atau DEKON) | 5. Menampilkan data sesuai tab yang dipilih dalam format tabel flat |
| 5. Melihat filter pencarian dengan field "Keyword" | 6. Menampilkan form filter dengan field keyword dan tombol "Cari" |
| 6. Mengisi keyword untuk pencarian | 7. Menampilkan field keyword yang sudah diisi |
| 7. Mengklik tombol "Cari" | 8. Memfilter data berdasarkan keyword dan menampilkan hasil di tabel |
| 8. Melihat informasi total data dan jumlah per halaman | 9. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 9. Melihat daftar data sesuai tab | 10. Menampilkan tabel dengan kolom: Kode, Uraian, Aktif, Tgl Modifikasi, User ID, Aksi (Edit) |
| 10. Melihat tombol "Ke excel" | 11. Menampilkan tombol export ke Excel di kanan atas |
| 11. Mengklik tombol "Ke excel" | 12. Mengekspor data sesuai tab yang aktif ke file Excel |
| 12. Mengklik tombol "Edit" pada salah satu baris | 13. Menampilkan modal form edit dengan data yang sudah terisi |
| 13. Melihat form edit untuk data flat | 14. Menampilkan field: Kode* (readonly), Uraian*, Aktif (Y/N) |
| 14. Mengubah data | 15. Menampilkan form yang sudah diubah |
| 15. Mengklik tombol "Simpan" | 16. Menyimpan perubahan data ke database dan menampilkan notifikasi sukses |

---

## 33. PENANGGUNG JAWAB KEGIATAN

**Aktor:** User (Admin)

**Tujuan:** Mengelola data penanggung jawab kegiatan dengan struktur hierarki 4 level

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data penanggung jawab kegiatan berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses budgeting
- Data ditampilkan dalam format hierarki 4 level (Kementerian -> Unit -> Eselon 2 -> Kegiatan) dengan auto-expand

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Struktur Organisasi" -> "Penanggung Jawab Kegiatan" | 2. Menampilkan halaman Penanggung Jawab Kegiatan dengan filter, tabel hierarki, dan pagination |
| 3. Melihat filter pencarian dengan field "Keyword" | 4. Menampilkan form filter dengan field keyword dan tombol "Cari" |
| 4. Mengisi keyword untuk pencarian | 5. Menampilkan field keyword yang sudah diisi |
| 5. Mengklik tombol "Cari" | 6. Memfilter data berdasarkan keyword dan menampilkan hasil di tabel |
| 6. Melihat informasi total data dan jumlah per halaman | 7. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 7. Melihat struktur hierarki 4 level dengan auto-expand | 8. Menampilkan Kementerian (level 1), Unit (level 2), Eselon 2 (level 3), Kegiatan (level 4) dengan semua parent item otomatis expanded saat load |
| 8. Melihat expand/collapse icon pada level 1-3 | 9. Menampilkan icon expand/collapse (▼/▶) yang dapat diklik untuk expand/collapse child items |
| 9. Mengklik icon expand/collapse | 10. Menampilkan/menyembunyikan child items dengan animasi |
| 10. Melihat tombol "Tambah" dan "Ke excel" | 11. Menampilkan tombol Tambah dan Export Excel di kanan atas |
| 11. Mengklik tombol "Ke excel" | 12. Mengekspor data penanggung jawab kegiatan ke file Excel |
| 12. Mengklik tombol "Edit" pada baris data level 4 (Kegiatan) | 13. Menampilkan modal form edit dengan data yang sudah terisi |
| 13. Melihat form edit untuk data hierarki 4 level | 14. Menampilkan field: Kode Kementerian* (readonly), Kode Unit* (readonly), Kode Eselon 2* (readonly), Kode Kegiatan* (readonly), Aktif (Y/N) |
| 14. Mengubah status Aktif | 15. Menampilkan form yang sudah diubah |
| 15. Mengklik tombol "Simpan" | 16. Menyimpan perubahan data ke database dan menampilkan notifikasi sukses |

---

## 34. PENANDA TANGAN

**Aktor:** User (Admin)

**Tujuan:** Mengelola data penanda tangan dokumen dengan data flat (non-hierarki)

**Pra Kondisi:**
- Pengguna sudah login ke sistem
- User memiliki akses admin

**Pasca Kondisi:**
- Data penanda tangan berhasil ditambah/diubah dan tersimpan di database
- Data dapat digunakan sebagai referensi dalam proses pembuatan dokumen
- Gambar tanda tangan dapat diunggah dan disimpan

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Reference Data" -> "Struktur Organisasi" -> "Penanda Tangan" | 2. Menampilkan halaman Penanda Tangan dengan filter, tabel data flat, dan pagination |
| 3. Melihat filter pencarian dengan field "Keyword" | 4. Menampilkan form filter dengan field keyword dan tombol "Cari" |
| 4. Mengisi keyword untuk pencarian | 5. Menampilkan field keyword yang sudah diisi |
| 5. Mengklik tombol "Cari" | 6. Memfilter data berdasarkan keyword dan menampilkan hasil di tabel |
| 6. Melihat informasi total data dan jumlah per halaman | 7. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 7. Melihat daftar penanda tangan | 8. Menampilkan tabel dengan kolom: Kode, Uraian, Aktif, Tgl Modifikasi, User ID, Aksi (Edit) |
| 8. Melihat tombol "Tambah" dan "Ke excel" | 9. Menampilkan tombol Tambah dan Export Excel di kanan atas |
| 9. Mengklik tombol "Tambah" | 10. Menampilkan modal form untuk menambah penanda tangan baru |
| 10. Mengisi data (NIP*, Nama*, NIP2, Jabatan1*, Jabatan2, Jabatan3, Jabatan4, IMG Nama dengan browse, Pejabat DJA dropdown, Aktif Y/N) | 11. Menampilkan form yang sudah terisi dengan field-file input untuk gambar |
| 11. Mengklik tombol "Browse" pada field IMG Nama | 12. Membuka dialog file picker untuk memilih file gambar |
| 12. Memilih file gambar | 13. Menampilkan nama file yang dipilih |
| 13. Mengklik tombol "Simpan" | 14. Memvalidasi form dan menyimpan data penanda tangan beserta gambar ke database |
| 14. Mengklik tombol "Edit" pada salah satu baris | 15. Menampilkan modal form edit dengan data yang sudah terisi |
| 15. Mengubah data penanda tangan | 16. Menampilkan form yang sudah diubah |
| 16. Mengklik tombol "Simpan" | 17. Menyimpan perubahan data ke database dan menampilkan notifikasi sukses |
| 17. Mengklik tombol "Ke excel" | 18. Mengekspor data penanda tangan ke file Excel |

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
| 1. Mengklik menu "Manage Reference Data" -> "XML Download" | 2. Menampilkan halaman XML Download dengan tabel data table dan tombol Download |
| 3. Melihat daftar data table yang tersedia | 4. Menampilkan tabel dengan kolom: No, Checkbox (Select All), Table (nama table seperti T_AKUN, T_BEBAN, T_BKPK, dll) |
| 5. Mengklik checkbox "Select All" di header | 6. Memilih semua table yang tersedia |
| 6. Memilih table tertentu dengan checkbox | 7. Menandai table yang dipilih untuk di-download |
| 7. Melihat table yang sudah terpilih | 8. Menampilkan checkbox yang sudah tercentang |
| 8. Mengklik tombol "Download" | 9. Memproses generate file XML untuk table yang dipilih dan mengunduh file tersebut |
| 9. Melihat notifikasi download | 10. Menampilkan notifikasi sukses dan file XML terunduh |

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
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Application" -> "Manage Menu" | 2. Menampilkan halaman Manage Menu dengan daftar menu, pagination, dan search |
| 3. Melihat daftar menu | 4. Menampilkan tabel dengan kolom: Checkbox, Nomor Menu, Nama Menu, Nama Program, Deskripsi Menu, Urutan Menu, Menu Induk, Aksi (Edit) |
| 4. Melihat informasi total data dan jumlah per halaman | 5. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 5. Mengisi field "Nama Menu" untuk pencarian | 6. Menampilkan field search yang sudah diisi |
| 6. Melihat hasil pencarian real-time | 7. Memfilter data tabel secara real-time berdasarkan input search |
| 7. Mengklik tombol "Tambah" | 8. Menampilkan modal form untuk menambah menu baru |
| 8. Mengisi data (Nomor Menu*, Nama Menu*, Nama Program* dengan autocomplete, Tahun Menu*, Urutan Menu*, Nomor Menu Induk*, Jenis Menu* dropdown, Deskripsi Menu) | 9. Menampilkan form yang sudah terisi dengan autocomplete untuk Nama Program |
| 9. Mengetik di field "Nama Program" | 10. Menampilkan dropdown autocomplete dengan daftar program yang sesuai dengan input |
| 10. Memilih program dari autocomplete | 11. Mengisi field Nama Program dengan program yang dipilih |
| 11. Mengklik tombol "Simpan" | 12. Memvalidasi form dan menyimpan menu ke database, menampilkan notifikasi sukses |
| 12. Mengklik tombol "Edit" pada salah satu baris menu | 13. Menampilkan modal form edit dengan data menu yang sudah terisi |
| 13. Mengubah data menu | 14. Menampilkan form yang sudah diubah |
| 14. Mengklik tombol "Simpan" | 15. Menyimpan perubahan menu ke database dan menampilkan notifikasi sukses |
| 15. Memilih beberapa menu dengan checkbox | 16. Menandai menu yang dipilih |
| 16. Mengklik tombol "Hapus" | 17. Menampilkan konfirmasi dan menghapus menu yang dipilih |

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
- Batch job dapat di-start atau dihentikan jika diperlukan
- Auto refresh dapat diaktifkan untuk monitoring real-time

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Application" -> "Batch Monitoring" | 2. Menampilkan halaman Batch Monitoring dengan konfigurasi dan tabel batch job |
| 3. Melihat konfigurasi monitoring (Server, Auto Refresh, Tanggal, Refresh Interval) | 4. Menampilkan form konfigurasi dengan nilai default |
| 5. Mengisi Server IP (opsional) | 6. Menampilkan field server yang sudah diisi |
| 7. Mengaktifkan checkbox "Auto Refresh" | 8. Mengaktifkan auto refresh sesuai interval yang ditentukan |
| 8. Mengatur Refresh Interval (dalam detik) | 9. Menampilkan field interval yang sudah diisi |
| 10. Mengklik tombol "Cari" | 11. Mengambil data batch job dari server dan menampilkan di tabel |
| 12. Melihat daftar batch job | 13. Menampilkan tabel dengan kolom: Batch Name, Count, Status (Alive/Dead), Cyde(sec), Control (tombol G/K), Jumlah, Standby, Running, Completed, Fail |
| 14. Mengklik tombol "G" (Green/Start) pada batch tertentu | 15. Memulai batch job yang dipilih dan menampilkan notifikasi sukses |
| 16. Mengklik tombol "K" (Red/Stop) pada batch tertentu | 17. Menghentikan batch job yang sedang berjalan dan menampilkan notifikasi sukses |
| 18. Melihat status real-time batch (jika auto refresh aktif) | 19. Memperbarui status batch secara otomatis sesuai interval yang ditentukan |

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
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Authority" -> "Manage Job position" | 2. Menampilkan halaman Manage Job Position dengan daftar jabatan, pagination, dan search |
| 3. Melihat daftar jabatan | 4. Menampilkan tabel dengan kolom: Checkbox, Kode Jabatan, Nama Jabatan, Eselon, Deskripsi, Aksi (Edit) |
| 5. Melihat informasi total data dan jumlah per halaman | 6. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 7. Mengatur jumlah item per halaman | 8. Memperbarui tampilan tabel sesuai jumlah item yang dipilih |
| 9. Mengisi field "Nama Jabatan" untuk pencarian | 10. Menampilkan field search yang sudah diisi |
| 11. Melihat hasil pencarian real-time | 12. Memfilter data tabel secara real-time berdasarkan input search |
| 13. Mengklik tombol "Tambah" | 14. Menampilkan modal form untuk menambah jabatan baru |
| 15. Mengisi data (Kode Jabatan*, Nama Jabatan*, Eselon*, Deskripsi) | 16. Menampilkan form yang sudah terisi dengan validasi field wajib |
| 17. Mengklik tombol "Simpan" | 18. Memvalidasi form dan menyimpan jabatan ke database, menampilkan notifikasi sukses |
| 19. Mengklik tombol "Edit" pada salah satu baris jabatan | 20. Menampilkan modal form edit dengan data jabatan yang sudah terisi |
| 21. Mengubah data jabatan | 22. Menampilkan form yang sudah diubah |
| 23. Mengklik tombol "Simpan" | 24. Menyimpan perubahan jabatan ke database dan menampilkan notifikasi sukses |
| 25. Memilih beberapa jabatan dengan checkbox | 26. Menandai jabatan yang dipilih |
| 27. Mengklik tombol "Hapus" | 28. Menampilkan konfirmasi dan menghapus jabatan yang dipilih |
| 29. Menggunakan pagination untuk navigasi halaman | 30. Menampilkan data sesuai halaman yang dipilih |

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
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Authority" -> "Manage Authority code" | 2. Menampilkan halaman Manage Authority Code dengan daftar authority code, pagination, dan search |
| 3. Melihat daftar authority code | 4. Menampilkan tabel dengan kolom: Checkbox, Kode Kewenangan, Nama Kewenangan, Deskripsi, Waktu Pembuatan, Aksi (Edit) |
| 4. Melihat informasi total data dan jumlah per halaman | 5. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 5. Mengisi field "Nama Kewenangan" untuk pencarian | 6. Menampilkan field search yang sudah diisi |
| 6. Melihat hasil pencarian real-time | 7. Memfilter data tabel secara real-time berdasarkan input search (Kode, Nama, atau Deskripsi) |
| 7. Mengklik tombol "Tambah" | 8. Menampilkan modal form untuk menambah authority code baru dengan timestamp otomatis |
| 8. Mengisi data (Kode Kewenangan*, Nama Kewenangan*, Deskripsi, Waktu Pembuatan* dengan format dd-mm-yyyy hh:mm:ss) | 9. Menampilkan form yang sudah terisi dengan timestamp saat ini sebagai default |
| 9. Mengklik tombol "Simpan" | 10. Memvalidasi form (termasuk format waktu) dan menyimpan authority code ke database, menampilkan notifikasi sukses |
| 10. Mengklik tombol "Edit" pada salah satu baris authority code | 11. Menampilkan modal form edit dengan data authority code yang sudah terisi |
| 11. Mengubah data authority code | 12. Menampilkan form yang sudah diubah |
| 12. Mengklik tombol "Simpan" | 13. Menyimpan perubahan authority code ke database dan menampilkan notifikasi sukses |
| 13. Memilih beberapa authority code dengan checkbox | 14. Menandai authority code yang dipilih |
| 14. Mengklik tombol "Hapus" | 15. Menampilkan konfirmasi dan menghapus authority code yang dipilih |

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
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Authority" -> "Manage Authority over menu" | 2. Menampilkan halaman Manage Authority Over Menu dengan daftar authority code, pagination, dan search |
| 3. Melihat daftar authority code | 4. Menampilkan tabel dengan kolom: Kode Kewenangan, Nama Kewenangan, Deskripsi Kewenangan, Berhak Akses Menu (Y), Hak Menu (link "Hak Atas Menu") |
| 5. Melihat informasi total data dan jumlah per halaman | 6. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 6. Mengisi field "Kode Kewenangan" untuk pencarian | 7. Menampilkan field search yang sudah diisi |
| 7. Melihat hasil pencarian real-time | 8. Memfilter data tabel secara real-time berdasarkan input search |
| 8. Mengklik link "Hak Atas Menu" pada salah satu authority code | 9. Menampilkan modal "Menu Rights" dengan header menampilkan Kode Kewenangan yang dipilih dan tombol "Simpan" |
| 9. Melihat tree structure menu | 10. Menampilkan tree menu dengan struktur hierarki (root, Dashboard, Monitoring, Reports, dll) dengan checkbox untuk setiap item |
| 10. Melihat expand/collapse icon (chevron) pada parent menu | 11. Menampilkan chevron icon yang dapat diklik untuk expand/collapse submenu |
| 11. Mengklik chevron untuk expand submenu | 12. Menampilkan submenu dengan indentasi yang jelas (2.5rem per level) |
| 12. Memilih/deselect checkbox pada menu item | 13. Menandai menu yang dipilih untuk authority code tersebut |
| 13. Melihat semua menu yang sudah terpilih | 14. Menampilkan checkbox yang sudah tercentang untuk menu yang memiliki akses |
| 14. Mengklik tombol "Simpan" | 15. Menyimpan konfigurasi menu rights untuk authority code dan menampilkan notifikasi sukses |
| 15. Mengklik tombol close atau di luar modal | 16. Menutup modal dan kembali ke halaman utama |

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
- Password user dapat diubah jika diperlukan
- Kewenangan user dapat diatur melalui tree directory

**Skenario normal:**

| Aktor | Sistem |
|-------|--------|
| 1. Mengklik menu "Manage Authority/User/Menu" -> "Manage Authority" -> "Manage User information" | 2. Menampilkan halaman Manage User Information dengan daftar user, pagination, dan search |
| 3. Melihat daftar user | 4. Menampilkan tabel dengan kolom: No, Pengguna Hyperion, Pengguna, Kewenangan, Jabatan, Eselon, Kementerian, Unit, Aksi (Edit) |
| 4. Melihat informasi total data dan jumlah per halaman | 5. Menampilkan "Total X | Jumlah per halaman" dengan dropdown pilihan (10, 30, 50, 100) |
| 5. Memilih tipe search dari dropdown "Choose:" (Pengguna, Kewenangan, Jabatan) | 6. Menampilkan dropdown yang sudah dipilih |
| 6. Mengisi field search sesuai tipe yang dipilih | 7. Menampilkan field search yang sudah diisi |
| 7. Melihat hasil pencarian real-time | 8. Memfilter data tabel secara real-time berdasarkan tipe dan input search |
| 8. Mengklik tombol "Edit" pada salah satu baris user | 9. Menampilkan modal form edit user dengan 2 kolom form dan tree directory di bawah |
| 9. Melihat form edit user (Kolom Kiri) | 10. Menampilkan field: Kode Identitas* (readonly), Nama Pengguna* (readonly), Password* (dengan hint), Nama*, Email* (prefix + @ + domain), Kode Kewenangan* (dropdown), Nama Kementerian* (dengan icon search) |
| 10. Melihat form edit user (Kolom Kanan) | 11. Menampilkan field: Multiple Login (checkbox), Pengguna Hyperion* (readonly), NIP*, Jabatan* (dengan icon search), Nama Unit* (dengan icon search) |
| 11. Mengubah password (jika diperlukan) | 12. Mengisi field password baru (jika kosong, password tidak berubah) |
| 12. Mengklik icon search pada Nama Kementerian, Jabatan, atau Nama Unit | 13. Membuka dialog/search untuk memilih data yang sesuai |
| 13. Melihat section "Daftar Kewenangan" di bawah form | 14. Menampilkan tree directory dengan struktur hierarki Kementerian/Unit dengan checkbox |
| 14. Melihat tree structure kewenangan | 15. Menampilkan tree dengan expand/collapse chevron, checkbox, dan indentasi jelas (2.5rem per level) |
| 15. Memilih/deselect checkbox pada kewenangan | 16. Menandai kewenangan yang dipilih untuk user tersebut |
| 16. Mengklik tombol "Simpan" | 17. Memvalidasi form dan menyimpan data user beserta kewenangan ke database |
| 17. Mengklik tombol "Hapus" | 18. Menampilkan konfirmasi dan menghapus user dari database |
| 18. Mengklik tombol "Kembali" | 19. Menutup modal dan kembali ke halaman utama |

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
