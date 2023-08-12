const { Router } = require('express');
const googleAuthController = require("../controllers/googleController");
const facebookAuthController = require("../controllers/facebookController");

const router = Router();

router.get('/google', googleAuthController);
router.get('/facebook', facebookAuthController);

module.exports = router;