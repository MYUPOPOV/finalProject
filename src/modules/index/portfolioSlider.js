/*jshint esversion: 6 */

const portfolioSlider = () => {
	const popupPortfolio = document.querySelector('.popup-portfolio');
	const popupPortfolioSliderSlide = document.querySelectorAll('.popup-portfolio-slider__slide');
	const popupPortfolioText = document.querySelectorAll('.popup-portfolio-text');
	const portfolioSlider = document.querySelector('.portfolio-slider');
	const portfolioArrowLeft = document.querySelector('#portfolio-arrow_left');
	const portfolioArrowRight = document.querySelector('#portfolio-arrow_right');
	const sliderCounterContentCurrent = document.querySelectorAll('.slider-counter-content__current');
	const sliderCounterContentTotal = document.querySelectorAll('.slider-counter-content__total');
	const portfolio = document.querySelector('#portfolio');

	let countPortfolio = 0;
	let countSliderPortfolio = 0;
	let countSliderPopupPortfolio = 0;

	sliderCounterContentTotal[2].textContent = '10';
	sliderCounterContentCurrent[2].textContent = '2';

	/* Фотокарточки на основном экране слайд налево */
	const prevPortfolio = (elem, index) => {
		portfolioArrowRight.style.display = 'flex';
		if (index === 0) {
			portfolioArrowLeft.style.display = 'none';
		}
		if (index >= 0) {
			const go = () => {
				countPortfolio -= 5;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateX(${-countPortfolio}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (innerWidth > 1024) {
					if (countPortfolio === 0) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 100) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 200) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth <= 1024 && innerWidth >= 576) {
					if (countPortfolio === 0) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 100) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 200) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 300) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth <= 768 && innerWidth >= 576) {
					if (countPortfolio === 100) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 200) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 300) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 400) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			countSliderPortfolio = 0;
		}
	};
	/* Фотокарточки на основном экране слайд направо */
	const nextPortfolio = (elem, index) => {
		portfolioArrowLeft.style.display = 'flex';
		let countNextPort = 0;
		if (innerWidth > 1024) {
			countNextPort = 2;
			if (index === 2) {
				portfolioArrowRight.style.display = 'none';
			}
		}
		if (innerWidth <= 1024 && innerWidth > 768) {
			countNextPort = 3;
			if (index === 3) {
				portfolioArrowRight.style.display = 'none';
			}
		}
		if (innerWidth < 1024 && innerWidth >= 768) {
			countNextPort = 4;
			if (index === 4) {
				portfolioArrowRight.style.display = 'none';
			}
		}
		if (index <= countNextPort) {
			const go = () => {
				countPortfolio += 5;
				[...elem.children].forEach((item) => {
					item.style.transform = `translateX(${-countPortfolio}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (innerWidth > 1024) {
					if (countPortfolio === 100) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 200) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth <= 1024 && innerWidth >= 768) {
					if (countPortfolio === 100) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 200) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 300) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth <= 768 && innerWidth >= 576) {
					if (countPortfolio === 100) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 200) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 300) {
						cancelAnimationFrame(animate);
					}
					if (countPortfolio === 400) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			countSliderPortfolio--;
		}
	};

	/* Открываем нужную карточку */
	const showPorfolioCase = (slideIndex) => {
		popupPortfolioSliderSlide.forEach((item, index) => {
			if (index === slideIndex) {
				item.style.display = 'block';
			} else {
				item.style.display = 'none';
			}
		});
		popupPortfolioText.forEach((item, index) => {
			if (index === slideIndex) {
				item.classList.add('visible');
			} else {
				item.classList.remove('visible');
			}
		});
		sliderCounterContentCurrent[2].textContent = `${slideIndex + 1}`;
	};

	// Слушаем нажатие на фотокарточку портфолио => открываем popup
	portfolio.addEventListener('click', (e) => {
		if (e.target.closest('.portfolio-slider__slide-frame')) {
			popupPortfolio.style.visibility = 'visible';
			popupPortfolio.addEventListener('click', (e) => {
				if (!e.target.closest('.popup-dialog-portfolio') || e.target.closest('#portfolio-close')) {
					popupPortfolio.style.visibility = '';
				}
			});
			const slideIndex = Number(e.target.closest('.portfolio-slider__slide-frame').dataset.index);
			countSliderPopupPortfolio = slideIndex;
			showPorfolioCase(countSliderPopupPortfolio);
		}
		// Нажатие на стрелочки основного экрана
		if (e.target.closest('#portfolio-arrow_left')) {
			countSliderPortfolio--;
			prevPortfolio(portfolioSlider, countSliderPortfolio);
		}
		if (e.target.closest('#portfolio-arrow_right')) {
			countSliderPortfolio++;
			nextPortfolio(portfolioSlider, countSliderPortfolio);
		}
	});

	popupPortfolio.addEventListener('click', (e) => {
		const target = e.target;
		if (target.closest('#popup_portfolio_left')) {
			if (countSliderPopupPortfolio > 0) {
				countSliderPopupPortfolio--;
				showPorfolioCase(countSliderPopupPortfolio);
			}
		}
		if (target.closest('#popup_portfolio_right')) {
			if (countSliderPopupPortfolio < 9) {
				countSliderPopupPortfolio++;
				showPorfolioCase(countSliderPopupPortfolio);
			}
		}
	});
};

export default portfolioSlider;
