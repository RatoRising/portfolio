const menuNavUl = document.querySelector('ul');

document.querySelector('.menuMobile').addEventListener('click', () => {
	menuNavUl.style.display === 'flex' ? (menuNavUl.style.display = '') : (menuNavUl.style.display = 'flex');
});

document.querySelectorAll('.menu-items').forEach((btn) => {
	btn.addEventListener('click', () => (menuNavUl.style.display = ''));
});
