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
    //regarder ce qui se passe quand il ne trouve rien
    return answer;
}

module.exports.getOnePost = async function(){
    const answer = await database.getData("SELECT * FROM post WHERE id = ?");
    return answer;
}

/**
 * createPost description
 * @param {Number} id 
 * @param {Number} id_user 
 * @param {String} content 
 * @param {String} title 
 * 
 * @return {postResponse}
 */
module.exports.createPost = async function(id, id_user, content, title) {
    const request = await database.postData("INSERT INTO post VALUES (?,?,?,?)", [id, id_user, content, title])
    return request;
}