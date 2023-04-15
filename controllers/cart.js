const cartDetails = require(`../models/user_cart_details`)
const {isAuth} = require(`../auth/isAuth`)

//Get CartItems
const getItems = async (req, res) => {
    try {
        //The current User's Id
    const userId = isAuth(req)
    const user_orders = await cartDetails.find({userid : userId})
    if(!user_orders.cart)
    res.send(`There are no orders for this user`)
    else
    res.json({orders : user_orders.cart})}
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

//Add Items to Cart
const addItems = async (req, res) => {
    try {
        const userId = await isAuth(req)

        //Assuming an array of items is passed to backend
        const {item_s} = await req.body
        console.log(item_s, userId)
        for (let i = 0 ; i <  item_s.length; i++)
        {
            cartDetails.findOneAndUpdate(
                {
                    userId : userId,
                },
                {
                    $push: { cart: {productId : item_s[i].id, number : item_s[i].number}}
                }
            )
            console.log(item_s[i])
        }
        console.log(`The item has been added successfully`)
        res.send(`Success`)
    }
        catch (err) {
            console.log(err)
            res.send(err)
        }    
}

//Removing Cart Items
const removeItems = async (req, res) => {
    try {
        const userId = isAuth(req)
        
        //Assuming an array of items is passed to backend
        const {item_s} = await req.body
        for (let i = 0 ; i <  item_s.length; i++)
        {
            cartDetails.findOneAndUpdate(
                {
                    userId : userId,
                },
                {
                    $pull: { cart: {productId : item_s[i].id, number : item_s[i].number}}
                }
            )
        }
        console.log(`The item has been removed successfully`)
    }
        catch (err) {
            console.log(err)
            res.send(err)
        }    
}

module.exports = {
    getItems, addItems, removeItems
}