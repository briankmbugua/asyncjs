const promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,500,"in 500 milliseconds")
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,600,"in 600 milliseconds")
})

Promise.race([promise1,promise2]).then((value)=>{
    console.log(value)
})

