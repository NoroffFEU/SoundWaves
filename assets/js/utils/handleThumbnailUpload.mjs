import { getAccessToken } from "../modules/api/imgur/imgur.mjs";

const thumbnailInput = document.querySelector('#thumbnail');

export async function handleThumbnailUpload() {
  thumbnailInput.addEventListener('change', async (event) => {
    const thumbnailBackground = document.querySelector('.thumbnail-background');
    const thumbnailText = document.querySelector('.thumbnail-background span p');
    const imageUrl = document.querySelector('.image-url');
    const thumbnailBtn = document.querySelector('.thumbnail-btn')

    console.log(thumbnailText)

    const file = event.target.files[0];

    const validImageTypes = ['image/jpeg', 'image/jpg'];

    if (!validImageTypes.includes(file.type)) {
      alert('Please select a JPEG or JPG file.');
      return;
    }

    try {
      thumbnailBtn.classList.add('loading');
      let accessToken = await getAccessToken();

      const response = await fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: file,
      });

      const data = await response.json();

      if (data.success) {
        thumbnailBackground.style.backgroundImage = `url(${data.data.link})`;
        imageUrl.textContent = data.data.link;
        
        if (thumbnailBackground.style.backgroundImage) {
          thumbnailText.textContent = 'Change thumbnail';
        }
      } else {
        console.error('Error uploading image to Imgur:', data);
      }

    } catch (error) {
      console.error('Error uploading image to Imgur:', error);
    } finally {
      thumbnailBtn.classList.remove('loading');
    }
  });
}

