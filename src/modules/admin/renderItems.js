/*jshint esversion: 6 */

const renderItems = () => {
	const tbody = document.getElementById('tbody');
	const modal = document.getElementById('modal');
	const modalHeader = document.querySelector('.modal__header');
	const typeItem = document.getElementById('typeItem');
	const type = document.getElementById('type');
	const name = document.getElementById('name');
	const units = document.getElementById('units');
	const cost = document.getElementById('cost');
	const btnAddItem = document.querySelector('.btn-addItem');

	let idData = 0;
	let btnOnchangeStatus = false;
	let globalID;

	const getJSONData = () => {
		return fetch('http://localhost:4550/serviceList').then((res) => res.json());
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

	/* Получаем последний ID для дальнейшего добавления элементов  */
	const getLastId = () => {
		getJSONData()
			.then((data) => {
				data.forEach((item) => {
					if (Number(item.id) >= idData) {
						idData = Number(item.id) + 1;
					}
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
	getLastId();

	/* Обнуляем input */
	const resetInputs = () => {
		type.value = '';
		name.value = '';
		units.value = '';
		cost.value = '';
	};

	/* Изменение элемента */
	const changeItem = (idItem) => {
		console.log('Изменяем: ', idItem);
		modal.style.display = 'flex';
		modalHeader.textContent = 'Редактировать услугу';
		btnOnchangeStatus = true;
		getJSONData()
			.then((data) => {
				const item = data.find((item) => item.id === idItem);
				type.value = item.type;
				name.value = item.name;
				units.value = item.units;
				cost.value = item.cost;
				globalID = idItem;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const deleteItem = (idItem) => {
		console.log('Удаляем: ', idItem);
		// fetch запрос на удаление
	};

	/* Кнопка Сохранить после Добавить либо Измнить */
	const submitForm = (idItem = 0) => {
		if (btnOnchangeStatus === false) {
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
						resetInputs();
						modal.style.display = 'none';
						getLastId();
						getData('Все услуги');
					})
					.catch((error) => {
						console.log(error);
					});
			} else {
				console.log('Заполните поля');
			}
		} else {
			console.log('Изменяем элемент с ID: ', globalID);
			// fetch запрос на изменение
			globalID = 0;
			resetInputs();
			modal.style.display = 'none';
			getData('Все услуги');
		}
	};

	/* Рендер услуг из бд */
	const getData = (type) => {
		getJSONData().then((data) => {
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
				changeItem(e.target.closest('.table__row').querySelector('.table__id').textContent);
			});
			newRow.querySelector('.action-remove').addEventListener('click', (e) => {
				deleteItem(e.target.closest('.table__row').querySelector('.table__id').textContent);
			});
			tbody.append(newRow);
		});
	};

	/* Формируем select */
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

	/* Слушатели всех кнопок модалки и Добавить услугу */
	btnAddItem.addEventListener('click', (e) => {
		modalHeader.textContent = 'Добавение новой услуги';
		btnOnchangeStatus = false;
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

	getData('Все услуги');
	getData('renderSelect');
};

export default renderItems;
