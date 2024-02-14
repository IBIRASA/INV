const express = require("express");
const mongoose = require("mongoose");
const allRoutes = require("./routes/users.routes");
const uploadRoutes = require("./routes/uploadRoutes");
const financeRoutes = require("./routes/financeRoute");
const stockRoutes = require("./routes/stock.routes");
// const mailiskRoutes = require('./routes/mailiskRoutes');

const requestRoutes = require("./routes/requestRoutes");
const productRoutes = require("./routes/productRoutes");
const reportRoutes = require("./routes/reportRoutes");
const accountRoutes = require("./routes/accountRoutes");
const fileRoutes = require("./routes/fileRoutes");
const cors = require("cors");
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB)
  .then(() => console.log("DB connected Successfully!"))
  .catch((err) => console.log("error!", err));
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome");
});
app.use("/api/v1", allRoutes);
app.use("/api/v1/file", uploadRoutes);
app.use("/api/v1/finance", financeRoutes);
app.use("/api/v1/stock", stockRoutes);
// app.use('/api/v1/mailisk', mailiskRoutes);\

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/report", reportRoutes);
app.use("/api/v1/requests", requestRoutes);

app.use("/api/v1/account", accountRoutes);
app.use("/api/file", fileRoutes);
module.exports = app;
