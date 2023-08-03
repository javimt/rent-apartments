const { User, Apartment } = require("../../db");

module.exports = {
  getAllApartments: async (req, res) => {
    try {
      const apartments = await Apartment.findAll({include: User});
      res.json(apartments);
    } catch (error) {
      res.status(500).send({error: error.message});
    }
  },

  getApartmentById: async (req, res) => {
    const {id} = req.params;
    try {
      const apartment = await Apartment.findByPk(id);
      res.status(200).json(apartment)
    } catch (error) {
      res.status(500).send({error: error.message})
    }
  },

  createApartment: async (req, res) => {
    try {
      const newApartment = await Apartment.create(req.body);
      res.status(201).json(newApartment);
    } catch (error) {
      res.status(500).send({error: error.message});
    }
  },

  updateApartment: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedApartment = await Apartment.update(req.body, {
        where: { id },
      });
      res.json(updatedApartment);
    } catch (error) {
      res.status(500).send({error: error.message})
    }
  },

  deleteApartment: async (req, res) => {
    const { id } = req.params;
    try {
      await Apartment.destroy({ where: { id } });
      res.json({ message: "Apartamento eliminado correctamente" });
    } catch (error) {
      res.status(500).send({error: error.message})
    }
  },
};
