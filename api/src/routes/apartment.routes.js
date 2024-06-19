const { Router } = require("express");
const {
  getAllApartments,
  createApartment,
  updateApartment,
  deleteApartment,
  getApartmentById,
  getApartmentByCity,
  getApartmentByName,
  getApartmentsByPriceRange,
  getRatings,
  updateRating,
  getAllRentApartments,
  getAllSaleApartments,
} = require("../controllers/apartment.controller");

const router = Router();

router.get("/", getAllApartments);
router.get("/rent", getAllRentApartments);
router.get("/sale", getAllSaleApartments);
router.get("/rating", getRatings);
router.get("/range", getApartmentsByPriceRange);
router.get("/:id", getApartmentById);
router.get("/city/:id", getApartmentByCity);
router.get("/urbanizacion/:urbanizacion", getApartmentByName);
router.post("/", createApartment);
router.put("/rating", updateRating);
router.put("/:id", updateApartment);
router.delete("/:id", deleteApartment);

module.exports = router;
