const database = require("./database");

/**
 * @typedef {Object} replyResponse
 * @property {Number} id
 * @property {Number} id_user
 * @property {Number} id_post
 * @property {String} content
 */

/**
 * [getAllReplies, getOneReply, postReply description]
 * @return  {replyResponse}       [return description]
 */

module.exports.getAllReplies = async function(){
    const answer = await database.getData("SELECT * FROM reply");
    //regarder ce qui se passe quand il ne trouve rien
    return answer;
}

module.exports.getOneReply = async function(){
    const answer = await database.getData("SELECT * FROM reply WHERE id = ?");
    return answer;
}


/**
 * [postReply description]
 *
 * @param   {[Number]}  id       [id description]
 * @param   {[Number]}  id_user  [id_user description]
 * @param   {[Number]}  id_post  [id_post description]
 * @param   {[String]}  content  [content description]
 *
 * @return  {[replyResponse]}           [return description]
 */
module.exports.postReply = async function(id, id_user, id_post, content) {
    const request = await database.postData("INSERT INTO reply VALUES (?,?,?,?)", [id, id_user, id_post, content])
    return request;
}