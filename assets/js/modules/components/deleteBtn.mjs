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

    const confirmDelete = confirm("Are you sure you want to delete this post?")
    if (!confirmDelete) {
      return;
    }

    try {
      const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : { name: 'Jesus_AH', token: await loginUser("jesalb53435@stud.noroff.no", "IamTheAdmin") };
      await deletePost(dataID, userData.name, userData.token);
      await loadFivePosts();
    } catch (error) {
        console.error(error);
    } 
}