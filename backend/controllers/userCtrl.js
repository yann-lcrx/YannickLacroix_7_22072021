const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel.js');

exports.loginCtrl = (req, res, next) => {
    User.login(req.body.name, req.body.password)
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: "Utilisateur non trouvé !" });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: "Mot de passe incorrect !"});
                    }
                    res.status(200).json({
                        id_user: user.id,
                        token: jwt.sign(
                            { id_user: user.id },
                            process.env.DB_TOKENENCRYPTIONKEY,
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
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
    User.deleteUser(req.body.id)
        .then(() => res.status(201).json({ message: 'Votre compte a bien été supprimé.'}))
        .catch(error => res.status(404).json({ error }));
}