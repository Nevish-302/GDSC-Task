const cartDetails = require(`../models/user_cart_details`)
const {isAuth} = require(`../auth/isAuth`)


//Get Orders
const get_orders = async (req, res) => {
    try {
    const userId = isAuth(req)
    const user_orders = await cartDetails.find({userid : userId})
    if(!user_orders.orders)
    res.send(`There are no orders for this user`)
    res.json({orders : user_orders.orders})}
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

//Add Orders
const add_orders = async (req, res) => {
    try {
        const userId = isAuth(req)
        const {order_s} = await req.body
        for (let i = 0 ; i <  order_s.length; i++)
        {
            cartDetails.findOneAndUpdate(
                {
                    userId : userId,
                },
                {
                    $push: { orders: {productId : order_s[i].id, number : order_s[i].number}}
                }
            )
        }
    }
        catch (err) {
            console.log(err)
            res.send(err)
        }    
}

//Cancel Orders
const cancel_orders = async (req, res) => {
    try {
        const userId = isAuth(req)
        const {order_s} = await req.body
        for (let i = 0 ; i <  order_s.length; i++)
        {
            cartDetails.findOneAndUpdate(
                {
                    userId : userId,
                },
                {
                    $pull: { orders: {productId : order_s[i].id, number : order_s[i].number}}
                }
            )
        }
    }
        catch (err) {
            console.log(err)
            res.send(err)
        }    
}

module.exports = {
    get_orders, add_orders, cancel_orders
}