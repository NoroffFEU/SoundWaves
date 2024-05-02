import { hideAdminBar, showAdminBar } from "../modules/components/adminBar.mjs";

export function checkIfAdmin() {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
        showAdminBar();
    } else {
        hideAdminBar();
    }
}

