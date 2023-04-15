const express = require(`express`)
const router = express.Router()
const {get_orders, add_orders, cancel_orders} = require(`../controllers/orders`)
const { checkAuth } = require("../auth/checkAuth")

router.post(`/get`, checkAuth, get_orders)

router.post(`/add`, checkAuth, add_orders)

router.post(`/cancel`, checkAuth, cancel_orders)

module.exports = router