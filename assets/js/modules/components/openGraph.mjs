import { BASE_URL, URLs } from "../../utils/constants.mjs";

export function updateOpenGraph(post) {
    updateFacebookOG(post);
    updateTwitterOG(post);
}

function updateFacebookOG(post) {
    document.querySelector('meta[property="og:title"]').setAttribute("content", `${post.title}`);
    document.querySelector('meta[property="og:description"]').setAttribute("content", `${post.body}`);
    document.querySelector('meta[property="og:image"]').setAttribute("content", `${post.media.url}`);
    document.querySelector('meta[property="og:url"]').setAttribute("content", `${BASE_URL}${URLs.post}?id=${post.id}`);
}

function updateTwitterOG(post) {
    document.querySelector('meta[name="twitter:title"]').setAttribute("content", `${post.title}`);
    document.querySelector('meta[name="twitter:description"]').setAttribute("content", `${post.body}`);
    document.querySelector('meta[name="twitter:image"]').setAttribute("content", `${post.media.url}`);
    document.querySelector('meta[property="twitter:url"]').setAttribute("content",  `${BASE_URL}${URLs.post}?id=${post.id}`);
}