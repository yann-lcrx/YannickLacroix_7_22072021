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
 * [login description]
 *
 * @param   {String}  username  [username description]
 * @param   {String}  pwd       [pwd description]
 *
 * @return  {loginAnswer}       [return description]
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
 * [signup description]
 *
 * @param   {String}  username  [username description]
 * @param   {String}  pwd       user password
 * @param   {String}  email     [email description]
 *
 * @return  {String}            confirmation message
 */
module.exports.signup = async function(username, pwd, email){
    const answer = await database.getOne("INSERT INTO user (name, password, email, role) VALUES(?, ?, ?, 0)", [sanitize(username, usernameBlacklist), pwd, email]);
    return answer;
}

/**
 * [createAdmin description]
 *
 * @param   {String}  username  [username description]
 * @param   {String}  pwd       [pwd description]
 * @param   {String}  email     [email description]
 *
 * @return  {String}            confirmation message
 */
module.exports.createAdmin = async function(username, pwd, email){
    const answer = await database.getOne("INSERT INTO user (name, password, email, role) VALUES(?, ?, ?, 1)", [(username, usernameBlacklist), pwd, email]);
    return answer;
}

/**
 * [deleteUser description]
 *
 * @param   {Number}  id  [id description]
 *
 * @return  {String}      [return description]
 */
module.exports.deleteUser = async function(id){
    const userExists = await database.getOne("SELECT * FROM user WHERE id = ?", [id])
    if (!userExists) {
        throw error;
    }
    await database.getOne("DELETE FROM user WHERE id = ?", [id])
}