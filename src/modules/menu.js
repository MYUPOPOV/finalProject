/*jshint esversion: 6 */

const menu = () => {
	const headerContactsArrowBtn = document.querySelector('.header-contacts__arrow');
	const menuIcon = document.querySelector('.menu__icon');

	headerContactsArrowBtn.addEventListener('click', () => {
		const phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord a');
		phoneNumberAccord.style.paddingTop = '23px';
		phoneNumberAccord.style.opacity = '100%';
	});

	menuIcon.addEventListener('click', (e) => {
		console.log('click');
	});
};
export default menu;
