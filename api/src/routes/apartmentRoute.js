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
} = require("../controllers/apartmentController");

const router = Router();

router.get("/", getAllApartments);
router.get("/rating", getRatings);
router.get("/city/:id", getApartmentByCity);
router.get("/urbanizacion/:urbanizacion", getApartmentByName);
router.get("/range", getApartmentsByPriceRange);
router.get("/:id", getApartmentById);
router.post("/", createApartment);
router.put("/rating", updateRating);
router.put("/:id", updateApartment);
router.delete("/:id", deleteApartment);

module.exports = router;
