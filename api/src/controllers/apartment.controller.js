const { Op } = require("sequelize");
const { Apartment, Rent, City, Anotations } = require("../../db");
const { resSender, HttpStatusCodes, rejectSender } = require("../helpers/resSender.helper");

module.exports = {
  getAllApartments: async (req, res, next) => {
    const { anotations } = req.query

    try {
      let apartments;
      if (anotations && anotations == 'true') {
        apartments = await Apartment.findAll({ include: { model: Anotations } });
      } else {
        apartments = await Apartment.findAll();
      }
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
        include: [
          { model: Rent },
          { model: Anotations },
        ],
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
    const { id } = req.params;
    console.log(id)
    try {
      const apartment = await Apartment.findAll({
        include: [
          {
            model: City,
            where: {
              id: id,
            },
          },
          { model: Anotations },
        ],
      });
      if (!apartment) {
        rejectSender("no se encontró el modelo CITY", HttpStatusCodes.noEncontrado);
      }
      resSender(null, HttpStatusCodes.aceptado, apartment);
    } catch (error) {
      next(error);
    }
  },

  getAllRentApartments: async (req, res, next) => {
    try {
      const rentalApartments = await Apartment.findAll({
        where: { status: 'rent' },
        include: { model: Rent }
      });
      if (!rentalApartments) {
        rejectSender("no se encontraron apartamentos para alquilar", HttpStatusCodes.noEncontrado);
      }
      resSender(null, HttpStatusCodes.aceptado, rentalApartments);
    } catch (error) {
      next(error);
    }
  },

  getAllSaleApartments: async (req, res, next) => {
    try {
      const saleApartments = await Apartment.findAll({ where: { status: 'sale' } });
      if (!saleApartments) {
        rejectSender("no se encontraron apartamentos para vender", HttpStatusCodes.noEncontrado);
      }
      resSender(null, HttpStatusCodes.aceptado, saleApartments);
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
        rejectSender("no se encontro el apartamento por el nombre", HttpStatusCodes.noEncontrado);
      }
      resSender(null, HttpStatusCodes.aceptado, nameApartment);
    } catch (error) {
      next(error);
    }
  },

  getRatings: async (req, res, next) => {
    const { rating } = req.query;
    try {
      if (!rating) {
        rejectSender("No se proporcionó un rating en la solicitud", HttpStatusCodes.badRequest);
      }
      const apartments = await Apartment.findAll();
      const apartmentMedia = apartments.filter(e => e.rating.media >= rating);
      if (!apartments || apartments.length === 0) {
        rejectSender("No se encontraron apartamentos con el rating proporcionado", HttpStatusCodes.noEncontrado);
      }
      if (!rating) {
        rejectSender("no se encontró el apartamento por rating");
      }
      resSender(null, HttpStatusCodes.aceptado, apartmentMedia);
    } catch (error) {
      next(error);
    }
  },

  updateRating: async (req, res, next) => {
    const { id, rating } = req.body;
    try {
      const apartment = await Apartment.findByPk(id);
      if (!apartment) {
        rejectSender("No se encontró el apartamento", HttpStatusCodes.noEncontrado);
      }
      const valorations = [...apartment.rating.valorations, rating];
      const media = valorations.reduce((acum, current) => acum + current, 0) / valorations.length;
      const apartUpdated = await apartment.update({
        rating: {
          valorations: valorations,
          media: +media.toFixed(1)
        }
      });
      resSender(null, HttpStatusCodes.actualizado, apartUpdated);
    } catch (error) {
      next(error);
    }
  },

  getApartmentsByPriceRange: async (req, res, next) => {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    try {
      const apartments = await Apartment.findAll({
        where: {
          price: {
            [Op.between]: [minPrice, maxPrice],
          },
        },
      });
      if (!apartments) {
        rejectSender("No se encontraron apartamentos dentro del rango de precios proporcionado", HttpStatusCodes.noEncontrado);
      }
      resSender(null, HttpStatusCodes.aceptado, apartments);
    } catch (error) {
      next(error);
    }
  },

  createApartment: async (req, res, next) => {
    const { CityId } = req.body;
    try {
      const city = await City.findByPk(CityId);
      if (!city) {
        rejectSender("No se encontró la ciudad", HttpStatusCodes.noEncontrado);
      }
      const newApartment = await Apartment.create(req.body);
      await city.addApartment(newApartment);
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

  deleteApartment: async (req, res, next) => {
    const { id } = req.params;
    try {
      const apartment = await Apartment.findByPk(id);
      if (!apartment) {
        rejectSender("Apartamento no encontrado", HttpStatusCodes.noEncontrado);
      }
      await apartment.destroy();
      resSender("Apartment deleted successfully", HttpStatusCodes.eliminado, null);
    } catch (error) {
      next(error);
    }
  },
};
