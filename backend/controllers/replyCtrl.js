const Reply = require('../models/replyModel.js');

exports.getReplies = (req, res, next) => {
    Reply.getReplies()
        .then(replies => res.status(200).json(replies))
        .catch(error => res.status(400).json({ error }))
}

exports.getOneReply = (req, res, next) => {
    Reply.getOneReply({ _id: req.params.id })
        .then(reply => res.status(200).json(reply))
        .catch(error => res.status(404).json({ error }))
}

exports.createReply = (req, res, next) => {
    Reply.createReply()
        .then(() => res.status(201).json({ message: 'Message publié !'}))
        .catch(error => res.status(400).json({ error }))
}