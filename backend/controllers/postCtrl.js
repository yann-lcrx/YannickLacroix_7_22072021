const postModel = require('../models/postModel.js');

exports.getAllPostsCtrl = (req, res, next) => {
    postModel.getAllPosts()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }))
}

exports.getOnePostCtrl = (req, res, next) => {
    postModel.getOnePost({ _id: req.params.id })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json({ error }))
}

exports.createPostCtrl = (req, res, next) => {
    postModel.createPost()
        .then(() => res.status(201).json({ message: 'Message publié !'}))
        .catch(error => res.status(400).json({ error }))
}