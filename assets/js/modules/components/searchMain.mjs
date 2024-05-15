import { BASE_URL, URLs } from "../../utils/constants.mjs";

export async function searchPostsByTitle() {
    const searchForm = document.forms.mainSearch;
    const searchInput = searchForm.querySelector("input[name='search']");
    const searchButton = searchForm.querySelector(".search-btn");
    const deleteTextButton = searchForm.querySelector("#deleteText");

    searchInput.addEventListener("input", () => {
        if (searchInput.value.length > 0) {
            deleteTextButton.style.display = "block";
        } else {
            deleteTextButton.style.display = "none";
        }
    });

    deleteTextButton.addEventListener("click", () => {
        searchInput.value = "";
        deleteTextButton.style.display = "none";
    });

    searchForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        window.location.href = `${BASE_URL}${URLs.search}?search=${searchInput.value}`;

    });
}

