const User = require('../models/userModel.js');

exports.login = (req, res, next) => {
    User.login()
        .then(() => res.status(200).json())
        .catch(error => res.status(400).json({ error }))
}

exports.signup = (req, res, next) => {
    User.signup()
        .then(() => res.status(201).json({ message: 'Utilisateur crée !'}))
        .catch(error => res.status(404).json({ error }))
}