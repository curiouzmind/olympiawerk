/*
MAIN JS
*/

var numbers = [1,3,12,5,23,18,7];
console.log(numbers.sort());
var numSort = function (a,b) {
  return a-b;
}
console.log(numbers.sort(numSort));
