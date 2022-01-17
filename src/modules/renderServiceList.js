/*jshint esversion: 6 */

const renderServiceList = () => {
	const navRepairTypeAllBtns = document.querySelectorAll('.popup-repair-types-nav__item');

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
				const array = data.filter((item) => item.type === textContent);
				renderItems(array);
			});
	};

	const renderItems = (array) => {
		console.log('~ array', array);
		const fullRepairTypesContentTable = document.querySelector('.popup-repair-types-content-table');
		fullRepairTypesContentTable.innerHTML = '';
		const newTable = document.createElement('table');
		newTable.classList.add('popup-repair-types-content-table__list');
		fullRepairTypesContentTable.append(newTable);
		const newTbody = document.createElement('tbody');
		document.querySelector('.popup-repair-types-content-table__list').append(newTbody);
		array.forEach(({ type, name, units, cost }, index) => {
			console.log('~ type', type);
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
};

export default renderServiceList;
