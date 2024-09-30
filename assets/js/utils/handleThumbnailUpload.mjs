import { uploadImage } from "../modules/api/imgur/imgur.mjs";

const thumbnailInput = document.querySelector("#thumbnail");

export async function handleThumbnailUpload() {
  thumbnailInput.addEventListener("change", async (event) => {
    event.preventDefault();
    const thumbnailBackground = document.querySelector(".thumbnail-background");
    const thumbnailText = document.querySelector(
      ".thumbnail-background span p"
    );
    const imageUrl = document.querySelector(".image-url");
    const thumbnailBtn = document.querySelector(".thumbnail-btn");

    const file = event.target.files[0];

    const validImageTypes = ["image/jpeg", "image/jpg"];

    if (!validImageTypes.includes(file.type)) {
      alert("Please select a JPEG or JPG file.");
      return;
    }

    try {
      thumbnailBtn.classList.add("loading");
      const mediaUrl = await uploadImage(file);
      if (!mediaUrl) {
        throw new Error("Error uploading image to Imgur");
      }
      thumbnailBackground.style.backgroundImage = `url(${mediaUrl})`;
      imageUrl.textContent = mediaUrl;

      if (thumbnailBackground.style.backgroundImage) {
        thumbnailText.textContent = "Change thumbnail";
      }
    } catch (error) {
      console.error("Error uploading image to Imgur:", error);
    } finally {
      thumbnailBtn.classList.remove("loading");
    }
  });
}
