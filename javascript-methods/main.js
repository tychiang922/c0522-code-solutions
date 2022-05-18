var one = 1;
var two = 2;
var three = 3;
var maximumValue = Math.max(one, two, three);
console.log('value of maximumValue: ', maximumValue);
var heroes = ['Cpt America', 'IronMan', 'Thor', 'Spiderman'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero: ', randomHero);

var library = [
  {
    title: 'Harry Potter and the Sorcerers Stone',
    author: 'J.K. Rowling'
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Harry Potter and the Prisoner of Azhkaban',
    author: 'J.K. Rowling'
  }
];
var lastBook = library.pop();
console.log('value of lastBook: ', lastBook);

var firstBook = library.shift();
console.log('value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library: ', library);

var fullName = 'Tim Chiang';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);
