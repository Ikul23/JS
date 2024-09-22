
const heading = document.querySelector('.title');
heading.textContent = 'Первый текст в js';

const list = document.querySelectorAll('.list');
list[1].remove();

const buttonElement = document.querySelector('.btn')
const contentElement = document.querySelector('.content')
const imageElement = document.querySelector('.img');


const textElement = document.createElement('p');
textElement.textContent = 'Создан новый параграф в JS'
imageElement.onclick = function () {
  imageElement.src = 'newPhoto.jpg';
}
buttonElement.onclick = function (){
  buttonElement.textContent = 'Товар в корзине';
  contentElement.appendChild(textElement);
}
const dogId = Symbol ('super dog');
console.log(dogId.description);
let id = Symbol('dogId')
let buddy = {
  [id]: 'жучка'
}
console.log(buddy[id]);

let str = 'Igor Kuleshov';
function removeLetters(str, removeLetters) {
  result = '';
  iterator = str[Symbol.iterator]();
  for (const char of iterator) {
    if (!removeLetters.includes(char)) {
      result += char;
    }
  }
  return result;
}
let strFiltred = removeLetters(str,['j','o','v']);
console.log(strFiltred);
