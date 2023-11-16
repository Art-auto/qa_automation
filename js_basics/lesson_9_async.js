import {default as fetch} from 'node-fetch'


// let promise = new Promise((resolve, rejecte) => {
//   if(true) {
//     resolve('Re') 
//   } else {
//     rejecte() 
//   }
// })

// console.log(promise)

// let promise = new Promise((res, reject)=>{
//   if (true) {
//     // res('Resolve')
//   } else {
//     // reject('it failed') 
//   }
// })

// console.log(promise)


// let fn = (arg) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(arg>5) {
//         resolve('Resolved')
//       } else {
//         reject('Rejected')
//       }
//     }, 2000)

//   }) 
// }

// fn(1)
//   .then(result => console.log(result))
//   .then(result => console.log(result))
//   .then(result => console.log(result))
//   .catch(err => console.log('catch'))
//   .finally(() => {
//     console.log('test')
//   })

// console.log('test')


// fn(1).then(result => console.log(result), err => console.log(err))





// const request = (url) => {
//   return new Promise((ress, rej) => {
//     fetch(url).then((res) => {
//       if (res.status === 201) {
//         ress(res)
//       } else {
//         rej('Error')
//       }
//     })
//   })
// }

// request('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => console.log(res), err => console.log(err))




// Promise.race([
//   fetch('https://jsonplaceholder.typicode.com/posts/10').then(res => res.json()),
//   fetch('https://jsonplaceholder.typicode.com/posts/5').then(res => res.json())
// ])
//   .then(results => {
//     console.log(results)
//   })


//   Promise.all([
//     fetch('https://jsonplaceholder.typicode.com/posts/2').then(res=> res.json()),
//     fetch('https://jsonplaceholder.typicode.com/posts/4').then(res=> res.json())
//   ]).then(results => {
//     console.log(results)
//   })


// async function getPosts() {
//   return 1
// }

// let value = await getPosts()

// console.log(value)

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('It is done'), 5000)
//   })

//   // let result = await promise
  
//   console.log('string to show queue')
//   // console.log(result)
//   return await promise
// }

// // let test = await f()

// console.log(test)


  // async function getPosts(url) {
  //   try {
  //     const response = new Promise((resolve, reject) => {
  //       resolve('Success')
  //     })
  //     // const results = response.json()
  //     return response
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     console.log('End here')
  //   }
  // }

  // const posts = await getPosts('https://jsonplaceholder.typicode.comm/posts/4')
  // console.log(posts)


