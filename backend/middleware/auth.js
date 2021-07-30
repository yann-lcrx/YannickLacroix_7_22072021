const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.DB_TOKENENCRYPTIONKEY);
    const id_user = decodedToken.id_user;
    if (req.body.id_user && req.body.id_user !== id_user) {
      throw 'Invalid user ID';
    } else if (req.body.id && req.body.id !== id_user) {
      throw 'Invalid user ID';
    }
    else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Requête invalide !')
    });
  }
};