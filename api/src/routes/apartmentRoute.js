const { Router } = require("express");
const {
  getAllApartments,
  createApartment,
  updateApartment,
  deleteApartment,
  getApartmentById,
  rentApartment,
} = require("../controllers/apartmentController");
const { authenticateUser } = require("../middleware/authMiddleware");

const router = Router();

router.get("/", getAllApartments);
router.get("/:id", getApartmentById);
router.post("/", authenticateUser, createApartment);
router.put("/:id", authenticateUser, updateApartment);
router.delete("/:id", authenticateUser, deleteApartment);
router.post("/:id/rent", authenticateUser, rentApartment);

module.exports = router;
