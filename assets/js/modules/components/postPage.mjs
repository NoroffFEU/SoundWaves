import { getURL } from '../../utils/getURL.mjs';
import { getPostByID } from '../api/blog/getPostByID.mjs';

async function loadPostPage() {
  try {
    const postID = getURL('id');
    const response = await getPostByID(postID);
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



    
    
    postTitle.textContent = post.title;
    postImg.src = post.media.url;
    postImgSource.srcset = post.media.url;
    postTags.textContent = post.tags;
    postDate.textContent = post.created;
    postContent.innerHTML = post.body;
}

loadPostPage();