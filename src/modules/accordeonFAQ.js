/*jshint esversion: 6 */

const accordeonFAQ = () => {
	const accordionElem = document.querySelector('.accordion');
	const titleBlockElem = document.querySelectorAll('.title_block');

	const showAccordion = (elem) => {
		elem.classList.toggle('msg-active');
	};

	const noShowAccordion = () => {
		titleBlockElem.forEach((item) => {
			item.classList.remove('msg-active');
		});
	};

	accordionElem.addEventListener('click', (e) => {
		if (e.target.matches('.title_block')) {
			noShowAccordion();
			showAccordion(e.target);
		}
	});
};

export default accordeonFAQ;
