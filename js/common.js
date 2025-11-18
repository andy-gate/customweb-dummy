/**
 * CustomWeb SPAN - Common JavaScript Functions
 * Version: 1.0
 * Date: 11 November 2025
 */

// Common utility functions
const CustomWeb = {
    
    // Format currency (Rupiah)
    formatCurrency: function(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    },

    // Format date
    formatDate: function(date, format = 'long') {
        const options = format === 'long' 
            ? { year: 'numeric', month: 'long', day: 'numeric' }
            : { year: 'numeric', month: '2-digit', day: '2-digit' };
        
        return new Intl.DateTimeFormat('id-ID', options).format(new Date(date));
    },

    // Format time
    formatTime: function(date) {
        return new Intl.DateTimeFormat('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(new Date(date));
    },

    // Show notification
    showNotification: function(message, type = 'info') {
        const colors = {
            success: '#10b981',
            warning: '#f59e0b',
            danger: '#ef4444',
            info: '#3b82f6'
        };

        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: ${colors[type] || colors.info};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },

    // Confirm dialog
    confirm: function(message, callback) {
        if (window.confirm(message)) {
            callback();
        }
    },

    // Validate form
    validateForm: function(formId) {
        const form = document.getElementById(formId);
        if (!form) return false;

        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#ef4444';
                isValid = false;
            } else {
                field.style.borderColor = '#e5e7eb';
            }
        });

        if (!isValid) {
            this.showNotification('Mohon lengkapi semua field yang wajib diisi!', 'warning');
        }

        return isValid;
    },

    // Check session
    checkSession: function() {
        const userId = sessionStorage.getItem('userId');
        if (!userId && window.location.pathname !== '/index.html' && !window.location.pathname.endsWith('index.html')) {
            window.location.href = 'index.html';
        }
        return userId;
    },

    // Get session info
    getSessionInfo: function() {
        return {
            userId: sessionStorage.getItem('userId') || 'GUEST',
            tahunAnggaran: sessionStorage.getItem('tahunAnggaran') || '2025',
            jenisDoc: sessionStorage.getItem('jenisDoc') || 'RKAKL'
        };
    },

    // Logout
    logout: function() {
        if (confirm('Apakah Anda yakin ingin logout?')) {
            sessionStorage.clear();
            window.location.href = 'index.html';
        }
    },

    // Export to Excel (dummy)
    exportToExcel: function(data, filename) {
        this.showNotification('Mengexport data ke Excel...', 'info');
        setTimeout(() => {
            this.showNotification('Export berhasil! File: ' + filename, 'success');
        }, 1000);
    },

    // Print report (dummy)
    printReport: function(reportName) {
        this.showNotification('Mempersiapkan laporan untuk dicetak...', 'info');
        setTimeout(() => {
            window.print();
        }, 500);
    },

    // Download file (dummy)
    downloadFile: function(filename, size = '2.5 MB') {
        this.showNotification('Mendownload file...', 'info');
        setTimeout(() => {
            this.showNotification(`File berhasil didownload: ${filename} (${size})`, 'success');
        }, 1500);
    },

    // Loading overlay
    showLoading: function(message = 'Loading...') {
        const overlay = document.createElement('div');
        overlay.id = 'loadingOverlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        `;

        const loadingBox = document.createElement('div');
        loadingBox.style.cssText = `
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
        `;
        loadingBox.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 1rem;">⏳</div>
            <div style="font-weight: 600;">${message}</div>
        `;

        overlay.appendChild(loadingBox);
        document.body.appendChild(overlay);
    },

    hideLoading: function() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.remove();
        }
    },

    // Search in table
    searchTable: function(tableId, searchValue) {
        const table = document.getElementById(tableId);
        if (!table) return;

        const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        const searchLower = searchValue.toLowerCase();

        Array.from(rows).forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchLower) ? '' : 'none';
        });
    },

    // Sort table
    sortTable: function(tableId, columnIndex, ascending = true) {
        const table = document.getElementById(tableId);
        if (!table) return;

        const tbody = table.getElementsByTagName('tbody')[0];
        const rows = Array.from(tbody.getElementsByTagName('tr'));

        rows.sort((a, b) => {
            const aText = a.getElementsByTagName('td')[columnIndex].textContent;
            const bText = b.getElementsByTagName('td')[columnIndex].textContent;
            
            return ascending 
                ? aText.localeCompare(bText, 'id')
                : bText.localeCompare(aText, 'id');
        });

        // Re-append sorted rows
        rows.forEach(row => tbody.appendChild(row));
    },

    // Generate random ID
    generateId: function(prefix = 'ID') {
        return prefix + '-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    },

    // Check user permission
    checkPermission: function(module, action) {
        // Dummy permission check
        // In real app, this would check against user roles and permissions
        return true;
    },

    // Get current timestamp
    getCurrentTimestamp: function() {
        const now = new Date();
        return this.formatDate(now, 'short') + ' ' + this.formatTime(now);
    }
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Auto-check session on page load (except login page)
document.addEventListener('DOMContentLoaded', function() {
    const isLoginPage = window.location.pathname.endsWith('index.html') || 
                        window.location.pathname === '/' ||
                        window.location.pathname.endsWith('/');
    
    if (!isLoginPage) {
        // CustomWeb.checkSession();
        // Commented out for demo purposes
        // Uncomment in real implementation
    }
});

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Error:', e.message);
    // In production, send to logging service
});

// Expose to global scope
window.CustomWeb = CustomWeb;


