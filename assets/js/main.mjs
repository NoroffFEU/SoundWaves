import {
  API_BASE_URL,
  AUTH_ENDPOINTS,
  BASE_URL,
  BLOG_ENDPOINTS,
  URLs,
} from "./utils/constants.mjs";
import { registerUser } from "./modules/api/auth/register.mjs";
import { loginUser } from "./modules/api/auth/login.mjs";
import { getPostsByUser } from "./modules/api/blog/getAllPosts.mjs";
import { getPostByID } from "./modules/api/blog/getPostByID.mjs";
import { createPost } from "./modules/api/blog/createPost.mjs";
import { deletePost } from "./modules/api/blog/deletePost.mjs";
import { editPost } from "./modules/api/blog/editPost.mjs";
import { initializeKonamiCode } from "./utils/konamiCode.mjs";
import { initializeLoginForm } from "./modules/components/loginForm.mjs";
import { checkIfAdmin } from "./utils/checkIfAdmin.mjs";
import { comingFeature } from "./utils/commingFeature.mjs";
import { initializeAdminBar } from "./modules/components/adminBar.mjs";
import { redirectIfAccessDenied } from "./utils/redirect.mjs";
import { loadSlider } from "./modules/components/slider.mjs";
import { loadCarouselFunctionallity } from "./modules/components/carousel.mjs";
import { getURL } from "./utils/getURL.mjs";

// async function loadPostsAndProcess() {
//   try {
//       const posts = await getPostsByUser(12, 1);
//       const carouselPosts = posts.data.slice(0, 3);
//       const remainingPosts = posts.data.slice(3);

//       renderCarousel(carouselPosts);
//       renderRemainingPosts(remainingPosts);
//   }
//   catch (error) {
//       console.error(error);
//   }
// }

// function checkIfIsLastPage(isLastPage) {
//   const loadMoreButton = document.querySelector(".load-more");
//   console.log(isLastPage)
//   if (isLastPage) {
//     loadMoreButton.style.display = "none";
//   }
// }

// function renderCarousel(posts) {
//   const container = document.querySelector(".hero article");
//   posts.forEach((post, index, array)=> {
//     const title = document.querySelectorAll(".hero article .title")[index];
//     const tag = document.querySelectorAll(".hero article .tag")[index];
//     const date = document.querySelectorAll(".hero article .date")[index];
//     const image = document.querySelectorAll(".hero article .featured-post")[index];

//     title.textContent = post.title;
//     tag.textContent = post.tags;
//     date.textContent = post.created;
//     image.style.backgroundImage = `url(${post.media.url})`;
//     image.setAttribute("id", post.id);
//     image.href = `${BASE_URL}${URLs.post}?id=${post.id}`;

//   })
// }

// function checkIfIsFirstPost() {
//   const posts = document.querySelectorAll(".post");
//   console.log(posts)

// }

// const loadMoreButton = document.querySelector(".load-more");
// loadMoreButton.addEventListener("click", loadMorePosts);
// let page = 1;

// async function loadMorePosts() {
//   page++;
//   try {
//     const posts = await getPostsByUser(12, page);

//     // if (posts.data.length === 0) {
//     //   loadMoreButton.style.display = "none";
//     //   return;
//     // }
//     await renderRemainingPosts(posts.data);
//     checkIfIsLastPage(posts.meta.isLastPage);
//     console.log(page)
//   }
//   catch (error) {
//     console.error(error);
//   }
// }

// function renderRemainingPosts(posts) {
//   const container = document.querySelector(".all-post");
//   const template = document.querySelector("#post-template").content;
//   const fragment = document.createDocumentFragment();

//   console.log(template)
//   posts.forEach((post, index, array)=> {
//     const clone = template.cloneNode(true);

//     if (index === 0 && page === 1) {
//       clone.querySelector(".post").classList.add("first-post");
//       clone.querySelector(".post").setAttribute("data-first-post", "true");
//     } else {
//       clone.querySelector(".post").setAttribute("data-first-post", "false");
//     }

//     clone.querySelector(".post").setAttribute("id", post.id);
//     clone.querySelector(".link").href = `${BASE_URL}${URLs.post}?id=${post.id}`;
//     clone.querySelector(".title").textContent = post.title;
//     clone.querySelector(".tag").textContent = post.tags;
//     clone.querySelector(".date").textContent = post.created;
//     clone.querySelector("img").src = post.media.url;  // TODO poner ternario para si no tiene imagen, que ponga un placeholder
//     fragment.appendChild(clone);
//   })

//   container.appendChild(fragment);

// }

function main() {
  initializeKonamiCode();
  initializeLoginForm();
  initializeAdminBar();
  comingFeature();
  // loadCarousel();

  // loadPostsAndProcess();
  // checkIfIsFirstPost();

  // registerUser();

  // getPostsByUser()
  // getPostByID("5e377326-5af3-42a8-8f92-ae57f31dae6d")
  // editPost('6cd97ebb-a1b0-466e-88c1-f433ccf02282', 'Jesus_AH')
  //   createPost("Jesus_AH")
  // deletePost('a25b8b77-91c5-4273-a822-a06f6de11c2b', 'Jesus_AH')
  // registerUser('prukjlh1asdfad' , 'dfasfa@stud.noroff.no', 'asesesede');
}

main();

// email: "jesalb53435@stud.noroff.no",
//         password: "IamTheAdmin",
