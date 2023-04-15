const { verify } = require('jsonwebtoken');

//Returns the userId of the current User
const isAuth = async (req) => {
    const token = await req.cookies.refreshToken
    const tokens = await req.cookies
    console.log(tokens)
    if(!token) throw new Error (`You Need To Log In`)
    const {userId} = await verify(token, `process.env.ACCESS_TOKEN_SECRET`)
    console.log(userId)
    return userId;
};

module.exports = {
    isAuth
}