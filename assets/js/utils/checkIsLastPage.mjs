export function checkIfIsLastPage(isLastPage) {
  const loadMoreButton = document.querySelector(".load-more");
  if (isLastPage) {
    loadMoreButton.style.display = "none";
  }
}
