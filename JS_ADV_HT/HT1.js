//1. Найти по id, используя getElementById, //элемент с id равным "super_link" и //вывести этот элемент в консоль.

const linkEl = document.getElementById('super_link');
console.log(linkEl);

///2. Внутри всех элементов на странице, ///которые имеют класс "card-link", ///поменяйте текст внутри элемента на ///"ссылка".

const cardEl  = document.querySelectorAll('.card-link');
cardEl.forEach(el => {
  el.textContent = 'ссылка';
});

///3. Найти все элементы на странице с ///классом "card-link", которые лежат в ///элементе с классом "card-body" и вывести ///полученную коллекцию в консоль.

const bodyEl = document.querySelectorAll('.card-body .card-link');
console.log(bodyEl);

///4. Найти первый попавшийся элемент на ///странице у которого есть атрибут ///data-number со значением 50 и вывести его ///в консоль.

const dataEl = document.querySelector('[data-number = "50"]');
console.log(dataEl);

//5. Выведите содержимое тега title в //консоль.

console.log(document.title);

//6. Получите элемент с классом //"card-title" и выведите его родительский //узел в консоль.

const cardTEl = document.querySelector('.card-title');
console.log(cardTEl.parentNode);

//7. Создайте тег 'p`, запишите внутри него //текст "Привет" и добавьте созданный тег в //начало элемента, который имеет класс //"card".

const newP = document.createElement('p');
newP.textContent = 'Привет';
const cardNewEl = document.querySelector('.card');
cardNewEl.prepend(newP);

//удалите тег h6 на странице.
const tagDelete = document.querySelector('h6');
tagDelete.remove();