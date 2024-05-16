import { tableRowTemplate } from "../templates/tableRow.mjs";
import { getPostsByUser } from "../modules/api/blog/getAllPosts.mjs";
import { loadDeleteBtn } from "../modules/components/deleteBtn.mjs";
import { loadEditBtn } from "../modules/components/editBtn.mjs";

let currentPage = 1;

export async function loadFivePosts() {
  const table = document.querySelector("#table-content");
  const tableContainer = document.querySelector(".table-border");
  const errorDisplay = document.querySelector(".table-error");
  const paginationContainer = document.querySelector("#table-pagination");

  let template = "";

  try {
    const userData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null;
    const name = userData?.name;
    // Get 5 posts by user name.
    const posts = await getPostsByUser(5, currentPage, name);

    // If there are no posts, hide table and pagination.
    if (!posts) {
      tableContainer.style.display = "none";
      paginationContainer.style.display = "none";
      errorDisplay.style.display = "flex";
      return;
    }

    // Come back to prev page if there are no posts.
    if (posts.data.length === 0) {
      currentPage--;
      await loadFivePosts();
      return;
    }

    // Render posts, pagination and summary text.
    posts.data.forEach((post) => {
      template += tableRowTemplate(post);
    });

    table.innerHTML = template;

    paginationText(posts.meta.currentPage, posts.meta.pageCount);
    summaryText();
    loadEditBtn();
    loadDeleteBtn();

  } catch (error) {
    console.log(error.message);
  }
}

// Render Pagination text.
function paginationText(currentPage, pageCount) {
  const currentPageElement = document.querySelector("#current-page");
  const pageCountElement = document.querySelector("#page-count");
  const textContainer = document.querySelector("#pagination-text-container");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  currentPageElement.textContent = currentPage;
  pageCountElement.textContent = pageCount;

  // Hide previous button if currentPage is 1
  if (currentPage === 1) {
    prevBtn.style.visibility = "hidden";
  } else {
    prevBtn.style.visibility = "visible";
  }

  // Hide next button if currentPage is equal to pageCount
  if (currentPage === pageCount) {
    nextBtn.style.visibility = "hidden";
  } else {
    nextBtn.style.visibility = "visible";
  }

  if (!currentPage && !pageCount) {
    textContainer.style.visibility = "hidden";
  } else {
    textContainer.style.visibility = "visible";
  }
}

// Render Summary text
async function summaryText() {
  try {
    if (localStorage.getItem("userData")) {
      const storedUser = localStorage.getItem("userData");
      const userData = JSON.parse(storedUser);
      const name = userData.name;
      const posts = await getPostsByUser(null, currentPage, name);
      const totalPosts = document.querySelector("#total-posts");
      totalPosts.textContent = posts.data.length;
    } else {
      const posts = await getPostsByUser();
      const totalPosts = document.querySelector("#total-posts");
      totalPosts.textContent = posts.data.length;
    }
  } catch (error) {
    console.log(error);
  }
}

// Load pagination buttons
function loadPaginationButtons() {
  const nextBtn = document.querySelector("#nextBtn");
  const prevBtn = document.querySelector("#prevBtn");
  nextBtn.addEventListener("click", nextButtonFunction);
  prevBtn.addEventListener("click", previousButtonFunction);
}

// Next button function
async function nextButtonFunction() {
  nextBtn.disabled = true;
  currentPage++;
  await loadFivePosts();
  nextBtn.disabled = false;
}

// Previous button function
async function previousButtonFunction() {
  prevBtn.disabled = true;
  currentPage--;
  await loadFivePosts();
  prevBtn.disabled = false;
}


loadFivePosts();
loadPaginationButtons();
