const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    allowPublicKeyRetrieval: true,
    connectionLimit: 5});

async function request(sql, data=[]) {
  let conn;
  try {

	conn = await pool.getConnection();
	const rows = await conn.query(sql, data);
  return rows;

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

module.exports.request = request;
module.exports.getData = getData;
module.exports.getOne = getOne;