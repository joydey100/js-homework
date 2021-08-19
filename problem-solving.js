/* ১) মনে করো  একটা Array  ভিতরে এলিমেন্ট হিসেবে object থাকবে। তোমার কাজ হচ্ছে একটা ফাংশন লেখা যে ফাংশনের কাজ হচ্ছে কোন একটা Array কে সে ইনপুট হিসেবে নিবে সেই Array ভিতরে object থাকলে সেই objectের প্রপার্টি ও ভ্যালুকে এক্সেস করে তা array আকারে পাঠাবে।  */

const persons = [
  {
    name: "programming",
    id: "100",
  },
  {
    name: "Hacking",
    id: "200",
  },
  {
    name: "toto company",
    id: "500",
  },
];

function getPropertyValue(arr) {
  let myArr = [];
  if (Array.isArray(arr)) {
    for (let item of arr) {
      for (let property in item) {
        let myItem = `${property} : ${item[property]}`;
        myArr.push(myItem);
      }
    }
  }

  return myArr;
}

/*  ২)  মনে করো তুমি একটা ই-কমার্স ওয়েব সাইট বানাইছো। তোমার কাছে প্রডাক্টগুলো আছে  সেই প্রোডাক্টের ইনফরমেশনগুলো (যেমনঃ প্রোডাক্টের নাম,  প্রোডাক্টের আইডি এবং স্টকে কি পরিমাণে প্রোডাক্ট আছে ) ডাটাবেজে object আকারে সেভ করে রেখেছ।

এখন তোমার কাজ হচ্ছে তুমি একটা ফাংশন লিখবা যেই ফাংশনের কাজ হচ্ছে সে ইনপুট আকারে প্রোডাক্টের নাম দিবে এবং সে ঐ object থেকে যে প্রোডাক্টের নাম ইনপুট হিসেবে নিয়েছে তা বাদে বাকিগুলো Array আকারে রিটার্ন করবে। 
*/

var products = [
  {
    productName: "Laptop",
    productId: 1,
    stock: 100,
  },
  {
    productName: "Microphone",
    productId: 2,
    stock: 200,
  },
  {
    productName: "Monitor",
    productId: 3,
    stock: 400,
  },
];

function anotherProduct(myProduct) {
  let myArr = [];
  for (let info of products) {
    if (info.productName.toLowerCase() == myProduct.toLowerCase()) {
      continue;
    } else {
      myArr.push(info);
    }
  }
  return myArr;
}

// javascript book search

let jsBook = [
  "Eloquent Javascript",
  "Javascript and Jquery",
  "Object orientation",
  "habluder jonno programming",
  "goriber raja",
  "A smarter way to learn Javascript",
  "kapil sharma show",
];

function myJsBook(search) {
  let myArr = [];
  for (let book of jsBook) {
    if (book.includes(search)) {
      myArr.push(book);
    }
  }
  return myArr;
}

console.log(myJsBook("Javascript"));

// number sorting

let numbers = [14, 58, 7, 98, -4, 65, 66, 2, 50, 4, 24, 54];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);
