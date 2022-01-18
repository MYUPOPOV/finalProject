/*jshint esversion: 6 */

const repairTypesSlider = () => {
	const rowReverse = document.querySelector('.row_reverse');
	const navListRepair = document.querySelector('.nav-list-repair');
	const repairTypesSlider = document.querySelector('.repair-types-slider');
	const typesRepairItem = document.querySelectorAll('.types-repair-item');
	const sliderCounterContentCurrent = document.querySelector('.slider-counter-content__current');
	const sliderCounterContentTotal = document.getElementById('slider-counter-repair-total');

	let countRepairs = 0;
	let countRepairsBase = 0;
	let currentSlideRepairs = 0;
	let currentSlideRepairsBase = 0;
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

	rowReverse.addEventListener('click', (e) => {
		const target = e.target;
		if (target.tagName === 'BUTTON') {
			[...navListRepair.children].forEach((item, i) => {
				item.classList.remove('active');
				if (item === target) {
					item.classList.add('active');
					addActiveClass(typesRepairItem, i, 'types-repair-item--active');
				}
			});
			total = document.querySelector('.types-repair-item--active').children.length;
			getConutValue();
			celarStyle();
		}
		if (target.closest('#repair-types-arrow_left')) {
			currentSlideRepairs--;
			[...repairTypesSlider.children].forEach((item, i) => {
				if (item.classList.contains('types-repair-item--active')) {
					prevRepairs(item, currentSlideRepairs);
				}
			});
		}
		if (target.closest('#repair-types-arrow_right')) {
			currentSlideRepairs++;
			[...repairTypesSlider.children].forEach((item, i) => {
				if (item.classList.contains('types-repair-item--active')) {
					let countst = 0;
					[...item.children].forEach((item, ind) => {
						countst = ind;
					});
					nextRepairs(item, currentSlideRepairs, countst);
				}
			});
		}
		if (target.closest('#nav-arrow-repair-left_base')) {
			currentSlideRepairsBase--;
			prevRepairs(navListRepair, currentSlideRepairsBase);
			celarStyle();
			getConutValue();
		}
		if (target.closest('#nav-arrow-repair-right_base')) {
			currentSlideRepairsBase++;
			nextRepairs(navListRepair, currentSlideRepairsBase, 4);
			celarStyle();
			getConutValue();
		}
	});
	addActiveClass(typesRepairItem, 0, 'types-repair-item--active');
};

export default repairTypesSlider;
