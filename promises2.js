let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("trying getting data")
        
        resolve("got the data")
    }, 1000)
})

function onfulfilment() {
    console.log('got the data')
}

function onrejection() {
    console.log("did not get the data")
}

promise.then(onfulfilment).catch(onrejection)