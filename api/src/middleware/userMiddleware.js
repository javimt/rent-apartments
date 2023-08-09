const jwt = require('jsonwebtoken');
const { User } = require('../../db');

const userMiddleware = {
  validateUserInput: (req, res, next) => {
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

    if (!full_name || !email || !password) {
      return res.status(400).json({
        error: {
          code: 400,
          message: "Missing required fields",
        },
      });
    }

    const fullNameRegex = /^[a-zA-ZÀ-ÿ\s]{3,50}$/;
    if (!fullNameRegex.test(full_name)) {
      return res.status(400).json({
        error: {
          code: 400,
          message: "Invalid full name format",
        },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: {
          code: 400,
          message: "Invalid email format",
        },
      });
    }
    if (password.length < 4) {
      return res.status(400).json({
          error: {
            code: 400,
            message: "Password must be at least 4 characters long",
          },
        });
    }
    next();
  },

  authenticateUser: async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Utiliza process.env para acceder a la clave secreta
      const user = await User.findByPk(decodedToken.userId);

      if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
    }
  },
};

module.exports = userMiddleware;