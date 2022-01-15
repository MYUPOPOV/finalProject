/*jshint esversion: 6 */

const menu = () => {
	const headerContactsArrowBtn = document.querySelector('.header-contacts__arrow');
	const menuIcon = document.querySelector('.menu__icon');
	const closeMenu = document.querySelector('.close-menu');
	const popupDialogMenu = document.querySelector('.popup-dialog-menu');

	const menuAnimationOn = () => {
		const popupDialogMenu = document.querySelector('.popup-dialog-menu');
		popupDialogMenu.style.transition = '0s';

		if (window.screen.width >= 576) {
			popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
		}
		if (window.screen.width < 576) {
			popupDialogMenu.style.transform = 'translate3d(0, -1040px, 0)';
		}
		popupDialogMenu.style.transition = '1s';
		popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';
	};

	const menuAnimationOff = () => {
		const popupDialogMenu = document.querySelector('.popup-dialog-menu');
		if (window.screen.width >= 576) {
			popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
		}
		if (window.screen.width < 576) {
			popupDialogMenu.style.transform = 'translate3d(0, -1040px, 0)';
		}
	};

	headerContactsArrowBtn.addEventListener('click', () => {
		const phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord a');
		phoneNumberAccord.style.paddingTop = '23px';
		phoneNumberAccord.style.opacity = '100%';
	});

	menuIcon.addEventListener('click', () => {
		menuAnimationOn();
	});

	closeMenu.addEventListener('click', () => {
		menuAnimationOff();
	});

	if (window.screen.width >= 576) {
		popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
	}
	if (window.screen.width < 576) {
		popupDialogMenu.style.transform = 'translate3d(0, -1040px, 0)';
	}
};
export default menu;
