//  Constants API

export const API_BASE_URL = "https://v2.api.noroff.dev/";

export const AUTH_ENDPOINTS = {
  REGISTER: "auth/register",
  LOGIN: "auth/login",
  CREATE_API_KEY: "auth/create-api-key",
};

export const BLOG_ENDPOINTS = {
  POSTS_BY_USER: (name) => `blog/posts/${name}`,
  POST_BY_ID: (name, id) => `blog/posts/${name}/${id}`,
};

export const ADMIN_BAR = document.querySelector('.admin-bar');


// Constants URL

const BASE_URL_LOCAL = "http://localhost:5500";
const BASE_URL_GITHUB =  "https://norofffeu.github.io/FED1-PE1-Whisperpiano";

const isLocal = window.location.hostname !== "norofffeu.github.io";

export const BASE_URL = isLocal ? BASE_URL_LOCAL : BASE_URL_GITHUB;

export const URLs = {
  // Index
  index: `/index.html`,
  // Post
  post: `/post/index.html`,
  edit: `/post/edit.html`,
  create: `/post/create.html`,
  adminPanel: `/post/admin-panel.html`,
  // Account
  login: `/account/login.html`,
  register: `/account/register.html`,
  //404
  notFound: `/404/index.html`,
  accessDenied: `/404/denied.html`,
}

