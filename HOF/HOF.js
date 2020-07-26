// Higher-Order Function.
// A Function that accept and/or return another function

// With functions in JavaScript, you can Use them in arrays
//=> Example

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const operation = [add, subtract, multiply, divide];

operation[0](5, 5); //=> result = 10

for (let i of operation) {
  let result = i(30, 10);
  console.log(result);
  //=> result =
  //            40
  //            20
  //            300
  //            3
}

// Also can Assign them as object properties (methods)

const obj = {
  doMultiply: multiply,
};

console.log(obj.doMultiply(2, 5)); //=> result = 10

/////////////////////////////
// Functions As Arguments //
///////////////////////////

function callTwice(f) {
  f();
  f();
  f();
}

function callMe() {
  console.log("Hossam");
}

// Another Example, Pass function and number of calls this function
function callNTimes(f, num) {
  for (let i = 0; i < num; i++) {
    f();
  }
}

function callMeAgain() {
  console.log("Hossam");
}

callNTimes(callMeAgain, 10);

// Another Example

function catchOne(f1, f2) {
  let random = Math.floor(Math.random() * 7);
  if (random > 3) f1();
  else f2();
}

function f1() {
  console.log("Function One");
}

function f2() {
  console.log("Function Two");
}

console.log(catchOne(f1, f2));

/////////////////////////////////
// Functions As Return Values //
//////////////////////////////

function someFun() {
  return function () {
    console.log("LOOOL");
  };
}

const lol = someFun();
console.log(lol); //=> result = LOOOL

// Another Example
function multiplyBy(num) {
  return function (n) {
    return n * num;
  };
}

const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);
const multiplyByFour = multiplyBy(4);
const multiplyByHalve = multiplyBy(0.5);

console.log(multiplyByTwo(10)); //=> result 20
console.log(multiplyByThree(10)); //=> result 30
console.log(multiplyByFour(10)); //=> result 40
console.log(multiplyByHalve(10)); //=> result 5

// Another Example
function isBetween(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = isBetween(0, 18);
if (isChild(15)) console.log("Sorry, you can't make this");
else console.log("welcome!");
