//different ways of writting a function

function sum (x, y) {
  return (x + y);
}

var sum_function = function (x, y) {
  return (x + y);
}

//arrow functions
var sum_function2 = (x, y) => {
  return (x + y);
}

var sum_function3 = (x, y) => (x + y);

console.log (sum (2, 3));
console.log (sum_function (2, 3));
console.log (sum_function2 (2, 3));
console.log (sum_function3 (2, 3));
