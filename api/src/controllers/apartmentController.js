const { User, Apartment, Rent, Sale } = require("../../db");
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
        include: { model: User },
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
  },

  rentApartment: async (req, res, next) => {
    const { id } = req.params;
    try {
      if (!req.body.userId) {
        rejectSender("User ID is missing in the request body", HttpStatusCodes.sinContenido);
      }
      const apartment = await Apartment.findByPk(id);
      if (!apartment) {
        rejectSender("Apartment not found", HttpStatusCodes.noEncontrado);
      }
      if (!apartment.availability) {
        rejectSender("Apartment is not available for rent", HttpStatusCodes.entidadNoProcesable );
      }

      const currentDate = new Date();
      currentDate.setHours(currentDate.getHours() - 5);

      const startDate = new Date(req.body.startDate);
      startDate.setHours(startDate.getHours());
      startDate.setDate(startDate.getDate());

      const endDate = new Date(req.body.endDate);
      endDate.setHours(endDate.getHours());
      endDate.setDate(endDate.getDate());
      
      if (!startDate || !endDate) {
        rejectSender("no se pueden generar rentas sin fecha de inicio y finalizacion", HttpStatusCodes.badRequest);
      }
      if(startDate < currentDate) {
        rejectSender("la fecha de inicio debe ser mayor a la actual", HttpStatusCodes.badRequest)
      }
      if(startDate > endDate) {
        rejectSender("la fecha de inicio no puede ser igual a la de finalizacion", HttpStatusCodes.badRequest)
      }
      if(endDate < currentDate) {
        rejectSender("la fecha de finalizacion no puede ser menor a la actual", HttpStatusCodes.badRequest)
      }
      try {
        const rent = await Rent.create({
          apartmentId: apartment.id,
          userId: req.body.userId,
          startDate: startDate,
          endDate: endDate,
          totalPrice: req.body.totalPrice,
          status: req.body.status,
        });
        apartment.availability = false;
        await apartment.save();
        resSender("Apartment rented successfully", HttpStatusCodes.aceptado, rent );
      } catch (error) {
        next(error);
      }
    } catch (error) {
      next(error);
    }
  }, 

  saleApartment: async(req, res, next) => {
    const { id } = req.params;
    try {
      if (!req.body.userId) {
        rejectSender("User ID is missing in the request body", HttpStatusCodes.sinContenido);
      }
      const apartment = await Apartment.findByPk(id);
      if (!apartment) {
        rejectSender("Apartment not found", HttpStatusCodes.noEncontrado);
      }

      const date = new Date(req.body.date);
      date.setHours(date.getHours());
      date.setDate(date.getDate());

      try {
        const sale = await Sale.create({
          apartmentId: apartment.id,
          userId: req.body.userId,
          date: date,
          totalPrice: req.body.totalPrice,
          status: req.body.status,
        });
        apartment.status = "sold";
        await apartment.save();
        resSender("Apartment sold successfully", HttpStatusCodes.aceptado, sale );
      } catch (error) {
        next(error);
      }
    } catch (error) {
      next(error);
    }
  } 
};
