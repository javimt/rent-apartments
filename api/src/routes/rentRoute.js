const { Router } = require("express");
const {
  getAllRents,
  createRent,
  updateRent,
  deleteRent,
  getRentById,
} = require("../controllers/rentController");
const formatDateMiddleware = require("../middleware/rentMiddleware");
const { authenticateUser } = require('../middleware/authMiddleware');

const router = Router();

router.get("/", getAllRents);
router.get("/:id", getRentById);
router.post("/", authenticateUser, formatDateMiddleware, createRent);
router.put("/:id", authenticateUser, formatDateMiddleware, updateRent);
router.delete("/:id", authenticateUser, deleteRent);

module.exports = router;
