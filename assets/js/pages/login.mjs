import { initializeLoginForm } from "../modules/components/loginForm.mjs";
import { BASE_URL, URLs } from "../utils/constants.mjs";

function loginBtn() {
    const btn = document.querySelector('.login-btn');

    btn.addEventListener('click', (e) => {
        !document.forms.login ? window.location.href = `${BASE_URL}${URLs.login}` : e.preventDefault();
    })
}

function registerBtn() {
    const btn = document.querySelector('.register-btn');

    btn.addEventListener('click', (e) => {
        !document.forms.register ? window.location.href = `${BASE_URL}${URLs.register}` : e.preventDefault();
    })
}



function main () {
    initializeLoginForm();
    loginBtn();
    registerBtn();
}

main();