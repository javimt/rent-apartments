const {Router} = require('express')
const { seedUser, seedApartment} = require('../controllers/seedDB.controller')

const router = Router()

router.get('/user', seedUser )
router.get('/apartment', seedApartment)

module.exports = router