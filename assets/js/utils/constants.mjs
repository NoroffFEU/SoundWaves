//  Constants

export const BASE_URL = "https://v2.api.noroff.dev/";

export const AUTH_ENDPOINTS = {
  REGISTER: "auth/register",
  LOGIN: "auth/login",
  CREATE_API_KEY: "auth/create-api-key",
};

export const BLOG_ENDPOINTS = {
  POSTS_BY_USER: (name) => `blog/posts/${name}`,
  POST_BY_ID: (name, id) => `blog/posts/${name}/${id}`,
};