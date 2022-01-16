const sendForm = () => {
	const feedbackForm = document.querySelectorAll('.feedback__form');
	const feedbackBlockForm = document.querySelectorAll('.feedback-block__form');
	// console.log('~ feedbackBlockForm', feedbackBlockForm);

	const body = {
		name: 'Max',
		surname: 'Popov',
		phone: '30-57-56',
	};

	const sendData = (body) => {
		fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
	};

	[...feedbackForm, ...feedbackBlockForm].forEach((item) => {
		// console.log(item);
		item.addEventListener('submit', (e) => {
			e.preventDefault();
			sendData(body)
				.then((response) => {
					if (response.status !== 200) {
						throw new Error('Что то пошло не так');
					}
				})
				.catch((error) => {
					console.log(error);
				});
		});
	});
};

export default sendForm;
