import {
  API_BASE_URL,
  AUTH_ENDPOINTS,
  BLOG_ENDPOINTS,
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

function main() {
  initializeKonamiCode();
  initializeLoginForm();
  initializeAdminBar();
  comingFeature();
  loadSlider();

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
