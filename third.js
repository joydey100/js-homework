/* Problem solving 2 */

// Remove duplicate elements from an array

let numbersArr = [44, 85, 78, 95, 78, 17, 55, 44, 35, 44];

function removeArrayFunc(arr) {
  let uniqueArr = [];

  for (let element of numbersArr) {
    if (uniqueArr.indexOf(element) == -1) {
      uniqueArr.push(element);
    }
  }

  return uniqueArr;
}

// Reverse a string

let stringName = "Joy Dey";

function reverseText(txt) {
  let reverse = "";
  for (let char of stringName) {
    reverse = char + reverse;
  }
  return reverse;
}

