/**
 * CustomWeb SPAN - Reusable Components
 * Version: 1.0
 * Date: 11 November 2025
 */

// Generate Header Component
function generateHeader(userData = {}) {
    const { avatar = 'DJA', role = 'Echelon IV DJA', tahun = '2025', jenisDok = 'RKAKL' } = userData;
    
    return `
    <header class="header">
        <div class="header-content">
            <div class="header-left">
                <button class="hamburger-btn" onclick="toggleSidebar()" title="Toggle Menu">
                    <span id="hamburgerIcon">☰</span>
                </button>
                <div class="logo">
                    <div>
                        <h1>🏛️ CustomWeb SPAN</h1>
                        <div class="logo-subtitle">Sistem Perbendaharaan dan Anggaran Negara</div>
                    </div>
                </div>
            </div>
            <div class="user-info">
                <div class="user-profile">
                    <div class="user-avatar">${avatar}</div>
                    <div>
                        <div style="font-weight: 600;">${role}</div>
                        <div style="font-size: 0.875rem; opacity: 0.9;">TA: ${tahun} | ${jenisDok}</div>
                    </div>
                </div>
                <button class="btn-logout" onclick="logout()">Logout</button>
            </div>
        </div>
    </header>
    `;
}

// Generate Sidebar Component
function generateSidebar(activePage = '') {
    return `
    <aside class="sidebar" id="sidebar">
        <nav class="nav-menu">
            <a href="dashboard.html" class="nav-item ${activePage === 'dashboard' ? 'active' : ''}">
                <span class="icon">📊</span>
                <span class="text">Dashboard</span>
            </a>
            
            <!-- Monitoring -->
            <a href="monitoring.html" class="nav-item ${activePage === 'monitoring' ? 'active' : ''}">
                <span class="icon">🖥️</span>
                <span class="text">Monitoring</span>
            </a>
            
            <a href="adk-upload.html" class="nav-item ${activePage === 'adk-upload' ? 'active' : ''}">
                <span class="icon">🔄</span>
                <span class="text">Penerimaan ADK</span>
            </a>
            
            <a href="monitor-upload.html" class="nav-item ${activePage === 'monitor-upload' ? 'active' : ''}">
                <span class="icon">🔍</span>
                <span class="text">Monitoring Status ADK</span>
            </a>
            
            <!-- RKAKL Reports -->
            <div class="nav-item-parent ${activePage === 'rkakl-reports' ? 'expanded' : ''}" onclick="toggleSubmenu(event)">
                <div class="main-content">
                    <span class="icon">📊</span>
                    <span class="text">RKAKL Reports</span>
                </div>
                <span class="arrow">▶</span>
                
                <!-- Tooltip for collapsed sidebar -->
                <div class="submenu-tooltip">
                    <div class="tooltip-header">📊 RKAKL Reports</div>
                    <a href="rka-satker.html" class="tooltip-item">📄 RKA SATKER</a>
                    <a href="lampiran-kertas-kerja.html" class="tooltip-item">📎 Lampiran Kertas Kerja</a>
                    <a href="dhp.html" class="tooltip-item">📋 DHP</a>
                </div>
            </div>
            <div class="submenu ${activePage === 'rkakl-reports' ? 'expanded' : ''}">
                <a href="rka-satker.html" class="submenu-item">📄 RKA SATKER</a>
                <a href="lampiran-kertas-kerja.html" class="submenu-item">📎 Lampiran Kertas Kerja</a>
                <a href="dhp.html" class="submenu-item">📋 DHP</a>
            </div>
            
            <!-- DIPA Reports -->
            <div class="nav-item-parent ${activePage === 'dipa-reports' ? 'expanded' : ''}" onclick="toggleSubmenu(event)">
                <div class="main-content">
                    <span class="icon">📑</span>
                    <span class="text">DIPA Reports</span>
                </div>
                <span class="arrow">▶</span>
                
                <!-- Tooltip for collapsed sidebar -->
                <div class="submenu-tooltip">
                    <div class="tooltip-header">📑 DIPA Reports</div>
                    <a href="dipa-induk.html" class="tooltip-item">🖨️ Printing DIPA Induk</a>
                    <a href="dipa-petikan.html" class="tooltip-item">📑 Printing DIPA Petikan</a>
                </div>
            </div>
            <div class="submenu ${activePage === 'dipa-reports' ? 'expanded' : ''}">
                <a href="dipa-induk.html" class="submenu-item">🖨️ Printing DIPA Induk</a>
                <a href="dipa-petikan.html" class="submenu-item">📑 Printing DIPA Petikan</a>
            </div>
            
            <!-- Internal Reports -->
            <div class="nav-item-parent ${activePage === 'internal-reports' ? 'expanded' : ''}" onclick="toggleSubmenu(event)">
                <div class="main-content">
                    <span class="icon">📈</span>
                    <span class="text">Internal Reports</span>
                </div>
                <span class="arrow">▶</span>
                
                <!-- Tooltip for collapsed sidebar -->
                <div class="submenu-tooltip">
                    <div class="tooltip-header">📈 Internal Reports</div>
                    <a href="monitoring-pagu.html" class="tooltip-item">📊 Monitoring PAGU</a>
                    <a href="matriks-perubahan.html" class="tooltip-item">📈 Matriks Perubahan</a>
                    <a href="laporan-revisi.html" class="tooltip-item">🔄 Laporan Revisi</a>
                </div>
            </div>
            <div class="submenu ${activePage === 'internal-reports' ? 'expanded' : ''}">
                <a href="monitoring-pagu.html" class="submenu-item">📊 Monitoring PAGU</a>
                <a href="matriks-perubahan.html" class="submenu-item">📈 Matriks Perubahan</a>
                <a href="laporan-revisi.html" class="submenu-item">🔄 Laporan Revisi</a>
            </div>
            
            <!-- Manage Basic Information -->
            <div class="nav-item-parent ${activePage === 'manage-basic-info' ? 'expanded' : ''}" onclick="toggleSubmenu(event)">
                <div class="main-content">
                    <span class="icon">⚙️</span>
                    <span class="text">Manage Basic Information</span>
                </div>
                <span class="arrow">▶</span>
                
                <!-- Tooltip for collapsed sidebar -->
                <div class="submenu-tooltip">
                    <div class="tooltip-header">⚙️ Manage Basic Information</div>
                    <a href="copy-data-tahun-depan.html" class="tooltip-item">📋 Copy Data ke Tahun Depan</a>
                    <a href="manage-budgeting-period.html" class="tooltip-item">📅 Manage Budgeting period</a>
                    <a href="manage-budget-satker-list.html" class="tooltip-item">📊 Manage Budget Satker List</a>
                    <a href="managing-notification-contents.html" class="tooltip-item">📧 Managing Notification contents</a>
                    <a href="managing-disclaimer.html" class="tooltip-item">⚠️ Managing Disclaimer</a>
                    <a href="managing-jenis-revisi.html" class="tooltip-item">🔄 Managing Jenis Revisi</a>
                </div>
            </div>
            <div class="submenu ${activePage === 'manage-basic-info' ? 'expanded' : ''}">
                <a href="copy-data-tahun-depan.html" class="submenu-item">📋 Copy Data ke Tahun Depan</a>
                <a href="manage-budgeting-period.html" class="submenu-item">📅 Manage Budgeting period</a>
                <a href="manage-budget-satker-list.html" class="submenu-item">📊 Manage Budget Satker List</a>
                <a href="managing-notification-contents.html" class="submenu-item">📧 Managing Notification contents</a>
                <a href="managing-disclaimer.html" class="submenu-item">⚠️ Managing Disclaimer</a>
                <a href="managing-jenis-revisi.html" class="submenu-item">🔄 Managing Jenis Revisi</a>
            </div>
            
            <!-- Manage Reference Data -->
            <div class="nav-item-parent ${activePage === 'manage-reference-data' ? 'expanded' : ''}" onclick="toggleSubmenu(event)">
                <div class="main-content">
                    <span class="icon">📚</span>
                    <span class="text">Manage Reference Data</span>
                </div>
                <span class="arrow">▶</span>
                
                <!-- Tooltip for collapsed sidebar -->
                <div class="submenu-tooltip">
                    <div class="tooltip-header">📚 Manage Reference Data</div>
                    <div class="tooltip-item tooltip-subheader tooltip-parent" onclick="event.stopPropagation(); toggleNestedSubmenu(event, this)">📋 Atribut Anggaran ▶</div>
                    <div class="tooltip-nested" style="display: none;">
                        <a href="jenis-belanja-akun.html" class="tooltip-item tooltip-subitem">💰 Jenis Belanja/Akun</a>
                        <a href="beban-sumber-dana.html" class="tooltip-item tooltip-subitem">💵 Beban/Sumber Dana</a>
                        <a href="fungsi.html" class="tooltip-item tooltip-subitem">🎯 Fungsi</a>
                        <a href="program-kegiatan.html" class="tooltip-item tooltip-subitem">📝 Program/Kegiatan</a>
                        <a href="atribut-anggaran-lain-lain.html" class="tooltip-item tooltip-subitem">📌 Lain-lain</a>
                    </div>
                    <div class="tooltip-item tooltip-subheader tooltip-parent" onclick="event.stopPropagation(); toggleNestedSubmenu(event, this)">🏢 Struktur Organisasi ▶</div>
                    <div class="tooltip-nested" style="display: none;">
                        <a href="kl-unit.html" class="tooltip-item tooltip-subitem">🏛️ KL/Unit</a>
                        <a href="lokasi-kppn.html" class="tooltip-item tooltip-subitem">📍 Lokasi/KPPN</a>
                        <a href="penanggung-jawab-kegiatan.html" class="tooltip-item tooltip-subitem">👤 Penanggung Jawab Kegiatan</a>
                        <a href="penanda-tangan.html" class="tooltip-item tooltip-subitem">✍️ Penanda Tangan</a>
                    </div>
                </div>
            </div>
            <div class="submenu ${activePage === 'manage-reference-data' ? 'expanded' : ''}">
                <div class="submenu-parent" onclick="toggleNestedSubmenu(event, this)">
                    <div class="submenu-subheader" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                        <span>📋 Atribut Anggaran</span>
                        <span class="nested-arrow">▶</span>
                    </div>
                </div>
                <div class="nested-submenu" style="display: none;">
                    <a href="jenis-belanja-akun.html" class="submenu-item submenu-subitem">💰 Jenis Belanja/Akun</a>
                    <a href="beban-sumber-dana.html" class="submenu-item submenu-subitem">💵 Beban/Sumber Dana</a>
                    <a href="fungsi.html" class="submenu-item submenu-subitem">🎯 Fungsi</a>
                    <a href="program-kegiatan.html" class="submenu-item submenu-subitem">📝 Program/Kegiatan</a>
                    <a href="atribut-anggaran-lain-lain.html" class="submenu-item submenu-subitem">📌 Lain-lain</a>
                </div>
                <div class="submenu-parent" onclick="toggleNestedSubmenu(event, this)">
                    <div class="submenu-subheader" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                        <span>🏢 Struktur Organisasi</span>
                        <span class="nested-arrow">▶</span>
                    </div>
                </div>
                <div class="nested-submenu" style="display: none;">
                    <a href="kl-unit.html" class="submenu-item submenu-subitem">🏛️ KL/Unit</a>
                    <a href="lokasi-kppn.html" class="submenu-item submenu-subitem">📍 Lokasi/KPPN</a>
                    <a href="penanggung-jawab-kegiatan.html" class="submenu-item submenu-subitem">👤 Penanggung Jawab Kegiatan</a>
                    <a href="penanda-tangan.html" class="submenu-item submenu-subitem">✍️ Penanda Tangan</a>
                </div>
            </div>
            
            <!-- Manage Authority/User/Menu -->
            <div class="nav-item-parent ${activePage === 'manage-authority' ? 'expanded' : ''}" onclick="toggleSubmenu(event)">
                <div class="main-content">
                    <span class="icon">👥</span>
                    <span class="text">Manage Authority/User/Menu</span>
                </div>
                <span class="arrow">▶</span>
                
                <!-- Tooltip for collapsed sidebar -->
                <div class="submenu-tooltip">
                    <div class="tooltip-header">👥 Manage Authority/User/Menu</div>
                    <a href="manage-common-code.html" class="tooltip-item">📋 Manage Common code</a>
                    <div class="tooltip-item tooltip-subheader tooltip-parent" onclick="event.stopPropagation(); toggleNestedSubmenu(event, this)">🔐 Manage Authority ▶</div>
                    <div class="tooltip-nested" style="display: none;">
                        <a href="manage-job-position.html" class="tooltip-item tooltip-subitem">💼 Manage Job position</a>
                        <a href="manage-authority-code.html" class="tooltip-item tooltip-subitem">🔑 Manage Authority code</a>
                        <a href="manage-authority-over-menu.html" class="tooltip-item tooltip-subitem">🎯 Manage Authority over menu</a>
                        <a href="manage-user-information.html" class="tooltip-item tooltip-subitem">👤 Manage User information</a>
                    </div>
                </div>
            </div>
            <div class="submenu ${activePage === 'manage-authority' ? 'expanded' : ''}">
                <a href="manage-common-code.html" class="submenu-item">📋 Manage Common code</a>
                <div class="submenu-parent" onclick="toggleNestedSubmenu(event, this)">
                    <div class="submenu-subheader" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                        <span>🔐 Manage Authority</span>
                        <span class="nested-arrow">▶</span>
                    </div>
                </div>
                <div class="nested-submenu" style="display: none;">
                    <a href="manage-job-position.html" class="submenu-item submenu-subitem">💼 Manage Job position</a>
                    <a href="manage-authority-code.html" class="submenu-item submenu-subitem">🔑 Manage Authority code</a>
                    <a href="manage-authority-over-menu.html" class="submenu-item submenu-subitem">🎯 Manage Authority over menu</a>
                    <a href="manage-user-information.html" class="submenu-item submenu-subitem">👤 Manage User information</a>
                </div>
            </div>
            
            <a href="batch-monitoring.html" class="nav-item ${activePage === 'batch-monitoring' ? 'active' : ''}">
                <span class="icon">📊</span>
                <span class="text">Batch Monitoring</span>
            </a>
            
            <a href="audit-trail.html" class="nav-item ${activePage === 'audit-trail' ? 'active' : ''}">
                <span class="icon">🔎</span>
                <span class="text">Audit Trail</span>
            </a>
        </nav>
    </aside>
    `;
}

// Toggle Nested Submenu
function toggleNestedSubmenu(event, element) {
    event.stopPropagation();
    const sidebar = document.getElementById('sidebar');
    const isCollapsed = sidebar && sidebar.classList.contains('collapsed');
    
    if (isCollapsed) {
        // Handle tooltip nested submenu
        const nestedMenu = element.nextElementSibling;
        
        if (nestedMenu && nestedMenu.classList.contains('tooltip-nested')) {
            const isExpanded = nestedMenu.style.display !== 'none' && nestedMenu.style.display !== '';
            nestedMenu.style.display = isExpanded ? 'none' : 'block';
            
            // Update arrow in tooltip parent
            const currentText = element.textContent;
            if (currentText.includes('▶')) {
                element.textContent = currentText.replace('▶', '▼');
            } else if (currentText.includes('▼')) {
                element.textContent = currentText.replace('▼', '▶');
            }
        }
    } else {
        // Handle regular nested submenu
        const nestedMenu = element.nextElementSibling;
        const arrow = element.querySelector('.nested-arrow');
        
        if (nestedMenu && nestedMenu.classList.contains('nested-submenu')) {
            const isExpanded = nestedMenu.style.display !== 'none' && nestedMenu.style.display !== '';
            
            if (isExpanded) {
                nestedMenu.style.display = 'none';
                nestedMenu.classList.remove('show');
                if (arrow) {
                    arrow.textContent = '▶';
                }
                element.classList.remove('expanded');
            } else {
                nestedMenu.style.display = 'block';
                nestedMenu.classList.add('show');
                if (arrow) {
                    arrow.textContent = '▼';
                }
                element.classList.add('expanded');
            }
        }
    }
}

// Generate Footer Component
function generateFooter() {
    return `
    <footer class="footer">
        <p>CustomWeb SPAN - Sistem Perbendaharaan dan Anggaran Negara</p>
        <p style="font-size: 0.875rem; margin-top: 0.5rem;">Version 1.0 | SPAN-BT-CW-UG | © 2025</p>
    </footer>
    `;
}

// Initialize Page Components
function initPageComponents(config = {}) {
    const {
        activePage = '',
        userData = {
            avatar: 'DJA',
            role: 'Echelon IV DJA',
            tahun: '2025',
            jenisDok: 'RKAKL'
        }
    } = config;
    
    // Insert header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = generateHeader(userData);
    }
    
    // Insert sidebar
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    if (sidebarPlaceholder) {
        sidebarPlaceholder.outerHTML = generateSidebar(activePage);
    }
    
    // Insert footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = generateFooter();
    }
    
    // Initialize sidebar state
    setTimeout(() => {
        if (typeof initializeSidebar === 'function') {
            initializeSidebar();
        }
    }, 150);
}

// Make it available globally
window.initPageComponents = initPageComponents;
window.toggleNestedSubmenu = toggleNestedSubmenu;

/**
 * Autocomplete Component
 * Transforms a regular input into an autocomplete with search functionality
 */

// Sample Data for Autocomplete
const AUTOCOMPLETE_DATA = {
    kementerian: [
        { code: '001', name: 'Kementerian Keuangan' },
        { code: '002', name: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi' },
        { code: '003', name: 'Kementerian Dalam Negeri' },
        { code: '004', name: 'Kementerian Luar Negeri' },
        { code: '005', name: 'Kementerian Pertahanan' },
        { code: '006', name: 'Kementerian Hukum dan HAM' },
        { code: '007', name: 'Kementerian Kesehatan' },
        { code: '008', name: 'Kementerian Sosial' },
        { code: '009', name: 'Kementerian Ketenagakerjaan' },
        { code: '010', name: 'Kementerian Perindustrian' },
        { code: '011', name: 'Kementerian Perdagangan' },
        { code: '012', name: 'Kementerian Pertanian' },
        { code: '013', name: 'Kementerian ESDM' },
        { code: '014', name: 'Kementerian PUPR' },
        { code: '015', name: 'Kementerian Perhubungan' },
        { code: '016', name: 'Kementerian Kelautan dan Perikanan' },
        { code: '017', name: 'Kementerian Pariwisata dan Ekonomi Kreatif' },
        { code: '018', name: 'Kementerian Komunikasi dan Informatika' },
        { code: '019', name: 'Kementerian Agraria dan Tata Ruang/BPN' },
        { code: '020', name: 'Kementerian Lingkungan Hidup dan Kehutanan' }
    ],
    unit: [
        { code: '01', name: 'Direktorat Jenderal Anggaran', parent: '001' },
        { code: '02', name: 'Direktorat Jenderal Perbendaharaan', parent: '001' },
        { code: '03', name: 'Direktorat Jenderal Pajak', parent: '001' },
        { code: '04', name: 'Direktorat Jenderal Bea dan Cukai', parent: '001' },
        { code: '05', name: 'Direktorat Jenderal Kekayaan Negara', parent: '001' },
        { code: '06', name: 'Direktorat Jenderal Perimbangan Keuangan', parent: '001' },
        { code: '07', name: 'Badan Kebijakan Fiskal', parent: '001' },
        { code: '08', name: 'Sekretariat Jenderal', parent: '001' },
        { code: '09', name: 'Inspektorat Jenderal', parent: '001' },
        { code: '10', name: 'Badan Pendidikan dan Pelatihan Keuangan', parent: '001' },
        { code: '11', name: 'Direktorat Jenderal Pendidikan Vokasi', parent: '002' },
        { code: '12', name: 'Direktorat Jenderal Pendidikan Tinggi', parent: '002' },
        { code: '13', name: 'Direktorat Jenderal PAUD dan Pendidikan Dasar', parent: '002' },
        { code: '14', name: 'Direktorat Jenderal Kebudayaan', parent: '002' },
        { code: '15', name: 'Badan Penelitian dan Pengembangan', parent: '002' }
    ],
    satker: [
        { code: '412345', name: 'Kantor Pusat DJA', parent: '01' },
        { code: '412346', name: 'Kantor Wilayah Jakarta DJA', parent: '01' },
        { code: '412347', name: 'Kantor Wilayah Surabaya DJA', parent: '01' },
        { code: '412348', name: 'Kantor Wilayah Bandung DJA', parent: '01' },
        { code: '412349', name: 'Kantor Wilayah Medan DJA', parent: '01' },
        { code: '413001', name: 'Kantor Pusat DJPB', parent: '02' },
        { code: '413002', name: 'Kantor Wilayah Jakarta DJPB', parent: '02' },
        { code: '413003', name: 'KPPN Jakarta I', parent: '02' },
        { code: '413004', name: 'KPPN Jakarta II', parent: '02' },
        { code: '413005', name: 'KPPN Surabaya', parent: '02' },
        { code: '414001', name: 'Kantor Pusat DJP', parent: '03' },
        { code: '414002', name: 'Kanwil DJP Jakarta', parent: '03' },
        { code: '414003', name: 'KPP Pratama Jakarta Pusat', parent: '03' }
    ]
};

// Initialize Autocomplete on an input element
function initAutocomplete(inputElement, config = {}) {
    const {
        dataType = 'kementerian', // 'kementerian', 'unit', 'satker'
        placeholder = 'Ketik untuk mencari...',
        onSelect = null,
        filterByParent = null // Filter data by parent code
    } = config;

    // Get data
    let data = AUTOCOMPLETE_DATA[dataType] || [];
    
    // Filter by parent if specified
    if (filterByParent) {
        data = data.filter(item => item.parent === filterByParent);
    }

    // Store original select if converting from select
    const parentDiv = inputElement.parentElement;
    
    // Create autocomplete wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'autocomplete-wrapper';
    
    // Create input if element is select
    let input;
    if (inputElement.tagName === 'SELECT') {
        input = document.createElement('input');
        input.type = 'text';
        input.className = inputElement.className;
        input.placeholder = placeholder;
        input.setAttribute('autocomplete', 'off');
        
        // Replace select with input
        inputElement.replaceWith(wrapper);
        wrapper.appendChild(input);
    } else {
        input = inputElement;
        input.placeholder = placeholder;
        input.setAttribute('autocomplete', 'off');
        inputElement.replaceWith(wrapper);
        wrapper.appendChild(input);
    }
    
    // Create dropdown list
    const dropdown = document.createElement('div');
    dropdown.className = 'autocomplete-dropdown';
    wrapper.appendChild(dropdown);
    
    // Create clear button
    const clearBtn = document.createElement('button');
    clearBtn.className = 'autocomplete-clear';
    clearBtn.innerHTML = '×';
    clearBtn.type = 'button';
    clearBtn.style.display = 'none';
    wrapper.appendChild(clearBtn);
    
    // Store selected value
    let selectedValue = null;
    
    // Filter and display results
    function filterResults(query) {
        const filtered = data.filter(item => {
            const searchText = `${item.code} ${item.name}`.toLowerCase();
            return searchText.includes(query.toLowerCase());
        });
        
        displayResults(filtered);
    }
    
    // Display results in dropdown
    function displayResults(results) {
        dropdown.innerHTML = '';
        
        if (results.length === 0) {
            dropdown.innerHTML = '<div class="autocomplete-item autocomplete-no-result">Tidak ada hasil</div>';
            dropdown.classList.add('active');
            return;
        }
        
        results.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'autocomplete-item';
            div.innerHTML = `<strong>${item.code}</strong> - ${item.name}`;
            div.dataset.code = item.code;
            div.dataset.name = item.name;
            
            div.addEventListener('click', () => {
                selectItem(item);
            });
            
            dropdown.appendChild(div);
        });
        
        dropdown.classList.add('active');
    }
    
    // Select an item
    function selectItem(item) {
        input.value = `${item.code} - ${item.name}`;
        selectedValue = item;
        dropdown.classList.remove('active');
        clearBtn.style.display = 'block';
        
        // Call onSelect callback
        if (onSelect && typeof onSelect === 'function') {
            onSelect(item);
        }
    }
    
    // Clear selection
    function clearSelection() {
        input.value = '';
        selectedValue = null;
        dropdown.classList.remove('active');
        clearBtn.style.display = 'none';
        input.focus();
    }
    
    // Event listeners
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        
        if (value.length > 0) {
            clearBtn.style.display = 'block';
            filterResults(value);
        } else {
            clearBtn.style.display = 'none';
            dropdown.classList.remove('active');
            selectedValue = null;
        }
    });
    
    input.addEventListener('focus', (e) => {
        if (e.target.value.length > 0) {
            filterResults(e.target.value);
        }
    });
    
    clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        clearSelection();
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
    
    // Keyboard navigation
    let focusedIndex = -1;
    input.addEventListener('keydown', (e) => {
        const items = dropdown.querySelectorAll('.autocomplete-item:not(.autocomplete-no-result)');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            focusedIndex = Math.min(focusedIndex + 1, items.length - 1);
            updateFocus(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            focusedIndex = Math.max(focusedIndex - 1, 0);
            updateFocus(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (focusedIndex >= 0 && items[focusedIndex]) {
                const code = items[focusedIndex].dataset.code;
                const name = items[focusedIndex].dataset.name;
                selectItem({ code, name });
            }
        } else if (e.key === 'Escape') {
            dropdown.classList.remove('active');
        }
    });
    
    function updateFocus(items) {
        items.forEach((item, index) => {
            if (index === focusedIndex) {
                item.classList.add('focused');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('focused');
            }
        });
    }
    
    // Return API
    return {
        getValue: () => selectedValue,
        setValue: (item) => selectItem(item),
        clear: () => clearSelection(),
        updateData: (newData) => {
            data = newData;
        }
    };
}

// Helper function to convert all selects with specific class to autocomplete
function convertToAutocomplete() {
    // Convert Kementerian dropdowns
    document.querySelectorAll('select[data-autocomplete="kementerian"]').forEach(select => {
        initAutocomplete(select, {
            dataType: 'kementerian',
            placeholder: '🔍 Ketik kode atau nama kementerian...'
        });
    });
    
    // Convert Unit dropdowns
    document.querySelectorAll('select[data-autocomplete="unit"]').forEach(select => {
        initAutocomplete(select, {
            dataType: 'unit',
            placeholder: '🔍 Ketik kode atau nama unit...'
        });
    });
    
    // Convert SATKER dropdowns
    document.querySelectorAll('select[data-autocomplete="satker"]').forEach(select => {
        initAutocomplete(select, {
            dataType: 'satker',
            placeholder: '🔍 Ketik kode atau nama SATKER...'
        });
    });
}

// Make functions available globally
window.initAutocomplete = initAutocomplete;
window.convertToAutocomplete = convertToAutocomplete;
window.AUTOCOMPLETE_DATA = AUTOCOMPLETE_DATA;


