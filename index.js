const express = require("express");
const cors = require("cors");
const { pool } = require("./config");

const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("benoit-movie-tracker-api");
});

app.get("/players", (req, res) => {
    res.send(importData);
});

const getShows = (request, response) => {
    pool.query('SELECT * FROM shows', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

app
    .route('/shows')
    .get(getShows)

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`);
});