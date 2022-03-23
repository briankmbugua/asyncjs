let stocks = {
    Fruits: ["strawberry","grapes","banana","apple"],
    liquid: ["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}


let is_shop_open = false;
function time(ms) {
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }else{
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen() {
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]}`)
    }
    catch(error){
        console.log("customer left", error)
    }
    finally{
        console.log("day ended shop is closed")
    }
}

kitchen();

