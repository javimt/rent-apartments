const { Op } = require("sequelize");
const { Apartment, Rent, City } = require("../../db");
const {
  resSender,
  HttpStatusCodes,
  rejectSender,
} = require("../helpers/resSender");

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
        rejectSender("Apartamento no encontrado", HttpStatusCodes.noEncontrado);
      } else {
        resSender(null, HttpStatusCodes.aceptado, apartment);
      }
    } catch (error) {
      next(error);
    }
  },

  getApartmentByCity: async (req, res, next) => {
    const { city } = req.params;
    try {
      const apartment = await Apartment.findAll({
        include: [
          {
            model: City,
            where: {
              city: { [Op.iLike]: `%${city}%` },
            },
          },
        ],
      });
      if (!apartment) {
        rejectSender(
          "no se encontró el modelo CITY",
          HttpStatusCodes.noEncontrado
        );
      }
      resSender(null, HttpStatusCodes.aceptado, apartment);
    } catch (error) {
      next(error);
    }
  },

  getApartmentByName: async (req, res, next) => {
    const { urbanizacion } = req.params;
    try {
      const nameApartment = await Apartment.findOne({
        where: {
          urbanizacion: {
            [Op.iLike]: `%${urbanizacion}%`,
          },
        },
      });
      if (!nameApartment) {
        rejectSender(
          "no se encontro el apartamento por el nombre",
          HttpStatusCodes.noEncontrado
        );
      }
      resSender(null, HttpStatusCodes.aceptado, nameApartment);
    } catch (error) {
      next(error);
    }
  },

  getRatings: async (req, res, next) => {
    const { rating } = req.body;
    try {
      if (!rating) {
        return rejectSender(
          "No se proporcionó un rating en la solicitud",
          HttpStatusCodes.badRequest
        );
      }
      const apartments = await Apartment.findAll({
        where: {
          rating: {rating},
        },
      });
      if (!apartments || apartments.length === 0) {
        return rejectSender(
          "No se encontraron apartamentos con el rating proporcionado",
          HttpStatusCodes.noEncontrado
        );
      }
      if (!rating) {
        rejectSender("no se encontró el apartamento por rating");
      }
      resSender(null, HttpStatusCodes.aceptado, apartments);
    } catch (error) {
      next(error);
    }
  },

  getApartmentsByPriceRange: async (req, res, next) => {
    const { minPrice, maxPrice } = req.body.price;
    try {
      const apartments = await Apartment.findAll({
        where: {
          price: {
            [Op.between]: [minPrice, maxPrice],
          },
        },
      });
      if (!apartments.length) {
        rejectSender(
          "No se encontraron apartamentos dentro del rango de precios proporcionado",
          HttpStatusCodes.noEncontrado
        );
      }
      resSender(null, HttpStatusCodes.aceptado, apartments);
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
        rejectSender("Apartamento no encontrado", HttpStatusCodes.noEncontrado);
      }
      const updatedApartment = await apartment.update(req.body);
      resSender(null, HttpStatusCodes.actualizado, updatedApartment);
    } catch (error) {
      next(error);
    }
  },

  updateRating: async (req, res, next) => {
    const { id, rating } = req.body;
    try {
      const apartment = await Apartment.findByPk(id);
      if (!apartment) {
        rejectSender("no se encontró el apartamento", HttpStatusCodes.noEncontrado);
      }
      await apartment.update({
        rating: {
          valoration: [...apartment.rating.valorations, rating],
          media: [...apartment.rating.valorations, rating].reduce(
            (acum, current) => {
              return acum + current;
            },
            0
          ) / apartment.rating.valorations.length
        },
      });
      resSender(null, HttpStatusCodes.actualizado, apartment);
    } catch (error) {
      next(error);
    }
  },

  deleteApartment: async (req, res, next) => {
    const { id } = req.params;
    try {
      const apartment = await Apartment.findByPk(id);
      if (!apartment) {
        rejectSender("Apartamento no encontrado", HttpStatusCodes.noEncontrado);
      }
      await apartment.destroy();
      resSender(
        "Apartment deleted successfully",
        HttpStatusCodes.eliminado,
        null
      );
    } catch (error) {
      next(error);
    }
  },
};
