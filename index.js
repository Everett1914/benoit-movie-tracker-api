const express = require("express");

const app = express();
const db = require('./api')
let port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("benoit-movie-tracker-api test");
});

app.get('/shows', db.getAllShows);

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`);
});
