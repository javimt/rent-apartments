
const { Router } = require('express');
const { getAllUsers, postUser, putUser, getUserById, deleteUser } = require('../controllers/userController');
const userMiddleware = require('../middleware/userMiddleware');

const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
};

const router = Router();

router.use(userMiddleware.authenticateUser);
router.use(errorHandler); 

router.get('/', getAllUsers);
router.post('/', userMiddleware.validateUserInput, postUser);
router.put('/:id', userMiddleware.validateUserInput, putUser);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);

module.exports = router;