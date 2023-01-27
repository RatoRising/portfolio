const menuNavUl = document.querySelector('.menu_navbar__ul');

function transform_menu_icon(x) {
	x.classList.toggle('transform_menu_icon');
}

// function addClass(y) {
// 	y.classList.toggle('add_class');r
// }

document.querySelector('.menu_mobile').addEventListener('click', () => {
	let menuOpened = menuNavUl.style.left === '0'

	if (!menuOpened) {
		menuNavUl.style.left = '0';
	} else {
		menuNavUl.style.left = '100vw';
	}
});

document.querySelectorAll('.menu-items').forEach((btn) => {
	btn.addEventListener('click', () => (menuNavUl.style.left = '100vw'));
});

(function footerDate() {
	let year = new Date().getFullYear();
	document.querySelector('#footer_date').innerHTML = year;
})();