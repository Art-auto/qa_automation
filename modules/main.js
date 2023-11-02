// main.js
import { getDate, version } from './my-utils.js'

const testFunction = () => console.log('Im the main function')

document.getElementById('isAlive').addEventListener('click', () => getDate())
document.getElementById('isRolling').addEventListener('click', () => console.log(version))

testFunction()
