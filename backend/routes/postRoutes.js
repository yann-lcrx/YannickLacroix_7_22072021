const express = require('express');

const router = express.Router();
//auth

const postCtrl = require('../controllers/postCtrl');

/**
 * [createPostCtrl description]
 *
 * @openapi
 * /api/posts/:
 * get:
 * description:
 * responses:
 * 200:
 * description:
 */
router.post('/', postCtrl.createPostCtrl);
router.get('/from/:id/:quantity', postCtrl.getAllPostsCtrl);
router.get('/:id', postCtrl.getOnePostCtrl);

module.exports = router;