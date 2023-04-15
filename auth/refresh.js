const verify = require(`jsonwebtoken`)
const user_details = require(`../models/user_details.model`)
const {createAccessToken, createRefreshToken, sendRefreshToken} =  require('./tokens')

//Generate or Refresh the token
const refresh = (req, res) => {
    const token = req.cookies.refreshToken
    if(!token) return res.send(accessToken, ' ')
    let payload = null;
    try {
        payload = verify(token, `process.env.ACCESS_TOKEN_SECRET`)
    }
    catch (err) {
        return res.send(accessToken, ' ')
    }
    const user = user_details.findOne({id : payload.userId});
    if (!user) return res.send(accessToken, ' ')
    if (user.refreshToken !== token)
    return res.send({ accessToken: '' });
    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);
    user_details.findOneAndUpdate({email : username}, {refreshToken : refreshToken})
    sendRefreshToken(res, refreshToken);
    res.send({ accessToken });
}

module.exports = {
    refresh
}