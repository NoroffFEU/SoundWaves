import { BASE_URL, URLs } from "../utils/constants.mjs";
import { getURL } from "../utils/getURL.mjs";
import { handleThumbnailUpload } from "../utils/handleThumbnailUpload.mjs";
import { editPost } from "../modules/api/blog/editPost.mjs";
import { getPostByID } from "../modules/api/blog/getPostByID.mjs";


handleThumbnailUpload();


async function fetchPostData() {
    const postID = getURL("id");
    
    try{
        const thumbnailBackground = document.querySelector('.thumbnail-background');
        const imageUrl = document.querySelector('.image-url');

        if(localStorage.getItem('userData')) {
            const storedUser = localStorage.getItem('userData');
            const userData = JSON.parse(storedUser);
            const name = userData.name;
            const getPost = await getPostByID(postID, name);
            const post = getPost.data;
            tinymce.activeEditor.setContent(post.body)
            const form = document.forms.editForm;
            form.title.value = post.title;
            form.category.value = post.tags;
            thumbnailBackground.style.backgroundImage = `url(${post.media.url})`;
            imageUrl.textContent = post.media.url;

            return post;
        } else {
            const getPost = await getPostByID(postID);
            const post = getPost.data;
            tinymce.activeEditor.setContent(post.body)
            const form = document.forms.editForm;
            form.title.value = post.title;
            form.category.value = post.tags;
            thumbnailBackground.style.backgroundImage = `url(${post.media.url})`;
            imageUrl.textContent = post.media.url;

            return post;
        }

    } catch (error) {
        console.error(error);
    }

}

fetchPostData()

const editPostForm = document.forms.editForm;


editPostForm.addEventListener('submit', async (event)=> {
    event.preventDefault();

    if(localStorage.getItem('userData')) {
        const storedUser = localStorage.getItem('userData');
        const userData = JSON.parse(storedUser);
        const name = userData.name;
        const token = userData.token;

        const content  = tinymce.activeEditor.getContent();
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
        window.location.href = `${BASE_URL}${URLs.adminPanel}`

    } else {
        const token = await loginUser("jesalb53435@stud.noroff.no", "IamTheAdmin");
        const content  = tinymce.activeEditor.getContent();
        const title = editPostForm.title.value;
        const category = editPostForm.category.value;
        const thumbnail = document.querySelector('.image-url').textContent;
        const media = { url : thumbnail}
        const postID = getURL("id");
        if (content.length > 1999) {
            alert("Post body is too long, please keep it under 2000 characters");
            return;
        }
        await editPost('Jesus_AH', token, postID, title, content, category, media)

        window.location.href = `${BASE_URL}${URLs.adminPanel}`
    }
})