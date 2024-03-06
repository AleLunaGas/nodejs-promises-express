//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved")
    },6000)})
//promise 2 
let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved ")}, 3000)
    })
//Console log before calling the promise
console.log("Before calling promise");
//Call the promise and wait for it to be resolved and then print a message.
//secuential
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage);
    
  })

myPromise2.then ((successMessage)=> {
    console.log("From Callback2 " + successMessage)
})

//embedded calling

  myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
    myPromise2.then((successMessage) => {
      console.log("From Callback " + successMessage)
    })
  })
//Console log after calling the promise
  console.log("After calling promise");
