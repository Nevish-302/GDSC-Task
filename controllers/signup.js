const user_details = require('../models/user_details.model')
const user_cart_details = require(`../models/user_cart_details`)
const bcrypt = require('bcrypt')
//SignUp function is assuming there are checks for empty fields on the frontEnd

//userSignup via jsonwebtoken
//User Signup
const signUp = async (req, res) => {
    const {name, mobile, email, password} = await req.body
    console.log(password)
    const saltrounds = 10
    //bcrypt is used for hashing the passowrds

    bcrypt.hash(password, saltrounds, (err, hash) => {
   //A new user is created with the information
    const user = new user_details({name : name, email : email, mobileNumber : mobile, passHash : hash, status : 1, accessLevel: 'user'})
    user.save().then(use => {
        console.log(`${use} has registered successfully`)
    }).catch(err => {console.log(`unable to register`, err)})
    const {_id} = user_details.findOne({email : email})
    const user_cart = new user_cart_details({userId : _id})
    user_cart.save().then(use => {
        console.log(`${use} has added cart successfully`)
    }).catch(err => {console.log(`unable to register`, err)})
    res.status(200).json(user)
    }
    );
}

//Admin Signup via jsonwebtoken
//Admin Signup
const signUpAdmin = async (req, res) => {
    const {name, mobile, email, password} = await req.body
    console.log(password)
    const saltrounds = 10
    bcrypt.hash(password, saltrounds, (err, hash) => {
    const user = new user_details({name : name, email : email, mobileNumber : mobile, passHash : hash, accessLevel : 'admin', status : 1})
    user.save().then(use => {
        console.log(`${use} has registered successfully`)
    }).catch(err => {console.log(`unable to register`, err)})
    const {_id} = user_details.findOne({email : email})
    const user_cart = new user_cart_details({userId : _id})
    user_cart.save().then(use => {
        console.log(`${use} has added cart successfully`)
    }).catch(err => {console.log(`unable to register`, err)})
    res.status(200).json(user)
    }
    );
}

module.exports = {signUp, signUpAdmin}