const { Router } = require('express');
const { getAllUsers, postUser, putUser, getUserById, deleteUser } = require('../controllers/userController');
const userMiddleware = require('../middleware/userMiddleware');

const router = Router();

router.get('/', userMiddleware.authenticateUser, getAllUsers); // Proteger ruta con autenticación
router.post('/', userMiddleware.validateUserInput, postUser);
router.put('/:id', userMiddleware.authenticateUser, userMiddleware.validateUserInput, putUser); // Proteger ruta con autenticación
router.get('/:id', userMiddleware.authenticateUser, getUserById); // Proteger ruta con autenticación
router.delete('/:id', userMiddleware.authenticateUser, deleteUser); // Proteger ruta con autenticación

module.exports = router;