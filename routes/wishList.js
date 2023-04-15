const express = require(`express`)
const router = express.Router()
const {getItems, addItems, removeItems} = require(`../controllers/wish-list`)
const { checkAuth } = require("../auth/checkAuth")

router.post(`/get`, checkAuth, getItems)

router.post(`/add`, checkAuth, addItems)

router.post(`/cancel`, checkAuth, removeItems)

module.exports = router