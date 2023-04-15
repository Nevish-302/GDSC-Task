const user_details = require('../models/user_details.model')
const {isAuth} = require(`../auth/isAuth`)
const bcrypt = require('bcrypt')

//Get User Info
const user_info = async (req, res) => {
    const userId = await isAuth(req)
    
    const user = await user_details.findOne({_id: userId}).then((data) => {
        if (!data)  {
            console.log("Request not found");
            res.status(400).json({msg : "Request not found"})
        }
        console.log(data, "hi")
        res.status(200).json(data);    
    })
    
}

//Update User Info
const user_info_update = async (req, res) => {
    const userId = await isAuth(req)
    const {name, mobile, email, password} = await req.body
    const saltrounds = 10
    bcrypt.hash(password, saltrounds, (err, hash) => {
        user_details.findOneAndUpdate({_id: userId}, {name : name, email : email, mobileNumber : mobile, passHash : hash}).then(use => {
            console.log(`${userId} has updated successfully`)
        }).catch(err => {console.log(`unable to update`, err)
    
        res.status(400).json({msg : err})
        })
        
        res.status(200).json({msg : 'user-info updated successfully'})
        }
        );
    
}

//Delete User Info
const user_suspend = async (req, res) => {
    //const userId = isAuth()
    const {userId} = await req.body
    console.log('userId', userId)
    user_details.findOneAndUpdate({_id: userId}, {status : 0}).then(use => {
            console.log(`${userId} has updated successfully`)
            res.status(200).json({msg : 'user has been suspended successfully'})
        }).catch(err => {console.log(`unable to suspend`, err)

        res.status(400).json({msg : err})
        })
        
    
}
module.exports = {user_info, user_info_update, user_suspend}