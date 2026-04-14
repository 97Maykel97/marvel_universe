import logo from '../img/logo.png';

export function createLogo() {
	const headerLogoImg = document.createElement('img');
	headerLogoImg.src = logo;
	headerLogoImg.alt = 'Marvel Logo';

	const headerLogoLink = document.createElement('a');
	headerLogoLink.classList.add('header__logo');
	headerLogoLink.href = '/';

	headerLogoLink.append(headerLogoImg);

	return headerLogoLink;
}
