/*jshint esversion: 6 */

const autorization = () => {
	const mainForm = document.querySelector('.main-form');

	const nameInput = document.getElementById('name');
	const passwordInput = document.getElementById('type');
	const spans = document.querySelectorAll('.main-form>form>label>span');
	const spanName = spans[0];
	const spanPassword = spans[1];

	const getData = (login, password) => {
		fetch('./db/db.json')
			.then((res) => res.json())
			.then((data) => {
				const array = data.filter((item) => item.type === 'Autorization');
				console.log(array[0]);
				if (array[0].login === login && array[0].password === password) {
					window.location.href = './table.html';
					const user = {
						login: login,
						password: password,
					};
					document.cookie = 'user=' + JSON.stringify(user);
				} else {
					if (array[0].login !== login) {
						spanName.style.display = 'block';
					}
					if (array[0].password !== password) {
						spanPassword.style.display = 'block';
					}
				}
			});
	};

	nameInput.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/, '');
		spanName.style.display = 'none';
	});
	passwordInput.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/, '');
		spanPassword.style.display = 'none';
	});

	mainForm.addEventListener('submit', (e) => {
		e.preventDefault();
		getData(nameInput.value, passwordInput.value);
	});
	spanName.style.display = 'none';
	spanPassword.style.display = 'none';
};

export default autorization;
