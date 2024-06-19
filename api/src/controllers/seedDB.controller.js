const apartmentJson = require("../seeders/apartments.json");
const usersJson = require("../seeders/users.json");
const { Apartment, User } = require("../../db");
const { resSender, HttpStatusCodes } = require("../helpers/resSender.helper");

module.exports = {
  seedApartment: async (req, res, next) => {
    try {
      const apartment = await Apartment.bulkCreate(apartmentJson);
      apartment.length
        ? res.json(apartment)
        : res.json("no se sembro la base de datos");
    } catch (error) {
      next(error);
    }
  },

  seedUser: (req, res, next) => {
    try {
      let user = usersJson.map((e) => {
        return User.create(e);
      });
      Promise.all(user).then(() => {
        /* response.forEach((empresa, index) => {
          const userId = usersJson[index].userId;
          //User.findByPk(userId || 3).then(() => empresa.addApartment(userId));
        }); */
      }).finally(() => resSender("creado", HttpStatusCodes.creado, null));
    } catch (error) {
      next(error);
    }
  },
};
