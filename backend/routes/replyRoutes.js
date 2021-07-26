const express = require('express');

const router = express.Router();
//auth

const replyCtrl = require('../controllers/replyCtrl');

router.post('/', replyCtrl.createReply);
router.get('/', replyCtrl.getReplies);

module.exports = router;