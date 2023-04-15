const { verify } = require('jsonwebtoken');

//User login verification
const checkAuth = async (req, res, next) => {
    //refreshToken verification
    const token = await req.cookies.refreshToken
    const tokens = await req.cookies
    console.log(tokens)
    if(!token) throw new Error (`You Need To Log In`)
    const {userId} = await verify(token, `process.env.ACCESS_TOKEN_SECRET`)
    console.log(userId)
    //return userId;
    next()
};

module.exports = {
    checkAuth
}