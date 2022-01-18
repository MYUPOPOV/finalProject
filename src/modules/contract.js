/*jshint esversion: 6 */

const contract = () => {
	let countDocumentPopup = 0;
	let currentSlideDocumentPopup = 0;
	const popupTransparencyElem = document.querySelector('.popup-transparency');
	const popupTransparencySlider = document.querySelector('.popup-transparency-slider');
	const sliderCounterContentTotal = document.querySelectorAll('.slider-counter-content__total');
	const sliderСounterСontentСurrent = document.getElementById('slider-counter-contract');
	const transparencyIitemElem = document.querySelectorAll('.transparency-item');
  const transparencySliderWrapElem = document.querySelector('.transparency-slider-wrap');
	const transparencySliderElem = document.querySelector('.transparency-slider');


	const popup = document.querySelectorAll('.popup');
	sliderCounterContentTotal[3].textContent = '3';
	sliderСounterСontentСurrent.textContent = '1';

	// popupTransparencyElem.style.display = 'flex';

	const prevSlide = (elem, index) => {
		if (index >= 0) {
			sliderСounterСontentСurrent.textContent = 1 + currentSlideDocumentPopup;

			const go = () => {
				countDocumentPopup -= 2;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateY(${-countDocumentPopup}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countDocumentPopup <= 0) {
					cancelAnimationFrame(animate);
				}
				if (countDocumentPopup === 100) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideDocumentPopup = 0;
		}
	};

	const nextSlide = (elem, index) => {
		if (index <= 2) {
			sliderСounterСontentСurrent.textContent = currentSlideDocumentPopup + 1;
			const go = () => {
				countDocumentPopup += 2;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateY(${-countDocumentPopup}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countDocumentPopup === 100) {
					cancelAnimationFrame(animate);
				}
				if (countDocumentPopup === 200) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideDocumentPopup--;
		}
	};

	transparencyIitemElem.forEach((item) => {
		item.addEventListener('click', () => {
			popup.forEach((item) => {
				if (item.classList.contains('popup-transparency')) {
					item.style.visibility = 'visible';
					item.addEventListener('click', (e) => {
						if (!e.target.closest('.popup-transparency-slider-wrap') && !e.target.closest('.popup-arrow_transparency')) {
							item.style.visibility = '';
						}
					});
				}
			});
		});
	});

	popupTransparencyElem.addEventListener('click', (event) => {
		const target = event.target;
		if (target.closest('#transparency_left')) {
			currentSlideDocumentPopup--;
			prevSlide(popupTransparencySlider, currentSlideDocumentPopup);
		}
		if (target.closest('#transparency_right')) {
			currentSlideDocumentPopup++;
			nextSlide(popupTransparencySlider, currentSlideDocumentPopup);
		}
	});
};

export default contract;
