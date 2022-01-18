/*jshint esversion: 6 */

const rewievsSlider = () => {
	const reviewsSliderWrap = document.querySelector('.reviews-slider-wrap'); // Блок со стрелочками
	const reviewsSlider = document.querySelector('.reviews-slider'); // Все блоки слайдера
	let currentSlide = 0;
	let count = 0;

	const prevSlide = (elem, index) => {
		if (index >= 0) {
			const move = () => {
				count -= 5;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateY(${-count}%)`;
				});
				const animate = requestAnimationFrame(move);
				if (count <= 0) {
					cancelAnimationFrame(animate);
				}
				if (count === 100) {
					cancelAnimationFrame(animate);
				}
				if (count === 200) {
					cancelAnimationFrame(animate);
				}
				if (count === 300) {
					cancelAnimationFrame(animate);
				}
				if (count === 400) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(move);
		} else {
			currentSlide = 0;
		}
	};

	const nextSlide = (elem, index) => {
		if (index <= 4) {
			const move = () => {
				count += 5;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateY(${-count}%)`;
				});
				const animate = requestAnimationFrame(move);
				if (count <= 0) {
					cancelAnimationFrame(animate);
				}
				if (count === 100) {
					cancelAnimationFrame(animate);
				}
				if (count === 200) {
					cancelAnimationFrame(animate);
				}
				if (count === 300) {
					cancelAnimationFrame(animate);
				}
				if (count === 400) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(move);
		} else {
			currentSlide--;
		}
	};

	/* Кликаем по стрелочке (влево вправо) */
	reviewsSliderWrap.addEventListener('click', (e) => {
		if (e.target.closest('#reviews-arrow_left')) {
			currentSlide--;
			prevSlide(reviewsSlider, currentSlide);
		}
		if (e.target.closest('#reviews-arrow_right')) {
			currentSlide++;
			nextSlide(reviewsSlider, currentSlide);
		}
	});
};

export default rewievsSlider;
