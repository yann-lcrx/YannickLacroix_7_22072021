const User    = require("../models/userModel.js");
const bcrypt  = require("bcrypt");
const jwt     = require("jsonwebtoken");

exports.loginCtrl = async (req, res, next) => {
    try {
        const user = await User.login(req.body.name, req.body.password);
        if (! await bcrypt.compare(req.body.password, user.password)){
            throw({status:401, msg:"Mot de passe incorrect !"});
        }
        res.status(200).json({
          id_user   : user.id,
          token     : jwt.sign({ id_user: user.id, role: user.role }, process.env.DB_TOKENENCRYPTIONKEY, {
            expiresIn: "24h",
          }),
        });
    }
    catch(err){
        res.status(err.status).json({ error: err.msg });
    }
};

exports.signupCtrl = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      User.signup(req.body.name, hash, req.body.email)
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(404).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.createAdminCtrl = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      User.createAdmin(req.body.name, hash, req.body.email)
        .then(() => res.status(201).json({ message: "Utilisateur créé ! Privilèges administrateurs accordés." }))
        .catch((error) => res.status(404).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteUserCtrl = (req, res, next) => {
  User.deleteUser(req.body.id)
    .then(() =>
      res.status(201).json({ message: "Le compte a bien été supprimé." })
    )
    .catch((error) => res.status(404).json({ error }));
};
