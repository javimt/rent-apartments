const { User, Apartment, Rent } = require("../../db");

const checkAvailability = (apartment) => {
  return apartment.availability ? "Available" : "Not Available";
};

module.exports = {
  getAllApartments: async (req, res) => {
    try {
      const apartments = await Apartment.findAll({
        include: [{ model: User }, { model: Rent }],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json(apartments);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  getApartmentById: async (req, res) => {
    const { id } = req.params;
    try {
      const apartment = await Apartment.findOne({
        where: { id },
        include: { model: User },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (!apartment) {
        return res.status(404).json({ error: "Apartment not found" });
      }
      const availability = checkAvailability(apartment);
      res.status(200).json({ ...apartment.toJSON(), availability });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createApartment: async (req, res) => {
    try {
      const { userId } = req.body;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      const newApartment = await Apartment.create(req.body);
      await newApartment.setUser(user);
      res.status(201).json(newApartment);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  updateApartment: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedApartment = await Apartment.update(req.body, {
        where: { id },
      });
      if (updatedApartment[0] === 0) {
        return res.status(404).send({ error: "Apartment not found" });
      }
      res.status(200).json(updatedApartment);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  deleteApartment: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedApartment = await Apartment.destroy({ where: { id } });
      if (deletedApartment === 0) {
        return res.status(404).send({ error: "Apartment not found" });
      }
      res.status(200).send({ message: "Apartment deleted" });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  rentApartment: async (req, res) => {
    const { id } = req.params;
    try {
      const apartment = await Apartment.findByPk(id);
      if (!apartment) {
        return res.status(404).send({ error: "Apartment not found" });
      }
      if (!apartment.availability) {
        return res.status(400).send({ error: "Apartment is not available for rent" });
      }
      apartment.availability = false;
      await apartment.save();
      const rent = await Rent.create({
        apartmentId: apartment.id,
        startDate: new Date(),
        endDate: new Date(req.body.endDate),
        totalPrice: req.body.totalPrice,
        status: true,
      });
      res.status(200).json({ message: "Apartment rented successfully", rent });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },
};
