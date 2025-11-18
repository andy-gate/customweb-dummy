# 📦 Components Guide - CustomWeb SPAN

## 🎯 Tujuan

Header, Sidebar, dan Footer sekarang dibuat sebagai **reusable components** yang didefinisikan di file JavaScript terpisah.

## 📁 File Components

### 1. **js/components.js** - Component Generator
Berisi function untuk generate:
- `generateHeader(userData)` - Header dengan hamburger menu
- `generateSidebar(activePage)` - Sidebar dengan submenu Laporan
- `generateFooter()` - Footer
- `initPageComponents(config)` - Initialize semua components

### 2. **js/sidebar.js** - Sidebar Logic
Berisi function untuk:
- `toggleSidebar()` - Toggle collapse/expand sidebar
- `toggleSubmenu(event)` - Toggle submenu & tooltip balloon
- `initializeSidebar()` - Restore state dari localStorage

## 🔧 Cara Menggunakan

### Step 1: Include Scripts di `<head>`
```html
<link rel="stylesheet" href="css/style.css">
<script src="js/sidebar.js"></script>
<script src="js/components.js"></script>
```

### Step 2: Buat Placeholders di `<body>`
```html
<body>
    <!-- Header Placeholder -->
    <div id="header-placeholder"></div>

    <!-- Sidebar Placeholder -->
    <div id="sidebar-placeholder"></div>

    <!-- Main Content Wrapper -->
    <div class="main-wrapper" id="mainWrapper">
        <div class="container">
            <!-- YOUR CONTENT HERE -->
        </div>
    </div>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>
</body>
```

### Step 3: Initialize Components di `<script>`
```javascript
<script>
    // Initialize page components
    initPageComponents({
        activePage: 'dashboard', // ID halaman aktif
        userData: {
            avatar: 'DJA',
            role: 'Echelon IV DJA',
            tahun: '2025',
            jenisDok: 'RKAKL'
        }
    });

    // Your page-specific scripts...
</script>
```

## 📋 Parameter Config

### `activePage` Values:
- `'dashboard'` - Dashboard page
- `'adk-upload'` - Penerimaan ADK page
- `'monitor-upload'` - Monitor & Validasi page
- `'locking'` - Locking page
- `'reports'` - Laporan page (submenu auto-expanded)
- `'audit-trail'` - Audit Trail page

### `userData` Object:
```javascript
{
    avatar: 'DJA',           // Text di avatar circle
    role: 'Echelon IV DJA',  // Jabatan user
    tahun: '2025',           // Tahun Anggaran
    jenisDok: 'RKAKL'        // Jenis Dokumen
}
```

## 🎨 Features

### 1. **Hamburger Menu** ☰
- Position: Header (kiri atas)
- Function: Toggle sidebar collapse/expand
- State: Tersimpan di localStorage

### 2. **Sidebar Menu**
- Width normal: 260px
- Width collapsed: 70px
- Smooth transition
- Active page auto-highlight

### 3. **Submenu Laporan**
- Normal mode: Expand/collapse di bawah menu
- Collapsed mode: Balloon tooltip di samping (click trigger)
- 6 submenu items

### 4. **Tooltip Balloon** 🎈
- Trigger: Click icon 📁 (saat sidebar collapsed)
- Position: Fixed, di sebelah kanan icon
- Auto-close: Click di luar balloon
- Clickable: Semua links tetap berfungsi

## 📝 Contoh Lengkap

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page - CustomWeb SPAN</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/sidebar.js"></script>
    <script src="js/components.js"></script>
</head>
<body>
    <!-- Header Placeholder -->
    <div id="header-placeholder"></div>

    <!-- Sidebar Placeholder -->
    <div id="sidebar-placeholder"></div>

    <!-- Main Content Wrapper -->
    <div class="main-wrapper" id="mainWrapper">
        <div class="container">
            <h2>My Page Content</h2>
            <p>Content goes here...</p>
        </div>
    </div>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <script>
        // Initialize components
        initPageComponents({
            activePage: 'dashboard',
            userData: {
                avatar: 'DJA',
                role: 'Echelon IV DJA',
                tahun: '2025',
                jenisDok: 'RKAKL'
            }
        });

        // Page-specific scripts
        function myFunction() {
            // Your code...
        }
    </script>
</body>
</html>
```

## ✅ Halaman yang Sudah Menggunakan Components

1. ✅ dashboard.html
2. ✅ adk-upload.html
3. ✅ monitor-upload.html
4. ✅ locking.html
5. ✅ reports.html
6. ✅ audit-trail.html
7. ❌ index.html (Login - tidak pakai sidebar)

## 🔄 Update Header/Sidebar

Jika ingin mengubah header atau sidebar, cukup edit **satu file**:
- Edit: `js/components.js`
- Effect: Semua halaman otomatis update!

**No more duplicate code!** 🎉

## 💡 Tips

1. **Ubah userData per halaman** untuk customize user info
2. **activePage harus match** dengan ID halaman
3. **Pastikan include components.js** setelah sidebar.js
4. **Tooltip hanya muncul** saat sidebar collapsed + click 📁

## 🔍 Autocomplete Component

### Deskripsi
Component autocomplete dengan search functionality untuk dropdown Kementerian, Unit, dan SATKER.

### Features:
- ✅ Real-time search/filter
- ✅ Keyboard navigation (Arrow Up/Down, Enter, Escape)
- ✅ Clear button (×)
- ✅ Responsive dropdown
- ✅ No results message
- ✅ Data dummy terintegrasi

### Cara Menggunakan:

#### Method 1: Auto-convert (Recommended)
Tambahkan atribut `data-autocomplete` pada select element:

```html
<!-- Untuk Kementerian -->
<select class="form-control" data-autocomplete="kementerian"></select>

<!-- Untuk Unit -->
<select class="form-control" data-autocomplete="unit"></select>

<!-- Untuk SATKER -->
<select class="form-control" data-autocomplete="satker"></select>
```

Lalu panggil function `convertToAutocomplete()` setelah page load:

```javascript
// Initialize page components
initPageComponents({
    activePage: 'dashboard',
    userData: { ... }
});

// Initialize autocomplete
setTimeout(() => {
    convertToAutocomplete();
}, 200);
```

#### Method 2: Manual Init
Untuk kontrol lebih detail:

```javascript
const selectElement = document.querySelector('#mySelect');
const autocomplete = initAutocomplete(selectElement, {
    dataType: 'kementerian', // 'kementerian', 'unit', 'satker'
    placeholder: '🔍 Ketik untuk mencari...',
    onSelect: (item) => {
        console.log('Selected:', item.code, item.name);
        // Do something with selected item
    },
    filterByParent: '001' // Optional: filter by parent code
});

// API Methods:
autocomplete.getValue();        // Get selected value
autocomplete.setValue(item);    // Set value programmatically
autocomplete.clear();           // Clear selection
autocomplete.updateData(data);  // Update data source
```

### Data Structure:

```javascript
// Kementerian
{ code: '001', name: 'Kementerian Keuangan' }

// Unit (dengan parent)
{ code: '01', name: 'Direktorat Jenderal Anggaran', parent: '001' }

// SATKER (dengan parent)
{ code: '412345', name: 'Kantor Pusat DJA', parent: '01' }
```

### Keyboard Shortcuts:
- **Arrow Down** - Navigate to next item
- **Arrow Up** - Navigate to previous item
- **Enter** - Select focused item
- **Escape** - Close dropdown

### CSS Classes:
- `.autocomplete-wrapper` - Main wrapper
- `.autocomplete-dropdown` - Dropdown container
- `.autocomplete-item` - Dropdown item
- `.autocomplete-item.focused` - Focused item
- `.autocomplete-clear` - Clear button
- `.autocomplete-no-result` - No results message

### Customization:
Edit data di `js/components.js` - variable `AUTOCOMPLETE_DATA`:

```javascript
const AUTOCOMPLETE_DATA = {
    kementerian: [...],
    unit: [...],
    satker: [...]
};
```

### Halaman yang Sudah Menggunakan Autocomplete:
1. ✅ dashboard.html
2. ✅ adk-upload.html
3. ✅ locking.html
4. ✅ reports.html
5. ✅ monitor-upload.html

---

**Last Updated**: 12 November 2025
**Components Version**: 1.1


