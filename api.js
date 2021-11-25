require('dotenv').config()
const Pool = require('pg').Pool;
const pool = new Pool({
  user:process.env.DB_USER,
  host:process.env.DB_HOST,
  database:process.env.DB_DATABASE,
  password:process.env.DB_PASSWORD,
  port:process.env.DB_PORT,
  ssl: { rejectUnauthorized:false }
});

const getAllShows = async (request, response) => {
    pool.query('SELECT * FROM shows', (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    })
};

const addShow = async (request, response) => {

  const { name, genre, source, cost, type } = (request.body);

  pool.query('INSERT INTO shows (name, genre, source, cost, type) VALUES ($1, $2, $3, $4, $5)', [name, genre, source, cost, type], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(201).send('A new show was added to the db');
  })
};

module.exports = {
    getAllShows,
    addShow
};