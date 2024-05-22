import { BASE_URL, URLs } from "../../utils/constants.mjs";
import { loginUser } from "../api/auth/login.mjs";

export function initializeLoginForm() {
  const loginForm = document.forms.login;
  const showPasswordIcon = document.querySelector("#showPassword");

  // Show password
  showPasswordIcon.addEventListener("click", (e) => {
    const passwordInput = loginForm.password;

    showPasswordIcon.textContent =
      showPasswordIcon.textContent === "visibility"
        ? "visibility_off"
        : "visibility";

    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });

  // Validate form on change
  loginForm.addEventListener("change", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    const emailErrorText = document.querySelector("#loginEmailError");
    const emailBorder = loginForm.email.parentElement;
    const passwordBorder = loginForm.password.parentElement;
    const passwordErrorText = document.querySelector("#loginPasswordError");

    if (!email || !email.match(/^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/)) {
      emailErrorText.style.visibility = "visible";
      emailBorder.setAttribute("data-border-error", "true");
    } else {
      emailErrorText.style.visibility = "hidden";
      emailBorder.setAttribute("data-border-error", "false");
    }

    if (!password || password.length < 8) {
      passwordErrorText.style.visibility = "visible";
      passwordBorder.setAttribute("data-border-error", "true");
    } else {
      passwordErrorText.style.visibility = "hidden";
      passwordBorder.setAttribute("data-border-error", "false");
    }
  });

  // Validate form on submit
  document.forms.login?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    const response = await loginUser(email, password);

    if (response) {
      window.location.href = `${BASE_URL}${URLs.index}`;
    } else {
      return;
    }
  });
}
