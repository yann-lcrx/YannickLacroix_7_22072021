const express = require('express');

const router = express.Router();

const replyCtrl = require('../controllers/replyCtrl');

router.post('/', userCtrl.createReply)
router.get('/', userCtrl.getComments)

module.exports = router;