const express = require('express');
const { check } = require('express-validator');

const productControllers = require('../controllers/products-controllers');

const router = express.Router();

//GET ALL PRODUCTS
router.get('/', [], productControllers.getAllProducts);
//GET SINGLE PRODUCT
router.get('/:uid', [], productControllers.getProductById);
//ADD PRODUCT
router.post('/', [], productControllers.createProduct);
//UPDATE PRODUCT
router.patch('/:uid', [], productControllers.updateProduct);
//DELETE PRODUCT
router.delete('/:uid', [], productControllers.deleteProduct);

module.exports = router;
