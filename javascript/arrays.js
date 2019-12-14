const evenNumbers = (number) => (number % 2 == 0);
const multipliedNumber = (number) => (2 * number);

function createArray (N) {

  var array = Array (N);
  for (var i=0; i < N; i++)
    array[i] = parseInt (Math.random () * 100);

  return (array);
}

var N = 10;
var array = createArray (N);
//filters the array based on a function
var filteredArray = array.filter (evenNumbers);
//transforms the array based on a function
var mappedArray = array.map (multipliedNumber);
