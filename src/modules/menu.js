/*jshint esversion: 6 */

const menu = () => {
	const headerContactsArrowBtn = document.querySelector('.header-contacts__arrow');
	const menuIcon = document.querySelector('.menu__icon');
	const closeMenu = document.querySelector('.close-menu');

	headerContactsArrowBtn.addEventListener('click', () => {
		const phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord a');
		phoneNumberAccord.style.paddingTop = '23px';
		phoneNumberAccord.style.opacity = '100%';
	});

	menuIcon.addEventListener('click', () => {
		const popupDialogMenu = document.querySelector('.popup-dialog-menu');
		popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';
	});

	closeMenu.addEventListener('click', () => {
		const popupDialogMenu = document.querySelector('.popup-dialog-menu');
		popupDialogMenu.style.transform = 'translate3d(645px, 0, 0)';
	});
};
export default menu;
