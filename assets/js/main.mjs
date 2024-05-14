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
import { getURL } from "./utils/getURL.mjs";


const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= window.innerHeight / 2) {
    header.setAttribute("data-interactive", "true");
  } else {
    header.setAttribute("data-interactive", "false");
  }

  if (scrollPosition >= window.innerHeight) {
    header.style.top = "0rem";
  } else {
    header.style.top = "-5rem";
  }

})

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


async function loadLatestPostsSearchBar() {
  const latestPosts = document.querySelectorAll(".latest-posts p");
  
  try {
    if(localStorage.getItem("userData")) {
      const storedUser = localStorage.getItem("userData");
      const userData = JSON.parse(storedUser);
      const name = userData.name;

      const posts = await getPostsByUser(3, 1, name);
      const postsData = posts.data;

      postsData.forEach((post, index)=> {
        latestPosts[index].textContent = post.title;
        latestPosts[index].setAttribute("data-post-id", post.id);
      })

      latestPosts.forEach((post)=> {
        post.addEventListener('click', (event)=> {
          const postId = post.getAttribute("data-post-id");
          window.location.href = `${BASE_URL}${URLs.post}?id=${postId}`;
        })
        
      })
    } else {
      const posts = await getPostsByUser(3, 1);
      const postsData = posts.data;

      postsData.forEach((post, index)=> {
        latestPosts[index].textContent = post.title;
        latestPosts[index].setAttribute("data-post-id", post.id);
      })

      latestPosts.forEach((post)=> {
        post.addEventListener('click', (event)=> {
          const postId = post.getAttribute("data-post-id");
          window.location.href = `${BASE_URL}${URLs.post}?id=${postId}`;
        })
        
      })
    }
  } catch (error) {
    console.error(error);
  }
}

function main() {
  initializeKonamiCode();
  initializeAdminBar();
  loadLatestPostsSearchBar();
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
