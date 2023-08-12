const { Router } = require('express');
const { loginUser } = require('../controllers/loginController'); 

const router = Router();

router.post('/', loginUser);

module.exports = router;
