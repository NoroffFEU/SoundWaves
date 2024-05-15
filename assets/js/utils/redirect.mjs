import { BASE_URL, URLs } from "./constants.mjs";

export function redirectToIndexPage() {
  window.location.href = `${BASE_URL}${URLs.index}`;
}

export function redirectIfAccessDenied() {
  const userLoggedIn = localStorage.getItem('userData') ? true : false;
  const createPage = window.location.href.includes('create.html');
  const editPage = window.location.href.includes('edit.html');
  const adminPanelPage = window.location.href.includes('admin-panel.html');

  if (!userLoggedIn && (createPage || editPage || adminPanelPage)) {
    window.location.href = `${BASE_URL}${URLs.accessDenied}`
  } 
}
