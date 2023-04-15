const products = require('../models/products')

//Search Without Filter
const search = async (req, res) => {
    try {
    const {name} = await req.body
    products.find({title : {'$regex' : `${name}`, '$options' : 'i'}}).then(
        product_s => {
            console.log(`some products were found`)
            res.send({items : product_s})
        }
    )
    }
    catch (err)
    {
        console.log(err)
    }
}

//Search With Filter
const searchWithFilter = async (req, res) => {
    try {
        //filter will be an object that looks like this {price: 1, name: -1}
        //the successive property defining how to sort clashing elements of the products if needed
    const {name, filter} = await req.body
    products.find({title : {'$regex' : `${name}`, '$options' : 'i'}}).then(
        product_s => {
            console.log(`some products were found`)
            res.send({items : product_s.sort(filter)})
        }
    )
    }
    catch (err)
    {
        console.log(err)
    }
}

module.exports = {search, searchWithFilter}