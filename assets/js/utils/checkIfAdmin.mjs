export function checkIfAdmin() {
    const adminToken = localStorage.getItem('adminToken');
    return adminToken ? true : false;
}

