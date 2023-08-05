const { Rent } = require("../../db");

module.exports = {
  getAllRents: async (req, res) => {
    try {
      const rents = await Rent.findAll();
      res.status(200).json(rents);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  getRentById: async (req, res) => {
    const id = req.params.id;
    try {
      const rent = await Rent.findByPk(id);
      res.status(200).json(rent);
    } catch (error) {
      res.status(500).send({error: error.message});
    }
  },

  createRent: async (req, res) => {
    try {
      const newRent = await Rent.create(req.body);
      res.status(201).json(newRent);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  updateRent: async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await Rent.findByPk(id)
      const updatedRent = await updated.update(req.body);
      res.status(200).send("updated");
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  deleteRent: async (req, res) => {
    const { id } = req.params;
    try {
      await Rent.destroy({ where: { id } });
      res.status(200).send("deleted");
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },
};
