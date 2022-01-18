/*jshint esversion: 6 */

const contract = () => {
	const popupTransparency = document.querySelector('.popup-transparency');
	const popupTransparencySlider = document.querySelector('.popup-transparency-slider');
	const sliderCounterContentTotal = document.querySelectorAll('.slider-counter-content__total');
	const sliderСounterСontentСurrent = document.getElementById('slider-counter-contract');
	const transparencyIitem = document.querySelectorAll('.transparency-item');
	const transparencySliderWrap = document.querySelector('.transparency-slider-wrap');
	const transparencySlider = document.querySelector('.transparency-slider');
	const popup = document.querySelectorAll('.popup');
	let countDocument = 0;
	let currentSlideDocument = 0;
	let countDocumentPopup = 0;
	let currentSlideDocumentPopup = 0;
  sliderCounterContentTotal[3].textContent = '3';
	sliderСounterСontentСurrent.textContent = '1';

	const adaptationDocumet = () => {
		const widthWindow = document.documentElement.clientWidth;
		if (widthWindow <= 1024) {
			transparencySlider.style.display = 'flex';
			transparencySlider.style.height = '450px';
			transparencySlider.style.overflow = 'hidden';
			transparencyIitem.forEach((item) => {
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

	transparencySliderWrap.addEventListener('click', (event) => {
		const target = event.target;
		event.preventDefault();
		if (target.closest('#transparency-arrow_left')) {
			currentSlideDocument--;
			prevSlideDocument(transparencySlider, currentSlideDocument);
		}
		if (target.closest('#transparency-arrow_right')) {
			currentSlideDocument++;
			nextSlideDocument(transparencySlider, currentSlideDocument);
		}
	});

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

	transparencyIitem.forEach((item) => {
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

	popupTransparency.addEventListener('click', (event) => {
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

	window.addEventListener('resize', adaptationDocumet);
};

export default contract;
