const { Router } = require("express");
const {
  getAllRents,
  createRent,
  updateRent,
  deleteRent,
  getRentById,
} = require("../controllers/rentController");
const formatDateMiddleware = require("../middleware/rentMiddleware");

const router = Router();

router.get("/", getAllRents);
router.get("/:id", getRentById);
router.post("/", formatDateMiddleware, createRent);
router.put("/:id", formatDateMiddleware, updateRent);
router.delete("/:id", deleteRent);

module.exports = router;
