const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../../db");

module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });
//console.log(user)
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
//console.log("Generated JWT:", token);
      res.status(200).json(token);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};