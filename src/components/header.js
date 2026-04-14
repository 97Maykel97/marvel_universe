import { createButton } from './buttons';
import { createNavigation } from './navigation';

const header = document.createElement('header');
header.classList.add('header');
const title = document.createElement('h1');
title.classList.add('header__title');
const subTitle = document.createElement('p');
subTitle.classList.add('header__subtitle');
const nav = createNavigation();

title.textContent = 'Find all your favorite heroes from the "Marvel universe".';
subTitle.textContent =
	'You can know the type of heroes, its strengths, disadvantages and abilities';

const btn = createButton({ text: 'Save', size: 'lg' });
btn.style.marginTop = '50px';
btn.addEventListener('click', () => {
	window.location.href = '/characters';
});

// styles title

const titleStl = {
	fontSize: '40px',
	color: '#fff',
	margin: '290px 0 0',
	maxWidth: '600px',
	lineHeight: '1.5',
	fontWeight: '700',
};

// styles subtitle

const subTitleStl = {
	fontSize: '30px',
	color: '#fff',
	margin: '35px 0 0',
	maxWidth: '800px',
	fontWeight: '700',
	lineHeight: '1.5',
};

Object.assign(title.style, titleStl);
Object.assign(subTitle.style, subTitleStl);

header.append(nav, title, subTitle, btn);

export default header;
