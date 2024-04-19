const { User } = require("../../db");
const { resSender, HttpStatusCodes, rejectSender } = require('../helpers/resSender');

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const allUsers = await User.findAll();
      resSender(null, HttpStatusCodes.aceptado, allUsers);
    } catch (error) { 
      next(error);
    }
  },

  loginOrRegister: async (req, res, next) => {
    const { email } = req.body;
    try {
      const user = await User.findOrCreate({ where: { email: email }, defaults: req.body});
      resSender(null, HttpStatusCodes.creado, user);
    } catch (error) {
      next(error);
    }
  },

  getByEmail: async (req, res, next) => {
    try {
      const user = await User.findOne({where: {email: email}});
      resSender(null, HttpStatusCodes.creado, user);
    } catch (error) {
      next(error);
    }
  },

  putUser: async (req, res, next) => {
    const { email } = req.body;
    try {
      const user = await User.findOne({where: {email: email}});
      if (!user) {
        rejectSender("User not found", HttpStatusCodes.noEncontrado);
      }
      const updateUser = await user.update(req.body);
      resSender(null, HttpStatusCodes.actualizado, updateUser);
    } catch (error) {
      next(error);
    }
  },

  deleteUser: async (req, res, next) => {
    const { email } = req.body;
    try {
      const user = await User.findByPk(email);
      if (!user) {
        rejectSender("User not found", HttpStatusCodes.noEncontrado);
      }
      await user.destroy();
      resSender("User deleted", HttpStatusCodes.eliminado, null);
    } catch (error) {
      next(error);
    }
  },
};
