const { Router } = require('express');
const { getAllUsers, postUser, putUser, getUserById, deleteUser, assignAdminRole } = require('../controllers/userController');
const {validateUserInput} = require('../middleware/userMiddleware');
const {authenticateUser} = require("../middleware/authMiddleware")

const router = Router();

router.get('/', getAllUsers); 
router.get('/:id', getUserById); 
router.post('/', authenticateUser, validateUserInput, postUser);
router.put('/:id', authenticateUser, validateUserInput, putUser); 
router.delete('/:id', authenticateUser, deleteUser); 
router.put('/:id/admin', authenticateUser, assignAdminRole);

module.exports = router;
