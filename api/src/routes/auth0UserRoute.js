const { Router } = require("express");
const { createAuth0User, getAuth0Users } = require("../controllers/auth0UserController");

const router = Router();

router.get("/", getAuth0Users);
router.post("/", createAuth0User);

module.exports = router;
