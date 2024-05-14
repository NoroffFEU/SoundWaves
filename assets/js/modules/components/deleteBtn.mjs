import { deletePost } from "../api/blog/deletePost.mjs";
import { loadFivePosts } from "./adminPanel.mjs";

export function loadDeleteBtn() {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", removePost);
  });
}

async function removePost(event) {
    const dataID = event.target.getAttribute("data-post-id");
    try {
      if(localStorage.getItem('userData')) {
        const storedUser = localStorage.getItem('userData');
        const userData = JSON.parse(storedUser);
        const name = userData.name;
        const token = userData.token;
        const deletedPost = await deletePost(dataID, name, token);
        await loadFivePosts();
      } else {
        const adminToken = await loginUser("jesalb53435@stud.noroff.no", "IamTheAdmin");
        const deletedPost = await deletePost(dataID, 'Jesus_AH', adminToken);
        await loadFivePosts();
      }
    } catch (error) {
        console.error(error);
    } 
}