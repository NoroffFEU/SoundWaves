import { BASE_URL, URLs } from '../../utils/constants.mjs';
import { loginUser } from '../api/auth/login.mjs';


export function initializeLoginForm() {
    const loginForm = document.forms.login;
    
    document.forms.login?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        const response = await loginUser(email, password);
        
        if (response) {
            window.location.href = `${BASE_URL}${URLs.index}`
        } else {
            return
        }
    })
}




// export function initializeLoginForm() {
//     const loginForm = document.forms.login;
    
//     document.forms.login?.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         const email = loginForm.email.value;
//         const password = loginForm.password.value;
//         const response = await loginUser(email, password);
        
//         if (response) {
//             window.location.href = `${BASE_URL}${URLs.index}`
//         }
//     })
// }


