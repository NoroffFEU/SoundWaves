import { BASE_URL, URLs } from "../../utils/constants.mjs";

export function updateOpenGraph(post) {
  updateFacebookOG(post);
  updateTwitterOG(post);
}

function updateFacebookOG(post) {
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", `${post.title}`);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute(
      "content",
      `Discover more about ${post.title} on SoundWaves Discoveries!`
    );
  document
    .querySelector('meta[property="og:url"]')
    .setAttribute("content", `${BASE_URL}${URLs.post}?id=${post.id}`);
}

function updateTwitterOG(post) {
  document
    .querySelector('meta[name="twitter:title"]')
    .setAttribute("content", `${post.title}`);
  document
    .querySelector('meta[name="twitter:description"]')
    .setAttribute(
      "content",
      `Discover more about ${post.title} on SoundWaves Discoveries!`
    );
  document
    .querySelector('meta[property="twitter:url"]')
    .setAttribute("content", `${BASE_URL}${URLs.post}?id=${post.id}`);
}
