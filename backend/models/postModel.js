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

module.exports.getOnePost = async function(id){
    const answer = await database.getOne("SELECT * FROM post WHERE id = ?", [id]);
    return answer;
}

/**
 * [createPost description]
 *
 * @param   {Object}  postdata
 * @param   {Number}  id_user  [id_user description]
 * @param   {String}  content  [content description]
 * @param   {String}  title    [title description]
 *
 * @return  {postResponse}           [return description]
 */
module.exports.createPost = async function(id_user, content, title) {
    const request = await database.getData("INSERT INTO post (id_user, content, title) VALUES (?, ?, ?)", [id_user, content, title])
    return request;
}