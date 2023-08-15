const { Auth0User } = require("../../db");

module.exports = {
  getAuth0Users: async (req, res) => {
    try {
      const users = await Auth0User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createAuth0User: async (req, res) => {
    const {
      sub,
      given_name,
      family_name,
      nickname,
      name,
      picture,
    } = req.body;

    try {
      const existingUser = await Auth0User.findOne({ where: { sub } });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      const newUser = await Auth0User.create({
        sub,
        given_name,
        family_name,
        nickname,
        name,
        picture,
      });
      res.status(201).json({ message: "User created successfully", newUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
