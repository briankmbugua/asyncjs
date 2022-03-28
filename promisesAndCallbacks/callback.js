function greet(name) {
    console.log(`Hello ${name}`);
}

function greetBrian(greetfn) {
    const name = 'brian'
    greetfn(name)
}

greetBrian(greet);
