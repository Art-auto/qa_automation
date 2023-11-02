// // Classes

// class Test {

// }

class User {
    test = true
    constructor(name, isStudent){
        this.name = name
        this.isStudent = isStudent
    }
}

// class Person extends User {
//     constructor(name, isStudent, salary){
//         super(name, isStudent)
//         this.salary = salary
//         this.constructor.isHuman
//         Person.isHuman
//     }


//     static isHuman = true


//     static comparePersons(person1, person2) {
//         return true
//     }

//     log() {
//         console.log('log:', this.test)
//     }
// }




// let myPerson = new Person('Test', true, 1000)
// console.log(myPerson.log())
// console.log(myPerson.log)

// class MyCustomArray extends Array {


//     constructor(){
//         super()
//     }


//     log() {
//         console.log('Hello from array')
//     }
// }


// let arr = new MyCustomArray()

// arr.log()
// let myUser = new User('Artem', false)
// console.log(myUser.name)
// console.log(myUser.isStudent)

// let student = new User('Alex', true)

// console.log(student.name)
// console.log(student.isStudent)

















// // Зазвичай класи створюються в окремому файлі і потім експортуються далі по програмі


// // Class expression

// // анонімний клас
// let MyRectangle = class {
//   constructor(height, width){
//     this.height = height
//     this.width = width
//   }
// }

// let myRec = new MyRectangle(2,4)

// console.log(myRec.height);
// console.log(myRec.width);


// // клас має імʼя
// let MyNewRectangle = class Rectangle {
//   constructor(height, width){
//     this.height = height
//     this.width = width
//   }
// }


// // екземпляр класу
// const myUser = new User()



// // Наслідування

// class RectangleActions extends MyNewRectangle {
//   constructor(height, width, name){
//     super(height, width)
//     this.name = name
//   }

//   getPerimeter(){
//     return (this.height + this.width) * 2
//   }

//   getName() {
//     return this.name
//   }
// }

// let myActions = new RectangleActions(10,20)
// console.log(myActions.getPerimeter());
// console.log(myActions);


// розширення без super() не спрацює
// class Test extends Array {
//   constructor(){}
// }

// let x = new Test()
// console.log(x);


// static methods 
// не розширюють функціонал обʼєкту, а розширюють прототип

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static displayName = "Dot";
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
// p1.displayName; //undefined
// p1.distance; //undefined
// p2.displayName; //undefined
// p2.distance; //undefined

// console.log(Point.displayName); // "Dot"
// console.log(Point.distance(p1, p2)); // 7.0710678118654755

// public fields

// class Person {
//     #salary = 1000

//     name = 'Artem'

//     #log(){
//         console.log('hello from log')
//     }

//     publicLog() {
//         this.#log()
//     }
// }


// let newPerson = new Person()
// console.log(newPerson.name)
// newPerson.publicLog()

// console.log(newPerson.#log())


// private fields

// class TestPrivate {
//   static log = 'this is log in parent'
//   #privatVal = 'string in private value'

//   #privateMethod () {
//     return 'this is private method'
//   }

//   log(){
//     return this.#privatVal
//   }
//   logPrivateMethod () {
//     return this.#privateMethod()
//   }
// }

// let myObj = new TestPrivate()
// // console.log(myObj.#privatVal)
// console.log(myObj.log())
// console.log(myObj.logPrivateMethod())





// class Person extends User {
//   #name
//   constructor() {
//     super()
//   }
  
// }

// let user = new Person('Artem')

// console.log(user.name)

// user.name = 'Peter'

// console.log(user.name)


// user.name = 'User new'

// console.log(user.name);


// OOP

// class Human {
//     constructor(name) {
//       this.name = name;
//     }
  
//     say() {
//       return `Hello, my name is ${this.name}, I like traveling`;
//     }
//   }
  
//   class Coder extends Human {
//     constructor(name) {
//       super(name)
//     }
  
//     say() {
//       return `Hello, my name is ${this.name}, I like coding`;
//     }
//   }
  
//   const alex = new Men('Alex');
//   const leo = new Coder('Leo');
  
// console.log(alex.say()) // "Hello, my name is Alex, I like traveling"
// console.log(leo.say()) // "Hello, my name is Leo, I like coding"
  
