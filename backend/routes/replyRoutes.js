const auth        = require('../middleware/auth');
const replyCtrl   = require('../controllers/replyCtrl');
const router      = require('express').Router();

router.post('/', auth, replyCtrl.createReplyCtrl);
router.get('/:id_post', auth, replyCtrl.getRepliesCtrl);
router.delete('/:id', auth, replyCtrl.deleteReplyCtrl);

module.exports = router;