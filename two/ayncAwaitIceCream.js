let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };


let is_shop_open = true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        } else {
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen() {
    try{

        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)
        await time(000)
        console.log("fruit chopped")
        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
        await time(1000)
        console.log('the machine was started')
        await time(2000)
        console.log(`${stocks.holder[0]} was selected as the container`)
        await time(3000)
        console.log(`${stocks.toppings[0]} was selected as the toppings`)
        await time(2000)
        console.log(`serve ice cream`)

    } catch(error) {
        console.log('customer left',error)
    }
    finally{
        console.log("day ended customer left")
    }
}

kitchen()