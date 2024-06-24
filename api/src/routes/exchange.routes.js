const {Router} = require('express')
const { getExchange } = require('../controllers/exchange.controller')
const router = Router()


router.get('/', getExchange)

module.exports = router