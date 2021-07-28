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

module.exports.getReplies = async function(id_post){
    const answer = await database.getData(`SELECT * FROM reply WHERE id_post = ${id_post}`);
    return answer;
}

/**
 * [postReply description]
 *
 * @param   {Number}  id_user  [id_user description]
 * @param   {Number}  id_post  [id_post description]
 * @param   {String}  content  [content description]
 *
 * @return  {replyResponse}           [return description]
 */
module.exports.createReply = async function(id_user, id_post, content) {
    const request = await database.postData(`INSERT INTO reply VALUES (${id_post},${id_user},'${content}')`)
    return request;
}