const promise1 = Promise.resolve(2);
const promise2 = 2;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(reject, 1000, 'fooo')
});


Promise.allSettled([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
})