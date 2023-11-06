// Object property-descriptors

// let obj = {
//   prop1: 'Hello',
//   prop2: 'World'
// }

// let descriptor = Object.getOwnPropertyDescriptor(obj, 'prop2')
// console.log(descriptor)


// let descriptors = Object.getOwnPropertyDescriptors(obj)
// console.log(descriptors)


let user = {
  name: "Artem",
  age: 20,
  get fullName() {
    return this.name + ' surname'
  }
}


console.log(user.fullName)

// Object.defineProperties(user,  { 'name': {
//   writable: false,
//   configurable: true,
//   enumerable: false
// },
// age: {
//   writable: false,
//   configurable: true,
//   enumerable: false
// }})

// // console.log(Object.getOwnPropertyDescriptor(user, 'name'))
// // console.log(Object.getOwnPropertyDescriptors(user))
// user.name = 'Alex'
// console.log(user.name)

// // delete user.name


// console.log(user)

// console.log(Object.getOwnPropertyDescriptors(user))

// Object.defineProperty(user, 'name', {
//   writable: false,
//   enumerable: false,
//   configurable: false
// })

// console.log(Object.getOwnPropertyDescriptors(user))

// user.name = 'Oleh'
// console.log(user.name)  // Artem

// for(let key in user) {
//   console.log(key)    // age
// }

// delete user.name

// console.log(user.name)  // Artem


// const user = {
//   name: 'Artem',
//   surname: 'Test',
//   age: 20,
//   get fullName () {
//     return this.name + this.surname
//   },
//   set fullName (fullName) {
//     this.name = fullName.name
//     this.surname = fullName.surname
//   }
// }

// // Object.defineProperties(user, {
// //   name: {
// //     writable: false
// //   },
// //   surname: {
// //     writable: false
// //   }
// // })

// user.fullName = {name: 'Hello', surname: 'World'}
// console.log(user)