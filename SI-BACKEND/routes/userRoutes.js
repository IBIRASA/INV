const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authorize = require('../middleware/authorize');
router.post('/createUser', userController.createUser);
router.post('/login', userController.login);
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getAllUsers', authorize('Boss'), userController.getAllUsers);
module.exports = router;
