import { getURL } from "../../utils/getURL.mjs";
import { editPost } from "../api/blog/editPost.mjs";
import { getPostByID } from "../api/blog/getPostByID.mjs";



async function fetchPostData() {
    const postID = getURL("id");
    
    try{
        const getPost = await getPostByID(postID);
        const post = getPost.data;
        console.log(post.body)
        tinymce.activeEditor.setContent(post.body)
        const form = document.forms.editForm;
        form.title.value = post.title;
        form.category.value = post.tags;
        form.thumbnail.value = post.media.url;
        return post;
        

    } catch (error) {
        console.error(error);
    }

}

fetchPostData()

const formulita = document.forms.editForm;


formulita.addEventListener('submit', async (event)=> {
    event.preventDefault();
    const content  = tinymce.activeEditor.getContent();
    const title = formulita.title.value;
    const category = formulita.category.value;
    const thumbnail = formulita.thumbnail.value;
    console.log(content, title, category, thumbnail)
    console.log(content)
    const media = { url : thumbnail}
    const postID = getURL("id");
    await editPost('Jesus_AH', postID, title, content, category, media)

    window.location.href = "/post/admin-panel.html"
})



// async function fetchPostData() {
//     const postID = getURL("id");
//     try{
//         const getPost = await getPostByID(postID);
//         const post = getPost.data;
//         console.log(post)
//         return post;
        

//     } catch (error) {
//         console.error(error);
//     }
// }

// async function initializeEditor(postId) {
//     try {
//       const post = await fetchPostData(postId);
//       tinymce.init({
//         content_css: "../../assets/css/components/editor.css",
//         selector: '#editor',
//         skin: 'oxide-dark',
//         license_key: 'gpl',
//         branding: false,
//         menubar: false,
//         resize: false,
//         height: 750,
//         toolbar: 'undo redo | blocks | bold italic underline | alignleft aligncenter alignright alignjustify | image | bullist numlist',
//         plugins: 'image lists wordcount ',
//         setup: function (editor) {
//           editor.on('init', function () {
//             editor.setContent(post.body); // Set initial content from fetched data
//           });
//         }
//       });
//     } catch (error) {
//       console.error("Error initializing editor:", error);
//       // Handle errors gracefully (e.g., display error message to user)
//     }
//   }


//   function loadCreateButton() {
//     const button = document.querySelector("#updateBtn");
//     button.addEventListener("click", updatePost);
//   }
  
//   async function updatePost() {
//     const postId = getURL("id");
//     const editForm = document.forms.editForm;
//     const title = editForm.title.value;
//     const category = editForm.category.value;
//     const thumbnail = editForm.thumbnail.value;
//     const media = { url: thumbnail };
//     const content = tinymce.get('editor').getContent();
  
//     try {
//       const response = await fetch(`/api/post/${postId}`, {
//         method: 'PUT', // Use PUT for updating existing content
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           author: 'Jesus_AH', // Replace with actual author info
//           postID: postId,
//           title,
//           content,
//           category,
//           media,
//         })
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error updating post: ${response.statusText}`);
//       }
  
//       // Handle success (e.g., show confirmation message, redirect to success page)
//       console.log("Post updated successfully!");
//     } catch (error) {
//       console.error("Error updating post:", error);
//       // Handle errors gracefully (e.g., display error message to user)
//     }
//   }

//   // Assuming postId is available (e.g., from URL query string)
//   const postId = getURL("id"); // Replace with your logic to retrieve postId
//   initializeEditor(postId);
//   loadCreateButton();























//   const ID = getURL("id");
//     initializeEditor(ID);

// async function loadEditEditor() {
//   const postID = getURL("id");
//   const form = document.forms.editForm;

//   try {
//     const getPost = await getPostByID(postID);
//     const post = getPost.data;
//     form.title.value = post.title;
//     form.category.value = post.tags;
//     form.thumbnail.value = post.media.url;

//     tinymce.init({
//         content_css: "../../assets/css/components/editor.css",
//         selector: '#editor',
//         skin: 'oxide-dark',
//         license_key: 'gpl',
//         branding: false,
//         menubar: false,
//         resize: false,
//         height: 750,
//         toolbar: 'undo redo | blocks | bold italic underline | alignleft aligncenter alignright alignjustify | image | bullist numlist',
//         plugins: 'image lists wordcount ',
//         setup: function (editor) {
//           editor.on('init', function () {
//             editor.setContent(post.body);
//           });
//         }
//       });

//   } catch (error) {
//     console.error(error);
//   }
  
// }

// loadEditEditor()
// loadCreateButton()




// function loadCreateButton() {
//   const button = document.querySelector("#updateBtn");
//   button.addEventListener("click", updatePost);
// }

// async function updatePost(content){
// const postID = getURL("id");
//   const editForm = document.forms.editForm;
//   const title = editForm.title.value;
//   const category = editForm.category.value;
//   const thumbnail = editForm.thumbnail.value;
//   const media = { url : thumbnail}
//   await editPost('Jesus_AH', postID, title, content, category, media)
// }

// function loadDiscardButton() {

// }


// const formulario = document.forms.createForm;

// formulario.addEventListener('submit', async (event)=> {
//     event.preventDefault();
//     const content  = tinymce.activeEditor.getContent();
//     const title = formulario.title.value;
//     const category = formulario.category.value;
//     const thumbnail = formulario.thumbnail.value;
    
//     const media = { url : thumbnail}
    
//    await createPost('Jesus_AH', title, content, category, media)

// })

// console.log(tinymce.activeEditor.getContent('#editor'))