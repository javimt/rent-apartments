const { Router } = require("express");
const { getAnotations, getAnotationsById, createAnotation, updateAnotation, deleteAnotation } = require("../controllers/anotationsController");
const { authorizeRoles } = require('../middleware/authorizeRoles');

const router = Router();

router.get("/", [authorizeRoles(["admin", "superAdmin"])], getAnotations);
router.get("/:id", [authorizeRoles(["admin", "superAdmin"])], getAnotationsById);
router.post("/", [authorizeRoles(["admin", "superAdmin"])], createAnotation);
router.put("/:id", [authorizeRoles(["admin", "superAdmin"])], updateAnotation);
router.delete("/:id", [authorizeRoles(["admin", "superAdmin"])], deleteAnotation);

module.exports = router;