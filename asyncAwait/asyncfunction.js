async function greet() {return 'hello'}

console.log(greet())

async function greetTwo() {
    return Promise.resolve('Hello')
}

greetTwo().then((value)=> console.log(value));

