/*jshint esversion: 6 */

const table = () => {
	const getCookie = (name) => {
		var matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	};

	// getCookie('user');

	if (!getCookie('user')) {
		window.location.href = './index.html';
	}
};

export default table;
