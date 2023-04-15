const products = require(`../models/products`)

//Get Items via id
const get_item = async (req, res) => {
    try  {
        const {itemId} = await req.body
        products.findOne({id : itemId}).then(
            product =>  {
            console.log(product)
            res.send(product)
        })    
    }
    catch (err) {
        console.log(err)
        res.send(err)
    } 
}

module.exports = {get_item}