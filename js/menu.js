const buttonMenu = document.querySelector('.header-menu');

if (buttonMenu) {
   const headerNav = document.querySelector('.header-nav');
   buttonMenu.addEventListener("click", function () {
      document.body.classList.toggle('lock');
      if (!headerNav.classList.contains('header-nav-open')) {
         headerNav.classList.toggle('header-nav-open');
      }
      buttonMenu.classList.toggle('menu-open');
      headerNav.classList.toggle('header-nav-close');

      setTimeout(() => {
         if (headerNav.classList.contains('header-nav-open') && headerNav.classList.contains('header-nav-close')) {
            headerNav.classList.toggle('header-nav-open');
         }
      }, 290);
   })
}
