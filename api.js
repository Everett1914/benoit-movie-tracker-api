require('dotenv').config()
const Pool = require('pg').Pool;
const pool = new Pool({
  user:'cqdzknyukdxjih',
  host:'ec2-3-228-134-188.compute-1.amazonaws.com',
  database:'dcr488381q6u5b',
  password:'8bb9d700188814f90f41e9b3a40a0a46d9224e46c5aeb442289c1d7eb046b395',
  port:5432,
  ssl: { rejectUnauthorized:false }
})

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