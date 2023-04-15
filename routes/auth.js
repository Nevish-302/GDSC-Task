const express = require(`express`)
const router = express.Router()
const {signUp} = require('../controllers/signup')
const {signIn} = require(`../controllers/signin`)

router.post('/signup', signUp)

router.post(`/signin`, signIn)

module.exports = router