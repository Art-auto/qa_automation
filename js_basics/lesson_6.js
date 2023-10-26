// Arrays

// let arr = new Array()
// let arr2 = []

// // const newArr = [1, true, 'text', 
// //   function (){console.log('Test func in array')}, 
// //   ['a','b'], {test: 'string', hello: 'Hello'}
// // ]

// const newArr = [1, true, 'text']

// newArr[3]()
// console.log(newArr[4][0])
// console.log(newArr)
// console.log(newArr[5]['hello'])
// console.log(newArr.length);

// newArr[10] = 'new element'

// console.log(newArr.length);



// console.log(newArr.push('Hello')) // додати елемент в кінець
// console.log(newArr);
// const lastElement = (newArr.pop())         // видалити елемент з кінця
// console.log(lastElement);
// console.log(newArr);
// newArr.unshift('lesson_6')     // додати елемент на початку 
// newArr.shift()       // видалити елемент з початку 
// console.log(newArr);

// let demoArr = new Array(1,24,45)
// console.log(demoArr);

// let matrix = [
//   [1,2,3],
//   [2,3,4]
// ]

// let matrix2 = [
//   [1,2,3],
//   [2,3,4]
// ]

// console.log(matrix[0][0]);

// console.log(matrix == matrix2);

// JS Built-in functions for Array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, undefined]

// arr[20] = 'test'

// arr.forEach((x, y, c) => {
  // console.log('element: ', x)
  
  // if (y === 8) {
  //   console.log('index:', y)
    // console.log(c)
  // }
  // console.log('array: ', array)
// })


// Reduce 
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 2;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator * currentValue, initialValue);

// console.log(sumWithInitial);
// Expected output: 10


// let x = {
//   ['fds','fdsfsd']: 'test'
// }
// console.log(x)


// let obj = {'test':'test'}
// // Map
// let newMap = new Map()

// newMap.set(obj, 100)
// newMap.set('test', 100)
// newMap.set(2, 200)

// for(let item of newMap.keys()) {
//   console.log(item);
// }


// for(let value of newMap.values()) {
//   console.log(value);
// }

// for(let item of newMap.entries()) {
//   console.log(item[0])
//   console.log(item[1])
// }

// console.log(newMap.get(obj))
// console.log(newMap.has(obj))
// console.log(newMap.delete(obj))
// console.log(newMap.size)
// console.log(newMap.clear())
// console.log(newMap)


// Set


// let setNew = new Set(['test1', 'test2', 'test3'])

// setNew.add('str')
// setNew.add('432')
// setNew.add('fdsf')
// setNew.add('Artem')
// setNew.add('Artem')

// console.log(setNew);

// setNew.forEach((item, index, set)=> {
//   console.log('this is item: ', item);
//   console.log('this is index: ', index);
//   console.log(set);
// })

// console.log(setNew.keys())
// console.log(setNew.values())
// console.log(setNew.entries())

// for(let item of setNew) {
//   console.log(item);
// }

// JS Objects

// let user = {}
// let user2 = new Object()

// let car = {
//   'a': 'test',
//   'b': true,
//   arr: [1,2,3,4],
//   destination: 'Kyiv',
//   drive: function (){
//     console.log('Lets go! ' + this.destination)
//   }
// }

// car.size = 'Big'
// console.log(car)
// car.drive()
// console.log(car.destination);

// let user3 = {
//   a: 'str',
//   b: 100,
//   c: [1,2,3],
//   d: {
//     property1: 'hello',
//     property2: 'world'
//   },
//   e: function () {
//     console.log('Hello from object' + this.a)
//   },
// }

// function Car (manufacturer, destination, year, owner) {
//   this.manufacturer = manufacturer
//   this.destination = destination
//   this.year = year
//   this.owner = owner
// }

// function User (name, age) {
//   this.name = name
//   this.age = age
// }

// function UserWitObg (params) {
//   this.name = params.name
//   this.age = params.age
// }

// let user = new User('Artem',18)

// let wife = new UserWitObg({
//   name: 'Olha',
//   age: 17
// })


// let myCar = new Car('Mercedes', 'Mykolaiv', 2000, wife)
// let myRacingCar = new Car('Redbull', 'London', 2020, user)

// console.log(myRacingCar.owner.name)
// console.log(myCar.owner.name)



// function Car(make, model, year) {
//   this.make = make
//   this.model = model
//   this.year = year
// }

// let myCar = new Car('Mercedes', 's500', 2000)

// console.log(myCar.make)
// console.log(myCar.model)

// function Person(name, age, gender){
//   this.name = name
//   this.age = age
//   this.gender = gender
// }

// function Car(make, model, year, owner) {
//   this.make = make
//   this.model = model
//   this.year = year
//   this.owner = owner
// }


// let user = {
//   name: 'Artem',
//   role: 'teacher',
//   'lesson number': 6
// }

// // user.hasCar = true

// // delete user.name

// console.log(user['name']);


// function transformIntoObj(name,age) {
//   let obj = {
//     name,
//     age
//   }
//   return obj
// }

// let car = 'Subaru'

// let myCar = {
//   car
// }
// console.log('version' in myCar);
// console.log('car' in myCar);
// console.log(transformIntoObj('artem', 20))


// let test = {
//   a:'a',
//   b: 123,
//   c: [1,2,3],
// }

// for(let key in test) {
//   console.log(test[key]);
// }

// console.log(test.greeting);

// function greeting(){
//   console.log('Hello ')
// }

// test.greeting = greeting

// test.greeting()

// console.log(test);



// let test = Object.create({value1: 'foo', value2: 'bar'})