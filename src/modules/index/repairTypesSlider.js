/*jshint esversion: 6 */

const repairTypesSlider = () => {
	const rowReverse = document.querySelector('.row_reverse'); // Блок со слайдером и кнопками
	const navListRepair = document.querySelector('.nav-list-repair'); // блок со всеми кнопками
	const navigationButtons = document.querySelectorAll('.repair-types-nav__item'); // Все кнопки навигации
	const typesRepairItem = document.querySelectorAll('.types-repair-item'); // блок div с картинками (5 блоков)
	const sliderCounterContentCurrent = document.querySelector('.slider-counter-content__current');
	const sliderCounterContentTotal = document.getElementById('slider-counter-repair-total');
	const current = 1;
	let countRepairsBase = 0;
	let currentSlideRepairs = 0;
	let currentSlideRepairsBase = 0;
	let countIndex = 0;
	let total = typesRepairItem[0].children.length;
	let countPictureDiv = 0;
	let countSlide = 0;
	let countPictureStep = 0;

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

	const getConutValue = () => {
		sliderCounterContentCurrent.textContent = current;
		sliderCounterContentTotal.textContent = total;
	};

	const addActiveClass = (arr, ind, activeClass) => {
		arr.forEach((item, i) => {
			item.classList.remove(activeClass);
			if (i === ind) {
				item.classList.add(activeClass);
			}
		});
	};

	const celarStyle = () => {
		currentSlideRepairs = 0;
		typesRepairItem.forEach((item) => {
			[...item.children].forEach((item) => {
				item.style.transform = `translateY(0%)`;
			});
		});
	};

	const prevRepairs = (elem, index) => {
		if (index >= 0) {
			sliderCounterContentCurrent.textContent = 1 + currentSlideRepairs;
			const go = () => {
				countRepairsBase -= 5;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateX(${-countRepairsBase}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countRepairsBase <= 0 || countRepairsBase === 120 || countRepairsBase === 240 || countRepairsBase === 360 || countRepairsBase === 480) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideRepairs = 0;
			currentSlideRepairsBase = 0;
		}
	};

	const nextRepairs = (elem, index, countLenght) => {
		let countIndex = 0;
		countIndex = index;
		if (countIndex <= countLenght) {
			const go = () => {
				sliderCounterContentCurrent.textContent = 1 + currentSlideRepairs;
				countRepairsBase += 5;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateX(${-countRepairsBase}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countRepairsBase <= 0 || countRepairsBase === 120 || countRepairsBase === 240 || countRepairsBase === 360 || countRepairsBase === 480) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideRepairsBase--;
		}
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
		if (e.target.closest('#nav-arrow-repair-left_base')) {
			currentSlideRepairsBase--;
			prevRepairs(navListRepair, currentSlideRepairsBase);
			celarStyle();
			getConutValue();
		}
		if (e.target.closest('#nav-arrow-repair-right_base')) {
			currentSlideRepairsBase++;
			nextRepairs(navListRepair, currentSlideRepairsBase, 4);
			celarStyle();
			getConutValue();
		}
  
	});

	addActiveClass(typesRepairItem, 0, 'types-repair-item--active');
	getConutValue();
};

export default repairTypesSlider;
