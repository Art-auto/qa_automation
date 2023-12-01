const array = [1, 2, 3, 4, 5];
const iterator = array[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


function* numberGenerator() {
  
  yield 'test1'

  console.log('inside')
  yield 'test2'
  yield 'test3'

}

const generator = numberGenerator();
// console.log(generator)
console.log(generator.next()); // 1
console.log(generator.next()); // 2
console.log(generator.next()); // 3
console.log(generator.next()); 
console.log(generator.next()); 
console.log(generator.next()); 
console.log(generator.next()); 
console.log(generator.next()); 
// і так далі, генератор може продовжувати генерувати значення нескінченно
