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
} = require("../controllers/apartmentController");

const router = Router();

router.get("/", getAllApartments);
router.get("/city/:city", getApartmentByCity);
router.get("/urbanizacion/:urbanizacion", getApartmentByName);
router.get("/range", getApartmentsByPriceRange);
router.get("/:id", getApartmentById);
router.post("/", createApartment);
router.put("/:id", updateApartment);
router.delete("/:id", deleteApartment);

module.exports = router;
