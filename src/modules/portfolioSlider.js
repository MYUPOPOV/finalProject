/*jshint esversion: 6 */

const portfolioSlider = () => {
	const portfolio = document.querySelector('#portfolio');
	const portfolioSlider = document.querySelector('.portfolio-slider');
	const portfolioSliderWrap = document.querySelector('.portfolio-slider-wrap');
	const portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile');

	const portfolioSliderSlideFrame = document.querySelectorAll('.portfolio-slider__slide-frame');

	const portfolioArrowLeft = document.querySelector('#portfolio-arrow_left');
	const portfolioArrowRight = document.querySelector('#portfolio-arrow_right');

	// popup
	const popupPortfolio = document.querySelector('.popup-portfolio');
	const popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap');
	const popupPortfolioSlider = document.querySelector('.popup-portfolio-slider');
	const popupPortfolioText = document.querySelectorAll('.popup-portfolio-text');

	const sliderCounterContentCurrent = document.querySelectorAll('.slider-counter-content__current');
	const sliderCounterContentTotal = document.querySelectorAll('.slider-counter-content__total');

	let countPortfolio = 0;
	let countSliderPortfolio = 0;
	let countSliderPopupPortfolio = 0;

	sliderCounterContentTotal[1].textContent = '10';
	sliderCounterContentTotal[3].textContent = '10';
	sliderCounterContentCurrent[3].textContent = '1';
	sliderCounterContentCurrent[1].textContent = '1';

	const addActiveClassSlider = (arr, ind, activeClass) => {
		if (ind === -1) {
			ind = 9;
			countSliderPopupPortfolio = 9;
			countSliderPortfolio = 9;
		}
		if (ind <= arr.children.length - 1) {
			if (arr.classList.contains('popup-portfolio-slider')) {
				sliderCounterContentCurrent[3].textContent = ind + 1;
			}
			if (arr.classList.contains('portfolio-slider-mobile')) {
				sliderCounterContentCurrent[1].textContent = ind + 1;
			}
			[...arr.children].forEach((item, i) => {
				item.classList.remove(activeClass);
				if (i === ind) {
					item.classList.add(activeClass);
				}
			});
		} else {
			sliderCounterContentCurrent[3].textContent = '1';
			sliderCounterContentCurrent[1].textContent = '1';
			countSliderPopupPortfolio = 0;
			countSliderPortfolio = 0;
		}
	};
	addActiveClassSlider(popupPortfolioSlider, 0, 'popup-portfolio-slider__slide--active');
	addActiveClassSlider(portfolioSliderMobile, 0, 'portfolio-slider__slide-frame--active');

	const addActiveClassText = (arr, ind, activeClass) => {
		if (ind === -1) {
			ind = 9;
		}
		if (ind <= arr.length - 1) {
			arr.forEach((item, i) => {
				item.classList.remove(activeClass);
				if (i === ind) {
					item.classList.add(activeClass);
				}
			});
		} else {
			countSliderPopupPortfolio = 0;
		}
	};
	addActiveClassText(popupPortfolioText, 0, 'popup-portfolio-text--active');

	portfolioSliderWrap.addEventListener('click', (e) => {
		const target = e.target;
		if (target.closest('#portfolio-arrow-mobile_left')) {
			countSliderPortfolio--;
			addActiveClassSlider(portfolioSliderMobile, countSliderPortfolio, 'portfolio-slider__slide-frame--active');
		}
		if (target.closest('#portfolio-arrow-mobile_right')) {
			countSliderPortfolio++;
			addActiveClassSlider(portfolioSliderMobile, countSliderPortfolio, 'portfolio-slider__slide-frame--active');
		}

		if (target.closest('.portfolio-slider__slide-frame')) {
			addActiveClassSlider(popupPortfolioSlider, Number(target.dataset.index), 'popup-portfolio-slider__slide--active');
			addActiveClassText(popupPortfolioText, Number(target.dataset.index), 'popup-portfolio-text--active');
			countSliderPopupPortfolio = Number(target.dataset.index);
		}
	});

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

	portfolio.addEventListener('click', (e) => {
		const target = e.target;
		if (target.closest('.portfolio-slider__slide-frame')) {
			popupPortfolio.classList.add('visible');
		}
		if (target.closest('#portfolio-arrow_left')) {
			countSliderPortfolio--;
			prevPortfolio(portfolioSlider, countSliderPortfolio);
		}
		if (target.closest('#portfolio-arrow_right')) {
			countSliderPortfolio++;
			nextPortfolio(portfolioSlider, countSliderPortfolio);
		}
	});

	popupPortfolio.addEventListener('click', (e) => {
		const target = e.target;
		if (target.closest('#popup_portfolio_left')) {
			countSliderPopupPortfolio--;
			addActiveClassSlider(popupPortfolioSlider, countSliderPopupPortfolio, 'popup-portfolio-slider__slide--active');
			addActiveClassText(popupPortfolioText, countSliderPopupPortfolio, 'popup-portfolio-text--active');
		}
		if (target.closest('#popup_portfolio_right')) {
			countSliderPopupPortfolio++;
			addActiveClassSlider(popupPortfolioSlider, countSliderPopupPortfolio, 'popup-portfolio-slider__slide--active');
			addActiveClassText(popupPortfolioText, countSliderPopupPortfolio, 'popup-portfolio-text--active');
		}
	});
};

export default portfolioSlider;
