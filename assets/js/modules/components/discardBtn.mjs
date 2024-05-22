import { BASE_URL, URLs } from "../../utils/constants.mjs";

export function loadDiscardButton() {
  const discardButton = document.querySelector("#discard");
  discardButton.addEventListener("click", (e) => {
    e.preventDefault();
    const confirmation = confirm("Are you sure you want to go back?");
    if (confirmation) {
      window.location.href = `${BASE_URL}${URLs.adminPanel}`;
    }
  });
}
