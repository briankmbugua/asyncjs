function topings_choice() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('which toppings would you like'))
        },3000)
    })
}

async function kitchen() {

  console.log("A")
  console.log("B")
  console.log("C")

  await topings_choice()


  console.log("D")
  console.log("E")
}

kitchen()

console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")