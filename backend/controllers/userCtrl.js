const bcrypt = require('bcrypt');

const User = require('../models/userModel.js');

exports.loginCtrl = (req, res, next) => {
    User.login(req.body.name, req.body.password)
        .then(() => res.status(200).json())
        .catch(error => res.status(400).json({ error }));
}

exports.signupCtrl = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            User.signup(req.body.name, hash, req.body.email)
            .then(() => res.status(201).json({ message: 'Utilisateur créé !'}))
            .catch(error => res.status(404).json({ error }));
        })
    .catch(error => res.status(500).json({ error }));
}

exports.deleteUserCtrl = (req, res, next) => {
    User.deleteUser(req.params.id)
        .then(() => res.status(201).json({ message: 'Votre compte a bien été supprimé.'}))
        .catch(error => res.status(404).json({ error }));
}