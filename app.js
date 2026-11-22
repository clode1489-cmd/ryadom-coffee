const controls = document.querySelector('.menu-controls');
const categoryButtons = [...controls.querySelectorAll('button')];
const categories = [...document.querySelectorAll('[data-menu]')];

function showMenu(category) {
  categoryButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === category));
  });
  categories.forEach((section) => {
    section.hidden = section.dataset.menu !== category;
  });
}

controls.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (button) showMenu(button.dataset.filter);
});

const breakfastLink = document.querySelector('.breakfast-link');
breakfastLink.addEventListener('click', () => showMenu('breakfast'));
window.addEventListener('hashchange', () => {
  if (location.hash === '#breakfast-title') showMenu('breakfast');
});

showMenu(location.hash === '#breakfast-title' ? 'breakfast' : 'coffee');
controls.hidden = false;
