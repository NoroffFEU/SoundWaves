import { loadCarouselFunctionality } from "../modules/components/carousel.mjs";
import { getPostsByUser } from "../modules/api/blog/getAllPosts.mjs";
import { BASE_URL, URLs } from "../utils/constants.mjs";
import { formData } from "../utils/formDate.mjs";

async function loadPostsAndProcess() {
  
  try {

    if (localStorage.getItem("userData")){
      const storedUser = localStorage.getItem("userData");
      const userData = JSON.parse(storedUser);
      const name = userData.name;

      const posts = await getPostsByUser(12, 1, name);
      const carouselPosts = posts.data.slice(0, 3);
      const remainingPosts = posts.data.slice(3);

      renderCarousel(carouselPosts);
      renderRemainingPosts(remainingPosts);
    } else {
      const posts = await getPostsByUser(12, 1);
      const carouselPosts = posts.data.slice(0, 3);
      const remainingPosts = posts.data.slice(3);

      renderCarousel(carouselPosts);
      renderRemainingPosts(remainingPosts);
    }

  } catch (error) {
    console.error(error);
  }
}

function checkIfIsLastPage(isLastPage) {
  const loadMoreButton = document.querySelector(".load-more");
  console.log(isLastPage);
  if (isLastPage) {
    loadMoreButton.style.display = "none";
  }
}

function renderCarousel(posts) {
  const container = document.querySelector(".hero article");
  posts.forEach((post, index) => {
    const title = document.querySelectorAll(".hero article .title")[index];
    const tag = document.querySelectorAll(".hero article .tag")[index];

    const image = document.querySelectorAll(".hero article .featured-post")[
      index
    ];

    title.textContent = post.title;
    tag.textContent = post.tags;

    image.style.backgroundImage = `url(${post.media.url})`;
    image.setAttribute("id", post.id);
    image.href = `${BASE_URL}${URLs.post}?id=${post.id}`;
  });
}

function checkIfIsFirstPost() {
  const posts = document.querySelectorAll(".post");
  console.log(posts);
}

const loadMoreButton = document.querySelector(".load-more");
loadMoreButton.addEventListener("click", loadMorePosts);
let page = 1;

async function loadMorePosts() {
  page++;
  try {
    if(localStorage.getItem("userData")){
      const storedUser = localStorage.getItem("userData");
      const userData = JSON.parse(storedUser);
      const name = userData.name;
      const posts = await getPostsByUser(12, page, name);
      await renderRemainingPosts(posts.data);
      checkIfIsLastPage(posts.meta.isLastPage);
    } else {
      const posts = await getPostsByUser(12, page);
      await renderRemainingPosts(posts.data);
      checkIfIsLastPage(posts.meta.isLastPage);
    }
  } catch (error) {
    console.error(error);
  }
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
    clone.querySelector("img").src = post.media.url; // TODO poner ternario para si no tiene imagen, que ponga un placeholder
    fragment.appendChild(clone);
  });

  container.appendChild(fragment);
}


function loadHomePage() {
  loadPostsAndProcess();
  loadCarouselFunctionality();
}

loadHomePage();
