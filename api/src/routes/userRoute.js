const { Router } = require('express');
const { getAllUsers, getByEmail, putUser, loginOrRegister, deleteUser, assignAdminRole } = require('../controllers/userController');

const router = Router();

router.get('/', getAllUsers); 
router.get('/email', getByEmail);
router.post('/login', loginOrRegister); 
router.put('/:id', putUser); 
router.delete('/:id', deleteUser); 
router.put('/:id/admin', assignAdminRole);

module.exports = router;
