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
    //regarder ce qui ce passe quand il ne trouve rien
    //convertir en chaine le role
    answer.role = answer.role === 1 ? "admin" : "user";
    return answer;
}