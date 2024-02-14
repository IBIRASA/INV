// // requestRoutes.js

const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");
const requestController = require("../controllers/RequestController");

// Create a new request
router.post(
  "/create",
  authenticate,
  checkRole("manager"),
  requestController.createRequest
);
router.patch(
  "/:id",
  authenticate,
  checkRole("finance"),
  requestController.approveRequest
);
router.get(
  "/getAll",
  authenticate,
  checkRole(["manager", "finance"]),
  requestController.getAllRequest
);
router.put(
  "/update/:id",
  authenticate,
  checkRole("manager"),
  requestController.updateRequest
);
router.delete(
  "/delete/:id",
  authenticate,
  checkRole("manager"),
  requestController.deleteRequest
);
router.get(
  "/get/:id",
  authenticate,
  checkRole("manager"),
  requestController.getOneRequest
);
module.exports = router;
