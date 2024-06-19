const { User } = require("../../db");
const { resSender, HttpStatusCodes, rejectSender } = require('../helpers/resSender.helper');

const authorizeRoles = (roles) => {
  return async (req, res, next) => {
    const { email } = req.query;  // Asumiendo que el email está disponible en req.query

    try {
      const user = await User.findOne({ where: { email } });
      if (!user || !roles.includes(user.role)) {
        return rejectSender("No autorizado", HttpStatusCodes.noAutorizado);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = {
  authorizeRoles,
};