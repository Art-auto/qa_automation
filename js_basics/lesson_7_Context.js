
// JS Context

// function test() {
//   console.log(this)
// }

// test()

// test = 20
// console.log(test);
// function strictFunction() {
//   "use strict"
//   console.log(this)
// }

// strictFunction()


// let person = {
//   first: 'Andrii',
//   last: 'Test',
//   fullName: function () {
//     console.log(this);
//   }
// }
// person.fullName()


// let person2 = {
//   first: 'Andrii',
//   last: 'Test',
//   fullName: function () {
//     console.log(this);
//   }
// }
// person2.fullName()

// let user = {
//   first: 'Andrii',
//   last: 'Test',
//   fullName: function () {
//     console.log(this.first + ' ' + this.last);
//   },
//   userTwo: {
//     first: 'Ivan',
//     last: 'Yarema',
//     fullName:  () => {
//       console.log(this);
//     }
//   }
// }

// user.fullName()
// user.userTwo.fullName()


// Неявна втрата контексту

// let user = {
//   firstName: "Іван",
//   sayHi() {
//     console.log(`Привіт, ${this.firstName}!`);
//   }
// };

// setTimeout(user.sayHi, 1000); // Привіт, undefined!

// function Car (make, model) {
//   this.make = make
//   this.model = model
// }

// let myCar = new Car('Ford', 'Escape')
// let myCar2 = new Car('test', 'hello')
// console.log(myCar)
// console.log(myCar2)


// function add(c,d) {
//   console.log(this.a + this.b + c + d);
// }

// let test = (c,d) => {
//   console.log(this);
// }

// test();
// let obj = {
//   a: 1,
//   b: 2,
//   sum: add
// }
// // obj.sum(3,4)

// let newObj = {
//   a: 2,
//   b: 10
// }
// let addWithContext = add.bind(newObj, 2,5)


// addWithContext(3,4)
// addWithContext(3,10)

// add(3,4)
// let myObj = {
//   a: 1,
//   b: 2
// }

// add.call(myObj, 3,4)
// add.apply(myObj, [3,4])

// let small = {
//   a: 1,
//   go: function (b,c,d) {
//     console.log(this.a + b+ c+ d);
//   }
// }

// let large = {
//   a: 100
// }

// small.go(2,3,4)               // 1 + 2 + 3 + 4 
// small.go.call(large, 2,3,4)  // 100 + 2 + 3 + 4 
// let bindLarge = small.go.bind(large, 2)

// bindLarge(3,4)  // 100 + 2 + 3 + 4 



// function Counter () {
//   this.num = 0
//   this.timer = setInterval(function add () {
//     this.num++
//     console.log(this)
//   }, 1000)
// }
// let b = new Counter()

// function Counter2 () {
//   this.num = 0
//   this.timer = setInterval(() => {
//     this.num++
//     console.log(this)
//   }, 1000)
// }
// let c = new Counter2()


// define a function
// const myFunction = () => {
//   console.log(this);
// };

// call it
// myFunction();

// const myObject = {
//   myArrowFunction: null,
//   myMethod: function () {
//     this.myArrowFunction = () => { console.log(this) };
//   }
// };

// myObject.myMethod() // this === myObject

// myObject.myArrowFunction() // this === myObject

// const myArrowFunction = myObject.myArrowFunction;
// myArrowFunction() // this === myObject


// let x = {
//   a: 1,
//   b: [3,5,6]
// }

// console.log(x.toJSON());