import { formData } from '../../utils/formDate.mjs';
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
    postDate.textContent = formData(new Date(post.created));
    postContent.innerHTML = post.body;
}

function loadSocialMediaShare() {
  const link = encodeURI(window.location.href);
  const fb = document.querySelectorAll('[data-social="facebook"]');
  const tw = document.querySelectorAll('[data-social="twitter"]');
  const email = document.querySelectorAll('[data-social="email"]');
  const clipboard = document.querySelectorAll('[data-social="clipboard"]');

  fb.forEach((element) => {
    element.href = `https://www.facebook.com/share.php?u=${link}`;
  });

  tw.forEach((element) => {
    element.href = `https://twitter.com/intent/tweet?url=${link}`;
  });

  email.forEach((element) => {
    element.href = `mailto:?subject=Check this post&body=${link}`;
  });

  clipboard.forEach((element) => {
    element.addEventListener('click', () => {
      navigator.clipboard.writeText(link);
    });
  });
}

loadSocialMediaShare();



console.log(link);
loadPostPage();