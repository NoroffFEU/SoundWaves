export function loadEditBtn() {
  const editButtons = document.querySelectorAll(".edit-btn");
  editButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const dataID = button.getAttribute("data-post-id");
      console.log(dataID);
    });
  });
}
