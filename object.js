const obj = {
  name: "karim",
  age: 25,
  money: 5000,

  treat: function (expense) {
    console.log(this.money - expense);
  },
};

const another = {
  name: "abdul",
  age: 20,
  money: 1000,
};

let anotherTreat = obj.treat.bind(another);
anotherTreat(100);

// anotherTreat(100);

// obj.treat.call(another, 400);

// obj.treat.apply(another, [100]);
