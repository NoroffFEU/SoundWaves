import { BASE_URL, URLs } from "../utils/constants.mjs";
import { getURL } from "../utils/getURL.mjs";
import { handleThumbnailUpload } from "../utils/handleThumbnailUpload.mjs";
import { editPost } from "../modules/api/blog/editPost.mjs";
import { getPostByID } from "../modules/api/blog/getPostByID.mjs";

// Fetch post data
async function fetchPostData() {
    const postID = getURL("id");
    try{
        const thumbnailBackground = document.querySelector('.thumbnail-background');
        const imageUrl = document.querySelector('.image-url');
        const name = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).name : "Jesus_AH";
        // Get post data
        const getPost = await getPostByID(postID, name);
        const post = getPost.data;
        // Set data to Form
        tinymce.activeEditor.setContent(post.body)
        const form = document.forms.editForm;
        form.title.value = post.title;
        form.category.value = post.tags;
        thumbnailBackground.style.backgroundImage = `url(${post.media.url})`;
        imageUrl.textContent = post.media.url;
    } catch (error) {
        console.error(error);
    }
}

// Edit Post submit event
const editPostForm = document.forms.editForm;
editPostForm.addEventListener('submit', async (event)=> {
    event.preventDefault();
    const user = localStorage.getItem('userData');
    const name = JSON.parse(user).name;
    const token = JSON.parse(user).token;

    try {
        const content = tinymce.activeEditor.getContent();
        const title = editPostForm.title.value;
        const category = editPostForm.category.value;
        const thumbnail = document.querySelector('.image-url').textContent;
        const media = { url : thumbnail }
        const postID = getURL("id");

        if (content.length > 1999) {
            alert("Post body is too long, please keep it under 2000 characters");
            return;
        }
        
        await editPost(name, token, postID, title, content, category, media)
        window.location.href = `${BASE_URL}${URLs.adminPanel}`;
    } catch (error) {
        console.error(error);
    }
})

handleThumbnailUpload();
fetchPostData()