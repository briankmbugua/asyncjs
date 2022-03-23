async function greet() {
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('hello'),1000)
    });

    let result = await promise;

    console.log(result);
}

greet()