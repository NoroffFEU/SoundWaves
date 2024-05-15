import { BASE_URL, URLs } from "../../utils/constants.mjs";

export async function loadCategoryPicker() {
    const categoriesPanel = document.querySelector(".categories-panel");
    const categories = categoriesPanel.querySelectorAll("[data-tag-category]");

    categories.forEach((category)=> {
        category.addEventListener('click', ()=> {
            const categoryClean = category.dataset.tagCategory.replace(/ /g, "-").toLowerCase();
            window.location.href = `${BASE_URL}${URLs.search}?category=${categoryClean}`
        })
    })
}