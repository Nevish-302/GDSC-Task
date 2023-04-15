const user_details = require('../models/user_details.model')
const bcrypt = require('bcrypt')
const {createAccessToken, createRefreshToken, sendAccessToken, sendRefreshToken} = require(`../auth/tokens`)
//SignIn function is assuming there are checks for empty fields on the frontEnd


//userSignIn via jsonwebtoken
//signIn for user and admin is same
const signIn = async (req, res) => {
    const {username, password} =  await req.body
    try {
    let user =  await user_details.findOne({email : username})
    if(!user) 
    user = await user_details.findOne({mobileNumber : username})
    if(!user){
    res.send(`User not found`)  
}
    else if(user.status == 0)
    {
        console.log('account suspended')
    res.send('User Account Suspended')
    }
    else {
    console.log(password , username, user.name, user.passHash)
    bcrypt.compare(user.passHash, password, (err) => {
        if(err) {
            res.json({error : err});
        }
        else{
            const accessToken = createAccessToken(user.id)
            const refreshToken = createRefreshToken(user.id)
            console.log(accessToken, refreshToken)
            user_details.findOneAndUpdate({email : username}, {refreshToken : refreshToken})
            
            //A refresh Token is set in cookie
            sendRefreshToken(res, refreshToken)

            //The generated accessToken is sent to user
            sendAccessToken(res, accessToken)
            console.log(`${user.name} has logged in successfully`) 
            }   
    })}
    }
    catch (err) {
        res.send({error : err})
    }
}

module.exports = {
    signIn
}