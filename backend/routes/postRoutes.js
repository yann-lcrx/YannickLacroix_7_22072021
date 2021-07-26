const express = require('express');

const router = express.Router();
//auth

const postCtrl = require('../controllers/postCtrl');

router.post('/', postCtrl.createPostCtrl);
router.get('/', postCtrl.getAllPostsCtrl);
router.get('/:id', postCtrl.getOnePostCtrl);

module.exports = router;