const express = require('express');

const router = express.Router();

const postCtrl = require('../controllers/postCtrl');

router.post('/', postCtrl.createPost);
router.get('/from/:id/:quantity', postCtrl.getAllPosts);
router.get('/:id', postCtrl.getOnePost);

module.exports = router;