const thumbnailInput = document.querySelector('#thumbnail');
const ACCESS_TOKEN = '677864924d901ab7d356d7e28497937ca088e659';
const CLIENT_ID = 'd7ac36c85a3852a'; 

export async function handleThumbnailUpload() {
    thumbnailInput.addEventListener('change', async (event) => {
      const thumbnailBackground = document.querySelector('.thumbnail-background');
      const thumbnailButton = document.querySelector('.thumbnail-background span');
      const imageUrl = document.querySelector('.image-url');
    
      try {
        const response = await fetch('https://api.imgur.com/3/image', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
          },
          body: event.target.files[0],
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
