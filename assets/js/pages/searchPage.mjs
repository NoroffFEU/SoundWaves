import { getPostsByUser } from "../modules/api/blog/getAllPosts.mjs";
import { BASE_URL, URLs } from "../utils/constants.mjs";
import { formData } from "../utils/formDate.mjs";
import { getURL } from "../utils/getURL.mjs";

async function loadSearchedPosts() {
  try {
    // Check if user is logged in. If not, use default user name.
    const userName = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).name
      : "jesusnoroff";
    // Get all posts.
    const posts = await getPostsByUser(null, null, userName);
    const allPosts = posts.data;
    // Check if the search is by category or by search.
    const searchType = getURL("category") ? "category" : "search";
    // Render the search results.
    renderSearchResults(allPosts, searchType);
  } catch (error) {
    console.error(error);
  }
}

async function renderSearchResults(posts, searchType) {
  const searchHeading = document.querySelector(".search-heading h1");
  const container = document.querySelector("#searchResultContainer");
  const template = document.querySelector("#search-post-template").content;

  const urlParams =
    searchType === "search" ? getURL("search") : getURL("category");

  // If there are no search parameters, display a message.
  if (!urlParams) {
    searchHeading.textContent = `No results found`;
    return;
  }

  // Filter posts based on search parameters.
  const filteredPosts = posts.filter((post) => {
    const trimmedParams = urlParams.trim().toLowerCase();
    if (searchType === "search") {
      return trimmedParams && post.title.toLowerCase().includes(trimmedParams);
    } else {
      const cleanParams = post.tags.map((tag) =>
        tag.replace(/ /g, "-").toLowerCase()
      );
      return cleanParams.includes(trimmedParams);
    }
  });

  // If there are no results, display a message.
  if (filteredPosts.length === 0) {
    searchHeading.textContent = `No results found for "${urlParams}"`;
  } else {
    searchHeading.textContent = `Search results for "${urlParams}"`;
  }

  // Render the search results.
  filteredPosts.forEach((post) => {
    const clone = template.cloneNode(true);

    const postTitle = clone.querySelector(".title");
    const postImg = clone.querySelector(".search-result img");
    const postTags = clone.querySelector(".tag");
    const postDate = clone.querySelector(".date");
    const postLink = clone.querySelector("a");
    const formattedDate = formData(new Date(post.created));

    postTitle.textContent = post.title;
    postImg.src = post.media.url;
    postTags.textContent = post.tags;
    postDate.textContent = formattedDate;
    postLink.href = `${BASE_URL}${URLs.post}?id=${post.id}`;

    container.appendChild(clone);
  });
}

loadSearchedPosts();
