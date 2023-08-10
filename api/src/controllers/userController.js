const { User } = require("../../db");
const bcrypt = require('bcrypt');

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
    const {id} = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  postUser: async (req, res) => {
    const {
      full_name,
      email,
      password,
      status,
      is_admin,
      image,
      address,
      phone,
      city,
      country,
    } = req.body;
    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const users = await User.create({
        
          email,
          full_name,
          password: hashedPassword,
          is_admin,
          status,
          image,
          address,
          phone,
          country,
          city,
        
      });
 //console.log(users)
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  putUser: async (req, res) => {
    const {id} = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      const updateUser = await user.update(req.body);
      res.status(200).json({message: "User updated succesfully", updateUser});
    } catch (error) {
      res.status(500).send({error: error.message});
    }
  },

  deleteUser: async (req, res) => {
    const {id} = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      await user.destroy();
      res.status(200).send({ message: "User deleted" });
    } catch (error) {
      res.status(500).send({error: error.message})
    }
  },
};
