const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    connectionLimit: 5});

async function request(sql, data=[]) {
  let conn;
  try {

	conn = await pool.getConnection();
	const rows = await conn.query("SELECT 1 as val");
	// rows: [ {val: 1} ], meta: ...

	// const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	// res: { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
	throw err;
  } finally {
	if (conn) conn.release(); //release to pool
  }
}

async function getData(sql, data=[]){
    const answer = await request(sql, data);
    delete answer.meta;
    return answer;
}

async function getOne(sql, data=[]){
    const answer = await getData(sql, data);
    return answer[0];
}

async function postData(sql, data=[]) {
    const answer = await request(sql, data);
    delete answer.meta;
    return answer;
}

async function deleteData(sql) {
    const answer = await request(sql);
}

module.exports.request = request;
module.exports.getData = getData;
module.exports.getOne = getOne;
module.exports.postData = postData;