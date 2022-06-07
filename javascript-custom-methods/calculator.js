/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var sum = 0;
    for (var numIndex = 0; numIndex < numbers.length; numIndex++) {
      sum += numbers[numIndex];
    }
    return sum;
  },
  getAverage: function (numbers) {
    return this.sumAll(numbers) / numbers.length;
  }
};
