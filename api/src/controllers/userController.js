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

  assignAdminRole: async (req, res, next) => {
    const { id } = req.params;
    const { role } = req.body
    try {
      const currentUser = await User.findOne({ where: { email: id } });
      if (!currentUser) {
        rejectSender("Usuario no encontrado", HttpStatusCodes.noEncontrado);
      }
      if (currentUser === "superAdmin") {
        resSender(null, HttpStatusCodes.aceptado, {user: currentUser});
      } 
      const user = await User.findByPk(id);
      if (!user) {
        rejectSender("User not found", HttpStatusCodes.noEncontrado);
      }
      if (user.role === "superAdmin" && user.id === currentUser) {
        rejectSender("No puedes cambiar tu propio rol", HttpStatusCodes.conflictivo);
      }
      user.role = role;
      await user.save();
      resSender("User role updated", HttpStatusCodes.actualizado);
    } catch (error) {
      next(error);
    }
  },

  putUser: async (req, res, next) => {
    try {
      const user = await User.findOne(email);
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
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
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
