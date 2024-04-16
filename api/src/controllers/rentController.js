const { Rent, Apartment } = require("../../db");
const { resSender, HttpStatusCodes, rejectSender } = require('../helpers/resSender');

module.exports = {
  getAllRents: async (req, res, next) => {
    try {
      const rents = await Rent.findAll();
      resSender(null, HttpStatusCodes.aceptado, rents);
    } catch (error) {
      next(error);
    }
  },

  getRentById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const rent = await Rent.findByPk(id);
      if (!rent) {
        rejectSender("Rent not found", HttpStatusCodes.noEncontrado);
      }
      resSender(null, HttpStatusCodes.aceptado, rent);
    } catch (error) {
      next(error);
    }
  },

  createRent: async (req, res, next) => {
    try {
      const { apartmentId } = req.body;
      const apartment = await Apartment.findByPk(apartmentId);
      if (!apartment) {
        rejectSender("Apartment not found", HttpStatusCodes.noEncontrado);
      }
      if (!apartment.availability) {
        rejectSender("Apartment is not available for rent", HttpStatusCodes.conflictivo);
      }
      const newRent = await Rent.create(req.body);
      apartment.availability = false;
      await apartment.save();
      resSender(null, HttpStatusCodes.creado, newRent);
    } catch (error) {
      next(error);
    }
  },

  updateRent: async (req, res, next) => {
    const { id } = req.params;
    try {
      const rent = await Rent.findByPk(id);
      if (!rent) {
        rejectSender("Rent not found", HttpStatusCodes.noEncontrado);
      }
      const updatedRent = await rent.update(req.body);
      resSender(null, HttpStatusCodes.actualizado, updatedRent);
    } catch (error) {
      next(error);
    }
  },

  deleteRent: async (req, res, next) => {
    const { id } = req.params;
    try {
      await Rent.destroy({ where: { id } });
      resSender("Rent deleted successfully", HttpStatusCodes.eliminado, null);
    } catch (error) {
      next(error);
    }
  },
};
