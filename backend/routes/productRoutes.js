const express = require('express')
const router = express.Router()

const { getAllProducts, getProductById } = require('../controller/productController')

//@desc GET all Products from db
//Route GET /api/products
//@access Public
router.get('/', getAllProducts)

//@desc GET all Products by id from db
//Route GET /api/products/:id
//@access Public
router.get('/:id', getProductById)

module.exports = router