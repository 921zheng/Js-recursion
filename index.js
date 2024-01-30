function identity(x) {
  return x;
}
function identityF(x) {
  // The inner function has access to the variables in the parent function
  return function () {
    return x;
  };
}
// const test = identityF(7);
// console.log(test());
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function increment(num) {
  return add(num, 1);
}
function addF(num1) {
  //outer function
  // const randomNum = 1;
  // function addF(3)
  // const add3 = addF(3)
  function addFunc(num2) {
    // inner function
    //     add3   ( 4  )
    return num1 + num2;
  }
  return addFunc;
}
console.log(addF(100)); // logs a function
const addF100 = addF(100); // storing the value of the fuction and keeps it
console.log(addF100(3)); // gets the stored value(100) and adds the argument (3) passed
function curry(func, num1) {
  // function curry(multiply, 30)
  //const timesByThirty = curry(multiply, 30)
  function curryFunc(num2) {
    //    timesByThirty(6)
    return func(num1, num2);
    //return multiply (30,6)
  }
  return curryFunc;
}
// const multiplyByThirty = curry(multiply, 30);
// multiplyByThirty(6);
function liftF(func) {
  //liftF     (add)
  // const addF = lift(add)
  return function innerFunc(num1) {
    //                addLift(1)
    return function innnerInnerFunc(num2) {
      //                     addLift(6)
      return func(num1, num2);
    };
  };
}
function once(func) {
  return function (num1) {
    return function (num2) {
      return func(num1, num2);
    };
  };
}
// Write a function twice that takes a binary function and returns a unary function (a function that takes one argument) that passes its argument to the binary function twice.
// const double = twice(add);
// const result = double(11);
// console.log(result); // 22
// const square = twice(multiply);
// const result = square(11);
// console.log(result); // 121
function twice(binaryFunc) {
  //     twice   (add);
  //const double = twice(add)
  return function unaryFunc(num) {
    //     double          (11)
    return binaryFunc(num, num);
    //      add       11 +  11 = 22
    //    multiply    11 +  11 = 121
  };
}
//Write a function composeU that takes two unary functions and returns a unary function that calls them both, in argument order.
//const double = (a) => a * 2;
// const square = (a) => a ** 2;
// composeU(double, square)(5); // 100
// composeU(square, double)(5); // 50
function composeU(unaryFunc1, unaryFunc2) {
  return function mainUnaryFunc(num) {
    return unaryFunc2(unaryFunc1(num));
  };
}
function composeB() {}

function limit() {}

function from() {}

function to() {}

function fromTo() {}

function element() {}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};
