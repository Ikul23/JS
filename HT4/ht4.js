//Задание 1
//Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
//0 – это ноль
//1 – нечетное число
//2 – четное число
//3 – нечетное число
//…
//10 – четное число
for (let i = 0; i < 11; i++) {
  if (i === 0) {
    console.log(`${i} – это ноль`);
  } else if (i % 2 === 0) {
    console.log(`${i} – четное число`);
  } else {
    console.log(`${i} – нечетное число`);
  }
}
//Задание 2
//Дан массив [1, 2, 3, 4, 5, 6, 7]
//Сделайте из этого массива следующий [1, 2, 3, 6, 7]

arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3,2);
  console.log(arr);

//  Задание 3
//Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать //массив состоящий из 5 таких элементов
//1. Рассчитать сумму элементов этого массива
//2. Найти минимальное число
//3. Найти есть ли в этом массиве число 3
let newArr = [];

for (let i = 0; i < 5; i++) {
  let randomDigit = Math.floor(Math.random() * 10);
  newArr.push(randomDigit);
}

let sum = 0;
for (let i = 0; i < newArr.length; i++) {
  sum += newArr[i];
}

let minNumber = newArr[0]; 
for (let i = 1; i < newArr.length; i++) {
  if (newArr[i] < minNumber) {
    minNumber = newArr[i];
  }
}


function findNumber(number) {
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === number) {
      return `В массиве ${newArr} есть число ${number}`;
    }
  }
  return `В массиве ${newArr} нет числа ${number}`;
}

console.log("Массив:", newArr);
console.log("Сумма элементов:", sum);
console.log("Минимальное число:", minNumber);
console.log(findNumber(3));
