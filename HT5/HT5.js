//Задание 1
//Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
}
const arr = Object.values(numbers);
const numbersNew = arr.filter(item => item >= 3);
console.log(numbersNew);

//Задание 2
//Необходимо из объекта, который лежит в константе post вывести значения, к которым //приписан комментарий, в консоль.

const post = {
author: "John", // вывести этот текст
postId: 23,
comments: [
{
userId: 10,
userName: "Alex",
text: "lorem ipsum",
rating: {
likes: 10,
dislikes: 2, // вывести это число
},
},
{
userId: 5, // вывести это число
userName: "Jane",
text: "lorem ipsum 2", // вывести этот текст
rating: {
likes: 3,
dislikes: 1,
},
},
],
};
console.log(post.author); 
console.log(post.comments[0].rating.dislikes); 
console.log(post.comments[1].userId); 
console.log(post.comments[1].text);

//Задание 3
//Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя //метод forEach.

const products = [
{
id: 3,
price: 200,
},
{
id: 4,
price: 900,
},
{
id: 1,
price: 1000,
},
];

products.forEach(product => {
  product.price = product.price * 0.85;
});

console.log(products);

//Задание 4
//1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна //фотография используя метод filter. Исходные данные - массив products.
//2. Необходимо отсортировать массив products используя метод sort по цене, начиная //с самой маленькой, заканчивая самой большой ценой, после чего вывести //отсортированный массив в консоль.

const products1 = [
{
id: 3,
price: 127,
photos: [
"1.jpg",
"2.jpg",
],
},
{
id: 5,
price: 499,
photos: [],
},
{
id: 10,
price: 26,
photos: [
"3.jpg",
],
},
{
id: 8,
price: 78,
},
];

const productsWithPhotos = products1.filter(product => product.photos && product.photos.length > 0);
const sortedProducts = products1.sort((a, b) => a.price - b.price);
console.log(sortedProducts);
console.log(productsWithPhotos);

//**Задание 5**
//Дано 2 массива 
//Вам необходимо объединить 2 этих массива, чтобы значения первого массива были //ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const daysOfWeek = {};

for (let i = 0; i < en.length; i++) {
daysOfWeek[en[i]] = ru[i];
}
console.log(daysOfWeek);

//const arr = [1, 23, 45,-45, 0, 67, 100, 45];
//const arrUp = arr.map(item => item*2); ///применение метода map
//const arrUp = arr.filter(item => item >= 10);///применение метода filter
//const arrUp = arr.reduce((a,b) => a+b)/arr.length; ///применение метода reduce считает среднее арифмитическое


//console.log('Старый массив:' + arr);
//console.log('Новый массив:' + arrUp);

//const user = {
//  name: "Igor",
//  surname: "Kul",
//  patronymic: function enterPatronymic() {
//    this.patronymic = prompt('Введите свое отчество'); 
//  },
//  age: 44  
//}
//delete user.surname;
//user.patronymic();
//console.log(user);
//console.log(`${user.name} - ${user.surname} - ${user.patronymic} - ${user.age}`);
//const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//const arr2 = [1, 2, 3, 4, 5, 6, 7];

//const daysOfWeek = {};

//for (let i = 0; i < arr1.length; i++) {
//  daysOfWeek[arr1[i]] = arr2[i]; // добавление через присвоение значения по ключу //object[key] = value;
//}

//console.log(daysOfWeek);
//const obj = { x: 1, y: 2, z: 3 };
//const arr1 = Object.keys(obj);
//const arr2 = Object.values(obj);
//for (let i = 0; i < arr2.length; i++) {
//  arr2[i] = Math.pow(arr2[i], 2);  
//}
//let newObject = {};
//for (let i = 0; i < arr1.length; i++) {
//  newObject[arr1[i]] = arr2[i];
//}
//console.log(newObject);
