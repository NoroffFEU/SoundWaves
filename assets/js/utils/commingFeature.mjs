export function comingFeature() {
  const notAvailableFeature = document.querySelectorAll(".coming-feature");

  function handleClick(event) {
    event.preventDefault();
    alert(
      "Oops! This feature is still tuning up backstage. Stay tuned for its big debut!"
    );
  }

  notAvailableFeature.forEach((item) =>
    item.addEventListener("click", handleClick)
  );
}
