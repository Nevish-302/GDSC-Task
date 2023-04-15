const user_details = require('../models/user_details.model')
const {isAuth} = require(`../auth/isAuth`)

const isAdmin = async (req, res, next) => {
    //Admin authentication
    const userId = await isAuth(req) 
    const user = await user_details.findOne({_id : userId})
    console.log('Hello', user)
    if(user.accessLevel == 'admin')
    {
        next()
        //return 'Admin';
    }
    else { res.send(`You Are not an Admin`)}
}

module.exports = {isAdmin}
