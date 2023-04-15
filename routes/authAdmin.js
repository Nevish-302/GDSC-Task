const express = require(`express`)
const router = express.Router()
const {signUpAdmin} = require('../controllers/signup')
const {signIn} = require(`../controllers/signin`)

router.post('/signup', signUpAdmin)

router.post(`/signin`, signIn)

module.exports = router