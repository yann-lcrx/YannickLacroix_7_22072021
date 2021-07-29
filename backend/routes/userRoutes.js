const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');
const userCtrl = require('../controllers/userCtrl');

router.post('/signup', userCtrl.signupCtrl);
router.post('/login', userCtrl.loginCtrl);
router.delete('/:id', auth, userCtrl.deleteUserCtrl);

module.exports = router;