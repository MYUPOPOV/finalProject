/*jshint esversion: 6 */

const contractAdaptation = () => {
	const transparencySliderWrapElem = document.querySelector('.transparency-slider-wrap');
	const transparencySliderElem = document.querySelector('.transparency-slider');
	const transparencyIitemElem = document.querySelectorAll('.transparency-item');
	const popupTransparencyElem = document.querySelector('.popup-transparency');

	let countDocument = 0;
	let currentSlideDocument = 0;

	const adaptationDocumet = () => {
		const widthWindow = document.documentElement.clientWidth;
		if (widthWindow <= 1024) {
			transparencySliderElem.style.display = 'flex';
			transparencySliderElem.style.height = '450px';
			transparencySliderElem.style.overflow = 'hidden';
			transparencyIitemElem.forEach((item) => {
				item.style.marginBottom = '105px';
			});
		}
	};

	const prevSlideDocument = (elem, index) => {
		if (index >= 0) {
			const go = () => {
				countDocument -= 2;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateY(${-countDocument}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countDocument <= 0) {
					cancelAnimationFrame(animate);
				}
				if (countDocument === 120) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideDocument = 0;
		}
	};

	const nextSlideDocument = (elem, index) => {
		if (index <= 2) {
			const go = () => {
				countDocument += 2;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateY(${-countDocument}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countDocument === 120) {
					cancelAnimationFrame(animate);
				}
				if (countDocument === 240) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideDocument--;
		}
	};
	window.addEventListener('resize', adaptationDocumet);

	transparencySliderWrapElem.addEventListener('click', (event) => {
		const target = event.target;
		event.preventDefault();
		if (target.closest('#transparency-arrow_left')) {
			currentSlideDocument--;
			prevSlideDocument(transparencySliderElem, currentSlideDocument);
		}
		if (target.closest('#transparency-arrow_right')) {
			currentSlideDocument++;
			nextSlideDocument(transparencySliderElem, currentSlideDocument);
		}
	});
};

export default contractAdaptation;
