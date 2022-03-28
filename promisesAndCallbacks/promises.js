const resolvedPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //food truck found
        resolve("bring taccos")
    })
})


const rejectedPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //food truck not found
        reject("Not bringing taccos, food truck not there")
    })
})


const onFulfillment = (result) => {
    //resolve callback
    console.log(result)
    console.log("set up the table to eat taccos")
}

const onRejection = (error) => {
    //rejec callback
    console.log(error)
    console.log("start cooking pasta")
}

resolvedPromise.then(onFulfillment)
rejectedPromise.catch(onRejection)