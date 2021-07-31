const User    = require("../models/userModel.js");
const bcrypt  = require("bcrypt");
const jwt     = require("jsonwebtoken");
const validator = require("validator");

exports.loginCtrl = async (req, res, next) => {
    try {
        if (req.body.name == null || req.body.password == null) {
          throw({status:401, msg:"Veuillez rentrer un nom d'utilisateur et un mot de passe."})
        }
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

exports.signupCtrl = async (req, res, next) => {
  try {
    const emailIsValid = await validator.isEmail(req.body.email);
    if (!emailIsValid) {
      throw({ status: 401, msg:"Veuillez rentrer une adresse mail valide."})
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    await User.signup(req.body.name, hash, req.body.email);
    res.status(201).json({ message: "Utilisateur créé !" })
  } catch(err) {
    res.status(err.status).json({ error: err.msg })
  }
}

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
