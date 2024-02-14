const dotenv = require("dotenv");
const morgan = require("morgan");

require("dotenv").config();

const app = require("./app");

app.use(morgan("dev"));
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log("app running on port", PORT);
});
