const database = require("./database");

/**
 * @typedef {Object} replyResponse
 * @property {Number} id
 * @property {Number} id_user
 * @property {Number} id_post
 * @property {String} content
 */

/**
 * Selects all replies for a given post
 *
 * @param   {Number}  id_post  
 *
 * @return  {replyResponse}           
 */
module.exports.getReplies = async function(id_post){
    const answer = await database.getData("SELECT * FROM reply WHERE id_post = ?", [id_post]);
    return answer;
}

/**
 * Creates new reply
 *
 * @param   {Number}  id_user  
 * @param   {Number}  id_post  
 * @param   {String}  content  
 *
 * @return  {String}
 */
module.exports.createReply = async function(id_user, id_post, content) {
    const request = await database.getData("INSERT INTO reply (id_user, id_post, content) VALUES (?, ?, ?)", [id_user, id_post, content])
    return request;
}

/**
 * Deletes a reply if it exists
 *
 * @param   {Number}  id       
 * @param   {Number}  id_user  
 *
 */
module.exports.deleteReply = async function(id, id_user) {
    const replyExists = await database.getOne("SELECT * FROM reply WHERE id = ? AND id_user = ?", [id, id_user])
    if (!replyExists) {
        throw error;
    }
    await database.getData("DELETE FROM reply WHERE id = ? AND id_user = ?", [id, id_user])
}

module.exports.getMatchingUser = async function (id_user) {
    let response = await database.getData("SELECT name AS author FROM user WHERE id = ?", [id_user]);
    if (!response) {
        throw ({ status: 400, msg:"Souci dans la requête de user"})
    }
    return response;
}