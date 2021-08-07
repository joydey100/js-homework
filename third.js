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

// FooBar

function fooBarFunc(num) {
  var newArr = [];

  for (let i = 1; i <= num; i++) {
    if ((i % 3 == 0) & (i % 5 == 0)) {
      newArr.push(`Foobar`);
    } else if (i % 3 == 0) {
      newArr.push(`Foo`);
    } else if (i % 5 == 0) {
      newArr.push(`Bar`);
    } else {
      newArr.push(i);
    }
  }

  return newArr;
}

// Shopping Cart

let products = [
  { name: "laptop", price: 55000, quantity: 1 },
  { name: "mobile", price: 45000, quantity: 1 },
  { name: "shirt", price: 500, quantity: 6 },
  { name: "pant", price: 300, quantity: 4 },
];

function cartPriceFunc(productsArr) {
  let cartTotal = 0;
  for (let product of productsArr) {
    let total = product.price + product.quantity;
    cartTotal += total;
  }
  return cartTotal;
}
