'use strict';
//const hotel = {
//  name: 'Resort Hotel',
//  stars: 5,
//  capacity: 100,
//};

//console.log(hotel.name); // Resort Hotel
//console.log(hotel['name']); // Resort Hotel
//console.log(hotel);

//let user = {
//  name: "John",
//  age: 30
//};

// перебор значений
//for (let value of Object.values(user)) {
//  alert(value); // John, затем 30
//}

//let numberNine = 9;
// let stringNine = "9";

// console.log(numberNine + stringNine);
// console.log("numberNine".length);

// let myName = "Nick";
// console.log(myName[1]);
// console.log(myName.slice(1,3));

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);
// console.log(getWage());//NaN

// const employee = {
//     baseSalary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage() {
//       return this.baseSalary + this.overtime * this.rate;
//     },
//   };
  
//   employee.getWage();
  
//Konstryktor
// const Hotel = function(name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//   };
  
//   // В результате вызова
//   const hotel = new Hotel('Resort Hotel', 5, 100);
//   // Получаем такой объект
//   console.log(hotel);
  // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}
  
  // const Hotel = function(name, stars, capacity) {
  //   this.name = name;
  //   this.stars = stars;
  //   this.capacity = capacity;
  //   this.guestCount = 0;
  
  //   this.greet = function(guestName) {
  //     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
  //   };
  
  //   this.addGuests = function(amount) {
  //     this.guestCount += amount;
  //   };
  
  //   this.removeGuests = function(amount) {
  //     this.guestCount -= amount;
  //   };
  // };
  
  // const hotel = new Hotel('Sunrise Hotel', 5, 100);
  
  // console.log(hotel);
  // // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
  // hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
  // hotel.addGuests(50);
  // hotel.removeGuests(50);
  
// const numbers = [1, 2, 3];

// // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(numbers[i]);
// // }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// Пройдем по всем элементам коллекции и добавим значения свойства tags
// к аккумулятору, начальное значение которого укажем пустым массивом [].
// На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const even = numbers.filter(x => x % 2 === 0);

// const doubled = even.map(x => x * 2);

// const reversed = doubled.reverse();

// console.log(reversed); // [16, 12, 8, 4]

// const heading = document.createElement('h1');
// console.log(heading); // <h1></h1>

// heading.textContent = 'This is a heading';
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement('img');
// image.setAttribute('src', 'https://placeimg.com/640/480/nature');
// image.setAttribute('alt', 'nature');

// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="nature">

const user = {
  name: 'Mango',
  showName() {
    console.log(this);
    // this будет ссылаться на button если использовать showName как callback
    console.log(`My name is: ${this.name}`);
    // тут undefined так как поля name у button нет
  },
};

/*
 * Представим что у нас есть кнопка с классом js-btn
 * Выберем ее и повесим на нее слушатель клика
 */
const btn = document.querySelector('.js-btn');

user.showName(); //работает
//btn.addEventListener('click', user.showName); // не работает
btn.addEventListener('click', user.showName.bind(user)); // работает
