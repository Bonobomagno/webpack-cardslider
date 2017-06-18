// src/app.js
import { groupBy } from 'lodash/collection';
import people from './js/people';
import './style/style.scss';
import codeURL from './img/code.png';

const img = document.createElement('img');
img.src = codeURL;
img.style.backgroundColor = "#2B3A42";
img.style.padding = "20px";
img.width = 32;
document.body.appendChild(img);

const managerGroups = groupBy(people, 'manager');

const rot = document.createElement('div');
rot.setAttribute("id", "rot");
document.body.appendChild(rot);
rot.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`;