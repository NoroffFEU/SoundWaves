import { loginUser } from "../modules/api/auth/login.mjs";
import { createPost } from "../modules/api/blog/createPost.mjs";
import { BASE_URL, URLs } from "../utils/constants.mjs";
import { getTokenFromLocalStorage, getUserFromLocalStorage } from "../utils/getLocalStorages.mjs";
import { uploadImageToImgur } from "../modules/api/imgur/imgur.mjs";

// Thumbnail and IMGur upload
const thumbnailInput = document.querySelector("#thumbnail");
thumbnailInput.addEventListener("change", async (event) => {
  const thumbnailBackground = document.querySelector(".thumbnail-background");
  const thumbnailButton = document.querySelector(".thumbnail-background span");
  const imageUrl = document.querySelector(".image-url");

  try {
    const uploadedImageUrl = await uploadImageToImgur(event.target.files[0]);
  
    if (uploadedImageUrl) {
      thumbnailBackground.style.backgroundImage = `url(${uploadedImageUrl})`;
      imageUrl.textContent = uploadedImageUrl;
      thumbnailButton.textContent = "Change thumbnail";
    } else {
      alert("Error uploading image to Imgur, please try again later.")
    }
  } catch (error) {
    console.error("Error uploading image to Imgur:", error);
  }
});

// Create post form
const createPostForm = document.forms.createForm;
createPostForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { title, category } = createPostForm;
  const imageUrl = document.querySelector(".image-url").textContent;
  const body = tinymce.activeEditor.getContent();
  const media = { url: imageUrl };

  if (body.length > 1999) {
    alert("Post body is too long, please keep it under 2000 characters");
    return;
  }

  try {
    if (!title.value || !category.value || !body || !imageUrl) {
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
