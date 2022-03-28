let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };




let is_shop_open = false;

let order = (time,work) => {
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(
                //work is being done here
                resolve(work())
            ,time)
        }else {
            reject(console.log('customer left'))
        }
    })
}

order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
.then(()=>{
    return order(0000,()=>{
        console.log('production has started')
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("the fruit has been chopped")
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`)
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log("the machine has started")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log(`${stocks.toppings[0]} was selected as toppings`)
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log('the ice cream has been served')
    })
})
.catch(()=>{
    console.log("shop is closed")
})
.finally(()=>{
    console.log('end of the day')
})