var max_number = 100

for (var i = 1; i <= max_number; i++) {

  var flag = false;

  if (i % 3 == 0) {
    document.write ("Fizz");
    flag = true;
  }
  if (i % 5 == 0) {
    document.write ("Buzz");
    flag = true;
  }

  if (!flag)
    document.write (i);

  document.write ("<br />");
}
