/*jshint esversion: 6 */

const menu = () => {
	const headerContactsArrowBtn = document.querySelector('.header-contacts__arrow');
	const menuIcon = document.querySelector('.menu__icon');
	const popupDialogMenu = document.querySelector('.popup-dialog-menu');
	const popup = document.querySelectorAll('.popup');
	const menuLink = document.querySelector('.link-list-menu>a');
	let isPhoneNumberShown = false;
	let isMenuShown = false;

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
		setTimeout(() => {
			isMenuShown = true;
		}, 500);
	};

	const menuAnimationOff = () => {
		const popupDialogMenu = document.querySelector('.popup-dialog-menu');
		if (window.screen.width >= 576) {
			popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
		}
		if (window.screen.width < 576) {
			popupDialogMenu.style.transform = 'translate3d(0, -1040px, 0)';
		}
		isMenuShown = false;
	};

	const showModalRepairTypes = () => {
		popup.forEach((item) => {
			if (item.classList.contains('popup-repair-types')) {
				item.style.visibility = 'visible';
				item.addEventListener('click', (e) => {
					if (!e.target.closest('.popup-repair-types-content') && !e.target.closest('.popup-repair-types-tab')) {
						item.style.visibility = '';
					}
				});
			}
		});
	};

	headerContactsArrowBtn.addEventListener('click', () => {
		const phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord a');

		if (!isPhoneNumberShown) {
			phoneNumberAccord.style.paddingTop = '23px';
			phoneNumberAccord.style.opacity = '100%';
			headerContactsArrowBtn.querySelector('img').style.transform = 'rotate(180deg)';
		} else {
			phoneNumberAccord.style.paddingTop = '0px';
			phoneNumberAccord.style.opacity = '0';
			headerContactsArrowBtn.querySelector('img').style.transform = 'rotate(0deg)';
		}

		isPhoneNumberShown = !isPhoneNumberShown;
	});

	menuIcon.addEventListener('click', (e) => {
		e.preventDefault();
		menuAnimationOn();
	});

	document.addEventListener('click', (e) => {
		if (e.target.closest('.close-menu') || (isMenuShown && !e.target.closest('.popup-dialog-menu'))) {
			e.preventDefault();
			menuAnimationOff();
		}
	});

	menuLink.addEventListener('click', () => {
		showModalRepairTypes();
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