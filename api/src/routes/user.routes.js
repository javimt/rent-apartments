const { Router } = require('express');
const { getAllUsers, getByEmail, putUser, loginOrRegister, deleteUser, /* sendEmails */ } = require('../controllers/user.controller');

const router = Router();

router.get('/', getAllUsers); 
router.get('/email', getByEmail);
router.post('/', loginOrRegister); 
//router.post('/emails', sendEmails);
router.put('/email', putUser);
router.delete('/email', deleteUser); 

module.exports = router;
 