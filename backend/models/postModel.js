const database = require("./database");

/**
 * @typedef {Object} postResponse
 * @property {Number} id
 * @property {Number} id_user
 * @property {String} content
 * @property {String} title
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
    const answer = await database.getData("SELECT * FROM post WHERE id >= ? LIMIT ?", [id, parseFloat(limit)]);
    return answer;
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
    const postExists = await database.getOne("SELECT * FROM post WHERE id = ? AND id_user = ?", [id, id_user])
    if (!postExists) {
        throw error;
    }
    await database.getData("DELETE FROM post WHERE id = ? AND id_user = ?", [id, id_user])
}