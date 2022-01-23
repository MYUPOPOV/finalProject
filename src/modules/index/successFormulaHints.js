/*jshint esversion: 6 */

const successFormulaHints = () => {
	const problems = document.getElementById('formula');
	const allProblemsDesktop = problems.querySelectorAll('.row .formula-item');
	const formulaSlider = problems.querySelector('.formula-slider');

	const firstPrompt = document.querySelector('.first_prompt');
	const sectionPrompt = document.querySelector('.formula-slider-wrap');

	const minSlide = 0;
	const maxSlide = -865;
	let count = 0;
	firstPrompt.style.transition = `all 1s`;

	sectionPrompt.addEventListener('click', (e) => {
		if (e.target.closest('#formula-arrow_right')) {
			count -= 173;
			if (count <= maxSlide) {
				count = minSlide;
				firstPrompt.style.marginLeft = `${count}px`;
			} else {
				firstPrompt.style.marginLeft = `${count}px`;
			}
		} else if (e.target.closest('#formula-arrow_left')) {
			count += 173;
			if (count >= minSlide) {
				count = -692;
				firstPrompt.style.marginLeft = `${count}px`;
			} else {
				firstPrompt.style.marginLeft = `${count}px`;
			}
		}
	});

	document.addEventListener('click', (e) => {
		if (e.target.closest('#problems-arrow_right')) {
			count -= 300;
			if (count < -900) {
				count = 0;
				problemsWrapper.style.marginLeft = `${count}px`;
			} else {
				problemsWrapper.style.marginLeft = `${count}px`;
			}
		} else if (e.target.closest('#problems-arrow_left')) {
			count += 300;
			if (count > 0) {
				count = -900;
				problemsWrapper.style.marginLeft = `${count}px`;
			} else {
				problemsWrapper.style.marginLeft = `${count}px`;
			}
		}
	});

	allProblemsDesktop.forEach((elem) => {
		elem.addEventListener('mouseenter', () => {
			if (screen.width > 1024) {
				const popup = elem.querySelector('.formula-item-popup');
				elem.classList.add('active-item');
				if (popup.getBoundingClientRect().top < 0) {
					popup.style.transform = `translateY(${popup.offsetHeight + 120}px)`;
					elem.classList.add('rotateUp');
				}
				elem.addEventListener('mouseleave', () => {
					elem.classList.remove('active-item');
					elem.classList.remove('rotateUp');
					elem.classList.remove('rotateDown');
					popup.style = '';
				});
			}
		});
	});

	formulaSlider.style.display = 'flex';
};

export default successFormulaHints;
