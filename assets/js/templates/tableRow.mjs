export const tableRowTemplate = (data) => {
    const date = new Date(data.created);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    data.created = `${day}/${month}/${year}`;
  return `
    <tr class="responsive-tr">
        <td data-cell="title">${data.title}</td>
        <td data-cell="category">${data.tags}</td>
        <td data-cell="date">${data.created}</td>
        <td data-cell="actions" class="flex center align-items-center gap-30">
            <button type="button" aria-label="Edit" class="edit-btn">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button type="button" aria-label="Delete" class="delete-btn">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
    </tr>
    `;
};


//TODO: Add error template

export const tableRowTemplateError = (error) => {
    return `
            <td data-cell="title">${error}</td>
    `; }