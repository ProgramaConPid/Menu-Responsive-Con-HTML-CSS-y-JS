const hamburgerIcon = document.querySelector('#hamburger__icon');
const navLinksMobile = document.querySelector('.nav__links');
const navItems = document.querySelectorAll('.nav__item');

function showNav() {
  navLinksMobile.classList.toggle('show');

  if (navLinksMobile.classList.contains('show')) {
    hamburgerIcon.src = '/svg/close__icon.svg';
  } else {
    hamburgerIcon.src = '/svg/hamburger__icon.svg';
  }

  navItems.forEach(item => {

    item.addEventListener('click', () => {

      item.parentElement.classList.remove('show');
      hamburgerIcon.src = '/svg/hamburger__icon.svg';

    })

  })
}

hamburgerIcon.addEventListener('click', showNav);