const express = require('express');

const router = express.Router();
//auth

const userCtrl = require('../controllers/userCtrl');

router.post('/signup', userCtrl.signupCtrl);
router.post('/login', userCtrl.loginCtrl);
router.delete('/:id', userCtrl.deleteUserCtrl);

module.exports = router;