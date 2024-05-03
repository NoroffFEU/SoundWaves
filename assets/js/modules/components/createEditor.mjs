// function collectDataToSend() {
//     const createForm = document.forms.createForm;
//     const title = createForm.title.value;
//     const category = createForm.category.value;
//     const content = tinymce.activeEditor.getContent();

import { createPost } from "../api/blog/createPost.mjs";

//     return {
//         title: title,
//         category: category
//     }
// }

// collectDataToSend()


// function printData() {
//     const button = document.querySelector("#create");
//     console.log(button);
//     button.addEventListener("click", (event)=>{
//         event.preventDefault();
//         console.log(collectDataToSend());
//     });
// }

// printData()
//TODO : Try catch block

const formulario = document.forms.createForm;

formulario.addEventListener('submit', async (event)=> {
    event.preventDefault();
    const content  = tinymce.activeEditor.getContent();
    const title = formulario.title.value;
    const category = formulario.category.value;
    const thumbnail = formulario.thumbnail.value;
    
    const media = { url : thumbnail}
    
   await createPost('Jesus_AH', title, content, category, media)

   window.location.href = "/post/admin-panel.html"

})

console.log(tinymce.activeEditor.getContent('#editor'))

