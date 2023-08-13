const bcrypt = require('bcrypt');
const { User } = require('../../db');

module.exports = {
  registerUser: async (req, res) => {
    const {
      full_name,
      email,
      password,
      country,
      city,
      phone,
      image,
      addres
    } = req.body;

    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const newUser = await User.create({
        full_name,
        email,
        password: hashedPassword,
        country,
        city,
        phone,
        image,
        addres
      });

      res.status(201).json({ message: 'User registered successfully', newUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
