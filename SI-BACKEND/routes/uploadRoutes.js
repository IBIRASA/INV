const express = require("express");
const router = express.Router();
const { uploadFile, addFileUploaded, upload } = require("../controllers/uploadController");
 
router.post("/upload", upload.single("file"), uploadFile);
router.post("/addFile", addFileUploaded);

module.exports = router;