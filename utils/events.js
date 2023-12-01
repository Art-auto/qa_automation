import EventEmitter from 'events'

// Створюємо новий об'єкт EventEmitter
const myEmitter = new EventEmitter();

myEmitter.setMaxListeners(2)

// Додаємо обробник події 'myEvent'
myEmitter.on('lesson_10', () => {
  console.log('Подія відбулася!')
});

function listener  () {
  console.log('the listener triggered')
}


myEmitter.addListener('test', listener);

let test = 'Test Hello'

console.log(test)


myEmitter.emit('test')


myEmitter.removeListener('test', listener)

myEmitter.emit('test')

myEmitter.setMaxListeners(5)

myEmitter.on('test', () => {
  console.log('test');
});

myEmitter.on('test', () => {
  console.log('test2');
});

myEmitter.on('test', () => {
  console.log('test3');
});

// Генеруємо подію 'myEvent'
myEmitter.emit('lesson_10');


myEmitter.emit('test');
myEmitter.emit('test');
myEmitter.emit('test');
myEmitter.emit('test');
myEmitter.emit('new');


let error = new Error('Test')
console.log(error.name)
console.log(error.message)


try {
  throw {name: 'test', message: 'mess'}
  
} catch (err) {
  console.log(err.name)
  console.log(err.message)
}


try {

  myUser

} catch (error) {
  console.log(error)
  // console.log(err.name)
  // console.log(err.message)
  // console.log(err.stack)
  // console.log('Call dev')
}