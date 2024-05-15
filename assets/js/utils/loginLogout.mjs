// Login
export function login(loginData) {
    const userData = {
        name: loginData.name,
        token: loginData.accessToken,
    }
    localStorage.setItem('userData', JSON.stringify(userData));
}

// Logout
export function logout() {
    localStorage.removeItem('userData');
}
