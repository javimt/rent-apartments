const { Router } = require('express');
const { registerUser } = require('../controllers/regiterController'); 

const router = Router();

router.post('/', registerUser);

module.exports = router;
