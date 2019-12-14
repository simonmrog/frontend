var g_earth = 9.8;
var g_mars = 3.7;
var g_jupiter = 24.8;

var mass = parseFloat(prompt("Your mass (kg): "));
var option = parseInt(prompt("Choose your planet:\n1) Earth\n2) Mars\n3) Jupyter"));
var weight, planet;

if (option == 1) {
  weight = mass * g_earth;
  planet = "Earth";
}
else if (option == 2) {
  weight = mass * g_mars;
  planet = "Mars";
}
else if (option == 3) {
  weight = mass * g_jupiter;
  planet = "Jupiter";
}
else
  alert ("Not a valid option!");

weight = weight.toFixed(2);

document.write ("<strong> Your weight in " + planet + " is: </strong>" + weight + " N");
