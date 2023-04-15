const router = require('express').Router()
const {createProduct, updateProduct, deleteProduct} = require('../controllers/product-man')
const {isAdmin} = require('../auth/isAdmin')

router.post(`/create`, isAdmin, createProduct)

router.post(`/update`, isAdmin, updateProduct)

router.post(`/delete`, isAdmin,  deleteProduct)

module.exports = router