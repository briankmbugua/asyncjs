let done = false;

const isItDoneYet = new Promise((resolve,reject)=> {
    if(done) {
        const workDone = 'Here is something i built'
        resolve(workDone)
    } else {
        const why = "Stil working on something else"
        reject(why)
    }
}).then(ok =>{
    console.log(ok)
}).catch(err=> {
    console.error(err)
})


// const checkIfItsDone = () => {
//     isItDoneYet.then(ok => {
//         console.log(ok)
//     }).catch(err=>{
//         console.error(err)
//     })
// }
// checkIfItsDone()