import { BASE_URL, URLs } from "../../utils/constants.mjs";

export function loadEditBtn() {
  const editButtons = document.querySelectorAll(".edit-btn");
  editButtons.forEach((button) => {
    button.addEventListener("click", editPost);
  });
}

async function editPost(event) {
  const dataID = event.target.getAttribute("data-post-id");
  try {
    window.location.href = `${BASE_URL}${URLs.edit}?id=${dataID}`;
  } catch (error) {
    console.error(error);
  }
}
