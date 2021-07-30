const auth        = require('../middleware/auth');
const postCtrl    = require('../controllers/postCtrl');
const router      = require('express').Router();

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
router.delete('/:id', auth, postCtrl.deletePostCtrl);

module.exports = router;