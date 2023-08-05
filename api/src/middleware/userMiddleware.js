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

  authenticateUser: (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        error: {
          code: 401,
          message: "Unauthorized",
        },
      });
    }
    next();
  },
};

module.exports = userMiddleware;
