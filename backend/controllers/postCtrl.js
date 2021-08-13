const Post = require('../models/postModel.js');

exports.getAllPostsCtrl = async (req, res, next) => {
    try {
        const posts = await Post.getAllPosts(req.params.id, req.params.quantity);
        if (!posts) {
            throw({status:400, msg:"Erreur de récupération des messages"})
        };
        for (let post of posts) {
            const author = JSON.stringify(await Post.getMatchingUser(post.id_user));
            const length = author.length;
            post.author = author.substr(12, (length - 15))
        }
        res.status(200).json({posts});
        }
    catch(err) {
        res.status(err.status).json({ error: err.msg })
    }
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
        .catch(error => res.status(404).json({ error: "Ce message n'existe pas. Veuillez modifier votre requête et réessayer." }))
}