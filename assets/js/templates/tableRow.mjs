export const tableRowTemplate = (data) => {
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

export const tableRowTemplateError = (error) => {
    return `
            <td data-cell="title">${error}</td>
    `; }

// export const tableTemplate = `
//     <tr class="responsive-tr">
//         <td data-cell="title">{{title}}</td>
//         <td data-cell="category"></td>
//         <td data-cell="date"></td>
//         <td data-cell="actions" class="flex center align-items-center gap-30">
//             <button type="button" aria-label="Edit" class="edit-btn">
//                 <i class="fa-solid fa-pen"></i>
//             </button>
//             <button type="button" aria-label="Delete" class="delete-btn">
//                 <i class="fa-solid fa-trash"></i>
//             </button>
//         </td>
//     </tr>

// `;
