const Reply = require('../models/replyModel.js');

exports.getRepliesCtrl = (req, res, next) => {
    Reply.getReplies(req.params.id_post)
        .then(replies => res.status(200).json(replies))
        .catch(error => res.status(400).json({ error }))
}

exports.createReplyCtrl = (req, res, next) => {
    Reply.createReply(req.body.id, req.body.id_user, req.body.id_post, req.body.content)
        .then(() => res.status(201).json({ message: 'Commentaire publié !'}))
        .catch(error => res.status(400).json({ error }))
}