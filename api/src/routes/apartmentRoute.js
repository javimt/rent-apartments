const { Router } = require("express");
const {
  getAllApartments,
  createApartment,
  updateApartment,
  deleteApartment,
  getApartmentById,
  rentApartment,
  saleApartment,
} = require("../controllers/apartmentController");

const router = Router();

router.get("/", getAllApartments);
router.get("/:id/rent", getApartmentById);
router.post("/", createApartment);
router.post("/:id/rent", rentApartment);
router.post("/:id/sale", saleApartment);
router.put("/:id", updateApartment);
router.delete("/:id", deleteApartment);

module.exports = router;
