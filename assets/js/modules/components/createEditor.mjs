import { BASE_URL, URLs } from "../../utils/constants.mjs";
import { loginUser } from "../api/auth/login.mjs";
import { createPost } from "../api/blog/createPost.mjs";

const CLIENT_ID = 'd7ac36c85a3852a'; 
const ACCESS_TOKEN = '677864924d901ab7d356d7e28497937ca088e659'; 

const thumbnailInput = document.querySelector('#thumbnail');


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

const createPostForm = document.forms.createForm;

createPostForm.addEventListener('submit', async (event)=> {
    event.preventDefault();

    const { title, category } = createPostForm;
    const imageUrl = document.querySelector('.image-url').textContent;
    const body  = tinymce.activeEditor.getContent();
    const media = { url : imageUrl}

    try {
      if (!title.value || !category.value || !body || !imageUrl) {
        throw new Error('All fields are required');
      }

      if(localStorage.getItem('userData')) {
        const storedUser = localStorage.getItem('userData');
        const userData = JSON.parse(storedUser);
        const name = userData.name;
        const token = userData.token;

        await createPost(name, token, title.value, body, category.value , media)
      } else {
        const adminToken = await loginUser("jesalb53435@stud.noroff.no", "IamTheAdmin");
        await createPost('Jesus_AH', adminToken, title.value, body, category.value , media)
        // window.location.href = `${BASE_URL}${URLs.adminPanel}`;
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
})