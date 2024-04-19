const { Router } = require('express');
const { getAllUsers, getByEmail, putUser, loginOrRegister, deleteUser } = require('../controllers/userController');

const router = Router();

router.get('/', getAllUsers); 
router.get('/email', getByEmail);
router.post('/login', loginOrRegister); 
router.put('/', putUser);
router.delete('/', deleteUser); 

module.exports = router;
