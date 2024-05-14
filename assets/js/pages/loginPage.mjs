import { initializeLoginForm } from "../modules/components/loginForm.mjs";
import { loadRegisterBtn } from "../utils/registerAndLoginButtons.mjs";

function main () {
    loadRegisterBtn();
    initializeLoginForm();
}

main();