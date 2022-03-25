const doSoemthingAsync = () => {
    return new Promise(resolve => {
        setTimeout(()=> resolve('I did something'))
    })
}

const doSoemthing = async() => {
    console.log(await doSoemthingAsync())
}

console.log('before')
doSoemthing()
console.log('after')