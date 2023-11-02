// експортуємо данні
export var color = 'red'
export let version = 10
export const lessons = [1,2,3,4,5,6,7,8]



// експортуємо функцію
export function getDate() {

  
  return console.log(new Date().toDateString())
}

// експортуємо клас
export class User {
  constructor(name, age){
    this.name = name
    this.age = age
  }
}

// це приватна функція модулю
function test (value1, value2) {
  console.log(value1 === value2)
}

// визначаємо функцію
function sum(a,b) {
  return a+b
}

const salary = 1000

// експортуємо пізніше
export { sum as default ,salary}