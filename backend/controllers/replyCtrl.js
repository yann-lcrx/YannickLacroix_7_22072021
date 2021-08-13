const Reply = require('../models/replyModel.js');

exports.getRepliesCtrl = async (req, res, next) => {
    try {
        const replies = await Reply.getReplies(req.params.id_post);
        if (!replies) {
            throw({status:400, msg:"Erreur lors de la récupération des commentaires"})
        };
        for (let reply of replies) {
            const author = JSON.stringify(await Reply.getMatchingUser(reply.id_user));
            const length = author.length;
            reply.author = author.substr(12, (length - 15))
        }
        res.status(200).json({replies});
        }
    catch(err) {
        res.status(err.status).json({ error: err.msg })
    }
}

/*exports.getRepliesCtrl = (req, res, next) => {
    Reply.getReplies(req.params.id_reply)
        .then(replies => res.status(200).json(replies))
        .catch(error => res.status(400).json({ error }))
}*/

exports.createReplyCtrl = (req, res, next) => {
    Reply.createReply(req.body.id_user, req.body.id_reply, req.body.content)
        .then(() => res.status(201).json({ message: 'Commentaire publié !'}))
        .catch(error => res.status(400).json({ error }))
}

exports.deleteReplyCtrl = (req, res, next) => {
    Reply.deleteReply(req.params.id, req.body.id_user)
        .then(() => res.status(201).json({ message: 'Message supprimé !'}))
        .catch(error => res.status(404).json({ error: "Ce commentaire n'existe pas. Veuillez modifier votre requête et réessayer." }))
}