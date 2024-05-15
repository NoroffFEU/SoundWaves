import { getPostsByUser } from "../modules/api/blog/getAllPosts.mjs";
import { BASE_URL, URLs } from "../utils/constants.mjs";
import { getURL } from "../utils/getURL.mjs"

async function loadSearchedPosts(){
    try{
        const posts = await getPostsByUser()
        const allPosts = posts.data
        renderSearchedPosts(allPosts)

    } catch (error){
        console.error(error)
    } 
}

async function renderSearchedPosts(posts){
    const urlParams = getURL('search');
    const searchHeading = document.querySelector('.search-heading h1');
    const container = document.querySelector('#searchResultContainer');
    const template = document.querySelector('#search-post-template').content;

    const filteredPosts = posts.filter(post => {
        const trimmedParams = urlParams.trim();
        return trimmedParams && post.title.toLowerCase().includes(trimmedParams.toLowerCase());
      });
    
    if(filteredPosts.length === 0){
        searchHeading.textContent = `No results found for "${urlParams}"`;
    } else {
        searchHeading.textContent = `Search results for "${urlParams}"`;
    }

    filteredPosts.forEach(post => {
        const clone = template.cloneNode(true);

        const postTitle = clone.querySelector('.title');
        const postImg = clone.querySelector('.search-result img');
        const postTags = clone.querySelector('.tag');
        const postDate = clone.querySelector('.date');
        const postLink = clone.querySelector('a');

        postTitle.textContent = post.title;
        postImg.src = post.media.url;
        postTags.textContent = post.tags;
        postDate.textContent = post.created;
        postLink.href = `${BASE_URL}${URLs.post}?id=${post.id}`;
      

        container.appendChild(clone);
    });
}

loadSearchedPosts()