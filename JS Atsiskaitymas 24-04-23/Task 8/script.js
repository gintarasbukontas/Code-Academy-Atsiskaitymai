/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// ES5 variantas :(
console.log("----- ES5 -----");

function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.sum = function () {
  console.log("Sum = " + (this.num1 + this.num2));
};

Calculator.prototype.subtraction = function () {
  console.log("Subtraction = " + (this.num1 - this.num2));
};

Calculator.prototype.multiplication = function () {
  console.log("Multiplication = " + this.num1 * this.num2);
};

Calculator.prototype.division = function () {
  console.log("Division = " + this.num1 / this.num2);
};

const numbers1 = new Calculator(2, 2);
numbers1.sum();
numbers1.subtraction();
numbers1.multiplication();
numbers1.division();

// ES6 variantas :)
console.log("----- ES6 -----");

class Calculator2 {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sum() {
    console.log(`Sum = ${this.num1 + this.num2}`);
  }
  subtraction() {
    console.log(`Subtraction = ${this.num1 - this.num2}`);
  }
  multiplication() {
    console.log(`Multiplication = ${this.num1 * this.num2}`);
  }
  division() {
    console.log(`Division = ${this.num1 / this.num2}`);
  }
}

const numbers2 = new Calculator2(2, 2);
numbers2.sum();
numbers2.subtraction();
numbers2.multiplication();
numbers2.division();
