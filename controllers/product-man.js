const products1 = require(`../models/products1`)

//Add Product
const createProduct = async (req, res) => {
    //The product object is flexible based on the description items may or may not be omitted
    const {product} = await req.body
    const Product = new products_1(product)
    Product.save().then(use => {
        console.log(`${use} has been added successfully`)
    }).catch(err => {console.log(`unable to add`, err)})
    
    res.status(200).json({msg: 'Product added successfully'})
}

//Product Updation
const updateProduct = async (req, res) => {
    try  {
        //Item id is need for product updation or deletion
        const {itemId} = await req.body
            //The product object is flexible based on the description items may or may not be omitted
        const {product} = await req.body
        products1.findOneAndUpdate({_id : itemId}, product).then(
            product =>  {
            console.log(product, 'has been updated')
            res.send('product updated')
        })    
    }
    catch (err) {
        console.log(err)
        res.send(err)
    } 
} 

//Product Deletion
const deleteProduct = async (req, res) => {
    try  {
        //Item id is need for product updation or deletion
        const {itemId} = await req.body
        
        products1.findOneAndDelete({_id : itemId}).then(
            product =>  {
            console.log(product, 'has been deleted')
            res.send('product deleted')
        })    
    }
    catch (err) {
        console.log(err)
        res.send(err)
    } 
} 

module.exports = {createProduct, updateProduct, deleteProduct}