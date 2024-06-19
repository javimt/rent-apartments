const {Router} = require('express')
const { createOrder } = require('../controllers/paypal.controllers')
const router = Router()


router.get('/create-order', createOrder)
router.get('/capture-order',(req, res)=> res.send('orden capturada'))
router.get('/cancel-order',(req, res)=> res.send('orden cancelada'))


module.exports = router