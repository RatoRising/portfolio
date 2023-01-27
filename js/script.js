const menuNavUl = document.querySelector('.menu_navbar__ul');
const menuNavLi = document.querySelectorAll('.menu-items');
const menuMobile = document.querySelector('.menu_mobile');

menuMobile.addEventListener('click', () => {
	menuNavUl.classList.toggle('left0');
	menuMobile.classList.toggle('transform_menu_icon');
});

menuNavLi.forEach((btn) => {
	btn.addEventListener('click', () => {
		menuNavUl.classList.toggle('left0');
		menuMobile.classList.toggle('transform_menu_icon');
	});
});

(function footerDate() {
	let year = new Date().getFullYear();
	document.querySelector('#footer_date').innerHTML = year;
})();

