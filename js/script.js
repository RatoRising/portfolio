const menuNavUl = document.querySelector('ul');
const menuMobile = document.querySelector('.menu_mobile')

document.querySelector('.menu_mobile').addEventListener('click', () => {
	menuNavUl.style.display === 'flex' ? (menuNavUl.style.display = '') : (menuNavUl.style.display = 'flex');
});

document.querySelectorAll('.menu-items').forEach((btn) => {
	btn.addEventListener('click', () => (menuNavUl.style.display = ''));
});