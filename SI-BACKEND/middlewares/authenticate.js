const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (token) {
      const decoded = jwt.verify(token, "SECRET");
      req.user = decoded;
      return next();
    } else {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = authenticate;
