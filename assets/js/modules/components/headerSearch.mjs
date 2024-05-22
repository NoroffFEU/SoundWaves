import { getPostsByUser } from "../api/blog/getAllPosts.mjs";
import { BASE_URL, URLs } from "../../utils/constants.mjs";
import { getUserFromLocalStorage } from "../../utils/getLocalStorages.mjs";

export function headerSearchButtonInteractivity() {
  const headerSearchButton = document.querySelector(".header-search-btn");
  const searchPanel = document.querySelector(".search-panel");
  const mainSearchForm = document.forms.mainSearch;
  const searchInput = mainSearchForm.querySelector("input[name='search']");
  const deleteTextButton = mainSearchForm.querySelector("#deleteText");

  const categoriesPanel = document.querySelector(".categories-panel");
  const categoriesButton = document.querySelector(".header-categories-btn");

  headerSearchButton.addEventListener("click", () => {
    const searchIsClosed = searchPanel.getAttribute("data-search-is-closed");
    const categoriesAreClosed = categoriesPanel.getAttribute(
      "data-categories-closed"
    );

    if (categoriesAreClosed === "false") {
      categoriesPanel.setAttribute("data-categories-closed", "true");
    }

    if (searchIsClosed === "true") {
      searchPanel.setAttribute("data-search-is-closed", "false");
      searchInput.focus();
      deleteTextButton.style.display = "none";
    } else if (searchIsClosed === "false") {
      searchPanel.setAttribute("data-search-is-closed", "true");
      searchInput.value = "";
    }
  });

  categoriesButton.addEventListener("click", () => {
    const categoriesAreClosed = categoriesPanel.getAttribute(
      "data-categories-closed"
    );
    const searchIsClosed = searchPanel.getAttribute("data-search-is-closed");

    if (searchIsClosed === "false") {
      searchPanel.setAttribute("data-search-is-closed", "true");
      searchInput.value = "";
      deleteTextButton.style.display = "none";
    }

    if (categoriesAreClosed === "true") {
      categoriesPanel.setAttribute("data-categories-closed", "false");
    } else if (categoriesAreClosed === "false") {
      categoriesPanel.setAttribute("data-categories-closed", "true");
    }
  });

  window.addEventListener("scroll", () => {
    categoriesPanel.setAttribute("data-categories-closed", "true");
    searchPanel.setAttribute("data-search-is-closed", "true");
    searchInput.value = "";
    deleteTextButton.style.display = "none";
  });
}

export async function loadLatestPostsSearchBar() {
  const latestPosts = document.querySelectorAll(".latest-posts p");

  try {
    const name = localStorage.getItem("userData")
      ? getUserFromLocalStorage()
      : "Jesus_AH";
    const posts = await getPostsByUser(3, 1, name);
    const postsData = posts.data;

    postsData.forEach((post, index) => {
      latestPosts[index].textContent = post.title;
      latestPosts[index].setAttribute("data-post-id", post.id);
    });

    latestPosts.forEach((post) =>
      post.addEventListener("click", () => {
        const postId = post.getAttribute("data-post-id");
        window.location.href = `${BASE_URL}${URLs.post}?id=${postId}`;
      })
    );
  } catch (error) {
    console.error(error);
  }
}
