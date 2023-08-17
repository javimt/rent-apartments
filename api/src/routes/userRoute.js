const { Router } = require('express');
const { getAllUsers, postUser, putUser, getUserById, deleteUser, assignAdminRole } = require('../controllers/userController');
const {validateUserInput} = require('../middleware/userMiddleware');
//const {authenticateUser} = require("../middleware/authMiddleware");

const router = Router();

router.get('/', getAllUsers); 
router.get('/:id', getUserById); 
router.post('/', validateUserInput, postUser);
router.put('/:id', validateUserInput, putUser); 
router.delete('/:id', deleteUser); 
router.put('/:id/admin', assignAdminRole);

module.exports = router;
