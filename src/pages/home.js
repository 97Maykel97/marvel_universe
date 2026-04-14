import container from '../base/container';
import header from '../components/header';
import { mainBgStl } from '../components/mainBg';

const app = document.getElementById('app');
Object.assign(app.style, mainBgStl);

container.append(header);
app.append(container);
