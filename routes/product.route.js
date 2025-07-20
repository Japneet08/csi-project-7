const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const verifyToken = require('../middleware/auth.middleware'); // <-- fix here

router.post('/', verifyToken, productController.createProduct);
router.get('/', verifyToken, productController.getProducts);
router.get('/:id', verifyToken, productController.getProductById);
router.put('/:id', verifyToken, productController.updateProduct);
router.delete('/:id', verifyToken, productController.deleteProduct);

module.exports = router;