const database = require("./database");

/**
 * @typedef {Object} postResponse
 * @property {Number} id
 * @property {Number} id_user
 * @property {String} content
 * @property {String} title
 * @property {String} author
 */

/**
 * Returns posts on homepage
 *
 * @param   {Number}  id     
 * @param   {String}  limit  
 *
 * @return  {postResponse}         
 */
module.exports.getAllPosts = async function(id, limit){
    const answer = await database.getData("SELECT * FROM post WHERE id >= ? ORDER BY id DESC LIMIT ?", [id, parseFloat(limit)]);
    return answer;
}

module.exports.getMatchingUser = async function (id_user) {
    let response = await database.getData("SELECT name AS author FROM user WHERE id = ?", [id_user]);
    if (!response) {
        throw ({ status: 400, msg:"Souci dans la requête de user"})
    }
    return response;
}

/**
 * Returns selected post
 *
 * @param   {Number}  id  
 *
 * @return  {postResponse}      
 */
module.exports.getOnePost = async function(id){
    const answer = await database.getOne("SELECT * FROM post WHERE id = ?", [id]);
    return answer;
}

/**
 * Creates new post
 *
 * @param   {Number}  id_user  
 * @param   {String}  content  
 * @param   {String}  title    
 *
 * @return  {String}           
 */
module.exports.createPost = async function(id_user, content, title) {
    const newPost = await database.getData("INSERT INTO post (id_user, content, title) VALUES (?, ?, ?)", [id_user, content, title])
    return newPost;
}

/**
 * Deletes a post if it exists
 *
 * @param   {Number}  id       
 * @param   {Number}  id_user  
 */
module.exports.deletePost = async function(id, id_user) {
    const postExists = await database.getOne("SELECT * FROM post WHERE id = ?", [id])
    if (!postExists) {
        throw error;
    }
    await database.getData("DELETE FROM post WHERE id = ?", [id])
}