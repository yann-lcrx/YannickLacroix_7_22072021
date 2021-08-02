const database = require("./database");
const validator = require("validator");

const usernameBlacklist = '=@;';
function sanitize(stringsToSanitize, blacklist) {
        const sanitizedString = validator.blacklist(stringsToSanitize, blacklist);
        return sanitizedString;
}

/**
 * @typedef {Object} loginAnswer
 * @property {Number} id
 * @property {String} role
 */

/**
 * Logs user in if username and password match with database
 *
 * @param   {String}  username  
 * @param   {String}  pwd       
 *
 * @return  {loginAnswer}       
 */
module.exports.login = async function(username, pwd){
    const answer = await database.getOne("SELECT name, password, id, role FROM user WHERE name = ?", [username, pwd]);
    if (!answer) {
        throw({status:404, msg:"Utilisateur non trouvé !"})
    }
    answer.role = answer.role === 1 ? "admin" : "user";
    return answer;
}

/**
 * Signs user up if email and username are unique
 *
 * @param   {String}  username  
 * @param   {String}  pwd       user password
 * @param   {String}  email     
 * @param   {Number}  role      0 for user, 1 for admin
 *
 * @return  {String}            confirmation message
 */
module.exports.signup = async function(username, pwd, email, role){
    const createdEmailIsUsed = await database.getOne("SELECT email FROM user WHERE email = ?", [email]);
    if (createdEmailIsUsed) {
        throw({status: 401, msg:"L'adresse email renseignée est déjà associée à un compte."})
    }
    const createdUserExists = await database.getOne("SELECT name FROM user WHERE name = ?", [username]);
    if (createdUserExists) {
        throw({status: 401, msg:"Ce nom d'utilisateur est déjà utilisé."})
    }
    const answer = await database.getOne("INSERT INTO user (name, password, email, role) VALUES(?, ?, ?, ?)", [sanitize(username, usernameBlacklist), pwd, email, role]);
    return answer;
}

/**
 * Deletes user if it exists
 *
 * @param   {Number}  id
 *
 */
module.exports.deleteUser = async function(id){
    const deletedUserExists = await database.getOne("SELECT * FROM user WHERE id = ?", [id])
    if (!deletedUserExists) {
        throw error;
    }
    await database.getOne("DELETE FROM user WHERE id = ?", [id])
}