const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');
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
router.post('/', auth, postCtrl.createPostCtrl);
router.get('/from/:id/:quantity', auth, postCtrl.getAllPostsCtrl);
router.get('/:id', auth, postCtrl.getOnePostCtrl);

module.exports = router;