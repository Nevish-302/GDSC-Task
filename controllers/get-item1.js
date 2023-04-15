const products1 = require(`../models/products1`)

//Get Items via id
const get_item1 = async (req, res) => {
    try  {
        const {itemId} = await req.body
        products1.findOne({_id : itemId}).then(
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



module.exports = {get_item1}