const express = require("express");
var cors = require('cors');

const app = express();
const db = require('./api')
let port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("benoit-movie-tracker-api");
});

app.get('/shows', db.getAllShows);
app.post('/addShow', db.addShow);
app.delete('/deleteShow', db.deleteShow);

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`);
});
