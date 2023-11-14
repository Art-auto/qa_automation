import fs from 'fs/promises'
import path from 'path'

async function readDataFromFile() {
  try {
    const filePath = path.join('files', 'example.txt')
    const data = await fs.readFile(filePath, 'utf-8')
    console.log('Зміст файлу: ', data)
  } catch (err) {
    console.error('Помилка зчитування: ', err)
  }
}

async function writeDataToFile(data) {
  const dataToWrite = data ? data : 'Це текст, який буде записаний у файл.'

  try {
    const filePath = path.join('files', 'example.txt')
    await fs.writeFile(filePath, dataToWrite)
    console.log('Данні записано')
  } catch (err) {
    console.log('Помилка запису: ', err)
  }
}

await readDataFromFile()
await writeDataToFile('Hello from lesson 11')

await readDataFromFile()

// function test () {
//   try {
//     return 1
//   } catch {

//   } finally {
//     console.log('Hello')
//   }
// }
// console.log(test())



