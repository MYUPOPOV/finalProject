/*jshint esversion: 6 */

const successFormulaHints = () => {
	const formulaItemIcon = document.querySelectorAll('.formula-item__icon');

	const showPromt = (popup, item) => {
		const heightToTop = item.getBoundingClientRect().top - 10;
		popup.closest('.row').style.zIndex = '1000';
		if (heightToTop < popup.offsetHeight) {
			popup.style.bottom = `-${popup.offsetHeight + 20}px`;
			popup.style.zIndex = '1000';
			popup.classList.add('popup-before');
		} else {
			popup.style.bottom = '90px';
			popup.classList.remove('popup-before');
		}
		popup.style.visibility = 'visible';
		popup.style.opacity = '1';
	};

	const hidePromt = (popup) => {
		popup.style.visibility = 'hidden';
		popup.style.opacity = '0.1';
		popup.closest('.row').style.zIndex = '0';
	};

	formulaItemIcon.forEach((item) => {
		item.addEventListener('mouseover', (e) => {
			const target = e.target;
			showPromt(target.parentElement.children[0], item);
			target.parentElement.classList.add('active-item');
		});
		item.addEventListener('mouseout', (e) => {
			const target = e.target;
			const popup = target.parentElement.children[0];
			hidePromt(popup);
			target.parentElement.classList.remove('active-item');
		});
	});

	const formulaSliderWrap = document.querySelector('.formula-slider-wrap');
	const formulaSlider = document.querySelector('.formula-slider');
	let countWelcome = 0;
	let countSlideWelcome = 0;

	const prevWelcome = (elem, index) => {
		if (index >= 0) {
			const go = () => {
				countWelcome -= 5;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateX(${-countWelcome}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (innerWidth <= 576) {
					if (countWelcome === 0) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 175) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 350) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 525) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 710) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 885) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth <= 1024 && innerWidth >= 576) {
					if (countWelcome === 0) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 225) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 455) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 685) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 910) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 1135) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			countSlideWelcome = 0;
		}
	};
	const nextWelcome = (elem, index) => {
		if (index <= elem.children.length - 1) {
			const go = () => {
				countWelcome += 5;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateX(${-countWelcome}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (innerWidth <= 576) {
					if (countWelcome === 175) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 350) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 525) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 710) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 885) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth <= 1024 && innerWidth >= 576) {
					if (countWelcome === 225) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 455) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 685) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 910) {
						cancelAnimationFrame(animate);
					}
					if (countWelcome === 1135) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			countSlideWelcome--;
		}
	};

	formulaSliderWrap.addEventListener('click', (e) => {
		const target = e.target;
		if (target.closest('#formula-arrow_left')) {
			countSlideWelcome--;
			prevWelcome(formulaSlider, countSlideWelcome);
			[...formulaSlider.children].forEach((item) => {
				item.classList.remove('active-item');
				item.children[0].children[0].classList.remove('formula-item-popup--active');
			});
		}
		if (target.closest('#formula-arrow_right')) {
			countSlideWelcome++;
			nextWelcome(formulaSlider, countSlideWelcome);
			[...formulaSlider.children].forEach((item) => {
				item.classList.remove('active-item');
				item.children[0].children[0].classList.remove('formula-item-popup--active');
			});
		}
		if (target.closest('.formula-slider__slide')) {
			target.children[0].children[0].classList.toggle('formula-item-popup--active');
			target.classList.toggle('active-item');
		}
	});
};

export default successFormulaHints;
