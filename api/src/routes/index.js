const { Router } = require('express');
const apartmentRoute = require('./apartmentRoute');
const rentRoute = require('./rentRoute');
const userRoute = require('./userRoute');
const saleRoute = require('./saleRoute');
const seedRoute = require('./seedRoutes');
const transactionRoute = require('./transactionRoute');
const cityRoute = require('./cityRoute');
const anotationsRoute = require('./anotationsRoute');

const router = Router();

router.use('/apartment', apartmentRoute);
router.use('/rent', rentRoute);
router.use('/sale', saleRoute);
router.use('/user', userRoute);
router.use('/seed', seedRoute);
router.use('/transaction', transactionRoute);
router.use('/city', cityRoute);
router.use('/anotations', anotationsRoute);

module.exports = router; 
