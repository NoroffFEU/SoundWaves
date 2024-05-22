import { getAccessToken } from "../modules/api/imgur/imgur.mjs";

const thumbnailInput = document.querySelector('#thumbnail');
// const ACCESS_TOKEN = '677864924d901ab7d356d7e28497937ca088e659';
// const CLIENT_ID = 'd7ac36c85a3852a'; 
// const REFRESH_TOKEN = '801a424005032b6dd9cd2d8d6df2c2ce63a272aa';

export async function handleThumbnailUpload() {
  thumbnailInput.addEventListener('change', async (event) => {
    const thumbnailBackground = document.querySelector('.thumbnail-background');
    const thumbnailButton = document.querySelector('.thumbnail-background span');
    const imageUrl = document.querySelector('.image-url');

    const file = event.target.files[0];

    const validImageTypes = ['image/jpeg', 'image/jpg'];

    if (!validImageTypes.includes(file.type)) {
      alert('Please select a JPEG or JPG file.');
      return;
    }

    try {
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
          thumbnailButton.textContent = 'Change thumbnail';
        }
      } else {
        console.error('Error uploading image to Imgur:', data);
      }

    } catch (error) {
      console.error('Error uploading image to Imgur:', error);
    }
  });
}

