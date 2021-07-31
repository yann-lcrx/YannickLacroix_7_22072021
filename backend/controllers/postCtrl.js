const Post = require('../models/postModel.js');

exports.getAllPostsCtrl = (req, res, next) => {
    Post.getAllPosts()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }))
}

exports.getOnePostCtrl = (req, res, next) => {
    Post.getOnePost(req.params.id)
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json({ error }))
}

exports.createPostCtrl = (req, res, next) => {
    Post.createPost(req.body.id_user, req.body.content, req.body.title)
        .then(() => res.status(201).json({ message: 'Message publié !'}))
        .catch(error => res.status(400).json({ error }))
}

exports.deletePostCtrl = (req, res, next) => {
    Post.deletePost(req.params.id, req.body.id_user)
        .then(() => res.status(201).json({ message: 'Message supprimé !'}))
        .catch(error => res.status(400).json({ error }))
}