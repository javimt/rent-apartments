const jwt = require("jsonwebtoken");
const { User } = require("../../db");

module.exports = {
  authenticateUser: async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//console.log("funciona", decodedToken)
      const user = await User.findByPk(decodedToken.userId);

      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      req.user = user;
      next(); 
    } catch (error) {
      console.error("Token Verification Error:", error.message);
      return res.status(401).json({ error: "Unauthorized" });
    }
  },
};
