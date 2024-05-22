export function addHeaderScrollInteractivity() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= window.innerHeight / 2) {
      header.setAttribute("data-interactive", "true");
    } else {
      header.setAttribute("data-interactive", "false");
    }

    if (scrollPosition >= window.innerHeight) {
      header.style.top = "0rem";
    } else {
      header.style.top = "-5rem";
    }
  });
}
