/**
 * CustomWeb SPAN - Sidebar Navigation Component
 * Version: 1.0
 * Date: 11 November 2025
 */

// Generate Sidebar HTML
function generateSidebar(activePage) {
    return `
    <!-- Sidebar -->
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
            
            <!-- Monitoring Admin -->
            <div class="nav-item-parent ${activePage === 'monitoring-admin' ? 'expanded' : ''}" onclick="toggleSubmenu(event)">
                <div class="main-content">
                    <span class="icon">⚙️</span>
                    <span class="text">Monitoring Admin</span>
                </div>
                <span class="arrow">▶</span>
                
                <!-- Tooltip for collapsed sidebar -->
                <div class="submenu-tooltip">
                    <div class="tooltip-header">⚙️ Monitoring Admin</div>
                    <a href="create-dipa-induk.html" class="tooltip-item">📝 Create DIPA Induk</a>
                    <a href="create-dipa-petikan.html" class="tooltip-item">📝 Create DIPA Petikan</a>
                    <a href="posting-interface.html" class="tooltip-item">🔄 Posting Interface</a>
                    <a href="email-notification.html" class="tooltip-item">📧 Email Notification</a>
                </div>
            </div>
            <div class="submenu ${activePage === 'monitoring-admin' ? 'expanded' : ''}">
                <a href="create-dipa-induk.html" class="submenu-item">📝 Create DIPA Induk</a>
                <a href="create-dipa-petikan.html" class="submenu-item">📝 Create DIPA Petikan</a>
                <a href="posting-interface.html" class="submenu-item">🔄 Posting Interface</a>
                <a href="email-notification.html" class="submenu-item">📧 Email Notification</a>
            </div>
            
            <a href="adk-upload.html" class="nav-item ${activePage === 'adk-upload' ? 'active' : ''}">
                <span class="icon">🔄</span>
                <span class="text">Penerimaan ADK</span>
            </a>
            
            <a href="monitor-upload.html" class="nav-item ${activePage === 'monitor-upload' ? 'active' : ''}">
                <span class="icon">🔍</span>
                <span class="text">Monitor & Validasi</span>
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
                    <a href="laporan-himpunan.html" class="tooltip-item">📚 Laporan Himpunan</a>
                    <a href="laporan-keppres.html" class="tooltip-item">📜 Laporan Keppres</a>
                </div>
            </div>
            <div class="submenu ${activePage === 'rkakl-reports' ? 'expanded' : ''}">
                <a href="rka-satker.html" class="submenu-item">📄 RKA SATKER</a>
                <a href="lampiran-kertas-kerja.html" class="submenu-item">📎 Lampiran Kertas Kerja</a>
                <a href="dhp.html" class="submenu-item">📋 DHP</a>
                <a href="laporan-himpunan.html" class="submenu-item">📚 Laporan Himpunan</a>
                <a href="laporan-keppres.html" class="submenu-item">📜 Laporan Keppres</a>
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
                    <a href="upload-bappenas-data.html" class="tooltip-item">📤 Upload BAPPENAS Data</a>
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
                    <a href="xml-download.html" class="tooltip-item">📥 XML Download</a>
                </div>
            </div>
            <div class="submenu ${activePage === 'manage-reference-data' ? 'expanded' : ''}">
                <a href="upload-bappenas-data.html" class="submenu-item">📤 Upload BAPPENAS Data</a>
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
                <a href="xml-download.html" class="submenu-item">📥 XML Download</a>
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
                    <div class="tooltip-item tooltip-subheader tooltip-parent" onclick="event.stopPropagation(); toggleNestedSubmenu(event, this)">📱 Manage Application ▶</div>
                    <div class="tooltip-nested" style="display: none;">
                        <a href="manage-program.html" class="tooltip-item tooltip-subitem">💻 Manage Program</a>
                        <a href="manage-menu.html" class="tooltip-item tooltip-subitem">📋 Manage Menu</a>
                        <a href="batch-monitoring.html" class="tooltip-item tooltip-subitem">📊 Batch Monitoring</a>
                    </div>
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
                        <span>📱 Manage Application</span>
                        <span class="nested-arrow">▶</span>
                    </div>
                </div>
                <div class="nested-submenu" style="display: none;">
                    <a href="manage-program.html" class="submenu-item submenu-subitem">💻 Manage Program</a>
                    <a href="manage-menu.html" class="submenu-item submenu-subitem">📋 Manage Menu</a>
                    <a href="batch-monitoring.html" class="submenu-item submenu-subitem">📊 Batch Monitoring</a>
                </div>
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

// Toggle Sidebar Collapse/Expand
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainWrapper = document.getElementById('mainWrapper');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    
    if (!sidebar || !mainWrapper) return;
    
    sidebar.classList.toggle('collapsed');
    mainWrapper.classList.toggle('expanded');
    
    // Always show hamburger icon
    if (hamburgerIcon) {
        hamburgerIcon.textContent = '☰';
    }
    
    // Save state
    if (sidebar.classList.contains('collapsed')) {
        localStorage.setItem('sidebarCollapsed', 'true');
    } else {
        localStorage.setItem('sidebarCollapsed', 'false');
    }
    
    // Reapply zoom fix after toggle
    applySidebarZoomFix();
    updateMainWrapperMargin();
}

// Toggle Submenu
function toggleSubmenu(event) {
    event.stopPropagation();
    const sidebar = document.getElementById('sidebar');
    const parent = event.currentTarget;
    const submenu = parent.nextElementSibling;
    const tooltip = parent.querySelector('.submenu-tooltip');
    
    // If sidebar is collapsed, show tooltip
    if (sidebar && sidebar.classList.contains('collapsed')) {
        // Close other tooltips first
        document.querySelectorAll('.submenu-tooltip').forEach(t => {
            if (t !== tooltip) t.classList.remove('active');
        });
        
        // Toggle current tooltip
        tooltip.classList.toggle('active');
        
        // Position tooltip
        const rect = parent.getBoundingClientRect();
        tooltip.style.top = rect.top + 'px';
    } else {
        // Normal behavior for expanded sidebar
        parent.classList.toggle('expanded');
        submenu.classList.toggle('expanded');
        
        // Save submenu state
        const isExpanded = parent.classList.contains('expanded');
        localStorage.setItem('submenuExpanded', isExpanded);
    }
}

// Close tooltip when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar || !sidebar.classList.contains('collapsed')) return;
    
    // If click is not on nav-item-parent, close all tooltips
    if (!event.target.closest('.nav-item-parent') && !event.target.closest('.submenu-tooltip')) {
        document.querySelectorAll('.submenu-tooltip').forEach(tooltip => {
            tooltip.classList.remove('active');
        });
    }
});

// Get browser zoom level - multiple methods for accuracy
function getZoomLevel() {
    // Method 1: Using visualViewport if available (most accurate for browser zoom)
    if (window.visualViewport && window.visualViewport.scale) {
        const vpZoom = window.visualViewport.scale;
        if (vpZoom && vpZoom > 0 && vpZoom !== Infinity) {
            return vpZoom;
        }
    }
    
    // Method 2: Using test element (most reliable for browser zoom)
    const testElement = document.createElement('div');
    testElement.style.cssText = 'width:100px;height:100px;position:absolute;visibility:hidden;top:-9999px;left:0;pointer-events:none;';
    document.body.appendChild(testElement);
    
    const rect = testElement.getBoundingClientRect();
    const measuredZoom = rect.width / 100;
    document.body.removeChild(testElement);
    
    if (measuredZoom && measuredZoom > 0 && measuredZoom !== Infinity && !isNaN(measuredZoom)) {
        return measuredZoom;
    }
    
    // Method 3: Using devicePixelRatio as last resort (may not reflect browser zoom)
    const dpr = window.devicePixelRatio || 1;
    return dpr > 0 && dpr !== Infinity ? dpr : 1;
}

// Apply zoom compensation to sidebar
function applySidebarZoomFix() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
        // Retry after a short delay if sidebar not ready
        setTimeout(applySidebarZoomFix, 50);
        return;
    }
    
    const zoom = getZoomLevel();
    const isCollapsed = sidebar.classList.contains('collapsed');
    const baseWidth = isCollapsed ? 70 : 260;
    
    // Always apply zoom compensation to ensure sidebar stays at fixed size
    // Apply inverse scale to keep sidebar at original visual size
    if (Math.abs(zoom - 1) > 0.001 && zoom > 0) {
        const inverseScale = 1 / zoom;
        
        // Use transform scale (better browser support)
        sidebar.style.transform = `scale(${inverseScale})`;
        
        // Adjust actual width to compensate for scale
        // When scaled down, the element needs to be larger to appear at base size
        sidebar.style.width = `${baseWidth * zoom}px`;
        
        // Height also needs adjustment
        const headerHeight = 90; // Header height
        const viewportHeight = window.innerHeight;
        const availableHeight = (viewportHeight - headerHeight) * zoom;
        sidebar.style.height = `${availableHeight}px`;
        
        // Adjust transform origin to keep sidebar aligned to top-left
        sidebar.style.transformOrigin = 'top left';
    } else {
        // Even at zoom 1, ensure base values are set
        sidebar.style.transform = '';
        sidebar.style.width = `${baseWidth}px`;
        sidebar.style.height = 'calc(100vh - 90px)';
        sidebar.style.transformOrigin = 'top left';
    }
}

// Update main wrapper margin to compensate for sidebar
function updateMainWrapperMargin() {
    const sidebar = document.getElementById('sidebar');
    const mainWrapper = document.getElementById('mainWrapper');
    if (!sidebar || !mainWrapper) return;
    
    const isCollapsed = sidebar.classList.contains('collapsed');
    const sidebarWidth = isCollapsed ? 70 : 260;
    
    // Main wrapper margin should always be the base width (not affected by zoom)
    mainWrapper.style.marginLeft = `${sidebarWidth}px`;
}

// Initialize Sidebar State on Page Load
function initializeSidebar() {
    // Restore sidebar collapsed state
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed');
    if (sidebarCollapsed === 'true') {
        const sidebar = document.getElementById('sidebar');
        const mainWrapper = document.getElementById('mainWrapper');
        const hamburgerIcon = document.getElementById('hamburgerIcon');
        
        if (sidebar) sidebar.classList.add('collapsed');
        if (mainWrapper) mainWrapper.classList.add('expanded');
        if (hamburgerIcon) hamburgerIcon.textContent = '☰';
    }
    
    // Restore submenu state
    const submenuExpanded = localStorage.getItem('submenuExpanded');
    if (submenuExpanded === 'true') {
        const parent = document.querySelector('.nav-item-parent');
        const submenu = document.querySelector('.submenu');
        
        if (parent) parent.classList.add('expanded');
        if (submenu) submenu.classList.add('expanded');
    }
    
    // Apply zoom fix
    applySidebarZoomFix();
    updateMainWrapperMargin();
}

// Make toggleNestedSubmenu available globally
window.toggleNestedSubmenu = toggleNestedSubmenu;

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for sidebar to be rendered
    setTimeout(() => {
        initializeSidebar();
        // Apply zoom fix immediately after initialization
        applySidebarZoomFix();
        updateMainWrapperMargin();
    }, 150);
    
    // Listen for zoom changes
    let lastZoom = getZoomLevel();
    
    // Use multiple events to detect zoom changes
    const checkZoom = () => {
        const currentZoom = getZoomLevel();
        if (Math.abs(currentZoom - lastZoom) > 0.01) {
            lastZoom = currentZoom;
            applySidebarZoomFix();
            updateMainWrapperMargin();
        }
    };
    
    // Listen to window resize (zoom often triggers resize)
    window.addEventListener('resize', checkZoom);
    
    // Also listen to visualViewport changes if available (most accurate)
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', checkZoom);
        window.visualViewport.addEventListener('scroll', checkZoom);
    }
    
    // Periodic check as fallback (check every 300ms)
    setInterval(checkZoom, 300);
    
    // Also check on window focus (user might have zoomed in another tab)
    window.addEventListener('focus', () => {
        setTimeout(checkZoom, 100);
    });
});

