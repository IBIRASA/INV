const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");
const checkRole = require("./../middlewares/checkRole");
const authenticate = require("./../middlewares/authenticate");

router.post(
  "/balance",
  authenticate,
  checkRole(["finance"]),
  accountController.addBalance
);
router.get(
  "/balance",
  authenticate,
  checkRole(["finance"]),
  accountController.getBalance
);

module.exports = router;
