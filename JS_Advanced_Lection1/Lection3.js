const btnEl = document.querySelector('.button');
  let count = 0;
btnEl.onclick = function name() {

  count++;
console.log('Клик на кнопку');
  console.log(`Количество кликов на кнопку ${count}`)
};
btnEl.addEventListener('click', function (e) {
  console.log('click add')
});