import { initializeRegisterForm } from "../modules/forms/registerForm.mjs";
import { loadLoginBtn } from "../utils/registerAndLoginButtons.mjs";

function loadPage() {
    loadLoginBtn();
    initializeRegisterForm();
}

loadPage();