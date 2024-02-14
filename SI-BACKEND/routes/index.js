const express = require('express');
const userRoutes = require('../routes/users.routes.js');
const allRoutes = express.Router();
allRoutes.use('/auth',userRoutes)

module.exports = allRoutes