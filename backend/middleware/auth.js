const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.DB_TOKENENCRYPTIONKEY);
  const id_user = decodedToken.id_user;
  const role = decodedToken.role;
  if (role == "user") {
    try {
      if (req.body.id_user && req.body.id_user !== id_user) {
        throw 'Invalid user ID';
      }
      //Vérification de l'ID utilisateur pour la suppression de compte
      if (req.body.id && req.body.id !== id_user) {
        throw 'Invalid user ID';
      }
      next();
    }
    catch {
      res.status(401).json({
        error: new Error('Requête invalide !')
      });
    }
  } else {
    next();
  }
};