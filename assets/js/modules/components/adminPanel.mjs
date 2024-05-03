import { adminPaginationTemplate } from "../../templates/paginationAdminPanel.mjs";
import { tableRowTemplate, tableRowTemplateError } from "../../templates/tableRow.mjs";
import { getPostsByUser } from "../api/blog/getAllPosts.mjs";

//TODO ADD ERROR HANDLING AND PRINT ERROR MESSAGE TO TABLE


// export async function loadFivePosts(page = 1) {
//     try {
//         let currentPage = page;
//         const posts = await getPostsByUser(5, currentPage);
//         printPostsToTable(posts)
//         return posts;
//     } catch (error) {
//         console.error(error);
//     }
// }

// export async function printPostsToTable(posts) {
//     try {
//         const table = document.querySelector("#table-content");
//         const postsToPrint = posts.data;
        
//         let template = "";
//         postsToPrint.forEach((post) => {
//             template += tableRowTemplate(post);
//         });
//         table.innerHTML = template;
//         managePagination(posts.meta)
//     } catch (error) {
//         console.error("Error al cargar los posts:", error);
//     }
// }

// loadFivePosts()
// export async function managePagination(meta) {
//     paginationText(meta.currentPage, meta.pageCount);
//     nextButton(meta.nextPage);
//     previousButton(meta.previousPage);
// }

// export function paginationText(currentPage, pageCount) {
//     const currentPageElement = document.querySelector("#current-page");
//     const pageCountElement = document.querySelector("#page-count");
//     const textContainer = document.querySelector("#pagination-text-container");
//     currentPageElement.textContent = currentPage;
//     pageCountElement.textContent = pageCount;

//     if (!currentPage && !pageCount) {
//         textContainer.style.visibility = "hidden";
//     } else {
//         textContainer.style.visibility = "visible";
//     }
// }

// export function nextButton(nextPage) {
//     const nextButton = document.querySelector("#nextBtn");

//     nextButton.addEventListener("click", () => {
//         loadFivePosts(nextPage);
//     });

//     if (!nextPage) {
//         nextButton.style.visibility = "hidden";
//     } else {
//         nextButton.style.visibility = "visible";
//     }

// }

// export function previousButton(previousPage) {
//     const previousButton = document.querySelector("#prevBtn");
//     console.log(previousPage)
 
    
//     previousButton.addEventListener("click", () => {
//         loadFivePosts(previousPage);
//     });

//     if (!previousPage) {
//         previousButton.style.visibility = "hidden";
//     } else {
//         previousButton.style.visibility = "visible";
//     }

// }

let currentPage = 1;

async function loadFivePosts() {
    const posts = await getPostsByUser(5, currentPage);
    const nextBtn = document.querySelector("#nextBtn");
    nextBtn.addEventListener('click', nextFunction)
    const prevBtn = document.querySelector("#prevBtn");
    prevBtn.addEventListener('click', previousFunction)
    const table = document.querySelector("#table-content");
    let template = "";
    posts.data.forEach((post) => {
        template += tableRowTemplate(post);
    });
    table.innerHTML = template;
    paginationText(posts.meta.currentPage, posts.meta.pageCount)
    console.log(posts)
}

function nextFunction() {
        currentPage++;
        loadFivePosts()
}

function previousFunction() {
    currentPage--;
    loadFivePosts()
}

function paginationText(currentPage, pageCount) {
    const currentPageElement = document.querySelector("#current-page");
    const pageCountElement = document.querySelector("#page-count");
    const textContainer = document.querySelector("#pagination-text-container");
    currentPageElement.textContent = currentPage;
    pageCountElement.textContent = pageCount;
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    if (currentPage === 1) {
        prevBtn.style.visibility = "hidden";
    } else {
        prevBtn.style.visibility = "visible";
    }
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

loadFivePosts()









// Llamada inicial con la página 1



// const posts = await getPostsByUser(5 ,page);
// const table = document.querySelector("#table-content");
// let template = "";
// posts.data.forEach((post) => {
//     template += tableRowTemplate(post);
// });
// table.innerHTML = template;


// console.log(posts)

