import container from '../base/container';
import mainBg from '../img/main-bg.jpg';

//main bg
const app = document.getElementById('app');
if (!app) throw new Error('App root #app not found');

Object.assign(app.style, {
	minHeight: '100vh',
	backgroundImage: `url(${mainBg})`,
	backgroundSize: 'cover',
	backgroundPosition: 'top center',
	backgroundRepeat: 'no-repeat',
});

const title = document.createElement('h1');
title.textContent = 'Home Page';
Object.assign(title.style, {
	color: '#ffffff',
	margin: '0',
	paddingTop: '100px',
	textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
});

container.append(title);
app.append(container);
