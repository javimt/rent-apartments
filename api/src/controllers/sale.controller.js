const { Sale, Apartment } = require("../../db");
const { resSender, HttpStatusCodes, rejectSender } = require('../helpers/resSender.helper');

module.exports = {
  getAllSales: async (req, res, next) => {
    try {
      const sales = await Sale.findAll();
      resSender(null, HttpStatusCodes.aceptado, sales);
    } catch (error) {
      next(error);
    }
  },

  getSaleById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const sale = await Sale.findByPk(id);
      if (!sale) {
        rejectSender("Sale not found", HttpStatusCodes.noEncontrado);
      }
      resSender(null, HttpStatusCodes.aceptado, sale);
    } catch (error) {
      next(error);
    }
  },

  createSale: async(req, res, next) => {
    try {
      if (!req.body.userId) {
        rejectSender("User ID is missing in the request body", HttpStatusCodes.sinContenido);
      }
      const apartment = await Apartment.findByPk(req.body.apartmentId);
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
        apartment.availability = false;
        await apartment.save();
        resSender("Apartment sold successfully", HttpStatusCodes.aceptado, sale);
      } catch (error) {
        next(error);
      }
    } catch (error) {
      next(error);
    }
  }, 

  updateSale: async (req, res, next) => {
    const { id } = req.params;
    try {
      const sale = await Sale.findByPk(id);
      if (!sale) {
        rejectSender("Sale not found", HttpStatusCodes.noEncontrado);
      }
      const updatedSale = await sale.update(req.body.date);
      resSender(null ,HttpStatusCodes.actualizado, updatedSale);
    } catch (error) {
      next(error);
    }
  },

  deleteSale: async (req, res, next) => {
    const { id } = req.params;
    try {
      await Sale.destroy({ where: { id } });
      resSender("sale deleted successfully", HttpStatusCodes.eliminado, null);
    } catch (error) {
      next(error);
    }
  },
};
