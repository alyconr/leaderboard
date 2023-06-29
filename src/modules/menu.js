export const menu = () => {
  const menuHamburger = document.querySelector('#hamburger');
  const navMobile = document.querySelector('.mobile-nav');
  const navMobileList = document.querySelectorAll('.mobile-nav-box a');
  const hamburgerImage = document.querySelector('#hamburger');
  const overlay = document.querySelector('.overlay');
  const toggleMenu = () => {
    if (navMobile.classList.contains('active')) {
      hamburgerImage.src = 'assets/images/cancel.svg';
      overlay.classList.toggle('active');
    } else {
      hamburgerImage.src = 'assets/images/ham.svg';
      overlay.classList.remove('active');
    }
  };

  menuHamburger.addEventListener('click', () => {
    navMobile.classList.toggle('active');
    toggleMenu();
  });

  navMobileList.forEach((item) => {
    item.addEventListener('click', () => {
      navMobile.classList.remove('active');
      toggleMenu();
    });
  });
};
