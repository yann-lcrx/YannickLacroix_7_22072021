const database = require("./database");

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
    const answer = await database.getOne("SELECT id, role FROM user WHERE user = ? AND password = ?", [username, pwd]);
    //regarder ce qui se passe quand il ne trouve rien
    //convertir en chaine le role
    answer.role = answer.role === 1 ? "admin" : "user";
    return answer;
}

/**
 * [signup description]
 *
 * @param   {Number}  id        [id description]
 * @param   {String}  username  [username description]
 * @param   {String}  pwd       [pwd description]
 * @param   {Number}  role      [role description]
 * @param   {String}  email     [email description]
 *
 * @return  {userResponse}            [return description]
 */
module.exports.signup = async function(username, pwd, email){
    const answer = await database.getOne("INSERT INTO user (name, password, email) VALUES(?, ?, ?)", [username, pwd, email]);
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
    const answer = await database.getOne("DELETE FROM user WHERE id = ?", [id])
    return answer;
}