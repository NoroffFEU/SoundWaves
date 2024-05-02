import { checkIfAdmin } from "./checkIfAdmin.mjs"

export function redirectToIndexPage() {
    window.location.href = "/index.html"
}

export function redirectAccessDenied() {
    const isAdmin = checkIfAdmin();

    const currentPath = window.location.pathname;
    const deniedPath = '/404/denied.html';
    const restrictedPaths = ['/post/edit.html', '/post/admin-panel.html', '/post/create.html'];

    if (!isAdmin && restrictedPaths.includes(currentPath)) {
        window.location.href = deniedPath;
    }
}
