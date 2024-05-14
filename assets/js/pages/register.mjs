import { initializeRegisterForm } from "../modules/components/registerForm.mjs";
import { loadLoginBtn } from "../utils/registerAndLoginButtons.mjs";

function main() {
    loadLoginBtn();
    initializeRegisterForm();
}

main();