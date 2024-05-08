const { Router } = require('express');
const { getAllUsers, getByEmail, putUser, loginOrRegister, deleteUser } = require('../controllers/userController');

const router = Router();

router.get('/', getAllUsers); 
router.get('/email', getByEmail);
router.post('/', loginOrRegister); 
router.put('/email', putUser);
router.delete('/email', deleteUser); 

module.exports = router;
