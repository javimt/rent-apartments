const { Anotations, Apartment } = require("../../db");
const { resSender, HttpStatusCodes, rejectSender } = require('../helpers/resSender.helper');

module.exports = {
  getAnotations: async (req, res, next) => {
    try {
      const anotations = await Anotations.findAll({
        attributes: ['id'], 
        order: [['id', 'DESC']] 
      });
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

};