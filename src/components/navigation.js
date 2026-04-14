import { createLogo } from './logo';

export function createNavigation() {
	// Обертка навигации.
	// Navigation wrapper.
	const headerNav = document.createElement('nav');
	headerNav.classList.add('header__nav');

	// Список пунктов меню.
	// Menu list container.
	const headerList = document.createElement('ul');
	headerList.classList.add('header__list');

	// styles Navigation
	const headerListStl = {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: '24px',
		listStyle: 'none',
		margin: '0',
		paddingTop: '100px',
	};

	Object.assign(headerList.style, headerListStl);

	// Первый пункт это лого.
	// First item is the logo.
	const logoItem = document.createElement('li');
	logoItem.classList.add('header__item', 'header__item--logo');
	logoItem.append(createLogo());
	headerList.append(logoItem);

	// Данные ссылок меню.
	// Navigation link data.
	const navItems = [
		{ text: 'Home', href: '/' },
		{ text: 'Characters', href: '/characters' },
	];

	// Создаем li и a из данных.
	// Build li and a from data.
	navItems.forEach(({ text, href }) => {
		const item = document.createElement('li');
		item.classList.add('header__item');

		const link = document.createElement('a');
		link.classList.add('header__link');
		link.textContent = text;
		link.href = href;

		item.append(link);
		headerList.append(item);

		// styles item
		const navItemsStl = {
			color: '#fff',
			fontSize: '30px',
			textDecoration: 'none',
			fontWeight: 800,
		};

		Object.assign(link.style, navItemsStl);
	});

	// Итоговая структура навигации.
	// Final navigation structure.
	headerNav.append(headerList);
	return headerNav;
}
