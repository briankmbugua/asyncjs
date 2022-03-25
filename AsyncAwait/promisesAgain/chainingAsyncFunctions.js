const promiseToDoSomething = ()=>{
    return new Promise(resolve => {
        setTimeout(() => resolve('i did something'))
    })
}

const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething()
    return something + '\nand i watched'
}
const watchOverSomeoneWatchingSomeoneDoingSomething = async ()=>{
    const something = await watchOverSomeoneDoingSomething()
    return something + '\nand i watched as well'
}
watchOverSomeoneWatchingSomeoneDoingSomething().then(value => console.log(value))

