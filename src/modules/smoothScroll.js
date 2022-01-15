/*jshint esversion: 6 */

const smoothScroll = () => {
	const popupDialogMenu = document.querySelector('.popup-dialog-menu');
	const buttonFooter = document.querySelector('.button-footer');
	const menuItems = document.querySelectorAll('.menu-link');

	const scrollUp = function (object) {
		object.scrollIntoView({ block: 'start', behavior: 'smooth' });
	};

	const menuAnimationOff = () => {
		if (window.screen.width >= 576) {
			popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
		}
		if (window.screen.width < 576) {
			popupDialogMenu.style.transform = 'translate3d(0, -1040px, 0)';
		}
	};

	menuItems.forEach((item) => {
		const itemLink = document.getElementById(`${item.getAttribute('href').substring(1)}`);
		if (itemLink !== null) {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				menuAnimationOff();
				scrollUp.bind(itemLink)(itemLink);
			});
		}
	});

	buttonFooter.addEventListener('click', (e) => {
		e.preventDefault();
		const itemLink = document.getElementById(buttonFooter.querySelector('a').getAttribute('href').substring(1));
		scrollUp.bind(itemLink)(itemLink);
	});
};

export default smoothScroll;
