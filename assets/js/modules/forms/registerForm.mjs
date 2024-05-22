import { BASE_URL, URLs } from "../../utils/constants.mjs";
import { registerUser } from "../api/auth/register.mjs";
import { displayError } from "../components/errorDisplay.mjs";

export function initializeRegisterForm() {
  const registerForm = document.forms.register;
  const showPasswordIcon = document.querySelector("#showPasswordIcon");
  const repeatPasswordIcon = document.querySelector("#repeatPasswordIcon");

  // Show password icon
  showPasswordIcon.addEventListener("click", (e) => {
    const passwordInput = registerForm.password;

    showPasswordIcon.textContent =
      showPasswordIcon.textContent === "visibility"
        ? "visibility_off"
        : "visibility";

    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });

  // Repeat password icon
  repeatPasswordIcon.addEventListener("click", (e) => {
    const repeatPasswordInput = registerForm.repeatPassword;
    repeatPasswordIcon.textContent =
      repeatPasswordIcon.textContent === "visibility"
        ? "visibility_off"
        : "visibility";

    repeatPasswordInput.type =
      repeatPasswordInput.type === "password" ? "text" : "password";
  });

  // Validate form on change
  registerForm.addEventListener("change", (e) => {
    e.preventDefault();
    const name = registerForm.userName.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    const repeatPassword = registerForm.repeatPassword.value;

    const nameErrorText = document.querySelector("#registerNameError");
    const emailErrorText = document.querySelector("#registerEmailError");
    const passwordErrorText = document.querySelector("#registerPasswordError");
    const repeatPasswordErrorText = document.querySelector(
      "#repeatPasswordError"
    );

    const nameBorder = registerForm.userName.parentElement;
    const emailBorder = registerForm.email.parentElement;
    const passwordBorder = registerForm.password.parentElement;
    const repeatPasswordBorder = registerForm.repeatPassword.parentElement;

    if (!name || !name.match(/^[a-zA-Z0-9_]+$/)) {
      nameErrorText.style.visibility = "visible";
      nameBorder.setAttribute("data-border-error", "true");
    } else {
      nameErrorText.style.visibility = "hidden";
      nameBorder.setAttribute("data-border-error", "false");
    }

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

    if (password !== repeatPassword) {
      repeatPasswordErrorText.style.visibility = "visible";
      repeatPasswordBorder.setAttribute("data-border-error", "true");
    } else {
      repeatPasswordErrorText.style.visibility = "hidden";
      repeatPasswordBorder.setAttribute("data-border-error", "false");
    }
  });

  // Validate form on submit
  document.forms.register?.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const name = registerForm.userName.value;
      const email = registerForm.email.value;
      const password = registerForm.password.value;
      const repeatPassword = registerForm.repeatPassword.value;

      if (password !== repeatPassword) {
        displayError(new Error("Passwords do not match"));
        return;
      }

      if (password.length < 8) {
        displayError(new Error("Password must be at least 8 characters long"));
        return;
      }

      if (!email.match(/^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/)) {
        displayError(
          new Error(
            "The email value must be a valid stud.noroff.no email address."
          )
        );
        return;
      }

      if (!name.match(/^[a-zA-Z0-9_]+$/)) {
        displayError(
          new Error(
            "The name value must not contain punctuation symbols apart from underscore (_)"
          )
        );
        return;
      }

      const response = await registerUser(name, email, password);

      if (response) {
        window.location.href = `${BASE_URL}${URLs.login}`;
      } else {
        throw new Error("Profile already exists. Please log in.");
      }
    } catch (error) {
      displayError(error);
    }
  });
}
