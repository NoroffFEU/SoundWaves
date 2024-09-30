import { deletePost } from "../api/blog/deletePost.mjs";
import { loadFivePosts } from "../../pages/adminPanelPage.mjs";

export function loadDeleteBtn() {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", removePost);
  });
}

async function removePost(event) {
  const dataID = event.target.getAttribute("data-post-id");

  const confirmDelete = confirm("Are you sure you want to delete this post?");
  if (!confirmDelete) {
    return;
  }

  try {
    const userData = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : {
          name: "jesusnoroff",
          token: await loginUser("jesusnoroff@stud.noroff.no", "jesusnoroff"),
        };
    await deletePost(dataID, userData.name, userData.token);
    await loadFivePosts();
  } catch (error) {
    console.error(error);
  }
}
