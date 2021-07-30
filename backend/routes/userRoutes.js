const auth        = require('../middleware/auth');
const router      = require('express').Router();
const userCtrl    = require('../controllers/userCtrl');

router.post('/signup', userCtrl.signupCtrl);
router.post('/signup/admin', userCtrl.createAdminCtrl);
router.post('/login', userCtrl.loginCtrl);
router.delete('/', auth, userCtrl.deleteUserCtrl);

module.exports = router;