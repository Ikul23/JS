//1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", function () {
  console.log("все теги прогрузились");
});

//2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener("load", function () {
  console.log("страница загрузилась");
});

//3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
//- Класс "super_element" присутствует в элементе "div".
//- сообщение должно определять присутствует или отсутствует класс "super_element"
//- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
//- которому был совершен клик.
//- Необходимо использовать делегирование.

document.addEventListener("click", function (event) {
  // Получаем кликнутый элемент
  const clickedElement = event.target;
  
  // Проверяем, содержит ли элемент класс "super_element"
  const hasSuperElementClass = clickedElement.classList.contains("super_element");
  
  // Определяем имя тега в нижнем регистре
  const tagName = clickedElement.tagName.toLowerCase();
  
  // Выводим сообщение в зависимости от наличия класса
  if (hasSuperElementClass) {
    console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
  } else {
    console.log(`Класс "super_element" отсутствует в элементе "${tagName}".`);
  }
});

//4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textarea = document.querySelector("textarea");

// Добавляем обработчик события mouseover для вывода сообщения в консоль
textarea.addEventListener("mouseover", function () {
  console.log("Вы навели на textarea.");
});

//5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

// Находим элемент ul
const ulElement = document.querySelector("ul");

// Добавляем обработчик события click на ul
ulElement.addEventListener("click", function (event) {
  // Проверяем, был ли клик по кнопке
  if (event.target.tagName.toLowerCase() === "button") {
    // Выводим текст кнопки в консоль
    console.log(event.target.textContent);
  }
});

//7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const listItems = document.querySelectorAll("li");

// Проходим по каждому второму элементу li
listItems.forEach((item, index) => {
  // Проверяем, если индекс элемента четный (каждый второй элемент)
  if ((index + 1) % 2 === 0) {
    item.style.backgroundColor = "#f0f0f0"; // Задаем нужный цвет фона
  }
});