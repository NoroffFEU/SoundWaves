import { BASE_URL, URLs } from "../../utils/constants.mjs";
import { createPost } from "../api/blog/createPost.mjs";


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


const thumbBackground = document.querySelector('.thumbnail-background');
const thumbnailInput = document.querySelector('#thumbnail');
const span = document.querySelector('.thumbnail-background span');



const file = document.getElementById('file');
const img = document.getElementById('img');
const url = document.getElementById('url')
console.log(span)


const CLIENT_ID = 'd7ac36c85a3852a'; // Reemplaza esto con tu propio Client ID
const ACCESS_TOKEN = '677864924d901ab7d356d7e28497937ca088e659'; // Reemplaza esto con tu propio Access Token

thumbnailInput.addEventListener('change', (event) => {
 // const formData = new FormData();
 // formData.append('image', event.target.files[0]);
  
  fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`
    },
    body: event.target.files[0],
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // img.src = data.data.link;
      // url.innerText = data.data.link;
      thumbBackground.style.backgroundImage = `url(${data.data.link})`;
      // url.innerText = data.data.link;
      
      if (thumbBackground.style.backgroundImage) {
        span.textContent = 'Change thumbnail';
      }

    } else {
      console.error('Error uploading image to Imgur:', data);
    }
  })
  .catch(error => {
    console.error('Error uploading image to Imgur:', error);
  });
});


const formulario = document.forms.createForm;

formulario.addEventListener('submit', async (event)=> {
    event.preventDefault();
    const imgUrl = document.querySelector('#url').textContent;
    const content  = tinymce.activeEditor.getContent();
    const title = formulario.title.value;
    const category = formulario.category.value;
    const thumbnail = imgUrl;
    
    const media = { url : thumbnail}
    
   await createPost('Jesus_AH', title, content, category, media)

   window.location.href = `${BASE_URL}${URLs.adminPanel}`;

})

console.log(tinymce.activeEditor.getContent('#editor'))