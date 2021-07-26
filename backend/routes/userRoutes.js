const express = require('express');

const router = express.Router();
//auth

const userCtrl = require('../controllers/userCtrl');

router.post('/signup', userCtrl.signup)
router.get('/login', userCtrl.login)

module.exports = router;