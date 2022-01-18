/*jshint esversion: 6 */

const contract = () => {
	let countDocumentPopup = 0;
	let currentSlideDocumentPopup = 0;
	const popupTransparencyElem = document.querySelector('.popup-transparency');
	const popupTransparencySlider = document.querySelector('.popup-transparency-slider');
	const sliderCounterContentTotal = document.querySelectorAll('.slider-counter-content__total');
	const sliderСounterСontentСurrent = document.querySelectorAll('.slider-counter-content__current');
	sliderCounterContentTotal[4].textContent = '3';
	sliderСounterСontentСurrent[4].textContent = '1';

	const prevSlide = (elem, index) => {
		if (index >= 0) {
			sliderСounterСontentСurrent[4].textContent = 1 + currentSlideDocumentPopup;

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
			sliderСounterСontentСurrent[4].textContent = currentSlideDocumentPopup + 1;
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
