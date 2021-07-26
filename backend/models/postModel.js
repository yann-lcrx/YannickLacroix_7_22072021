const database = require("./database");

/**
 * @typedef {Object} postResponse
 * @property {Number} id
 * @property {Number} id_user
 * @property {String} content
 * @property {String} title
 */

/**
 * [getAllPosts, getOnePost description]
 * @return  {postResponse}       [return description]
 */

module.exports.getAllPosts = async function(){
    const answer = await database.getData("SELECT * FROM post");
    return answer;
}

module.exports.getOnePost = async function(){
    const answer = await database.getOne("SELECT * FROM post WHERE id = ?", [id]);
    return answer;
}

/**
 * [createPost description]
 *
 * @param   {[Number]}  id       [id description]
 * @param   {[Number]}  id_user  [id_user description]
 * @param   {[String]}  content  [content description]
 * @param   {[String]}  title    [title description]
 *
 * @return  {[postResponse]}           [return description]
 */
module.exports.createPost = async function(id, id_user, content, title) {
    const request = await database.postData("INSERT INTO post VALUES (?,?,?,?)", [id, id_user, content, title])
    return request;
}