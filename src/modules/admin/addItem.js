/*jshint esversion: 6 */

const addItem = () => {
	const tbody = document.getElementById('tbody');
	const modal = document.getElementById('modal');
	const typeItem = document.getElementById('typeItem');
	const type = document.getElementById('type');
	const name = document.getElementById('name');
	const units = document.getElementById('units');
	const cost = document.getElementById('cost');
	const btnAddItem = document.querySelector('.btn-addItem');

	let idData = 0;

	const getLastId = () => {
		return fetch('http://localhost:4550/serviceList').then((res) => res.json());
	};

	const resetInputs = () => {
		type.value = '';
		name.value = '';
		units.value = '';
		cost.value = '';
	};

	/* Рендер услуг */
	const getData = (type) => {
		fetch('http://localhost:4550/serviceList')
			.then((res) => res.json())
			.then((data) => {
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

	const sendData = (body) => {
		return fetch('http://localhost:4550/serviceList', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
	};

	const submitForm = (form) => {
		getLastId().then((data) => {
			data.forEach((item) => {
				if (Number(item.id) > idData) {
					console.log('~ Number(item.id)', Number(item.id));
					idData = Number(item.id) + 1;

					if (type.value && name.value && units.value && cost.value) {
						const item = {
							type: type.value,
							name: name.value,
							units: units.value,
							cost: cost.value,
							id: String(idData),
						};

						sendData(item)
							.then((response) => {
								if (response.status !== 201) {
									throw new Error('Что то пошло не так');
								}
								return response.json();
							})
							.then((data) => {
								console.log('data', data);
								// resetInputs();
								getData('Все услуги');
								getLastId();
								modal.style.display = 'none';
							})
							.catch((error) => {
								console.log(error);
							});
					} else {
						console.log('Заполните поля');
					}
				}
			});
		});
	};

	btnAddItem.addEventListener('click', (e) => {
		modal.style.display = 'flex';
	});

	modal.addEventListener('click', (e) => {
		e.preventDefault();
		if (e.target.closest('.button__close') || e.target.closest('.cancel-button')) {
			modal.style.display = 'none';
		}
		if (e.target.closest('.button-ui_firm')) {
			submitForm();
		}
	});
};

export default addItem;
