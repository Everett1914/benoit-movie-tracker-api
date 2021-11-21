require('dotenv').config()
const Pool = require('pg').Pool;
const pool = new Pool({
  user:process.env.DB_USER,
  host:process.env.DB_HOST,
  database:process.env.DB_DATABASE,
  password:process.env.DB_PASSWORD,
  port:process.env.DB_PORT,
  ssl:process.env.DB_SSL
  //ssl: { rejectUnauthorized:false }
});

const getAllShows = async (request, response) => {
    pool.query('SELECT * FROM shows', (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    })
};

module.exports = {
    getAllShows
};