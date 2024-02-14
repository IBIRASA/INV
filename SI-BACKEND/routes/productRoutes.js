const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
const authenticate = require("../middlewares/authenticate");
const checkUserRole = require("../middlewares/checkRole");

// Create a new request
router.post(
  "/create",
  authenticate,
  checkUserRole("manager"),
  productController.createProduct
);

// Get all requests
router.get(
  "/getAll",
  authenticate,
  checkUserRole("manager"),
  productController.getAllProducts
);

// Get a specific request by ID
router.get(
  "/get/:id",
  authenticate,
  checkUserRole("manager"),
  productController.getOneProduct
);

// Update a request by ID (approve or deny)
router.put(
  "/update/:id",
  authenticate,
  checkUserRole("manager"),
  productController.updateProduct
);

// Delete a request by ID
router.delete(
  "/remove/:id",
  authenticate,
  checkUserRole("manager"),
  productController.deleteProduct
);

module.exports = router;
