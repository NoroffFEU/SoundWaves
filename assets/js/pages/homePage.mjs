import { loadCarouselFunctionality } from "../modules/components/carousel.mjs";
import { getPostsByUser } from "../modules/api/blog/getAllPosts.mjs";
import { BASE_URL, URLs } from "../utils/constants.mjs";
import { formData } from "../utils/formDate.mjs";
import { checkIfIsLastPage } from "../utils/checkIsLastPage.mjs";

let page = 1; 

async function loadPostsAndProcess() {
  try {
    // Get user name from local storage if it exists. 
    const userData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null;
    const name = userData?.name; 

    // Get posts by user name.
    const posts = await getPostsByUser(12, 1, name);
    const carouselPosts = posts.data.slice(0, 3);
    const remainingPosts = posts.data.slice(3);
    
    // Rendering
    renderCarousel(carouselPosts);
    renderRemainingPosts(remainingPosts);
    checkIfIsLastPage(posts.meta.isLastPage)

  } catch (error) {
    console.error(error);
  }
}

function renderCarousel(posts) {
  posts.forEach((post, index) => {
    const title = document.querySelectorAll(".hero article .title")[index];
    const tag = document.querySelectorAll(".hero article .tag")[index];
    const image = document.querySelectorAll(".hero article .featured-post")[index];

    title.textContent = post.title;
    tag.textContent = post.tags;
    image.style.backgroundImage = `url(${post.media.url})` 
    image.setAttribute("id", post.id);
    image.href = `${BASE_URL}${URLs.post}?id=${post.id}`;
  });
}

function renderRemainingPosts(posts) {
  const container = document.querySelector(".all-post");
  const template = document.querySelector("#post-template").content;
  const fragment = document.createDocumentFragment();

  posts.forEach((post, index) => {
    const clone = template.cloneNode(true);

    if (index === 0 && page === 1) {
      clone.querySelector(".post").classList.add("first-post");
      clone.querySelector(".post").setAttribute("data-first-post", "true");
    } else {
      clone.querySelector(".post").setAttribute("data-first-post", "false");
    }

    const formattedDate = formData(new Date(post.created));

    clone.querySelector(".post").setAttribute("id", post.id);
    clone.querySelector(".link").href = `${BASE_URL}${URLs.post}?id=${post.id}`;
    clone.querySelector(".title").textContent = post.title;
    clone.querySelector(".tag").textContent = post.tags;
    clone.querySelector(".date").textContent = formattedDate;

    const image = clone.querySelector("img");
    image.src = post.media.url || "../../img/logo-og.webp"
    image.alt = `${post.title} image`;
    

    fragment.appendChild(clone);
  });

  container.appendChild(fragment);
}

// Load more button
async function handleLoadMore() {
  const loadMoreButton = document.querySelector(".load-more");

  loadMoreButton.addEventListener("click", async () => {
    page++; 

    try {
      // Get user name from local storage if it exists.
      const userData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null;
      const name = userData?.name; 
      
      // Get posts by user name.
      const posts = await getPostsByUser(12, page, name);
      // Render posts.
      const restPosts = await renderRemainingPosts(posts.data);
      // Check if is last page.
      checkIfIsLastPage(posts.meta.isLastPage); 
    } catch (error) {
      console.error(error);
    }
  });
}


function loadHomePage() {
  loadPostsAndProcess();
  loadCarouselFunctionality();
  handleLoadMore();
}

loadHomePage();
