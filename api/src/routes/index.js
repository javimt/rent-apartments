const { Router } = require('express');
const apartmentRoute = require('./apartmentRoute');
const rentRoute = require('./rentRoute');
const userRoute = require('./userRoute');
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const auth0UserRoute = require('./auth0UserRoute');

const router = Router();

router.use('/apartment', apartmentRoute);
router.use('/rent', rentRoute);
router.use('/user', userRoute);
router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/auth0', auth0UserRoute);

module.exports = router; 