const title = document.querySelector('.title');
const pEl = document.createElement('p');
const imgEl = document.createElement('img');
pEl.textContent='УРА НОВЫЙ ПАРАГРАФ!';
pEl.setAttribute('class','heading');

title.appendChild(pEl);
title.appendChild(imgEl);

const divEl = document.querySelectorAll('.list');
console.log(divEl.children);
[divEl.ch].forEach(function(item) {
  // body
});

