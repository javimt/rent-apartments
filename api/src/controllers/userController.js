const { User, Rent, Apartment } = require("../../db");
const { resSender, HttpStatusCodes, rejectSender } = require('../helpers/resSender');
const { sendMail } = require('../helpers/mailer');

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const allUsers = await User.findAll();
      resSender(null, HttpStatusCodes.aceptado, allUsers);
    } catch (error) { 
      next(error);
    }
  },

  getByEmail: async (req, res, next) => {
    const { email } = req.query;
    try {
      if(!email) {
        rejectSender("no existen usuarios en la base de datos", HttpStatusCodes.aceptado)
      }
      const user = await User.findOne({ where: { email: email } });
      resSender(null, HttpStatusCodes.aceptado, user);
    } catch (error) {
      next(error);
    }
  }, 

  /* sendEmails: async (req, res, next) => {
    try {
      const activeRents = await Rent.findAll({
        where: { status: 'active' },
        include: [
          { model: User },
          { model: Apartment }
        ]
      });

      const mailPromises = activeRents.map(rent => {
        const user = rent.User;
        const subject = 'Calificación de tu apartamento rentado';
        const text = `Hola ${user.name},\n\nPor favor califica el apartamento que rentaste.`;
        const html = `
        <p>Hola <strong>${user.name}</strong>,</p>
        <p>Tu renta finalizará en tres días. Por favor califica el apartamento que rentaste.</p>
        <a href="https://www.medellinfurnishedapartment.com/apartment/#/${rent.apartmentId}">Calificar</a>`;
        return sendMail(user.email, subject, text, html);
      });

      await Promise.all(mailPromises);

      resSender(null, HttpStatusCodes.aceptado, 'Correos enviados a los usuarios con rentas activas');
    } catch (error) {
      next(error);
    }
  }, */

  loginOrRegister: async (req, res, next) => {
    try {
      const user = await User.findOrCreate({ 
        where: { email: req.body.email }, 
        defaults: req.body 
      });
      resSender(null, HttpStatusCodes.creado, user); 
    } catch (error) {
      next(error);
    }
  },

  putUser: async (req, res, next) => {
    const { email } = req.query;
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
    const { email } = req.query;
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
