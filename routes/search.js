const express = require(`express`)
const router = express.Router()
const {get_item} = require(`../controllers/get-item`)
const {search, searchWithFilter} = require(`../controllers/search`)
const {get_item1} = require(`../controllers/get-item1`)
const {search1} = require(`../controllers/search1`)

router.get(`/item`, get_item)

router.get('/q', search)

router.get('/qf', searchWithFilter)

router.get(`/item1`, get_item1)

router.get('/q1/:value_', search1)

module.exports = router