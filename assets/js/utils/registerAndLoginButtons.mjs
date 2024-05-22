import { BASE_URL, URLs } from "./constants.mjs";

export function loadLoginBtn() {
  const btn = document.querySelector(".login-btn");

  btn.addEventListener("click", (e) => {
    !document.forms.login
      ? (window.location.href = `${BASE_URL}${URLs.login}`)
      : e.preventDefault();
  });
}

export function loadRegisterBtn() {
  const btn = document.querySelector(".register-btn");

  btn.addEventListener("click", (e) => {
    !document.forms.register
      ? (window.location.href = `${BASE_URL}${URLs.register}`)
      : e.preventDefault();
  });
}
