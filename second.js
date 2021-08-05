// Problem Solving //

// ===== Swap variable values ===== //

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

//  ====== Who is Bigger ===== //

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

// Task 02 -  Create  a function take 3 person values as  a parameter and return a small number - with Math function

function minValue(student, banker, developer) {
  return Math.min(student, banker, developer);
}
