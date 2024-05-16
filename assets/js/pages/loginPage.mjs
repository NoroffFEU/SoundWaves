import { initializeLoginForm } from "../modules/forms/loginForm.mjs";
import { loadRegisterBtn } from "../utils/registerAndLoginButtons.mjs";

function loadPage () {
    loadRegisterBtn();
    initializeLoginForm();
}

loadPage();