import { loginUser } from "../modules/api/auth/login.mjs";
import { createPost } from "../modules/api/blog/createPost.mjs";
import { BASE_URL, URLs } from "../utils/constants.mjs";
import { getTokenFromLocalStorage, getUserFromLocalStorage } from "../utils/getLocalStorages.mjs";
import { loadDiscardButton } from "../modules/components/discardBtn.mjs";
import { handleThumbnailUpload } from "../utils/handleThumbnailUpload.mjs";

// Create post form
const createPostForm = document.forms.createForm;
createPostForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { title, category } = createPostForm;
  let imageUrl = document.querySelector(".image-url").textContent;

  if (!imageUrl) {
    imageUrl = "https://i.imgur.com/XSsJ7Zz.jpg";
  }

  const body = tinymce.activeEditor.getContent();
  const media = { url: imageUrl };

  if (body.length > 1999) {
    alert("Post body is too long, please keep it under 2000 characters");
    return;
  }

  try {
    if (!title.value || !category.value || !body) {
      alert("All fields are required");
      return;
    }

    const name = localStorage.getItem("userData")
      ? getUserFromLocalStorage()
      : "Jesus_AH";
    const token = localStorage.getItem("userData")
      ? getTokenFromLocalStorage()
      : await loginUser("jesalb53435@stud.noroff.no", "IamTheAdmin");

    await createPost(name, token, title.value, body, category.value, media);
    window.location.href = `${BASE_URL}${URLs.adminPanel}`;
  } catch (error) {
    console.error("Error creating post:", error);
  }
});

handleThumbnailUpload();
loadDiscardButton();