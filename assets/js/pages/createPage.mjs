import { loginUser } from "../modules/api/auth/login.mjs";
import { createPost } from "../modules/api/blog/createPost.mjs";
import { BASE_URL, URLs } from "../utils/constants.mjs";
import {
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
} from "../utils/getLocalStorages.mjs";

const CLIENT_ID = "d7ac36c85a3852a";
const ACCESS_TOKEN = "677864924d901ab7d356d7e28497937ca088e659";

const thumbnailInput = document.querySelector("#thumbnail");

thumbnailInput.addEventListener("change", async (event) => {
  const thumbnailBackground = document.querySelector(".thumbnail-background");
  const thumbnailButton = document.querySelector(".thumbnail-background span");
  const imageUrl = document.querySelector(".image-url");

  try {
    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: event.target.files[0],
    });

    const data = await response.json();

    if (data.success) {
      thumbnailBackground.style.backgroundImage = `url(${data.data.link})`;
      imageUrl.textContent = data.data.link;

      if (thumbnailBackground.style.backgroundImage) {
        thumbnailButton.textContent = "Change thumbnail";
      }
    } else {
      console.error("Error uploading image to Imgur:", data);
    }
  } catch (error) {
    console.error("Error uploading image to Imgur:", error);
  }
});

const createPostForm = document.forms.createForm;

createPostForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { title, category } = createPostForm;
  const imageUrl = document.querySelector(".image-url").textContent;
  const body = tinymce.activeEditor.getContent();
  const media = { url: imageUrl };

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
