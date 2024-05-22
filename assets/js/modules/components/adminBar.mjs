// Admin bar
import { ADMIN_BAR } from "../../utils/constants.mjs";
import { redirectToIndexPage } from "../../utils/redirect.mjs";
import { logout } from "../../utils/loginLogout.mjs";

export function initializeAdminBar() {
  const storedToken = localStorage.getItem("userData");
  const userData = JSON.parse(storedToken);
  const token = userData?.token;

  const logoutBtn = document.querySelector("#logoutBtn");
  logoutBtn?.addEventListener("click", () => {
    logout();
    redirectToIndexPage();
  });

  token ? showAdminBar() : hideAdminBar();
}

// Show-Hide Admin Bar
export function showAdminBar() {
  ADMIN_BAR?.setAttribute("data-admin-logged", "true");
}
export function hideAdminBar() {
  ADMIN_BAR?.setAttribute("data-admin-logged", "false");
}
