/*jshint esversion: 6 */

const autorization = () => {
	const mainForm = document.querySelector('.main-form');

	const nameInput = document.getElementById('name');
	const passwordInput = document.getElementById('type');
	const spans = document.querySelectorAll('.main-form>form>label>span');
	const spanName = spans[0];
	const spanPassword = spans[1];

	const getData = (login, password) => {
		fetch('http://localhost:4550/autorization')
			.then((res) => res.json())
			.then((data) => {
				const userCheck = data[0];
				if (userCheck.login === login && userCheck.password === password) {
					window.location.href = './table.html';
					const user = {
						login: login,
						password: password,
					};
					document.cookie = 'user=' + JSON.stringify(user);
				} else {
					if (userCheck.login !== login) {
						spanName.style.display = 'block';
					}
					if (userCheck.password !== password) {
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
