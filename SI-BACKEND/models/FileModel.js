const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  path: String,
  created_at: { type: Date, default: Date.now() },
});

const FileModel = mongoose.model("File", fileSchema);

module.exports = FileModel;

