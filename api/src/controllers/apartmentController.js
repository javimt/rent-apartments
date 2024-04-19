const { Apartment, Rent } = require("../../db");
const { resSender, HttpStatusCodes, rejectSender } = require('../helpers/resSender');

module.exports = {
  getAllApartments: async (req, res, next) => {
    try {
      const apartments = await Apartment.findAll(); 
      resSender(null, HttpStatusCodes.aceptado, apartments);
    } catch (error) {
      next(error);
    }
  },

  getApartmentById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const apartment = await Apartment.findOne({
        where: { id },
        include: { model: Rent },
      });
      if (!apartment) {
        rejectSender('Apartamento no encontrado', HttpStatusCodes.noEncontrado);
      } else {
        resSender(null, HttpStatusCodes.aceptado, apartment);
      }
    } catch (error) {
      next(error);
    }
  },

  createApartment: async (req, res, next) => {
    try {
      const newApartment = await Apartment.create(req.body);
      resSender(null, HttpStatusCodes.creado, newApartment);
    } catch (error) {
      next(error);
    }
  },

  updateApartment: async (req, res, next) => {
    const { id } = req.params;
    try {
      const apartment = await Apartment.findByPk(id);
      if (!apartment) {
        rejectSender('Apartamento no encontrado', HttpStatusCodes.noEncontrado);
      }
      const updatedApartment = await apartment.update(req.body);
      resSender(null, HttpStatusCodes.actualizado, updatedApartment);
    } catch (error) {
      next(error);
    }
  },

  deleteApartment: async (req, res, next) => {
    const { id } = req.params;
    try {
      const apartment = await Apartment.findByPk(id);
      if (!apartment) {
        rejectSender('Apartamento no encontrado', HttpStatusCodes.noEncontrado);
      }
      await apartment.destroy();
      resSender("Apartment deleted successfully", HttpStatusCodes.eliminado, null);
    } catch (error) {
      next(error);
    }
  }
};
