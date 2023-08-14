const { Router } = require('express');
const { logoutUser } = require("../controllers/logoutController");

const router = Router();

router.post('/', logoutUser);

module.exports = router