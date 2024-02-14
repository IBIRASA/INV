const checkUserRole = (requiredRoles) => (req, res, next) => {
  try {
    if (req.user && requiredRoles.includes(req.user.role)) {
      return next();
    } else {
      return res
        .status(403)
        .json({ message: "Forbidden - Insufficient privileges" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = checkUserRole;
