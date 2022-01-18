/*jshint esversion: 6 */

const rewievsSlider = () => {
	const reviewsSliderWrapElem = document.querySelector('.reviews-slider-wrap'); // Блок со стрелочками
	const reviewsSliderElem = document.querySelector('.reviews-slider'); // Все блоки слайдера

	let countReviews = 0;
	let currentSlideReviews = 0;

	const prevSlide = (elem, index) => {
		if (index >= 0) {
			const go = () => {
				countReviews -= 5;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateY(${-countReviews}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countReviews <= 0) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 100) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 200) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 300) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 400) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideReviews = 0;
		}
	};

	const nextSlide = (elem, index) => {
		if (index <= 4) {
			const go = () => {
				countReviews += 5;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateY(${-countReviews}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countReviews <= 0) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 100) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 200) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 300) {
					cancelAnimationFrame(animate);
				}
				if (countReviews === 400) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideReviews--;
		}
	};

	/* Кликаем по стрелочке (влево вправо) */
	reviewsSliderWrapElem.addEventListener('click', (e) => {
		if (e.target.closest('#reviews-arrow_left')) {
			currentSlideReviews--;
			prevSlide(reviewsSliderElem, currentSlideReviews);
		}
		if (e.target.closest('#reviews-arrow_right')) {
			currentSlideReviews++;
			nextSlide(reviewsSliderElem, currentSlideReviews);
		}
	});
};

export default rewievsSlider;
