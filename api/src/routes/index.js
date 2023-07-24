const { Router } = require('express');
const apartamentRoute = require('./apartamentRoute');
const messageRoute = require('./messageRoute');
const reviewRoute = require('./reviewRoute');
const rentApartamentRoute = require('./rentApartamentRoute');
const userRoute = require('./userRoute');

const router = Router();

router.use('/apartament', apartamentRoute);
router.use('/message', messageRoute);
router.use('/review', reviewRoute);
router.use('/rentApartament', rentApartamentRoute);
router.use('/user', userRoute);

module.exports = router