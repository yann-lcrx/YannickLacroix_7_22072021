const Reply = require('../models/replyModel.js');

exports.getRepliesCtrl = (req, res, next) => {
    Reply.getReplies(req.query.id_post)
        .then(replies => res.status(200).json(replies))
        .catch(error => res.status(400).json({ error }))
}

exports.createReplyCtrl = (req, res, next) => {
    Reply.createReply(req.query.id, req.query.id_user, req.query.id_post, req.query.content)
        .then(() => res.status(201).json({ message: 'Commentaire publié !'}))
        .catch(error => res.status(400).json({ error }))
}