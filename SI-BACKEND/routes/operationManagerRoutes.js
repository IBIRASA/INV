// operationManagerRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('./ProductController');
const requestController = require('./RequestController');

// Operation Manager's Product CRUD routes
router.use('/operation-manager/products', productController);

// Operation Manager's Request CRUD routes
// router.use('/operation-manager/requests', requestController);

module.exports = router;
