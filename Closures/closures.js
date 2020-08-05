// => Lexical Scoping
// Lexical Scoping is also known as static scoping

function greetCustomer() {
  var customerName = 'Ahmed';

  function greetingMsg() {
    console.log('Hi! ' + customerName); // Hi! Ahmed
  }
  greetingMsg();
}

// There is also dynamic scoping, which some programming languages support
// Let’s look at some examples:

function greetingMsg() {
  console.log(customerName); // ReferenceError: customerName is not defined
}

function anotherGreetCustomer() {
  var customerName = 'Ahmed';
  greetingMsg();
}
// it will give a reference error.
// This is because both functions don’t have access to each other’s scope,.
// as they are defined separately
// anotherGreetCustomer();

// another example:
// function addNumbers(num1) {
//   console.log(num1 + num2);
// }

// function addNumbersGenerate() {
//   var num2 = 10;
//   addNumbers(num2);
// }

/*
    The above output will be 20 for a dynamically scoped language.
    Languages that support lexical scoping will give referenceError: number2 is not defined. Why?
    Because in dynamic scoping, searching takes place in the local function first,
    then it goes into the function that called that local function.
    Then it searches in the function that called that function, and so on, up the call stack.
    Its name is self explanatory – “dynamic” means change.
    The scope and value of variable can be different as it depends on from where the function is called.
    The meaning of a variable can change at runtime.
*/
addNumbersGenerate();

/*
    Got the gist of dynamic scoping? If yes, then just remember that lexical scoping is its opposite.
    In lexical scoping, searching takes place in the local function first,
    then it goes into the function inside which that function is defined.
    Then it searches in the function inside which that function is defined and so on.
    So, lexical or static scoping means the scope and value of a variable is determined from where it is defined.
    It doesn’t change.
*/

// Let’s again look at the above example and try to figure out the output on your own.
var number2 = 2;
function addNumbers(number1) {
  console.log(number1 + number2);
}

function addNumbersGenerate() {
  var number2 = 10;
  addNumbers(number2);
}

/*
    it’s 12 for lexically scoped languages.
    This is because first,
    it looks into an addNumbers function (innermost scope) then it searches inwards,
    where this function is defined. As it gets the number2 variable, meaning the output is 12.
*/
addNumbersGenerate();

//-
//-
//-
//-
//-
//-

// What is a Closure?
/*
    Closure is created when an inner function has access to its outer function variables and arguments.
    The inner function has access to 
    {
        1. Its own variables.
        2. Outer function's variables and arguments.
        3. Global variables.
    }
*/

// Let’s again look at its other definition that will tell you how closures are different.
/*
    Closure is when a function is able to access its lexical scope,
    even when that function is executing outside its lexical scope.

        Or =>

    Inner functions can access its parent scope,
    even after the parent function is already executed.
*/

// example:
// function greetCustomer() {
//   const customerName = "Ahmed";
//   function greetingMsg() {
//     console.log("Hi! " + customerName);
//   }
//   return greetingMsg;
// }

// const callGreetCustomer = greetCustomer();
// callGreetCustomer(); // output – Hi! Ahmed

// Examples of closures in action
function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const countValue = counter();
countValue(); // 0
countValue(); // 1
countValue(); // 2

//  Let’s look at another example:
function counterB() {
  let count = 0;
  return function () {
    return count++;
  };
}

const countValue1 = counterB();
const countValue2 = counterB();
countValue1(); // 0
countValue1(); // 1
countValue2(); // 0
countValue2(); // 1

// Another Example

//exercise:
function callMeMaybe() {
  const callMe = 'Hi!';
  setTimeout(function () {
    console.log(callMe);
  }, 4000);
}

// callMeMaybe();

// Another exercise

function heavyDuty(item) {
  const bigArray = new Array(7000).fill('😄');
  console.log('created!');
  return bigArray[item];
}

heavyDuty(699);
heavyDuty(699);
heavyDuty(699);
heavyDuty(699);

// Try To Solve This Problem

function heavyDuty2() {
  const bigArray = new Array(7000).fill('😄');
  console.log('created!!!!');
  return function (item) {
    console.log(bigArray[item]);
  };
}

const aHeavyDuty = heavyDuty2();

aHeavyDuty(700);
