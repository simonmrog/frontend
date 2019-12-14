let p1 = new Promise (function (resolve, reject) {
  setTimeout (resolve, 1000, "promise one");
});

let p2 = new Promise (function (resolve, reject) {
  setTimeout (resolve, 2000, "promise two");
});

Promise.all ([p1, p2]).then (function () {
  console.log ("all promises resolved");
});

Promise.race ([p1, p2]).then (function (value) {
  console.log ("Winner: " + value);
})
