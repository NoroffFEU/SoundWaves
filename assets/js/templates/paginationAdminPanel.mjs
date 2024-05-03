export const adminPaginationTemplate = (meta) => {
    return `
    <a id="prevButton" aria-label="Previous page" href="${meta.previousPage}">
        <span class="material-symbols-outlined gradient gradient-top">chevron_left</span>
    </a>
    <p id="pagination-text-container">Page <span id="current-page">${meta.currentPage}</span> of <span id="page-count">${meta.pageCount}</span></p>
    <a id="nextButton" aria-label="Next page" href="${meta.nextPage}">
        <span class="material-symbols-outlined gradient gradient-top">chevron_right</span>
    </a>
      `;
  };