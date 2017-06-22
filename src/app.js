// src/app.js
//import { groupBy } from 'lodash/collection';
import people from './js/people';

import './style/style.scss';
import "./style/actions.scss";
import "./style/cardslides.scss";


//create base div
const app = document.getElementById('app');
app.classList.add("col-xs-12");
app.classList.add("col-sm-4");
app.classList.add("col-sm-offset-4");

//create div with cardslides class
const cSlides = document.createElement('div');
cSlides.setAttribute('id', 'cardslide');
var listUl = document.createElement('ul');

//popolamento carte
for (var i = 0, len = people.length; i < len; i++) {
    var listLi = document.createElement('li');
    listLi.classList.add("pane" + (i + 1));
    //creo primo div
    var dImg = document.createElement('div');
    dImg.className = "img";
    listLi.appendChild(dImg);
    //creo secondo child;
    var dName = document.createElement('div');
    dName.innerText = people[i].name;

    listLi.appendChild(dName);
    //creo terzo child
    var dLike = document.createElement('div');
    dLike.className = "like";
    listLi.appendChild(dLike);
    //creao quarto child
    var dSlike = document.createElement('div');
    dSlike.className = "dislike";
    listLi.appendChild(dSlike);

    listUl.appendChild(listLi);
}

cSlides.appendChild(listUl);

app.appendChild(cSlides);
//document.body.appendChild(app);
//app.innerHTML = `<pre>${people[0].name}</pre>`;