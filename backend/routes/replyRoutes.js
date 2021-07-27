const express = require('express');

const router = express.Router();
//auth

const replyCtrl = require('../controllers/replyCtrl');

router.post('/', replyCtrl.createReplyCtrl);
router.get('/', replyCtrl.getRepliesCtrl);

module.exports = router;