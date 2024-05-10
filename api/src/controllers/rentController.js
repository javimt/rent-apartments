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

    // version javier
    // try {
    //   if (!userId) {
    //     rejectSender("User ID is missing in the request body", HttpStatusCodes.sinContenido);
    //   }

      
    //   const apartment = await Apartment.findByPk(req.body.apartmentId);
    //   console.log("🚀 ~ createRent: ~ apartment:", apartment)

    //   if (!apartment) {
    //     rejectSender("Apartment not found", HttpStatusCodes.noEncontrado);
    //   }
    //   if (!apartment.availability) {
    //     rejectSender("Apartment is not available for rent", HttpStatusCodes.entidadNoProcesable);
    //   }

    //   const currentDate = new Date();
    //   //currentDate.setHours(currentDate.getHours() - 5);

    //   const startDate = new Date(req.body.startDate);
    //   //startDate.setHours(startDate.getHours());
    //   //startDate.setDate(startDate.getDate());

    //   const endDate = new Date(req.body.endDate);
    //   endDate.setHours(endDate.getHours());
    //   endDate.setDate(endDate.getDate());

    //   if (!startDate || !endDate) {
    //     rejectSender("no se pueden generar rentas sin fecha de inicio y finalizacion", HttpStatusCodes.conflictivo);
    //   }
    //   if (startDate < currentDate) {
    //     rejectSender("la fecha de inicio debe ser mayor a la actual", HttpStatusCodes.conflictivo);
    //   }
    //   if (startDate > endDate) {
    //     rejectSender("la fecha de inicio no puede ser igual a la de finalizacion", HttpStatusCodes.conflictivo);
    //   }
    //   if (endDate < currentDate) {
    //     rejectSender("la fecha de finalizacion no puede ser menor a la actual", HttpStatusCodes.conflictivo);
    //   }
    //   try {
    //     const rent = await Rent.create({
    //       apartmentId: apartment.id,
    //       userId: req.body.userId,
    //       startDate: startDate,
    //       endDate: endDate,
    //       totalPrice: req.body.totalPrice,
    //       status: req.body.status,
    //     });
    //     apartment.availability = false;
    //     await apartment.save();
    //     resSender("Apartment rented successfully", HttpStatusCodes.aceptado, rent);
    //   } catch (error) {
    //     next(error);
    //   }
    // } catch (error) {
    //   next(error);
    // }
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
