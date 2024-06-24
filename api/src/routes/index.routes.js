const { Router } = require('express');
const apartmentRoute = require('./apartment.routes');
const rentRoute = require('./rent.routes');
const userRoute = require('./user.routes');
const saleRoute = require('./sale.routes');
const seedRoute = require('./seed.routes');
const transactionRoute = require('./transaction.routes');
const cityRoute = require('./city.routes');
const anotationsRoute = require('./anotations.routes');
const paypalRoutes = require('./paypal.routes')
const exchangeRoutes = require('./exchange.routes')

const router = Router();

router.use('/apartment', apartmentRoute);
router.use('/rent', rentRoute);
router.use('/sale', saleRoute);
router.use('/user', userRoute);
router.use('/seed', seedRoute);
router.use('/transaction', transactionRoute);
router.use('/city', cityRoute);
router.use('/anotations', anotationsRoute);
router.use('/paypal', paypalRoutes)
router.use('/exchange', exchangeRoutes)

module.exports = router; 
