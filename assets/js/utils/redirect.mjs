import { checkIfAdmin } from "./checkIfAdmin.mjs";
import { BASE_URL, URLs } from "./constants.mjs";


//TODO
export function redirectToIndexPage() {
  window.location.href = `${BASE_URL}${URLs.index}`;
}

export function redirectIfAccessDenied() {
  const isAdmin = checkIfAdmin();

  const currentPath = window.location.pathname;
  const deniedPath = `${URLs.accessDenied}`;
  const restrictedPaths = [
    `${URLs.edit}`,
    `${URLs.adminPanel}`,
    `${URLs.create}`,
  ];

  if (!isAdmin && restrictedPaths.includes(currentPath)) {
    window.location.href = deniedPath;
  }
}
