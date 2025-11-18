# 🏛️ CustomWeb SPAN - Dummy Website

## 📋 Deskripsi

Website dummy untuk **CustomWeb SPAN (Sistem Perbendaharaan dan Anggaran Negara)** - RKAKL DIPA Initial & Revision.

Website ini dibuat berdasarkan **Manual CW.pdf (SPAN-BT-CW-UG v1.0)** yang mencakup 21 BAB fitur utama sistem CustomWeb.

## 🎯 Tujuan

Website dummy ini dibuat untuk:
- **Visualisasi UI/UX** dari fitur-fitur CustomWeb SPAN
- **Prototype** untuk stakeholder review
- **Reference** untuk development tim
- **Demo** sistem untuk presentasi

## 📁 Struktur Folder

```
customweb-dummy/
├── index.html                  # Login Page (BAB 0)
├── dashboard.html              # Dashboard & Monitoring (BAB 6)
├── adk-upload.html            # Upload ADK (BAB 1)
├── monitor-upload.html        # Monitor Status Upload (BAB 2)
├── online-review.html         # Penelaahan Online (BAB 3)
├── approval.html              # RKAKL DIPA Approval (BAB 4)
├── locking.html               # Locking Management (BAB 5)
├── reports.html               # Laporan (BAB 7-18)
├── audit-trail.html           # Audit Trail (BAB 19)
├── css/
│   └── style.css              # Stylesheet utama
├── js/                        # JavaScript (placeholder)
├── assets/                    # Images, icons (placeholder)
└── README.md                  # File ini
```

## 🔄 Re-Engineering Updates

### Perubahan Utama:
1. **Upload ADK → Penerimaan ADK dari SAKTI**
   - Tidak lagi manual upload dari user
   - Data dikirim otomatis dari sistem SAKTI via API
   - Queue-based processing

2. **Fitur Dihapus:**
   - ❌ Penelaahan Online (Online Review)
   - ❌ Approval Workflow

3. **Workflow Baru:**
   ```
   SAKTI → Penerimaan ADK → Validasi → Posting ke EBS
   ```

## 🚀 Cara Menggunakan

### 1. Buka di Browser

Cukup buka file `index.html` di browser:

```bash
# Dari terminal
open index.html

# Atau double-click file index.html di file explorer
```

### 2. Navigasi

- **Login**: Gunakan kredensial apa saja (dummy data)
- **Navigation Bar**: Klik menu untuk berpindah halaman
  - Dashboard
  - Penerimaan ADK (dari SAKTI)
  - Monitor & Validasi
  - Locking
  - Laporan
  - Audit Trail
- **Logout**: Klik tombol Logout di header

### 3. Eksplorasi Fitur

Setiap halaman menampilkan UI dummy untuk fitur:
- Form input dengan validasi
- Tabel data dengan interaksi
- Modal/popup untuk detail
- Button actions dengan feedback
- SAKTI API integration (simulated)

## 📄 Halaman-Halaman (Re-engineered)

### 🔐 1. Login (index.html) - BAB 0
**Fitur:**
- Login dengan User ID & Password
- Pilih Tahun Anggaran
- Pilih Kode Jenis Dokumen
- Remember Me checkbox
- Auto-lock warning (3x failed login)

**Akses:** Direct - Halaman pertama

---

### 📊 2. Dashboard (dashboard.html) - BAB 6
**Fitur:** (Updated - No Approval Stats)
- Statistics cards (penerimaan dari SAKTI, validasi)
- 3 Tabs: Monitoring, Posting, Copy ADK
- Status monitoring table (Penerimaan, Validasi, Posting)
- Posting management ke EBS
- ADK file generation

**Akses:** Setelah login

---

### 🔄 3. Penerimaan ADK dari SAKTI (adk-upload.html) - BAB 1 (RE-ENGINEERED)
**Fitur:** (Completely Redesigned)
- 🔗 Status koneksi SAKTI (real-time)
- 📥 Request data ADK dari SAKTI API
- ⏳ Queue penerimaan (incoming queue)
- 📊 Progress tracking transfer
- 📜 Riwayat penerimaan
- ⚙️ Auto-sync setiap 30 menit
- No manual file upload!

**Workflow:**
```
Request → SAKTI API → Queue → Receive → Process → Validasi
```

**Pengguna:** DJA Staff, DADUTEK

---

### 🔍 4. Monitor & Validasi (monitor-upload.html) - BAB 2
**Fitur:**
- Monitor status penerimaan & validasi
- Filter: periode, jenis data, phase code
- Validation status: XML Parse, Digital Stamp, Internal, COA
- Error detail modal (50+ validation rules)
- Delete failed validations

**Pengguna:** Staf DJA, DADUTEK

---

### 🔒 5. Locking (locking.html) - BAB 5 (Updated)
**Fitur:** (Simplified - No Approval Lock)
- 📥 Lock/Unlock Penerimaan ADK
- 🗑️ Lock/Unlock Deletion
- 2 Modes: Lock by Unit, Lock by SATKER
- Cascading lock (Unit → SATKER)
- Lock history

**Pengguna:** DJB DADUTEK (full access), DJB Echelon IV (limited)

---

### 📊 6. Laporan (reports.html) - BAB 7-18
**Fitur:**
- 3 Kategori: RKAKL Reports, DIPA Reports, Other Reports
- 14 Jenis laporan utama:
  - RKA SATKER (6 bagian)
  - Lampiran Kertas Kerja (4 lampiran)
  - Catatan Penelaahan
  - Himpunan (7 jenis)
  - DHP
  - Keppres (4 lampiran)
  - DIPA Induk
  - DIPA Petikan
  - Monitoring PAGU
  - Laporan Revisi
  - Matriks Perubahan
  - Report Generator
  - Audit Trail Report
  - Validation Error Report
- Export to PDF/Excel
- Preview & Print

**Pengguna:** Echelon IV/III/II DJB, Staff DJB

---

### 🔍 7. Audit Trail (audit-trail.html) - BAB 19
**Fitur:**
- Track semua aktivitas user
- Filter: user, action type, tanggal, module, status, IP
- Quick filter by activity type
- Detail audit log modal
- Export audit report
- Suspicious activity detection

**Tracking:**
- User ID, Timestamp, Action type
- Old value vs New value
- IP Address, Session info
- Browser/User Agent
- Result/Status

**Pengguna:** Administrator, Authorized auditors

---

## 🎨 Design & UI

### Color Scheme
- **Primary**: Blue (#1e40af, #3b82f6)
- **Success**: Green (#10b981)
- **Warning**: Orange (#f59e0b)
- **Danger**: Red (#ef4444)
- **Dark**: Gray (#1f2937)
- **Light**: Light Gray (#f3f4f6)

### Components
- ✅ Modern card-based layout
- ✅ Responsive grid system (2, 3, 4 columns)
- ✅ Interactive tables
- ✅ Modal/popup dialogs
- ✅ Form validations
- ✅ Badges & status indicators
- ✅ Tab navigation
- ✅ Tree structure
- ✅ Statistics cards

### Responsive Design
- Desktop: Full features
- Tablet: Adjusted layout
- Mobile: Single column layout

## 🛠️ Teknologi

- **HTML5**: Structure
- **CSS3**: Styling (custom CSS, no framework)
- **JavaScript**: Interactivity (vanilla JS, no library)
- **No Backend**: Pure frontend/static files

## 📖 Fitur yang Diimplementasikan (Re-Engineering)

### ✅ Completed
- [x] Login/Logout (BAB 0)
- [x] Dashboard 3-tab (BAB 6) - Updated tanpa Approval
- [x] Penerimaan ADK dari SAKTI - API Integration (BAB 1) - RE-ENGINEERED ✨
- [x] Monitor & Validasi (BAB 2)
- [x] Locking Management - Penerimaan & Deletion (BAB 5) - Updated
- [x] Reports Center (BAB 7-18)
- [x] Audit Trail (BAB 19)

### ❌ Removed (Re-Engineering)
- [ ] ~~Online Review dengan Blocking (BAB 3)~~ - DIHAPUS
- [ ] ~~Approval Workflow (BAB 4)~~ - DIHAPUS

### ⚠️ Dummy/Simulated
- Data tabel (hard-coded)
- Upload files (tidak benar-benar upload)
- Validasi (simulated validation)
- Export/Download (alert saja)
- Database connections (tidak ada)
- API calls (tidak ada)

## 🔧 Kustomisasi

### Mengubah Warna
Edit file `css/style.css`:

```css
:root {
    --primary-color: #1e40af;  /* Ganti warna primary */
    --secondary-color: #3b82f6; /* Ganti warna secondary */
    /* ... dst */
}
```

### Menambah Halaman Baru
1. Copy salah satu file HTML
2. Edit konten sesuai kebutuhan
3. Update navigation di semua halaman
4. Maintain konsistensi header & footer

### Menambah Fitur
- JavaScript di inline `<script>` tag
- Bisa dipindah ke `js/` folder jika perlu
- Maintain event handlers yang sudah ada

## 📚 Referensi

- **Manual**: CustomWeb General User Manual - SPAN Project v1.0
- **Dokumen**: SPAN-BT-CW-UG
- **Tanggal**: 27 Desember 2013
- **Total Halaman**: 124 halaman
- **Total BAB**: 21 BAB (BAB 0 - BAB 20)

## 🎯 Use Cases

### 1. Stakeholder Demo
- Showcase UI/UX design
- Explain workflow & process
- Get feedback early

### 2. Development Reference
- UI component reference
- Layout structure
- Interaction patterns

### 3. Training Material
- User training
- System walkthrough
- Feature explanation

### 4. Testing Template
- Test case reference
- UI testing baseline
- User acceptance testing

## 🚧 Limitasi

### Tidak Ada:
- ❌ Real backend/database
- ❌ Actual file upload/download
- ❌ Real authentication
- ❌ Session management
- ❌ Data persistence
- ❌ API integration
- ❌ Digital signature verification
- ❌ Actual report generation

### Yang Ada:
- ✅ UI/UX layout
- ✅ Form interactions
- ✅ Navigation flow
- ✅ Modal/popup
- ✅ Table display
- ✅ Button actions (simulated)
- ✅ Responsive design

## 🔐 Security Note

⚠️ **PENTING**: Ini adalah website dummy/prototype.

- Tidak ada enkripsi
- Tidak ada validasi server-side
- Tidak ada proteksi data
- Jangan gunakan untuk production
- Jangan input data sensitif/real

## 📞 Support

Untuk pertanyaan atau feedback:
- Lihat dokumentasi Manual CW.pdf
- Review RANGKUMAN_Manual_CW.md
- Check SKENARIO_USE_CASE files

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 11 Nov 2025 | Initial creation - All 9 pages |
| | | - Login, Dashboard, Upload, Monitor |
| | | - Online Review, Approval, Locking |
| | | - Reports, Audit Trail |
| | | - Complete with CSS & interactions |

## 🎉 Summary (Re-Engineering Version)

**Total Halaman**: 7 halaman HTML (2 halaman dihapus)
**Halaman Aktif**:
- ✅ index.html (Login)
- ✅ dashboard.html (Dashboard)
- ✅ adk-upload.html (Penerimaan ADK dari SAKTI) - RE-ENGINEERED
- ✅ monitor-upload.html (Monitor & Validasi)
- ✅ locking.html (Locking Management) - Updated
- ✅ reports.html (Laporan)
- ✅ audit-trail.html (Audit Trail)

**Halaman Dihapus**:
- ❌ approval.html (Approval - REMOVED)
- ❌ online-review.html (Online Review - REMOVED)

**Key Changes**:
1. 🔄 Upload Manual → API Integration dengan SAKTI
2. ❌ Penelaahan Online → DIHAPUS
3. ❌ Approval Workflow → DIHAPUS
4. 🔒 Locking: Upload/Approval/Deletion → Penerimaan/Deletion saja

**Workflow Simplified**:
```
OLD: Upload → Validasi → Online Review → Approval (3-tier) → Posting
NEW: SAKTI API → Penerimaan → Validasi → Posting
```

**Status**: ✅ Re-engineering Complete - Ready for demo/review

---

**Generated**: 11 November 2025  
**Updated**: 11 November 2025 (Re-engineering Updates)
**Project**: CustomWeb SPAN Re-engineering  
**SPAN**: Sistem Perbendaharaan dan Anggaran Negara  

**Happy Reviewing! 🚀📊✨**

