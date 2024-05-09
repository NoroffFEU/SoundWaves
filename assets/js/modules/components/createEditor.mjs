import { BASE_URL, URLs } from "../../utils/constants.mjs";
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
      
      await createPost('Jesus_AH', title.value, body, category.value , media)
      // window.location.href = `${BASE_URL}${URLs.adminPanel}`;

    } catch (error) {
      console.error('Error creating post:', error);
    }
})




// const createPostForm = document.forms.createForm;

// createPostForm.addEventListener('submit', async (event)=> {
//     event.preventDefault();
    
//     const imageUrl = document.querySelector('.image-url').textContent;
//     const content  = tinymce.activeEditor.getContent();
//     const title = createPostForm.title.value;
//     const category = createPostForm.category.value;
//     const media = { url : imageUrl}
    
//     await createPost('Jesus_AH', title, content, category, media)

//     window.location.href = `${BASE_URL}${URLs.adminPanel}`;
// })

// thumbnailInput.addEventListener('change', (event) => {
  
//   fetch('https://api.imgur.com/3/image', {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${ACCESS_TOKEN}`
//     },
//     body: event.target.files[0],
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.success) {
//       thumbnailBackground.style.backgroundImage = `url(${data.data.link})`;
      
//       if (thumbnailBackground.style.backgroundImage) {
//         thumbnailButton.textContent = 'Change thumbnail';
//       }

//     } else {
//       console.error('Error uploading image to Imgur:', data);
//     }
//   })
//   .catch(error => {
//     console.error('Error uploading image to Imgur:', error);
//   });
// });




// const file = document.getElementById('file');
// const img = document.getElementById('img');
// const url = document.getElementById('url')
// console.log(span)



// const CLIENT_ID = 'd7ac36c85a3852a';
// const ACCESS_TOKEN = '677864924d901ab7d356d7e28497937ca088e659';

// thumbnailInput.addEventListener('change', async (event) => {
//     try {
//         const formData = new FormData();
//         formData.append('image', event.target.files[0]);
    
//         const response = await fetch('https://api.imgur.com/3/image', {
//             method: 'POST',
//             headers: {
//                 Authorization: `Client-ID ${CLIENT_ID}` // Utiliza el ID de cliente aquí
//             },
//             body: formData,
//         });
    
//         const data = await response.json();
    
//         if (data.success) {
//             thumbnailBackground.style.backgroundImage = data.data.link;
//             // url.innerText = data.data.link;
//         } else {
//             console.error('Error uploading image to Imgur:', data);
//         }
//     } catch (error) {
//         console.error('Error uploading image to Imgur:', error);
//     }
// });

//TODO : Try catch block






// const CLIENT_ID = 'd7ac36c85a3852a';
// const CLIENT_SECRET = '7c656c7e69236a558d27b666225ed536b4831e05';
// const IMGUR_API = 'https://api.imgur.com/3';

// file.addEventListener('change', (event)=> {
//   const formdata = new FormData()
//   formdata.append("image", event.target.files[0])
//   fetch('https://api.imgur.com/3/image', {
//     method: "post",
//     headers: {
//       Authorization: "Client-ID d7ac36c85a3852a"
//     },
//     body: formdata
//   }).then(data => data.json()).then(data => {
//     img.src = data.data.link
//     url.innerText = data.data.link
//   })
// })