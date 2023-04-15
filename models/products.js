const {Schema, default: mongoose} = require(`mongoose`)

//This product model is not currently in use
const product = new Schema(
    {
        id : {type : Number}, 
        title : {type : String},
        price : {type : Number}, 
        description : {type : String},
        category : {type : String},
        image : {type : String},
        rating : {
            type : Object,
            rate : {type : Number},
            count : {type : Number}
        }
    }
)

const products = mongoose.model('products', product)

module.exports = products