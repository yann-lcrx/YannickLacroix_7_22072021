const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');
const replyCtrl = require('../controllers/replyCtrl');

router.post('/', auth, replyCtrl.createReplyCtrl);
router.get('/:id_post', auth, replyCtrl.getRepliesCtrl);

module.exports = router;