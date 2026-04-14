export function renderCharacters() {
	const page = document.createElement('section');

	const title = document.createElement('h1');
	title.textContent = 'Characters';

	const toHome = document.createElement('a');
	toHome.href = '/';
	toHome.dataset.link = 'true';
	toHome.textContent = 'Back Home';

	page.append(title, toHome);
	return page;
}
