import { getPostsByUser } from "../api/blog/getAllPosts.mjs";

let intervalId;

export function loadCarouselFunctionallity() {
  const prevButton = document.querySelector(".prev-slide");
  const nextButton = document.querySelector(".next-slide");

  prevButton.addEventListener("click", (e) => {
    handlePrevSlide();
    restartInterval();
  });

  nextButton.addEventListener("click", (e) => {
    handleNextSlide();
    restartInterval();
  });

  startInterval();
}

function startInterval() {
  intervalId = setInterval(handleNextSlide, 2000);
}

function restartInterval() {
  clearInterval(intervalId);
  startInterval();
}

function handleNextSlide() {
  const container = document.querySelector(".hero article");
  const firstSlide = document.querySelector("[data-position='first']");
  const secondSlide = document.querySelector("[data-position='second']");
  const thirdSlide = document.querySelector("[data-position='third']");

  if (
    firstSlide.dataset.position === "first" &&
    firstSlide.dataset.active === "true"
  ) {
    firstSlide.dataset.active = "false";
    secondSlide.dataset.active = "true";
    container.style.transform = "translateX(-100%)";
  } else if (
    secondSlide.dataset.position === "second" &&
    secondSlide.dataset.active === "true"
  ) {
    secondSlide.dataset.active = "false";
    thirdSlide.dataset.active = "true";
    container.style.transform = "translateX(-200%)";
  } else if (
    thirdSlide.dataset.position === "third" &&
    thirdSlide.dataset.active === "true"
  ) {
    thirdSlide.dataset.active = "false";
    firstSlide.dataset.active = "true";
    container.style.transform = "translateX(0%)";
  }
}

function handlePrevSlide() {
  const container = document.querySelector(".hero article");
  const firstSlide = document.querySelector("[data-position='first']");
  const secondSlide = document.querySelector("[data-position='second']");
  const thirdSlide = document.querySelector("[data-position='third']");

  if (
    firstSlide.dataset.position === "first" &&
    firstSlide.dataset.active === "true"
  ) {
    firstSlide.dataset.active = "false";
    thirdSlide.dataset.active = "true";
    container.style.transform = "translateX(-200%)";
  } else if (
    secondSlide.dataset.position === "second" &&
    secondSlide.dataset.active === "true"
  ) {
    secondSlide.dataset.active = "false";
    firstSlide.dataset.active = "true";
    container.style.transform = "translateX(0%)";
  } else if (
    thirdSlide.dataset.position === "third" &&
    thirdSlide.dataset.active === "true"
  ) {
    thirdSlide.dataset.active = "false";
    secondSlide.dataset.active = "true";
    container.style.transform = "translateX(-100%)";
  }
}
