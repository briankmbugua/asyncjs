let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };




let order = (fruit_name,call_production)=> {
    setTimeout(function(){
        console.log(`${stocks.Fruits[fruit_name]} was selected`)
    }, 2000)
    call_production()
}

let production = () =>{
    setTimeout(()=>{
        console.log('production has started')
        setTimeout(()=>{
            console.log('the fruit has been chopped')
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`)
                setTimeout(()=>{
                    console.log("start the machine")
                    setTimeout(()=>{
                        console.log(`the ${stocks.holder[0]} has been selected as a container`)
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} has been selected as a topping`)
                            setTimeout(()=>{
                                console.log('the ice cream has been served to the customer')
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0000)
}

order(0,production)