const products1 = require('../models/products1')

//Alternate Search Function
const search1 = async (req, res) => {
    try {
    const name=req.params.value_
    products1.find({breadcrumbs : {'$regex' : `${name}`, '$options' : 'i'}}).then(
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

module.exports = {search1}