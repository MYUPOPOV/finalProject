/*jshint esversion: 6 */

const renserItems = () => {
	const tbody = document.getElementById('tbody');
	const typeItem = document.getElementById('typeItem');
	const btnAddItem = document.querySelector('.btn-addItem');
	const modal = document.getElementById('modal');

	const getData = (type) => {
		fetch('./db/db.json')
			.then((res) => res.json())
			.then((data) => {
				data.shift();
				if (type === 'Все услуги') {
					renderItems(data);
				} else if (type === 'renderSelect') {
					const arraySelect = [];
					data.forEach((item) => {
						if (!arraySelect.includes(item.type)) {
							arraySelect.push(item.type);
						}
					});
					renderSelectTypes(arraySelect);
				} else {
					const array = data.filter((item) => item.type === type);
					renderItems(array);
				}
			});
	};

	const renderItems = (data) => {
		tbody.innerHTML = '';
		data.forEach(({ id, type, name, units, cost }, index) => {
			const newRow = document.createElement('tr');
			newRow.classList.add('table__row');
			newRow.innerHTML = `
      <td class="table__id table__cell">${id}</td>
      <td class="table-type table__cell">${type}</td>
      <td class="table-name table__cell">${name}</td>
      <td class="table-units table__cell">${units}</td>
      <td class="table-cost table__cell">${cost} руб</td>
      <td>
        <div class="table__actions table__cell">
          <button class="button action-change">
            <span class="svg_ui">
              <svg class="action-icon_change">
                <use xlink:href="./img/sprite.svg#change"></use>
              </svg>
            </span>
            <span>Изменить</span>
          </button>
          <button class="button action-remove">
            <span class="svg_ui">
              <svg class="action-icon_remove">
                <use xlink:href="./img/sprite.svg#remove"></use>
              </svg>
            </span>
            <span>Удалить</span>
          </button>
        </div>
      </td>
      `;
			newRow.querySelector('.action-change').addEventListener('click', (e) => {
				console.log(e.target.closest('.table__row'));
				console.log('Изменить');
			});
			newRow.querySelector('.action-remove').addEventListener('click', (e) => {
				console.log(e.target.closest('.table__row'));
				console.log('Удалить');
			});

			tbody.append(newRow);
		});
	};

	const renderSelectTypes = (array) => {
		typeItem.innerHTML = '';
		array.unshift('Все услуги');
		array.forEach((item) => {
			const newOption = document.createElement('option');
			newOption.value = item;
			newOption.textContent = item;
			typeItem.append(newOption);
		});
		typeItem.addEventListener('change', () => {
			getData(typeItem.value);
		});
	};

	getData('Все услуги');
	getData('renderSelect');

	btnAddItem.addEventListener('click', (e) => {
		modal.style.display = 'flex';
	});

	modal.addEventListener('click', (e) => {
		e.preventDefault();
		if (e.target.closest('.button__close') || e.target.closest('.cancel-button')) {
			modal.style.display = 'none';
		}
		if (e.target.closest('.button-ui_firm')) {
			console.log(e.target);
		}
	});

	// icon__close
	//   button-ui_firm
	// cancel-button
};

export default renserItems;
