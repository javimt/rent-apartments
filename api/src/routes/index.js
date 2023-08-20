const { Router } = require('express');
const apartmentRoute = require('./apartmentRoute');
const rentRoute = require('./rentRoute');
const userRoute = require('./userRoute');
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');

const router = Router();

router.use('/apartment', apartmentRoute);
router.use('/rent', rentRoute);
router.use('/user', userRoute);
router.use('/login', loginRoute);
router.use('/logout', logoutRoute);

module.exports = router; 