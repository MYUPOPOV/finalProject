/*jshint esversion: 6 */

const repairTypesSlider = () => {
	const rowReverse = document.querySelector('.row_reverse'); // Блок со слайдером и кнопками
	const navListRepair = document.querySelector('.nav-list-repair'); // блок со всеми кнопками
	const navigationButtons = document.querySelectorAll('.repair-types-nav__item'); // Все кнопки навигации
	const typesRepairItem = document.querySelectorAll('.types-repair-item'); // блок div с картинками (5 блоков)
	const sliderCounterContentCurrent = document.querySelector('.slider-counter-content__current');
	const sliderCounterContentTotal = document.getElementById('slider-counter-repair-total');
	let countIndex = 0;
	let countPictureDiv = 0;
	let countSlide = 0;
	let countPictureStep = 0;

	let globalCounter = 0;
	let count = 0;

	const nextSlide = (indNavBtn, countAll) => {
		typesRepairItem.forEach((pictureDiv, indPicDiv) => {
			if (indNavBtn === indPicDiv) {
				countSlide = 0;
				countPictureStep = Math.round(100 / countAll);
				const go = () => {
					countPictureDiv += 1;
					countSlide += 1;
					pictureDiv.style.transform = `translateY(${-countPictureDiv}%)`;
					const animate = requestAnimationFrame(go);
					if (countSlide == countPictureStep) {
						cancelAnimationFrame(animate);
					}
				};
				requestAnimationFrame(go);
			}
		});
	};

	const prevSlide = (indNavBtn, countAll) => {
		typesRepairItem.forEach((pictureDiv, indPicDiv) => {
			if (indNavBtn === indPicDiv) {
				countSlide = 0;
				countPictureStep = Math.round(100 / countAll);
				const go = () => {
					countPictureDiv -= 1;
					countSlide += 1;
					pictureDiv.style.transform = `translateY(${-countPictureDiv}%)`;
					const animate = requestAnimationFrame(go);
					if (countSlide == countPictureStep) {
						cancelAnimationFrame(animate);
					}
				};
				requestAnimationFrame(go);
			}
		});
	};

	const showFirstSlide = (indNavBtn = 0, countIndex = 0) => {
		typesRepairItem.forEach((pictureDiv, indPicDiv) => {
			pictureDiv.style.transform = `translateY(0%)`;
			countPictureDiv = 0;
			pictureDiv.style.display = 'none';
			if (indNavBtn === indPicDiv) {
				pictureDiv.style.display = 'block';
				sliderCounterContentCurrent.textContent = countIndex + 1; // Обновляем счетчики
				sliderCounterContentTotal.textContent = pictureDiv.querySelectorAll('.repair-types-slider__slide').length;
			}
		});
	};

	const addActiveClass = (arr, ind, activeClass) => {
		arr.forEach((item, i) => {
			item.classList.remove(activeClass);
			if (i === ind) {
				item.classList.add(activeClass);
			}
		});
	};

	const nextSlideBtn = () => {
		const move = () => {
			const animate = requestAnimationFrame(move);
			count += 1;
			navListRepair.style.transform = `translateX(${-count}%)`;
			if (count === 20 || count === 40 || count === 60 || count === 80) {
				cancelAnimationFrame(animate);
			}
		};
		requestAnimationFrame(move);
	};

	const prevSlideBtn = () => {
		const move = () => {
			const animate = requestAnimationFrame(move);
			count -= 1;
			navListRepair.style.transform = `translateX(${-count}%)`;
			if (count === 20 || count === 40 || count === 60 || count === 0) {
				cancelAnimationFrame(animate);
			}
		};
		requestAnimationFrame(move);
	};

	/* Слушаем клики по главному блоку и делегируем события */
	rowReverse.addEventListener('click', (e) => {
		if (e.target.tagName === 'BUTTON') {
			navigationButtons.forEach((btn, indNavBtn) => {
				// Делаем кнопку активной
				btn.classList.remove('active');
				if (btn === e.target) {
					btn.classList.add('active');
					countIndex = 0;
					showFirstSlide(indNavBtn, countIndex); //
				}
			});
		}
		// Стрелочки
		if (e.target.closest('#repair-types-arrow_right')) {
			navigationButtons.forEach((btn, indNavBtn) => {
				if (btn.classList.contains('active')) {
					typesRepairItem.forEach((pictureDiv, indPicDiv) => {
						if (indNavBtn === indPicDiv) {
							const countAll = pictureDiv.querySelectorAll('.repair-types-slider__slide').length;
							if (countIndex < countAll - 1) {
								countIndex++;
								sliderCounterContentCurrent.textContent = countIndex + 1;
								nextSlide(indNavBtn, countAll);
							}
						}
					});
				}
			});
		}
		if (e.target.closest('#repair-types-arrow_left')) {
			navigationButtons.forEach((btn, indNavBtn) => {
				if (btn.classList.contains('active')) {
					typesRepairItem.forEach((pictureDiv, indPicDiv) => {
						const countAll = pictureDiv.querySelectorAll('.repair-types-slider__slide').length;
						if (indNavBtn === indPicDiv) {
							if (countIndex > 0) {
								countIndex--;
								sliderCounterContentCurrent.textContent = countIndex + 1;
								prevSlide(indNavBtn, countAll);
							}
						}
					});
				}
			});
		}
		// Стрелочки кнопок при адаптиве
		if (e.target.closest('#nav-arrow-repair-right_base')) {
			if (globalCounter < 4) {
				globalCounter++;
				nextSlideBtn();
			}
		}
		if (e.target.closest('#nav-arrow-repair-left_base')) {
			if (globalCounter > 0) {
				globalCounter--;
				prevSlideBtn();
			}
		}
	});

	addActiveClass(typesRepairItem, 0, 'types-repair-item--active');

	window.addEventListener('resize', () => {
		if (window.screen.width >= 576) {
			navListRepair.style.marginLeft = '0px';
		}
		if (window.screen.width < 576) {
			navListRepair.style.marginLeft = '40px';
		}
	});

	if (window.screen.width >= 576) {
		navListRepair.style.marginLeft = '0px';
	}

	if (window.screen.width < 576) {
		navListRepair.style.marginLeft = '40px';
	}

	// if (count !== 0) {
	// 	globalCounter = 0;
	// 	count = 0;
	// 	navListRepair.style.transform = `translateX(${-count}%)`;
	// }
};

export default repairTypesSlider;
