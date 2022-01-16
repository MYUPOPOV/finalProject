/*jshint esversion: 6 */

const modals = () => {
	const menuLink = document.querySelector('.link-list-menu>a');
	const popup = document.querySelectorAll('.popup');
	const linkListRepair = document.querySelectorAll('.link-list-repair');
	const linkPrivacy = document.querySelectorAll('span.link-privacy');
	const consultationBtns = document.querySelectorAll('.button.button_wide');

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

	const showModalPrivacy = () => {
		popup.forEach((item) => {
			if (item.classList.contains('popup-privacy')) {
				item.style.visibility = 'visible';
				item.addEventListener('click', (e) => {
					if (!e.target.closest('.popup-dialog-privacy')) {
						item.style.visibility = '';
					}
				});
			}
		});
	};

	const showModalConsultation = () => {
		popup.forEach((item) => {
			if (item.classList.contains('popup-consultation')) {
				item.style.visibility = 'visible';
				item.addEventListener('click', (e) => {
					if (!e.target.closest('.feedback-wrap') || e.target.closest('.close-consultation')) {
						item.style.visibility = '';
					}
				});
			}
		});
	};

	menuLink.addEventListener('click', () => {
		showModalRepairTypes();
	});
	linkListRepair.forEach((item) => {
		item.addEventListener('click', () => {
			showModalRepairTypes();
		});
	});
	linkPrivacy.forEach((item) => {
		item.addEventListener('click', () => {
			showModalPrivacy();
		});
	});

	consultationBtns.forEach((item) => {
		item.addEventListener('click', () => {
			showModalConsultation();
		});
	});
};

export default modals;
