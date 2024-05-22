export function loadSocialMediaShare() {
  const link = encodeURI(window.location.href);
  const fb = document.querySelectorAll('[data-social="facebook"]');
  const tw = document.querySelectorAll('[data-social="twitter"]');
  const email = document.querySelectorAll('[data-social="email"]');
  const clipboard = document.querySelectorAll('[data-social="clipboard"]');

  fb.forEach((element) => {
    element.href = `https://www.facebook.com/share.php?u=${link}`;
  });

  tw.forEach((element) => {
    element.href = `https://twitter.com/intent/tweet?url=${link}`;
  });

  email.forEach((element) => {
    element.href = `mailto:?subject=Check this post&body=${link}`;
  });

  clipboard.forEach((element) => {
    element.addEventListener("click", () => {
      const tooltip = element.querySelector(".tooltip");
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";
      setTimeout(() => {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
      }, 1000);
      navigator.clipboard.writeText(link);
    });
  });
}
