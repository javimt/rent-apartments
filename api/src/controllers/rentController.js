const { Rent, Apartment, User } = require("../../db");
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

    const { apartmentId, userId, startDate, endDate } = req.body
    console.log("🚀 ~ createRent: ~ body:", req.body)
    try {
      //validations parametros
      if(!userId || !apartmentId || !startDate || !endDate){
        rejectSender(`faltan parametros recuerda que los parametros requeridos son -> apartmentId:${apartmentId}, userId:${userId}, startDate:${startDate}, endDate:${endDate}`, HttpStatusCodes.badRequest)
      }
      //requerir entidades
      const user = await User.findByPk(userId)
      const apartment = await Apartment.findByPk(apartmentId)

      if(!user || !apartment){
        rejectSender(`no se encontraron las entidades user: ${user} apartment: ${apartment}` , HttpStatusCodes.badRequest)
      }

      //validando disponibilidad del apartamento
      if(!apartment.availability){
        rejectSender('el apartamento que se intenta rentar no se encuentra disponible.', HttpStatusCodes.noAutorizado)
      }

      //creacion de renta
      const rent = await Rent.create(req.body)
      //validar Renta 
      if(!rent){
        rejectSender('no se pudo crear la renta.', HttpStatusCodes.conflictivo)
      }

      apartment.availability = false
      await apartment.save()
      resSender(null, HttpStatusCodes.creado, rent)

    } catch (error) {
      next(error)
    }
  },

  updateRent: async (req, res, next) => {
    const { id } = req.params;
    const { startDate, endDate } = req.body;
    try {
      const rent = await Rent.findByPk(id);
      if (!rent) {
        rejectSender("Rent not found", HttpStatusCodes.noEncontrado);
      }
      if (startDate > endDate) {
        rejectSender("la fecha de inicio no puede ser mayor a la de finalizacion", HttpStatusCodes.conflictivo);
      }
      const updatedRent = await rent.update({ startDate, endDate });
      resSender(null, HttpStatusCodes.actualizado, updatedRent);
    } catch (error) {
      next(error);
    }
  },

  deleteRent: async (req, res, next) => {
    const { id } = req.params;
    try {
      const rent = await Rent.findByPk(id);
      await rent.destroy();
      resSender("rent deleted", HttpStatusCodes.eliminado, null);
    } catch (error) {
      next(error);
    }
  },
};
