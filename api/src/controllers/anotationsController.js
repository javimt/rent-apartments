const { Op } = require("sequelize");
const { Anotations, Apartment } = require("../../db");
const { resSender, HttpStatusCodes, rejectSender } = require('../helpers/resSender');
const { sendMail } = require('../helpers/mailer');

module.exports = {
  getAnotations: async (req, res, next) => {
    try {
      const anotations = await Anotations.findAll();
      resSender(null, HttpStatusCodes.aceptado, anotations);
    } catch (error) {
      next(error);
    }
  },

  getAnotationsById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const anotation = await Anotations.findByPk(id);
      if (!anotation) {
        rejectSender("No se encontraron anotaciones con ese id", HttpStatusCodes.noEncontrado);
      }
      resSender(null, HttpStatusCodes.aceptado, anotation);
    } catch (error) {
      next(error);
    }
  },

  createAnotation: async (req, res, next) => {
    const { apartmentId } = req.body;
    try {
      const apartment = await Apartment.findByPk(apartmentId);
      if(!apartment) {
        rejectSender("No se puede crear la anotacion sin un apartamento asociado", HttpStatusCodes.noEncontrado);
      }
      const anotation = await Anotations.create(req.body);
      await apartment.addAnotation(anotation);
      resSender(null, HttpStatusCodes.creado, anotation);
    } catch (error) {
      next(error);
    }
  },

  updateAnotation: async (req, res, next) => {
    const { id } = req.params;
    try {
      const anotation = await Anotations.findByPk(id);
      if (!anotation) {
        rejectSender("No se encontraron anotaciones con ese id", HttpStatusCodes.noEncontrado);
      }
      const updatedAnotation = await anotation.update(req.body);
      resSender(null, HttpStatusCodes.actualizado, updatedAnotation);
    } catch (error) {
      next(error);
    }
  },

  deleteAnotation: async (req, res, next) => {
    const { id } = req.params;
    try {
      const anotation = await Anotations.findByPk(id);
      if (!anotation) {
        rejectSender("No se encontraron anotaciones con ese id", HttpStatusCodes.noEncontrado);
      }
      await anotation.destroy();
      resSender("Anotación eliminada correctamente", HttpStatusCodes.eliminado, null);
    } catch (error) {
      next(error);
    }
  },

  sendMailPending: async (req, res, next) => {
    try {
      const anotations = await Anotations.findAll({
        where: {
          status: 'pending',
        },
        attributes: ['pending'],
        include: {
          model: Apartment,
          attributes: ['urbanizacion']
        },
      })

      if(anotations.length === 0) {
        rejectSender("no hay anotaciones pendientes", HttpStatusCodes.noEncontrado);
      } else {
        // Enviar correo al administrador con las anotaciones pendientes
        const adminEmail = 'javiergarciaplata69@gmail.com'; 
        const subject = 'Anotaciones Pendientes';
        const html = `Aquí están las anotaciones pendientes: ${JSON.stringify(anotations)}`;
        await sendMail(adminEmail, subject, html);
      }
      resSender(null, HttpStatusCodes.aceptado, anotations);
    } catch (error) {
      next(error);
    }
  }
};