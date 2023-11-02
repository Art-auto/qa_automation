// Callback functions

// function greeting(name) {
//   alert('Hello ' + name);
// }

// function processUserInput(test) {
//   var name = prompt('Please enter your name.');
//   return test(name);
// }

// processUserInput(greeting);

// function greating (name) {
//   alert('Hello ' + name )
// }

// function toCallCallback(param) {
//   let name = prompt('Please enter your name.')
//   return param(name)
// }

// toCallCallback(greating)

// Arrow functions
// func()

// let func = () => {
//   console.log('Hello world', name)  
//   return name
// }

// func()


// it('test', () => {

// })

// Nested functions

// function parentFunction() {
//   function childFunction() {
//     console.log('Hello world')
//   }
//   childFunction()
// }
// let a = 1

// function outerFunction (x) {

//   let b = 2
  
//   function innerFunction(y) {
//     var w = 10
//     console.log('Hello from inner func', y)
//     console.log('a', a)
//     console.log('b', b)
//     console.log('x', x)
//   }
//   console.log(w)
//   innerFunction(x)

// }

// outerFunction(5)
// parentFunction()

// Variable scope of JS Nested Functions

// function addNumbers(a, b) {
//   function showMessage(text) {
//     console.log(text)
//   }

//   let sum = a + b
//   showMessage("sum is " + sum)
// }

// showMessage('20')


// Returning a JS Nested Function (Closures)

// function displayCounter () {
//   let counter = 0
  
//   increment = function () {
    
//     return ++counter
//   }
//   return increment
// }

// let counter = displayCounter()

// console.log(counter())
// console.log(counter())
// console.log(counter())

// Parameters of JS Nested Functions

// function outerFunction(x) {

//   innerFunction = function(y, v, t) {
//     console.log(`${x} + ${y} = ${x+y}`, v, t)

//     innerFinal = function (boss) {
//       console.log('Hello from dno', boss)
//     }
//     return innerFinal
//   }
//   return innerFunction
// }

// let x = outerFunction(4)
// let w = x(5)
// outerFunction(2)(3, 4, 6)('Lesson 5')


// Recursion

// function factorial(n) {
//   if (n === 1) {
//     return 1
//   }
//   console.log(n)
//   return n * factorial(n - 1) 
// }

// console.log(factorial(5))


// let q = 0
// function x (text) {
  
//   console.log(text)
//   q ++ 
//   q > 10 ? return true : x(text)
// }

// x('HEllo')



// JS Built-in functions for String

/**
 * Both `slice()` and `substring()` are JavaScript string methods used to extract a portion of a string. However, there are some differences between them:

1. Parameters: `slice()` takes two parameters: the starting index and the ending index (optional). `substring()` also takes two parameters: the starting index and the ending index. However, if the second parameter is not provided, `substring()` will extract the rest of the string.

2. Negative indexes: `slice()` allows negative indexes, which count from the end of the string. For example, `str.slice(-3)` extracts the last three characters of the string. `substring()` does not allow negative indexes.

3. Mutability: `slice()` returns a new string that is a copy of the original string, with the specified portion extracted. The original string is not modified. `substring()` also returns a new string, but it does not create a copy of the original string. Instead, it extracts the specified portion and returns it as a new string.

Here are some examples to illustrate the differences:

*/

// const ourData = "Hello, world! Test test test.";
// const x = 'Testing concat'
// const numb = 100000054353535
// console.log(numb.toExponential(2))
// console.log(ourData.replace('world', 'lesson 5'))
// Using slice()
// console.log(str.slice()); // "Hello"
// console.log(str.slice(7, 12)); // "Hello"



// console.log(str.slice(-6)); // "world!"
// console.log(str); // "Hello, world!"

// // Using substring()
// console.log(str.substring(0, 5)); // "Hello"
// console.log(str.substring(7)); // "world!"
// console.log(str); // "Hello, world!"


// let x = ['a','s','f'].slice(-1)
// console.log(x)
// JS Regexp Using String Methods

// const str = "The quick brown fox jumps over the lazy dog.";

// // Using search()
// const index = str.search(/brown/i);
// console.log(index); // 10

// const replaced = str.replace(/the/gi, "a");
// console.log(replaced); // "a quick brown fox jumps over a lazy dog."

// const reg = /fox/gi;
// const matchRes = str.match(/fox/gi);
// console.log('match:', matchRes)

// const test = reg.test(str);
// console.log('test:', test)

// const rund = Math.ceil(Math.random() * 10)
// console.log(rund)


// const email = ' this is 5435 my 5435 email : 5435 34 artem@test.com '
// const reg = /[a-z]*@[a-z]*.[a-z]*/

// console.log(email.search(/[a-z]*@[a-z]*.[a-z]*/))
// console.log(email.replace(/[0-9]/g, ''))
// console.log(reg.test(email))


// Dates

// let date = new Date().setFullYear(1990)

// console.log(date)
// console.log(date.toLocaleDateString('en-us'))
// console.log(date.toLocaleString('en-gb', {year: 'numeric', month: 'short', day: 'numeric'}))



// JS Built-in functions for Array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// arr.forEach(element => {
//   console.log(element)
// })

// arr.map(element => {
//   console.log(element)
// })

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial);
// // Expected output: 10

// let i = 11

// do {
//   i++

//   if (i % 2 === 0)  {
//     console.log(i) 
//   } else { 
//     continue
//   }
// } while(i<=10)


// for(let i = 1; i< 10; i*=2) {
//   console.log(i)
// }


// let obj = { x: 2, y: 3, b: 4}

// for(let key in obj) {
//   console.log(obj[key])

// }