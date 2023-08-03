const { Router } = require("express");
const {
  getAllApartments,
  createApartment,
  updateApartment,
  deleteApartment,
  getApartmentById,
} = require("../controllers/apartmentController");

const router = Router();

router.get("/", getAllApartments);
router.post("/", createApartment);
router.get("/:id", getApartmentById);
router.put("/:id", updateApartment);
router.delete("/:id", deleteApartment);

module.exports = router;
