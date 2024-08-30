//Задание 1
//Создайте функцию которая возводит переданное число в куб, необходимо вывести в //консоль результат 2^3 степени + 3 ^ 3 степени//

function power() {
  const numberPower = 3;
  const number = Number(prompt(`Введите число, которое нужно возвести в степень ${numberPower} `));
console.log(`${number} ^ ${numberPower} равно ${number ** numberPower}`);
}
power();

//Задание 2
//Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что //значение задано неверно
//Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль //текст "Размер заработной платы за вычетом налогов равен значение"

function textEnter() {
  const userNumber = Number(prompt(`Введите число`));
  if (isNaN(userNumber) || userNumber <= 0) {
    alert('Введите корректное число');
    return true;
  }
  return userNumber;
}

function salary(userSalary) {
  const result = userSalary * 0.87;
  console.log(`Размер заработной платы за вычетом налогов равен ${result}`);
}

let userNumber;
do {
  userNumber = textEnter();
} while (userNumber === true);

salary(userNumber);


//Задание 3
//Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая //определяет максимальное значение среди этих чисел

function textEnterAdvanced() {
  const userNumber1 = Number(prompt('Введите первое число'));
  const userNumber2 = Number(prompt('Введите второе число'));
  const userNumber3 = Number(prompt('Введите третье число'));

  if (isNaN(userNumber1) || isNaN(userNumber2) || isNaN(userNumber3)) {
    alert('Введите правильные числовые значения!');
    return null;
  }
  
  return { userNumber1, userNumber2, userNumber3 };
}

function max(userNumber1, userNumber2, userNumber3) {
  let maxNumber = userNumber1;

  if (userNumber2 > maxNumber) {
    maxNumber = userNumber2;
  }

  if (userNumber3 > maxNumber) {
    maxNumber = userNumber3;
  }

  console.log(`Максимальное значение среди введенных чисел равно ${maxNumber}`);
}

let numbers;
do {
  numbers = textEnterAdvanced();
} while (numbers === null);

max(numbers.userNumber1, numbers.userNumber2, numbers.userNumber3);


//Задание 4
//Необходимо реализовать четыре функции, каждая функция должна принимать по два //числа и выполнять одну из операций (каждая функция выполняет одну из них):
//1. Сложение
//2. Разность
//3. Умножение
//4. Деление
//Необходимо сделать так, чтобы функция вернула число, например выражение console.//log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном //примере, ваши названия функций могут отличаться). Округлять значения, которые //возвращают функции не нужно, однако, обратите внимание на разность, функция //должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. //Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не //нужно.


const a = Number(prompt('Введите первое число'));
const b = Number(prompt('Введите второе число'));

function sum() {
  console.log(`Сумма чисел: ${a+b}`);
}
function dif() {
  a-b >=0 ? console.log(`Разность чисел: ${a-b}`) : console.log(`Разность чисел: ${b-a}`)  
}
function div() {
  if (b === 0 ) {
     console.log(`Результат деления чисел: ${b/a}`)
  } else {
    console.log(`Результат деления чисел: ${a/b}`) 
  }
}
function mult() {
  console.log(`Произведение чисел: ${a*b}`);
}

sum(a,b);
dif(a,b);
mult(a,b);
div(a,b);


//function helloUser() {
  //const userFirstName = String(prompt('Привет, назови свое имя'));
  //const userLastName = String(prompt('Назови свою фамилию'));
  //const userAge = Number(prompt('Назови свой возраст'));

  //return { userFirstName, userLastName, userAge };
//}

//const userData = helloUser();

//const greetUser = (firstName, lastName, age) => {
  //return `Приятно познакомиться, ${firstName} ${lastName}! Тебе ${age} лет.`;
//}

//alert(greetUser(userData.userFirstName, userData.userLastName, userData.userAge));
//console.log(greetUser(userData.userFirstName, userData.userLastName, userData.//userAge));

//const square = () => {
//  const a = Number(prompt('Введите число'));
//  return a * a;
//}

//const result = square();
//alert(`Квадрат введенного числа равен ${result}`);

//const dataReview = () => {
//  const number = Number(prompt('Введите число'));
//  return number >= 0 ? '+++' : '---';
//}

//const result = dataReview();
//alert(result);

//function paramSum(a,b,c) {
//  console.log(a+b+c);
//}
//paramSum(1,2,3);

//let param1 = 1;
//  let param2 = 2;
//  let param3 = 3;

//paramSum(param1,param2,param3);

