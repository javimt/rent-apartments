const { User } = require("../../db");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await User.findAll();
      res.status(200).json(allUsers);
    } catch (error) { 
      res.status(500).send({ error: error.message });
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const isAdmin = user.role === "admin";
      if (isAdmin) {
        return res.status(200).json({ isAdmin: true, redirectUrl: `user/${user.id}/admin` });
      } else {
        return res.status(200).json({ isAdmin: false });
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  postUser: async (req, res) => {
    const {name, lastName, email, role, image} = req.body;
    try {
      let user = await User.findOne({ where: { email } });
      if (user) {
        return res.status(400).json({ error: "Email already exists" });
      } 
      user = await User.create({email, name, lastName, image, role});
  //console.log("este es el usuario creado", user)
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  checkAdminStatus: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      if (user.role === "admin") {
        res.status(200).json({ isAdmin: true });
      } else {
        res.status(200).json({ isAdmin: false });
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  assignAdminRole: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      user.role = "admin";
      await user.save();
      res.status(200).send({ message: "User role updated to admin" });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  putUser: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      const updateUser = await user.update(req.body);
      res.status(200).json({ message: "User updated succesfully", updateUser });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      await user.destroy();
      res.status(200).send({ message: "User deleted" });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },
};
