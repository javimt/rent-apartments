const { Router } = require('express');
const { getAllCities, getCitYById, createCity, updateCity, deleteCity } = require('../controllers/city.controller');

const router = Router();

router.get('', getAllCities);
router.get('/:id', getCitYById);
router.post('', createCity);
router.put('/:id', updateCity);
router.delete('/:id', deleteCity);

module.exports = router;