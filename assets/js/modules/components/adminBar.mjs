// Admin bar
import { ADMIN_BAR } from "../../utils/constants.mjs";
import { redirectToIndexPage } from "../../utils/redirect.mjs";

export function initializeAdminBar() {
    const adminToken = localStorage.getItem('adminToken');
    const btn = document.querySelector('#logoutBtn');
    btn?.addEventListener('click', (event)=> {
        logout();
        redirectToIndexPage();
    }) 
    adminToken ? login() : logout();
        
}

// Login

export function login(token) {
    localStorage.setItem('adminToken', token);
    showAdminBar();
}

// Logout

export function logout() {
    localStorage.removeItem('adminToken');
    hideAdminBar();
}


// Show-Hide Admin Bar

export function showAdminBar() {
    ADMIN_BAR?.setAttribute('data-admin-logged', 'true');
}

export function hideAdminBar() {
    ADMIN_BAR?.setAttribute('data-admin-logged', 'false');
}
