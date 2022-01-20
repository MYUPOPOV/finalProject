/*jshint esversion: 6 */

const successFormulaHints = () => {
	const formulaItemIcon = document.querySelectorAll('.formula-item__icon'); // все иконки
	const formulaSliderWrap = document.querySelector('.formula-slider-wrap'); // Весь блок с иконками
	const formulaSlider = document.querySelector('.formula-slider'); // Блок под formulaSliderWrap
	let countWelcome = 0;
	let countSlideWelcome = 0;

	/* Показываем/скрываем подсказки */
	const showHint = (hint, item) => {
		const heightToTop = item.getBoundingClientRect().top - 10;
		hint.closest('.row').style.zIndex = '1000';
		if (heightToTop < hint.offsetHeight) {
			hint.style.bottom = `-${hint.offsetHeight + 20}px`;
			hint.style.zIndex = '1000';
			hint.classList.add('popup-before');
		} else {
			hint.style.bottom = '90px';
			hint.classList.remove('popup-before');
		}
		hint.style.visibility = 'visible';
		hint.style.opacity = '1';
	};
	const hideHint = (hint) => {
		hint.style.visibility = 'hidden';
		hint.style.opacity = '0.1';
		hint.closest('.row').style.zIndex = '0';
	};

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

	/* Слушаем клики по всему блоку (при сужении экрана) */
	formulaSliderWrap.addEventListener('click', (e) => {
		if (e.target.closest('#formula-arrow_left')) {
			countSlideWelcome--;
			prevWelcome(formulaSlider, countSlideWelcome);
			[...formulaSlider.children].forEach((item) => {
				item.classList.remove('active-item');
				item.children[0].children[0].classList.remove('formula-item-popup--active');
			});
		}
		if (e.target.closest('#formula-arrow_right')) {
			countSlideWelcome++;
			nextWelcome(formulaSlider, countSlideWelcome);
			[...formulaSlider.children].forEach((item) => {
				item.classList.remove('active-item');
				item.children[0].children[0].classList.remove('formula-item-popup--active');
			});
		}
		if (e.target.closest('.formula-slider__slide')) {
			e.target.children[0].children[0].classList.toggle('formula-item-popup--active');
			e.target.classList.toggle('active-item');
		}
	});

	/* Показываем всплывающие окна */
	formulaItemIcon.forEach((item) => {
		item.addEventListener('mouseover', (e) => {
			showHint(e.target.parentElement.children[0], item);
			e.target.parentElement.classList.add('active-item');
		});
		item.addEventListener('mouseout', (e) => {
			hideHint(e.target.parentElement.children[0]);
			e.target.parentElement.classList.remove('active-item');
		});
	});
};

export default successFormulaHints;
