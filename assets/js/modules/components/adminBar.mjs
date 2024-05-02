// Admin bar
import { ADMIN_BAR } from "../../utils/constants.mjs";

export function initializeAdminBar() {
        const btn = document.querySelector('#logoutBtn');
        btn?.addEventListener('click', logout) 
}

// Show-Hide Admin Bar

export function showAdminBar() {
    ADMIN_BAR?.setAttribute('data-admin-logged', 'true');
}

export function hideAdminBar() {
    ADMIN_BAR?.setAttribute('data-admin-logged', 'false');
}

// Logout

export function logout() {
    localStorage.removeItem('adminToken');
    hideAdminBar();
}

// Login

export function login(token) {
    localStorage.setItem('adminToken', token);
    showAdminBar();
}

