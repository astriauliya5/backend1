const express = require('express');
const shopController = require('../controllers/shopController');
const shopRoutes = express.Router();

// get all products
shopRoutes.get('/', shopController.getProducts);

// Create a new product
// shopRoutes.post('/', shopController.createProduct);

// // Get a product by ID
// shopRoutes.get('/:productId', shopController.getProductById);

// // Update a product by ID
// shopRoutes.put('/:userId', shopController.updateProductById);

// // Delete a product by ID
// shopRoutes.delete('/:userId', shopController.deleteProductById);

module.exports = { shopRoutes };