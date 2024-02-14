const express = require("express");
const userRoutes = express.Router();
const userControllers = require("../controllers/userAuthController");
const authenticate = require("../middlewares/authenticate");
const checkUserRole = require("../middlewares/checkRole.js");

userRoutes.post("/signup", userControllers.signUp);
userRoutes.post("/addUser", userControllers.addUser);
userRoutes.post("/signin", userControllers.login);
userRoutes.post("/reset", userControllers.resetPassword);
userRoutes.get(
  "/users",
  authenticate,
  checkUserRole("admin"),
  userControllers.getUsers
);
userRoutes.delete("/delete", authenticate,
checkUserRole("admin"), userControllers.deleteUser);

module.exports = userRoutes;
