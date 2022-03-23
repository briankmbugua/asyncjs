// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// setTimeout(greet, 2000, 'brian');


// function sayHi() {
//     console.log("hi")
// }

// const timeoutId = setTimeout(greet, 2000)
// clearTimeout(timeoutId)
// //hi is not logged in the console since its been cleared by the clearTimeout method

// setInterval(greet, 2000, 'brian') //greet will be called every two seconds

// const intervalId = setInterval(greet, 2000)

// clearInterval(intervalId) //nothing will be logged to the console

setTimeout(function run(){
    console.log("hello")
    setTimeout(run,1000)
},1000)

