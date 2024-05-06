export function loadSlider() {
  const prevButton = document.querySelector(".prev-slide");
  const nextButton = document.querySelector(".next-slide");
  nextButton.addEventListener('click', handleNextSlide);
  prevButton.addEventListener('click', handlePrevSlide);
}

function handleNextSlide() {
    const leftSlide = document.querySelector("[data-position='left']");
    const centerSlide = document.querySelector("[data-position='center']");
    const rightSlide = document.querySelector("[data-position='right']");

    centerSlide.dataset.position = 'left';
    rightSlide.dataset.position = 'center';
    leftSlide.dataset.position = 'right';
    
}

function handlePrevSlide() {
    const leftSlide = document.querySelector("[data-position='left']");
    const centerSlide = document.querySelector("[data-position='center']");
    const rightSlide = document.querySelector("[data-position='right']");

    centerSlide.dataset.position = 'right';
    rightSlide.dataset.position = 'left';
    leftSlide.dataset.position = 'center';
}