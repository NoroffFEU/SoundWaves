import { getPostsByUser } from "../api/blog/getAllPosts.mjs";
import { tableRowTemplate } from "../../templates/tableRow.mjs";
import { paginationText } from "../../pages/adminPanelPage.mjs";
import { summaryText } from "../../pages/adminPanelPage.mjs";
import { loadDeleteBtn } from "./deleteBtn.mjs";
import { loadEditBtn } from "./editBtn.mjs";

// Filter posts by search input
export async function loadFilteredPosts(searchInput) {
    const table = document.querySelector("#table-content");
  
    let template = "";
  
    try {
      const userData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null;
      const name = userData?.name;
  
      // Get 5 posts by user name.
      const posts = await getPostsByUser(null, 1, name);
      const filteredPosts = posts.data.filter((post)=> {
        return post.title.toLowerCase().includes(searchInput.toLowerCase()) || post.tags.some((tag) => tag.toLowerCase().includes(searchInput.toLowerCase()));
      });
  
      filteredPosts.forEach((post) => {
        template += tableRowTemplate(post);
      });
  
      table.innerHTML = template;
  
      paginationText(null, null);
      summaryText();
      loadEditBtn();
      loadDeleteBtn();
    } catch (error) {
      console.log(error.message);
    }
  }