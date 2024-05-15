import { initializeRegisterForm } from "../modules/forms/registerForm.mjs";
import { loadLoginBtn } from "../utils/registerAndLoginButtons.mjs";

function main() {
    loadLoginBtn();
    initializeRegisterForm();
}

main();