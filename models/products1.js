const {Schema, default: mongoose} = require(`mongoose`)

//This product model based an ebay products dataset
const product1 = new Schema(
    {
        _id:{type:String},
        name :{type : String},
        url : {type : String},
        in_stock : {type : String},
        price : {type : String},
        brand :{type : String},
        mpn : {type : String},
        gtin13 : {type : Number},
        currency : {type : String},
        breadcrumbs : {type : String},
        images : {type : String},
        epid : {type : Number},
        raw_product_description : {type : String},
        product_descrition :{type : String},
        source  : {type : String},
    }
)

const products1 = mongoose.model('products1', product1)

module.exports = products1