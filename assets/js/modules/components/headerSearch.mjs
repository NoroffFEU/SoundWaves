import { getPostsByUser } from "../api/blog/getAllPosts.mjs";
import { BASE_URL, URLs } from "../../utils/constants.mjs";
import { getUserFromLocalStorage } from "../../utils/getLocalStorages.mjs";

export function headerSearchButtonInteractivity() {
    const headerSearchButton = document.querySelector(".header-search-btn");

    headerSearchButton.addEventListener("click", () => {
    const searchPanel = document.querySelector(".search-panel");
    const isClosed = searchPanel.getAttribute("data-search-is-closed");

    if (isClosed === "true") {
        searchPanel.setAttribute("data-search-is-closed", "false");
    } else if (isClosed === "false") {
        searchPanel.setAttribute("data-search-is-closed", "true");
    }
    });
}

export async function loadLatestPostsSearchBar() {
    const latestPosts = document.querySelectorAll(".latest-posts p");
  
    try {
      const name = localStorage.getItem("userData") ? getUserFromLocalStorage() : "Jesus_AH";
      const posts = await getPostsByUser(3, 1, name);
      const postsData = posts.data;
  
      postsData.forEach((post, index) => {
        latestPosts[index].textContent = post.title;
        latestPosts[index].setAttribute("data-post-id", post.id);
      });
  
      latestPosts.forEach(post => post.addEventListener("click", () => {
        const postId = post.getAttribute("data-post-id");
        window.location.href = `${BASE_URL}${URLs.post}?id=${postId}`;
      }));
    } catch (error) {
      console.error(error);
    }
  }