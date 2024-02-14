const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

router.post('/upload', fileController.upload.single('file'), fileController.uploadAndSaveFile);

module.exports = router;