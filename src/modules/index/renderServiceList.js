/*jshint esversion: 6 */

const renderServiceList = () => {
	const navRepairTypeAllBtns = document.querySelectorAll('.popup-repair-types-nav__item');
	const popupRepairTypesTab = document.querySelector('.popup-repair-types-tab');
	const navListPopupRepair = document.querySelector('.nav-list-popup-repair');

	let globalCounter = 0;
	let count = 0;

	const showActive = (textContent) => {
		navRepairTypeAllBtns.forEach((item) => {
			if (item.textContent === textContent) {
				item.style.backgroundColor = '#ece4da';
				item.classList.add('active');
			} else {
				item.style.backgroundColor = '#f8f4ef';
				item.classList.remove('active');
			}
		});
	};

	const getData = (textContent) => {
		fetch('./db/db.json')
			.then((res) => res.json())
			.then((data) => {
				const array = data.serviceList.filter((item) => item.type === textContent);
				renderItems(array);
			});
	};

	const renderItems = (array) => {
		const fullRepairTypesContentTable = document.querySelector('.popup-repair-types-content-table');
		fullRepairTypesContentTable.innerHTML = '';
		const newTable = document.createElement('table');
		newTable.classList.add('popup-repair-types-content-table__list');
		fullRepairTypesContentTable.append(newTable);
		const newTbody = document.createElement('tbody');
		document.querySelector('.popup-repair-types-content-table__list').append(newTbody);
		array.forEach(({ type, name, units, cost }, index) => {
			const newTr = document.createElement('tr');
			newTr.classList.add('mobile-row');
			if (index === 0) {
				newTr.classList.add('showHide');
			}
			newTr.innerHTML = `
        <td class="repair-types-name">${name}</td>
        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
        <td class="repair-types-value">${units.substring(0, 1)}<sup>${units.substring(1, 2)}</sup></td>
        <td class="repair-types-value">${cost} руб.</td>
        `;
			document.querySelector('.popup-repair-types-content-table__list>tbody').append(newTr);
		});
	};

	showActive('Потолок: Демонтажные работы');
	getData('Потолок: Демонтажные работы');

	navRepairTypeAllBtns.forEach((item) => {
		item.addEventListener('click', (e) => {
			const repairTypesContentTitle = document.querySelector('.popup-repair-types-content__head-title');
			repairTypesContentTitle.textContent = e.target.textContent;
			showActive(e.target.textContent);
			if (item.classList.contains('active')) {
				getData(e.target.textContent);
			}
		});
	});

	const nextSlide = () => {
		const move = () => {
			const animate = requestAnimationFrame(move);
			count += 1;
			navListPopupRepair.style.transform = `translateX(${-count}%)`;
			if (count === 30 || count === 60 || count === 90) {
				cancelAnimationFrame(animate);
			}
		};
		requestAnimationFrame(move);
	};

	const prevSlide = () => {
		const move = () => {
			const animate = requestAnimationFrame(move);
			count -= 1;
			navListPopupRepair.style.transform = `translateX(${-count}%)`;
			if (count === 0 || count === 30 || count === 60) {
				cancelAnimationFrame(animate);
			}
		};
		requestAnimationFrame(move);
	};

	popupRepairTypesTab.addEventListener('click', (e) => {
		if (e.target.closest('#nav-arrow-popup-repair_left')) {
			if (globalCounter > 0) {
				globalCounter--;
				prevSlide();
			}
		}
		if (e.target.closest('#nav-arrow-popup-repair_right')) {
			if (globalCounter < 3) {
				globalCounter++;
				nextSlide();
			}
		}
	});

	window.addEventListener('resize', () => {
		navListPopupRepair.style.transform = `translateX(0%)`;
		count = 0;
		globalCounter = 0;
	});
};

export default renderServiceList;
