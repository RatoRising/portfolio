const menuNavList = document.querySelector(".menu_nav__list");
const menuMobileIcon = document.querySelector(".menu_mobile");
const menuNavListItem = document.querySelectorAll(".menu_nav__list-item");
const upButton = document.querySelector(".up-button");
const techList = [
	"HTML",
	"CSS",
	"SASS",
	"GitHub",
	"BEMCSS",
	"Javascript",
	"ReactJS",
	"NodeJS",
	"Typescript",
	"MySQL",
];

const bgHeaderToggler = window.addEventListener("scroll", () => {
	const header = document.querySelector(".header-bg-in-effect");
	const menuOpened = window.scrollY > 10 && screen.width >= 800;
	if (menuOpened) {
		header.classList.add("bg-header-in")
		header.classList.remove("bg-header-out")
	}

	if (!menuOpened) {
		header.classList.add("bg-header-out")
		header.classList.remove("bg-header-in")
	}
});

const menuItemsShow = menuMobileIcon.addEventListener("click", () => {
	menuNavList.classList.toggle("left0");
	menuMobileIcon.classList.toggle("transform_menu_icon");
});

const menuItemsHandler = menuNavListItem.forEach((btn) => {
	btn.addEventListener("click", () => {
		menuNavList.classList.toggle("left0");
		menuMobileIcon.classList.toggle("transform_menu_icon");
	});
});

const upButtonShow = window.addEventListener("scroll", () => {
	window.scrollY > 100 ?
		upButton.classList.add('up-button-show') :
		upButton.classList.remove('up-button-show');
});

const goToPageTop = upButton.addEventListener('click', () => {
	window.scrollY > 100 ?
		window.scrollTo({
			top: 0,
			behavior: 'auto'
		}) : console.log("tricky")
})

const mainRandomTextHandler = () => {
	const randomTech = techList[Math.floor(Math.random() * techList.length)];
	const mainRandomTextArea = document.querySelector(".main-random-text");
	mainRandomTextArea.innerHTML = randomTech;
};
setInterval(mainRandomTextHandler, 1000);

(function animateGridItems() {
	let slideLeft = {
		delay: 400,
		origin: "left",
		distance: "100px",
		interval: 400,
		reset: true,
	};
	let slideUp = {
		delay: 400,
		origin: "bottom",
		distance: "200px",
		interval: 400,
		reset: true,
	};
	ScrollReveal().reveal(".about_grid_item:nth-child(odd)", slideLeft);
	ScrollReveal().reveal(".about_grid_item:nth-child(even)", slideUp);
	ScrollReveal().reveal(".project_grid_item:nth-child(odd)", slideLeft);
	ScrollReveal().reveal(".project_grid_item:nth-child(even)", slideUp);
})();

(function footerDate() {
	let year = new Date().getFullYear();
	document.querySelector("#footer_date").innerHTML = year;
})();