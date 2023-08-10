const { Router } = require('express');
const apartmentRoute = require('./apartmentRoute');
const messageRoute = require('./messageRoute');
const reviewRoute = require('./reviewRoute');
const rentRoute = require('./rentRoute');
const userRoute = require('./userRoute');
const loginRoute = require('./authRoute');
const registerRoute = require("./registerRoute");

const router = Router();

router.use('/apartment', apartmentRoute);
router.use('/message', messageRoute);
router.use('/review', reviewRoute);
router.use('/rent', rentRoute);
router.use('/user', userRoute);
router.use('/login', loginRoute);
router.use('/register', registerRoute);

module.exports = router;