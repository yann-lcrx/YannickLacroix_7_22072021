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
    const answer = await database.getOne(`SELECT * FROM post WHERE id = ${id}`);
    return answer;
}

/**
 * [createPost description]
 *
 * @param   {Object}  postdata
 * @param   {Number}  postdata.id_user  [id_user description]
 * @param   {String}  postdata.content  [content description]
 * @param   {String}  postdata.title    [title description]
 *
 * @return  {postResponse}           [return description]
 */
 module.exports.createPost = async function(postdata) {
    const request = await database.postData(`INSERT INTO post VALUES (${postdata.id_user}, '${postdata.content}', '${postdata.title}')`)
    return request;
}