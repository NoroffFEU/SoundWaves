import { formData } from '../utils/formDate.mjs';
import { getURL } from '../utils/getURL.mjs';
import { getPostByID } from '../modules/api/blog/getPostByID.mjs';
import { getUserFromLocalStorage } from '../utils/getLocalStorages.mjs';
import { loadSocialMediaShare } from '../modules/components/socialMediaShare.mjs';
import { matsInterviewTemplate } from '../templates/interviews/matsInterview.mjs';
import { checkTemplateByID } from '../templates/interviews/templateChecker.mjs';

async function getDataPostPage() {
  try {
    const postID = getURL('id');
    const name = localStorage.getItem('userData') ? getUserFromLocalStorage() : "Jesus_AH"
    const response = await getPostByID(postID, name);
    const post = response.data;
    renderPost(post);
  } catch (error) {
    console.error(error);
  }
}

function renderPost(post) {
    const postHeader = document.querySelector('.post-header');
    const postTitle = postHeader.querySelector('.post-title');
    const postPicture = postHeader.querySelector('picture');
    const postImg = postPicture.querySelector('img');
    const postImgSource = postPicture.querySelector('source');
    const postTags = postHeader.querySelector('.tag');
    const postDate = postHeader.querySelector('.date');
    const postContent = document.querySelector('.post-body');
    const interviewContent = document.querySelector('.interview-content');

    const choosedTemplate = checkTemplateByID(post.id)

    postTitle.textContent = post.title;
    postImg.src = post.media.url;
    postImg.alt = `${post.title} image`;
    postImgSource.srcset = post.media.url;
    postTags.textContent = post.tags;
    postDate.textContent = formData(new Date(post.created));
    postContent.innerHTML = post.body;
    interviewContent.innerHTML = choosedTemplate;

}

function loadPostPage(){
    loadSocialMediaShare();
    getDataPostPage();
}

loadPostPage();

