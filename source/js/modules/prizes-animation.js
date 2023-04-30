export default () => {
  const navigationLinks = document.querySelectorAll(`.js-menu-link`);
  const animationPrizesBlock = document.querySelector(`.animation-prizes`);

  navigationLinks.forEach((item) => {
    item.addEventListener(`click`, function (e) {
      const currentUrl = document.URL.split(`#`);
      const anchor = currentUrl[1];

      const currentLink = e.target.href;
      const currentLinkAnchor = currentLink.split(`#`)[1];

      if (anchor === `story` && currentLinkAnchor === `prizes`) {
        e.preventDefault();

        animationPrizesBlock.classList.toggle(`animation-prizes--active`);

        setTimeout(() => {
          window.location.href = currentLink;
          animationPrizesBlock.classList.toggle(`animation-prizes--active`);
        }, 600);
      }
    });
  });
};
