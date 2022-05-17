function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('value of convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

function greet(name) {
  var nameGreeting = 'Hey, ' + name;
  return nameGreeting;
}
var greetResult = greet('Tim');
console.log('value of greetResult: ', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var getAreaResult = getArea(17, 42);
console.log('value of getAreaResult: ', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('value of getFirstNameResult: ', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('value of getLastElementResult: ', getLastElementResult);
