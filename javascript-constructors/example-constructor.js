function ExampleConstructor() {
  console.log('value of ExampleConstructor.prototype: ', ExampleConstructor.prototype);
  console.log('typeof ExampleConstructor.prototype: ', ExampleConstructor.prototype);
}

var newEx = new ExampleConstructor();
console.log('value of newEx: ', newEx);
console.log('value of newEx instanceof ExampleConstructor: ', newEx instanceof ExampleConstructor);
