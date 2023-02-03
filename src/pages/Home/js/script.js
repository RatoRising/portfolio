const menuNavUl = document.querySelector('.menu_navbar__ul');
const menuMobileIcon = document.querySelector('.menu_mobile');
const menuNavLi = document.querySelectorAll('.menu-items');
const techList = [
	'HTML',
	'CSS',
	'SASS',
	'GitHub',
	'BEMCSS',
	'Javascript',
	'ReactJS',
	'NodeJS',
	'Typescript',
	'MySQL'
];


const mainRandomTextHandler = () => {
	const randomTech = techList[Math.floor(Math.random() * techList.length)];
	const mainRandomTextArea = document.querySelector('.main-random-text');
	mainRandomTextArea.innerHTML = randomTech;
};

setInterval(mainRandomTextHandler, 1200);

const showMenuItems = menuMobileIcon.addEventListener('click', () => {
	menuNavUl.classList.toggle('left0');
	menuMobileIcon.classList.toggle('transform_menu_icon');
});

const handleMenuItems = menuNavLi.forEach((btn) => {
	btn.addEventListener('click', () => {
		menuNavUl.classList.toggle('left0');
		menuMobileIcon.classList.toggle('transform_menu_icon');
	});
});

(function animateGridItems() {
	let slideLeft = {
		delay: 400,
		origin: 'left',
		distance: '100px',
		interval: 400,
		reset: true
	};
	let slideUp = {
		delay: 400,
		origin: 'bottom',
		distance: '200px',
		interval: 400,
		reset: true
	};
	ScrollReveal().reveal('.qualification_grid_item:nth-child(odd)', slideLeft);
	ScrollReveal().reveal('.qualification_grid_item:nth-child(even)', slideUp);
	ScrollReveal().reveal('.project_grid_item:nth-child(odd)', slideLeft);
	ScrollReveal().reveal('.project_grid_item:nth-child(even)', slideUp);
	ScrollReveal().reveal('.interest_grid_item:nth-child(odd)', slideLeft);
	ScrollReveal().reveal('.interest_grid_item:nth-child(even)', slideUp);
})();

(function footerDate() {
	let year = new Date().getFullYear();
	document.querySelector('#footer_date').innerHTML = year;
})();
