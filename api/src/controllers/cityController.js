const { City, Apartment } = require('../../db');
const { resSender, HttpStatusCodes, rejectSender } = require('../helpers/resSender');

module.exports = {
  getAllCities: async (req, res ,next) => {
    try {
      const cities = await City.findAll();
      if(!cities) {
        rejectSender("no se encontraron ciudades", HttpStatusCodes.noEncontrado);
      }
      resSender(null, HttpStatusCodes.aceptado, cities);
    } catch (error) {
      next(error);
    }
  },

  getCitYById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const city = await City.findByPk(id);
      if(!city) {
        rejectSender("no se encontro la ciudad con el id", HttpStatusCodes.noEncontrado);
      }
      resSender(null, HttpStatusCodes.aceptado, city);
    } catch (error) {
      next(error);
    }
  },

  createCity: async (req, res, next) => {
    try {
      const apartment = await Apartment.findByPk(req.body.apartmentId);
      if(!apartment) {
        rejectSender("no se encontró el apartamento", HttpStatusCodes.noEncontrado);
      }
      const city = await City.create(req.body);
      if(!city) {
        rejectSender("faltaron datos para crear la ciudad", HttpStatusCodes.noEncontrado);
      }
      await city.addApartment(apartment);
      resSender(null, HttpStatusCodes.creado, city);
    } catch (error) {
      next(error);
    }
  },

  updateCity: async (req, res, next) => {
    const { id } = req.params;
    try {
      const city = await City.findByPk(id);
      if(!city) {
        rejectSender("no se encontró la ciudad para actualizar", HttpStatusCodes.noEncontrado);
      }
      await city.update(req.body);
      resSender(null, HttpStatusCodes.actualizado, city);
    } catch (error) {
      next(error);
    }
  },

  deleteCity: async (req, res, next) => {
    const { id } = req.params;
    try {
      const city = await City.findByPk(id);
      if(!city) {
        rejectSender("no se encontro la ciudad a eliminar", HttpStatusCodes.noEncontrado);
      }
      await city.destroy();
      resSender("ciudad eliminada", HttpStatusCodes.eliminado);
    } catch (error) {
      next(error);
    }
  }
}