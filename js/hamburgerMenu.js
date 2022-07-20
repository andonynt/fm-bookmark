const d = document;

const hamburgerMenu = (btnClass, dataHamburgerMenu, menu) => {
  const $hamburgerMenu = d.querySelector(`[${dataHamburgerMenu}]`);

  d.addEventListener('click', e => {
    if (e.target.matches(btnClass)) {
      e.preventDefault();
      $hamburgerMenu.classList.toggle('translate-x-full');
      $hamburgerMenu.classList.toggle('translate-x-0');
    }
    if (e.target.matches(menu) || e.target.matches(`${menu} > *`)) {
      $hamburgerMenu.classList.toggle('translate-x-full');
      $hamburgerMenu.classList.toggle('translate-x-0');
    }
  });
}

export default hamburgerMenu;