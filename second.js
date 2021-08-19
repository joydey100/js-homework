/* ******************************
====== Problem Solving ======
********************************/

// ===== 1. Swap variable values ===== //

// 1st Procedure --> extra variable

let first = 10;
let second = 20;

let temp = first;
first = second;
second = temp;

// console.log(first, second); [Output will be 20, 10 ]

// 2nd Procedure --> with Array exchange

let one = 10;
let two = 20;

[one, two] = [two, one];

// console.log(one, two); [Output will be 20, 10 ]

//  ====== 2. Who is Bigger ===== //

// Task 01 -  Create  a function take 3 person values as  a parameter and return a large number - with if/ else condition

function getLargeValue(businessman, minister, army) {
  if (businessman > minister && businessman > army) {
    return `Businessman has so many money`;
  } else if (minister > businessman && minister > army) {
    return `Minister has so many money`;
  } else {
    return `Army has so many money`;
  }
}

console.log(getLargeValue(140, 740, 545));

// Task 02 -  Create  a function take 3 person values as  a parameter and return a small number - with Math function

function minValue(student, banker, developer) {
  return Math.min(student, banker, developer);
}

//  ====== 3. Sum of all the Array Number ====== //

let arrNumber = [40, 8, 87, 45, 95, 75, 25, 41];
let total = 0;

for (let i = 0; i < arrNumber.length; i++) {
  total += arrNumber[i];
}

// With a Function

let arrNumber2 = [40, 8, 87, 45, 95, 75, 25, 41];
let total2 = 0;

function arrNumbersSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    total2 += arr[i];
  }
  return total2;
}

//  ====== 4. Largest/Smallest number from array ===== //

// 4.1 - Largest Number

function arrayLargest(arr) {
  let largest = arr[0];

  /*   var largest =  arr[0] deyar karon holo - jodi kono negative value deya hoy array te tokhon value dekhabe 0; tai eta theke bachar jonno first element ke initially dhore nibo. Good Practice to get large or small number from an array */

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value > largest) {
      largest = value;
    }
  }
  return largest;
}

//  4.2 - Smallest Number from an Array

function smallArrayfunc(arr) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let arrElement = arr[i];
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
  }
  return smallest;
}

// Fibonacci just practice one
