const { Router } = require('express');
const { getAllUsers, postUser, putUser, getUserById, deleteUser } = require('../controllers/userController');
const {validateUserInput} = require('../middleware/userMiddleware');
const {authenticateUser} = require("../middleware/authMiddleware")

const router = Router();

router.get('/', getAllUsers); 
router.post('/', authenticateUser, validateUserInput, postUser);
router.put('/:id', authenticateUser, validateUserInput, putUser); 
router.get('/:id', getUserById); 
router.delete('/:id', authenticateUser, deleteUser); 

module.exports = router;
