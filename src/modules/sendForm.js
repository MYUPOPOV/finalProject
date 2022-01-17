const sendForm = () => {
	const feedbackForm = document.querySelectorAll('.feedback__form');
	const feedbackBlockForm = document.querySelectorAll('.feedback-block__form');
	const allSubmitForms = [...feedbackForm, ...feedbackBlockForm];
	const popup = document.querySelectorAll('.popup');

	const showModalThank = () => {
		popup.forEach((item) => {
			if (item.classList.contains('popup-thank')) {
				item.style.visibility = 'visible';
				item.addEventListener('click', (e) => {
					if (!e.target.closest('.popup-thank-bg') || e.target.closest('.close-thank')) {
						item.style.visibility = '';
					}
				});
			}
		});
	};

	const resetInputs = (list) => {
		list.forEach((input) => {
			if (input.name === 'phone' || input.name === 'name') {
				input.value = '';
			}
			if (input.type === 'checkbox') {
				input.checked = false;
			}
		});
	};

	const validate = (list) => {
		let success = true;
		list.forEach((input) => {
			if (
				(input.name === 'phone' && /^[\d+() +-]+$/.test(input.value) && input.value.length > 10) ||
				(input.name === 'name' && /^[а-яА-Я ]+$/.test(input.value) && input.value.length > 1) ||
				(input.type === 'checkbox' && input.checked)
			) {
				input.classList.add('success');
				input.classList.remove('error');
			} else {
				input.classList.add('error');
				input.classList.remove('success');
			}
		});
		list.forEach((input) => {
			if (input.classList.contains('error')) {
				success = false;
			}
		});
		return success;
	};

	const sendData = (body) => {
		return fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
	};

	const submitForm = (form) => {
		const formElements = form.querySelectorAll('input');
		const formData = new FormData(form);
		const formBody = {};
		formData.forEach((val, key) => {
			formBody[key] = val;
		});

		if (validate(formElements)) {
			sendData(formBody)
				.then((response) => {
					if (response.status !== 201) {
						throw new Error('Что то пошло не так');
					}
					return response.json();
				})
				.then((data) => {
					console.log('data', data);
					resetInputs(formElements);
					showModalThank();
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			alert('Данные не валидны!');
		}
	};

	allSubmitForms.forEach((item) => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();
			submitForm.bind(item)(item);
		});
	});
};

export default sendForm;
