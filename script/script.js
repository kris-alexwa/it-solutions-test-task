const navigation = document.querySelector('.navigation');
const navigationMenuList = navigation.querySelector('.navigation__menu-list');
const navigationLink = navigationMenuList.querySelectorAll('.navigation__link');

navigationLink.forEach((link) => {
  link.addEventListener('click', (event) => {
    navigationLink.forEach(link2 => link2.classList.remove('navigation__link_active'))
    event.target.classList.add('navigation__link_active')
  })
})
