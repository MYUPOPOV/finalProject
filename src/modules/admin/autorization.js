/*jshint esversion: 6 */

const autorization = () => {
	const mainForm = document.querySelector('.main-form');

	const nameInput = document.getElementById('name');
	const passwordInput = document.getElementById('type');
	const spans = document.querySelectorAll('.main-form>form>label>span');
	const spanName = spans[0];
	const spanPassword = spans[1];

	spanName.style.display = 'none';
	spanPassword.style.display = 'none';

	nameInput.addEventListener('input', () => {
		spanName.style.display = 'block';
	});

	passwordInput.addEventListener('input', () => {
		spanPassword.style.display = 'block';
	});

	mainForm.addEventListener('submit', (e) => {
		e.preventDefault();
		console.log('submit');
	});
};

export default autorization;
