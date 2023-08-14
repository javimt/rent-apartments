const { Router } = require('express');
const apartmentRoute = require('./apartmentRoute');
const messageRoute = require('./messageRoute');
const reviewRoute = require('./reviewRoute');
const rentRoute = require('./rentRoute');
const userRoute = require('./userRoute');
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const registerRoute = require("./registerRoute");
//const authRoute = require("./authRouter");

const router = Router();

router.use('/apartment', apartmentRoute);
router.use('/message', messageRoute);
router.use('/review', reviewRoute);
router.use('/rent', rentRoute);
router.use('/user', userRoute);
router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/register', registerRoute);
//router.use('/auth', authRoute);

module.exports = router; 