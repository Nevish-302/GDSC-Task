const router = require('express').Router()
const { checkAuth } = require('../auth/checkAuth')
const { isAdmin } = require('../auth/isAdmin')
const {user_info, user_info_update, user_suspend} = require('../controllers/user-info')


router.post(`/get`, checkAuth, user_info)

router.post(`/update`,  user_info_update)

router.post(`/admin/suspend`, isAdmin, user_suspend)

module.exports = router