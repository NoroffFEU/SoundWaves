import { getPostsByUser } from "../modules/api/blog/getAllPosts.mjs";
import { BASE_URL, URLs } from "../utils/constants.mjs";
import { formData } from "../utils/formDate.mjs";
import { getURL } from "../utils/getURL.mjs"

async function loadSearchedPosts(){
    try{
        const userName = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).name : 'Jesus_AH';
        const posts = await getPostsByUser(null, null, userName)
        const allPosts = posts.data
        renderSearchedPosts(allPosts)
        renderCategoriesSearch(allPosts)

    } catch (error){
        console.error(error)
    } 
}

async function renderSearchedPosts(posts){
    const urlParams = getURL('search');
    const searchHeading = document.querySelector('.search-heading h1');
    const container = document.querySelector('#searchResultContainer');
    const template = document.querySelector('#search-post-template').content;

    if(!urlParams){
        searchHeading.textContent = `No results found`;
        return;
    }

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
        const formattedDate = formData(new Date(post.created));

        postTitle.textContent = post.title;
        postImg.src = post.media.url;
        postTags.textContent = post.tags;
        postDate.textContent = formattedDate;
        postLink.href = `${BASE_URL}${URLs.post}?id=${post.id}`;
      

        container.appendChild(clone);
    });
}

async function renderCategoriesSearch(posts){
    const categoryParams = getURL('category');
    const searchHeading = document.querySelector('.search-heading h1');
    const container = document.querySelector('#searchResultContainer');
    const template = document.querySelector('#search-post-template').content;

    if(!categoryParams){
        return;
    }
    
    const filteredPosts = posts.filter(post => {
        const cleanParams = post.tags.map(tag => tag.replace(/ /g, "-").toLowerCase());
        return cleanParams.includes(categoryParams);
      });

    if(filteredPosts.length === 0){
        searchHeading.textContent = `No results found for "${categoryParams}"`;
    } else {
        searchHeading.textContent = `Search results for "${categoryParams}"`;
    }

    filteredPosts.forEach(post => {
        const clone = template.cloneNode(true);

        const postTitle = clone.querySelector('.title');
        const postImg = clone.querySelector('.search-result img');
        const postTags = clone.querySelector('.tag');
        const postDate = clone.querySelector('.date');
        const postLink = clone.querySelector('a');
        const formattedDate = formData(new Date(post.created));

        postTitle.textContent = post.title;
        postImg.src = post.media.url;
        postTags.textContent = post.tags;
        postDate.textContent = formattedDate;
        postLink.href = `${BASE_URL}${URLs.post}?id=${post.id}`;
      

        container.appendChild(clone);
    });

 
   

    
    
}

loadSearchedPosts()