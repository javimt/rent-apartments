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
      //validar que la fecha inicial sea mayor a la final
      if (endDate < startDate) {
        rejectSender("la fecha final no puede ser menor a la de inicio", HttpStatusCodes.conflictivo);
      }
      //creacion de renta
      const rent = await Rent.create(req.body)
      //validar Renta 
      if(!rent){
        rejectSender('no se pudo crear la renta.', HttpStatusCodes.conflictivo)
      }
      resSender(null, HttpStatusCodes.creado, rent)
    } catch (error) {
      next(error)
    }
  },

  updateRent: async (req, res, next) => {
    const { id } = req.params;
    const { startDate, endDate, status } = req.body;
    try {
      const rent = await Rent.findByPk(id);
      if (!rent) {
        rejectSender("Rent not found", HttpStatusCodes.noEncontrado);
      }
      //validar que la fecha inicial sea mayor a la final
      if (endDate < startDate) {
        rejectSender("la fecha final no puede ser menor a la de inicio", HttpStatusCodes.conflictivo);
      }
      if (status === 'active' && rent.status !== 'active') { // q el status d la solicitud sea "active" y q el status actual no sea "active"
        const apartment = await Apartment.findByPk(rent.apartmentId);
        if (!apartment) {
          rejectSender("Apartment not found", HttpStatusCodes.noEncontrado);
          return;
        }
        if (!apartment.availability) {
          rejectSender('el apartamento no está disponible', HttpStatusCodes.noAutorizado);
          return;
        }
        apartment.availability = false;
        rent.status = "active";
        await apartment.save();
      }
      const updatedRent = await rent.update({ startDate, endDate, status });
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
