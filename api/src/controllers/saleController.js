const { Sale, Apartment } = require("../../db");
const { resSender, HttpStatusCodes, rejectSender } = require('../helpers/resSender');

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

  createSale: async (req, res, next) => {
    try {
      const { apartmentId } = req.body;
      const apartment = await Apartment.findByPk(apartmentId);
      if (!apartment) {
        rejectSender("Apartment not found", HttpStatusCodes.noEncontrado);
      }
      if (apartment.status !== "available") {
        rejectSender("Apartment is not available for Sale", HttpStatusCodes.conflictivo);
      }
      const newSale = await Sale.create(req.body);
      apartment.status = "sale";
      await apartment.save();
      resSender(null, HttpStatusCodes.creado, newSale);
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
      const updatedSale = await sale.update(req.body);
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
