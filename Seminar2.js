const blockEl = document.querySelector('.block');
const itemEl = document.createElement('div'); // создаем элемент 
itemEl.classList.add('item');
itemEl.style.color = 'blue';
itemEl.style.border = '1px solid black';
itemEl.style.backgroundColor = '#f8f8f8';
itemEl.style.padding = '16px';
itemEl.textContent = 'text';
itemEl.setAttribute('class', 'item_1');
blockEl.appendChild(itemEl);

