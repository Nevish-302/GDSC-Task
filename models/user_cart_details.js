const mongoose = require('mongoose')
const {Schema} = mongoose

//For orders, wishlist and Cart
const cart = new Schema(
    {
        userId : {type : String},
        orders : [{
            productId : {type : String},
            number : {type : Number}
        }],
        wishList : [{
            productId : {type : String}
        }],
        cart : [{
            productId : {type : String},
            number : {type : Number},
        }]
    }
)


const cartDetails = mongoose.model('cartDetails', cart)

module.exports = cartDetails