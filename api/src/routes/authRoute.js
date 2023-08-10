const express = require('express');
const { loginUser } = require('../controllers/authController'); 

const router = express.Router();

router.post('/', loginUser);

module.exports = router;
