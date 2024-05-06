import { BASE_URL, URLs } from "../../utils/constants.mjs";
import { createPost } from "../api/blog/createPost.mjs";

const thumbnailInput = document.getElementById('thumbnail');
const thumbnailBackground = document.querySelector('.thumbnail-background');
console.log(thumbnailBackground, thumbnailInput)

const CLIENT_ID = 'd7ac36c85a3852a';
const ACCESS_TOKEN = '677864924d901ab7d356d7e28497937ca088e659';

thumbnailInput.addEventListener('change', async (event) => {
    try {
        const formData = new FormData();
        formData.append('image', event.target.files[0]);
    
        const response = await fetch('https://api.imgur.com/3/image', {
            method: 'POST',
            headers: {
                Authorization: `Client-ID ${CLIENT_ID}` // Utiliza el ID de cliente aquí
            },
            body: formData,
        });
    
        const data = await response.json();
    
        if (data.success) {
            thumbnailBackground.style.backgroundImage = data.data.link;
            // url.innerText = data.data.link;
        } else {
            console.error('Error uploading image to Imgur:', data);
        }
    } catch (error) {
        console.error('Error uploading image to Imgur:', error);
    }
});

//TODO : Try catch block

// const formulario = document.forms.createForm;

// formulario.addEventListener('submit', async (event)=> {
//     event.preventDefault();
//     const content  = tinymce.activeEditor.getContent();
//     const title = formulario.title.value;
//     const category = formulario.category.value;
//     const thumbnail = formulario.thumbnail.value;
    
//     const media = { url : thumbnail}
    
//    await createPost('Jesus_AH', title, content, category, media)

//    window.location.href = `${BASE_URL}${URLs.adminPanel}`;

// })

// console.log(tinymce.activeEditor.getContent('#editor'))


