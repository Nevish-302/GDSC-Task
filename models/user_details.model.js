const mongoose = require('mongoose')
const {Schema} = mongoose

const personal = new Schema(
    {
        name : {
            type : String,
            required : true,
            minlength : 3,
            trim: true,
        },
        mobileNumber : {
            required : true,   
            type : String,
            length : 10,
        },
        email : {
            unique : true,
            type : String
        },
        passHash : {
            type : String,
            required : true,
        },
        RefreshToken : {
            type : String
        },
        status : {type : Number},
        accessLevel : {type : String},
    }
)


const user_details = mongoose.model('user_details', personal)

module.exports = user_details