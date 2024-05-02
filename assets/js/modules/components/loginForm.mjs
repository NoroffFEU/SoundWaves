import { loginUser } from '../api/auth/login.mjs';


export function initializeLoginForm() {
    const loginForm = document.forms.login;
    
    document.forms.login?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        const response = await loginUser(email, password);
    })
}


