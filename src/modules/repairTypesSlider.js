/*jshint esversion: 6 */

const repairTypesSlider = () => {
	const rowReverse = document.querySelector('.row_reverse'); // Блок со слайдером и кнопками

	const navListRepair = document.querySelector('.nav-list-repair'); // блок со всеми кнопками
	const navigationButtons = document.querySelectorAll('.repair-types-nav__item'); // Все кнопки навигации

	const repairTypesSlider = document.querySelector('.repair-types-slider'); // все блоки div с картинками
	const typesRepairItem = document.querySelectorAll('.types-repair-item'); // блок div с картинками (5 блоков)
	const sliderCounterContentCurrent = document.querySelector('.slider-counter-content__current');
	const sliderCounterContentTotal = document.getElementById('slider-counter-repair-total');

	let countRepairs = 0;
	let countRepairsBase = 0;
	let currentSlideRepairs = 0;
	let currentSlideRepairsBase = 0;

	let countIndex = 0;

	let total = typesRepairItem[0].children.length;
	const current = 1;

	const getConutValue = () => {
		sliderCounterContentCurrent.textContent = current;
		sliderCounterContentTotal.textContent = total;
	};
	getConutValue();

	const addActiveClass = (arr, ind, activeClass) => {
		arr.forEach((item, i) => {
			item.classList.remove(activeClass);
			if (i === ind) {
				item.classList.add(activeClass);
			}
		});
	};

	const celarStyle = () => {
		countRepairs = 0;
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
				if (elem.classList.contains('nav-list-repair')) {
					countRepairsBase -= 5;
					[...elem.children].forEach((item) => {
						item.style.transform = `translateX(${-countRepairsBase}%)`;
					});
				}
				if (elem.classList.contains('types-repair-item')) {
					countRepairs -= 5;
					[...elem.children].forEach((item) => {
						item.style.transform = `translateY(${-countRepairs}%)`;
					});
				}
				const animate = requestAnimationFrame(go);
				if (elem.classList.contains('nav-list-repair')) {
					if (countRepairsBase <= 0) {
						cancelAnimationFrame(animate);
					}
					if (countRepairsBase === 100) {
						cancelAnimationFrame(animate);
					}
					if (countRepairsBase === 200) {
						cancelAnimationFrame(animate);
					}
					if (countRepairsBase === 300) {
						cancelAnimationFrame(animate);
					}
					if (countRepairsBase === 400) {
						cancelAnimationFrame(animate);
					}
				}
				if (elem.classList.contains('types-repair-item')) {
					if (countRepairs <= 0) {
						cancelAnimationFrame(animate);
					}
					if (countRepairs === 100) {
						cancelAnimationFrame(animate);
					}
					if (countRepairs === 200) {
						cancelAnimationFrame(animate);
					}
					if (countRepairs === 300) {
						cancelAnimationFrame(animate);
					}
					if (countRepairs === 400) {
						cancelAnimationFrame(animate);
					}
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
		if (elem.classList.contains('nav-list-repair')) {
			countIndex = index;
		}
		if (elem.classList.contains('types-repair-item')) {
			countIndex = index;
		}
		if (countIndex <= countLenght) {
			const go = () => {
				sliderCounterContentCurrent.textContent = 1 + currentSlideRepairs;
				if (elem.classList.contains('nav-list-repair')) {
					countRepairsBase += 5;
					[...elem.children].forEach((item) => {
						item.style.transform = `translateX(${-countRepairsBase}%)`;
					});
				}
				if (elem.classList.contains('types-repair-item')) {
					countRepairs += 5;
					[...elem.children].forEach((item) => {
						item.style.transform = `translateY(${-countRepairs}%)`;
					});
				}
				const animate = requestAnimationFrame(go);
				if (elem.classList.contains('nav-list-repair')) {
					if (countRepairsBase <= 0) {
						cancelAnimationFrame(animate);
					}
					if (countRepairsBase === 100) {
						cancelAnimationFrame(animate);
					}
					if (countRepairsBase === 200) {
						cancelAnimationFrame(animate);
					}
					if (countRepairsBase === 300) {
						cancelAnimationFrame(animate);
					}
					if (countRepairsBase === 400) {
						cancelAnimationFrame(animate);
					}
				}
				if (elem.classList.contains('types-repair-item')) {
					if (countRepairs <= 0) {
						cancelAnimationFrame(animate);
					}
					if (countRepairs === 100) {
						cancelAnimationFrame(animate);
					}
					if (countRepairs === 200) {
						cancelAnimationFrame(animate);
					}
					if (countRepairs === 300) {
						cancelAnimationFrame(animate);
					}
					if (countRepairs === 400) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			if (elem.classList.contains('nav-list-repair')) {
				currentSlideRepairsBase--;
			}
			if (elem.classList.contains('types-repair-item')) {
				currentSlideRepairs--;
			}
		}
	};

	// ==================================================

	const nextSlide = (indNavBtn) => {
		typesRepairItem.forEach((pictureDiv, indPicDiv) => {
			if (indNavBtn === indPicDiv) {
				const go = () => {
					// const countRepairsBase = 5;
					let globalCount = countRepairs;
					countRepairs += 1;
					globalCount += 1;
					console.log('~ countRepairs', countRepairs);
					pictureDiv.style.transform = `translateY(${-countRepairs}%)`;
					const animate = requestAnimationFrame(go);
					if (globalCount === 20) {
						cancelAnimationFrame(animate);
						// countRepairs = 0;
					}
					if (globalCount === 40) {
						cancelAnimationFrame(animate);
					}
					if (globalCount === 60) {
						cancelAnimationFrame(animate);
					}
					if (globalCount === 80) {
						cancelAnimationFrame(animate);
					}
				};
				requestAnimationFrame(go);
				// pictureDiv Пролистываем блоки с картинками div ниже
			}
		});
	};

	const prevSlide = () => {};

	/* Показываем блок с картинками */
	const showFirstSlide = (indNavBtn = 0, countIndex = 0) => {
		typesRepairItem.forEach((pictureDiv, indPicDiv) => {
			pictureDiv.style.display = 'none';
			if (indNavBtn === indPicDiv) {
				pictureDiv.style.display = 'block';
				sliderCounterContentCurrent.textContent = countIndex + 1; // Обновляем счетчики
				sliderCounterContentTotal.textContent = pictureDiv.querySelectorAll('.repair-types-slider__slide').length;
			}
		});
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

					// addActiveClass(typesRepairItem, index, 'types-repair-item--active');
				}
			});

			// total = document.querySelector('.types-repair-item--active').children.length;
			// getConutValue();
			// celarStyle();
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
								nextSlide(indNavBtn);
								// Пролистываем блоки с картинками div ниже
							}
						}
					});
				}
			});

			// currentSlideRepairs++;
			// [...repairTypesSlider.children].forEach((item) => {
			// 	if (item.classList.contains('types-repair-item--active')) {
			// 		let countst = 0;
			// 		[...item.children].forEach((item, ind) => {
			// 			countst = ind;
			// 		});

			// 		nextRepairs(item, currentSlideRepairs, countst);
			// 	}
			// });
		}

		if (e.target.closest('#repair-types-arrow_left')) {
			navigationButtons.forEach((btn, indNavBtn) => {
				if (btn.classList.contains('active')) {
					typesRepairItem.forEach((pictureDiv, indPicDiv) => {
						if (indNavBtn === indPicDiv) {
							const countAll = pictureDiv.querySelectorAll('.repair-types-slider__slide').length;

							if (countIndex > 0) {
								countIndex--;
								sliderCounterContentCurrent.textContent = countIndex + 1;
								// Пролистываем блоки с картинками div ниже
							}
						}
					});
				}
			});

			// currentSlideRepairs--;
			// [...repairTypesSlider.children].forEach((item) => {
			// 	if (item.classList.contains('types-repair-item--active')) {
			// 		prevRepairs(item, currentSlideRepairs);
			// 	}
			// });
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

	// typesRepairItem;
	// console.log('~ typesRepairItem', typesRepairItem);
	// console.log('~ navigationButtons', navigationButtons);
};

export default repairTypesSlider;
